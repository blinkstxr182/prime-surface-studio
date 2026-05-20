import { NextRequest, NextResponse } from "next/server";

const RESEND_API_KEY = process.env.RESEND_API_KEY;
const RECIPIENT = "info@primesurfacestudio.com";

// Simple in-memory rate limit (resets on cold start)
const rateMap = new Map<string, number[]>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const window = 60_000; // 1 minute
  const maxRequests = 5;
  const times = (rateMap.get(ip) ?? []).filter((t) => now - t < window);
  if (times.length >= maxRequests) return true;
  rateMap.set(ip, [...times, now]);
  return false;
}

export async function POST(req: NextRequest) {
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0] ?? "unknown";

  if (isRateLimited(ip)) {
    return NextResponse.json({ error: "Too many requests" }, { status: 429 });
  }

  const body = await req.json();

  // Honeypot check
  if (body.honeypot) {
    return NextResponse.json({ ok: true }); // Silent success
  }

  const { name, email, phone, service, message, serviceType, notes, contactMethod, type, ...details } = body;

  const isQuote = type === "quote";
  const subject = isQuote
    ? `New Quote Request — ${serviceType ?? service} — Prime Surface Studio`
    : `New Contact Form Submission — ${service} — Prime Surface Studio`;

  const htmlBody = isQuote
    ? `
<h2>New Quote Request</h2>
<p><strong>Service:</strong> ${serviceType}</p>
<p><strong>Name:</strong> ${name}</p>
<p><strong>Email:</strong> ${email}</p>
<p><strong>Phone:</strong> ${phone}</p>
<p><strong>Preferred Contact:</strong> ${contactMethod ?? "Not specified"}</p>
${details.year ? `<p><strong>Vehicle:</strong> ${details.year} ${details.make} ${details.model}</p>` : ""}
${details.windows ? `<p><strong>Windows:</strong> ${details.windows}</p>` : ""}
${details.wrapType ? `<p><strong>Wrap Type:</strong> ${details.wrapType}</p>` : ""}
${details.wrapFinish ? `<p><strong>Finish:</strong> ${details.wrapFinish}</p>` : ""}
${details.sqft ? `<p><strong>Square Footage:</strong> ${details.sqft}</p>` : ""}
<p><strong>Notes:</strong> ${notes ?? "None"}</p>
`
    : `
<h2>New Contact Form Submission</h2>
<p><strong>Name:</strong> ${name}</p>
<p><strong>Email:</strong> ${email}</p>
<p><strong>Phone:</strong> ${phone}</p>
<p><strong>Service:</strong> ${service}</p>
<p><strong>Message:</strong> ${message}</p>
`;

  // If Resend API key available, send via Resend
  if (RESEND_API_KEY) {
    try {
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${RESEND_API_KEY}`,
        },
        body: JSON.stringify({
          from: "Prime Surface Studio Website <noreply@primesurfacestudio.com>",
          to: [RECIPIENT],
          reply_to: email,
          subject,
          html: htmlBody,
        }),
      });
      if (!res.ok) throw new Error(await res.text());
    } catch (err) {
      console.error("Resend error:", err);
      return NextResponse.json({ error: "Email send failed" }, { status: 500 });
    }
  } else {
    // Fallback: log to console in development
    console.log("[Contact Form Submission]", { subject, name, email, phone, service: service ?? serviceType });
  }

  return NextResponse.json({ ok: true });
}

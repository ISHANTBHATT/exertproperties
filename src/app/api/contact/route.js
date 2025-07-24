import nodemailer from "nodemailer";

// Read creds from environment
const { SMTP_USER, SMTP_PASS } = process.env;

const transporter = nodemailer.createTransport({
  host: "mail.exertproperties.com", // or correct SMTP host
  port: 465, // or 465 for SSL
  secure: true, // Use SSL
  auth: {
    user: SMTP_USER,
    pass: SMTP_PASS,
  },
  tls: {
    rejectUnauthorized: false, // disables strict TLS checks
  },
});

export async function POST(request) {
  try {
    const data = await request.json();
    const { firstName, lastName, email, phone, floor, units, title } = data;

    const mailOptions = {
      from: SMTP_USER,
      to: SMTP_USER,
      subject: `New Enquiry from ${firstName} ${lastName} Regarding ${title}`,
      //       text: `
      // You’ve received a new enquiry:

      // Name: ${firstName} ${lastName}
      // Email: ${email}
      // Phone: ${phone}
      // Destination: ${destination}
      // Degree: ${level}
      // Course: ${course}
      // Study Date: ${studyDate}
      // University: ${university || "N/A"}
      // Consent Given: ${consent ? "Yes" : "No"}
      //       `,
      html: `
        <h2>New enquiry received</h2>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Floor:</strong> ${floor || "N/A"}</p>
        <p><strong>Units:</strong> ${units || "N/A"}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("Nodemailer error:", err);
    return new Response(
      JSON.stringify({ success: false, error: "Failed to send email" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}

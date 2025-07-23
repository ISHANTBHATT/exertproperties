// import { NextResponse } from "next/server";
// import nodemailer from "nodemailer";

// const email = process.env.SMTP_USER;
// const pass = process.env.SMTP_PASS;

// const transporter = nodemailer.createTransport({
//   service: "gmail",
//   auth: {
//     user: email,
//     pass,
//   },
// });

// export async function POST(request) {
//   try {
//     const { userEmail, userName, phone, message, subject } =
//       await request.json();

//     await transporter.sendMail({
//       from: email,
//       to: process.env.ADMIN_EMAIL,
//       subject: `${subject}`,
//       html: `<p>Dear Admin,</p>
//       <p><strong>User Information:</strong></p>
//       <ul>
//       <li><strong>Name:</strong> ${userName}</li>
//       <li><strong>EMail:</strong> ${userEmail}</li>
//       <li><strong>Phone Number:</strong> ${phone}</li>
//       <li><strong>Message:</strong> ${message}</li>
//       </ul>`,
//     });
//     return NextResponse.json({ success: true });
//   } catch (error) {
//     console.error("Error sending email:", error);
//     return NextResponse.json(
//       { success: false, message: "Failed to send email" },
//       { status: 500 }
//     );
//   }
// }

// import nodemailer from "nodemailer";

// // Read creds from environment
// const { SMTP_USER, SMTP_PASS } = process.env;

// const transporter = nodemailer.createTransport({
//   service: "gmail",
//   auth: {
//     user: SMTP_USER,
//     pass: SMTP_PASS,
//   },
// });

// export async function POST(request) {
//   try {
//     const data = await request.json();
//     const { userName, userEmail, phone, message, subject } = data;

//     const mailOptions = {
//       from: SMTP_USER,
//       to: SMTP_USER,
//       subject: `${subject}`,
//       html: `
//         <h2>New enquiry received</h2>
//         <p><strong>Name:</strong> ${userName}</p>
//         <p><strong>Email:</strong> ${userEmail}</p>
//         <p><strong>Phone:</strong> ${phone}</p>
//         <p><strong>Message:</strong> ${message}</p>
//       `,
//     };

//     await transporter.sendMail(mailOptions);

//     return new Response(JSON.stringify({ success: true }), {
//       status: 200,
//       headers: { "Content-Type": "application/json" },
//     });
//   } catch (err) {
//     console.error("Nodemailer error:", err);
//     return new Response(
//       JSON.stringify({ success: false, error: "Failed to send email" }),
//       { status: 500, headers: { "Content-Type": "application/json" } }
//     );
//   }
// }

import nodemailer from "nodemailer";

// Read credentials from environment variables
const { SMTP_USER, SMTP_PASS } = process.env;

const transporter = nodemailer.createTransport({
  host: "exertproperties.com", // e.g., mail.yourdomain.com or smtp.yourdomain.com
  port: 465, // or 587 if not using SSL
  secure: true, // true for 465, false for 587
  auth: {
    user: SMTP_USER,
    pass: SMTP_PASS,
  },
});

export async function POST(request) {
  try {
    const data = await request.json();
    const { userName, userEmail, phone, message, subject } = data;

    const mailOptions = {
      from: SMTP_USER, // use sender's info
      to: SMTP_USER, // your own email to receive messages
      subject: `${subject}`,
      html: `
        <h2>New enquiry received</h2>
        <p><strong>Name:</strong> ${userName}</p>
        <p><strong>Email:</strong> ${userEmail}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong> ${message}</p>
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

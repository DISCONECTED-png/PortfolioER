import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());
const contactEmail = nodemailer.createTransport({
  service: "gmail",
  secure:"true",
  port:465,
  auth: {
    user: "anantmoti05@gmail.com",
    pass: process.env.EMAIL_PASS,
  },
});

contactEmail.verify((error) => {
  if (error) {
    console.error("Error verifying email transporter:", error);
  } else {
    console.log("Ready to send emails");
  }
});

// Contact Route
app.post("/contact", (req, res) => {
  const { firstName, lastName, email, message, phone } = req.body;
  const name = `${firstName} ${lastName}`;

  const mail = {
    from: email,
    to: "anantmoti05@gmail.com",
    subject: "Contact Form Submission - Portfolio",
    html: `
      <h3>Contact Form Submission</h3>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Message:</strong></p>
      <p>${message}</p>
    `,
  };

  contactEmail.sendMail(mail, (error) => {
    if (error) {
      console.error("Error sending email:", error);
      res.status(500).json({ code: 500, status: "Failed to send message" });
    } else {
      res.status(200).json({ code: 200, status: "Message sent successfully" });
    }
  });
});
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

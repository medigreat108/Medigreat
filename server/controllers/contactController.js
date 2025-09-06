const nodemailer = require("nodemailer");

const sendContactEmail = async (req, res) => {
  const { name, email, message } = req.body;
  if (!name || !email || !message) {
    return res.status(400).json({ error: "All fields are required." });
  }

  const emailRegex = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: "Invalid email address." });
  }

  try {
    // Configure transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.CONTACT_EMAIL, // your email
        pass: process.env.CONTACT_EMAIL_PASS, // your email password or app password
      },
    });

    // Email options
    const mailOptions = {
      from: email,
      to: process.env.CONTACT_EMAIL, // your email
      subject: `Contact Form Submission from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
      reply:email
    };

    await transporter.sendMail(mailOptions);

    // Send confirmation to user
    const userMailOptions = {
      from: process.env.CONTACT_EMAIL,
      to: email,
      subject: "Thank you for contacting Medigreate Pharma",
      text: `Hi ${name},\n\nThank you for reaching out! We have received your message and will get back to you soon.\n\nYour message:\n${message}\n\nBest regards,\nMedigreate Pharma Team`
    };
    await transporter.sendMail(userMailOptions);

    res.json({ success: true, message: "Message sent successfully!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to send message." });
  }
};

module.exports = sendContactEmail;

const express = require("express")
const cors = require("cors")
const bodyParser = require("body-parser")
const nodemailer = require("nodemailer")
const path = require("path") // Import the path module
require("dotenv").config()

const app = express()
const PORT = process.env.PORT || 5000

// Middleware
app.use(
  cors({
    origin:
      process.env.NODE_ENV === "production"
        ? ["https://your-frontend-domain.com"] // Replace with your actual frontend domain
        : ["http://localhost:3000"],
  }),
)
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// Create a route for the contact form
app.post("/api/contact", async (req, res) => {
  const { firstName, familyName, email, message } = req.body

  // Validate input
  if (!firstName || !familyName || !email || !message) {
    return res.status(400).json({
      success: false,
      message: "All fields are required",
    })
  }

  try {
    // Configure nodemailer with environment variables
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: Number.parseInt(process.env.EMAIL_PORT),
      secure: Number.parseInt(process.env.EMAIL_PORT) === 465, // true for 465, false for other ports
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    })

    // Email content
    const mailOptions = {
      from: `"Contact Form" <${process.env.EMAIL_USER}>`,
      to: "e.madrassati@gmail.com", // Your school email
      replyTo: email,
      subject: "New Contact Form Submission",
      text: `Name: ${firstName} ${familyName}\nEmail: ${email}\nMessage: ${message}`,
      html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${firstName} ${familyName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    }

    // Send the email
    await transporter.sendMail(mailOptions)

    return res.status(200).json({
      success: true,
      message: "Message sent successfully",
    })
  } catch (error) {
    console.error("Error sending message:", error)
    return res.status(500).json({
      success: false,
      message: "Error sending message",
    })
  }
})

// Add a health check endpoint
app.get("/api/health", (req, res) => {
  res.status(200).json({ status: "ok" })
})

// Simple test route
app.get("/api/test", (req, res) => {
  res.json({ message: "API is working!" })
})

// Serve static files in production
if (process.env.NODE_ENV === "production") {
  // If you want to serve frontend from the same server
  app.use(express.static("public"))

  // Handle SPA routing
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "public", "index.html"))
  })
}

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
}) 
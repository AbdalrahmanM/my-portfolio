// pages/api/send-email.js
import mail from '@sendgrid/mail';

export default async function handler(req, res) {
  try {
    // Check if the request method is POST
    if (req.method !== 'POST') {
      return res.status(405).json({ error: 'Method Not Allowed' });
    }

    // Parse the request body
    const body = JSON.parse(req.body);

    // Set your SendGrid API key from environment variables
    mail.setApiKey(process.env.SENDGRID_API_KEY);

    // Create the email message
    const message = `
      Name: ${body.name}\r\n
      Email: ${body.email}\r\n
      Message: ${body.message}\r\n
      Phone: ${body.phone}\r\n
      Subject: ${body.subject}\r\n
    `;

    const data = {
      to: 'abdodj18@gmail.com',
      from: 'hello@mudher.com',
      subject: 'New submitted message!',
      text: message,
      html: message.replace(/\r\n/g, '<br>'),
    };

    // Send the email using SendGrid
    await mail.send(data);

    // Respond with a success status
    res.status(200).json({ status: 'Ok' });
  } catch (error) {
    console.error('Error processing request:', error);

    // Respond with an error status and message
    res.status(500).json({ status: 'Error', error: 'Failed to process request' });
  }
}

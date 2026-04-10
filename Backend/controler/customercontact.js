import nodemailer from 'nodemailer';
import dotenv from 'dotenv';


dotenv.config({ path: './config/config.env' });
export const sendContactEmail = async (req, res) => {
            const { name, email, message } = req.body;
            if (!name || !email || !message) {
                        return res.status(400).json({ success: false, message: "All fields are Required" });
            }

            console.log('Received data:', req.body);
            console.log('GMAIL_USER:', process.env.GMAIL_USER);
            console.log('GMAIL_PASS exists:', !!process.env.GMAIL_PASSWORD);

            try {
                        const transporter = nodemailer.createTransport({
                                    service: 'gmail',
                                    auth: {
                                                user: process.env.GMAIL_USER,
                                                pass: process.env.GMAIL_PASSWORD
                                    }
                        });

                        await transporter.sendMail({
                                    from: `"${name}" <${email}>`,
                                    to: process.env.GMAIL_USER,
                                    subject: `New Contact Message from ${name}`,
                                    text: message
                        });

                        res.json({ success: true, message: "Message sent successfully!" });
            } catch (error) {
                        console.error('Nodemailer error:', error);
                        res.status(500).json({ success: false, message: "Failed to send message." });
            }

}
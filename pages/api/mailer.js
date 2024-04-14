import { sendMail } from '../../service/mailService';

const handler = async (req, res) => {
	try {
		if (req.method === 'POST') {
			const { name, email, message } = req.body;

			// Validate form data
			if (!name || !email || !message) {
				return res.status(400).json({ error: 'Please fill in all fields' });
			}

			// Send email
			await sendMail(
				'Contact Form Submission',
				'otrumbore@gmail.com',
				`
                Name: ${name}
                Email: ${email}
                Message: ${message}
            `
			);

			return res.status(200).json({ message: 'Email sent successfully' });
		} else {
			return res.status(405).json({ error: 'Method Not Allowed' });
		}
	} catch (error) {
		console.error('Error:', error);
		return res.status(500).json({ error: 'Internal Server Error' });
	}
};

export default handler;

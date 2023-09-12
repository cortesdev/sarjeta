import axios from 'axios';

export default async (req, res) => {
    const { email } = req.body;

    if (!email || !email.length) {
        return res.status(400).json({ error: 'Email is required' });
    }

    const API_SERVER = process.env.NEXT_CHIMP_API_SERVER;
    const API_KEY = process.env.NEXT_CHIMP_API_KEY;
    const AUDIENCE_ID = process.env.NEXT_CHIMP_AUDIENCE_ID;

    const url = `https://${API_SERVER}.api.mailchimp.com/3.0/lists/${AUDIENCE_ID}/members`;

    const data = {
        email_address: email,
        status: 'subscribed'
    };

    const options = {
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${API_KEY}`
        }
    };

    try {
        const response = await axios.post(url, data, options);
        if (response.status >= 400) {
            return res.status(400).json({
                error: `There was an error subscribing to the newsletter. Shoot me an email at ogbonnakell@gmail.com and I'll add you to the list.`
            });
        }
        return res.status(201).json({ message: 'success' });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: error.message });
    }
};

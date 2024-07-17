import axios from 'axios';

export default async function handler(req, res) {
  const { username, password } = req.body;
  if (req.method === 'POST') {
    const response = await axios.post('http://localhost:5000/login', { username, password });
    res.json(response.data);
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}

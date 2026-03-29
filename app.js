const express = require('express');
const app = express();

const PORT = 3000;

app.get('/', (req, res) => {
    res.send('🚀 DevOps CI/CD Project is Running Successfully!');
});

app.get('/health', (req, res) => {
    res.status(200).json({ status: 'UP' });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

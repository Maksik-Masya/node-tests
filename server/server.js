const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.status(404).send({
        error: 'Page not found.',
        name: 'Todo App v1.0'
    })
});

app.get('/users', (req, res) => {
    const users = [
        { name: 'Name1', age: 20 },
        { name: 'Name2', age: 21 },
        { name: 'Name3', age: 22 }
    ];
    res.status(200).send(users)
});

app.listen(3000, () => {
    console.log('Server is up on port 3000');
});

module.exports.app = app;
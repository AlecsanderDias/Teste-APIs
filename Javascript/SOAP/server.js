import express from 'express';
import xml from 'xml';

const app = express();

app.get('/', (req, res) => {
    const data = {
        person: [
            {age: 18},
            {name: "Joe"},
            {gender: "male"}
        ]
    };
    const xmlData = xml(data);
    res.type('application/xml');
    return res.send(xmlData);
});

export { app };
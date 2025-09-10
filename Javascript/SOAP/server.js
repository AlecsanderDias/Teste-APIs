import express from 'express';
import xml from 'xml';

const app = express();

app.get('/', (req, res) => {
    res.type('application/xml');
    const data = {
        person: [
            {name: "Joe"},
            {surname: "Smith"},
            {age: 18},
            {gender: "male"},
            {occupation:"student"},
        ]
    };
    const xmlData = xml(data);
    return res.send(xmlData);
});

export { app };
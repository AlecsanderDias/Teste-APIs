import express from 'express';

const app = express();

app.use(express.json());

app.get('/', (req,res) => {
    const data = [
        {
            name: "Joe",
            age: 18,
            gender: "male",
            occupation: "student",
        },
    ];
    return res.json(data);
});

export { app };
import express from 'express';

const app = express();

app.get('/', (_: any, res: any) => {
    return res.json({
        message: 'Hello world pipeline',
    });
});

app.listen(process.env.PORT || 80);
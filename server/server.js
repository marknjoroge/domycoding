const express = require('express');
const apiRouter = require('./routes');

const app = express();

const PORT = 5001;

app.use(express.json());

app.use('/api', apiRouter);

app.listen(process.env.PORT || PORT, () => {
    console.log(`server running on ${process.env.PORT || PORT}`);
})

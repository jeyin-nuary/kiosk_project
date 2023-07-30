const express = require('express');
const mongoose = require('mongoose');

const PORT = 3000

app.use(express.json());


const commentsRouter = require('./routes/comments');
const indexRouter = require('./routes/index');
const postsRouter = require('./routes/posts');



app.use('/', [commentsRouter, indexRouter, postsRouter]);




const connect = require('./schemas');
connect();

app.listen(PORT, () => {
    console.log(`${PORT}번 포트 서버가 열렸습니다.`);
});

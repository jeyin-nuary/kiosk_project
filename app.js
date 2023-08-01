const express = require('express');
const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');
const app = express();
const PORT = 3000;


const usersRouter = require('./routes/users');
const postsRouter = require('./routes/posts');
const commentsRouter = require('./routes/comments');


app.use(express.json());
app.use(cookieParser());

// 송출 테스트
app.get('/', (req, res) => {
    res.send('hello youtube :)');
});


app.use('/', [usersRouter, postsRouter, commentsRouter]);


connect();


app.listen(PORT, () => {
    console.log(`${PORT}포트가 열렸어요.`);
});
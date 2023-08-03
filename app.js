const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const app = express();
const port = 3000;

const indexRouter = require('./routes/index');

app.use(cookieParser());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api', indexRouter);

// const authMiddleware = require('./middlewares/auth-middleware');
// const usersRouter = require('./routes/users');
// const postsRouter = require('./routes/posts');

// 라우터 등록
// app.use('/', [usersRouter, postsRouter]);

// 송출 테스트
app.get('/', (req, res) => {
  res.send('hello youtube :)');
});

// authMiddleware 사용
// app.use(authMiddleware);

app.listen(port, () => {
  console.log(`${port}포트가 열렸어요.`);
});

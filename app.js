const express = require('express');
const babel = require('babel');
const cookieParser = require('cookie-parser');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const app = express();
const PORT = 3000;



// 라우터 선언
const itemRouter = require('./router/item.router');
const itemOrderCustomerRouter = require('./router/itemOrderCustomer.router');
const optionRouter = require('./router/option.router');
const orderCustomerRouter = require('./router/orderCustomer.router');
const orderItemsRouter = require('./router/orderItems.router');


// app.use
app.use(cookieParser()); // 쿠키 파싱
app.use(express.json()); // json 파싱


app.use('/', [itemRouter, itemOrderCustomerRouter, optionRouter, orderCustomerRouter, orderItemsRouter]);



app.listen(PORT, () => {
    console.log(PORT, '포트 번호로 서버가 실행되었습니다.');
    
})


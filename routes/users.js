const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const {Users} = require('../models/users');


// 회원가입 api
router.post('/signup', async (req, res) => {
    try {
      const {nickname, password, confirmPassword} = req.body;  

      // 닉네임 유효성 검사: 닉네임은 최소 3자 이상, 알파벳 대소문자(a~z, A~Z), 숫자(0~9)로 구성
      if (!nickname.length > 3 || !/^[a-zA-Z0-9]+$/.test(nickname)) {
        return res.status(412).json({errorMessage: '닉네임 형식이 일치하지 않습니다.'});
      }

      // 닉네임 유효성 검사: 중복된 닉네임
      const existUser = await Users.findOne({where: {nickname: nickname}});

      if (existUser !== nickname) {
        return res.status(412).json({errorMessage: '중복된 닉네임입니다.'});
      }

      // 비밀번호 유효성 검사1: 비밀번호는 최소 4자 이상
      if (!password.length > 4 ) {
        return res.status(412).json({errorMessage: '비밀번호 형식이 일치하지 않습니다.'});
      }

      // 비밀번호 유효성 검사2: 닉네임 불포함
      if (password.includes(nickname) || nickname.includes(password)) {
        return res.status(412).json({errorMessage: '비밀번호에 닉네임이 포함되어 있습니다.'});
      }

      // 비밀번호 유효성 검사3: 비밀번호 확인 일치
      if (password !== confirmPassword) {
        return res.status(412).json({errorMessage: '비밀번호의 값이 일치하지 않습니다.'});
      }


      // 회원가입 성공! 뿌슝 빠슝-
      const newUser = new Users({ nickname, password});
      await Users.save();

      return res.status(201).send({message: '회원가입을 축하합니다!'});

    } catch (error) {
        return res.status(400).json({errorMessage: '요청한 데이터 형식이 올바르지 않습니다.'});
    }
})


// 로그인 api
router.post('/login', async (req, res) => {
  try {
    const {nickname, password} = req.body;

  
    // 닉네임 또는 비밀번호가 데이터베이스에 등록된 것과 맞는 지 확인, 불일치 시 에러 메시지
    const existNickname = await Users.findOne({where: {nickname: nickname}});
    const existPassword = await Users.findOne({where: {password: password}});

    if (existNickname !== nickname || existPassword !== password) {
      return res.status(412).json({message: '닉네임 또는 비밀번호를 확인해주세요.'});
    }

    // 로그인 성공 시, 유저 정보 jwt 활용 쿠키 전달
    // 이 부분 코드 공부 더 필요. 다시 보기
    const token = jwt.sign({ userId: Users.userId}, "customized-secret-key");

    // jwt를 쿠키로 할당
    res.cookie("Authorization", `Bearer ${token}`);
    // jwt를 body로 할당
    res.status(200).json({ token });

  } catch (error) {
    return res.status(400).json({errorMessage: ' 로그인에 실패했습니다.'});
  }
});


module.exports = router;









module.exports = router;
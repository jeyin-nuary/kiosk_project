const jwt = require('jsonwebtoken');
const {Users} = require('../models/users');

// 사용자 인증 미들웨어: 다시 공부
module.exports = async (req, res, next) => {
    // Authorization 검사: 요청 헤더의 쿠키에서 가져온 인증 정보
    // 토큰은 "Bearer<token>"형식으로 전달되며, 이를 분리하여 authType과 authToken에 할당
    const {Authorization} = req.cookies;
    const [authType, authToken] = (Authorization ?? "").split(" ");

    // 인증 검사: token이 존재하지 않거나 authType이 "Bearer"가 아닌 경우(=유효x) 에러 메시지 반환
    if (!authToken || authType !== "Bearer") {
        return res.status(401).send({errorMessage: '로그인 후 이용 가능한 기능입니다.'});
    }
    // jwt 검증: jwt.verify-method
    // 토큰이 올바르다면 토큰에 포함된 사용자 ID를 추출, db에서 해당 id의 사용자를 조회합 
    // 조회된 사용자 정보를 res.locals.user에 저장. 다음 미들웨어나 라우트에서 사용할 수 있도록 
    // 그리고 next()를 호출하여 다음 단계로 진행
    // 이렇게 구성된 미들웨어를 사용하면 해당 애플리케이션의 보호된 기능에 접근하기 전에 유효한 로그인 토큰을 가져오는지 확인해 사용자 인증을 수행할 수 있음
    try {
        const { userId } = jwt.verify(authToken, "customized-secret-key");
        const user = await Users.findById(userId);
        console.log(user);

        res.locals.user = user;
        next();
        
    } catch (error) {
        return res.status(401).json({errorMessage: '로그인 후 이용 가능한 기능입니다.'});
    }
};
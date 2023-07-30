const express = require('express');
const router = express.Router();

const Posts = require('../schemas/post.js');


// 게시글 작성 api : 제목, 작성자명, 비밀번호, 작성 내용
router.post('/', async (req, res) => {
    try {
        const {user, password, title, content } = req.body;
        await Posts.create({user, password, title, content});
        return res.status(200).json({message: '게시글을 생성하였습니다.'});

    } catch (error) {
        return res.status(400).json({ message: '데이터 형식이 올바르지 않습니다.'});
    }
});


// 게시글 전체 목록 조회 api : 제목, 작성자명, 작성 날짜(날짜 기준 내림차순 정렬) 조회
router.get('/', async (req, res) => {
    try {
        await Posts.findAll({},);
        return res.
    } catch (error) {
        
    }
})



// 게시글 조회 api : 제목, 작성자명, 작성 날짜, 작성 내용 조회










// 게시글 삭제 api: 비밀번호가 동일할 때만 글 수정














// 게시글 삭제 api: 비밀번호 비교하여 동일할 때만 글 삭제






module.exports = router;
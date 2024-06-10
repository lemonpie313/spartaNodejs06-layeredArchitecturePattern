import express from 'express';
import { PostsController } from '../controllers/posts.controller.js';

const router = express.Router();
const postsConstroller = new PostsController(); //PostsController를 인스턴스화 시킴

// 게시글 생성 API
router.post('/', postsConstroller.createPost);

// 게시글 조회 API
router.get('/', postsConstroller.getPosts);

export default router;

import { PostsRepository } from '../repositories/posts.repository.js';

export class PostsService {
    postsRepository = new PostsRepository;

    // 게시글 조회
    findAllPosts = async () => {
        const posts = await this.postsRepository.findAllPosts();

        //정렬
        posts.sort((a,b) => {
            return b.createdAt - a.createdAt;
        });

        //pw, content 빼고 controller로 전달
        return posts.map((post) => {
            return {
                postId: post.postId,
                nickname: post.nickname,
                title: post.title,
                createdAt: post.createdAt,
                updatedAt: post.updatedAt
            }
        });
    }

    // 게시글 작성
    createPost = async (nickname, password, title, content) => {
        const createdPost = await this.postsRepository.createPost(
            nickname, password, title, content
        );

        return {
            postId: createdPost.postId,
            nickname: createdPost.nickname,
            title: createdPost.title,
            content: createdPost.content,
            createdAt: createdPost.createdAt,
            updatedAt: createdPost.updatedAt
        }
    }
}

import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePostDto, UpdatePostDto } from './post.dto';
import { PostInterface } from './post.entity';

@Injectable()
export class PostsService {
  private posts: PostInterface[] = [];

  getAllPosts(): PostInterface[] {
    return this.posts;
  }

  getPostById(id: string): PostInterface {
    const post = this.posts.find((p) => p.id === id);
    if (!post) {
      throw new NotFoundException('Post not found');
    }
    return post;
  }

  createPost(createPostDto: CreatePostDto): PostInterface {
    const newPost: PostInterface = {
      id: Date.now().toString(),
      ...createPostDto,
    };
    this.posts.push(newPost);
    return newPost;
  }

  updatePost(id: string, updatePostDto: UpdatePostDto): PostInterface {
    const post = this.getPostById(id);
    post.title = updatePostDto.title || post.title;
    post.content = updatePostDto.content || post.content;
    return post;
  }

  deletePost(id: string): void {
    const postIndex = this.posts.findIndex((p) => p.id === id);
    if (postIndex === -1) {
      throw new NotFoundException('Post not found');
    }
    this.posts.splice(postIndex, 1);
  }
}

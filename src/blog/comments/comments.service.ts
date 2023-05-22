import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCommentDto, UpdateCommentDto } from './comment.dto';
import { Comment } from './comment.entity';

@Injectable()
export class CommentsService {
  private comments: Comment[] = [];

  getAllComments(): Comment[] {
    return this.comments;
  }

  getCommentById(id: string): Comment {
    const comment = this.comments.find((c) => c.id === id);
    if (!comment) {
      throw new NotFoundException('Comment not found');
    }
    return comment;
  }

  createComment(createCommentDto: CreateCommentDto): Comment {
    const newComment: Comment = {
      id: Date.now().toString(),
      ...createCommentDto,
    };
    this.comments.push(newComment);
    return newComment;
  }

  updateComment(id: string, updateCommentDto: UpdateCommentDto): Comment {
    const comment = this.getCommentById(id);
    comment.content = updateCommentDto.content || comment.content;
    return comment;
  }

  deleteComment(id: string): void {
    const commentIndex = this.comments.findIndex((c) => c.id === id);
    if (commentIndex === -1) {
      throw new NotFoundException('Comment not found');
    }
    this.comments.splice(commentIndex, 1);
  }
}

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CommentsModule } from './blog/comments/comments.module';
import { PostsModule } from './blog/posts/posts.module';

@Module({
  imports: [CommentsModule, PostsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

import { Injectable } from '@nestjs/common';
import { CreatePostInput } from './dto/create-post.input';
import { UpdatePostInput } from './dto/update-post.input';
import { MongoPrismaService } from '../database/mongo-prisma.service';
import { Post as MongoPost, Prisma } from '@prisma/mongo/client';

@Injectable()
export class PostService {
  constructor(private readonly mongo: MongoPrismaService) {}

  async create(createPostInput: CreatePostInput): Promise<MongoPost> {
    const data: Prisma.PostUncheckedCreateInput = {
      text: createPostInput.text,
      author_id: createPostInput.author_id,
    };

    console.log(data)
    return this.mongo.post.create({ data });
  }

  findAll() {
    return `This action returns all post`;
  }

  findOne(id: number) {
    return `This action returns a #${id} post`;
  }

  update(id: number, updatePostInput: UpdatePostInput) {
    return `This action updates a #${id} post`;
  }

  remove(id: number) {
    return `This action removes a #${id} post`;
  }
}

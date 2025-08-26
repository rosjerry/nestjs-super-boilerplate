import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePostInput } from './dto/create-post.input';
import { UpdatePostInput } from './dto/update-post.input';
import { MongoPrismaService } from '../database/mongo-prisma.service';
import { PostgresPrismaService } from '../database/postgres-prisma.service';
import { Post as MongoPost, Prisma } from '@prisma/mongo/client';

@Injectable()
export class PostService {
  constructor(
    private readonly mongo: MongoPrismaService,
    private readonly postgres: PostgresPrismaService,
  ) {}

  async create(createPostInput: CreatePostInput): Promise<MongoPost> {
    const authorId = createPostInput.author_id;

    const author = await this.postgres.user.findUnique({
      where: { id: authorId },
    });
    if (!author) {
      throw new NotFoundException('Author not found');
    }

    const data: Prisma.PostUncheckedCreateInput = {
      text: createPostInput.text,
      author_id: authorId,
    };

    return this.mongo.post.create({ data });
  }

  async findAll(): Promise<MongoPost[]> {
    return this.mongo.post.findMany();
  }

  async findOne(id: string): Promise<MongoPost | null> {
    return this.mongo.post.findUnique({
      where: { id },
    });
  }

  async update(
    id: string,
    updatePostInput: UpdatePostInput,
  ): Promise<MongoPost> {
    const data: Prisma.PostUpdateInput = {
      ...(updatePostInput.text && { text: updatePostInput.text }),
      ...(updatePostInput.author_id && {
        author_id: updatePostInput.author_id,
      }),
    };

    return this.mongo.post.update({
      where: { id },
      data,
    });
  }

  async remove(id: string): Promise<MongoPost> {
    return this.mongo.post.delete({
      where: { id },
    });
  }
}

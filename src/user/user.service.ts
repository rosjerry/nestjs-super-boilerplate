import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PostgresPrismaService } from '../database/postgres-prisma.service';
import { MongoPrismaService } from '../database/mongo-prisma.service';
import { Prisma, User as PrismaUser } from '@prisma/postgres/client';

@Injectable()
export class UserService {
  constructor(
    private readonly prisma: PostgresPrismaService,
    private readonly mongo: MongoPrismaService,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<PrismaUser> {
    const data: Prisma.UserCreateInput = {
      email: createUserDto.email,
      first_name: createUserDto.first_name,
      last_name: createUserDto.last_name,
      pinned_post_id: '1',
    };

    return this.prisma.user.create({ data });
  }

  findAll(): Promise<PrismaUser[]> {
    return this.prisma.user.findMany();
  }

  findOne(id: string): Promise<PrismaUser | null> {
    return this.prisma.user.findUnique({ where: { id } });
  }

  async update(id: string, updateUserDto: UpdateUserDto): Promise<PrismaUser> {
    const { email, first_name, last_name, pinned_post_id } = updateUserDto;
    const data: Prisma.UserUpdateInput = {};

    if (typeof email !== 'undefined') data.email = email;
    if (typeof first_name !== 'undefined') data.first_name = first_name;
    if (typeof last_name !== 'undefined') data.last_name = last_name;

    if (typeof pinned_post_id !== 'undefined') {
      let resolvedPinnedId: string | null;

      if (pinned_post_id === null) {
        resolvedPinnedId = null;
      } else if (
        typeof pinned_post_id === 'object' &&
        pinned_post_id !== null &&
        'set' in pinned_post_id
      ) {
        // Handle Prisma field update input shape: { set: string | null }
        resolvedPinnedId = (pinned_post_id as Prisma.NullableStringFieldUpdateOperationsInput).set ?? null;
      } else {
        resolvedPinnedId = pinned_post_id as unknown as string;
      }

      if (resolvedPinnedId !== null) {
        const post = await this.mongo.post.findUnique({
          where: { id: resolvedPinnedId },
        });
        if (!post) {
          throw new NotFoundException('Pinned post not found');
        }
      }

      data.pinned_post_id = resolvedPinnedId;
    }

    return this.prisma.user.update({ where: { id }, data });
  }

  remove(id: string): Promise<PrismaUser> {
    return this.prisma.user.delete({ where: { id } });
  }
}

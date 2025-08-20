import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PostgresPrismaService } from '../database/postgres-prisma.service';
import { Prisma } from '@prisma/postgres/client';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PostgresPrismaService) {}

  async create(createUserDto: CreateUserDto) {
    const data: Prisma.UserCreateInput = {
      email: createUserDto.email,
      first_name: createUserDto.first_name ?? null,
      last_name: createUserDto.last_name ?? null,
    };

    return this.prisma.user.create({ data });
  }

  findAll() {
    return this.prisma.user.findMany();
  }

  findOne(id: string) {
    return this.prisma.user.findUnique({ where: { id } });
  }

  update(id: string, updateUserDto: UpdateUserDto) {
    const { email, first_name, last_name, pinned_post_id } = updateUserDto;
    const data: Prisma.UserUpdateInput = {};

    if (typeof email !== 'undefined') data.email = email;
    if (typeof first_name !== 'undefined') data.first_name = first_name;
    if (typeof last_name !== 'undefined') data.last_name = last_name;
    if (typeof pinned_post_id !== 'undefined') data.pinned_post_id = pinned_post_id;

    return this.prisma.user.update({ where: { id }, data });
  }

  remove(id: string) {
    return this.prisma.user.delete({ where: { id } });
  }
}

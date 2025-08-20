import { Injectable } from '@nestjs/common';
import { CreateGqlCfInput } from './dto/create-gql-cf.input';
import { UpdateGqlCfInput } from './dto/update-gql-cf.input';

@Injectable()
export class GqlCfService {
  create(createGqlCfInput: CreateGqlCfInput) {
    return 'This action adds a new gqlCf';
  }

  findAll() {
    return `This action returns all gqlCf`;
  }

  findOne(id: number) {
    return `This action returns a #${id} gqlCf`;
  }

  update(id: number, updateGqlCfInput: UpdateGqlCfInput) {
    return `This action updates a #${id} gqlCf`;
  }

  remove(id: number) {
    return `This action removes a #${id} gqlCf`;
  }
}

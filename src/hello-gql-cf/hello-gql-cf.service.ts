import { Injectable } from '@nestjs/common';
import { CreateHelloGqlCfInput } from './dto/create-hello-gql-cf.input';
import { UpdateHelloGqlCfInput } from './dto/update-hello-gql-cf.input';

@Injectable()
export class HelloGqlCfService {
  create(createHelloGqlCfInput: CreateHelloGqlCfInput) {
    return {
      exampleField: createHelloGqlCfInput.exampleField,
    };
  }

  findAll() {
    return [
      {
        exampleField: 998,
      },
      {
        exampleField: 999,
      },
    ];
  }

  findOne(id: number) {
    return {
      exampleField: id,
    };
  }

  update(id: number, updateHelloGqlCfInput: UpdateHelloGqlCfInput) {
    return `This action updates a #${id} helloGqlCf`;
  }

  remove(id: number) {
    return `This action removes a #${id} helloGqlCf`;
  }
}

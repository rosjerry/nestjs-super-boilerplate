import { Injectable } from '@nestjs/common';
import { CreateHelloRestDto } from './dto/create-hello-rest.dto';
import { UpdateHelloRestDto } from './dto/update-hello-rest.dto';

@Injectable()
export class HelloRestService {
  create(createHelloRestDto: CreateHelloRestDto) {
    return 'This action adds a new helloRest';
  }

  findAll() {
    return `This action returns all helloRest`;
  }

  findOne(id: number) {
    return `This action returns a #${id} helloRest`;
  }

  update(id: number, updateHelloRestDto: UpdateHelloRestDto) {
    return `This action updates a #${id} helloRest`;
  }

  remove(id: number) {
    return `This action removes a #${id} helloRest`;
  }
}

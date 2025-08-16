import { Injectable } from '@nestjs/common';
import { CreateHelloWDto } from './dto/create-hello-w.dto';
import { UpdateHelloWDto } from './dto/update-hello-w.dto';

@Injectable()
export class HelloWsService {
  create(createHelloWDto: CreateHelloWDto) {
    console.log('This action adds a new helloW');
    return 'This action adds a new helloW';
  }

  findAll() {
    console.log("This action returns all helloWs")
    return `This action returns all helloWs`;
  }

  findOne(id: number) {
    console.log("This action returns a #${id} helloW")
    return `This action returns a #${id} helloW`;
  }

  update(id: number, updateHelloWDto: UpdateHelloWDto) {
    console.log("This action updates a #${id} helloW")
    return `This action updates a #${id} helloW`;
  }

  remove(id: number) {
    console.log("This action removes a #${id} helloW")
    return `This action removes a #${id} helloW`;
  }
}

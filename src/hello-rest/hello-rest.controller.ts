import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { HelloRestService } from './hello-rest.service';
import { CreateHelloRestDto } from './dto/create-hello-rest.dto';
import { UpdateHelloRestDto } from './dto/update-hello-rest.dto';

@Controller('hello-rest')
export class HelloRestController {
  constructor(private readonly helloRestService: HelloRestService) {}

  @Post()
  create(@Body() createHelloRestDto: CreateHelloRestDto) {
    return this.helloRestService.create(createHelloRestDto);
  }

  @Get()
  findAll() {
    return this.helloRestService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.helloRestService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateHelloRestDto: UpdateHelloRestDto,
  ) {
    return this.helloRestService.update(+id, updateHelloRestDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.helloRestService.remove(+id);
  }
}

import { Module } from '@nestjs/common';
import { HelloRestService } from './hello-rest.service';
import { HelloRestController } from './hello-rest.controller';

@Module({
  controllers: [HelloRestController],
  providers: [HelloRestService],
})
export class HelloRestModule {}

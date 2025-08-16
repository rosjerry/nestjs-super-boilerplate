import { Module } from '@nestjs/common';
import { HelloWsService } from './hello-ws.service';
import { HelloWsGateway } from './hello-ws.gateway';

@Module({
  providers: [HelloWsGateway, HelloWsService],
})
export class HelloWsModule {}

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HelloRestModule } from './hello-rest/hello-rest.module';

@Module({
  imports: [HelloRestModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

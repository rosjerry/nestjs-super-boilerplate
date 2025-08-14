import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HelloRestModule } from './hello-rest/hello-rest.module';
import { HelloGqlCfModule } from './hello-gql-cf/hello-gql-cf.module';

@Module({
  imports: [HelloRestModule, HelloGqlCfModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

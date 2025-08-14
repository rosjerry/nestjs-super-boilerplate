import { Module } from '@nestjs/common';
import { HelloGqlCfService } from './hello-gql-cf.service';
import { HelloGqlCfResolver } from './hello-gql-cf.resolver';

@Module({
  providers: [HelloGqlCfResolver, HelloGqlCfService],
})
export class HelloGqlCfModule {}

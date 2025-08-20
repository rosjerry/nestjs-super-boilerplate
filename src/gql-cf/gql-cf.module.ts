import { Module } from '@nestjs/common';
import { GqlCfService } from './gql-cf.service';
import { GqlCfResolver } from './gql-cf.resolver';

@Module({
  providers: [GqlCfResolver, GqlCfService],
})
export class GqlCfModule {}

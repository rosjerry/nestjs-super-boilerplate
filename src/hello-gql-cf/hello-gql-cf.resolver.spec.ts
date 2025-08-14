import { Test, TestingModule } from '@nestjs/testing';
import { HelloGqlCfResolver } from './hello-gql-cf.resolver';
import { HelloGqlCfService } from './hello-gql-cf.service';

describe('HelloGqlCfResolver', () => {
  let resolver: HelloGqlCfResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HelloGqlCfResolver, HelloGqlCfService],
    }).compile();

    resolver = module.get<HelloGqlCfResolver>(HelloGqlCfResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});

import { Test, TestingModule } from '@nestjs/testing';
import { HelloGqlCfService } from './hello-gql-cf.service';

describe('HelloGqlCfService', () => {
  let service: HelloGqlCfService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HelloGqlCfService],
    }).compile();

    service = module.get<HelloGqlCfService>(HelloGqlCfService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

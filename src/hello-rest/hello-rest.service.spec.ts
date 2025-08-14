import { Test, TestingModule } from '@nestjs/testing';
import { HelloRestService } from './hello-rest.service';

describe('HelloRestService', () => {
  let service: HelloRestService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HelloRestService],
    }).compile();

    service = module.get<HelloRestService>(HelloRestService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

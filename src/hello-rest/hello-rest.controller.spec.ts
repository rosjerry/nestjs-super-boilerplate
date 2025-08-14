import { Test, TestingModule } from '@nestjs/testing';
import { HelloRestController } from './hello-rest.controller';
import { HelloRestService } from './hello-rest.service';

describe('HelloRestController', () => {
  let controller: HelloRestController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HelloRestController],
      providers: [HelloRestService],
    }).compile();

    controller = module.get<HelloRestController>(HelloRestController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

import { PartialType } from '@nestjs/mapped-types';
import { CreateHelloWDto } from './create-hello-w.dto';

export class UpdateHelloWDto extends PartialType(CreateHelloWDto) {
  id: number;
}

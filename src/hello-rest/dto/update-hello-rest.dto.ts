import { PartialType } from '@nestjs/mapped-types';
import { CreateHelloRestDto } from './create-hello-rest.dto';

export class UpdateHelloRestDto extends PartialType(CreateHelloRestDto) {}

import { CreateHelloGqlCfInput } from './create-hello-gql-cf.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateHelloGqlCfInput extends PartialType(CreateHelloGqlCfInput) {
  @Field(() => Int)
  id: number;
}

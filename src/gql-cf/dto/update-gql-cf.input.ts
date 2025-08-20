import { CreateGqlCfInput } from './create-gql-cf.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateGqlCfInput extends PartialType(CreateGqlCfInput) {
  @Field(() => Int)
  id: number;
}

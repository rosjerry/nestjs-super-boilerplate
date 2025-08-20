import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateGqlCfInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}

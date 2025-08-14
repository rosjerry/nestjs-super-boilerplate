import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateHelloGqlCfInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}

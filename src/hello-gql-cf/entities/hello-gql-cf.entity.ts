import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class HelloGqlCf {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}

import { ObjectType, Field, Int, ID } from '@nestjs/graphql';

@ObjectType()
export class HelloGqlCf {
  @Field(() => Int)
  exampleField: number;

  @Field(() => ID)
  id: number;
}

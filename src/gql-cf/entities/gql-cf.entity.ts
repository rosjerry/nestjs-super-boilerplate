import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class GqlCf {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}

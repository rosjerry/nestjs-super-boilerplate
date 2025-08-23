import { ObjectType, Field, GraphQLISODateTime } from '@nestjs/graphql';

@ObjectType()
export class Post {
  @Field(() => String)
  id: string;

  @Field(() => GraphQLISODateTime)
  createdAt: Date;

  @Field(() => String)
  text: string;

  @Field(() => String, { name: 'author_id' })
  author_id: string;
}

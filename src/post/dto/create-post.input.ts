import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreatePostInput {
  @Field(() => String)
  text: string;

  @Field(() => String, { name: 'author_id' })
  author_id: string;
}

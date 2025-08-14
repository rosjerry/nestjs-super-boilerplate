import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { HelloGqlCfService } from './hello-gql-cf.service';
import { HelloGqlCf } from './entities/hello-gql-cf.entity';
import { CreateHelloGqlCfInput } from './dto/create-hello-gql-cf.input';
import { UpdateHelloGqlCfInput } from './dto/update-hello-gql-cf.input';

@Resolver(() => HelloGqlCf)
export class HelloGqlCfResolver {
  constructor(private readonly helloGqlCfService: HelloGqlCfService) {}

  @Mutation(() => HelloGqlCf)
  createHelloGqlCf(@Args('createHelloGqlCfInput') createHelloGqlCfInput: CreateHelloGqlCfInput) {
    return this.helloGqlCfService.create(createHelloGqlCfInput);
  }

  @Query(() => [HelloGqlCf], { name: 'helloGqlCf' })
  findAll() {
    return this.helloGqlCfService.findAll();
  }

  @Query(() => HelloGqlCf, { name: 'helloGqlCf' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.helloGqlCfService.findOne(id);
  }

  @Mutation(() => HelloGqlCf)
  updateHelloGqlCf(@Args('updateHelloGqlCfInput') updateHelloGqlCfInput: UpdateHelloGqlCfInput) {
    return this.helloGqlCfService.update(updateHelloGqlCfInput.id, updateHelloGqlCfInput);
  }

  @Mutation(() => HelloGqlCf)
  removeHelloGqlCf(@Args('id', { type: () => Int }) id: number) {
    return this.helloGqlCfService.remove(id);
  }
}

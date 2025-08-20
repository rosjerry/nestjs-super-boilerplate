import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { GqlCfService } from './gql-cf.service';
import { GqlCf } from './entities/gql-cf.entity';
import { CreateGqlCfInput } from './dto/create-gql-cf.input';
import { UpdateGqlCfInput } from './dto/update-gql-cf.input';

@Resolver(() => GqlCf)
export class GqlCfResolver {
  constructor(private readonly gqlCfService: GqlCfService) {}

  @Mutation(() => GqlCf)
  createGqlCf(@Args('createGqlCfInput') createGqlCfInput: CreateGqlCfInput) {
    return this.gqlCfService.create(createGqlCfInput);
  }

  @Query(() => [GqlCf], { name: 'gqlCf' })
  findAll() {
    return this.gqlCfService.findAll();
  }

  @Query(() => GqlCf, { name: 'gqlCf' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.gqlCfService.findOne(id);
  }

  @Mutation(() => GqlCf)
  updateGqlCf(@Args('updateGqlCfInput') updateGqlCfInput: UpdateGqlCfInput) {
    return this.gqlCfService.update(updateGqlCfInput.id, updateGqlCfInput);
  }

  @Mutation(() => GqlCf)
  removeGqlCf(@Args('id', { type: () => Int }) id: number) {
    return this.gqlCfService.remove(id);
  }
}

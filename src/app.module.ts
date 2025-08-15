import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HelloRestModule } from './hello-rest/hello-rest.module';
import { HelloGqlCfModule } from './hello-gql-cf/hello-gql-cf.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: true,
      playground: true,
      sortSchema: true
    }),
    HelloRestModule,
    HelloGqlCfModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

import { join } from "path";

import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";
import { Module } from "@nestjs/common";
import { GraphQLModule } from "@nestjs/graphql";

import { PrismaService } from "@/prisma.service";
import { TasksController } from "@/tasks/tasks.controller";
import { TasksResolver } from "@/tasks/tasks.resolver";
import { TasksService } from "@/tasks/tasks.service";

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), "src/schema.gql"),
    }),
  ],
  controllers: [TasksController],
  providers: [TasksService, PrismaService, TasksResolver],
})
export class AppModule {}

import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";

import { PrismaService } from "@/prisma.service";
import { Task } from "@/tasks/models/task.model";

@Resolver(() => Task)
export class TasksResolver {
  constructor(private prisma: PrismaService) {}

  @Query(() => [Task])
  async tasks() {
    return this.prisma.task.findMany();
  }

  @Mutation(() => Task)
  async createTask(@Args("title") title: string, @Args("done") done: boolean) {
    return this.prisma.task.create({ data: { title, done } });
  }

  @Mutation(() => Task, { nullable: true })
  async updateTask(@Args("id") id: number) {
    const task = await this.prisma.task.findUnique({
      where: { id: id || undefined },
    });

    return this.prisma.task.update({
      where: { id: id || undefined },
      data: { done: !task?.done },
    });
  }

  @Mutation((returns) => Task, { nullable: true })
  async deleteTask(@Args("id") id: number) {
    return this.prisma.task.delete({
      where: {
        id: id,
      },
    });
  }
}

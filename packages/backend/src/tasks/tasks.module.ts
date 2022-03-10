import { Module } from "@nestjs/common";

import { TasksResolver } from "@/tasks/tasks.resolver";
import { TasksService } from "@/tasks/tasks.service";

@Module({
  providers: [TasksService, TasksResolver],
})
export class TasksModule {}

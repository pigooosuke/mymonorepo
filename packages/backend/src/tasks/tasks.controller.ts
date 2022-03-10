import { Body, Controller, Delete, Get, Param, Post } from "@nestjs/common";
import { Task as TaskModel } from "@prisma/client";

import { TasksService } from "@/tasks/tasks.service";

@Controller()
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Get("tasks/:id")
  async getPostById(@Param("id") id: string): Promise<TaskModel> {
    return this.tasksService.task({ id: Number(id) });
  }

  @Get("tasks")
  async getAllTasks(): Promise<TaskModel[]> {
    return this.tasksService.tasks({});
  }

  @Post("tasks")
  async createTask(@Body() taskData: { title: string; done: boolean }): Promise<TaskModel> {
    const { title, done } = taskData;
    return this.tasksService.createTask({
      title,
      done,
    });
  }

  @Post("tasks/:id")
  async updateTask(@Param("id") id: string, @Body() taskData: { title: string; done: boolean }): Promise<TaskModel> {
    const { title, done } = taskData;
    return this.tasksService.updateTask({
      where: { id: Number(id) },
      data: { title: title, done: done },
    });
  }

  @Delete("tasks/:id")
  async deleteTask(@Param("id") id: string): Promise<TaskModel> {
    return this.tasksService.deleteTask({ id: Number(id) });
  }
}

import { Body, Controller, Delete, Get, Param, Post } from "@nestjs/common";

import { TasksService } from "@/tasks/tasks.service";

@Controller()
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Get("tasks/:id")
  async getPostById(@Param("id") id: string) {
    return this.tasksService.task({ id: Number(id) });
  }

  @Get("tasks")
  async getAllTasks() {
    return this.tasksService.tasks({});
  }

  @Post("tasks")
  async createTask(@Body() taskData: { title: string; done: boolean }) {
    const { title, done } = taskData;
    return this.tasksService.createTask({
      title,
      done,
    });
  }

  @Post("tasks/:id")
  async updateTask(@Param("id") id: string, @Body() taskData: { title: string; done: boolean }) {
    const { title, done } = taskData;
    return this.tasksService.updateTask({
      where: { id: Number(id) },
      data: { title: title, done: done },
    });
  }

  @Delete("tasks/:id")
  async deleteTask(@Param("id") id: string) {
    return this.tasksService.deleteTask({ id: Number(id) });
  }
}

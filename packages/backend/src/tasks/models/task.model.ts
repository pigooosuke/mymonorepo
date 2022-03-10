// src/Task/models/Task.models.ts
import { Field, ID, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class Task {
  @Field((type) => ID)
  id: string;
  title: string;
  done: boolean;
  createdAt: Date;
  updatedAt: Date;
}

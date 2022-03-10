import { gql } from "@apollo/client";

export const AllTasksQuery = gql`
  query {
    tasks {
      id
      title
      done
    }
  }
`;

export const AddTaskMutation = gql`
  mutation createTask($title: String!, $done: Boolean!) {
    createTask(title: $title, done: $done) {
      title
      done
    }
  }
`;

export const UpdateTaskMutation = gql`
  mutation updateTask($id: Float!) {
    updateTask(id: $id) {
      id
    }
  }
`;

export const DeleteTaskMutation = gql`
  mutation deleteTask($id: Float!) {
    deleteTask(id: $id) {
      id
    }
  }
`;

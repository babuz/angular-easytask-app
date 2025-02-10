import { Injectable } from "@angular/core";
import { DUMMY_USERS_TASKS } from "../dummy-users-tasks";
import { type AddNewTask } from "./task/task.model";

@Injectable({ providedIn: 'root' })
export class TaskService {
    private tasks = DUMMY_USERS_TASKS;

    getUserTasks(userId: string) {
        return this.tasks.filter((task) => task.userId === userId);
    }

    removedTask(id: string) {
        return this.tasks = this.tasks.filter((task) => task.id !== id);
    }

    addTask(newTask: AddNewTask, userId: string) {
        this.tasks.unshift({
            id: new Date().getTime().toString(),
            title: newTask.title,
            dueDate: newTask.dueDate,
            summary: newTask.summary,
            userId: userId
        });
    }

}
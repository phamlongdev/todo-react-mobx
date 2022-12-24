import { makeAutoObservable } from "mobx";
import { ITask } from "../types/interfaces/todo";

class Todo {
  list: ITask[] = []

  constructor() {
    makeAutoObservable(this);
  }

  create(task: ITask): boolean {
    if (this.list.filter(t => t.id === task.id).length > 0) return false;
    else {
        this.list.push(task);
        return true;
    }
  }

  read(id: number): ITask {
    return this.list.filter(t => t.id === id)[0]
  }

  update(id: number, task: ITask): void {
    this.list.map(t => t.id === id ? task : t)
  }

  delete(id: number): void {
    this.list.map(t => t.id !== id && t)
  }
}

const todoStore = new Todo();

export { todoStore };

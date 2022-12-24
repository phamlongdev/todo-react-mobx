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
        this.list.push({...task, id: this.list.length + 1});
        return true;
    }
  }

  read(id: number): ITask {
    return this.list.filter(t => t.id === id)[0]
  }

  update(id: number, task: ITask): boolean {
    this.list = this.list.map(t => t.id === id ? task : t)

    return true
  }

  delete(id: number): boolean {
    this.list = this.list.filter(t => t.id !== id )

    return true
  }
}

const todoStore = new Todo();

export { todoStore };

import { makeAutoObservable } from "mobx";

class ToDoState {
    list = [];

    constructor() {
        makeAutoObservable(this);
    }
    add(todo) {
        this.list.push(todo);
    }
    remove(id) {
        this.list = this.list.filter((todo) => todo.id !== id);
    }
    changeDone(id) {
        this.list = this.list.map((todo) => {
            if (todo.id === id) {
                return { ...todo, done: !todo.done };
            }
            return todo;
        });
    }
};

export default new ToDoState();


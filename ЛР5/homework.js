import { Task } from './task.js';

export class Homework extends Task {
    #subject;

    constructor(id = 0, name = "ДЗ", done = false, subject = "Предмет") {
        super(id, name, done);
        this.#subject = subject;
    }

    get subject() {
        return this.#subject;
    }

    set subject(x) {
        this.#subject = x;
    }

    show() {
        console.log("ДЗ: " + this.id + " " + this.name + " " + this.done + " " + this.#subject);
    }

    delete() {
        this.#subject = null;
        super.delete();
    }

    copy() {
        return this;
    }

    static clone(homework) {
        return new Homework(homework.id, homework.name, homework.done, homework.subject);
    }
}
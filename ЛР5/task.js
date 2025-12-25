export class Task {
    #id;
    #name;
    #done;

    constructor(id = 0, name = "Задача", done = false) {
        this.#id = id;
        this.#name = name;
        this.#done = done;
    }

    get id() {
        return this.#id;
    }

    set id(x) {
        this.#id = x;
    }

    get name() {
        return this.#name;
    }

    set name(x) {
        this.#name = x;
    }

    get done() {
        return this.#done;
    }

    set done(x) {
        this.#done = x;
    }

    show() {
        console.log("Задача: " + this.#id + " " + this.#name + " " + this.#done);
    }

    delete() {
        this.#id = null;
        this.#name = null;
        this.#done = null;
    }

    copy() {
        return this;
    }

    #important() {
        this.#name = "ВАЖНО: " + this.#name;
    }

    static clone(task) {
        return new Task(task.id, task.name, task.done);
    }
}
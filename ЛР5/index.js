import { Homework } from './homework.js';

let hw = [
    new Homework(1, "Математика", false, "Алгебра"),
    new Homework(2, "Литература", true, "Книга")
];

hw[0].show();
hw[1].show();
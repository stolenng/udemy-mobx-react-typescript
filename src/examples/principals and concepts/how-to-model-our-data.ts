import {observable, when} from "mobx";

const demoSchool = {
    "id": 1,
    "name": "Udemy",
    "courses": [
        {
            "id": 1,
            "name": "MobX And React",
            "students": [
                {
                    "id": 1,
                    "name": "Insert Your Name Here"
                }
            ]
        }
    ]
};


// no control over the object
const badPractice = observable(demoSchool);

console.log(badPractice, 'All Became Observables');

// Good Practice - We have control on each part of the object and we can easily modify/enhance and do how ever we like in them
class Student {
    id: number;
    @observable
    name: string;

    constructor(student: Student) {
        this.id = student.id;
        this.name = student.name;

        when(
            () => this.name !== null,
            () => console.log(this.name, 'Easy To Log Each Student Name')
        );
    }
}

class Course {
    id: number;
    @observable
    name: string;
    @observable
    students: Student[];

    constructor(course: Course) {
        this.id = course.id;
        this.name = course.name;

        this.students = course.students.map(student => new Student(student));
    }
}

class School {
    id: number;
    @observable
    name: string;
    @observable
    courses: Course[];

    constructor(school: School) {
        this.id = school.id;
        this.name = school.name;

        this.courses = school.courses.map(course => new Course(course));
    }
}

const goodPractice = new School(demoSchool);

console.log(goodPractice, 'We Have Control Of All The Objects');

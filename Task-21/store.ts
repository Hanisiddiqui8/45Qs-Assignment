/*
Then think of something you could store in a TypeScript Object. Write a program that creates Objects
containing these items.
*/
//Creating object by using interface
interface itCourse {
    courseName: string;
    location: string;
    onSiteStudents: number;
}

let itCourse = {
    courseName : "TypeScript and JavaScript",
    location : "Governor House Sindh",
    onSiteStudents : 50000
};

console.log(itCourse);
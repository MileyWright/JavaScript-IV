// CODE here for your Lambda Classes

class Person {
    constructor(attr){
        this.name = attr.name;
        this.age = attr.age;
        this.location = attr.location;
    }
    speak() {
        return `Hello, my name is ${this.name}. I am from ${this.location}`
    }
}

class Instructor extends Person{
    constructor(instructorAttr){
    super(instructorAttr);
    this.speciality = instructorAttr.speciality;
    this.favLanguage = instructorAttr.favLanguage;
    this.catchPhrase = instructorAttr.catchPhrase;
    }
    demo(subject) {
        return `Today we are learning about ${subject}`
    }
    grade(student) {
        return `${student.name} recieves a perfect score on ${subject}.`
    }
}

class Student extends Person {
    constructor(studentAttr) {
        super(studentAttr);
        this.previousBackground =  studentAttr.previousBackground;
        this.className = studentAttr.className;
        this.favSubjects = studentAttr.favSubjects;
    }
    listsSubjects () {
        for (i = 0; i <= this.favSubjects.length, i++){
            console.log(this.favSubjects[i] )
        }
    }
    PRAssignment (subject) {
        return `${student.name} has submitted a PR for ${subject}.`
    }
    sprintChallenge (subject) {
        return `${student.name} has begun sprint challenge on ${subject}`
    }
}

class projectManager extends Instructor{
    constructor(pmAttr) {
        this.gradClassName = pmAttr.gradClassName;
        this.favInstructor = pmAttr.favInstructor;
    }
    standup(channel) {
        return `${this.name} announces to ${channel}, @channel standy times!`
    }
    debugCode () {
        
    }
}

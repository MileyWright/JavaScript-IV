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
    grade(student, subject) {
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
        for (let i = 0; i <= this.favSubjects.length; i++){
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
        super(pmAttr);
        this.gradClassName = pmAttr.gradClassName;
        this.favInstructor = pmAttr.favInstructor;
    }
    standup(channel) {
        return `${this.name} announces to ${channel}, @channel standy times!`
    }
    debugCode (subject) {
        return `${this.name} debugs ${student.name}'s code on ${subject}.`
    }
}

const instructor = new Instructor({
    name: 'Alex',
    age: 29,
    location: 'Atlanta',
    speciality: 'Redux',
    favLanguage: 'JavaScript',
    catchPhrase: 'Dont forget the homies'
})

const student = new Student ({
    name: 'Karla',
    age: 32,
    location: 'Delaware',
    previousBackground: 'Sales',
    className: 'WEB4',
    favSubjects: ['LESS', 'HTML', 'CSS']
})

const PM = new projectManager({
    name: 'Sara',
    age: 24,
    location: 'New York',
    gradClassName: 'WEB1',
    favInstructor: 'Josh',
})

console.log(instructor.speak());
console.log(instructor.demo('Javascript'));
console.log(instructor.grade( student, 'CSS'));
console.log(student.speak());
student.listsSubjects();
console.log(student.PRAssignment("Redux"));
console.log(student.sprintChallenge('Responsive Design'));
console.log(PM.speak());
console.log(PM.standup('WEB12'));
console.log(PM.debugCode('JavaScript'));
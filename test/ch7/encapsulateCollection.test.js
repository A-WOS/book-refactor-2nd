import {expect} from 'chai';
import {Course, Person} from "../../src/ch7/encapsulateCollection.js";

describe('Person 클래스에', () => {
    it('courses 를 설정할 수 있다.', () => {
        const aPerson = new Person("Bell");
        const courses = [new Course("Kotlin", true)];

        courses.forEach(course => aPerson.addCourse(course));

        expect(aPerson.name).to.equal("Bell");
        expect(aPerson.courses).to.eql(courses);
    });

    it('courses 를 추가할 수 있다.', () => {
        const aPerson = new Person("Bell");

        aPerson.addCourse(new Course("Kotlin", false));
        aPerson.addCourse(new Course("Spring", false));

        expect(aPerson.name).to.equal("Bell");
        expect(aPerson.courses).to.eql([new Course("Kotlin", false), new Course("Spring", false)]);
    });

    it('courses 를 제거할 수 있다.', () => {
        const aPerson = new Person("Bell");

        let courseToBeRemoved = new Course("Kotlin", false);
        aPerson.addCourse(courseToBeRemoved);
        aPerson.addCourse(new Course("Spring", false));

        aPerson.removeCourse(courseToBeRemoved);

        expect(aPerson.courses).to.eql([new Course("Spring", false)]);
    });
});

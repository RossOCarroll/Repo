function createStudent(name, year) {
  return {
    name,
    year,
    courses: [],

    info() {
      console.log(`${this.name} is a ${this.year} year student.`)
    },

    addCourse(course) {
      this.courses.push(course);
    },

    listCourses() {
      return this.courses;
    },

    addNote(code, note) {
      this.courses.forEach(course => {
        if (course['code'] === code) {
          if (course.note) {
            course.note += '; ' + note;
          } else {
            course.note = `${course.name}: ${note}`;
          }
        }
      })
    },

    viewNotes() {
      this.courses.forEach(course => {
        if (course.note) {
          console.log(course.note)
        }
      })
    },

    updateNote(code, note) {
      this.courses.forEach(course => {
        if (course.code === code) {
          course.note = `${course.name}: ${note}`;
        }
      })
    }
  }
}


const school = (function() {
  let students = [];
  let validYears = ['1st', '2nd', '3rd', '4th', '5th'];

  function getCourse(student, courseName) {
    return student.listCourses().filter(({name}) => name === courseName)[0];
  }
  
  return {

    addStudent(name, year) {
      if (validYears.includes(year)) {
        const student = createStudent(name, year);
        students.push(student);
        return student;
      } else {
        console.log('Invalid Year');
      }
    },

    enrollStudent(student, courseName, courseCode) {
      student.addCourse({name: courseName, code: courseCode})
    },

    addGrade(student, courseName, grade) {
      const course = student.listCourses().filter(({name}) => name === courseName)[0];

      if (course) {
        course.grade = grade;
      }
    },

    getReportCard(student) {
      student.listCourses().forEach(({grade, name}) => {
        if (grade) {
          console.log(`${name}: ${String(grade)}`);
        } else {
          console.log(`${name}: In progress`);
        }
      });
    },

    courseReport(courseName) {

      const courseStudents = students.map(student => {
        const course = getCourse(student, courseName) || { grade: undefined };
        return { name: student.name, grade: course.grade };
      }).filter(({grade}) => grade);

      if (courseStudents.length > 0) {
        console.log(`=${courseName} Grades=`);

        const average = courseStudents.reduce((total, {name, grade}) => {
          console.log(`${name}: ${String(grade)}`);
          return total + grade;
        }, 0) / courseStudents.length;

        console.log('---');
        console.log(`Course Average: ${String(average)}`);
      }
    },
  }
})();

let paul = school.addStudent("Paul", "3rd");
let mary = school.addStudent("Mary", "1st");
let kim  = school.addStudent("Kim", "2nd");

school.enrollStudent(paul, "Math", 101);
school.addGrade(paul, "Math", 95);

school.courseReport('Math')
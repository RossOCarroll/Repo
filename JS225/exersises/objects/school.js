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



const school = {
    students: [],

    addStudent(student) {
      const validYears = ['1st', '2nd', '3rd', '4th', '5th'];

      if (!validYears.find(year => year === student.year)) {
        console.log('Invalid Year')
      } else {
        this.students.push(student);
        return student;
      }
    },

    enrollStudent(student, course) {
      student.addCourse(course);
    },

    addGrade(student, courseCode, grade) {
      const course = student.courses.find(course => course.code === courseCode);

      course.grade = grade;
    },

    getReportCard(student) {
      student.courses.forEach(course => {
        if (course.grade) {
          console.log(`${course.name}: ${course.grade}`)
        } else {
          console.log(`${course.name}: In progress`)
        }
      })
    },

    courseReport(targetCourse) {
      console.log(`=${targetCourse}=`);

      let totalGrade = 0;
      let numOfGrades = 0;

      this.students.forEach(student => {
        student.courses.forEach(course => {
          if (course.grade) {
            if (course.name === targetCourse) {
              console.log(`${student.name}: ${course.grade}`);
              totalGrade += course.grade;
              numOfGrades++;
            }            
          }
        })
      })

      if (numOfGrades > 0) {
        console.log('---');
        console.log(`Course Average: ${totalGrade / numOfGrades}`);        
      }
    }
};

let paul = createStudent('Paul', '3rd');
school.enrollStudent(paul, { name: 'Math', code: 101 });
school.enrollStudent(paul, { name: 'Advanced Math', code: 102 });
school.enrollStudent(paul, { name: 'Physics', code: 202 });
school.addGrade(paul, 101, 95);
school.addGrade(paul, 102, 90);
// school.getReportCard(paul);


mary = createStudent('Mary', '1st');
school.enrollStudent(mary, { name: 'Math', code: 101})
school.addGrade(mary, 101, 91);

let kim = createStudent('Kim', '2nd');
school.enrollStudent(kim, { name: 'Math', code: 101 });
school.enrollStudent(kim, { name: 'Advanced Math', code: 102 });
school.addGrade(kim, 101, 93);
school.addGrade(kim, 102, 90);

school.addStudent(paul);
school.addStudent(mary);
school.addStudent(kim);

school.courseReport('Math');
school.courseReport('Advanced Math');
school.courseReport('Physics'); //undefined






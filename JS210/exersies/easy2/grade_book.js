function getGrade(grade1, grade2, grade3) {
  let total = grade1 + grade2 + grade3;
  let average = total / 3;

  switch (true) {
    case (average >= 90 && average <= 100):
      console.log('A');
      break;
    case (average >= 80 && average < 90):
      console.log('B');
      break;
    case (average >= 70 && average < 80):
      console.log('C');
      break;
    case (average >= 60 && average < 70):
      console.log('D');
      break;
    case (average >= 0 && average < 60):
      console.log('F');
      break;
  }
}



getGrade(95, 90, 93);    // "A"
getGrade(50, 50, 95);    // "D"
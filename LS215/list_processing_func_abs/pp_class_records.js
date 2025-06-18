let studentScores = {
  student1: {
    id: 123456789,
    scores: {
      exams: [90, 95, 100, 80],
      exercises: [20, 15, 10, 19, 15],
    },
  },
  student2: {
    id: 123456799,
    scores: {
      exams: [50, 70, 90, 100],
      exercises: [0, 15, 20, 15, 15],
    },
  },
  student3: {
    id: 123457789,
    scores: {
      exams: [88, 87, 88, 89],
      exercises: [10, 20, 10, 19, 18],
    },
  },
  student4: {
    id: 112233445,
    scores: {
      exams: [100, 100, 100, 100],
      exercises: [10, 15, 10, 10, 15],
    },
  },
  student5: {
    id: 112233446,
    scores: {
      exams: [50, 80, 60, 90],
      exercises: [10, 0, 10, 10, 0],
    },
  },
};

function processScore(score) {
  let grade;

  switch (true) {
    case (score >= 93):
      grade = 'A';
      break;
    case (score >= 85 && score <= 92):
      grade = 'B';
      break;
    case (score >= 77 && score <= 84):
      grade = 'C';
      break;
    case (score >= 69 && score <= 76):
      grade = 'D';
      break;
    case (score >= 60 && score <= 78):
      grade = 'E';
      break;
    default:
      grade = 'F';
  }

  return `${score} (${grade})`;
}

function generateClassRecordSummary(scores) {
  let scoreData = Object.keys(scores).map(student => scores[student].scores);
  let examData = scoreData.map(score => score.exams);

  return {
    studentGrades: scoreData.map(scoreObj => getStudentScore(scoreObj)),
    exams: getExamSummary(examData),
  };
}

function getStudentScore(scoreObj) {
  let examsAverage = scoreObj['exams'].reduce((acc, score) => acc + score) / scoreObj['exams'].length;
  let exercisesTotal = scoreObj['exercises'].reduce((acc, score) => acc + score);

  let finalScore = Math.round((examsAverage * 0.65) + (exercisesTotal * 0.35));
  return processScore(finalScore);
}

function getExamSummary(examData) {
  result = [];
  let examCount = examData[0].length;

  for (let i = 0; i < examCount; i++) {
    let scoresForExam = examData.map(studentExams => studentExams[i]);

    let total = scoresForExam.reduce((acc, score) => acc + score, 0);
    let average = parseFloat((total / scoresForExam.length).toFixed(1));
    let minimum = Math.min(...scoresForExam);
    let maximum = Math.max(...scoresForExam);

    result.push({ average, minimum, maximum });
  }

  return result;

}

console.log(generateClassRecordSummary(studentScores));

// returns:
//{
//   studentGrades: [ '87 (B)', '73 (D)', '84 (C)', '86 (B)', '56 (F)' ],
//   exams: [
//     { average: 75.6, minimum: 50, maximum: 100 },
//     { average: 86.4, minimum: 70, maximum: 100 },
//     { average: 87.6, minimum: 60, maximum: 100 },
//     { average: 91.8, minimum: 80, maximum: 100 },
//   ],
// }
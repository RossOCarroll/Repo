let numScores = Number(prompt("How many scores would you like to average:"))
let scores = []

for (let index = 1; index <= numScores; index++) {
  let grade = Number(prompt(`Enter score ${index}:`));
  scores.push(grade);
}

let total = scores.reduce((sum, current) => sum + current, 0)
let average = total / numScores;

if (average >= 90) {
  alert(`Based on the average of the ${numScores} scores your letter grade is "A"`);
} else if (average <= 90 && average >= 70) {
  alert(`Based on the average of the ${numScores} scores your letter grade is "B"`);
} else if (average <= 70 && average >= 50) {
  alert(`Based on the average of the ${numScores} scores your letter grade is "C"`);
} else {
  alert(`Based on the average of the ${numScores} scores your letter grade is "F"`);
}
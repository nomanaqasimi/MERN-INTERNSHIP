const scores = [45, 80, 90, 35, 60, 75];
const newScores = scores.filter(score => score >= 50).map(score => score + 10);
console.log(newScores);
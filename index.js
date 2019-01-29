function scoreCalculator(arr) {
  if (!arr[0]) {
    return -1;
  }
  let score = 0;
  let bonus = true;
  arr.forEach(item => {
    if (item > 10) {
      bonus = false;
    } else if (item >= 5) {
      bonus = false
      score += 5;
    } else if (item > 0) {
      score += 10;
    }
  });
  if (bonus) {
    score += 100;
  }
  return score;
}

module.exports = scoreCalculator;

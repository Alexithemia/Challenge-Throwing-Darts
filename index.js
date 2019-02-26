function scoreCalculator(arr) {
  if (!arr[0]) {
    return -1;
  }
  let score = 0;
  let bonus = true;
  let check;
  arr.forEach(item => {
    if (typeof item !== 'number') {
      check = 'All values must be numbers';
      return;
    }
    if (item > 20) {
      check = 'Value over 20 cannot be calculated';
      return;
    } else if (item > 10) {
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
  if (check) {
    return check;
  }
  return score;
}

module.exports = scoreCalculator;

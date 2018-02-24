module.exports = function solveEquation(equation) {
  // your implementation
  let temp = [];
  temp = equation.replace(/\s/g, '').replace(/\-/g, ' -').replace(/\+/g, ' +').trim().split(' ');
  let a;
  let b;
  let c;
  for (let i = 0; i < temp.length; i++) {
    if (temp[i].search(/(\d+\*x\^2$|\-\d+\*x\^2$)/g) === 0) {
      a = temp[i].replace(/\*x\^2/, '')
    } else if (temp[i].search((/\+\d+\*x$|^\-\d+\*x$/)) === 0) {
      b = temp[i].replace(/\*x/, '')
    }
    else {
      c = temp[i];
    }
  }

  let d = b * b - 4 * a * c;
  let sol = [];
    sol.push(Math.round((-b + Math.sqrt(d)) / (2 * a)));
    sol.push(Math.round((-b - Math.sqrt(d)) / (2 * a)));

    return sol.sort((a, b) => a - b);
}

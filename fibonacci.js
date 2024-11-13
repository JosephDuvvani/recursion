//Iterative
const fibs = (n) => {
  let sequence = [];
  for (let i = 0; i < n; i++) {
    if (i < 2) sequence.push(i);
    else sequence.push(sequence[i - 1] + sequence[i - 2]);
  }
  return sequence;
};

//Recursive
const fibsRec = (n) => {
  if (n < 2) {
    return [0, 1];
  } else {
    let sequence = fibsRec(n - 1);

    return [...sequence, sequence[n - 1] + sequence[n - 2]];
  }
};

console.log(fibsRec(8));

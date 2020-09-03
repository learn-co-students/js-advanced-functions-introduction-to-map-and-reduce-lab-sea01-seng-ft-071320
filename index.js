// Your code here
function mapToNegativize(array) {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    result.push((array[i] *= -1));
  }
  return result;
}

function mapToNoChange(array) {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    result.push(array[i]);
  }
  return result;
}

function mapToDouble(array) {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    result.push((array[i] *= 2));
  }
  return result;
}
function mapToSquare(array) {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    result.push((array[i] **= 2));
  }
  return result;
}

function reduceToTotal(array, str = 0) {
  let result = str;
  for (let i = 0; i < array.length; i++) {
    result += array[i];
  }
  return result;
}

function reduceToAllTrue(array) {
  for (let i = 0; i < array.length; i++) {
    if (!array[i]) return false;
  }
  return true;
}

function reduceToAnyTrue(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i]) return true;
  }
  return false;
}

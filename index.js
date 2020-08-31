function mapToNegativize(array) {
  const result = [];

  for (const element of array) {
    result.push(-element);
  }

  return result;
}

function mapToNoChange(array) {
  const result = [];

  for (const element of array) {
    result.push(element);
  }

  return result;
}

function mapToDouble(array) {
  const result = [];

  for (const element of array) {
    result.push(element * 2);
  }

  return result;
}

function mapToSquare(array) {
  const result = [];

  for (const element of array) {
    result.push(element * element);
  }

  return result;
}

function reduceToTotal(array, init = 0) {
  let total = 0 + init;

  for (const element of array) {
    total += element;
  }

  return total;
}

function reduceToAllTrue(array) {
  let result = true;

  for (const element of array) {
    if (!element) {
      result = false;
      break;
    }
  }

  return result;
}

function reduceToAnyTrue(array) {
  let result = false;

  for (const element of array) {
    if (element) {
      result = true;
      break;
    }
  }

  return result;
}

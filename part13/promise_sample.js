console.log("****** CALLBACK HELL ******");

function add(num1, num2, callback) {
  let error = false;
  if (num1 == 0) {
    error = true
  };
  callback(num1 + num2, error);
}
function multiply(num1, num2, callback) {
  callback(num1 * num2)
}
function divide(num, callback) {
  callback(num / 10)
}

add(10, 20, (sum, err) => {
  // console.log(err);
  if (err) {
    console.log('error happend');
  } else {
    console.log(sum);
    multiply(sum, sum, (product) => {
      console.log(product);
      divide(product, (result) => {
        console.log(result);
      })
    })
  }
})

console.log("****** PROMISE ******");

const Promise = require('promise');

function addPromise(num1, num2) {
  return new Promise((resolve, reject) => {
    if (num1 === 0) {
      reject('error happend')
    }
    resolve(num1 + num2)
  })
}
function multiplyPromise(num1, num2) {
  return new Promise((resolve, reject) => {
    if (num1 === 0) {
      reject('error happend')
    }
    resolve(num1 * num2)
  })
}
function dividePromise(num) {
  return new Promise((resolve, reject) => {
    if (num === 0) {
      reject('error happend')
    }
    resolve(num / 10)
  })
}

addPromise(10, 20).then((res) => {
  console.log(res);
  return multiplyPromise(res, res);
}).then((res) => { 
  console.log(res);
  return dividePromise(res);
}).then((res) => { 
  console.log(res);
}).catch((err) => {
  console.log(err);
})
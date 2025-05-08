console.log('Sahhh dude')

const fibs = function x(num) {
  let arr = [0];
  if (num === 0) {
    console.log(arr);
    return;
  }
  if (num === 1) {
    arr.push(1);
    console.log(arr);
    return;
  }
  if (num > 1) {
    arr.push(1);
    for (let i = 1; i < num; i++) {
      let x = arr[arr.length - 1] + arr[arr.length - 2];
      arr.push(x);
    }
    console.log(arr)
    return;
    // F = n-1 + n-2, where n > 1
  }
  console.log('Not valid input')
}


fibs(8)
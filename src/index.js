console.log('Sahhh dude')
import './style.css';


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

const arr = [0, 1,];

const fibsRec = function x(num) {
  if (num == 0) {
    let base = [0];
    console.log(base);
    return;
  }
  if (arr.length === num) {
    console.log(arr);
    return;
  }
  arr.push(arr[arr.length - 1] + arr[arr.length -2])
  num - 1;
  x(num)
}





function merge(left, right) {
  console.log('merge started')
  let sortedArr = [];

  while (left.length && right.length) {
    if (left[0] < right[0]) {
      sortedArr.push(left.shift())
    } else {
      sortedArr.push(right.shift())    
    }
    
  }
  return [...sortedArr, ...left, ...right];
}

const mergeSort = function x(arr) {

  if (arr.length <= 1) {
  console.log('base case hit', arr)
  return arr;
  }

  console.log('Original array: ', arr);
  let half = Math.ceil(arr.length / 2);
  let left = arr.slice(0, half);
  let right = arr.slice(half);

  console.log('Left: ', left);
  console.log('Right: ', right);

  const sortedLeft = mergeSort(left);
  console.log('LEFT HAS BEEN SORTED')
  console.log('sorted left: ', sortedLeft)
  const sortedRight = mergeSort(right);
  console.log('RIGHT HAS BEEN SORTED')
  console.log('sorted right: ', sortedRight);
  const sortedArr = merge(sortedLeft, sortedRight);
  console.log('LEFT AND RIGHT HAVE BEEN MERGED')
  console.log('sorted array: ', sortedArr)
  return sortedArr;

}

// console.log(mergeSort([25, 8, 7, 5, 4, 3, 2, -12]))

const multiples = function x(n) {
  if (n < 1) {
    return 0;
  }

  if (n % 3 === 0 || n % 5 === 0) {
   return n + multiples(n - 1);
  }
  return multiples(n - 1)
  
}

console.log(multiples(1000))


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


const best = [4, 3, 2, 1, 0];

const newArr = [];
let hold;

const mergeSort = function x(arr) {

  if (arr.length > 1) {
    let half = Math.ceil(arr.length / 2);
    console.log(half)
    let left = arr.slice(0, half);
    let right = arr.slice(half)
    console.log(arr)
    console.log(left)
    console.log(right)
    if (half === 3) {
      hold = left.splice(2);
   
    }
    if (left.length === 1) {
      if (left < right) {
        let subSorted = [left[0], right[0]];
        console.log(hold)
        return subSorted
      } else {
        let subSorted = [right[0], left[0]];
        console.log(hold)
        return subSorted
      }
    }
    const first = x(left) 
    // const second = x(right);
    console.log(first)
    // console.log(second)
    
  }
  if (arr.length === 1) {
    console.log('lkajsdf')

  }
}

mergeSort(best)


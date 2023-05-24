// let array = [6, 3, 9, 1, 2];

// function quick(array, begin, end) {
//   if (begin >= end) {
//     return;
//   }

//   let pivot = partition(array, begin, end);
//   quick(array, begin, pivot - 1);
//   quick(array, pivot + 1, end);
// }

// function partition(array, begin, end) {
//   let counter = begin;
//   for (let i = begin; i < end; i++) {
//     if (array[i] < array[end]) {
//       let tmp = array[counter];
//       array[counter] = array[i];
//       array[i] = tmp;
//       counter++;
//     }
//   }

//   let tmp = array[end];
//   array[end] = array[counter];
//   array[counter] = tmp;

//   return counter;
// }

// quick(array, 0, array.length - 1);

// console.log(array);


// Второй вариант быстрой сортировки: 

function quickSort1(array, low, hight) {
    if(array.length === 0) {
      return;
    }
  
    if(low >= hight) {
      return;
    }
  
    let middle = low + Math.floor((hight - low) / 2);
    let pivot = array[middle];
  
    let i = low;
    let j = hight;
  
    while(i <= j) {
      while(array[i] < pivot) {
        i++;
      }
  
      while(array[j] > pivot) {
        j--;
      }
  
      if(i <= j) {
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
        i++;
        j--;
      }
    }
  
    if(low < j) {
      quickSort1(array, low, j);
    }
  
    if(hight > i) {
      quickSort1(array, i, hight);
    }
  }
  
  const array = [8,1,2,0,45];
  const low = 0;
  const hight = array.length - 1;
  
  quickSort1(array, low, hight);
  console.log(array);
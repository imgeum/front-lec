function max(...numbers) {
  let max_val = 0;
  numbers.forEach(num => {
    if(max_val < num) max_val = num    
  });
  return max_val;
}

const result = max(1, 2, 3, 4, 10, 5, 6, 7);
console.log(result);
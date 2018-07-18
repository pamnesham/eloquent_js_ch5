



let arrays = [[1,2,3], [4,5], [6]];


function flatten(a){
  newArray = [];
  for (var i = 0; i < a.length; i++) {
    newArray = newArray.concat(a[i]);
  }
  return (newArray);
}

console.log(flatten(arrays));

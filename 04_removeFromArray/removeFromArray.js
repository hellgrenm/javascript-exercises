const removeFromArray = function(array, ...bort) {
    let newArray = [];
  //  return array.splice(bort, bort);
    
    for ( let i = 0; i < array.length; i++){
        if(!bort.includes(array[i] ) ){
            newArray.push(array[i]);
        }
    }
    return newArray;
    
};

// Do not edit below this line
module.exports = removeFromArray;

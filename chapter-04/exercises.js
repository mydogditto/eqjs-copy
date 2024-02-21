////////////////////////////////////////////////////////////////////////////////
// range ///////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
/**
 * As a bonus assignment, modify your range function 
 * to take an optional third argument that indicates the “step” 
 * value used when building the array. If no step is given, the elements
 *  go up by increments of one, corresponding to the old behavior. 
 * The function call range(1, 10, 2) should return [1, 3, 5, 7, 9].
 *  
 */
// 

function range(start, end, step){
  let array = []
  // if step is negative return an empty array
  if(step < 0){
    return []
  }
    else if (start === end){
      return []
    }
    // if there is no step value 
  else if(step === undefined){
    // loop through using 1 as the step value
  for(i = start; i <= end; i++){
    // push to the array
    array.push(i)
   }
  }
    else {
      // otherwise 
      // create a loop using start as the starting point, end
      // as the ending point and step as the amount to increment by 
    for( start; start <= end; start += step){
      // push the resulting values to the array
   array.push(start)
  }
       }
  // return the array
  return array
  }

////////////////////////////////////////////////////////////////////////////////
// sum /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function sum() {

}

////////////////////////////////////////////////////////////////////////////////
// reverseArray ////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function reverseArray() {

}

////////////////////////////////////////////////////////////////////////////////
// reverseArrayInPlace /////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function reverseArrayInPlace(array) {
return array.reverse()
}

////////////////////////////////////////////////////////////////////////////////
// arrayToList /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function arrayToList() {

}

////////////////////////////////////////////////////////////////////////////////
// listToArray /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function listToArray() {

}

////////////////////////////////////////////////////////////////////////////////
// prepend /////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function prepend() {

}

////////////////////////////////////////////////////////////////////////////////
// nth /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function nth() {

}

////////////////////////////////////////////////////////////////////////////////
// deepEqual ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function deepEqual() {

}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    range,
    sum,
    reverseArray,
    reverseArrayInPlace,
    arrayToList,
    listToArray,
    prepend,
    nth,
    deepEqual,
  };
};
debugger;
var filterBlocks = $('.anavmfe__accordion__item');

var allFilterBlocksArr = filterBlocks;


// changing element position helper function
function arrayIndexMove(arr, fromIndex, toIndex) {
    var element = arr[fromIndex];
    arr.splice(fromIndex, 1);
    arr.splice(toIndex, 0, element);
}

arrayIndexMove(allFilterBlocksArr, 1, 0);

// Updating in DOM
var updateHere = $('.leftanav__option__box');

for(var i=0; i<=allFilterBlocksArr.length; i++){
  allFilterBlocksArr.each(function(item){
  updateHere.append(allFilterBlocksArr[item]);
  });
}
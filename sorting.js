function bubbleSort(array) {
	var counter = 1,
		numOfIterations = 0;
		arr = array;

    if (array.length <= 1) return array;

    while (counter) {
    	counter = 0;
	    
	    for (var i=1; i<arr.length; i++){

	    	if (arr[i] < arr[i-1]) {
	    		var tempVar = arr[i-1];
	    		arr[i-1] = arr[i];
	    		arr[i] = tempVar;
	    		numOfIterations++;
	    		counter++;
	    	}
	    }   	
    }
    
Object.defineProperty(arr, 'counter', {
	value : numOfIterations
});

	return arr;
}



function split ( wholeArray ) {
    if ( wholeArray.length <= 1 ) return wholeArray;

    var firstHalf = [], 
    	secondHalf = [],
    	middleArray = Math.floor( wholeArray.length / 2 );

    for(var i = 0; i < middleArray; i++){
    	firstHalf.push(wholeArray[i]);
    }
    
    for(var j = middleArray; j < wholeArray.length; j++){
    	secondHalf.push(wholeArray[j]);
    }

    return [ firstHalf, secondHalf ];
}


function merge ( firstHalf, secondHalf ) {

	var first = firstHalf,
		second = secondHalf,
		sortedArr = [];

	while (first.length > 0 || second.length > 0) {

		if ( first.length == 0 ) sortedArr.push(second.shift());

		else if ( second.length == 0 ) sortedArr.push(first.shift());

	//Ternary operator checks if first element in first array is less than first element in second array and pushes to sorted array   	
		else first[0] < second[0] ? sortedArr.push(first.shift()) : sortedArr.push(second.shift());

	}

    return sortedArr;
}

function mergeSort(array) {

var leftArray,
 	rightArray;

//Check if arrays have one element or are empty
if (array.length <= 1) return array;

//Splits array into two halves
//var splitResult = split(array);

//Run recursive mergeSort function on both halves
leftArray = mergeSort(split(array)[0]);
rightArray = mergeSort(split(array)[1]);

//Return merged array result
return merge(leftArray, rightArray);

}

var test = function () {

	for(var i=12; i < 20; i++) {
	    var num_items = Math.pow(2,i);
	    var native_test_array = [];
	    var b_test_array = [];
	    var m_test_array = []
	    for(var j=0; j < num_items; j++) {
	        var rand = Math.floor(Math.random() * num_items);
	        native_test_array.push(rand);
	        b_test_array.push(rand);
	        m_test_array.push(rand);
	    }

	    console.time(num_items + "native");
	    native_test_array.sort(function(a,b){ return a-b; });
	    console.timeEnd(num_items + "native");

	    console.time(num_items + "bubble");
	    bubbleSort(b_test_array);
	    console.timeEnd(num_items + "bubble");

	    console.time(num_items + "merge");
	    mergeSort(m_test_array);
	    console.timeEnd(num_items + "merge");  
	}
}







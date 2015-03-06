describe('Bubble Sort', function(){
    var arr = [];

    it('handles an empty array', function(){
        var arr = [];
        expect( bubbleSort(arr) ).toEqual( [] );
    });


    it('handles an array with two elements', function(){
        var arr = [14, 6];
        expect( bubbleSort(arr) ).toEqual( [6, 14] );
    });


    it('handles an array with many elements', function(){
        var arr = [14, 6, 5, 18, 101, 76];
        expect( bubbleSort(arr) ).toEqual( [5, 6, 14, 18, 76, 101] );
    });

    it('counts how many interations', function(){
        var arr = [14, 6, 5];
        expect( bubbleSort(arr).counter ).toEqual( 3 );
    });    

});

describe('Split Array function', function() {
    it('handles an empty array', function(){
        var arr = [];
        expect( split(arr) ).toEqual( [] );
    });


    it('handles an array with two elements', function(){
        var arr = [14, 6];
        expect( split(arr) ).toEqual( [[14],[6]] );
    });

  it('is able to split an array into two halves', function() {
    	var arr = [9, 43, 8, 5, 39, 823, 38, 72];
    	expect( split(arr) ).toEqual( [[9, 43, 8, 5],[39, 823, 38, 72] ] );  	
  });
});

describe('Merge Array function', function() {
  it('is able to sort and merge two halves into an array', function() {
    var arr1 = [4, 14],
    	arr2 = [6, 90];
    expect( merge(arr1, arr2) ).toEqual( [4,6,14,90] );
  });
});

describe('Merge Array function', function() {
  it('is able to sort and merge two halves into an array when one array contains all the small numbers', function() {
    var arr1 = [1, 3],
    	arr2 = [8, 90];
    expect( merge(arr1, arr2) ).toEqual( [1,3,8,90] );
  });
});

describe('Merge Array function', function() {
  it('is able to sort and merge larger arrays and odd arrays', function() {
    var arr1 = [1, 3, 4, 76, 190],
    	arr2 = [8, 9, 43, 61];
    expect( merge(arr1, arr2) ).toEqual( [1,3,4,8,9,43,61,76,190] );
  });
});

describe('Merge Sort', function(){
    it('handles an empty array', function(){
    var arr = [];
    expect( mergeSort(arr) ).toEqual( [] );
  	});

    it('is able to merge and sort a small array', function(){
    var arr = [190, 3];
    expect( mergeSort(arr) ).toEqual( [3, 190] );
  	});

    it('is able to merge two sorted arrays', function(){
    var arr = [190, 3, 8, 61, 4, 76, 1, 9, 43];
    expect( mergeSort(arr) ).toEqual( [1,3,4,8,9,43,61,76,190] );
  	});


    it('is able to handle double numbers', function(){
    var arr = [190, 3, 8, 61, 4, 76, 1, 9, 43, 9];
    expect( mergeSort(arr) ).toEqual( [1,3,4,8,9,9,43,61,76,190] );
  	
  	});
});

//test();

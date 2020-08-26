var chai = require('chai');
var sinon = require('sinon');
// change to give addresses of head,
// write function called get head.

describe('#findMinAndRemove', function() {
  it("should return the smallest element of an array", function() {
    let array = [2, 3, 4, 5, 6, 7]
    expect(findMinAndRemove(array)).toEqual(2)
  });

  it("should remove the smallest element from an array", function() {
    let array = [3, 2, 4, 5, 6, 7]
    findMinAndRemove(array)
    expect(array.includes(2)).toEqual(false)
  });


});


describe('#selectionSort', function() {
  it("should sort an unsorted array", function() {
    let unsorted = [12, 10, 9, 14, 1, 3, 5, 11, 6, 15, 16, 13, 2, 4, 8, 7]
    expect(selectionSort(unsorted)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16])
  });

  it("should make the proper calls on findMinAndRemove", function() {
    var findMinAndRemove = sinon.spy(window, "findMinAndRemove");
    let unsorted = [12, 10, 9, 14, 1, 3, 5, 11, 6, 15, 16, 13, 2, 4, 8, 7]
    expect(selectionSort(unsorted)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16])
    expect(findMinAndRemove.callCount).toEqual(16)
  });
});

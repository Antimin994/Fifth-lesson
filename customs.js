var arr11 = ['a', 'b', 'c'];
arr11.push(1, 2, 3);
console.log(arr11);


var arr22 = [1, 2, 3];
arr22.unshift(4, 5, 6);
console.log(arr22);


var arr33 = ['js', 'css', 'jq'];
console.log(arr33[0]);
console.log(arr33[arr33.length - 1]);


var arr44 = [1, 2, 3, 4, 5];
var arr55 = arr44.slice([0], [3]);
console.log(arr55);
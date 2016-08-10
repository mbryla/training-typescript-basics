// random [0, max)
function rand(max) {
    return Math.random() * max;
}
console.log(rand(25));
// random [x, y)
function randXY(x, y) {
    var diff = Math.abs(y - x);
    return rand(diff) + Math.min(x, y);
}
console.log(randXY(557, 100));
// string reverse "hello" -> "olleh"
function reverseStr(str) {
    var letters = str.split("");
    return reverse(letters).join("");
}
console.log(reverseStr("hello"));
// words reverse "Ala ma kota" -> "kota ma Ala"
function reverseWords(str) {
    var words = str.split(" ");
    return reverse(words).join(" ");
}
console.log(reverseWords("Ala ma kota"));
// helper reverse function
function reverse(input) {
    var reversed = [];
    for (var i = input.length - 1; i >= 0; i--) {
        reversed.push(input[i]);
    }
    return reversed;
}
function filter(arr, condition) {
    var retValue = [];
    for (var i = 0; i < arr.length; i++) {
        if (condition(arr[i], i)) {
            retValue.push(arr[i]);
        }
    }
    return retValue;
}
// filter every second string
console.log(filter(["a", "b", "c", "d"], function (element, index) {
    return index % 2 == 1;
}));
// filter every second number
console.log(filter([1, 2, 3, 4], function (element, index) {
    return index % 2 == 1;
}));
function map(arr, m) {
    var retValue = [];
    for (var i = 0; i < arr.length; i++) {
        retValue.push(m(arr[i], i));
    }
    return retValue;
}
// map string to its length
console.log(map(["abcd", "ef", "ghi"], function (element, index) {
    return element.length;
}));
// map string to its length multiplied by one-based position
console.log(map(["abcd", "ef", "ghi", "sadewq"], function (element, index) {
    return element.length * (index + 1);
}));
//# sourceMappingURL=basics.js.map
// random [0, max)
function rand(max:number):number {
    return Math.random() * max;
}
console.log(rand(25));

// random [x, y)
function randXY(x:number, y:number):number {
    var diff:number = Math.abs(y - x);
    return rand(diff) + Math.min(x, y);
}
console.log(randXY(557, 100));

// string reverse "hello" -> "olleh"
function reverseStr(str:string):string {
    var letters:string[] = str.split("");
    return reverse(letters).join("");
}
console.log(reverseStr("hello"));

// words reverse "Ala ma kota" -> "kota ma Ala"
function reverseWords(str:string):string {
    var words:string[] = str.split(" ");
    return reverse(words).join(" ");
}
console.log(reverseWords("Ala ma kota"));

// helper reverse function
function reverse<T>(input:T[]):T[] {
    let reversed:T[] = [];
    for (let i:number = input.length - 1; i >= 0; i--) {
        reversed.push(input[i]);
    }
    return reversed;
}

// generic list filter
interface Filter<T> {
    (element:T, index:number):boolean;
}

function filter<T>(arr:T[], condition:Filter<T>):T[] {
    let retValue:T[] = [];
    for (let i:number = 0; i < arr.length; i++) {
        if (condition(arr[i], i)) {
            retValue.push(arr[i])
        }
    }
    return retValue;
}

// filter every second string
console.log(filter(["a", "b", "c", "d"],
    function (element:string, index:number):boolean {
        return index % 2 == 1;
    })
);

// filter every second number
console.log(filter([1, 2, 3, 4],
    function (element:number, index:number):boolean {
        return index % 2 == 1;
    })
);

// generic list mapper
interface Mapper<T, V> {
    (element:T, index:number):V;
}

function map<T,V>(arr:T[], m:Mapper<T,V>):V[] {
    let retValue:V[] = [];
    for (let i:number = 0; i < arr.length; i++) {
        retValue.push(m(arr[i], i));
    }
    return retValue;
}

// map string to its length
console.log(map(["abcd", "ef", "ghi"],
    function (element:string, index:number):number {
        return element.length;
    })
);

// map string to its length multiplied by one-based position
console.log(map(["abcd", "ef", "ghi", "sadewq"],
    function (element:string, index:number):number {
        return element.length * (index + 1);
    })
);


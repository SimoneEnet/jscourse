console.log(min(2, 5));
console.log(min2(3, -1));
console.log(min2(1, 1));
console.log(Math.min(2, 5));
console.log(min3(3,0,5,6,7,3,5,2,-1,-6));

function min(a, b){
    let min = 0;
    if(a<b){
        min = a;
    }else{
        min = b;
    }
    return min;
}

function min2(a, b){
    return a < b ? a : b;
}

function min3(...a){
    return Math.min(...a);
}

let music= ["Jazz", "Blues"];
console.log(music);
music.push("Rock-n-Roll");
console.log(music);
music.splice((music.length/2), 1, "Classics");
console.log(music);
music.shift();
console.log(music);
music.unshift("Rap", "Reggae");
console.log(music);

camelize("font-color");

function camelize(str){
    return str.split("-").map((v,i)=>i>0 ? v[0].toUpperCase()+v.substr(1,v.length) : v).join("");
}

let arr = [5,3,8,1,4];
console.log(arr.filter(filterRenge));
console.log(arr);

function filterRenge(value){
    return value>=1 && value<=4;
}

let string = ["HTML", "JavaScript", "CSS"];
console.log(copySorted(string));
console.log(string);

function copySorted(string){
    return string.slice().sort();
}

let john = { name: "John", surname: "Smith", id: 1 };
let pete = { name: "Pete", surname: "Hunt", id: 2 };
let mary = { name: "Mary", surname: "Key", id: 3 };

let users = [ john, pete, mary ];

let usersMapped = users.map(u=>{return {fullName: u.name+" "+u.surname, id: u.id}});

console.log(usersMapped[0].id ); // 1 
console.log(usersMapped[0].fullName ); // John Smith
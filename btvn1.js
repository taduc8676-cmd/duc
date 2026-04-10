let b = prompt("Nhập vào số b:");
function kiemTraChanLe(b) {
    if (b % 2 === 0) {
        return "Chẵn";
    } else {
        return "Lẻ";
    }
}

console.log("Kiểm tra chẵn lẻ:", kiemTraChanLe(b));

function laSoNguyenTo(b) {
    if (b < 2){ 
        return false;
    }
    for (let i = 2; i <= Math.sqrt(b); i++) {
        if (b % i === 0) return false;
    }
    return true;
}

console.log("Là số nguyên tố:", laSoNguyenTo(b));

for (let i = 1; i <= b; i++) {
    if (laSoNguyenTo(i)) {
        console.log(i);
    }
}
console.log("số nguyên tố đã in");

let tong1 = 0;
for (let i = 1; i <= b; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
        tong1 += i;
    }
}
console.log("Tổng = ", tong1);
// cách 2 
let a = prompt("Nhập số a :");
const kiemTraChanLe = function(a) {
    return (a % 2 === 0) ? "Chẵn" : "Lẻ";
};

console.log("Chẵn hay lẻ:", kiemTraChanLe(a));

const laSoNguyenTo = function(a){
    if (a<2){
        return false;
    }
    for (let i = 2; i<= Math.sqrt(a); i++){
        if (a%i === 0 ) return false;
    }
    return true;
};
console.log("số nguyên tố : ", laSoNguyenTo(a))

for (let i = 1; i<= a; i++){
    if (laSoNguyenTo(a)){
        console.log(i);
}
}
let tong2 = 0;
for ( let i=1; i<=a; i++){
    if (i%3 === 0 || i%5 === 0){
        tong2 += i;
    }
}
console.log("Tổng = ",tong2);
// cách 3
let n = prompt("nhập vào n:")
const kiemtrachanle = (n) => (n%2 === 0 ? "Chẵn" : "Lẻ");
console.log("kiểm tra chẵn lẻ : ", kiemtrachanle(n));

const laSoNguyenTo = (n) =>{
    if(n<2){
        return false
    }
    for (let i=2; i<= Math.sqrt(n); i++){
        if(n%i === 0) return false;
    }
    return true;
};
console.log("Các số nguyên tố : ");
 for (let i = 1; i<=n; i++){
    if(laSoNguyenTo(i)){
    console.log(i);
}
}
let tong = 0
for (let i = 1; i<=n; i++){
    if(n%3===0 || n%5===0){
        tong += i;
    }
}
console.log("Tổng", tong);




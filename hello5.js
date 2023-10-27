/*
start1:blbla
*/
function hello(start1, end2, coile3) {
  hello3(start1, end2, coile3);
  for (let i = start1; i <= end2; i = i + coile3) {
    hello3(i);
  }
  hello3("Koniec");
}
hello(0, 10, 1);

function hello2(start1, end2, coile3) {
  hello3(start1, end2, coile3);
  for (let i = start1; i >= end2; i = i - coile3) {
    hello3(i);
  }
  hello3("Koniec");
}
hello2(10, 0, 1);

function hello3(txt) {
  console.log(txt + ".");
}

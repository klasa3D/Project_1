function petla(start1, end2, coile3){
    console.log(start1, end2, coile3);
    for (let i = start1; i<=end2; i=i+coile3){
        console.log(i);
    }
    console.log("Koniec");
}
petla(0,10,1);

function show(txt){
    console.log(txt + ".");
}

function petla2(start1, end2, coile3){
    show(start1, end2, coile3);
    for (let i = start1; i>=end2; i=i-coile3){
    show(i);
    }
    show("Koniec");
}
petla(0,10,1);

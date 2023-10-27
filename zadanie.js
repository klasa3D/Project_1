/*start1:bbbbb*/
function pentla(start1,end2,colie3){
        show(start1,end2,colie3);
        for(let i=start1;i<=end2;i=i+colie3){
            show(i);
        }
        show("Koniec");
}
pentla(0,10,1);

function pentla2(start1,end2,colie3){
    show(start1,end2,colie3);
    for(let i=start1;i>=end2;i=i-colie3){
        show(i);
    }
    show("Koniec");
}
pentla2(10,0,1);
function show(txt){
    console.log(txt+".");
}
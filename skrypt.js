function showLog(id){
    console.log(document.getElementById(id).value);
}

function showWrite(id, id2){
    document.getElementById(id2).innerHTML = document.getElementById(id).value;
}
function LogWrite(id,id2){
    showLog(id)
    showWrite(id,id2)
}
function petla(start1,end2,coile3,typ4){

    start1 = document.getElementById(start1);
    end2 = document.getElementById(end2);
    coile3 = document.getElementById(coile3);
    typ4 = document.getElementById(typ4);
    if(typ4=='+'){
        for(let i = start1 ;i<end2; i=i+coile3){
            console.log(x);
        }
    }else{
        for(let i = start1 ;i<end2; i=i+coile3){
            document.getElementById("wpis").innerHTML = i + "<br>"

        }
    }
}

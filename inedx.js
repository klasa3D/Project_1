function showLog(id)
{
    console.log(document.getElementById(id).value);
}

function showWrite(id, id2)
{
    document.getElementById(id2).innerHTML = document.getElementById(id).value;
}

function LogWrite(id, id2)
{
    showLog(id);
    showWrite(id, id2);
}

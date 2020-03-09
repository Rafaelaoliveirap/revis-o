/*function valida() {

    var nome = document.getElementById("Name").value

    if (nome.length < 3 || isNaN(nome)) {
        document.getElementById("Name").style.backgroundColor = "red"

    }
    else {
        document.getElementById("Name").style.backgroundColor = "white"
    }
}*/

document.getElementById("botao").addEventListener('click', function (formularioSubmit) {
    var nome = document.getElementById("Name").value
    e.preventDefault();
    if (nome.length<3) {
        document.getElementById("Name").style.backgroundColor = "red"
    }
        else{
            document.getElementById("Name").style.backgroundColor="white"
        }

    var email=document.getElementById("email").value
    if(email.indexOf("@")==-1 || email.indexOf(".")==-1 || email.legth==0)
    {
    formularioSubmit.preventDefault();
    document.getElementById("email").style.borderColor="red"    
    }
    else{
        document.getElementById("email").style.borderColor="white"
    }
    });
function  confirmar(){
    var nome = document.getElementById("nome").value;
    var senha = document.getElementById("senha").value;
    var confirmarsenha = document.getElementById("confirmarsenha").value;
    var textarea = document.getElementById("textarea").value;

    if ((nome && senha && confirmarsenha && textarea)!= ""){
    
         window.location.href = "paginas/paginafinal.html";
        
    }
    else {
        alert("Deu ruim coleguinha");
    }
}
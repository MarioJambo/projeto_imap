
function total1() {
  var qtd1 = document.getElementById('qtd1').value;
  var total1 = parseInt(qtd1)*1000;
  document.getElementById('tot1').value=total1;

  var qtd2 = document.getElementById('qtd2').value;
  var total2 = parseInt(qtd2)*2000;
  document.getElementById('tot2').value=total2;

  var qtd3 = document.getElementById('qtd3').value;
  var total3 = parseInt(qtd3)*3000;
  document.getElementById('tot3').value=total3;
}

function total2(){
  var qtd1 = document.getElementById('qtd1').value;
  var totalp1 = document.getElementById('tot1').value;

  document.getElementById('totcompra1').value = totalp1;
  document.getElementById('qtdcompra1').value = qtd1;

  var qtd2 = document.getElementById('qtd2').value;
  var totalp2 = document.getElementById('tot2').value;
  
  document.getElementById('totcompra2').value = totalp2;
  document.getElementById('qtdcompra2').value = qtd2;

  var qtd3 = document.getElementById('qtd3').value;
  var totalp3 = document.getElementById('tot3').value;
  
  document.getElementById('totcompra3').value = totalp3;
  document.getElementById('qtdcompra3').value = qtd3;

  var totalpagar = parseInt(totalp1)+parseInt(totalp2)+parseInt(totalp3);
  document.getElementById('totalcompra').value=totalpagar+".0";
}

function total3(){
  var qtd1 = document.getElementById('qtd1').value;
  var qtd2 = document.getElementById('qtd2').value;
  var qtd3 = document.getElementById('qtd3').value;
  var totalqtd = parseInt(qtd1)+parseInt(qtd2)+parseInt(qtd3);

  if(totalqtd>0){
    return true;
  }
  alert("Não selecionou nenhum item para realizar a compra");
  return false;
}
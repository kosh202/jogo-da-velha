//variaveis globais
//guardar X ou O em cada celula utilizando a flag
var c1, c2, c3, c4, c5, c6, c7, c8, c9;
//decidir se o 1° jogador ecolheu X ou O
var jogador1 = '';
var flag = 1;
//contar quantas veces cada um venceu
var pontosX = 0;
var pontosO = 0;


//escolha manual de quem jogara primeiro
function escolhaJogador(escolha){
  const teste = document.getElementById('teste');
  if (escolha == "X")
  {
    jogador1 = '';
    jogador1 += 'X';
    flag = 1;
    teste.value = 'O 1° jogador escolheu o X';
  }
  else if (escolha == "O")
  {
    jogador1 = '';
    jogador1 += "O";
    flag = 0;
    teste.value = 'O 1° jogador escolheu o O';
  }
}
//mostra um texto na tela dizendo quem ganhou X ou O
function ganhadorX(){
  document.getElementById('resultado').innerHTML = "Jogador X ganhou a última rodada";
  pontosX++;
}

function ganhadorO(){
  document.getElementById('resultado').innerHTML = "Jogador O ganhou a última rodada";
  pontosO++;
}

function empate(){
  document.getElementById('resultado').innerHTML = "Velha";
}



//funçoes para setar o valor X ou O e vez dos jogadores 

function func1(){
  if (flag ==1){
    document.getElementById("celula1").value = "X";
    document.getElementById("celula1").disabled = true;
    flag = 0;
  }
  else {
    document.getElementById("celula1").value = "O";
    document.getElementById("celula1").style.color ='red';
    document.getElementById("celula1").disabled = true;
    flag = 1; 
  }  
}

function func2(){
  if (flag ==1){
    document.getElementById("celula2").value = "X";
    document.getElementById("celula2").disabled = true;
    flag = 0;
  }
  else {
    document.getElementById("celula2").value = "O";
    document.getElementById("celula2").style.color ='red';
    document.getElementById("celula2").disabled = true;
    flag = 1; 
  }  
}

function func3(){
  if (flag ==1){
    document.getElementById("celula3").value = "X";
    document.getElementById("celula3").disabled = true;
    flag = 0;
  }
  else {
    document.getElementById("celula3").value = "O";
    document.getElementById("celula3").style.color ='red';
    document.getElementById("celula3").disabled = true;
    flag = 1; 
  }  
}

function func4(){
  if (flag ==1){
    document.getElementById("celula4").value = "X";
    document.getElementById("celula4").disabled = true;
    flag = 0;
  }
  else {
    document.getElementById("celula4").value = "O";
    document.getElementById("celula4").style.color ='red';
    document.getElementById("celula4").disabled = true;
    flag = 1; 
  }  
}

function func5(){
  if (flag ==1){
    document.getElementById("celula5").value = "X";
    document.getElementById("celula5").disabled = true;
    flag = 0;
  }
  else {
    document.getElementById("celula5").value = "O";
    document.getElementById("celula5").style.color ='red';
    document.getElementById("celula5").disabled = true;
    flag = 1; 
  }  
}

function func6(){
  if (flag ==1){
    document.getElementById("celula6").value = "X";
    document.getElementById("celula6").disabled = true;
    flag = 0;
  }
  else {
    document.getElementById("celula6").value = "O";
    document.getElementById("celula6").style.color ='red';
    document.getElementById("celula6").disabled = true;
    flag = 1; 
  }  
}

function func7(){
  if (flag ==1){
    document.getElementById("celula7").value = "X";
    document.getElementById("celula7").disabled = true;
    flag = 0;
  }
  else {
    document.getElementById("celula7").value = "O";
    document.getElementById("celula7").style.color ='red';
    document.getElementById("celula7").disabled = true;
    flag = 1; 
  }  
}

function func8(){
  if (flag ==1){
    document.getElementById("celula8").value = "X";
    document.getElementById("celula8").disabled = true;
    flag = 0;
  }
  else {
    document.getElementById("celula8").value = "O";
    document.getElementById("celula8").style.color ='red';
    document.getElementById("celula8").disabled = true;
    flag = 1; 
  }  
}

function func9(){
  if (flag == 1){
    document.getElementById("celula9").value = "X";
    document.getElementById("celula9").disabled = true;
    flag = 0;
  }
  else {
    document.getElementById("celula9").value = "O";
    document.getElementById("celula9").style.color ='red';
    document.getElementById("celula9").disabled = true; 
    flag = 1;

  }  
}

//troca entre X e O
function contar(){
  contarPontos();
  if (jogador1 == 'X'){
    jogador1 = 'O';
  }
  else if (jogador1 == 'O')
    jogador1 ='X';
}


function contarPontos(){
  document.getElementById('pontosO').innerHTML = "Jogador O tem " + pontosO + " partidas ganhas";
  document.getElementById('pontosX').innerHTML = "Jogador X tem " + pontosX + " partidas ganhas";
}


function ganhador()
{
// declarando Na arvore DOM  

  c1 = document.getElementById('celula1').value;
  c2 = document.getElementById('celula2').value;
  c3 = document.getElementById('celula3').value;
  c4 = document.getElementById('celula4').value;
  c5 = document.getElementById('celula5').value;
  c6 = document.getElementById('celula6').value;
  c7 = document.getElementById('celula7').value;
  c8 = document.getElementById('celula8').value;
  c9 = document.getElementById('celula9').value;

  // checando se o X foi o vencedor e trocando a cor das celulas ganhadoras 
  if (c1 == 'X'  && c2 == 'X'  && c3 == 'X')
  {
    ganhadorX();
    document.getElementById("celula1").style.backgroundColor = "limegreen";
    document.getElementById("celula2").style.backgroundColor = "limegreen";
    document.getElementById("celula3").style.backgroundColor = "limegreen";
  }
  
  else if (c1 == 'X'  && c4 == 'X'  && c7 == 'X')
  {
    ganhadorX();
    document.getElementById("celula1").style.backgroundColor = "limegreen";
    document.getElementById("celula4").style.backgroundColor = "limegreen";
    document.getElementById("celula7").style.backgroundColor = "limegreen";  
  }

  else if (c2 == 'X'  && c5 == 'X'  && c8 == 'X')
  {
    ganhadorX();
    document.getElementById("celula2").style.backgroundColor = "limegreen";
    document.getElementById("celula5").style.backgroundColor = "limegreen";
    document.getElementById("celula8").style.backgroundColor = "limegreen";
  }

   else if (c3 == 'X'  && c6 == 'X'  && c9 == 'X')
  {
    ganhadorX();
    document.getElementById("celula3").style.backgroundColor = "limegreen";
    document.getElementById("celula6").style.backgroundColor = "limegreen";
    document.getElementById("celula9").style.backgroundColor = "limegreen"; 
  }

  else if (c4 == 'X' && c5 == 'X' && c6 == 'X')
  {
    ganhadorX();
    document.getElementById("celula4").style.backgroundColor = "limegreen";
    document.getElementById("celula5").style.backgroundColor = "limegreen";
    document.getElementById("celula6").style.backgroundColor = "limegreen";
  }

  else if (c7 == 'X' && c8 == 'X' && c9 == 'X')
  {
    ganhadorX(); 
    document.getElementById("celula7").style.backgroundColor = "limegreen";
    document.getElementById("celula8").style.backgroundColor = "limegreen";
    document.getElementById("celula9").style.backgroundColor = "limegreen";
  }

  else if (c1 == 'X' && c5 == 'X' && c9 == 'X')
  {
    ganhadorX();
    document.getElementById("celula1").style.backgroundColor = "limegreen";
    document.getElementById("celula5").style.backgroundColor = "limegreen";
    document.getElementById("celula9").style.backgroundColor = "limegreen"; 
  }

  else if (c3 == 'X' && c5 == 'X' && c7 == 'X')
  {
    ganhadorX();
    document.getElementById("celula3").style.backgroundColor = "limegreen";
    document.getElementById("celula5").style.backgroundColor = "limegreen";
    document.getElementById("celula7").style.backgroundColor = "limegreen";
  }

  // checando se o O foi o vencedor 
  if (c1 == 'O'  && c2 == 'O'  && c3 == 'O')
  {
    ganhadorO();
    document.getElementById("celula1").style.backgroundColor = "limegreen";
    document.getElementById("celula2").style.backgroundColor = "limegreen";
    document.getElementById("celula3").style.backgroundColor = "limegreen";
  }
  
  else if (c1 == 'O'  && c4 == 'O'  && c7 == 'O')
  {
    ganhadorO();
    document.getElementById("celula1").style.backgroundColor = "limegreen";
    document.getElementById("celula4").style.backgroundColor = "limegreen";
    document.getElementById("celula7").style.backgroundColor = "limegreen";  
  }

  else if (c2 == 'O'  && c5 == 'O'  && c8 == 'O')
  {
    ganhadorO();
    document.getElementById("celula2").style.backgroundColor = "limegreen";
    document.getElementById("celula5").style.backgroundColor = "limegreen";
    document.getElementById("celula8").style.backgroundColor = "limegreen";
  }

   else if (c3 == 'O'  && c6 == 'O'  && c9 == 'O')
  {
    ganhadorO();
    document.getElementById("celula3").style.backgroundColor = "limegreen";
    document.getElementById("celula6").style.backgroundColor = "limegreen";
    document.getElementById("celula9").style.backgroundColor = "limegreen";
  }

  else if (c4 == 'O' && c5 == 'O' && c6 == 'O')
  {
    ganhadorO();
    document.getElementById("celula4").style.backgroundColor = "limegreen";
    document.getElementById("celula5").style.backgroundColor = "limegreen";
    document.getElementById("celula6").style.backgroundColor = "limegreen"; 
  }

  else if (c7 == 'O' && c8 == 'O' && c9 == 'O')
  {
    ganhadorO();
    document.getElementById("celula7").style.backgroundColor = "limegreen";
    document.getElementById("celula8").style.backgroundColor = "limegreen";
    document.getElementById("celula9").style.backgroundColor = "limegreen"; 
  }

  else if (c1 == 'O' && c5 == 'O' && c9 == 'O')
  {
    ganhadorO();
    document.getElementById("celula1").style.backgroundColor = "limegreen";
    document.getElementById("celula5").style.backgroundColor = "limegreen";
    document.getElementById("celula9").style.backgroundColor = "limegreen";
  }

  else if (c3 == 'O' && c5 == 'O' && c7 == 'O')
  {
    ganhadorO();
    document.getElementById("celula3").style.backgroundColor = "limegreen";
    document.getElementById("celula5").style.backgroundColor = "limegreen";
    document.getElementById("celula7").style.backgroundColor = "limegreen";
  } 
}

function velha(){
  if((c1 == 'X' || c1 == 'O')&&(c2 == 'X' || c2 == 'O')&&(c3 == 'X' || c3 == 'O')&&(c4 == 'X' || c4 == 'O')&&(c5 == 'X' || c5 == 'O')&&(c6 == 'X' || c6 == 'O')&&(c7 == 'X' || c7 == 'O')&&(c8 == 'X' || c8 == 'O')&&(c9 =='X' ||c9 == 'O')){
    empate();
  }
}

// funçoes para limpar as celulas e suas variaveis globais
function clear(){
  var x = document.getElementsByClassName("celula");
  for (var i = 0; i < x.length; i++)
  {
    x[i].value = ' ';
    x[i].disabled = false;
    x[i].style.backgroundColor = '#707070';
    x[i].style.color = 'black';
  }
  c1 = ' ';
  c2 = ' ';
  c3 = ' ';
  c4 = ' ';
  c5 = ' ';
  c6 = ' ';
  c7 = ' ';
  c8 = ' ';
  c9 = ' ';
}

//função para quando clicar o botao resetar a partida
function resetar() {
  jogador1 = "";
  const teste = document.getElementById('teste');
  teste.value = jogador1;//deixar o texto do input vazia
  
  clear();
}
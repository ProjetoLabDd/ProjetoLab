// id => botaoEscolhido
window.onload = () => {
  if (AFRAME.utils.device.isMobile() == false) { // DESKTOP
        var el = document.getElementById("mycursor");
        el.setAttribute('cursor', 'rayOrigin: mouse;fuse: false');
    } else {
        var el = document.getElementById("mycursor"); // MOBILE
        el.setAttribute('cursor', 'rayOrigin: cursor;fuse: true');
        el.object3D.visible = true;
    }
}

//botao escolhido no html
const botao = document.getElementById("botaoRotEsquerda");

const botao2 = document.getElementById("botaoRotDireita");

const botaoDir = document.getElementById("setaDireita");

const botaoEsq = document.getElementById("setaEsquerda");

const botaoMudaEsq = document.getElementById("tras");

const botaoMudaDir = document.getElementById("frente");

// funcao botao ir para ir para direita

function rotacionar() {
  var x = document.getElementsByClassName("peca");
  for(i=0;i<4;i++){
    x[i].object3D.rotation.y += 0.5;
  }  
}

function rotacionar1() {
  var x = document.getElementsByClassName("peca");
  for(i=0;i<4;i++){
    x[i].object3D.rotation.y -= 0.5;
  }  
}

function andarPraDireita() {
  var x = document.getElementsByClassName("peca");
  for(i=0;i<4;i++){
    x[i].object3D.position.x += 0.5;
  }  
}

function andarPraEsquerda(){
  var x = document.getElementsByClassName("peca");
  for(i=0;i<4;i++){
    x[i].object3D.position.x -= 0.5;
  }  
}

//Mudar a peca esquerda
function mudaPecaEsquerda() {
  var x = document.getElementsByClassName("peca");
  for(i=0; i<4; i++){
    var j = 1;

    if(x[i].object3D.visible == true){
      
      x[i].setAttribute('visible', false); 
      x[j].setAttribute('visible', true);
      
    }
    j++;
  }
  
  
}
/* 
  var p1 = document.getElementById("peca1");
	var p2 = document.getElementById("peca2");
  var p3 = document.getElementById("peca3");
  var p4 = document.getElementById("peca4");
    if (p1.object3D.visible == true) {
       p1.setAttribute('visible', false); 
       p2.setAttribute('visible', true); 
 	}
  else if(p2.object3D.visible == true){
       p2.setAttribute('visible', false); 
       p3.setAttribute('visible', true); 
  }
   else if(p3.object3D.visible == true){
       p3.setAttribute('visible', false); 
       p4.setAttribute('visible', true); 
  }
     else if(p4.object3D.visible == true){
       p4.setAttribute('visible', false); 
       p1.setAttribute('visible', true); 
  }
}
*/
//Mudar a peca direita
function mudaPecaDireita() {
	var p1 = document.getElementById("peca1");
	var p2 = document.getElementById("peca2");
  var p3 = document.getElementById("peca3");
  var p4 = document.getElementById("peca4");
    if (p1.object3D.visible == true) {
       p1.setAttribute('visible', false); 
       p4.setAttribute('visible', true); 
 	}
  else if(p2.object3D.visible == true){
       p2.setAttribute('visible', false); 
       p1.setAttribute('visible', true); 
  }
   else if(p3.object3D.visible == true){
       p3.setAttribute('visible', false); 
       p2.setAttribute('visible', true); 
  }
     else if(p4.object3D.visible == true){
       p4.setAttribute('visible', false); 
       p3.setAttribute('visible', true); 
  }
}
//adicionando evento de click, com a função andarParaDireita feita acima
botao.addEventListener("click", rotacionar);
botao2.addEventListener("click", rotacionar1);
botaoDir.addEventListener("click", andarPraDireita);
botaoEsq.addEventListener("click", andarPraEsquerda);
botaoMudaEsq.addEventListener("click", mudaPecaEsquerda);
botaoMudaDir.addEventListener("click", mudaPecaDireita);

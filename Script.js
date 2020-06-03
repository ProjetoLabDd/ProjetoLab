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
const botao = document.getElementById("botaoEscolhido");

const botaoDir = document.getElementById("setaDireita");

const botaoEsq = document.getElementById("setaEsquerda");

const botaoMudaEsq = document.getElementById("tras");

// funcao botao ir para ir para rotacionar
function rotacionar() {
  peca1.object3D.rotation.y += 0.1;
}

// funcao botao ir para ir para Direita
function andarPraDireita() {
  peca1.object3D.position.x += 0.1;
}

// funcao botao ir para ir para Esquerda
function andarPraEsquerda(){
  peca1.object3D.position.x -= 0.1;
}

//Mudar a peca que esta visivel
function mudaPeca() {
	var p1 = document.getElementById("peca1");
	var p2 = document.getElementById("peca2");
    if (p1.object3D.visible == true) {
       p1.setAttribute('visible', false); 
       p2.setAttribute('visible', true); 
       }
 }

//adicionando evento de click, com a função andarParaDireita feita acima
botao.addEventListener("click", rotacionar);
botaoDir.addEventListener("click", andarPraDireita);
botaoEsq.addEventListener("click", andarPraEsquerda);
botaoMudaEsq.addEventListener("click", mudaPeca);

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

//Aqui estamos pegando por id o botão ja existente no html e declarando ele como uma variavel constante no JavaScript
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
// Cria variaveis locais de acordo com o id de cada peca e faz a verificacao se o atributo visible da peca ta true e muda pra false
// Tem que fazer isso pra todas as 4 pecas
function mudaPeca() {
	var p1 = document.getElementById("peca1");
	var p2 = document.getElementById("peca2");
    if (p1.object3D.visible == true) {
       p1.setAttribute('visible', false); 
       p2.setAttribute('visible', true); 
       }
 }

//adicionando evento de click
//Aqui estamos adicionando ao nosso botao uma lista de eventos... por enquanto so estamos vazendo um evento "Click" que vai chamar a funcao que criamos
botao.addEventListener("click", rotacionar);
botaoDir.addEventListener("click", andarPraDireita);
botaoEsq.addEventListener("click", andarPraEsquerda);
botaoMudaEsq.addEventListener("click", mudaPeca);

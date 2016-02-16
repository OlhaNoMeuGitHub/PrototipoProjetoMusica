
function main() {
	
		canvas = document.createElement("canvas");
		canvas.width = LARGURA;
		canvas.height = ALTURA;
		canvas.style.border = "1px solid #000";
		
		ctx = canvas.getContext("2d");
		document.body.appendChild(canvas);
		document.addEventListener("mousedown", clique);

		//estadoAtual = estados.jogar;
		

		roda();

function roda() {

		atualiza();
		desenha();


		window.requestAnimationFrame(roda);



}
	function atualiza() {
		frames++;

		if(!para){
			setTimeout(function(){obstaculos.atualiza();  },10);}
		else if(temp){
			temp= false;
				//setTimeout(function(){
					
					para = false;
					temp=true;

						//console.log("setTimeout: Ja passou 1 segundo!");


					//}	,tempo);


		}

	}

	
	function desenha() {
		ctx.fillStyle = "#50beff";
		ctx.fillRect(0, 0, LARGURA, ALTURA);
		ctx.fillStyle = "#fff";
		ctx.font = "50px Arial";
		ctx.fillStyle = "#FFf";
		ctx.fillRect(0,340,LARGURA,2);
		ctx.fillRect(0,320,LARGURA,2);
		ctx.fillRect(0,300,LARGURA,2);
		ctx.fillRect(0,280,LARGURA,2);
		ctx.fillRect(0,260,LARGURA,2);

		//linha.desenha();
		  linha.desenha();
		  obstaculos.desenha();

		


		

	}

	//inicializa
	function clique(event) {
		alert('tste');
	}

}



	main();

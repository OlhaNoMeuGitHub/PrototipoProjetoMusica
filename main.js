


function main() {
	
		canvas = document.createElement("canvas");
		canvas.width = LARGURA;
		canvas.height = ALTURA;
		canvas.style.border = "1px solid #000";
		
		ctx = canvas.getContext("2d");
		document.body.appendChild(canvas);
		document.addEventListener("mousedown", clique);
		document.addEventListener("mouseup", cliqueup);
		record = localStorage.getItem("record");
		if (record == null)
			{record = 0;}

		//estadoAtual = estados.jogar;
		
		obstaculos.insere();
		

		roda();
	

function roda() {

		atualiza();
		desenha();


		//window.requestAnimationFrame(roda);



}
	function atualiza() {
		frames++;
		//
		//console.log(frames);

			setInterval(function(){desenha();obstaculos.atualiza();
			if (pontuar == true && !travanota) {score++;} 

			//if(delayStart==true){delay++;}

	//	if(temp){
			
			//temp= false;
			//alert (btClicado);
			//	setTimeout(function(){
				//	oAudio.pause();
				//	temp=false;

//
				//	}	,tempoNota-10);


		},tempo);

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
		ctx.fillText(score, 30 ,60);
		ctx.font = "30px Arial";
		var bt1 = new Botao(5, ALTURA - btnAltura, 80, ALTURA,"#000","DO"); // cria o botao
		ctx.fillStyle = "#fff";
		ctx.fillText("DO", 25 ,ALTURA - (btnAltura/3));

		var bt2 = new Botao(90,ALTURA - btnAltura, 80, ALTURA,"#000","RE");
		ctx.fillStyle = "#fff";
		ctx.fillText("RE", 110 ,ALTURA - (btnAltura/3));

		var bt3 = new Botao(175, ALTURA - btnAltura, 80, ALTURA,"#000","MI");
		ctx.fillStyle = "#fff";
		ctx.fillText("MI", 195 ,ALTURA - (btnAltura/3));

		var bt4 = new Botao(260, ALTURA - btnAltura, 80, ALTURA,"#000","FA");
		ctx.fillStyle = "#fff";
		ctx.fillText("FA", 280 ,ALTURA - (btnAltura/3));

		var bt5 = new Botao(345, ALTURA - btnAltura, 80, ALTURA,"#000","SOL");
		ctx.fillStyle = "#fff";
		ctx.fillText("SOL", 355 ,ALTURA - (btnAltura/3));

		var bt6 = new Botao(430, ALTURA - btnAltura, 80, ALTURA,"#000","LA");
		ctx.fillStyle = "#fff";
		ctx.fillText("LA", 450 ,ALTURA - (btnAltura/3));

		var bt7 = new Botao(515, ALTURA - btnAltura, 80, ALTURA,"#000","SI"); // cria o botao
		ctx.fillStyle = "#fff";
		ctx.fillText("SI", 535 ,ALTURA - (btnAltura/3));


		obstaculos.desenha();

		//linha.desenha();
		  linha.desenha();
		  

		


		

	}

	function desenhaObs() {

			

	}


	//inicializa
	function cliqueup(evt) {
		
		btClicado = "";
		travanota = true;
	}

	function clique(evt) {
		
		var rectNav = canvas.getBoundingClientRect(); //obtêm as coordenadas do mouse na janela do cliente.
  		var pos = {
    	x: evt.clientX - rectNav.left,
   		y: evt.clientY - rectNav.top
		};


		botoes.forEach(function (btn) { // <---------- verificar os botões
    	var clicado = onTarget(pos, btn);
    	if (clicado) {
    		btClicado = btn.texto;
    		//alert(btn.texto);
    		
    	}
  									   });



		
	}

	function Botao(x, y, w, h,color,texto) {
  this.x = x;
  this.y = y;
  this.w = w;
  this.h = h;
  this.texto = texto;

  ctx.fillStyle = this.color = color;
  ctx.fillRect(this.x, this.y, this.w, this.h);
  if (botoes.length < 7) {;
  botoes.push(this); // <------------------------ inserir o botão}
	}
}

	function onTarget(pos, bt) {
  return pos.x > bt.x && pos.x < (bt.x + bt.w) && pos.y > bt.y && pos.y < (bt.y + bt.h);
	}




}



	main();

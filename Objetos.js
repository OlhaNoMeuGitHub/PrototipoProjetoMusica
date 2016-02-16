var canvas, estadoAtual,ALTURA,LARGURA , velocidade = 1,para= false,indice,temp=false,qualNota=0,musica,som,tempo =10,disDeNota,tempoNota,frames =0,
oAudio = document.getElementById('myaudio'), botoes = [], btnAltura = 80, score=0, btClicado ="semNota",record = 0,travanota=false,pontuar=false,
delayStart=false,estadoAtual;




ALTURA = window.innerHeight;
LARGURA = window.innerWidth;
musica=cmm;
disDeNota = LARGURA;
notaTocada ={
			nome:"",
			numero:"",

		};
estados={
		jogar:0,
		jogando:1,
		acabou:2
	};



//Largura.x - barra = distancia
//andar a cada 10 milisegudno
//instanciar no maximo 20 notas
//disdenota = nota0 =1000 nota.tempo/100

//tempo da nota anterior/total de bloquinhos

        // Global variable to track current file name.
        var currentFile = "";
        function playAudio() {
            // Check for audio element support.
            if (window.HTMLAudioElement) {
                try {
                	//som = "Sons/do.mp3"
                   
                    var audioURL = som;
                    oAudio.src = audioURL;

                    // Tests the paused attribute and set state. 
                  //  if (////////////oAudio.paused) {
                        oAudio.play();

                    
//}                    else {
                       // oAudio.pause();
                   // }
                }
                catch (e) {
                    // Fail silently but show in F12 developer tools console
                     if(window.console && console.error("Error:" + e));
                }
            }
        }
             // Rewinds the audio file by 30 seconds.


if (LARGURA >= 500) {
		LARGURA = 600;
		 LTURA = 600;
					}


linha = {
		x: 50,
		y: 200,
		altura: 200,
		largura: 5,
		cor: "#000000",
		colidindo: false,


	

	reset: function(){
			this.velocidade =0;
			this.y=0;
			

			if (this.score > record) {
					record = this.score;
					localStorage.setItem("record", this.score);
				}
			this.score=0;
		},

		
		desenha: function(){
			ctx.fillStyle = this.cor;
			ctx.fillRect(this.x, this.y, this.largura, this.altura);
							}


		};


		obstaculos ={
		_obs:[],
		tempoInsere: 0,
		
		insere: function(){
			this._obs.push({
				//x:LARGURA,
				x:disDeNota,
				y:musica[qualNota].y,
				som:musica[qualNota].som,
				nome:musica[qualNota].nome,
				tempo:musica[qualNota].tempo,
				numero:qualNota,
				//largura: 30 + Math.floor(21 * Math.random()),
				largura: 10,
				altura: 10,
				cor: "#000000",
			});
			if (qualNota < musica.length -1){
				qualNota++;
			}
		//	else
			//	{qualNota = -1;}
			//this.tempoInsere = 30 ;

		},
		
		atualiza: function(){
			
			if(this._obs.length < 20 && qualNota >= 0){
				disDeNota = this._obs[this._obs.length - 1].x + (this._obs[this._obs.length - 1].tempo/tempo)
				this.insere();
				if (this._obs[this._obs.length - 1].tempo > 3000) {
				//alert(this._obs[this._obs.length - 1].nome+" "+this._obs[this._obs.length - 1].tempo+" "+this._obs[this._obs.length - 1].x);
				//console.log(disDeNota);}
			}}
		//	if (qualNota == -1 && this._obs.length == 0) {
		//		alert('Acabou');
			//};
			//else if (!para){
			//	this.tempoInsere--;
			//}
			
				for (var i=0, tam = this._obs.length; i < tam; i++){
				
				var obs = this._obs[i];
				

				obs.x -= velocidade;
			//	alert (obs.x);
				


				if (!linha.colidindo  && linha.x + linha.largura >= obs.x)
				{
	
				
				
					

						//tempoNota = obs.tempo;
						//notaTocada = obs.nome;
						
						//delayStart = true;
						
						if(btClicado != obs.nome && linha.x > obs.x + obs.largura)



						{
							notaTocada = obs;
							this._obs.splice(indice,1);
							travanota = false;
							temp = true;
							tam--;
							i--;
							som = "Sons/erro.wav";
							pontuar = false;
               				playAudio();
               				notaTocada.nome = "erro";


               			}


						else if(btClicado == obs.nome)
						{
							

							
							notaTocada.nome = obs.nome;
							this._obs.splice(indice,1);
							travanota = false;
							temp = true;
							tam--;
							i--;
							btClicado="";
							pontuar = true;
							som = obs.som;
							playAudio();

							////}

						}
						//	if(notaTocada.numero != obs.numero && btClicado != ""){
						//			notaTocada.numero = obs.numero;
									
						//	}
						
					

						//console.log(para);
						break;
					}


						//console.log("setTimeout: Ja passou 1 segundo!");


				
					
					
				

			
			
				
				

			//	if(obs.x <= -obs.largura){
			
				//	this._obs.splice(i,1);
				//	tam--;
				//	i--;
				//}
			}
		},

		limpa: function()
		{
			this._obs =[];

		},

		desenha: function(){
			for (var i = 0, tam = this._obs.length; i < tam; i++){
				var obs= this._obs[i];
				ctx.fillStyle = obs.cor;
				ctx.fillRect(obs.x, obs.y- obs.altura, obs.largura, obs.altura);

			}

		}
		
};

//colcando titulo em letra maiúscula

var titulo = document.querySelector(".tituloPrincipal");
titulo.textContent=" CALCULE SEU IMC";

// buscando a variável botao
var botao = document.getElementById("btn");

// trazendo funcionalidade para o botao
botao.addEventListener("click", function(event){
	event.preventDefault();

	//buscando valores digitados no formulário
	var peso = document.querySelector(".infoPeso").value;

	var altura = document.querySelector(".infoAltura").value;


	var imc = document.querySelector(".tdImc");

	//calculo Imc
	var resultado = peso/(altura * altura);	

	imc.textContent=resultado.toFixed(2);

	var mensagem = document.querySelector(".informacao");


	// definição de resultados conforme o calculo do imc
	if(resultado < 18.5){

		mensagem.textContent="Voçê esta abaixo do peso, cuide melhor da saúde";
	}

	if(resultado >= 18 && resultado<=24.9){

		mensagem.textContent="seu peso está bom, parabéns continue cuidando não relaxe";
	}

	if(resultado >=25 && resultado<=29.9){

		mensagem.textContent="você está com sobrepeso procure uma boa alimentação e pratique exercícios";
	}

	if(resultado >=30 && resultado<=34.9){

		mensagem.textContent="você está com obesidade grau I procure uma boa alimentação e pratique exercícios";
	}

	if(resultado >=35 && resultado<=39.9){

		mensagem.textContent="você está com obesidade grau II procure uma boa alimentação e pratique exercícios Urgente";
	}


	if(resultado >= 40){

		mensagem.textContent="você está com obesidade Grau III, se trate pois está com situção de Risco";
	}

});







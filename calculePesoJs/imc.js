
//colcando titulo em letra maiúscula

var titulo = document.querySelector(".tituloPrincipal");
titulo.textContent=" CALCULE SEU IMC";

// buscando a variável botao
var botao = document.getElementById("btn");

// trazendo funcionalidade para o botao
botao.addEventListener("click", function(event){
	event.preventDefault();

//buscando o formulario no html.
	var form = document.getElementById("formPrincipal");
//buscando o resultado 
	var cliente = infoFomulario(form); 

	
//defenindo o resultado da formula.
	var imc =document.querySelector(".tdImc");
	imc.textContent=cliente.imc;
	

	var frase = document.querySelector(".informacao");


	if(cliente.imc < 18.5){

		frase.textContent="Voçê esta abaixo do peso, cuide melhor da saúde";
	}

	if(cliente.imc>= 18 && cliente.imc<=24.9){

		frase.textContent="seu peso está bom, parabéns continue cuidando não relaxe";
	}

	if(cliente.imc >=25 && cliente.imc<=29.9){

		frase.textContent="você está com sobrepeso procure uma boa alimentação e pratique exercícios";
	}

	if(cliente.imc >=30 && cliente.imc<=34.9){

		frase.textContent="você está com obesidade grau I procure uma boa alimentação e pratique exercícios";
	}

	if(cliente.imc>=35 && cliente.imc<=39.9){

		frase.textContent="você está com obesidade grau II procure uma boa alimentação e pratique exercícios Urgente";
	}


	if(cliente.imc >= 40){

		frase.textContent ="você está com obesidade Grau III, se trate pois está com situção de Risco";
	}


});

	
function infoFomulario(form){

	var cliente = {

			peso: form.peso.value,
			altura: form.altura.value,
			imc: calculeImc(form.peso.value, form.altura.value) 

	}

	return cliente;
}

function calculeImc(peso, altura){

var imc = peso/(altura * altura);	

return imc.toFixed(2);
}






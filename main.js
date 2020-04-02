
function check(){

	var question1 = document.quiz.question1.value;
	var question2 = document.quiz.question2.value;
	var question3 = document.quiz.question3.value;
	var question4 = document.quiz.question4.value;
	var question5 = document.quiz.question5.value;
	var question6 = document.quiz.question6.value;
	var question7 = document.quiz.question7.value;
	var question8 = document.quiz.question8.value;
	var question9 = document.quiz.question9.value;
	var question10 = document.quiz.question10.value;
	var correct = 0;


	if (question1 == "Oui") {
		correct++;
}
	if (question2 == "10 milliards") {
		correct++;
}	
	if (question3 == "Du cloud ou autrement dit des datacenters") {
		correct++;
}
	if (question4 == "Des salles remplies de baies de stockage") {
		correct++;
}
	if (question5 == "10 tonnes") {
		correct++;
}	
	if (question6 == "Non, car sa production necessite une fabrication et des matieres premieres du monde entier") {
		correct++;
}
	if (question7 == "Malheureusement, ce n'est pas assez rentable pour les constructeurs, malgré des efforts") {
		correct++;
}
	if (question8 == "Vrai en utilisant la domotique") {
		correct++;
}	
	if (question9 == "5 à 7 grammes de CO².") {
		correct++;
}
	if (question10 == "C'est encore trop peu connue du grand public") {
		correct++;
}
	
	var pictures = ["AttentionSanté.gif", "AimeNatureDance.gif", "NePaSeplucherLaTeteBANANE.gif"];
	var messages = ["Bon boulot!", "C'est passable", "Tu dois vraiment t'améliorer"];
	var score;

	if (correct <=4 ) {
		score = 2;
	}

	if (correct >= 5 && correct <= 8 ) {
		score = 1;
	}

	if (correct >= 9 && correct <= 10) {
		score = 0;
	}

	document.getElementById("after_submit").style.visibility = "visible";

	document.getElementById("message").innerHTML = messages[score];
	document.getElementById("number_correct").innerHTML = "Tu as " + correct + " réponses justes .";
	document.getElementById("picture").src = pictures[score];
	}
	
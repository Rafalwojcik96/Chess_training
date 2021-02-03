function checkmate()
{
	let correct_answer="nf6";
	let answer = document.getElementById("box").value;
	if (answer == correct_answer)
	{
		document.getElementById("answer").innerHTML= "poprawna odpowiedź"
	}
	else
	{
		document.getElementById("answer").innerHTML= "zła odpowiedź"
	}
}
const checkerboards = [
	{image:"nf6.jpg",answer:"nf6"},
	{image:"qa4.jpg",answer:"qa4"}
];


function checkmate(){
	let correct_answer = checkerboards[0].answer;
	let player_answer = $('#box').val();
	if (player_answer == correct_answer)
	{
		$('.answer').html("That's right! It's best move.")
	}
	else
	{
		$(".answer").html ("It's not best move.")
	}
}
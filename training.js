const checkerboards = [
	{image:"nf6.jpg",answer:"nf6"},
	{image:"qa4.jpg",answer:"qa4"},
	{image:"sicilian_defense.jpg",answer:"nc3"}
];

const array_number = checkerboards[Math.floor(Math.random()*checkerboards.length)];

window.onload = draw;

function draw(){
	$("#exercise").html(`<img src="img/${array_number.image}">`)
}

function checkmate(){
	const correct_answer = array_number.answer;
	const player_answer = $('#box').val();
	if (player_answer == correct_answer)
	{
		$('.answer').html("That's right! It's best move.")
	}
	else
	{
		$(".answer").html ("It's not best move.")
	}
}
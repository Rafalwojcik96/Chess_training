const checkerboards = [
	{image:"nf6.jpg",answer:"nf6", color:"black"},
	{image:"qa4.jpg",answer:"qa4",color:"white"},
	{image:"sicilian_defense.jpg",answer:"nc3",color:"white"},
	{image:"nd3.jpg",answer:"nd3",color:"black"},
];

let array_number = checkerboards[Math.floor(Math.random()*checkerboards.length)];
let score = 0;

window.onload = draw;

function draw(){
	$("#exercise").html(`<img src="img/${array_number.image}">`);
	change_mark()
}

function change_mark(){
	if (array_number.color=="black"){
		$(".chessboard_mark_numbers").html(`<ul>
		<li>1</li><li>2</li><li>3</li><li>4</li><li>5</li><li>6</li><li>7</li><li>8</li>
	</ul>`);
		$(".chessboard_mark").html(`<ol>
		<li>h</li><li>g</li><li>f</li><li>e</li><li>d</li><li>c</li><li>b</li><li>a</li>
	</ol`);
	}
	else {
		$(".chessboard_mark_numbers").html(`<ul>
		<li>8</li><li>7</li><li>6</li><li>5</li><li>4</li><li>3</li><li>2</li><li>1</li>
	</ul>`)
		$(".chessboard_mark").html(`<ol>
		<li>a</li><li>b</li><li>c</li><li>d</li><li>e</li><li>f</li><li>g</li><li>h</li>
	</ol>`)
	}
}

function checkmate(){
	const correct_answer = array_number.answer;
	const player_answer = $('#box').val();
	if (player_answer == correct_answer){	
		$('.answer').html(`
		<div class="correct_answer">
			<div class="label">
				<label for="box">Correct!</label>
			</div>
			<input type="submit" value="Try next!" onclick="next()">
		</div>`)
		score++;
		counter();
	}
	else{	
		$(".answer").html(`
		<div class="correct_answer">
			<div class="label">
				<label for="box">It's not the best move.</label>
			</div>
			<input type="submit" value="Try again!" onclick="again()">
		</div>`);
	}
}

function again(){
	$('.answer').html(`
	<div class="label">
		<label for="box">Find the best move</label>
	</div>
	<input type="text" id="box" autocomplete="off">
	<div id="button">
		<input type="submit" value="Check!" onclick="checkmate()">
	</div>`)
}

function next(){
	array_number=checkerboards[Math.floor(Math.random()*checkerboards.length)];
	draw();
	$(".answer").html(`
	<div class="label">
		<label for="box">Find the best move</label>
	</div>
	<input type="text" id="box" autocomplete="off">
	<div id="button">
		<input type="submit" value="Check!" onclick="checkmate()">
	</div>`)
}

function counter(){
	$('.points_counter').html(`Your score: ${score}`)
}
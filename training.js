let score = 0;
let array_number;

const checkerboards_openings = [
	{image:"o1.jpg",answer:"nc3",color:"white"},
	{image:"o2.jpg",answer:"ng6",color:"black"},
	{image:"o3.jpg",answer:"nc6",color:"black"},
	{image:"o4.jpg",answer:"nc6",color:"white"}
];
const checkerboards_standard = [
	{image:"s1.jpg",answer:"nf6", color:"black"},
	{image:"s2.jpg",answer:"qa4",color:"white"},
	{image:"s3.jpg",answer:"nd3",color:"black"},
	{image:"s4.jpg",answer:"bc5",color:"white"},
	{image:"s5.jpg",answer:"qg5",color:"white"},
	{image:"s6.jpg",answer:"e5",color:"white"},
	{image:"s7.jpg",answer:"ne4", color:"black"}
];

function selected_standard(){
	$('.training').html(`<div class="chessboard_mark_numbers"></div>
	<div id="exercise"></div>
	<div class="points_counter">Your score: 0</div>
	<div class="answer">
		<div class="label">
			<label for="box">Find the best move</label>
		</div>
		<input type="text" id="box" autocomplete="off">
		<div id="button">
			<input type="submit" value="Check!" onclick="checkmate_standard()">
		</div>	
	</div>
	<div style="clear: both;"></div>
	<div class="chessboard_mark"></div>`)
	array_number = checkerboards_standard[Math.floor(Math.random()*checkerboards_standard.length)]
	draw();
	return array_number;
}

function selected_openings(){
	$('.training').html(`<div class="chessboard_mark_numbers"></div>
	<div id="exercise"></div>
	<div class="points_counter">Your score: 0</div>
	<div class="answer">
		<div class="label">
			<label for="box">Find the best move</label>
		</div>
		<input type="text" id="box" autocomplete="off">
		<div id="button">
			<input type="submit" value="Check!" onclick="checkmate_openings()">
		</div>	
	</div>
	<div style="clear: both;"></div>
	<div class="chessboard_mark"></div>`)
	array_number = checkerboards_openings[Math.floor(Math.random()*checkerboards_openings.length)];
	draw();
	return array_number;
}


function draw(){
	$("#exercise").html(`<img src="img/${array_number.image}">`);
	change_mark();
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

function checkmate_standard(){
	const correct_answer = array_number.answer;
	const player_answer = $('#box').val();
	if (player_answer == correct_answer){	
		$('.answer').html(`
		<div class="correct_answer">
			<div class="label">
				<label for="box">Correct!</label>
			</div>
			<input type="submit" value="Try next!" onclick="next_standard()">
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
			<input type="submit" value="Try again!" onclick="again_standard()">
		</div>`);
		score--;
		counter();
	}
}

function checkmate_openings(){
	const correct_answer = array_number.answer;
	const player_answer = $('#box').val();
	if (player_answer == correct_answer){	
		$('.answer').html(`
		<div class="correct_answer">
			<div class="label">
				<label for="box">Correct!</label>
			</div>
			<input type="submit" value="Try next!" onclick="next_openings()">
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
			<input type="submit" value="Try again!" onclick="again_openings()">
		</div>`);
		score--;
		counter();
	}
}

function again_standard(){
	$('.answer').html(`
	<div class="label">
		<label for="box">Find the best move</label>
	</div>
	<input type="text" id="box" autocomplete="off">
	<div id="button">
		<input type="submit" value="Check!" onclick="checkmate_standard()">
	</div>`)
}

function again_openings(){
	$('.answer').html(`
	<div class="label">
		<label for="box">Find the best move</label>
	</div>
	<input type="text" id="box" autocomplete="off">
	<div id="button">
		<input type="submit" value="Check!" onclick="checkmate_openings()">
	</div>`)
}

function next_standard(){
	array_number=checkerboards_standard[Math.floor(Math.random()*checkerboards_standard.length)];
	draw();
	$(".answer").html(`
	<div class="label">
		<label for="box">Find the best move</label>
	</div>
	<input type="text" id="box" autocomplete="off">
	<div id="button">
		<input type="submit" value="Check!" onclick="checkmate_standard()">
	</div>`)
}



function next_openings(){
	array_number=checkerboards_openings[Math.floor(Math.random()*checkerboards_openings.length)];
	draw();
	$(".answer").html(`
	<div class="label">
		<label for="box">Find the best move</label>
	</div>
	<input type="text" id="box" autocomplete="off">
	<div id="button">
		<input type="submit" value="Check!" onclick="checkmate_openings()">
	</div>`)
}

function counter(){
	$('.points_counter').html(`Your score: ${score}`)
}




$(document).ready(function() {

 	
 	function start_game () {

  		$two_players_btn.click(function () {

 			$two_players_btn.remove();
 			$one_player_btn.remove();

 			$question.html("Enter your names");

 			
 			two_players ();

 		});


   		$one_player_btn.click(function () {

 			$two_players_btn.remove();
 			$one_player_btn.remove();

 			$question.html("What is your name?");


 			
 			one_player ();

 		});

 	}


 	function two_players () {

 		$question.css("margin", "30px 0");
 		$buttons_row_1_child.after("<button id = 'submit' style = 'width: 150px; margin: 10px 0 40px 0;'>Enter</button>").after("<input id = 'player-1' style = 'display: block;' placeholder='Player 1 '</input>" + "<input id = 'player-2' style = 'display: block;' placeholder='Player 2 '</input>");

 		$("#submit").click(function() {

 			
 			$question.remove();
 			$("input").css("display", "none");
 			$("#submit").remove();

 			
 			$pick_color.html(

 				
 				$("#player-1").val() + " is <span style='color: #4189C7;'>Blue</span>, and " + $("#player-2").val() + " is <span style='color: #C73D47;'>Red</span>.</br>" +
 				$("#player-1").val() + ", move first!"

 				);

 			
	 		$pick_color.css("display", "block");
	 		$pick_color.css("margin", "25px 0");


	 		
	 		num_of_players = 2;

	 		
	 		make_board ();

 		});

 	}


 	function one_player () {


 		$buttons_row_1_child.after("<button id = 'submit'>Here's My Name</button>").after("<input placeholder='First Name'</input>");

 		
 		$("#submit").click(function() {

 			
 			$question.remove();
 			$("input").css("display", "none");
 			$("#submit").remove();

 			$pick_color.html("Hello, " + $("input").val() + "! " + "Are you feeling Hot or Cool?")

	 		$pick_color.css("display", "block");
	 		$pick_color.css("margin", "25px 0");

	 		$red_btn.css("display", "initial");
	 		$blue_btn.css("display", "initial");

 		});

 		
 		$red_btn.click(function () {

 			$blue_btn.remove();
 			$red_btn.remove();

 			player.mark_color = "red";
 			computer.mark_color = "blue";

 			$("h2").html("You are <span style='color: #C73D47;'>Red</span>.");

 		
 			make_board ();

 		});

 		
 		$blue_btn.click(function () {

 			$blue_btn.remove();
 			$red_btn.remove();

 			player.mark_color = "blue";
 			computer.mark_color = "red";

 			$("h2").html("You are <span style='color: #4189C7;'>Blue</span>.");

 			
 			make_board ();

 		});

 	}


	// make board with 7 columns and 6 rows.
	function make_board () {

		for (var i = 0; i < 6; i++) {

			for (var j = 0; j < 7; j++) {

				
				var $circle = $("<div class = 'circle' data-name = 'nothing'></div>");
				$circle.addClass("col-" + j);
				$circle.addClass("row-" + i);
				$row.append($circle);
				$row.css("background-color", "lightgreen");

			}

		}

		// give data-value (0-41) to all spots (circles).
		var $circles = $(".circle");

		for (var i = 0; i < $circles.length; i++) {

			$circles.eq(i).attr("data-value", i);

		}

		if (num_of_players === 2) {

			two_players_move ();

		} else {

			computer_move ();
			player_move ();

		}

	}

 	// this is where it all begins.
 	start_game ();

});
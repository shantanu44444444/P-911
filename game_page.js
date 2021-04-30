player1_name = localStorage.getItem("player1_name");
player2_name = localStorage.getItem("player2_name");


player1_score = 0;
player2_score = 0;

document.getElementById("player_1_n").innerHTML = player1_name + " : ";
document.getElementById("player_2_n").innerHTML = player2_name + " : ";

document.getElementById("Player1_score").innerHTML = player1_score;
document.getElementById("Player2_score").innerHTML = player2_score;

document.getElementById("Player_question").innerHTML = " Question turn - " + player1_name;
document.getElementById("player_answer").innerHTML = " Answer turn - " + player2_name;

function send() {
    
    number1 = document.getElementById("number1").value;
    number2 = document.getElementById("number2").value;

    actual_answer = number1 * number2 ;
    console.log(actual_answer);
    console.log(number1);
    console.log(number2);
    localStorage.setItem("Real answer", actual_answer)

    question_number = "<h4>" + number1 + " X " + number2 + "</h4>";

    input_box = "<br> Answer : <input type='number' id='input_check_box'>";

    check_button = "<br></br> <button class='btn btn-info' onclick='check()'> Check </button>";


    row = question_number + input_box + check_button;

    document.getElementById("output").innerHTML = row;

    document.getElementById("number1").value = "";
    document.getElementById("number2").value = "";

}
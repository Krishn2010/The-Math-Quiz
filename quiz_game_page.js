function send() {
    number_1 = document.getElementById("player1_name_input").value;
    number_2 = document.getElementById("player2_name_input").value;
    actual_answer = parseInt(number_1) * parseInt(number_2);

    question_number = "<h4>"+number_1+"x"+number_2+"</h4>";
    input_box = "<br>Answer: <input type='number' id='input_check_box'>";
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
    row = question_number + input_box + check_button;
    document.getElementById("output").innerHTML = row;
    document.getElementById("number1").innerHTML = "";
    document.getElementById("number2").innerHTML = "";
}
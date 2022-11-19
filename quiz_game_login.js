function addUser() {
    user_name_1 = document.getElementById("player1_name_input").innerHTML.value;
    user_name_2 = document.getElementById("player2_name_input").innerHTML.value;

    localStorage.setItem("player 1:", user_name_1);
    localStorage.setItem("player 2:", user_name_2);

    window.location = "game_page.html";
}
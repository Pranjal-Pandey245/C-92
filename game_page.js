player1= localStorage.getItem("player1");
player2= localStorage.getItem("player2");

player1_score= 0;
player2_score= 0;

document.getElementById("player1_name").innerHTML=player1+"- ";
document.getElementById("player2_name").innerHTML=player2+"- ";

document.getElementById("player1_score").innerHTML=player1_score;
document.getElementById("player2_score").innerHTML=player2_score;

document.getElementById("player_question").innerHTML="question turn- "+player1;
document.getElementById("player_answer").innerHTML="answer turn- "+player2;


function send(){
    word=document.getElementById("word").value;
    lowercase=word.toLowerCase();

    carat1=lowercase.charAt(1);

    length_divide= Math.floor(lowercase.length/2);
    charat2= lowercase.charAt(length_divide);

    length_minus= lowercase.length-1;
    charat3= lowercase.charAt(length_minus);

    remove_charat1= lowercase.replace(carat1, "_");
    remove_charat2= remove_charat1.replace(charat2, "_");
    remove_charat3= remove_charat2.replace(charat3, "_");

    question_word= "<h4 id='display'> Q."+remove_charat3+"</h4>";
    input_box= "<br>answer <input type='text' id='input_checkbox'>";
    check_button= "<br> <br> <button class='btn btn-info' onclick='check()'>Check</button>";
    row= question_word+input_box+check_button;
    document.getElementById("output").innerHTML=row;
    document.getElementById("word").value="";

}

question_turn="player1";
answer_turn="player2";

function check(){
    get_answer=document.getElementById("input_checkbox").value;
    answer=get_answer.toLowerCase();

    if(lowercase==answer){
        if(answer_turn=="player1"){
            player1_score=player1_score+1;
            document.getElementById("player1_score").innerHTML=player1_score;
        }

        else{
            player2_score=player2_score+1;
            document.getElementById("player2_score").innerHTML=player2_score;
        }
    
    }


    if(question_turn=="player1"){
        question_turn="player2";
        document.getElementById("player_question").innerHTML="question turn - "+player2;
    }
        else{
        question_turn="player1"
        document.getElementById("player_question").innerHTML="question turn - "+player1;
    }

    if(answer_turn=="player1"){
        answer_turn="player2";
        document.getElementById("player_answer").innerHTML="answer turn -"+player2;
    }
    else{
        answer_turn="player1";
        document.getElementById("player_answer").innerHTML="answer turn -"+player1;
    }

    document.getElementById("output").innerHTML="";
}
let question_correct = [];
let question_correctC = [];

function getQuestions() {

    const totalQuestions = document.getElementById("total-questions").value;
    const difficulty = document.getElementById("select-difficulty").value;
    const type = document.getElementById("select-type").value;
    const category = document.getElementById("select-category").value;
    const url = `https://opentdb.com/api.php?amount=${totalQuestions}&category=${category}&difficulty=${difficulty}&type=${type}`;
    console.log(url)

    fetch(url)
        .then((response) => response.json())
        .then((data) => printQuestions(data))
}

function printQuestions(data) {

    for (let i = 0; i < data.results.length; i++) {
        question_correct.push(data.results[i].correct_answer);
    }

    question_correctC.push(...question_correct);

    const containerQuestions = document.getElementById("container-questions");
    const chooseAnswers=document.getElementById("choose-answers");
    chooseAnswers.innerHTML=`<h6> Please, Choose the Correct Answers </h6>`;

    for (let i = 0; i < data.results.length; i++) {

        if (data.results[i].type === "boolean") {

            correctAnswer = data.results[i].correct_answer;
            arrAnswers = [data.results[i].incorrect_answers[0]];
            arrAnswers.splice(Math.floor(Math.random() * 2), 0, correctAnswer);
            // incorrectAnswer = data.results[i].incorrect_answers[0];

            // arrAnswers = [correctAnswer, incorrectAnswer];

            

            containerQuestions.innerHTML += `<div class="row d-flex justify-content-center align-items-center">
                                                <div class="col-md-6">
                                                    <div class="card border-white mt-4 ">
                                                        <div class="card-body">
                                                            <p class="text-question text-white">${data.results[i].question}</p>
                                                            <div class="text-center">
                                                                <select id="Value-select${i}" style="width: 30%; display: inline-block;" class="form-select" required>
                                                                    <option></option>
                                                                    <option id="${arrAnswers[0]}" value="${arrAnswers[0]}">${arrAnswers[0]}</option>
                                                                    <option id="${arrAnswers[1]}" value="${arrAnswers[1]}">${arrAnswers[1]}</option>  
                                                                </select>
                                                            </div>   
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>`;

        } else {
            correctAnswer = data.results[i].correct_answer;
            arrAnswers = [data.results[i].incorrect_answers[0], data.results[i].incorrect_answers[1], data.results[i].incorrect_answers[2]];
            arrAnswers.splice(Math.floor(Math.random() * 4), 0, correctAnswer);

            containerQuestions.innerHTML += `<div class="row d-flex justify-content-center align-items-center">
                                                <div class="col-md-6 ">
                                                    <div class="card border-white mt-4 ">
                                                        <div class="card-body">
                                                            <p class="text-question text-white">${data.results[i].question} </p>
                                                            <div class="text-center ">
                                                                <select id="Value-select${i}" style="width: 30%; display: inline-block;" class="form-select" aria-label="Default select example" required>
                                                                    <option></option>    
                                                                    <option id="${arrAnswers[0]}" value="${arrAnswers[0]}">${arrAnswers[0]}</option>
                                                                    <option id="${arrAnswers[1]}" value="${arrAnswers[1]}">${arrAnswers[1]}</option>
                                                                    <option id="${arrAnswers[2]}" value="${arrAnswers[2]}">${arrAnswers[2]}</option>
                                                                    <option id="${arrAnswers[3]}" value="${arrAnswers[3]}">${arrAnswers[3]}</option>
                                                                </select>         
                                                            </div> 
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>`;
        }

    }
    containerQuestions.innerHTML += `<div class="text-center ">
                                        <button id="buttonC" class=" mt-4 mb-4 btn btn-success col-md-4 button-add form-check">Enviar respuestas <i class="fas fa-paper-plane"></i></button>
                                    </div>`

}

function score() {

    const selec = document.getElementById("select-type").value;
    const form2 = document.getElementById("container-questions");
    const chooseAnswers=document.getElementById("choose-answers");
    chooseAnswers.innerHTML="";
    let cont = 0;

    console.log(question_correctC)
    if (selec == "boolean") {
        for (let i = 0; i < question_correctC.length; i++) {
            console.log(document.getElementById(`Value-select${i}`).value)
            if (document.getElementById(`Value-select${i}`).value === question_correctC[i]) {
                cont++;
            }
        }
    } else {
        for (let i = 0; i < question_correctC.length; i++) {
            if (document.getElementById(`Value-select${i}`).value === question_correctC[i]) {
                cont++;
            }
        }
    }
    form2.innerHTML = "";
    form2.innerHTML = `<div class="col-md-6 mt-5" style="margin: auto;">
                            <div class="alert alert-light">
                                <div class="alert-body">
                                    <div class="text-center text-white">
                                        <h5 class="fw-bold">Results</h5>
                                        <p><i class="fas fa-check-circle"></i>  ${cont} Correct Answers</p>
                                        <p><i class="fas fa-times-circle"></i> ${question_correctC.length - cont} Incorrect Answers</p>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>`;
    question_correctC = [];
}

function getCategories() {
    const url = 'https://opentdb.com/api_category.php';
    fetch(url)
        .then((response) => response.json())
        .then((data) => printCategories(data.trivia_categories))
}

function printCategories(categories) {
    const categoriesContainer = document.getElementById('select-category');
    categories.forEach((category) => {
        categoriesContainer.innerHTML += `<option value="${category.id}">${category.name}</option>`;
    })
}

getCategories();




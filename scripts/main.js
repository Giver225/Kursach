window.onload = function(){
    
    let result = {};
    let step = 0;

    let resp = fetch("JSON/questions.json")
    mydata = resp.json();
    console.log(mydata);

    console.log(quiz[0]['quest']);
    // 
    function showQuestion(questionNumber){
        document.querySelector(".question_font").innerHTML = quiz[questionNumber]['quest'];
        let answer = ''
        for (let key in quiz[questionNumber]['ans']){
            answer += `<li data-v=${key} class="answer-variant">${quiz[questionNumber]['ans'][key]}</li>`
        }
        document.querySelector(".answer").innerHTML = answer;
    }

    document.onclick = function (event){
        event.stopPropagation();
        if(event.target.classList.contains("answer-variant") && step < quiz.length ){
            if (result[event.target.dataset.v] != undefined){
                result[event.target.dataset.v]++;
            }else{
                result[event.target.dataset.v] = 1;
            }
            step++;
            if(step == quiz.length){
                // Load answer page here
            }
        }
        
        showQuestion(step)
    }

    showQuestion(step)
}
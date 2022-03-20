window.onload = function(){
    
    let result = {};
    let step = 0;

    console.log(quiz[0]['quest']);
    
    // db = openDatabase("ToDo", "0.1", "A list of to do items.", 200000);
    // db.transaction(function(tx) {
    //     tx.executeSql("SELECT COUNT(*) FROM ToDo", [], function (result) { alert('dsfsdf') }, function (tx, error) {
    //     tx.executeSql("CREATE TABLE ToDo (id REAL UNIQUE, label TEXT, timestamp REAL)", [], null, null);
    //     })});
            
    
    // if(!db){alert("Failed to connect to database.");}

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
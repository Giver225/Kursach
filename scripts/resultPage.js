window.onload = function(){
    ans = sessionStorage.getItem('answers');
    res = {}
    maxId = 0;
    maxNum = 0;
    for (let i = 0; i < ans.length; i++) {
        if(res[ans[i]]!=undefined){
            res[ans[i]]++;
            if(res[ans[i]]>maxNum){
                maxNum = res[ans[i]];
                maxId = ans[i];
            }
        }else{
            res[ans[i]]=1;
        }
        
    }
    fetch('JSON/places.json')
    .then(response => response.json())
    .then(function(places){
        document.querySelector(".placeName").innerHTML = places[maxId]['name'];
        document.querySelector(".placeDiscription").innerHTML = places[maxId]['discription'];
        document.querySelector(".placeAdress").innerHTML = places[maxId]['adress'];
    });
    
}
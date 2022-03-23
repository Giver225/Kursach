window.onload = function(){
    ans = sessionStorage.getItem('answers');
    res = []
    for (let i = 0; i < ans.length; i++) {
        if(res[ans[i]]!=undefined){
            res[ans[i]]++;
        }else{
            res[ans[i]]=1;
        }
        
    }
    console.log(ans);
}
 var firstLoad =document.getElementById('firstLoad');
 var checkPass =document.getElementById('checkPass');
 function checkFun(){
    var passCode =document.getElementById('passCode').value;
    if (passCode==='04/09/2000'){
        firstLoad.style.display="none";
        checkPass.style.display='block';
        console.log("password is correct")
    }
    else{
        var errrodiv=document.createElement('h3');
        errrodiv.style.color="red";
        errrodiv.innerHTML="You entered Pass Code is not Correct ): "
        firstLoad.appendChild(errrodiv);
        
    }
 }
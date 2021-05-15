var CurrentTab = 1;
var history1 = [""];
var history2 = [""];
var history3 = [""];
var tabs1 = [""];
var tabs2 = [""];
var tabs3 = [""];
var clickPerm = 0;
var resetPerm = 1;

function clickNumber(va){
    
    if(resetPerm == 0){
        clickclr();
        resetPerm = 1;
    }

    document.calculator.display.value+=va;
    clickPerm = 0;
}

function clickSimbol(va){

    var simb = document.calculator.display.value;
    
    if(document.calculator.display.value == ""){
        if (va == '+' || va == '-'){
        document.calculator.display.value+=va;
        clickPerm = 1;
        return;
        }
        return;
    }
    if(clickPerm == 0){
        document.calculator.display.value+=va;
        clickPerm = 1;
        return;
    }
}

function clickUnRe(ur){
    if(ur == 0){

    }else{
        
    }
}

function clickclr(){
    document.calculator.display.value="";
    clickPerm = 0;
}

function clickequ(){

    if(CurrentTab == 1){
        history1.push(document.calculator.display.value);
    }else if(CurrentTab == 2){
        history2.push(document.calculator.display.value);
    }else{
        history3.push(document.calculator.display.value);
    }

    if (document.calculator.display.value != ""){
        var Display = eval(document.calculator.display.value);
        document.calculator.display.value = Display;
        clickPerm = 0;
        resetPerm = 0;
    }
}

function clickTab(tab){
    if(CurrentTab != tab){

        if(CurrentTab == 1){
            tabs1[0] = document.calculator.display.value;
            tabs1[1] = clickPerm;
        
        }else if(CurrentTab == 2){
            tabs2[0] = document.calculator.display.value;
            tabs2[1] = clickPerm;

        }else{
            tabs3[0] = document.calculator.display.value;
            tabs3[1] = clickPerm;
            
        }

        document.calculator.display.value="";

        //console.log(tab , CurrentTab);

        CurrentTab = tab;

        if(CurrentTab == 1){
            document.calculator.display.value = tabs1[0];
            clickPerm = tabs1[1];     
        
        }else if(CurrentTab == 2){
            document.calculator.display.value = tabs2[0];
            clickPerm = tabs2[1];

        }else{
            document.calculator.display.value = tabs3[0];
            clickPerm = tabs3[1]; 
        
        }

        if(document.calculator.display.value == undefined){
            document.calculator.display.value="";
        }
    }
}





/*

function clickTab(tab){
    if(CurrentTab != tab){
       tabs = tabs.unshift(document.calculator.display.value);
       document.calculator.display.value="";

       console.log(tab , CurrentTab);
       tab = CurrentTab;

       var item = tabs[tab];

       if(item != undefined){
            document.calculator.display.value = tabs[tab];
       }
       

       }
}






function clickadd(){
    document.calculator.display.value+="+";
}
function clicksub(){
    document.calculator.display.value+="-";
}
function clickmulti(){
    document.calculator.display.value+="*";
}
function clickdiv(){
    document.calculator.display.value+="/";
}




function click1(){
    document.calculator.display.value+=1;
}
function click2(){
    document.calculator.display.value+=2;
}
function click3(){
    document.calculator.display.value+=3;
}
function click4(){
    document.calculator.display.value+=4;
}
function click5(){
    document.calculator.display.value+=5;
}
function click6(){
    document.calculator.display.value+=6;
}
function click7(){
    document.calculator.display.value+=7;
}
function click8(){
    document.calculator.display.value+=8;
}
function click9(){
    document.calculator.display.value+=9;
}
function click0(){
    document.calculator.display.value+=0;
}
*/
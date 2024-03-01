const display=document.querySelector("input");
function append(input){
    display.value +=input;
}function cleardisplay(){
display.value="";
}
function result(){
    try{
        display.value=eval(display.value);

    }
    catch(e){
        display.value="error";

    }
}

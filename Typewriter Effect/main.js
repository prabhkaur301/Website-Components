let array=[ "Front-End Developer","Graphic-Designer","Video-Editor"]; // array containing all words that will be animating
let count=0; // index of current word
let index=0; // index of current letter of current word
let current_word="";
let current_letter="";

(function typing(){
    if(count===array.length){
        count=0;
    }
    current_word=array[count];
    current_letter=current_word.slice(0,++index) ;// slice the current word into each letter (0 , one less than ++index)
    document.querySelector(".typing-effect").textContent=current_letter;
    if(current_letter.length===current_word.length){
        index=0;
        count++;
    }
    setTimeout(typing,348)

}())   //self invoked function (iify)


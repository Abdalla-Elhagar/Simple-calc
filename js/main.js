let Display = document.querySelector(".display");
let Buttons = Array.from(document.getElementsByClassName("button"));

Buttons.map(button => {
    
    button.addEventListener("click" , (e) =>{
        
        switch(e.target.innerText) {
            case 'C' :
                Display.innerText = "";
            break;
            case 'DEL' :
                if (Display.innerText){
                    Display.innerText = Display.innerText.slice(0, -1);
                }
            break;
            case '=':
                try{
                    Display.innerText = eval(Display.innerText)
                } catch {
                    Display.innerText = "ERROR!";
                }
            break;
            default:
                Display.innerText += e.target.innerText;
            break;
        }
    })

})
//  const buttons = document.getElementsByClassName('button');
// const inputText = document.getElementById('input');


// for(let i = 0; i < buttons.length; i++) {
//     buttons[i].addEventListener('click', (event)=>{
//    //console.log(event.target.innerHTML);
//    // inputfield.value = event.target.innerHTML;
//    let inputText = "";
//    switch (event.target.innerHTML) {
//        case 'C':
//            inputText = null;
//            break;
//        case '=':
//            inputText = eval(input.value);
//            break;
//        case '←':
//            inputText = input.value.slice(0, input.value.length - 1)
//            break;
//        default:
//            inputText = `${input.value}${event.target.innerHTML}`

//    }
//    input.value = inputText;
// }
// )}

const box = document.getElementsByClassName("box")

const input = document.getElementById("input")

for (i = 0; i < box.length; i++) {
    box[i].addEventListener("click", (event) => {
        let inputText = "";
        switch (event.target.innerHTML) {
            case 'C':
                inputText = null;
                break;
            case '=':
                inputText = eval(input.value);
                break;
            case '←':
                inputText = input.value.slice(0, input.value.length - 1)
                break;
            default:
                inputText = `${input.value}${event.target.innerHTML}`

        }
        input.value = inputText;
    }
    )
}
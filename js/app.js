console.log('Desde app.js');

const input = document.querySelector('.form__input');
const button = document.querySelector('.form__button');
const form = document.querySelector('.form');




let inputContent = '';



input.addEventListener( 'blur', inputMail);
button.addEventListener('click', inputSubmit);


function inputMail(e){
    inputContent = e.target.value;
}

function inputSubmit(e){
    e.preventDefault();
    clearSubmit();

    if(inputContent === ''){
      messageText('Please provide an email');
    }

    if(inputContent !== ''){
        const email = inputContent;
       validateMail(email)
    }


}

function messageText(text){
    const message = document.createElement('P');
    message.textContent = text;
    message.classList.add('red');
    form.appendChild(message);
    form.insertBefore(message, button)
    input.classList.add('inputError');
}

function clearSubmit(){
    const forMessage = form.querySelector('.red')

    if(forMessage){
        form.removeChild(forMessage);
        input.classList.remove('inputError');
    } 
}


function validateMail(email){
    const regex =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/ 
    regexResponse = regex.test(email);

    if(regexResponse){
       clearSubmit();
    } else{
        messageText('Please provide a valid email')
    }

}
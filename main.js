const body = document.querySelector('body')
const form = document.querySelector('.form')
const email = document.querySelector('.email')
const password = document.querySelector('.pass')
const btn = document.querySelector('.add')
const h4 = document.querySelector('h4')
const par = document.querySelector('.par')

body.addEventListener('click',()=>{
    email.style.border = 'none'
    password.style.border = 'none'
    par.innerHTML = ''
})
let count = 3
form.addEventListener("submit",(e)=>{
    e.preventDefault()
    if (email.value === 'bekbolsun' && password.value === '1234'){
        h4.innerHTML = 'otkrut'
        h4.style.color = 'green'
        email.value = ''
        password.value = ''
    }
    else if(email.value === '' && password.value === ''){
        par.style.fontSize = '30px'
        par.style.color = 'red'
        par.innerHTML = '<pre>🙅 tolturunuz</pre>'
        h4.innerHTML = ''
    }
    else {
        email.value = ''
        password.value = ''
        count--
        if ( count === 2){
             h4.innerHTML = 'У вас 2 попытка'
            h4.style.color = 'white'
        }
        if (count === 1){
             h4.innerHTML = 'У вас 1 попытка'
            h4.style.color = 'yellow'
        }
        if (count === 0){
            btn.setAttribute('disabled','disabled')
             h4.innerHTML = 'Доступ закрыт!!!'
            h4.style.color = 'red'
        }
    }
})




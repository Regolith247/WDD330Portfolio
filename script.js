const name = document.getElementById('name')
const password = document.getElementById('password')
const form = document.getElementById('form')
const errorElement = document.getElementById('error')

password1 = form.password.value;
password2 = passwordConfirm.value;

form.addEventListener('submit', (e) =>{
    let messages = []
    if (name.value === '' || name.value == null) {
        messages.push('Name is required')
    }
    if (password.value === '' || password.value == null{
    messages.push('Password is required')
    })
    else if (passwordConfirm.value === '' || passwordConfirm.value == null{
        messages.push('Password confirmation is required')
        })

    else if (password.value.length <= 6){
    messages.push('Password must be longer than 6 characters.')
    }

    else if (password.value.length >= 20){
        messages.push('Password must not be longer than twenty characters.')
        }
    else if (password.value === 'password' || password.value === 'Password' ){
        messages.push('That is a terrible idea.')
        }
    else if ( password1 != password2){
        messages.push('Passwords must match. Try again.')
    }

    else if(messages.length > 0) {
        e.preventDefault()
        errorElement.innerText = messages.join(',')
    }

})
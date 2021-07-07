const btn = document.getElementById('signin')

const model = document.getElementsByClassName('model-wrapper')[0]

btn.addEventListener('click', () => {
    model.style.display = 'block'
})

function check(form){
    if (form.username.value == "myusername" && form.password.value == "mypassword") {
        window.open('target.html')
    } else {
        alert("Enter valid Username/Password")
    }
}


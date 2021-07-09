const btn = document.getElementById('signin')

const model = document.getElementsByClassName('model-wrapper')[0]

btn.addEventListener('click', () => {
    model.style.display = 'block'
})

function validateForm () {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    if ( username.length > 3 && password.length > 6) {
        window.location.href = "./user.html";
    } else {
        alert("Enter atleast 4 letters for valid name & password must be atleast 6 characters")
    }
}



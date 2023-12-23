let name = document.getElementById('firstlastname');
let phoneNum = document.getElementById('phone');
let email = document.getElementById('email');
let password = document.getElementById('password');
let submit = document.getElementById('submit');
let messageElement1 = document.getElementById('message1');
let INemail = document.getElementById('loginemail');
let INpassword = document.getElementById('loginpassword');
let Login = document.getElementById('Login');
let messageElement2 = document.getElementById('message2');

// storing the local storge in the array
let Accdata;
if (localStorage.account != null) {
    Accdata = JSON.parse(localStorage.account)
} else { Accdata = []; }


//sigin up butten that do every thing
submit.onclick = function () {
    let newAcc = {
        name: firstlastname.value.toLowerCase(),
        phoneNum: phone.value,
        email: email.value.toLowerCase(),
        password: password.value.toLowerCase(),
    }
    if (firstlastname.value != '' && phone.value != '' && email.value != '' && password.value != '') 
    {
        Accdata.push(newAcc);
        localStorage.setItem('account', JSON.stringify(Accdata))
        cleardata();
        messageElement1.innerHTML = "";
        //location.replace("../index.html")
    }
    else{
        messageElement1.innerHTML = "You Are Mising Somthing!";
    }
}

//sigin in butten
Login.onclick = function () {
    INemail = loginemail.value.toLowerCase();
    INpassword = loginpassword.value.toLowerCase()
    for(let i = 0;i<Accdata.length;i++){
        if(INemail == Accdata[i].email && INpassword == Accdata[i].password){
            messageElement2.innerHTML = "";
            location.replace("../main.html")
            cleardata2()
        }
    }
    messageElement2.innerHTML = "Email Or Password Is Wrong!";
}

function cleardata() {
    firstlastname.value = '';
    phone.value = '';
    email.value = '';
    password.value = '';
    document.getElementById("terms").checked = false;
}

function cleardata2() {
    INemail.value = '';
    INpassword.value = '';
}

// function deleteAllData() {
//     Accdata.splice(0);
//     localStorage.clear;
// }

///////////////////////////Front Part

const wrapper = document.querySelector(".wrapper");
const loginLink = document.querySelector(".login-link");
const registerLink = document.querySelector(".register-link");
const btnPopup = document.querySelector(".btnlogin-popup");
const iconClose = document.querySelector(".icon-close");

registerLink.addEventListener("click", () => {
  wrapper.classList.add("active");
});

loginLink.addEventListener("click", () => {
  wrapper.classList.remove("active");
});

btnPopup.addEventListener("click", () => {
  wrapper.classList.add("active-popup");
});

iconClose.addEventListener("click", () => {
  wrapper.classList.remove("active-popup");
});
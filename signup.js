let getUsersdata =JSON.parse(localStorage.getItem("userdata")) || [];
console.log(getUsersdata);

function Signup(){
    let username = document.getElementById("naam").value;
    let mobile= document.getElementById("mobile").value;
    let password = document.getElementById("pass").value;

    if(mobile.length == 0)
    {
        alert("Enter mobile number");
    }
    else if(mobile.length == 0)
    {
        alert("mobile number should have 10 digits");
    }
    else{
        let userData={
            username:username,
            mobile : mobile,
            password: password
        }

        let users = [...getUsersdata,userData];
        localStorage.setItem("userdata",JSON.stringify(users));

        alert("Signup Successfull");
        window.location.href="signin.html"
    }
}
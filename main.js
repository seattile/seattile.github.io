function checkPassword() {
    const input = document.getElementById("passwordInput");
    const correctpassword = "1234";
    const message = document.getElementById("message");
    const passwordsection = document.getElementById("passwordsection");
    const contentsection = document.getElementById("contentsection");
    const imagesmemoji = document.getElementById("imagesmemoji");

    if(input.value === correctpassword){
        // direct to the next page
        document.getElementById("imagesmemoji").src="img/1c73311c9816b8df-sticker.png";
        message.textContent = "Correct Password! Redirecting...";
        message.style.color = "green";
        setTimeout(directToPage, 4000);
    } else if(input.value === ""){
        message.textContent = "Please Enter a Password!";
        message.style.color = "red";
    }
    else{
        document.getElementById("imagesmemoji").src="img/c7026b47f4da7e03-sticker.png";
        message.textContent = "Incorrect Password! Try Again";
        message.style.color = "red";
    }

}

function directToPage(){
    window.location.href = "nextpage.html";
}
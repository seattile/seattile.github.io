function checkPassword() {
    const input = document.getElementById("passwordInput");
    const correctpassword = "020605";
    const message = document.getElementById("message");
    const passwordsection = document.getElementById("passwordsection");
    const contentsection = document.getElementById("contentsection");
    const imagesmemoji = document.getElementById("imagesmemoji");

    if(input.value === correctpassword){
        // direct to the next page
        document.getElementById("imagesmemoji").src="img/1c73311c9816b8df-sticker.png";
        message.textContent = "cie bener";
        message.style.color = "green";
        setTimeout(directToNextPage, 3000);
    } else if(input.value === ""){
        document.getElementById("imagesmemoji").src="img/c7026b47f4da7e03-sticker.png";
        message.textContent = "tulis passwordnya dulu";
        message.style.color = "red";
    }
    else{
        document.getElementById("imagesmemoji").src="img/0af05c11479cc212-sticker.png";
        message.textContent = "wahahaha salah";
        message.style.color = "red";
    }


}

function checkButton(clickedID){
    const correctButton = "adek";    
    const message = document.getElementById("message");

    if(clickedID === correctButton){
        message.textContent = "memang adek yang satu ini pinter sekali xixixi";
        message.style.color = "green";
        setTimeout(directToWishes, 2000);   
    }else if(clickedID === "maseny"){
        message.textContent = "affh iyh kamu mas eny";
        message.style.color = "red";
    }
    else{
        message.textContent = "bener tapi salah";
        message.style.color = "red";
    }

}

const chatBox = document.getElementById("chat-box");
const text = "Hi sayaang! Today is your very special day (afffh iyhhh???). Hope you have a great day todayy (ya iyalah kan kita jalan hari ini:)) You have been encountering a lot of things in your life, but you always manage to get through it. I'm so sooo proud of you! Maaf kalau aku suka bikin kamu kesel hehehe, but I'm happy to have you by my side. Terima kasih sayaang udah hadir di hidupku, I once believed my love would be black and white, but now it is golden because of you. Thank you for being a part of my life's journey sayaang, may this year be filled with happiness and I hope your wishes will be granted. Happy birthday! <3";
let i = 0;
const delay = 50;

function typewriter(){
    if(i < text.length){
        chatBox.innerHTML += text.charAt(i);
        i++;
        setTimeout(typewriter, delay);
    }
}

typewriter();


function directToNextPage(){
    window.location.href = "nextpage.html";
}

function directToWishes(){
    window.location.href = "wishes.html";
}

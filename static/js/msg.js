const btn = document.getElementById('ok-btn');
const msgbox = document.getElementById('msg-box');
const container = document.getElementById('container');
    
if(msgbox.firstChild){
    container.style.opacity = "0.6";
    container.style.filter = "blur(1px)";
    container.style.pointerEvents = "none";
}
// container.style.opacity = "0.3";
// container.style.pointerEvents = "none";

btn.addEventListener('click',()=>{
    msgbox.style.display = 'none';
    container.style.opacity = "1";
    container.style.filter = "blur(0)";
    container.style.pointerEvents = "auto";
});

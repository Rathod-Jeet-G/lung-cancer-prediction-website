const notice = document.getElementById('notice');

if(!localStorage.getItem("noticePolicyAccepted") === "True" || localStorage.getItem("noticePolicyAccepted") === null){
    notice.style.display = 'block';
    const btn = document.getElementById('okBtnNotice');
    btn.addEventListener('click',()=>{
        notice.style.display = 'none';
        localStorage.setItem("noticePolicyAccepted", "True");
    });
}
else{
    notice.style.display = 'none';
}
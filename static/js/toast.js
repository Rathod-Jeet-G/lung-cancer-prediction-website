const toastTimeOut = ()=>{
    toast = document.getElementById('toastView');
    toast.style.display = 'none';
}

const hideToast = setTimeout(toastTimeOut, 2500);

hideToast()
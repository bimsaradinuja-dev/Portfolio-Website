let darkmode = localStorage.getItem('darkmode')
const modeswitch = document.getElementById('mode')

const enabledarkmode = () =>{

    document.body.classList.add('darkmode')
    localStorage.setItem('darkmode',"active")
}

const disabledarkmode = () =>{
    document.body.classList.remove('darkmode')
    localStorage.setItem('darkmode','null')
}

modeswitch.addEventListener("click",() =>{
    darkmode = localStorage.getItem('darkmode')
    darkmode !== "active" ? enabledarkmode() : disabledarkmode()
})

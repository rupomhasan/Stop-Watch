let second = document.getElementById('timeSecond')
let minute = document.getElementById('timeMinute')
const handleStart = () =>{
    let secondsValue = second.innerText;
    start(secondsValue);
}
const start = (seconds) =>
{
setInterval(() => {
    second.innerText = ++seconds
    if(seconds < 10)
    {
        second.innerText = 0+second.innerText
    }
    if (seconds > 60) {
        
        minutes()
    } 
},100)
}

const minutes = () => {
    minute.innerText = 0 + 1
    second.innerText = 0
    start(second.innerText)

}
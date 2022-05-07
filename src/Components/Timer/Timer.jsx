import React, {useState} from 'react'
import './Timer.css'

const Timer = () => {

    // const [myDate, setMyDate] = useState(Date());
    // const myDate = Date();

// var today = new Date();
// let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
// let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
// let dateTime = date+' '+time;

// const handleTimer = () => {
//     let timer = new Date();
//     let year = timer.getFullYear();
//     let month = timer.getMonth() + 1;
//     let date = timer.getDate();
//     let day = timer.getDay();
//     let seconds = timer.getSeconds();
//     let showTimer = year + ' : ' + month + ' : ' + date + ' : ' + day + ' : ' + seconds;
//     let myDiv = document.getElementById(timebox);
//     return(
//         // console.log(showTimer);
//         myDiv.innerText = showTimer
//     )
//     // setTimeout("handleTimer()",100);
// }

    let timer = new Date();
    let year = timer.getFullYear();
    let month = timer.getMonth() + 1;
    let date = timer.getDate();
    let day = timer.getDay();
    let hour = timer.getHours();
    let minute = timer.getMinutes();
    const seconds = () => {
        // setTimeout('seconds()',100)
        return timer.getSeconds()
    }
    let showTimer = month + ', ' + date + 'th ' + year + ', ' + hour + ':' + minute + ':' + seconds();

return (
    <div className='timer-box' id='timebox'>
        {showTimer}
    </div>
)
}

export default Timer
import { useEffect, useRef, useState } from 'react'

import './App.css'

function App() {
  const [target, settarget] = useState(null);
  const[diff,setdiff]=useState(0);

  const  id=useRef(0);

  const [ans,setans]=useState({
    days:0,
    hours:0,
    mins:0,
    secs:0,
  });


  function handleclick(){
    id.current=setInterval(()=>{
           setdiff(new Date(target)-new Date());
    },1000)



  }
  useEffect(()=>{
    if(diff<0){
      console.log("diff less then 0")
      clearInterval(id.current);
    }

  },[diff])


  const getDays = () => {
    return Math.floor(diff/(1000*60*60*24));
}

const getHours = () => {
    const hoursInMs = diff%(1000*60*60*24);
    return Math.floor(hoursInMs/(1000*60*60));
}

const getMinutes = () => {
    const minutesInMs = diff % (1000*60*60);
    return Math.floor(minutesInMs/(1000*60));
}

const getSeconds = () => {
    const secondsInMs = diff % (1000*60);
    return Math.floor(secondsInMs/(1000));
}
  return (
    <div id="maincontainer">

      <div className='HEADING'>
        CountDown Timer App
      </div>
      
      <div className='input'>
      <input type="datetime-local" onChange={(event)=>{
        settarget(event.target.value);

      }}></input>
      <button className='btn'
         onClick={()=>handleclick()}
      >Submit</button>
      </div>
      
      {/* {convertMilliseconds({diff})}; */}

      <div className='display'>
        <ul>
          <div className='ANSWERS'>
          <li >{getDays()}Days</li>
          <li>{getHours()}Hours</li>
          <li>{getMinutes()}Mins</li>
          <li>{getSeconds()}Secs</li>
          </div>
        </ul>

      </div>
      

      
    </div>
  )
}

export default App

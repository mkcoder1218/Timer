import React, { useEffect, useState } from 'react'
import moment from 'moment'
const Timer: React.FC = () => {
 const [currentTime,setCurrentTime] = useState(moment())
    useEffect(() => {
        setInterval(() => {
         setCurrentTime(moment())
     },1000)
    }, [currentTime])
     const formattedDay = currentTime.format('HH')
    const formattedHour = currentTime.format('hh')
    const formattedminiut = currentTime.format('mm')
    const formattedSec = currentTime.format('ss')
    const formattedAm = currentTime.format('A')
    return (
        <>
      <div className='text'>Have A Nice Day!</div>
      <div className= 'container' >
      
     {<div className = 'Day' >
        <p>{ formattedDay } </p></div >}
        {<div className = 'hour' >
        <p>{ formattedHour } </p></div >}
             {<div className = 'min' >
    <p>{ formattedminiut} </p></div >}
             {<div className = 'sec' >
    <p>{ formattedSec } </p></div >}
             {<div className = 'am' >
            <p>{ formattedAm } </p></div>}
</div>
    </>
  )
}

export default Timer

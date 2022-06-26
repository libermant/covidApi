import React from 'react'
import "./Most.css"

const Most = ({deathsAllTime,deathsAllToday,confirmedAllTime,confirmedAllToday,a,b}) => {
  return (
    <div id='divMost'>
    <div className='most'>{deathsAllTime}:{a}</div>
    <div className='most'>{confirmedAllTime}:{b}</div>
    <div className='most'>{deathsAllToday}</div>
    <div className='most'>{confirmedAllToday}</div>
    </div>
  )
}

export default Most
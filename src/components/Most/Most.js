import React from 'react'
import "./Most.css"

const Most = ({deathsAllTime,deathsAllToday,confirmedAllTime,confirmedAllToday}) => {
  return (
    <div id='divMost'>
    <div className='most'>{deathsAllTime}</div>
    <div className='most'>{confirmedAllTime}</div>
    <div className='most'>{deathsAllToday}</div>
    <div className='most'>{confirmedAllToday}</div>
    </div>
  )
}

export default Most
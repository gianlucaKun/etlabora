import React from 'react'
import "./Sidebertimeline.css"
const Sidebartimeline:React.FC = () => {
  return (
    <div className='containerTimeline'>
        <h4>Timeline</h4>
        <ul>
            <li>
               <a href="/home" className='linkTimeline'>01. About Me</a>
            </li>
            {/* <li>
                <a href="#milano" className='linkTimeline'>02. Milano </a>
            </li> */}
            <li>
                <a href="/" className='linkTimeline'>02. EtLabora </a>
            </li>
        </ul>
    </div>
  )
}

export default Sidebartimeline;

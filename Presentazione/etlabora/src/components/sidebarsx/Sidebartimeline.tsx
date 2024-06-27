import React from 'react'
import "./Sidebertimeline.css"
const Sidebartimeline:React.FC = () => {
  return (
    <div className='containerTimeline'>
        <ul>
            <li>
               <a href="/cecina">Cecina (LI), Toscana</a>
            </li>
            <li>
                <a href="/milano"> Milano </a>
            </li>
            <li>
                <a href="/etlabora"> EtLabora </a>
            </li>
        </ul>
    </div>
  )
}

export default Sidebartimeline;

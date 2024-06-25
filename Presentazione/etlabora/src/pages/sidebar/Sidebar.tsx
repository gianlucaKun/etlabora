import React from 'react'
import linkedinImage from '../../assets/LinkedIn_Logo.svg.png'; 
import instagramImage from '../../assets/Instagram-Logo-PNG-Transparent.png'
import codePemImage from '../../assets/codepen-icon-logo.png';
import "./Sidebar.css"
//import WeatherWidget from '../../components/weather/WeatherWidget';

const Sidebar = () => {
  return (
    <aside className='sidebar'>
      <div className='containerAccount'>
        <h3>Accounts</h3>
        <div>
            <a href="https://www.linkedin.com/in/gianluca-andreoni/" className='accounts'><img src={linkedinImage} alt="linkedinlogo" className='linkedinLogo'/> Linkedin</a>
        </div>
        <div>
        <a href="https://www.instagram.com/gianluca.sdvb/" className='accounts'><img src={instagramImage} alt="instagramImage" className='instagramlogo'/> Instagram</a>
        </div>
        <div>
        <a href="https://codepen.io/Gianlucakun95" className='accounts'><img src={codePemImage} alt="codePemImage" className='instagramlogo'/> CodePen</a>
        </div>
        </div>
        {/* <WeatherWidget />  */}
    </aside>
  )
}

export default Sidebar
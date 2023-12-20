import profilePic from '../assets/ashish.png';
import { useState, UseEffect } from 'react';
function Home(){
    const [theme, setTheme] = useState(()=>{
        const storedTheme = localStorage.getItem('theme');
        return storedTheme ? storedTheme : 'light';
    })
    
    return(
        <>
       
        <div className="home-container">
            <img src={profilePic} className='user' alt="" />
            <h2>Hey I am Ashish!</h2>
            <p>I'm a frontend developer, optimist, and community builder. I currently work as the VP of Product at Vercel, where I help teach the Next.js logomarkNext.js community, an open-source web framework built with React.</p>
            <div className='connect-flex'>
                <a href="" className="connect">My Resume</a>
                <a href="" className="connect">Follow Me on social media</a>
                <a href="" className="connect">Let's talk!</a>
                
            </div>
        </div>
        </>
    )
}
export default Home;
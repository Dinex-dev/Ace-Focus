import React from 'react'
import './Home-page.css';

export default function Index() {
  return (
    <div>
         {/* Home page domain boxes container */}
        <div className="HomePage-container">
             {/* Home page domain box  */}
            <div className="HomePage-Box">
                <h2 >Web Development</h2>
            </div>
            <div className="HomePage-Box">
                <h2>Programming</h2>
            </div>
            <div className="HomePage-Box">
                <h2>Cyber Security</h2>
            </div>
            <div className="HomePage-Box">
                <h2>Designing</h2>
            </div>
            <div className="HomePage-Box">
                <h2>App Development</h2>
            </div>
            <div className="HomePage-Box">
                <h2>Content and Marketing</h2>
            </div>
            <div className="HomePage-Box">
                <h2>Research and Development</h2>
            </div>
        </div>
    </div>
  )
}

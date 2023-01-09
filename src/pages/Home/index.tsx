import React from 'react'

export default function Index() {
  return (
    <div>
         {/* Home page domain box area container */}
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
        {/* Home page intro when page starts/reloads  */}
       <div>
         {/* For home page intro lines */}
        <div className="Home-intro">
            <div className="Home-intro-text">
                <h1>
                    <p className="Home-text">Welcome To ACE-Focus</p>
                </h1>
                <h1 id="Home-small-text">
                    <p className="Home-text">BY ACE</p>
                </h1>
            </div>
        </div>
         {/* For home page intro background  */}
        <div className="Home-slider"></div>
       </div>
    </div>
  )
}

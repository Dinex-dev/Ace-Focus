import React from 'react'
import './Home-page.css';
import {domains} from './Home-page-constants';

export default function Index() {
  return (
    <>
         {/* Home page domain boxes container */}
        <div className="HomePage-container">
          {domains.map((items:any)=>(
            <> 
            {/* Home page domain box  */}
            <div className="HomePage-Box">
                <h2>{items.name}</h2>
            </div>
            </>
          ))}
        </div>
    </>
  )
}

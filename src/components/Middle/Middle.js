import React from 'react'
import './Middle.css'

function Middle() {
    return (
        <div className="mid">
            <div className="sec1">
                <div className="sec1-head">
                    <h3>Applications Recieved</h3>
                    <h5>This Year</h5>
                    <h5>This Week</h5>
                    <h5>Today</h5>
                    <p>Downlaod Report</p>
                </div>
                <div className="graph">

                </div>
            </div>
            <div className="sec2">
                <h4>Top Application</h4>
                <div className="app">
                    <div className="head one"></div>
                    <h5>Apllications</h5>
                    <div id="progressbar">
                        <div className="one"></div>
                    </div>
                </div>
                <div className="app">
                    <div className="head two"></div>
                    <h5>Onload</h5>
                    <div id="progressbar">
                        <div className="two"></div>
                    </div>
                </div>
                <div className="app">
                    <div className="head three"></div>
                    <h5>Campaigns</h5>
                    <div id="progressbar">
                        <div className="three"></div>
                    </div>
                </div>
                <div className="app">
                    <div className="head four"></div>
                    <h5>Injected</h5>
                    <div id="progressbar">
                        <div className="four"></div>
                    </div>
                </div>
                <div className="app">
                    <div className="head five"></div>
                    <h5>Updates</h5>
                    <div id="progressbar">
                        <div className="five"></div>
                    </div>
                </div>



            </div>
        </div>
    )
}

export default Middle

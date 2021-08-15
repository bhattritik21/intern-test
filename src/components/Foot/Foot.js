import React from 'react'
import './Foot.css'

function Foot() {
    return (
        <div className="foots">
            <div className="foot foot1">
                <h3>Referals and Campaigns Stats</h3>
                <div className="foot-mid">
                    <div className="mid1">
                        <h4> Users Reached</h4>
                        <span>+5.3%</span>
                        <h2>7834</h2>
                    </div>
                    <div className="mid2">
                        <h4> Referals</h4>
                        <span>+5.3%</span>
                        <h2>7834</h2>
                    </div>
                </div>
                <div className="footend">
                    <button className="btn btn1">Start a new Campaign</button>
                </div>
            </div>
            <div className="foot foot2">
                <h3><span> 40 Campaigns sent in total</span></h3>
                <h3>4 Campigns sent in last month</h3>
                <div className="foot-mid">
                    <div className="mid1">
                        <h4> Shares</h4>
                        <span>+5.3%</span>
                        <h2>7834</h2>
                    </div>
                    <div className="mid2">
                        <h4> Applicants</h4>
                        <span>+5.3%</span>
                        <h2>7834</h2>
                    </div>
                </div>
                <div className="footend">
                    <button className="btn btn2">Start a new Campaign</button>
                </div>
            </div>
            <div className="foot foot3">
                <h3>Open position by department</h3>
                <div class="piechart">
                    <div className="circle">
                      <p> Open position</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Foot

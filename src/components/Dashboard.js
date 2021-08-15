import React from 'react';
import './Dash.css';
import Middle from './Middle/Middle';
import Foot from './Foot/Foot';
import Head from './Head/Head'

function Dashboard() {
    return (
        <div className="dash">
           
            <h2>Dashboard</h2>
            <h5 className="date">Monday <span> 15 August 2021</span> </h5>
            <Head/>
            <Middle/>
            <Foot/>
            </div>
            )
}

            export default Dashboard

import React from 'react'
import { Cards } from '../Cards';
import { BsThreeDots } from 'react-icons/bs'

function Head() {
    return (
        <div className="cards">
            {Cards.map((item, index) => {
                return (
                    <div key={index} className={item.title} id="class">
                        <div className="head-dash">
                            <h4>Total Applications</h4>
                            <span>    <BsThreeDots /></span>

                        </div>

                        <div className="inside_card">
                            <div className="incard">
                                <h2>7956</h2>
                                <span>  +3.56%</span>
                            </div>
                            <div className="percetbar">
                                <div class="circle-container">
                                    <div class={item.color}>
                                        <div class="item layer-1">
                                            <div class="fill"></div>
                                        </div>
                                        <div class="item layer-2">
                                            <div class="fill"></div>
                                        </div>
                                        <div class="inside-content">{item.per}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            })}

        </div>
    )
}

export default Head

import React from 'react'
import heroImage from './assets/hero-image-business-card.png'
import overlay from './assets/white-overlay.svg'
import avatar from './assets/avatar-image-business-card.png'
import './Card.css'
function Card() {
    const imageStyle = {
        background: `url(${heroImage}) no-repeat center center/cover`
    }
    return (
        <div className='card'>
            <div className="hero-image" style={imageStyle}>
                <img src={overlay} alt="" />
            </div>
            <div className="body">
                <div className="title">
                    <h1>Perfect solution for small business</h1>
                </div>
                <div className="details">
                    <p>Small businesses need to generate leads to grow. You can use tools like Ringy.</p>
                </div>
                <div className="bar"></div>
                <div className="author">
                    <div className="avatar">
                        <img src={avatar} alt="" />
                    </div>
                    <div className="name">
                        <h3>Amy Burgess</h3>
                        <p>Customer Manger, Solution Oy</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card

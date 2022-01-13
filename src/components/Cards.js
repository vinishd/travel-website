import React from 'react';
import CardItem from './CardItem';
import './Cards.css';
import image from './image-1.jpg';
import image2 from './image-2.jpg';
import image3 from './image-3.jpg';
import image4 from './image-4.jpg';

function Cards() {
    return (
        <div className='cards'>
            <h1>Check out these adventures!!!</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItem src = {image} text = "explore the beutiful land of Alberquerque"
                        label='Adventure!'
                        path = '/services' />
                        <CardItem src = {image2} text = "explore the beutiful land of Russia"
                        label='Fun with the family!'
                        path = '/services' />
                        
                    </ul>
                    <ul className='cards__items'>
                        <CardItem src = {image3} text = "take risks by walking across mountains"
                        label='Adventure!'
                        path = '/services' />
                        <CardItem src = {image4} text = "go hiking"
                        label='Hiking!'
                        path = '/services' />
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Cards;

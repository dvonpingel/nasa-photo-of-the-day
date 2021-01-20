import React, { useState } from 'react'


export default function Content(props) {
    const { apod } = props;


    return (
        <div className='container'>
            <h1>{apod.title}</h1>
            <h3 className='date'>{apod.date}</h3>
            <img src={apod.url} alt='NASA Daily Space'/>
            <p classname='explain'>{apod.explanation}</p>
        </div>
    )
}
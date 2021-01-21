import React, { useState } from 'react'
import styled, { keyframes } from 'styled-components'


export default function Content(props) {
    const { apod } = props;


    return (
        <ContainerDiv>
            <Title>{apod.title}</Title>
            <Date>{apod.date}</Date>
            <StyledA target='_blank' href={apod.hdurl}>
                <Img src={apod.url} alt='NASA Daily Space'/>
            </StyledA>
            <Explanation>{apod.explanation}</Explanation>
        </ContainerDiv>
    )
}

const kf = keyframes`
    100% {
        opacity: 1;
    }
`;

const ContainerDiv = styled.div`
    opacity: 0;
    animation: ${kf} 1s ease-in-out forwards;
    margin: 10% auto;
    width: 40%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    box-shadow: 0 5px 25px black;

    &:hover {
        background-color: #404040;
        transition: all .3s ease-in-out;
    }
    transition: all .2s ease-in-out;
`;

const Title = styled.h1`
    font-size: 1.8rem;
    width: 75%;
    font-family: Arial, Helvetica, sans-serif;
    margin-bottom: 0;
    color: white;
`;

const Date = styled.h2`
    font-family: Arial, Helvetica, sans-serif;
    font-size: .8rem;
    flex-basis: 100%;
    color: white;
`;

const Img = styled.img`
    width: 100%;
    &:hover {
        box-shadow: 2px 2px 10px #202020;
        transform: scale(1.05);
        transition: all .2s ease-in-out;
    }
    transition: all .1s ease-in-out;
`;

const Explanation = styled.p`
    width: 75%;
    border-top: 1px dashed white;
    padding-top: 10px;
    margin-top: 2%;
    color: white;
    line-height: 1.4;
    font-family: Arial, Helvetica, sans-serif;
`;

const StyledA = styled.a`
    width: 50%;
    margin: 10px 0;
`;
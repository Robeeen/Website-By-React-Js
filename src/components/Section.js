import React from 'react'
import styled from 'styled-components'

function Section({title, description, leftBtnText, rightBtnText, backgroundImg}) {
    return (
        <Wrap bgImage={backgroundImg}>
            <ItemText>
                <h1>{title}</h1>
                <p> {description}</p>
            </ItemText>
            <Button>
            <ButtonGroup>
                <LeftButton>
                    {leftBtnText}
                </LeftButton>
                <RightButton>
                    {rightBtnText}
                </RightButton>
            </ButtonGroup>
            <DownArrow src="/images/down-arrow.svg" />
            </Button>
        </Wrap>
    )
}


const Wrap = styled.div`
    width: 100vw;
    height: 100vh;
    background-size:cover;
    background-position: center;
    background-image: url('/images/model-s.jpg');
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background-image: ${props => `url("/images/${props.bgImage}")`}
`

const Button = styled.div`

`
const ItemText = styled.div`
    padding-top: 15vh;
    text-align: center;
`

const ButtonGroup = styled.div`    
    display: flex;
    margin-bottom: 30px;
    @media(max-width: 768px){
        flex-direction: column;
    }

`
const LeftButton = styled.div`
    background-color: rgba(23, 26, 32, 0.8);
    border-radius: 100px;
    height: 40px;
    width: 200px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 8px;


`
const RightButton = styled(LeftButton)`

` 
const DownArrow = styled.img`
    margin-top: 20px;
    height: 40px;
    align-items: center;
    animation: animateDown infinite 1.5s;
    overflow-x: hidden;
`
   

export default Section

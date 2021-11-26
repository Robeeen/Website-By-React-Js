import React from 'react'
import styled from "styled-components"
import Section from './Section'

function Home() {
    return (
        <Container>
            <Section 
                title = "Model-S"
                description = "Order Online for Touchless Deliery"
                backgroundImg = "model-s.jpg"
                leftBtnText = "Custom Order"
                rightBtnText = "Existing Inventory"
            />
            <Section />
        </Container>
    )
}

const Container = styled.div`
    height: 100vh;


`
export default Home

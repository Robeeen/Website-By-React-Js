import React from 'react'
import styled from "styled-components"
import Section from './Section'

function Home() {
    return (
        <Container>
            <Section 
                title="Model-S"
                description="Order Online for Touchless Deliery"
                backgroundImg="model-s.jpg"
                leftBtnText="Custom Order"
                rightBtnText="Existing Inventory"
            />
            <Section 
                title="Model-Y"
                description="Order Online for Touchless Deliery"
                backgroundImg="model-y.jpg"
                leftBtnText="Custom Order"
                rightBtnText="Existing Inventory"
                />
            <Section 
                title="Model-3"
                description="Order Online for Touchless Deliery"
                backgroundImg="model-3.jpg"
                leftBtnText="Custom Order"
                rightBtnText="Existing Inventory"
                />
            <Section 
                title="Model-X"
                description="Order Online for Touchless Deliery"
                backgroundImg="model-x.jpg"
                leftBtnText="Custom Order"
                rightBtnText="Existing Inventory"
                />    
        </Container>
    )
}

const Container = styled.div`
    height: 100vh;


`
export default Home

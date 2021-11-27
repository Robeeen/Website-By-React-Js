import React from 'react'
import styled from 'styled-components'

function Header() {
    return (
        <Container>
            <a href="/"><img src="/images/logo.svg" alt="Logo"/></a>
            <Menu>

            </Menu>

        </Container>
    )
}

export default Header

const Container = styled.div`
    min-height: 60px;
`
const Menu = styled.div`


`
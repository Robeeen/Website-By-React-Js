import React, {useState} from 'react'
import styled from 'styled-components'
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';

//https://mui.com/components/material-icons/
//do not use  '@mui/icons-material/ -- instead use '@material-ui/icons/your-icons'

function Header() {
    const [BurgerState, setBurgerState] = useState(false);
    
    return (
        <Container>
            <a href="/"><img src="/images/logo.svg" alt="Logo"/></a>
            <Menu>
                <a href="/">Model-S</a>
                <a href="/">Model-3</a>
                <a href="/">Model-X</a>
                <a href="/">Model-Y</a>
            </Menu>
            <RightMenu>
                <a href="/">SHOP</a>
                <a href="/">Tesla accounts</a>
                <CustomMenu onClick={()=>setBurgerState(true)} />
            </RightMenu>            
            <BurgerNav show={BurgerState}>
                <CloseWrapper >
                <CustomClose onClick={()=>setBurgerState(false)} />
                </CloseWrapper>
                <li><a href="#">Existing Inventory</a></li>
                <li><a href="#">Used Inventory</a></li>
                <li><a href="#">Trade-in</a></li>
                <li><a href="#">CyberTruck</a></li>
                <li><a href="#">RoadStar</a></li>
            </BurgerNav>


        </Container>
    )
}

export default Header

const Container = styled.div`
    min-height: 60px;
    position: fixed;
    display: flex;
    align-items: center;
    padding: 0 20px;
    top: 0;
    left: 0;
    right: 0;
    z-index: 10;

`
const Menu = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex:1;
    a{
        font-weight: 600;
        text-transform: uppercase;
        padding: 0 10px;
        flex-wrap: nowrap;
    }
    @media(max-width: 768px){
        display: none;
    }

`
const RightMenu = styled.div`
a{
    font-weight: 600;
    text-transform: uppercase;
    padding: 10px;
    
}
`
const CustomMenu = styled(MenuIcon)`
    curson: pointer;

`
const BurgerNav = styled.div`
    position: fixed;
    width: 250px;
    background: white;
    top: 0;
    bottom: 0;
    right: 0;
    z-index: 100;
    height: 400px;
    padding: 20px;
    display: ${props => props.show ? "block" : "none"};
    li{
        list-style:none;
        padding: 10px 0;    
        border-bottom: 1px solid rgba(0,0,0,.2);

        a{
            font-weight: 600;
        }
    }
    
`
const CustomClose = styled(CloseIcon)`
    float: right;
    cursor: pointer;
    
`

const CloseWrapper = styled.div`
margin-bottom: 20px;
`
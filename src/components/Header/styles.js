import styled from 'styled-components';

export const LogoHeader = styled.img`
    width: 100px;
    height: 100px;
    margin: 0;
    box-sizing: border-box;
`

export const NavMenu = styled.nav`
    margin: 0 auto;
    display:flex;
    justify-content:center;
    align-items:center;
    column-gap: 20px;
    
`

export const ButtonMenu = styled.button`
    border: none;
    border-radius: 8px;
    width: 245px;
    height: 45px;
    background-color: #12293e;
    font-size: 1.8rem;
    color: #ebebeb;
    margin-top: 10px;
    font-weight: bolder;
    text-transform: uppercase;
    cursor: pointer;

    &:hover{
        border: 2px solid white;
    }
`


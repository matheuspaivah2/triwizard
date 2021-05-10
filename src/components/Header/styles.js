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
    background-color: #091e31;
    border: 2px solid white;
    font-size: 1.8rem;
    color: #ebebeb;
    margin-top: 10px;
    font-weight: bolder;
    text-transform: uppercase;
    cursor: pointer;

    &:hover{
        border: 4px solid white;
    }
`
export const ButtonMusic = styled.button`
    width: 50px;
    height: 45px;
    border-radius: 100px;
    background-color: #091e31;
    border: 2px solid white;
    position: absolute;
    margin-top: -80px;
    margin-right: 25px;
    right: 0;
    cursor: pointer;
    font-size: 22px;
    display:flex;
    align-items: center;
    justify-content: center;
    border-color: ${(props) => props.borderColor};
    color: ${(props) => props.borderColor};
    
`
export const HeaderStyled = styled.header`
    width: 100%;
    position: relative;
    
`
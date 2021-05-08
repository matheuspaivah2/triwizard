import styled from 'styled-components';
import Moldura from '../../assets/molduraBlack.png'




const getBorderColor = (player, characters) =>{
    

    let output = ''

    switch (characters[player].house){
        case 'Gryffindor':
            output = 'brown';
        break;
        case 'Hufflepuff':
            output = 'rgb(255 185 70)';
        break;
        case 'Ravenclaw':
            output = 'rgb(98 175 244)';
        break;
        case 'Slytherin':
            output = 'rgb(126 240 95)';
        break;
        default:
            output = 'black';
        
    }

    return output
}


export const BlackBackground = styled.div`
    width: 100%;
    height: 100vh;
    z-index:2;
    background-color: #000000c7;
    position: absolute;
    top: 0;
    
`
export const Container = styled.div`
    display: flex;
    width:390px;
    height: 800px;
    
    background-color: #000000c7;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    margin: 100px auto;
`

export const ContainerCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    row-gap: 5px;
    border: 2px solid white;
    border-radius: 8px;
    
    width: 360px;
    height: 660px;
    
    animation: animacaoBolada 2.5s ease 0s 1 backwards;
    @keyframes animacaoBolada {
        0% {
            
            transform: scale(0.1);
            transform: rotate3d(0);
            
        }
        50% { 
            
            transform: rotate3d(0, 1, 0.2, 3.142rad);
            
            
        }

        100% {
            transform: scale(1);
            transform: rotate3d(0);
        }

};
`

export const FigCard = styled.div`
    width: 350px;
    height: 440px;
    /* background-image: url(${Moldura}); */
    background-color: black;
    z-index:1;
    position:relative;
    
    
`
export const Mold = styled.div`
    width: 350px;
    height: 440px;
    background-image: url(${Moldura});
    position:absolute;
    background-size: cover;
    z-index:3;
    top: 0;
    
`

export const ImgCard = styled.img`
    border: 0px solid;
    width: 350px;
    height: 440px;
    padding: 20px;
    z-index:1;
    
`

export const HeaderCrad = styled.div`
    display:flex;
    justify-content: space-between;
    
    align-items:center;
    width: 360px;
`

export const Logo = styled.img`
    width: 70px;
    height: 70px;
    margin-left: 15px;
   
    
`

export const HouseName = styled.h4`
    
    margin-right: 32%;
    color: ${(props) => {

        const { characters, player } = props;

        return getBorderColor(player, characters)
        
    }};
`


export const Ances = styled.h5`
   
    color: ${(props) => {

        const { characters, player } = props;

        return getBorderColor(player, characters)

        }};
    
`

export const Back = styled.button`
    width: 80px;
    padding:8px;
    margin-top: 30px;
    color: black;
    background-color: ${(props) => {

const { characters, player } = props;

return getBorderColor(player, characters)

}};

    &:hover{
        border: 2px solid white;
    }

`
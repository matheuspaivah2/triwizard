import styled from 'styled-components';
import Moldura from '../../assets/molduraBlack.png'




const getBorderColor = (character) =>{
    

    let output = ''

    switch (character.house){
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



export const ContainerStyled = styled.div`
    display: flex;
    width: 360px;
    height: 660px;
    
    background-color: #00000000;
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
    background-color: black;
    width: 360px;
    height: 640px;
    
    animation: ani 2s ease 0s 1 backwards;
        @keyframes ani {
            0% {
                
                opacity: 0%;
                
            }
            

            100% {
                opacity: 100%;
                
            }
    
    }

  
    
   
`

export const FigCard = styled.div`
    width: 350px;
    height: 440px;
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

export const HeaderCard = styled.div`
    display:flex;
    justify-content: space-between;
    margin-top: 5px;
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

        const { character } = props;

        return getBorderColor(character)
        
    }};
`


export const Ances = styled.h5`
   
    color: ${(props) => {

        const { character } = props;

        return getBorderColor(character)

    }};
    
`


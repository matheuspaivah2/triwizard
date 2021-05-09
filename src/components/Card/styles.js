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



export const Container = styled.div`
    display: flex;
    width: 13%;
    height: 47%;
    background-color: black;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    h5{
        font-size: 1.5rem;
    }
`

export const ContainerCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    row-gap: 5px;
    background-color: black;
    border: 2px solid white;
    border-radius: 8px;
    cursor:pointer;
    width:100%;
    height: 100%;
    
    animation: ani 2s ease 0s 1 backwards;
        @keyframes ani {
            0% {
                
                opacity: 0%;
                
            }
            

            100% {
                opacity: 100%;
            }
    
    }

    &:hover{
        transition-duration: 1s;
        transform: scale(1.1);
       
    }


`

export const FigCard = styled.div`
    width:95%;
    height: 72%;
    z-index:1;
    position:relative;
    
    
`
export const Mold = styled.div`
    width:100%;
    height: 100%;
    background-image: url(${Moldura});
    position:absolute;
    background-size: cover;
    z-index:3;
    top: 0;
    
`

export const ImgCard = styled.img`
    border: 0px solid;
    width:100%;
    height: 100%;
    padding: 20px;
    z-index:1;
    
`

export const HeaderCard = styled.div`
    display:flex;
    justify-content: space-between;
    
    align-items:center;
    width: 100%;
`

export const Logo = styled.img`
    width: 30px;
    height: 30px;
    margin-left: 15px;
   
    
`

export const HouseName = styled.h6`
    
    margin-right: 32%;
    color: ${(props) => {

        const { characters, player } = props;

        return getBorderColor(player, characters)
        
    }};
`


export const Ances = styled.h6`
   
    color: ${(props) => {

        const { characters, player } = props;

        return getBorderColor(player, characters)

        }};
    
`


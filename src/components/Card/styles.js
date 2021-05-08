import styled from 'styled-components';

const getBorderColor = (player, characters) =>{
    

    let output = ''

    switch (characters[player].house){
        case 'Gryffindor':
            output = 'rgb(207 0 58)';
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


export const ContainerCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    row-gap: 15px;
`

export const ImgCard = styled.img`
    border: 0px solid;
    width: 330px;
    height: 410px;
    border: 4px solid;
    border-radius: 20px;
    border-color: ${(props) => {

        const { characters, player } = props;

        return getBorderColor(player, characters)
        
    }};
`

export const HouseName = styled.h5`
    
    color: ${(props) => {

        const { characters, player } = props;

        return getBorderColor(player, characters)
        
    }}
`

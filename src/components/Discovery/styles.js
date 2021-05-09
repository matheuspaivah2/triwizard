import styled from 'styled-components';
import Hat from '../../assets/wizardHat.png'
import Staff from '../../assets/staff.png'
import Gryffindor from '../../assets/Gryffindor.png'
import Hufflepuff from '../../assets/Hufflepuff.png'
import Slytherin from '../../assets/Slytherin2.png'
import Ravenclaw from '../../assets/Ravenclaw.png'

export const Disc = styled.section`
    margin: 0 auto;
    display: flex;
    justify-content: center;

    .container{
        display:flex;
        width: 95%;
        height: 720px;
        margin-top:25px;
        border: 2px solid white;
        border-radius: 8px;
    }

    .renderList{
        width: 90%;
        height: 690px;
        border-left: 2px solid white;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        margin-top: 12px;
    }

    .list{
        display: flex;
        column-gap: 30px;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        width: 100%;
        height: 90%;
    }
`
export const Nav = styled.nav`
    display: flex;
    justify-content: center;
    flex-direction: column;
    row-gap: 15px;
    margin: 0 auto;



    /* button{
        width: 180px;
    } */

    .bt{
        margin: 0;
        background-size: cover;
        width: 100px;
        height:100px;
        border: 2px solid white;
        border-radius: 8px;
        background-color: #5c252563;
        cursor: pointer;

        &:hover{
        transform: scale(1.2);
        animation: neon 1s alternate infinite;
        @keyframes neon {
        from {
            filter: drop-shadow(0 0 0 white);
        }
        to {
            filter: drop-shadow(0 0 30px white);
        }
    }
    }
    }

   
    #btStudents{
        background-image: url(${Hat});
       
    }

    #btStaff{
        background-image: url(${Staff});
        background-color: #7c339763;
    }

    #btGryffindor{
        background-image: url(${Gryffindor});
        background-color: #9e345463;
        background-size: contain;
        background-repeat:no-repeat;
        background-position: center;
    }
    #btHufflepuff{
        background-image: url(${Hufflepuff});
        background-color: #b5ad31fc;
        background-size: contain;
        background-repeat:no-repeat;
        background-position: center;
    }
    #btSlytherin{
        background-image: url(${Slytherin});
        background-color: #2c925763;
        background-size: contain;
        background-repeat:no-repeat;
        background-position: center;
    }
    #btRavenclaw{
        background-image: url(${Ravenclaw});
        background-color: #0c529463;
        background-size: contain;
        background-repeat:no-repeat;
        background-position: center;
    }

    
`


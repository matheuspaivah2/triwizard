import styled from 'styled-components';

export const Container = styled.div`
     margin: 0 auto;
     width: 100%;
     height: 700px;
     display: flex;
     align-items: center;
     flex-direction: column;

    h3{
    margin-top: 30px;
   
    }
    

    h1{
        margin-top: 60px;
    
    }
    .flags{
        width: 600px;
        height: 400px;
        margin-top: 20px;
    }

    button{
        border: none;
        border-radius: 8px;
        width: 245px;
        height: 45px;
        background-color: #01182c;
        border: 2px solid white;
        font-size: 1.8rem;
        color: #ebebeb;
        margin-top: 40px;
        font-weight: bolder;
        text-transform: uppercase;
        cursor: pointer;

        &:hover{
            border: 3px solid white;
        }
    }
`


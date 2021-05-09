import styled from 'styled-components';

export const Container = styled.section`
     margin: 0 auto;

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
        background-color: #12293e;
        font-size: 1.8rem;
        color: #ebebeb;
        margin-top: 20px;
        font-weight: bolder;
        text-transform: uppercase;
        cursor: pointer;

        &:hover{
            border: 2px solid white;
        }
    }
`


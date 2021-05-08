import styled from 'styled-components';

export const Container = styled.section`
     margin: 0 auto;

    h3{
    margin-top: 30px;
    animation: neon 2.5s ease 0s infinite backwards;
    @keyframes neon {
    from {
        filter: drop-shadow(0 0 0 purple);
    }
    to {
        filter: drop-shadow(0 0 30px purple);
    }
}

   
    }

    h1{
        margin-top: 100px;
        animation: neon 2.5s ease 0s infinite backwards;
        @keyframes neon {
        from {
            filter: drop-shadow(0 0 0 purple);
        }
        to {
            filter: drop-shadow(0 0 30px purple);
        }
    
    }
}
    img{
        width:400px;
        height:400px;
        margin-top: 50px;

        animation: animacaoBolada 2.5s ease 0s infinite backwards;
    @keyframes animacaoBolada {
        0% {
            
            transform: scale(0.4);
            transform: rotate3d(0);
            
        }
        50% { 
            
            transform: rotate3d(0, 1, 0.2, 3.142rad);
            
            
        }

        70%{
            transform: scale(1);
            transform: rotate3d(0);
        }

        100% {
            transform: scale(0.4);
            transform: rotate3d(0);
        }
    }
`

import styled from 'styled-components'

export const Conteiner = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;

    div{
        position: absolute;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.6);
    }
    
    span{
        z-index: 2;
    }

`
import styled from 'styled-components'

export const WrapperHeader = styled.div`
display: flex;
gap: 2rem;
align-items: center;
justify-content: center;
`

export const Description = styled.div`
    line-height: 1.6;
    margin-bottom: 2rem;
    text-align: left;
`

export const WrapperContent = styled.div`
    display: flex;
    justify-content: center;
`


export const LeftContent = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;

    input[type="file"] {
        height: auto;
        border: 1px solid #565656;
        border-radius: 8px;
        padding: 0.5rem;
        background-color: rgba(255, 255, 255, 0.1);
        display: flex;

}
`

export const WrapperInputs = styled.div`
    border: 1px solid #565656;
    border-radius: 8px;
    padding: 1rem;
    margin: 0 auto;
    background-color: rgba(255, 255, 255, 0.1);
`

export const Inputs = styled.div`
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    gap: 1rem;
    
    label {
        color: #fff;
        min-width: 100px;
    }
    
    input {
        flex: 1;
        padding: 0.5rem;
        border: 1px solid #8d97ef;
        border-radius: 4px;
        background-color: rgba(255, 255, 255, 0.1);
        color: #fff;
    }
`;

export const WrapperSizes = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    width: 100%;

    button{
        cursor: pointer;
        &:hover{
            background-color: rgba(203, 7, 242, 0.2);
        }

        &.selected {
        background-color: #cb07f2;  // Cor quando estiver selecionado
        color: #fff;
    }
    }
    
`

export const Techs = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    align-items: center;
    border: 1px solid #565656;
    border-radius: 8px;
    padding: 1rem;
    margin: 0 auto;
    height: 100%;
    width: 100%;
    background-color: rgba(255, 255, 255, 0.1);
`


export const RightContent = styled.div`
    margin-left: 2rem;
`

export const Preview = styled.div`
    width: 200px;
    height: 200px;
    border: 1px solid #565656;
    border-radius: 8px;
    background-color: rgba(255, 255, 255, 0.1);

    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 8px;
    }
`

export const WrapperPreview = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 8px;
    height: 94%;

`

export const WrapperData = styled.div`
    padding: 1rem;
    text-align: left;

`


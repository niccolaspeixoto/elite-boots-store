import styled from 'styled-components';

export const Form = styled.form`
    display: flex;
    flex-direction: column; 
    gap: 10px;
    min-width: auto;
    margin: 0 auto;
    align-items: center;
    justify-content: center;
    height: 100%;

    input, select {
        width: 100%;
        height: 40px;
        padding: 0 10px;
    }
    
    button{
        cursor: pointer;
        width: 100%;
        transition: 0.3s ease;

        &:hover{
            background-color: #3f0872;
        }
    }
`

export default Form;
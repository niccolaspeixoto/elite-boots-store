import styled from "styled-components";

export const Buttons = styled.div`
    display: flex;  
    gap: 1rem;
    
    button {
        padding: 0.5rem 1rem;
        border: ${props => props.theme === 'secondary' ? '1px solid #333232' : 'none'};
        border-radius: 4px;
        cursor: pointer;
        transition: 0.4s ease;
        background-color: rgba(255, 255, 255, 0.64);
        color: ${props => props.theme === 'secondary' ? '#ffffff' : '#000000'};
        margin-top: ${props => props.theme === 'secondary' ? '2rem' : '0'};
        background-color: ${props => props.theme === 'secondary' ? 'rgba(162, 69, 180, 0.4)' : 'rgba(255, 255, 255, 0.64)'};

        &:hover{
            background-color: rgba(203, 7, 242, 0.2);
            color: #fff;
            box-shadow: 0 4px 15px rgba(236, 183, 246, 0.67);
        }

        &:active{
            background-color: rgba(55, 4, 65, 0.4);
        }
    }

`
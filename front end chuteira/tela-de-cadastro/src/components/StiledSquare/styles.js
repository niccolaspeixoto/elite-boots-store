import styled from "styled-components";

export const Square = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid #565656;
    border-radius: 8px;
    padding: 1rem;
    width: 100%;
    background-color: rgba(255, 255, 255, 0.1);
    gap: 10px;
    height: 100%;

    h3{
        color: #8d97ef;
        font-size: 1rem;
    }

    button {
        margin: 0.2rem;
        padding: 0.5rem;
        border: 1px solid #777777;
        border-radius: 4px;
        color: #fff;
        background-color: transparent;
    }

    input[type="text"] {
        width: 100%;
        padding: 0.5rem;
        border: 1px solid #565656;
        border-radius: 4px;
        background-color: rgba(255, 255, 255, 0.1);
        color: #fff;
    }

`

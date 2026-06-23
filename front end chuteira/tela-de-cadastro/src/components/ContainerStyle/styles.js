import styled from "styled-components";

const Container = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    width: 100%;
    background: linear-gradient(135deg, #1b244c 0%, #2a0a4a 100%);
    color: #fff;
    padding: 2rem 1rem;
    gap: 1.5rem;

    h1 {
        font-size: 2.5rem;
        text-align: center;
    }

    @media (max-width: 1024px) {
        padding: 1.5rem 1rem;
        gap: 1.2rem;

        h1 {
            font-size: 2rem;
        }
    }

    @media (max-width: 768px) {
        padding: 1rem 0.75rem;
        gap: 1rem;

        h1 {
            font-size: 1.5rem;
        }
    }

    @media (max-width: 480px) {
        padding: 0.75rem 0.5rem;
        gap: 0.75rem;

        h1 {
            font-size: 1.2rem;
        }
    }
`
export default Container;
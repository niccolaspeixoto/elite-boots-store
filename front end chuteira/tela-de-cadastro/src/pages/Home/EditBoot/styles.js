import styled from 'styled-components';

export const EditContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-width: 600px;
    gap: 2rem;
    padding: 2rem 1rem;

    h1 {
        font-size: 2rem;
        text-align: center;
    }

    @media (max-width: 1024px) {
        padding: 1.5rem 1rem;
        gap: 1.5rem;

        h1 {
            font-size: 1.8rem;
        }
    }

    @media (max-width: 768px) {
        max-width: 100%;
        padding: 1rem 0.75rem;
        gap: 1.2rem;

        h1 {
            font-size: 1.5rem;
        }
    }

    @media (max-width: 480px) {
        padding: 0.75rem 0.5rem;
        gap: 1rem;

        h1 {
            font-size: 1.2rem;
        }
    }
`;

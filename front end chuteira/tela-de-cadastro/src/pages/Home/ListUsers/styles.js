import styled from 'styled-components';

export const Title = styled.h1`
@media (min-width: 300px) and (max-width: 480px) {
    text-align: center; 
    font-size: 6rem;
}
`     

export const WrapperBoots = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
    height: 100%;
    padding: 0 1rem;

    @media (max-width: 1440px) {
        grid-template-columns: repeat(3, minmax(200px, 1fr));
    }

    @media (max-width: 1024px) {
        grid-template-columns: repeat(2, minmax(200px, 1fr));
        gap: 15px;
        margin-bottom: 15px;
    }

    @media (max-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
        gap: 12px;
        margin-bottom: 12px;
        padding: 0 0.5rem;
    }

    @media (max-width: 480px) {
        grid-template-columns: 2fr;
        gap: 10px;
        margin-bottom: 10px;
    }
`

export const CardBoots = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #61548a;
    min-height: 250px;
    padding: 20px;
    border-radius: 8px;
    transition: 0.3s ease;

    h3{
        text-transform: capitalize;
    }

    &:hover{
        background-color: #846eb3;
        transform: translateY(-5px);
    }

    @media (min-width:300px) and (max-width: 480px) {
        flex-direction: column;
        justify-content: center;    
    }
`

export const Icons = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 10px;
    `

export const EditIcon = styled.img`
   width: 20px;
   height: 20px;
   cursor: pointer;
   transition: 0.3s ease;

   &:hover{
    opacity: 0.5;
   }

   &:active{
    opacity: 0.8;
   }
`

export const TrashIcon = styled.img`
   width: 20px;
   height: 20px;
   cursor: pointer;
   transition: 0.3s ease;

   &:hover{
    opacity: 0.5;
   }

   &:active{
    opacity: 0.8;
   }
`


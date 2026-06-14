import styled from 'styled-components';

export const WrapperBoots = styled.div`
    display: grid;
    grid-template-columns: repeat(4, minmax(250px, 1fr));
    gap: 20px;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
    height: 100%;
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


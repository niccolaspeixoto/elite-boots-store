import api from '../../../services/api'
import { useEffect, useState } from 'react';

import StiledSquare from "../../../components/StiledSquare";
import ContainerStyle from "../../../components/ContainerStyle";
import ButtonsStyle from "../../../components/ButtonsStyle";
import { useNavigate } from 'react-router-dom'
import { CardBoots, EditIcon, TrashIcon, WrapperBoots } from './styles';

import Trash from '../../../assets/trash-button.png'
import Edit from '../../../assets/edit.png'

function ListBoot() {

    const [data, setData] = useState([])

    useEffect(() => {

        async function getBoots() {
            const { data } = await api.get('/chuteiras')
            setData(data)
        }
        getBoots()
    }, [])


    async function deleteBoot(id) {
        await api.delete(`/chuteiras/${id}`) 

        const updatedBoots = data.filter(boot => boot.id !== id)
        setData(updatedBoots)
    }

    const navigate = useNavigate()

    return (
        <ContainerStyle>
            <h1>Listagem de Chuteiras</h1>

            <WrapperBoots>
                {data.map((boot) => (
                    <CardBoots key={boot.id} >
                        <div>
                            <img src={boot.imgUrl} alt={boot.name} style={{ width: '50px', height: '50px', borderRadius: '8px' }} />
                            <h2>{boot.name}</h2>
                            <p>{boot.tag}</p>
                            <p>R$ {boot.price.toFixed(2)}</p>
                            <p>{boot.size}</p>
                            <p>{boot.description}</p>
                            <p>{boot.tech}</p>
                        </div>

                        <div>
                            <EditIcon src={Edit} onClick={() => navigate(`/edit/${boot.id}`)} />
                            <TrashIcon src={Trash} onClick={() => {deleteBoot(boot.id)}} />
                        </div>
                    </CardBoots>
                ))}
            </WrapperBoots>

            <ButtonsStyle theme="secondary" style={{ marginBottom: '20px' }}>
                <button type="button" onClick={() => navigate('/')}>
                    Voltar para Cadastro
                </button>
            </ButtonsStyle>
        </ContainerStyle>
    )

}
export default ListBoot;
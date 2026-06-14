import { useParams, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import api from "../../../services/api"
import BootForm from '../../../components/BootForm'

import ContainerStyle from "../../../components/ContainerStyle"


function EditBoot() {

    //hooks
    const { id } = useParams()
    const navigate = useNavigate()

    //states reutilizados
    const [name, setName] = useState('')
    const [tag, setTag] = useState('')
    const [price, setPrice] = useState('')
    const [description, setDescription] = useState('')
    const [size, setSize] = useState('')
    const [tech, setTech] = useState('')
    const [imgUrl, setImgUrl] = useState('')


    //effects
    // Efeito para buscar os dados da chuteira a ser editada e preencher o formulário
    useEffect(() => {
        async function getBoot() {

            const response = await api.get(`/chuteiras/${id}`)
            setName(response.data.name)
            setTag(response.data.tag)
            setPrice(response.data.price)
            setDescription(response.data.description)
            setSize(response.data.size)
            setTech(response.data.tech)
            setImgUrl(response.data.imgUrl)
        }

        getBoot()

    }, [])

    //funções

    // Função para atualizar a chuteira
    async function updateBoot() {
        try {
            await api.put(`/chuteiras/${id}`, {
                name,
                tag,
                price: parseFloat(price),
                description,
                imgUrl,
                size: Number(size),
                tech
            })

            navigate('/list-boots')

        } catch (error) {
            console.error("Não foi possível concluir a edição do usuário.")
        }
        navigate('/list-boots')
    }



    //jsx
    return (

        <ContainerStyle>
            <h1>Editar Chuteira</h1>
            <BootForm
                name={name}
                setName={setName}
                tag={tag}
                setTag={setTag}
                price={price}
                setPrice={setPrice}
                description={description}
                setDescription={setDescription}
                size={size}
                setSize={setSize}
                tech={tech}
                setTech={setTech}
                showExtraFields={true}
                onSubmit={updateBoot}
                buttonText="Atualizar Chuteira"
            />
        </ContainerStyle>
    )
}

export default EditBoot
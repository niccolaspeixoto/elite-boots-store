import { useRef, useEffect, useState } from 'react'
import api from '../../services/api'
import { useNavigate } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import { Description, Inputs, LeftContent, Preview, RightContent, Techs, WrapperContent, WrapperData, WrapperHeader, WrapperInputs, WrapperPreview, WrapperSizes } from './styles'
import BootForm from '../../components/BootForm'


import StiledSquare from '../../components/StiledSquare'
import ContainerStyle from '../../components/ContainerStyle'
import ButtonsStyle from '../../components/ButtonsStyle'

function Home() {
  // Refs para os inputs do formulário
  const imageInputRef = useRef()
  const previewRef = useRef()

  // Hook para navegação de páginas
  const navigate = useNavigate()


  // Efeito para lidar com a mudança de imagem e exibir a prévia
  useEffect(() => {
    const imageInput = imageInputRef.current
    const preview = previewRef.current

    if (imageInput && preview) {
      const handleImageChange = function () {
        const file = this.files[0]
        if (file) {
          const imageURL = URL.createObjectURL(file)
          setImgUrl(imageURL)
        }
      }

      imageInput.addEventListener('change', handleImageChange)

      return () => {
        imageInput.removeEventListener('change', handleImageChange)
      }
    }
  }, [])

  const [name, setName] = useState('')
  const [tag, setTag] = useState('')
  const [price, setPrice] = useState('')
  const [description, setDescription] = useState('')
  const [imgUrl, setImgUrl] = useState('')
  const [size, setSize] = useState('')
  const [tech, setTech] = useState('')


  // Função para limpar o formulário assim que clicar no botão.
  function cleaningForm() {
    setName('')
    setTag('')
    setPrice('')
    setDescription('')
    setImgUrl('')
    setSize('')
    setTech('')
    if (imageInputRef.current) {
      imageInputRef.current.value = ''
    }
  }


  // Função para cadastrar a nova chuteira, enviando os dados para a API e limpando o formulário após o cadastro.
  async function registerNewShoe(event) {

    if (!name || !tag || !price || !size) {
      toast.error('Preencha todos os campos!')
      return
    }

    try {
      await api.post('/chuteira-cadastrada', {
        name: name,
        tag: tag,
        price: parseFloat(price),
        description: description,
        imgUrl: imgUrl,
        size: Number(size),
        tech: tech
      })

      // Limpar todos os inputs
      setName('')
      setTag('')
      setPrice('')
      setDescription('')
      setImgUrl('')
      setSize('')
      setTech('')

      // Limpar o input file
      if (imageInputRef.current) {
        imageInputRef.current.value = ''
      }

      toast.success('Produto cadastrado com sucesso!')
    } catch (error) {
      console.error('Erro ao cadastrar produto:', error)
      toast.error('Erro ao cadastrar produto')
    }
  }


  return (
    <>
      <ToastContainer
        position="top-right"        // Aparece no canto superior direito
        autoClose={3000}            // Fecha automaticamente após 3 segundos
        hideProgressBar={false}     // Mostra uma barra de progresso
        closeOnClick                // Fecha ao clicar
        pauseOnHover                // Pausa o timer ao passar mouse
      />
      <ContainerStyle>

        <WrapperHeader>
          <Description>
            <h1>CADASTRAR NOVA CHUTEIRA</h1>
            <p>Insira os detalhes técnicos para adicionar o novo modelo ao catálogo elite.</p>
          </Description>

          <ButtonsStyle>
            <button type="button" onClick={cleaningForm}>CANCELAR CADASTRO</button>
            <button type="button" onClick={registerNewShoe}>SALVAR PRODUTO</button>
          </ButtonsStyle>
        </WrapperHeader>

        <WrapperContent>
          <LeftContent>
            <StiledSquare>
              <input type="file" id="imageInput" accept="image/*" ref={imageInputRef}></input>
            </StiledSquare>

            <BootForm
              name={name}
              setName={setName}
              tag={tag}
              setTag={setTag}
              price={price}
              setPrice={setPrice}
              description={description}
              setDescription={setDescription}
              onSubmit={registerNewShoe}
              buttonText="Cadastrar"
            />

            <StiledSquare>
              <h3>GRADE DE TAMANHO (BR)</h3>
              <WrapperSizes>
                <button onClick={() => setSize('37')} className={size === '37' ? 'selected' : ''}>37</button>
                <button onClick={() => setSize('38')} className={size === '38' ? 'selected' : ''}>38</button>
                <button onClick={() => setSize('39')} className={size === '39' ? 'selected' : ''}>39</button>
                <button onClick={() => setSize('40')} className={size === '40' ? 'selected' : ''}>40</button>
                <button onClick={() => setSize('41')} className={size === '41' ? 'selected' : ''}>41</button>
                <button onClick={() => setSize('42')} className={size === '42' ? 'selected' : ''}>42</button>
                <button onClick={() => setSize('43')} className={size === '43' ? 'selected' : ''}>43</button>
                <button onClick={() => setSize('44')} className={size === '44' ? 'selected' : ''}>44</button>
              </WrapperSizes>
            </StiledSquare>

            <Techs>
              <StiledSquare>
                <h3>TECNOLOGIA</h3>
                <select name="technology" id="technology" value={tech} onChange={(e) => setTech(e.target.value)} placeholder="Selecione uma tecnologia">
                  <option value="">Selecione uma tecnologia</option>
                  <option value="PRO">PRO</option>
                  <option value="ACADEMY">ACADEMY</option>
                  <option value="CLUB">CLUB</option>
                </select>
              </StiledSquare>
            </Techs>
          </LeftContent>

          <RightContent>

            <h3>LIVE PREVIEW</h3>
            <WrapperPreview>
              <Preview>
                <img
                  id="preview"
                  ref={previewRef}
                  src={imgUrl}
                  alt="Preview"
                  style={{ display: imgUrl ? 'block' : 'none' }} />
              </Preview>

              <WrapperData>
                <h3>{name || 'Nome do Produto'}</h3>
                <p>{description || 'Descrição do Produto'}</p>
                <h3>{`R$ ${parseFloat(price || '0.00').toFixed(2)}`}</h3>
              </WrapperData>
            </WrapperPreview>

          </RightContent>
        </WrapperContent>

        <ButtonsStyle theme="secondary">
          <button type="button" onClick={() => navigate('/list-boots')}>
            Ver lista de Chuteiras Cadastradas
          </button>
        </ButtonsStyle>


      </ContainerStyle>
    </>
  )
}

export default Home

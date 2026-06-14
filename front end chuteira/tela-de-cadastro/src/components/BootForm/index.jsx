import Form from './styles'
import StiledSquare from '../StiledSquare'

function BootForm({
    name,
    setName,
    tag,
    setTag,
    price,
    setPrice,
    description,
    setDescription,
    imgUrl,
    setImgUrl,
    size,
    setSize,
    tech,
    setTech,
    showExtraFields = false,
    onSubmit,
    buttonText
})
{
    return (
        <Form>
            <StiledSquare style={{ width: '300px', padding: '20px' }}>
                <input
                    type="text"
                    placeholder="Nome da Chuteira"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />

                <input
                    type="text"
                    placeholder="Marca da chuteira"
                    value={tag}
                    onChange={(e) => setTag(e.target.value)}
                />

                <input
                    type="text"
                    placeholder="Preço da Chuteira"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                />

                <input
                    type="text"
                    placeholder="Descrição da Chuteira"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />

                {showExtraFields && ( 
                    <>
                <select
                    value={size}
                    onChange={(e) => setSize(e.target.value)}>
                    <option value="">Selecione o tamanho</option>
                    <option value="37">37</option>
                    <option value="38">38</option>
                    <option value="39">39</option>
                    <option value="40">40</option>
                    <option value="41">41</option>
                    <option value="42">42</option>
                    <option value="43">43</option>
                    <option value="44">44</option>
                </select>

                <select
                    value={tech}
                    onChange={(e) => setTech(e.target.value)}>
                    <option value="">Selecione a tecnologia</option>
                    <option value="PRO ">PRO</option>
                    <option value="ACADEMY">ACADEMY</option>
                    <option value="CLUB">CLUB</option>
                </select>
                </>
                )}

                <button
                    type="button"
                    onClick={onSubmit}
                >
                    {buttonText}
                </button>
            </StiledSquare>
        </Form>
    )
}

export default BootForm
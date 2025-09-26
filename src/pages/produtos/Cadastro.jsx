import './produto.css'
import { useState, useEffect } from 'react'
import axios from 'axios'

const CadastroProduto = () => {
    //estado para guardar dados.
    const [dados, setdados] = useState({})

    const montaJson = () => {
        setdados({
            "nome": nome.value,
            "tipo": tipo.value,
            "precoVenda":preco.value,
            "descricao": descricao.value,
            "categoria_id": categoria_id.value
        })
        alert(JSON.stringify(dados))
    }

    return (
        <div className="CadastroProduto">
            <input type="text" placeholder='0' id="id" disabled />
            <input type="text" placeholder='nome do produto' id="nome" />
            <input type="text" placeholder='descrição' id="descrição" />
            <input type="text" placeholder='0.00' id="preco" />
            <input type="text" placeholder='tipo do produto' id="tipo" />
            <input type="text" placeholder='1' id="categoria_id" disabled />

            <input type="button" value={"cadastro"}
                onClick={() => { alert('cadastro') }} />
        </div>
    )
}

export default CadastroProduto
    import axios from "axios"
    const Produtos = () => {
    //consumo de um endpoint com pizzas
    axios.get("http://172.19.0.49/pizzariateste/api/v1/produto")
        .then(response=>{ 
            console.log(response.data)
        })
    //Interação da lista de pizzas
    const listaPizzas = pizzas.map(pizza => <li>{pizza}</li>)

    return (
        <div>
            <ul>
                {listaPizzas}
            </ul>
        </div>
    )
}
export default Produtos
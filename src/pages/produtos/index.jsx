const Produtos = () => {
    //objeto com a lista de pizzas
    const pizzas = [
        'Pizza de Muçarela',
        'Pizza de calabresa',
        'Pizza baiana',
        'Pizza Quatro Queijos'
    ]
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
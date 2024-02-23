import { ProductCards } from './ProductCards'

function RenderProducts({ productsList }) {
    return (
        <div>
            {
                productsList.map((product) => <ProductCards title={product.title} image={product.image} price={product.price} key={product.id} productId={product.id}/>)
            }
        </div>
    )
}

export default RenderProducts;
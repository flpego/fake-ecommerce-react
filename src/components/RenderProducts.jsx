import { ProductCards } from './ProducDivs'


function RenderProducts({ productsList }) {
    return (
        <div className='product_list_container'>
            {
                productsList.map((product) => <ProductCards title={product.title} image={product.image} price={product.price} key={product.id} productId={product.id} rate={product.rating.rate}/> )
            }
        </div>
    )
}

export default RenderProducts;
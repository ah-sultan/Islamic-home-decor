import ProductCard from "../ProductCard/ProductCard"

function RelatedProduct(props) {
    const product = props.products ? props.products.slice(1, 6) : null
    return (
        <section className="py-20 bg-gray-100">
            <div className="container">
                <h4 className="section-title">
                    Releted Priducts
                </h4>
                <div className="mt-8 grid-cols-5 grid gap-x-6 gap-y-8 ">
                    {
                        product.map((data, index) => {
                            return (
                                <ProductCard key={index} img={data.image} title={data.title} rating={data.rating} price={data.price} />
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default RelatedProduct


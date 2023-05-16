import ProductCard from "../ProductCard/ProductCard"

function RelatedProduct(props) {
    const product = props.products
    return (
        <section className="py-10 bg-gray-100 lg:mt-24">
            <div className="container">
                <h4 className="section-title">
                    Related Product Products
                </h4>
                <div className="mt-8 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  grid gap-x-6 gap-y-8 ">
                    {
                        product.map((data, index) => {
                            return (
                                <ProductCard key={index} id={data.id} thumbnail={data.thumbnail} image={data.image} title={data.title} rating={data.rating} price={data.price} />
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default RelatedProduct


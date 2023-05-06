import CetagoryMenu from "../CetagoryMenu/CetagoryMenu"
import CetagoryTopBar from "../CetagoryTopBar/CetagoryTopBar"
import ProductFilter from "../ProductFilter/ProductFilter"
import ProductCard from "../ProductCard/ProductCard"


function CetagoryProducts(props) {
    return (
        <>
            <section>
                <div className="container">
                    <div className="flex gap-x-10 mt-5">
                        <div className="w-3/12">
                            <CetagoryMenu />
                            <ProductFilter />
                        </div>
                        <div className="w-9/12">
                            <CetagoryTopBar />

                            <div className="grid mt-8 grid-cols-4 gap-x-6 gap-y-8">
                                {
                                    props.products.map((data, index) => {
                                        return (
                                            <ProductCard key={index} img={data.image} title={data.title} rating={data.rating} price={data.price} />
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default CetagoryProducts
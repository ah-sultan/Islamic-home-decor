import ProductDetailsCard from "./ProductDetails/ProductDetailsCard"

function QuickView(props) {
    return (
        <>
            <section className="fixed bg-[rgba(0,0,0,.9)] w-full z-50 left-0 right-0 top-0 h-full bottom-0 ">
                <div className="absolute w-full z-10 left-0 right-0 top-0 h-full bottom-0">

                </div>
                <div className="container absolute z-20 top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2">
                    <div className="bg-white shadow-md p-20">
                        <ProductDetailsCard product={props.product} />
                    </div>
                </div>
            </section>
        </>
    )
}

export default QuickView
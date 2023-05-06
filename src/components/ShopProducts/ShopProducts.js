import { useState } from "react"
import CetagoryMenu from "../ShopMenu/ShopMenu"
import CetagoryTopBar from "../ShopTopBar/ShopTopBar"
import ProductFilter from "../ProductFilter/ProductFilter"
import ProductCard from "../ProductCard/ProductCard"
import ProductListCard from "../ProductListCard/ProductListCard"


function ShopProducts(props) {
    const [productView, setproductView] = useState('grid')
    const [showProducts, setShowProduct] = useState(7)
    
    const gridProduct = props.products.slice(1,showProducts)

    const viewHandler = (value) => {
        setproductView(value)
    }
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
                            <CetagoryTopBar viewHandler={viewHandler} active={productView}/>
                            {/* Shop Grid View ============== */}

                            <div className={`mt-8 overflow-hidden trns-1 ${productView === 'grid' ? 'visible opacity-100 h-auto' : 'invisible opacity-0 h-0'}`}>
                                <div className="grid grid-cols-4 gap-x-6 gap-y-8">
                                    {
                                        props.products.map((data, index) => {
                                            return (
                                                <ProductCard key={index} img={data.image} title={data.title} rating={data.rating} price={data.price} />
                                            )
                                        })
                                    }
                                </div>
                            </div>
                            
                            {/* Shop List View ============== */}
                            <div className={`overflow-hidden trns-1 ${productView === 'list' ? 'visible opacity-100 h-auto' : 'invisible opacity-0 h-0'}`}>
                                <ul>
                                {
                                    gridProduct.map((data, index) => {
                                        return (
                                            <li key={index} className="mt-5 first:mt-0">
                                                <ProductListCard img={data.image} title={data.title} description={data.description} rating={data.rating} price={data.price} />
                                            </li>
                                        )
                                    })
                                }
                                </ul>
                                <div className="text-center mt-8">
                                    <button onClick={() => setShowProduct(showProducts + 7)} className="text-white bg-primary px-9 py-3 rounded-md">Load More</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ShopProducts
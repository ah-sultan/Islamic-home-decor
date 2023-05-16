import Breadcrumb from "@/components/Breadcrumb/Breadcrumb"
import ShopProducts from "@/components/ShopProducts/ShopProducts"
import CetagoryTitle from "@/components/CetagoryTitle/CetagoryTitle"
import Meta from "@/components/Meta"
import RecentView from "@/components/RecentView/RecentView"

// data 
import product from '../data/product'



function cetagory() {
    return (
        <>
            <Meta title={`YouTube Studio Gears`}/>
            <Breadcrumb pages={['shop']} />
            <CetagoryTitle title="YouTube Studio Gears" description="YouTube Studio Gears Price in Bangladesh. BDSHOP.COM Offers you the Worl'ds Famous Microphone for Your Daily or Professional Needs." />
            <ShopProducts products={product} />
            <RecentView products={product.slice(0,4)} />

        </>
    )
}

export default cetagory


// export async function getServerSideProps(context) {
//     const res = await fetch('https://fakestoreapi.com/products')
//     const product = await res.json()
//     return {
//         props: {
//             product: product
//         },
//     };
// }
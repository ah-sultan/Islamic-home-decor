import Breadcrumb from "@/components/Breadcrumb/Breadcrumb"
import CetagoryProducts from "@/components/CetagoryProducts/CetagoryProducts"
import CetagoryTitle from "@/components/CetagoryTitle/CetagoryTitle"
import Meta from "@/components/Meta"
import RecentView from "@/components/RecentView/RecentView"



function cetagory({ product }) {
    return (
        <>
            <Meta />
            <Breadcrumb pages={['home', 'cetagory']} />
            <CetagoryTitle title="YouTube Studio Gears" description="YouTube Studio Gears Price in Bangladesh. BDSHOP.COM Offers you the Worl'ds Famous Microphone for Your Daily or Professional Needs." />
            <CetagoryProducts products={product} />
            <RecentView products={product} />

        </>
    )
}

export default cetagory


export async function getServerSideProps(context) {
    const res = await fetch('https://fakestoreapi.com/products')
    const product = await res.json()
    return {
        props: {
            product: product
        },
    };
}
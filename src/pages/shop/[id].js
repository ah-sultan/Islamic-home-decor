import Meta from "@/components/Meta"
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb"
import ProductDetails from "@/components/ProductDetails/ProductDetails"
import RelatedProduct from "@/components/RelatedProduct/RelatedProduct"

// Data 
import productdata from '../../data/product'

function singleProduct({ product, relatedProduct }) {
    return (
        <>
            <Meta title={product.title} />
            <Breadcrumb pages={[product.title]} />
            <ProductDetails product={product} />
            <RelatedProduct products={relatedProduct.slice(0,4)} />
        </>
    )
}

export default singleProduct


export async function getStaticProps(context) {
    const res = await fetch('https://api.npoint.io/d12e1ea8047bb1a65139/' + context.params.id);
    const resReletedProduct = await fetch('https://api.npoint.io/d12e1ea8047bb1a65139');
    const product = await res.json()
    const reletedProduct = await resReletedProduct.json()
    return {
        props: {
            product: product,
            relatedProduct: reletedProduct,
        },
    };
}



export async function getStaticPaths(context) {
    const res = await fetch('https://api.npoint.io/d12e1ea8047bb1a65139');
    const product = await res.json()
    const ids = product.map((product) => product.id)
    const paths = ids.map((id) => ({params : {id : id.toString()}}))

    return {
        paths,
        fallback : false
    };
}






import BestDeals from "@/components/BestDeals/BestDeals"
import Hero from "@/components/Header/Hero/Hero"
import MainProduct from "@/components/MainProduct/MainProduct"
import Meta from "@/components/Meta"

export default function Home({ product }) {
  return (
    <>
      <Meta />
      <Hero />
      <BestDeals product={product} />
      <MainProduct product={product}/>

    </>
  )
}

export async function getServerSideProps(context) {
  const res = await fetch('https://fakestoreapi.com/products')
  const product = await res.json()
  return {
    props: {
      product: product
    },
  };
}

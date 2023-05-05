import BestDeals from "@/components/BestDeals/BestDeals"
import Hero from "@/components/Header/Hero/Hero"
import MainProduct from "@/components/MainProduct/MainProduct"
import Meta from "@/components/Meta"
import BannerImg from "@/components/BannerImg/BannerImg"

// images ===========
import bannerImg from '../../public/images/banner-img/banner-img.jpg'
import HomeProduct from "@/components/HomeProduct/HomeProduct"

export default function Home({ product }) {
  return (
    <>
      <Meta />
      <Hero />
      <BestDeals product={product} />
      <MainProduct product={product}/>
      <BannerImg img={bannerImg}/>
      <HomeProduct product={product}/>

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

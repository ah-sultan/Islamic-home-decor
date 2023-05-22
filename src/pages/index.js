import BestDeals from "@/components/BestDeals/BestDeals"
import Hero from "@/components/Hero/Hero"
import MainProduct from "@/components/MainProduct/MainProduct"
import Meta from "@/components/Meta"
import BannerImg from "@/components/BannerImg/BannerImg"
import HomeProduct from "@/components/HomeProduct/HomeProduct"

// images ===========
import product from '../../src/data/product'


export default function Home() {
  return (
    <>
      <Meta />
      <Hero />
      <BestDeals product={product.slice(1, 7)} />
      <MainProduct product={product} />
      <HomeProduct product={product} />

    </>
  )
}





import Breadcrumb from "@/components/Breadcrumb/Breadcrumb"
import Meta from "@/components/Meta"
import CheckoutBody from "@/components/checkoutBody/CheckoutBody"


function Checkout() {


    return (
        <>
            <section>
                <Meta title="Checkout"/>
                <Breadcrumb pages={['cart', 'Checkout']} />
                <CheckoutBody/>
            </section>
        </>
    )
}

export default Checkout
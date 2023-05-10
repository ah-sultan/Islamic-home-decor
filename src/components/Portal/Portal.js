
import QuickView from "../QuickView/QuickView"


// Redux Features
import { useSelector} from 'react-redux';


function Portal() {
    const productData = useSelector((state) => state.quickView.data);
    console.log(productData)
  return (
    <>
        {/* <QuickView product={QuickViewContextData}/> */}
    </>
  )
}

export default Portal
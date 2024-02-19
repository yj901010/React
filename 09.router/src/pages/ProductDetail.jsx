import React from "react";
import {useParams} from "react-router-dom";

const ProductDetail = () => {

    // url에 있는 데이터를 가져오는 방법
    // const params = useParams();
    // console.log('Product에서 넘겨받은 값',params);
    const {pro_no, cate} = useParams();
  return(
      <div>
        ProductDetail : {pro_no} {cate}
      </div>
  )
}

export default ProductDetail
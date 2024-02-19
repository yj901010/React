import React from "react";
import {useSearchParams} from "react-router-dom";

const ProductDetail2 = () => {

    // useSearchParams()는 쿼리스트링방식으로 값을 전달받을 때 사용하는 함수
    // - 값을 접근하는 방법은 get(키이름)

    const [query, setQuery] = useSearchParams()
    console.log('Product로부터 넘겨받은 값 : ', query.get('pro_no'));

  return(
      <div>
        ProductDetail :
      </div>
  )
}

export default ProductDetail2
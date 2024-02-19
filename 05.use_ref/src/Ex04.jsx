import React, {useRef, useState} from "react";

const Ex04 = () => {
    /*
    (1) 사용자가 input 태그 안에 입력한 값을 가져오기
    (2) 그 값에 따라서 해당하는 경로로 이미지의 src 속성 변경하기
     */
    const picRef = useRef();
    const srcRef = useRef();
    const imgList = [
        {name : '배경', src : 'https://previews.123rf.com/images/manoodsen/manoodsen2306/manoodsen230600042/206812100-%EC%9D%B8%EC%82%AC%EB%A7%90-%ED%8F%AC%EC%A6%88%EB%A5%BC-%EC%B7%A8%ED%95%98%EB%8A%94-%EA%B7%80%EC%97%AC%EC%9A%B4-%EB%8F%99%EB%AC%BC-%EC%84%B8%ED%8A%B8%EB%8A%94-%ED%9D%B0%EC%83%89-%EB%B0%B0%EA%B2%BD%EC%97%90-%EC%84%9C-%EC%9E%88%EC%8A%B5%EB%8B%88%EB%8B%A4-%EA%B7%B8%EB%9E%98%ED%94%BD-%EC%95%BC%EC%83%9D-%EC%95%A0%EC%99%84%EB%8F%99%EB%AC%BC-%ED%8C%8C%EC%B6%A9%EB%A5%98-%EB%86%8D%EC%9E%A5-%EB%8F%99%EB%AC%BC-%EC%BA%90%EB%A6%AD%ED%84%B0-%EB%94%94%EC%9E%90%EC%9D%B8-%EC%BB%AC%EB%A0%89%EC%85%98-%EC%B9%B4%EC%99%80%EC%9D%B4-%EB%B2%A1%ED%84%B0.jpg'},
        {name : '고양이', src : 'https://cat-lab.co.kr/data/editor/2203/4fea39b9ee8ab23e62522153035041fc_1646215721_8448.jpg'},
        {name : '강아지', src : 'https://pds.joongang.co.kr/news/component/htmlphoto_mmdata/201901/20/28017477-0365-4a43-b546-008b603da621.jpg'},
        {name : '라쿤', src : 'https://img3.daumcdn.net/thumb/R658x0.q70/?fname=https://t1.daumcdn.net/news/202003/19/joongang/20200319114112692osyq.jpg'},
        {name : '앵무새', src : 'https://i.namu.wiki/i/EAQmQYRmUJN_VoVwUw_lJQEFWPwK2mcoGwUGe8r7tdDO6koiG1IFGou6e04lCxdLJ68BDBVOW_dYmTbnPtfPrA.webp'}
    ]
    const [imgSrc, setImgSrc] = useState(imgList[0].src);
    const changeClick = () => {
        let inputChange = picRef.current.value;
        // const selectedImg = imgList.find((img) => img.name === inputChange);
        //
        // if (selectedImg) {
        //     setImgSrc(selectedImg.src);
        // } else {
        //     setImgSrc(imgList[0].src);
        //     console.log("없는 이미지");
        // }

        imgList.forEach(item=>{
            inputChange === item.name && (srcRef.current.src=item.src);
        })

        // input 입력값 비워주기
        picRef.current.value = '';

        // input 오토포커싱
        picRef.current.focus();
    }
    return(
      <div>
          <p>어떤 사진을 원하시나요?</p>
          <input type='text' ref={picRef}/>
          <button onClick={changeClick}>변경</button>
          <br/><br/>
          <img src={imgSrc} width='250px' ref={srcRef}/>
      </div>
  )
}

export default Ex04
// $(function(){ 
//     //닫기 버튼 누르면 다시 나타나지 않게
//     $("#close_banner").click(function(){
//         $("#banner").addClass("d-none");
//     })
// })

const CLOSE_BANNER = document.querySelector("#close_banner");
const BANNER = document.querySelector("#banner")

CLOSE_BANNER.addEventListener("click",function(){
    BANNER.classList.add("d-none");
})

//cart 버튼 누르면 주문상품의 상품명, 수량, 가격을 업데이트 한다
//그리고 나서 결제창으로 이동할 것인지 확인한다
$("#cart").click(function(){

    //서버 전송을 목적으로 한 데이터 생성
    var order = {
        buyItem : "그릇",
        buyCount : 1,
        butPrice : 39500
    }

//.prompt() : 사용자에게 입력창을 띄우는 내장객체 메소드 ; 오래된 메소드 ==> 폼을 쓴다
//.confirm() : 확인 true 취소 false 로 의사결정

var userChoice = confirm("장바구니에 담았습니다, 결제창으로 이동하시겠습니까?");
userChoice ? location.href="/payment" : null; //삼항 조건 연산자
            //라우팅 : 서버가 클라이언트에게 요청하는 결과를 주는 과정

})

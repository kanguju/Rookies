/**
 * 배열 (아주 중요!!!)
 *  - 자주 사용, react에서 많이 사용됨(통신결과)
 *  - 데이터 유형 (타입기준)
 *      - 단일형
 *          - number, string, boolean, ...
 *          - 값 1개가 타입 1개를 대변함
 *      - n개의 값이 모여서 구성된 타입
 *          - 연속형(혹은 컬렉션) *          
 *              - (*)배열 (특수한 목적을 가진 객체)
 *                  - []
 *                  - 샘플 : [1, 2, 3, 5, 10, 55]
 *                  - 각 데이터의 의미가 애매함 -> 순서 존재 -> 인덱스(0, 1, 2,...)
 *          - 컬렉션  (키:값의 집합)
 *              - 객체 (객체 리터럴)
 *                  - {}
 *                  - 샘플 : { name:"온라인", age:20, ... }
 *                  - 각 데이터에 의미가 표현됨 -> name, age등 -> 키, 순서 x
 */
// 배열 정의
let arr = [10, 20, 30, 40, 50];
console.log(arr);

// 배열 데이터의 특정 구성원 접근하여 값 추출 -> 인덱싱!!
// 배열명[ 인덱스 ]
// 값이 30인 맴버를 접근하여 데이터 30을 추출하시오
console.log( arr[2] );

// 반복문을 이용하여 모든 맴버의 값을 출력하시오
// 실습 2분, 기본 for문 사용
// 배열길이 체크
console.log( arr.length );
// 기본 for문
for (let i = 0; i < arr.length; i++) {
    console.log( arr[i] ); 
}

// for in
// 배열의 길이를 몰라도, 존재하는만큼 추출하여 처리
for (const i in arr) { // 배열에서 인덱스를 하나씩 획득 0, 1, 2, ..
    console.log( arr[i] ); 
}

// for of
// 배열의 길이를 몰라도, 데이터를 추출해서 반환
for (const element of arr) {
    console.log( element );
}

// (*)배열을 위한 반복문
// 배열.내부함수();
//  forEach() 배열의 맴버를 접근해서 하나씫 추출하여 지정한 함수로 던져주는 함수
// 용도 : 배열의 구성원을 하나씩 추출하여 뭔가 작업한다면!!
arr.forEach( ( item, index )=>{
    // item는 배열의 맴버(값)
    // index는 배열의 각 맴버의 순번
    console.log( '->', item, index );
} )

// map
// 배열의 맴버을 하나씩 꺼내서 뭔가가 일괄작업 처리한다면 ( 모두 3배로 값증가)
let arr2 = [10, 20, 30, 40, 50];
function mulx3 ( data ) {
    // 데이터가 1개 전달되면, 3배로 증가시켜서 반환
    console.log(`콜백함수 호출 원본${ data } 변경값=${ data*3 }`);
    return data * 3;
}
// mulx3이라는 함수를 map() 함수에 인자로 입력 -> 함수의 매개변수로 함수 전달
// 이때 전달된 함수 -> 콜백함수
let results = arr2.map( mulx3 );
console.log( results );

// 코드를 간결하게 구성 => 화살표 함수 나 익명함수로 직접 함수를 인자로 전달!!
let results2 = arr2.map(  data  => data * 3 );
console.log( arr2, results2 );
// 서버로부터 데이터를 받아서 차트 구성, 게시판 구성, ... 유용하게 사용될 수 있음

// filter
// 배열의 맴버를 하나씩 꺼내서 조건에 맞는 맴버만 추린다
// 배열 데이터 arr3에서 값이 30 이상(>=)인 데이터만 추출하시오
// 초과 (>)
let arr3 = [10, 20, 30, 40, 50];
function cb( data ) {
    // data는 arr3번 배열에서 하나씩 꺼내서 cb 호출할때 전달하는 데이터
    // 필터링 : 30 이상(>=) 참, 아니면 거짓 => 조건식(의 결론 boolean)
    return data >= 30 ;
}
let results3 = arr3.filter( cb );

// reduce
// 배열의 맴버를 하나씩 꺼내서 누적합, 누적곱, 등등 일괄연산 처리한다
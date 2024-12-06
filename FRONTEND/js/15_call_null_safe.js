/**
 * 코드 전개시(연산시등) 오류 코드가 발생할 수 있다 -> 방지코드
 *  - ?.
 *      - 예시
 *          - 비동기처리시 => 함수().then().then()....
 *          - 객체명.맴버.맴버....
 *      - 위와같은 코드를 옵셔널 체이닝코드 여기서 앞부분에 오류가 발생하면->중단됨
 *      - ex) 함수()?.then()?.then() <= 안전하게 처리가능 <= 중단되지 않게
 *  - ??
 *      - Nullish Coalescing
 *      - 널일때 대한 방어코드 => 선택적 값 선택 유도 => 잠재적 버그 해결
 */

// 데이터 샘플 제시
const A = { // 객체 리터럴
    proc:{
        msg:{
            code:10
        },
        check:null
    }
}
// 요구사항 : code값 10을 출력하시오, 1분
// 객체명.맴버
console.log( A.proc.msg.code );
// 원래 데이터에는 check:{  code:5 } 있었다 -> 정상적으로 세팅된것으로보고 작성
//console.log( A.proc.check.code ); // 셧다운 발생
console.log( A?.proc?.check?.code ); //  안정하게 코드 작성
// undefined 발생 => 대응 가능함=> 조건문
// 해결
// 예외처리 
// (*) 방어코드 작성
console.log(1); // 이것이 출력되면 셧다운 x, 출력 않되면 중단된것임


// 서비스 => 환경변수 => 선택적 값 부여 가능
// 서버 포트 지정 ( 커스텀 || 시스템설정포트 )
// 서버 포트 지정 ( 개발 || 시스템설정포트 )

// !!처음으로 발견되는 참(조건식의 의미로 판단)값이 최종값 
// false 상황 : 0, 0.0, '', null, NaN, undefined
// 'a' 조건식에서는 참 => 값으로 세팅
console.log( 'a' || 'hello' ); 
// '' 조건식에서는 거짓 => 뒤로 체크 => 'hello' 값이 존재 => 세팅
console.log( '' || 'hello' ); 
// 0 조건식에서는 거짓 => 뒤로 체크 => 'hello' 값이 존재 => 세팅
console.log( 0 || 'hello' );

// 선택적 작용, 0도  false가 아닌 값으로 처리했으면 좋겠다 => 해결 ??
console.log( 0 ?? 'hello' );
console.log( '' ?? 'hello' );
console.log(1);
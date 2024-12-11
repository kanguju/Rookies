/**
 * 모듈 가져오기
 *  - mod를 가져와서 마치 내것처럼 사용!!
 *  - import 대표모듈 from '상대경로 + 커스텀모듈명 | 써드파트 모듈명'
 *  - import ( 모듈, 모듈, 모듈 ) from '상대경로 + 커스텀모듈명 | 써드파트 모듈명'
 *  - import 대표모듈, {
 *       모듈,
 *       모듈,
 *       모듈
 * } from '상대경로+커스텀모듈명 | 서드파트 모듈명'
 * - import '상대경로+커스텀모듈명' | 서드파트 모듈명
 * 
 * - 특징
 *  - npm init 프로젝트 생성 => CJS 방식으로 지원(기본값)
 *  - ESM을 사용하려면 package.json 에 다음 내용 추가
 *      -"type":"module", 
 *  - 
 */

// 1. 모듈 가져오기 => 필요한 요소 획득
import Human, { a , add , Person } from  "./mod"


// 2. 모듈 사용
console.log( a );

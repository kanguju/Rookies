# Javascript 언어
- 목적
    - 전 세계 언어 top10에 속함 => 개발자를 많이 찾는다
    - 프런트엔드 포지션에서 SPA 개발할 때 주력언어
    - react 개발시 사용언어 (Javascript, TypeScript)

- 개요
    - History
        - 2005년 이전
            - js는 해킹의 온상, 사용을 주저, 표준 x
        - 2005년
            - google map 등장 
            - js에  `ajax`(백그라운드 비동기 통신기술,  xml 을 대상) 기술 적용 -> 지도서비스 개시
        - 2005년 이후
            - 2008(?) 크롬브라우저 등장, `v8` 기술 공개
            - `nodejs` 등장(2009~10)
                - JS가 전방위 발전
                - 웹, 데스트톱 app, 모바일 개발됨
    - 버전
        - ECMAScript (자바스크립트 공식 명칭) 
        - https://www.w3schools.com/js/js_versions.asp
        - 2009 : ES5, ECMAScript 5, 현재 형태로 개정
        - 2015 : `ES6`, ECMAScript 2015, ECMA2015, 현재 기본 표준형태 => `ES Next`

    - JS 표현 범위
        - TS(typeScript) > ES Next > ES5
        - 최종 작성된 JS는 ES6로 맞춘다
            - 최신 문법에 맞게 작성 -> 트랜스컴파일 -> ES6로 변환처리됨

    - JS의 최종 산출물
        - ES6 (모든 브라우저에서 정상적 작동함)

- 언어 기본
    - 표현식 (expression)
        - 값을 생성(획득)하는 코드 단위
        - 파트, 조각
        - 문자을 완성하는 과정, 조각
        
    - 문장(statement)
        - 작업 수행 단위
        - ;으로 끝난다. 단, JS는 생략 가능함

    - 키워드
        - 예약어
        - 식별자로 사용 x
        - ex) function, var, let, const, if, while

    - 식별자 (identifier)
        - 변수명, 함수명, 클레스명, 모듈명, 속성명,..
        - 이름정의 -> 네이밍 컨벤션
        - 네이밍 컨벤션 종류 -> 전통, 문화 -> 동일하게 작성
            - 카멜 표기법
                - Java, JavaScript, ..
                - 시작문자
                    - 문자(a-z,A-Z,각국문자), 달러기호($), 밑줄(언더스코어, _ )
                - 두번째 문자     
                    - 숫자 추가됨(0-9)
                - 대소문자 구분
                - 클레스명 첫글자 대문자
                - 단어가 이어지면 이어지는 첫글자 대문자
                - ex)
                    _name, getName, Person(클레스이 경우)
            - 스네이크 표기법
                - Python, ..
                - ex) get_name, get_age_for_man
            - ...

- 타입
- 변수
- 연산자
- 형변환
- 흐름제어 : 조건문, 제어문, 반복문
- 함수
- 클레스, 객체
- 최신문법
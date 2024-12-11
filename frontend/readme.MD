# 기본준비
    - 구글 계정 하나 준비
    - github.com/노션 가입

# 웹서비스의 이해(workflow)
    - 웹 이용
        - 1. 브라우저(크롬,에지,사파리,..) 오픈
            - PC
            - 모바일(스마트폰)

        - (*)2. 원하는 서비스 이용
            - 주소창에 도메인입력 (https://www.coupang.com/)
                - 엔터(행위 -> `요청(request)`)
            - 검색 -> 검색결과 클릭 -> 진입(`요청`)

        - 3. 내부적인 요청 처리
            - 3-1. DNS(Domain Name System) 조회
                - www.coupang.com => 92.132.44.13 (IP 주소로 변환)
                - 요청을 이어감
            - 3-2. 서버와 연결 설정
                - TCP/IP 기반
                    - 프로토콜을 기반해서 용어가 정의
                    - 프로토콜 : 통신규약, ..
                        - 웹은 어떤 프로토콜으로 통신하는가?
                        - http or https
                - `클라이언트(브라우저) <-> 서버(서비스 제공 주체)`
                    - 서버는 어디에 위치?
                        - 과거(레거시) : 자사내부(온프레미스), IDC 센터
                        - 현재 : 클라우드 서비스내에 특정 존에 존재(분산)함
                            - 클라우드는 전세계 여러 데이터센터에 존재할 수 있다
                            - aws, azure, google cloud
                    - IP를 통해서 서버를 찾아간다!!
        
        - (*)4. 서버측 요청 처리
            - 클라이언트의 요청 도착
            - 요청 해석 -> 누가 처리할것이지? -> 특정한 대상으로 요청 넘김
                - 라우팅 => 백엔드포지션 스프링부트에서 확인
            - 처리
                - 로그인 처리: 클라이언트가 보낸 ID/pw 획득,   
                - 조회 : 데이터베이스 접속, 쿼리, ..
                - 다양한 비즈니스 업무 처리
        
        - (*)5. 응답 (Response)
            - html + css + javascript 을 구성하여 응답
                - 웹 페이지
            - xml or json(데이터포멧, 반정형데이터)으로 구성하여 응답
                - restful, 오픈 API로 응답받는 형식
                - 화면 x
                - 내부적으로 사용(혹은 백단에서 사용)
        
        - 6. 응답 데이터 클라이언트에게 전송
            - 클라이언트 <-> 서버 연결되어 있으므로 가능
            - http|https
        
        - 7. 브라우저 랜더링
            - 응답 데이터 -> 파싱(해석, 메모리로드) -> 화면처리(랜더링)
            - 사용자는 브라우저를 통해서 결과를 확인한다!!
            - 여기까지 처리시간 0.x초
        
            
    - 웹서비스 구조 (3-tier)
        - 프런트엔드
            - html + css + javascript
                - 사용자가 `브라우저`를 통해 만나는 서버의 응답 결과
                - 구성
                    - html5 : 구조(뼈대), 콘텐츠포함
                    - css3 : 레이아웃, 디자인, 반응형, 애니메이션
                        - 반응형:PC용, 모바일용 동시 처리?
                    - javascript : 인터렉션(사용자<->브라우저, 상호작용), 이벤트, 통신, 동적화면구성
                        - typescript
            - 2012~15 
                - javascript -> 크롬브라우저(2007~8) -> v8엔진 공개 ->  nodejs 등장 -> js가 주력 언어로 도약
                - SPA(Single Page Application) 개념 등장, 개발(플랫폼) 
                    - Angularjs(구글) -> `reactjs(메타)` -> vuejs(커뮤니티)
                    - 1개 페이지내에서 랜더링만 처리하여 새로운 화면을 구성할수 있다면 => 더 빠른 서비스 제공할수 있지 않을까?
                    - 예시
                        - 대시보드(실시간처리), 지도기반서비스, 넷플리스, 신규 서비스(데이터분석등등) ,.. 적용중
        - 백엔드
            - `웹서비스`를 제공하는 s/w
                - 프로젝트의 목적 => 웹서비스!!
            - 개발언어 중심 분류
                - `자바(oracle)`
                    - servlet -> jsp, ejs -> Spring -> `SpringBoot`
                    - 전자정부프레임웍 : Spring, `SpringBoot`
                    - 기업체(엔터프라이즈급, 중/대형) 많이 사용
                - 파이썬
                    - django(국내) , flask(북미), fastapi(가장 빠르다)
                    - 데이터분석, 머신러닝/딥러닝, 생성형AI 활용한 서비스
                - C# (MS)
                    - asp -> asp.net -> .net
                    - 여행, 항공, 숙박 예약 (중대형 시스템)
                    - 윈도우서버를 기반으로 하는 서비스
                - javascript/typescript(node 기반)
                    - nodejs(백엔드)
                        - expressjs
                        - react-> nextjs,...
                    - spa(프런트)
                        - angularjs
                            - 유투브,..
                        - `react`
                            - 국내 많이 사용중
                            - 전세계적으로 비중이 높다
                        - vue
                            - 확산되고 있다!!
                - php
                    - php ~ 
                    - 소형 기업, 개인프로젝트등 많이 사용

        - 데이터베이스
            - 데이터를 저장하는 저장소, ..
            - 종류
                - RDB : 관계형 데이터베이스
                    - `Mysql`, Mariadb, aws 오로라, postgre
                    - ms-sql
                    - Oracle
                    - ...
                    - 기존의 시스템의 데이터 저장에 적합
                - NoSQL
                    - mongoDB
                    - redis
                    - ....
                    - 로그, 비정형데이터등등 빅데이터 저장쪽에 적합

    - 프로토콜

# 자바스크립트
## 개발 환경 구축
    - nodejs 설치
        - https://nodejs.org/en
        - Node.js® is a free, open-source, cross-platform JavaScript runtime environment
        - js를 개발하고 구동시키는 환경을 제공
    
    - IDE (개발 통합 환경)
        - vscode 설치
        - https://code.visualstudio.com/
        - 경량, 대부분의 언어 지원(범용), git지원(형상관리), ...
        - 강력한 extension 지원

## vscode extension 설치(개발 도움)
    - code runner
        - js 코드를 작동시 내부에서 바로 실행가능하게 버튼 제공
    - live server
        - html 코드를 가상 서버를 가동시켜서 작동(확인)
    - prettier-code formatter
        - 포멧터
        - 팀내에서 동일한 스타일의 코드를 유지보수
    - auto rename tag
        - 태그명 변경시 자동으로 닫기 태그가 수정되는 기능
    - meterial icon theme
        - 꾸미기 (아이콘을 통해 각 파일/디렉토리 표현)

## Javascript 언어
    - 개요
    - 언어 기본
    - 타입
    - 변수
    - 연산자
    - 형변환
    - 흐름제어 : 조건문, 제어문, 반복문
    - 함수
    - 클레스, 객체
    - 최신문법
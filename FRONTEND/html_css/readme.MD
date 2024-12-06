# 프런트엔드 구조
    - 프런트엔드
        - 기본 구성원
            - html + css + javascript
            - 개별요소
                - html5 : 구조(뼈대), 콘텐츠포함
                - css3 : 레이아웃, 디자인, 반응형, 애니메이션
                - javascript : 인터렉션(사용자<->브라우저, 상호작용), 이벤트, 통신, 동적화면구성
        - 방식
            - 브라우저를 통해서 유저가 확인하는 화면의 랜더링 방식
            - 종류
                - SSR (Server Side Rendering)
                    - 서버 사이드 랜더링
                    - 유저가 보는 화면을 서버(백엔드)에서 모두 완성하여 전송
                    - 전통적인 방식
                    - 개발플렛폼
                        - springboot, nodejs, .net,...
                - CSR (Client Side Rendering)
                    - 클라이언트 사이드 랜더링
                    - 유저가 보는 브라우저에서 화면이 완성
                        - 랜더링 부하가 클라이언트에게 가중된다
                        - 개발플렛폼 
                            - reatjs/vuejs,... => SPA

# html
    - Hyper Text Markup Language
    - 구조, 뼈대, `콘텐츠==데이터`를 가지고 있다
        - 웹
            - 구조 + 데이터세팅 => 화면처리에 기본 정보
        - 데이터
            - 구조 + 데이터 => 반정형 데이터 
            - 웹스크래핑/웹크롤링 => 데이터 수집 대상
    - 각각 태그에 용도
    - html5 
        - 1995년 최초 고안
            -  html4가 2015이전까지 주력 사용 -> 지금은 html5
        - 2008 드레프트 이후 2009~10 적용
        - 스마트폰보급 및 확산 시기
    - 구조
        1_basic.html
    
    - 주요 태그
        - 구조
            - div : 영역 -> 레이아웃
            - table, theader, tbody, tr, td, th : 테이블표시 -> 게시판
        - 입력
            - (*)input, select, textarea, radio,....
            - 사용자로부터 데이터를 `입력`
        - 전송
            - form
            - 서버로 `전송` 역활
        - 정보표시
            - p(단락,줄바꿈), span(조각,줄바꿈x) ... : 텍스트
            - 멀티미디어
                - img, video, audio, ...
        - 이동
            - a : 링크
        - 이벤트
            - button
        - 외부 자원 참조 (html 내부로 적용)
            - script, style, ...
        - 2D/3D 랜더링
            - canvas : 차트, 게임

# 개별기능
    - html, js 연동
        - 2_html_js.html, 2_html_js_2.html
        - SSR 기준 : html에 js, css를 포함시키는 방법
            - external
                - *.js, *.html로 파일 존재
                - <script src="xx.js">
            - internal
                - *.html만 존재
                - <script> ... </script>
            - inline
                - html 요소에 직접 적용
                - <button onclick="javascript:xxx();">로그인</button>
                - <button onclick="xxx();">로그인</button>


# (*)css selector
    - css에서 요소를 특정(찾아내는)하는 기법(방법, 표현)
    - css selector 이해(직접), 개발자도구 자동으로 찾기(툴사용)
    - 규칙 (우선 검토하는 순위)
        - (*)아이디 값
            - 문서(html)상에서 고유한 값을 가진다!!
            - html : <요소명 id="아이디값">
            - css selector : "#아이디값"
        - 클레스 값
        - 요소명
        - 조합(위의 표현)
        - 열거
        - 서열 (부모, 자식, 형제, 후손)
        - 기타 
            - 의사결정
            - 속성셀렉터

# html 내에서 통신
    - 프로토콜 : 웹페이지 기준 http, https
    - html으로 전송한다(요청한다)
        - form 태그
            - 폼 전송 이동
            - 데이터 전송 방법(method)
                - (*)get, (*)post, put, delete, .... 모든 메소드 지원(미지원 존재)
            - 컴벅인다!!
            - 2_html_js_2.html
        - a 태그
            - 링크로 이동
            - 데이터 전송 방법(method)
                - get
            - 컴벅인다!!
        - 주요 메소드   
            - get : 소량의 데이터 전송, 보안이 중요하지 않을때,
                - 프로토콜의 헤더에 데이터를 전달
                - 형식 : url + ? + 파라미터(키=값&키=값...)
                - http://www.naver.com/api/news?id=1234823478293
            - post : 대량의 데이터, 보안이 중요(데이터는 숨겨져야 한다), 파일업로드
                - 프로토콜의 바디에 데이터를 전달
                - 바디로 데이터를 전송 -> 대량의 데이터를 쪼개서 전송 가능하다는 뜻!!
                - 가변 처리가 가능하다 

    - JS로 전송한다(요청한다)
        - ajax (Asynchronous JavaScript and XML)
            - 모든 메소드 방식 지원
            - xml 전송을 목표, 비동기처리, 백그라운드 통신 설계
                - 데이터 포멧 xml => json
            - open api 회사들은 
                - xml, json 모두 지원함 => restful 방식 백엔드 구성시
            - txt 포멧이면 모두 지원가능함!!, 파일, ...
                - txt 사람, 컴퓨터, 프로그램이 모두 이해할수 있는 형식
            - 더보기 -> 데이터 불러오기 (백단으로 통신해서 데이터 로드)

    - http 요청시 응답코드
        - 100 ~
        - 200 ~ : 200번은 정상응답
        - 300 ~
        - 400 ~ : 404 (해당 페이지 없음), 405 (그런 메소드는 해당 주소로 지원 x) <= 클라이언트
        - 500 ~ : 500 <= 서버측에러 

# 차트 그리기
    - 대시보드용, 수집된(쌓여있는) 데이터 => 시각화 => 분석, 관계
    - 차트용 라이브러리
        -유료, 무료 -JS
        -무료
            - chartjs
            - 3_chart.html
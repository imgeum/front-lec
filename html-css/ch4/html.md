## HTML 

### 블록 레벨(level) 요소와 인라인(inline) 요소

1. 블록
   1. { display: block;}
   2. div, h1, p
   3. 사용 가능한 최대 가로 너비를 사용
   4. (width: 100%; height: 0;)으로 시작
   5. 수직으로 쌓임
   6. margin, padding | 위, 아래, 좌, 우 사용 가능
   7. layout
2. 인라인요소 
   1. display: inline
   2. span, img
   3. 필요한 만큼의 너비를 사용
   4. 크기를 지정할 수 없음
   5. (width: 0; height: 0;)으로 시작
   6. margin, padding, 위, 아래 사용 불가
   7. text

### HTML tag 종류
강의 블로그
https://heropy.blog/2019/05/26/html-elements/
참고자료
[MDN](https://developer.mozilla.org/ko/docs/Web/HTML)
[깃허브 홈페이지 카피 예시](https://heropcode.github.io/GitHub-Responsive)

1. html
   1. lang
      1. [ISO 639-1](https://ko.wikipedia.org/wiki/ISO_639-1_%EC%BD%94%EB%93%9C_%EB%AA%A9%EB%A1%9D)

#### HEAD
1. title
   1. 이름
2. meta
   1. [MDN](https://developer.mozilla.org/ko/docs/Web/HTML/Element/meta)
   2. 특징
      1. empty tag
   3. 속성
      1. charset
         1. EUC-KR(완성형), UTF-8(조합형)
         2. [Character_encoding](en.wikipedia.org/wiki/Character_encoding)
      2. content
         1. name, http-equiv
      3. http-equiv(alent)
         1. 서버/사용자 에이전트의 작동방식의 지시를 정의
         2. http 프로토콜의 header 전송내용 포함
      4. name
         1. author, description, etc
      5. og(open graph), twitter card, etc
      6. 삭제된 내용
         1. obsolete로 표현, 사용지양
3. link
   1. 특징
      1. empty tag
   2. 속성
      1. rel(ationship)
         1. 필수속성
         2. 공백으로 구분
         3. stylesheet, icon, etc
      2. href(hypertext reference)
         1. 리소스 URL
      3. crossorigin
         1. CORS(Cross Origin Resource Sharing)
      4. rel
4. style
   1. body tag내 선언이 가능하지만 head에서 선언하는 것이 일반적임.
   2. type 속성과 일치하는 스타일 정보(ex. text/css)
5. 기타
   1. MIME 타입
      1. 클라이언트에게 전송된 문서의 다양성을 알려주기 위한 매커니즘
      2. example
         1. text/html, text/plain, text/css
         2. image/jpeg, image/png
         3. audio/mpeg, video/mp4
   2. BASE 태그
      1. base directory 설정함.
      2. href 상대경로, 절대경로 위에 설정.
      3. 웹 사이트의 URL로도 설정 가능.
      4. html문서 내 한번만 선언
      5. (base의 href) + (link의 href)이기 때문에 마지막 '/' 붙여주기

#### BODY
1. 구조개념
   1. header
      1. 헤더를 만들 때 사용
   2. ul(unordered list)
      1. 정렬이 안된 리스트
   3. li(list)
      1. 리스트 요소
   4. 영역을 설정하는 요소들은 대부분 Block 요소이다.
2. header
   1. 소개나 탐색을 돕는것의 그룹
   2. 후손으로 header, footer 불가
   3. header, footer, address의 후손 불가
3. footer
   1. 가장 가까운구획화된 콘텐츠나 구획화 루트의 푸터를 나타냄
   2. 작성자 구획, 저작권 데이터, 관련 문서의 링크
4. h1 ~ h6
   1. [MDN](https://developer.mozilla.org/ko/docs/Web/HTML/Element/Heading_Elements)
   2. 6단계의 문서 제목을 구현
   3. 사용일람
      1. 제목 폰트의 크기를 줄이기 위해 낮은 단계의 사용 지양. css의 font-size 속성을 사용하기
      2. 제목 단계를 순차적으로 기입. 건너뛰기 지양.
      3. 첫 단계의 제목은 한 페이지에 하나만 사용.
   4. 의미적으로 대주제로 나누는 용도. 폰트 사이즈 용도가 아님.
5. main
   1. [MDN](https://developer.mozilla.org/ko/docs/Web/HTML/Element/main)
   2. 문서의 주요(핵심) 컨텐츠 설정 
   3. 하나만 존재해야 함e
   4. ie 지원 X
6. article
   1. [MDN](https://developer.mozilla.org/ko/docs/Web/HTML/Element/article)
   2. 독립적으로 구분되거나 재사용 가능한 영역 설정
      1. 매거진/기사, 블로그 등
   3. 일반적으로 h1 ~ h6을 포함하여 식별
   4. time, datetime 속성으로 작성
   5. article 내 section 가능
7. section
   1. [MDN](https://developer.mozilla.org/ko/docs/Web/HTML/Element/section)
   2. 문서의 일반적인 영역 설정
   3. 일반적으로 h1 ~ h6을 포함하여 식별
   4. section 내 article 가능
   5. div와 차이점
      1. div
         1. 의미 x, 
      2. section
         1. 의미 o, 제목
      3. article
         1. 의미 o, 독립(제목)
8. aside
   1. 문서의 별도 콘텐츠 설정
      1. 광고, 기타 링크 등의 사이바(Side bar) 설정ㅏㅇ고.
   2. 오른쪽, 아래쪽의 광고.
9. nav
   1. navigation
   2. 다른 페이지 링크를 제공하는 영역. 메뉴
   3. Home, About, Contact, 목차, 색인 등을 설정
   4. ol, ul
10. address
    1. <body>, <article>, <footer> 등에서 연락처 정보를 제공하기 위해 포함하여 사용
11. div
    1. Division
    2. 본질적으로 아무것도 나타내지 않는 콘텐츠 영역을 설정


##### 문자 컨텐츠
1. ol, ul, li
   1. ordered list, unordered list, list
   2. li는 단독 사용 불가. ol이나 ul의 자식으로 포함되어야 함
   3. ol의 항목 순서는 중요도 의미할 수 있음
2. dl, dt, dd
   1. Description List(집합), Description Term(용어), Description Details(정의)
   2. dl은 dt, dd만을 포함해야 함
   3. key/value 형태를 표시할 때 유용함.
   4. 스타일링의 한계 ->  스타일링이 편리한 ul, ol, li로 대체
3. p
   1. paragraph
   2. 하나의 문단을 설정.
   3. 정보통신보조기기 등에서 다음 문단으로 넘어갈 수 있는 단축키 제공.
4. hr
   1. Horizontal Rule
   2. empty tag
   3. 문단의 분리(주제에 의한)를 위해 설정
   4. 수평선으로 표시되나 표현적인 관점이 아닌 의미적인 관점으로만 사용해야 함.
5. pre
   1. Preformatted Text
   2. 서식이 미리 지정된 텍스트를 설정
   3. 텍스트의 공백과 줄바꿈을 유지하여 표시 가능
   4. Monoscope 글꼴 계열로 표시됨
      1. 글자의 가로 너비(width)가 동일함
6. blockquote
   1. Block Quotation
   2. 일반적인 인용문을 설정
   3. cite='url'

인라인 요소
1. a
   1. Anchor
   2. 다른 URL로 연결할 수 있는 하이퍼링크를 설정
   3. 속성
      1. href - url
         1. hashtag(#)을 사용하여 페이지 내부의 위치로 이동 가능
      2. target - _self, _blank
      3. rel - license, prev, next, etc
      4. download - bool
2. abbr
   1. Abberivation
   2. 약어
   3. title 속성을 사용하여 전체 글자나 설명을 제공
3. B, EM, Strong, I
   1. b
      1. Bring Attention (Bold)
      2. 문체가 다른 글자의 범위를 지정
      3. 특별한 의미를 가지지 않음
      4. 읽기 흐름에 도움을 주는 경우
      5. 글자가 두껍게(Bold) 표시됨
   2. mark
      1. Mark Text
      2. 사용자의 관심을 끌기 위해 하이라이팅할 때 사용
      3. 글자 배경이 노란색으로 표시됨
   3. em
      1. Emphasis
      2. 단순한 의미 강조를 표시
      3. 중첩 가능, 중첩될수록 강조 의미가 강해짐
      4. 정보통신보조기기 등에서 구두 강조로 발음됨
      5. 이탤릭체(Italic type)로 표시
   4. strong
      1. Strong Importance
      2. 의미의 중요성을 나타내기 위해 사용
      3. 강조 != 중요성
      4. 기본적으로 글자가 두껍게 표시됨
   5. i
      1. 표현할 수 있는 적합한 의미가 아닌 경우 사용
      2. 평범한 글자와 구분(아이콘, 특수기호 등)하기 위해 사용
      3. 기본적으로 이탤릭체(Italic type)로 표시됨
4. dfn
   1. Defenition
   2. 용어를 정의할 때 사용
5. cite
   1. 창작물에 대한 참조를 설정
   2. 책, 논문, 영화 등의 제목
   3. 기본적으로 이탤릭체로 표시됨
6. q
   1. Inline Quotation
   2. 짧은 인용문을 설정
   3. 긴 인용문은 blockquote를 사용
   4. 속성
      1. cite - url
7. u
   1. Underline
   2. 밑줄이 있는 글자를 설정
   3. 순수하게 꾸미는 용도의 요소로 사용
   4. <a>와 헷갈릴 수 있는 위치에서 사용하지 않도록 주의
   5. <span style="text-decoration: underline;">을 활용할 수 있으면 사용 권장 X
8. code
   1. Inline Code
   2. 컴퓨터 코드 범위를 설정
   3. 기본적으로 고정폭(Monospace) 글꼴 계열로 표시됨
9.  kbd
    1. Keyboard Input
    2. 키보드에서 사용자 입력을 나타내는 텍스트 범위를 설정
10. sup, sub
    1.  Superscripted text(위 첨자), Subscript text(아래 첨자) 
11. time
    1. 날짜, 시간을 나타내기 위한 목적
    2. datetime - Date(yyyy-mm-dd)
    3. not supported IE
12. span
    1. 본질적으로 아무것도 나타내지 않는 콘텐츠 영역을 설정
    2. div, span
       1. div
          1. 블록, 의미 x
       2. span
          1. 인라인, 의미 x
13. br
    1. break
    2. 줄바꿈을 설정
    3. 간격을 넓히기 위해 <br/>을 여러번 사용하지 말고 css를 이용하여 <br/>의 속성을 바꿔야 한다. 

##### 수정
1. del
   1. delete
   2. 삭제된(변경된) 텍스트의 범위를 지정
   3. 속성
      1. cite - URI - 리소스의 URI
      2. datetime - Date - 변경시간
2. ins
   1. insert
   2. 새로 추가된(변경된) 텍스트의 범위를 지정
   3. 속성
      1. cite - URI
      2. datetime - Date



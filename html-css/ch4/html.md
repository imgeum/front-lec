## HTML 

### 블록 레벨(level) 요소와 인라인(inline) 요소

1. 블록
   1. div, h1, p
   2. 사용 가능한 최대 가로 너비를 사용
   3. (width: 100%; height: 0;)으로 시작
   4. 수직으로 쌓임
   5. margin, padding | 위, 아래, 좌, 우 사용 가능
   6. layout
2. 인라인요소
   1. span, img
   2. 필요한 만큼의 너비를 사용
   3. 크기를 지정할 수 없음
   4. (width: 0; height: 0;)으로 시작
   5. margin, padding, 위, 아래 사용 불가
   6. text

### HTML tag 종류
강의 블로그
https://heropy.blog/2019/05/26/html-elements/
참고자료
https://developer.mozilla.org/ko/docs/Web/HTML
[카피할 사이트 - 깃허브 홈페이지 카피](https://heropcode.github.io/GitHub-Responsive)

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
7. section
   1. [MDN](https://developer.mozilla.org/ko/docs/Web/HTML/Element/section)
   2. 문서의 일반적인 영역 설정



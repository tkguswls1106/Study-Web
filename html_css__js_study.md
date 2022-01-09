# [html 공부 부분]

**html 강의 영상 사이트: <https://www.youtube.com/watch?v=tZooW6PritE&list=PLuHgQVnccGMDZP7FJ_ZsUrdCGH68ppvPb>**
```
크롬에서 ctrl+o 누르고 html 파일 열기

html 태그 뭔지 검색방법: 예를들어 h1 태그를 알고싶으면 구글에 'HTML h1 tag'를 검색한다.

html 태그중 엔터 역할을 하는 태그가 뭔지 검색하고싶을때: html new line tag

source 를 줄여서 src 로 적는다.
이미지를 넣는 태그: <img src = "prog.jpg">
		 <img src = "prog.jpg" width = "100%">
참고로 src = "prog.jpg" 이부분과 width = "100%" 이부분은 속성이라고 부른다.
위치는 상관이 없어서 <img width = "100%" src = "prog.jpg" > 이렇게 바꿔서써도 상관없다.
img태그처럼 태그가 태그의 이름만으로는 정보가 부족할때는 위처럼 속성을 통해서 더많은 의미를 부가할수있다.

마우스로 해당줄과 다음줄 어느부분을 마우스로 클릭하고 키보드를 치면 두줄이상에 동시 키보드 입력이 가능하다.

웹페이지의 진짜 제목을 바꾸고 싶으면 <title>제목</title>을 사용한다.

<!doctype html>
<html>
  <head>
  제목 관련 코드들
  </head>
  <body>
  본문 관련 코드들
  </body>
<html>

링크거는 코드 예: <a href="https://www.w3.org/TR/2011/WD-html5-20110405/">Hypertext is</a>
+ 새탭 열리게 하는 코드 예: <a href="https://www.w3.org/TR/2011/WD-html5-20110405/" target = "_blank">Hypertext is</a>
+ 마우스 갖다댔을때 툴팁뜨게하는 코드 예: <a href="https://www.w3.org/TR/2011/WD-html5-20110405/" target = "_blank" title = "html specification">Hypertext is</a>

문단 주석 처리: 
<!--
-->
```
<hr/><hr/>

# [css 공부 부분]

**css 강의 영상 사이트: <https://www.youtube.com/watch?v=Ok0bBJPtgJI&list=PLuHgQVnccGMAnWgUYiAW2cTzSBywFO75B&index=1>**
```
html 파일 인코딩하면서 중간에 css 언어를 써야할때: <style> </style> 태그 사이에 css 코드를 적어준다.

html은 정보를, css는 디자인에 집중한 언어코드 형태라고 본다.

a {
   color:red;
   }
여기서 a는 선택자(selector), color:red;는 효과(or 선언 declaration), color는 속성(property), red는 속성 값(property value)라고 부른다.

구글링 예: css text size property(속성)
	 css text center(가운데정렬) property

class = "shj"  여기서 class는 그룹핑하는 용도로 사용한다. " "안의 값은 원하는걸로 변경가능. 강사는 "active"를 사용함.
사용할때는 .shj {
} 이런식으로 사용한다.
띄어쓰기로 구분하여 class="sa hj"로 사용하였으면, 사용할때는 .hj {}로 사용한다.

순서가 마지막에있는 선택자에 우선권이 부여되어, 예를들어 여러 색상 속성이 사용되었어도 <style></style>안에 마지막으로 color:blue를 사용했으면 blue색상이 적용된다.
하지만 순서없이 먼저 우선권을 부여하고싶다면, id="shj"를 이용하고 <style></style>안에서는 #shj {}로 불러온다.
참고로 만약에 그리드를 이용하여 id 태그를 만들고 그 grid div 태그 안의 다른 태그만 간섭하고싶다면, 예를들어 #grid 가 아닌, #grid ol {} 이런식으로 적으면 된다.
정리해보자면, 순서 우선권은 id > class(이들 중에서는 마지막꺼가 우선) > 일반 태그 선택자(예를 들어 a)

style 태그 안의 border는 테두리를 디자인하는 속성이다.

style 태그 안에서 css 주석처리 코드는 /* */ 이다.

display:inline; 코드는 그 문자 범위에서만 테두리를 적용하고(자신의 크기만큼 테두리 사용),
display:block; 코드는 그 문자 줄 전체로 테두리를 적용한다(화면 전체를 테두리 사용). => 단, 밑부분에 width:100px 코드를 입력하면 가로 테두리 길이가 조정된다.
display:none; 코드는 해당문자를 사라지게한다.
참고로 이건 효과 부분에 코드를 작성한다.

style 태그 안에 적은 코드중 선택자만 다르고 효과 부분은 같다면, 선택자를 a, b {} 이렇게 묶어서 적어도 된다.

style 태그 안의 선택자 안의 효과 코드 부분중에서 중복되는 부분이 있다면, 예를들어
border-width:5px;
border-color:red;
border-style: solid; 이거를
border:5px red solid; 이렇게 바꿔서 적을수 있다.
참고로 solid는 점선 이런게아닌 단선을 의미한다.
border-bottom 으로 사용하면 테두리가 사각형이 아닌, 밑부분에 선으로만 테두리가 만들어진다. 비슷한 방식으로 bottom 대신 right 등등도 사용 가능하다.

효과 부분에 padding:2px 이렇게 적어주면 2픽셀만큼 테두리와 글자 사이에 여백 테두리가 생긴다.
간단하게 padding 속성은 우리가 겨울에 입는 패딩처럼 여백 공간을 만들어준다 라고 이해하자.
padding-left: 55px;는 패딩값을 왼쪽으로부터 55px 떨어지게 만듦.

테두리가 두개면 각 테두리 사이에 엔터처럼 간격을 생성하고싶으면 margin 속성을 사용해주자.
예를들어 margin:0px; 을 적으면 두 테두리의 간격없이 딱붙어버린다.
장사를 하면 마진이 남는다. 이를 이용해서 margin 속성을 이해하자.

여백 관련 속성 총정리: ■는 테두리
■■■■■■■ border ■■■■■■■
■       padding      ■
■	주내용       ■
■       padding      ■
■■■■■■■ border ■■■■■■■
----------------- margin ------------------
■■■■■■■ border ■■■■■■■
■       padding      ■
■       주내용       ■
■       padding      ■
■■■■■■■ border ■■■■■■■

아무런 의미가 없고 그저 디자인의 용도로만 쓰는 태그: <div></div> div는 division의 약자이다.
div 태그는 기본적으로 block level element 이기 때문에 화면 전체(테두리)를 쓰기때문에 자동으로 줄바꿈(엔터)이 된다.
하지만 비슷한 용도긴한데, 아무런 의미가 없고 그저 디자인의 용도로만 쓰는 태그이지만 inline element 로써 자동으로 줄바꿈이 안되는 태그가 있다.
그것이 바로 <span></span> 태그이다.

예를들어 바디 부분에 div 엄마 태그로 NAVIGATION과 ARTICLE을 묶고 난뒤에 헤드 부분의 스타일 태그 부분에서
display:grid;와 grid-template-columns: 150px 1fr; 을 적어주면, 첫번째 컬럼인 NAVIGATION은 150px 크기로 변동없이 유지되고,
두번째 컬럼인 ARTICLE은 1fr이므로 사용자가  홈페이지 크기를 늘렸다 줄였다해도 그 최대 크기에 맞춰서 변동성을 가지고 크기가 줄었다 커졌다 한다.
만약에 grid-template-columns: 2fr 1fr; 로 적게되면, NAVIGATION과 ARTICLE이 2:1 비율로 늘었다 줄었다하며 크기가 변동성을 가지게 된다.

미디어 쿼리는 여러가지 화면의 특성들에 따라서 어떠한 조건을 만족할 때에만 이 css의 내용이 동작하게 하는 것이다.

스타일 태그에서
#grid{
      display: grid;
      grid-template-columns: 150px 1fr;
    }
코드를 적어, 바디 태그에 div 두묶음을 묶어놓는다.
그리고 스타일 태그 안에
@media(max-width:800px){
      #grid{
        display: block;
      }
이렇게 미디어 쿼리 코드를 작성한다.
여기서 헷갈릴 수 있는게, block의 정의가 한 블럭 자체를 잡아먹기때문에 block으로 미디어 쿼리로
조건부 코드를 걸어주고 조건에 부합하게 되어도 그대로 두묶음이 나란히 가로로 나열되어야하는것 아니냐는
생각이 들수 있는데, 이것은 틀린 말이다.
그 이유는 태그가 1개만들어있는걸 display block으로 건드리면 방금 말이 틀리지않고 가로로 그대로 나열된다는 말이 옳은말이되겠지만,
위의 예제는 그리드로 두가지 태그가 들어있기때문에 다시 미디어 쿼리에서 display block으로 건드리게 되면
그리드로 묶기전인 원래 디폴트(default)인 세로정렬(vertical) block으로 적용시켜야 한다는 것이다.
쉽게 이해해보자면, 그리드는 반대로 display: grid가 아닌, display: block으로 적용시키면, 원래가 세로였기때문에 가로가 아닌 세로 나열된다.
즉, display grid로 묶어뒀던걸 미디어 쿼리로 display block으로 풀어줬으니 디폴트인 세로로 돌아간다.

head 태그 안에서 style 태그를 따로 파일로 빼서 간단하게 한문장으로 다른 위치에 있는 style 태그를 불러와서 실행시키고 싶다면,
link 태그를 사용하여 <link rel="stylesheet" href="style.css"> 이런식으로 "style.css"부분만 이름 변경해서 적으면 된다.
```
<hr/><hr/>

# [javascript 공부 부분]

**javascript 강의 영상 사이트: <https://www.youtube.com/watch?v=dPRtcRwKo-Y&list=PLuHgQVnccGMBB348PWRN0fREzYcYgFybf>**
```
한 번 화면에 출력되면 언제나 그 모습 그대로이기 때문에 html은 정적이다. 하지만 게임 같은 여러 프로그램들은 사용자의 조작에 반응해서
프로그램이 반응한다. 이처럼 웹페이지도 동적으로 사용자와 상호작용 할 수 있게 한 기술이 javascript 이다.
즉, 사이트 제작은 html, 디자인은 css, 상호작용은 javascript 인 것이다.

참고로 JavaScript랑 JS랑 같은 말이다.

예를들어 <body style = " "> 태그로 상호작용시 일어날 디자인 변경의 css 코드를 적어주고,
그 body 태그 안에 관련 javascript 코드를 적어주면, 해당 상호작용에 따라 css 코드에 적힌대로 디자인이 변경된다.

css는 style 태그로 head 태그 안에 넣어주는 반면에, javascript는 body 태그 안에 넣어준다.
물론 예외로, <body style = " "> 같이 body 태그에 같이 적어주는 경우도 있다.

body 태그안에 <script> </script> 태그로 javascript 코드를 안에 넣어준다.

버튼 만드는 태그는 input 이다.
그 안에서 type = "button" 을 하면 버튼 모양이 되고, value = "글씨쓰기" 를 하면 그 버튼 안에 글씨를 쓸수 있게된다.
그리고 onclick = " " 를 사용하면 그안에는 javascript 이벤트(사건) 문법 코드를 적어야한다.

참고로 onclick 온클릭이지 onclick 원클릭이 아니니 헷갈리지 말자! on 관련된 코드가 많다. 예를들어 onclick, onchange, onkeydown 등등이 있다.

사용자가 어떤 키를 눌렀을 때 이벤트가 발생하게 하고 싶을떄 구글링 예: javascript keydown event attribute

```

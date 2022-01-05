```
# [html 공부 부분]

**html 강의 영상 사이트: <https://www.youtube.com/watch?v=tZooW6PritE&list=PLuHgQVnccGMDZP7FJ_ZsUrdCGH68ppvPb>**


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


<hr/><hr/>

# [css 공부 부분]

**css 강의 영상 사이트: <https://www.youtube.com/watch?v=Ok0bBJPtgJI&list=PLuHgQVnccGMAnWgUYiAW2cTzSBywFO75B&index=1>**


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


효과 부분에 padding:2px 이렇게 적어주면 2픽셀만큼 테두리와 글자 사이에 여백 테두리가 생긴다.
간단하게 padding 속성은 우리가 겨울에 입는 패딩처럼 여백 공간을 만들어준다 라고 이해하자.


테두리가 두개면 각 테두리 사이에 엔터처럼 간격을 생성하고싶으면 margin 속성을 사용해주자.
예를들어 margin:0px; 을 적으면 두 테두리의 간격없이 딱붙어버린다.
장사를 하면 마진이 남는다. 이를 이용해서 margin 속성을 이해하자.


**여백 관련 속성 총정리: ■는 테두리**
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
```

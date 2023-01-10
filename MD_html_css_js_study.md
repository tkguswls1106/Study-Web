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

html에서 if문 사용방법 순서
if
elif
else
그리고 마지막에 endif라는걸로 조건없이 바로 닫아준다.

<form> 태그: 웹페이지에서의 입력 양식을 의미한다. 밑은 그의 필수적인 속성들이다.
name: 폼의 이름
action: 폼 데이터가 전송되는 백엔드 url이며, 서버에 해당 데이터를 전송할 스크립트 파일을 지정한다.
         (예를 들어 제출(submit)버튼을 클릭했을때 입력한 정보(데이터)를 보내고 싶은 서버의 path를 action="" 을 통해 지정해줄 수 있다.)
method: 폼 전송 방식(GET / POST), GET은 url주소에 폼 데이터를 붙여서 보내는 방식이며, POST는 url주소에 폼 데이터가 보이지 않는다.
예를 들어, 
<form action="{% url 'result' %}" method="get">
    <input type="number" name="number"/>
    <button type="submit">결과보기</button>
</form>

form태그의 method를 더 자세히 설명해보자면,
빈칸에 입력할 내용 입력하고 버튼을 눌러 서버로 해당 입력값을 데이터로 전송했다면,
method='get' 이었다면 url 오른쪽에 붙는 path에 해당값에 대한 내용이 적히게되어 보안상으로 위험하지만,
method='post' 이었다면 url 오른쪽에 붙는 path에 해당값에 대한 내용이 적히지않고 숨김처리되고 다른 경로로 데이터가 전송되어 더 안전하다.

<a href="">가나다라</a>
이처럼 a태그를 클릭하면 링크로 어떤 페이지로 간다는 것이고, 이는 다른말로 GET방식으로 서버에 접속하는 것이다.
GET은 데이터를 가져올때 쓴다. 그러므로 예를들어 링크로 어떠한 페이지나 html파일로 이동시키는 것이면 그 사이트의 정보 데이터를 가져오는 GET방식을 사용하는게 맞겠지만,
예를들어 delete 버튼을 눌러 홈페이지의 정보를 삭제할때의 경우처럼 어떠한 버튼을 누르자마자 서버의 데이터를 변경(수정)하는 작업을 할때에는, a 태그로 링크 거는 방식은 GET 방식이기때문에 이를 사용하면 안된다. 그래서 POST를 써야한다.

form태그 안에서
<input type="hidden"> 은 눈에 보이진않지만 서버로 데이터를 전송하면 데이터는 전송하는 보이지않는 폼이다.

- html 파일의 틀을 어느정도 적어두겠음 -
<!DOCTYPE html>
<html>
    <head>
        <title>  </title>
        <meta charset="UTF-8">
        <link rel = "stylesheet" type = "text/css" href = "css 파일 이름"/>
        <style type="text/css">
        </style>
    </head>
    <body>
    </body>
</html>
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

* { } 쓰면 Universal selector 로써, 전체 모든 부분에 적용시키는 css 선택자가 된다. 근데 보통 그런경우 body 태그를 활용한다.

상태와 관련된 selector를 사용한 예시로는,
button:hover { }
이는 참고로 마우스가 해당 위치에 올려져있을때 동작한다.

div { visibility: visible; } 이면, 화면에 보이는 요소이다.
div { visibility: hidden; } 이면, 화면에 눈으로는 안보이지만 화면의 영역은 그대로 차지하는 요소이다.

class = "shj"  여기서 class는 그룹핑하는 용도로 사용한다. " "안의 값은 원하는걸로 변경가능. 강사는 "active"를 사용함.
사용할때는 .shj {
} 이런식으로 사용한다.
띄어쓰기로 구분하여 class="sa hj"로 사용하였으면, 사용할때는 .hj {}로 사용한다.

id와 class의 차이는
id는 단일로만 사용가능하며, #shj 이렇게 콜하고,
class는 복수로도 사용가능하며, .shj 이렇게 콜한다. 보통 이는 그룹핑해서 같은 class 이름들 부분을 한번에 통제할때 사용한다.

- 특정 태그(선택자) 안의 해당 class만 지정할때에는 예를들어
strong.red1 {font-size: 12pt}
=> !!! 근데이거 다시 찾아보니, strong.red1{} 이거이면 strong 선택자 태그중 class="red1"으로 지정된 부분을 건드리는것이다.
예를들어 <strong class="red1">가나다</strong> 의 가나다 부분 말이다. !!!
=> !!! 마찬가지로 id도 마찬가지이다. strong#red1{} 이거이면 strong 선택자 태그중 id="red1"으로 지정된 부분을 건드리는것이다.
예를들어 <strong id="red1">가나다</strong> 의 가나다 부분 말이다. !!!
- 특정 태그 안의 특정 태그를 지정할때에는 예를들어
ol li {list-style-type: upper-alpha}
- 특정 div id 안의 특정 태그를 지정할때에는 예를들어
#shj ol {}
- 만약 굳이 필요는 없지만 보기좋게, 특정 class 안의 class 안의 class 를 지정할때에는 예를들어
.menu .content .comment{ }
- style 태그 안에 적은 코드중 선택자만 다르고 효과 부분은 같다면, 선택자를 a, b {} 이렇게 묶어서 적어도 된다.

css 다중 선택자와 css 클래스명 띄어쓰기 정리 사이트:
https://ppoote.tistory.com/127
이를 정리하면,
1. 공백없이 클래스끼리 붙어있는 경우
.name1.name2{}
클래스 속성 내에 name1과 name2가 모두 설정된 모든 요소를 ​​선택한다.
2. 쉼표가 있는 경우
h1, h2, h3, h4, h5, h6 { font-family: helvetica; }
css 선택자 목록(,)은 일치하는 모든 요소를 선택한다.
3. 공백으로 연결해서 사용하면 '하위 개체'로 지정함.
.a .b .c{}
a클래스 내부 하위의 b클래스 내부 하위의 c클래스요소에만 스타일 적용한다.
4. class에서 띄어쓰기의 의미
<div class="park one">park 1</p>
park와 one 두 클래스를 다 가지게 된다. 왜냐하면 class 이름에 공백은 허용되지않기 때문이다.

순서가 마지막에있는 선택자에 우선권이 부여되어, 예를들어 여러 색상 속성이 사용되었어도 <style></style>안에 마지막으로 color:blue를 사용했으면 blue색상이 적용된다.
하지만 순서없이 먼저 우선권을 부여하고싶다면, id="shj"를 이용하고 <style></style>안에서는 #shj {}로 불러온다.
참고로 만약에 그리드를 이용하여 id 태그를 만들고 그 grid div 태그 안의 다른 태그만 간섭하고싶다면, 예를들어 #grid 가 아닌, #grid ol {} 이런식으로 적으면 된다.
정리해보자면, 순서 우선권은 id > class(이들 중에서는 마지막꺼가 우선) > 일반 태그 선택자(예를 들어 a)
따라서 id의 속성은 해당 요소에 부여된 class 속성에 관계 없이 작동한다.

div와 span의 차이점, 그리고 id와 class의 차이점 설명 사이트:
https://ohknow.tistory.com/35

div는 그룹핑할때 사용하고, 블럭요소로 한줄 범위 전체사용. 표준은 왼쪽으로 정렬이며, 블럭요소지만 width와 height로 겉으로 보이는 박스크기는 조절가능. 하지만 검사해보면 실제 속 범위는 한줄 꽉차있음.
span은 인라인요소로 해당 범위만 사용하고, 엔터키도 안됨.

html 파일에서 해당 원하는 부분만 따로 css style을 적용시켜주고싶다면,
<div style="line-height:80%;">
	<br>
</div>

style 태그 안의 border는 테두리를 디자인하는 속성이다.

style 태그 안에서 css 주석처리 코드는 /* */ 이다.

display:inline; 코드는 그 문자 범위에서만 테두리를 적용하고(자신의 크기만큼 테두리 사용),
display:block; 코드는 그 문자 줄 전체로 테두리를 적용한다(화면 전체를 테두리 사용). => 단, 밑부분에 width:100px 코드를 입력하면 가로 테두리 길이가 조정된다.
display:none; 코드는 해당문자를 사라지게한다. 단, 겉으로만 숨겨지는거지 실제론 존재하기때문에, 기본값으로 이것이 설정된 <script>태그처럼 js코드를 삽입할때 사용하기도 한다.
참고로 이건 효과 부분에 코드를 작성한다.
=> strong { display: none; background-color: silver; margin: 10px; padding: 6px; border: 1px solid black; }
+ 추가적으로 display:inline-block;
display 속성이 inline-block으로 지정된 엘리먼트는 기본적으로 inline 엘리먼트처럼 전후 줄바꿈 없이 한 줄에 다른 엘리먼트들과 나란히 배치된다.
하지만 inline 엘리먼트에서 불가능하던 width와 height 속성 지정 및 margin과 padding 속성의 상하 간격 지정이 가능해진다.
inline-block 엘리먼트는 명시적으로 해당 엘리먼트의 스타일을 display: inline-block로 지정해서 선언해줘야 한다.
inline-block을 이용하면 여러 개의 엘리먼트를 한 줄에 정확히 원하는 너비만큼 배치할 수 있기 때문에 레이아웃에 활용할 수 있다.
그래서 전체를 div로 그룹핑해서 display:inline-block;을 써주고, position으로 레이아웃 하는 방법이 있다.

display:none;이 기본값으로 탑재된 태그 예시: <script>태그
display:block;이 기본값으로 탑재된 태그 예시: <p>태그, <div>태그, <h1>~<h6>태그
display:inline;이 기본값으로 탑재된 태그 예시: <span>태그

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
두번째 컬럼인 ARTICLE은 1fr이므로 사용자가 홈페이지 크기를 늘렸다 줄였다해도 그 최대 크기에 맞춰서 변동성을 가지고 크기가 줄었다 커졌다 한다.
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

각 콘텐츠 레이아웃 위치 지정 방법:
css 코드 내에서 position 속성을 사용하면된다.
static, absolute, relative, fixed 가 있는데,
이는 이 사이트에 잘 정리되어있다: https://engkimbs.tistory.com/922
- position으로 레이아웃 배치 중요한점: absolute 의 기준이 되는 위치는 '가장 가까운 부모 요소 혹은 조상 요소'(즉, 해당 div 를 통틀어 묶고있는 그룹핑 틀 div) 중 position 속성이 relative인 요소이다.
                                                 그렇기때문에, 레이아웃에서 가장 큰 틀이되는 div를 css로 position:relative;로 해놓고, width와 height 값으로 틀의 박스 크기를 지정해주고,
	                                     그 안의 레이아웃 요소들의 div를 모두 같은 이름의 class 이름으로 지정해주고, 그 class의 css를 position:absolute;로 해두면,
	                                     이제 그 relative인 border의 큰 틀 안에서 틀의 border 부분을 기준으로 상대적으로 레이아웃 위치 조절이 가능해진다.
	                                     여기서 꿀팁은 안의 레이아웃 요소들의 div를 모두 다른 id로 선언해주어, css 에서 각자 id마다 #box1{top:0; left:0;}, #box2{bottom: 0; left: 0;} 이런식으로 위치 조절을 해주는것이 편리하고 좋을것이다.
참고로 top, left, right, bottom은 그 기준으로부터 '얼마만큼 떨어졌나'를 나타낸 것이다.

head 태그 안에서 style 태그를 따로 파일로 빼서 간단하게 한문장으로 다른 위치에 있는 style 태그를 불러와서 실행시키고 싶다면,
link 태그를 사용하여 <link rel="stylesheet" href="style.css"> 이런식으로 "style.css"부분만 이름 변경해서 적으면 된다.

참고로 플로팅박스를 이용한 div 레이아웃 배치의 꿀팁은, 표준 왼쪽 기준이라는 것을 명심하며,
먼저 이쁘게 사각으로 묶을 것들을 한번에 그룹핑하여 그것에 전부 첫번째 div 태그로 감싸주고 class로 이름붙여줌.
그리고 그 첫번째 div 태그의 크기를 width와 height로 조절해주면, 나머지 그 안에 들어갈 나머지 박스들도 다 따로따로 div로 묶고 class로 이름 각자 붙여줌.
그리고 .menu {float:left} 처럼 플로팅박스를 지정하여 겉박스 크기를 맞춰주면 된다.
만약 플로팅박스를 안해주고 div 그대로 쓴다면, width와 height로 div 크기를 조절했다고해도, 실제 속값은 한줄 전체이기때문에,
그 큰틀 div 안에 들어갈 다른 div 들이 한줄 엔터되어 적힘.
그렇기에 플로팅으로 왼쪽정렬 해준다면, 박스 겉크기에 맞춰서 이쁘게 옆으로 붙어서 정렬될것임. 부수적인 div들은 플로팅박스 안해도 표준정렬으로 예쁘게 따닥따닥 붙음.

css flex 부분 정리 사이트: https://wooncloud.tistory.com/10
https://www.w3schools.com/css/css3_flexbox_container.asp#flex-direction
css flex 부분 연습 사이트: https://flexboxfroggy.com/#ko
```
<hr/><hr/>

# [javascript 공부 부분]

**javascript 강의 영상 사이트: <https://www.youtube.com/watch?v=dPRtcRwKo-Y&list=PLuHgQVnccGMBB348PWRN0fREzYcYgFybf>**
```
한 번 화면에 출력되면 언제나 그 모습 그대로이기 때문에 html은 정적이다. 하지만 게임 같은 여러 프로그램들은 사용자의 조작에 반응해서
프로그램이 반응한다. 이처럼 웹페이지도 동적으로 사용자와 상호작용 할 수 있게 한 기술이 javascript 이다.
즉, 사이트 제작은 html, 디자인은 css, 상호작용은 javascript 인 것이다.

참고로 JavaScript랑 JS랑 같은 말이다.

JavaScript 코드인 <script>태그 코드는 <head>태그 안에 적어주면된다.
그리고 <body>태그 안에 코드를 안만들어주면 <head>태그에 JavaScript 코드를 아무리 열심히적어줬다한들 아무것도 실행이 되지않는다.

/*
예를들어 <body style = " "> 태그로 상호작용시 일어날 디자인 변경의 css 코드를 적어주고,
그 body 태그 안에 관련 javascript 코드를 적어주면, 해당 상호작용에 따라 css 코드에 적힌대로 디자인이 변경된다.
*/ !!!!이거 아마 틀릴수도 있는 정보라 주석처리 식으로 다시 수정해놨으니까 주의하기!!!!

css는 style 태그로 head 태그 안에 넣어주는 반면에, javascript는 body 태그 안에 넣어준다.
물론 예외로, <body style = " "> 같이 body 태그에 같이 적어주는 경우도 있다.

body 태그안에 <script> </script> 태그로 javascript 코드를 안에 넣어준다. 그 안에는 if 조건문을 사용 가능하다.

버튼 만드는 태그는 input 이다.
그 안에서 type = "button" 을 하면 버튼 모양이 되고, value = "글씨쓰기" 를 하면 그 버튼 안에 글씨를 쓸수 있게된다.
예를들어 value 값에 "가나다"를 넣으면 버튼위에 글씨가 "가나다"라고 쓰여 "가나다"버튼이 된다.
또는 value 값에 값을 넣어 해당값을 초기화시켜주는 역할도 한다.
그리고 onclick = " " 를 사용하면 그안에는 javascript 이벤트(사건) 문법 코드를 적어야한다.
참고로 onclick 온클릭이지 oneclick 원클릭이 아니니 헷갈리지 말자! on 관련된 코드가 많다. 예를들어 onclick, onchange, onkeydown 등등이 있다.

<input type="text" name="titlename" placeholder="title"> 은
input type="text"로 사용자가 텍스트를 입력할 수 있는 네모 빈칸이 만들어지고,
placeholder="title"로 그 빈칸 안에 title 이라는 회색글씨로 부가설명을 해주는 말이 적혀있게 된다.
name="titlename"로 사용자가 입력한 텍스트(데이터)가 나중에 서버로 전송할때는, titlename 이라는 이름으로 전송하게 된다.

<input type="submit"> 은 제출이라는 누르는 버튼을 만들어준다.

<textarea></textarea> 태그는 input type="text" 와 비슷하게 입력할 수 있는 빈칸을 만들어주지만, 여러줄의 문자열을 입력할 수 있다는 차이점이 있다.
input 태그는 <input type = "text" value = "여기"> 이런식으로 적으면 되지만, <textarea>여기</textarea> 태그 사이 안에는 input태그와 다르게 태그 사이에 글을 적어주어야한다.

label 태그는
label 태그의 for과, input 태그의 id 를 활용하여 연계할 수 있는 기능이 있기도 하며,
label 태그로 input 태그 까지 묶어버리고 for이나 id없이 그냥 텍스트만 적는다면, 텍스트를 선택해도 input 태그의 폼양식이 선택되는 기능을 구현할 수 있다. 즉, <label> 요소는 브라우저에 의해 일반적인 텍스트로 랜더링되지만, 사용자가 마우스로 해당 텍스트를 클릭할 경우 <label> 요소와 연결된 요소를 곧바로 선택할 수 있어 사용자의 편의성을 높일 수 있다는 것이다.

사용자가 어떤 키를 눌렀을 때 이벤트가 발생하게 하고 싶을떄 구글링 예: javascript keydown event attribute

웹사이트 검사에서 Elements 오른쪽에 있는 Console 을 클릭하면 거기서 바로 javascript 코드로 웹페이지를 제어할 수 있다.

상관은 없지만 될수있으면 변수 선언할때 앞에 var 적어주자. 예를 들어 var name = 'shj';

<body style = "background-color:black; color white;"> </body>
이걸 적어주면 웹페이지 배경색은 검은색이 되고, 글씨는 하얀색이 된다.

true와 false를 묶어서 Boolean(불리언)이라고 부른다.

javascript에서는 == 말고 ===로 쓰자.

<h1> 1<2 </h1> 이걸 나타내고 싶으면 <h1> 1&lt2 </h1> 이렇게 써야한다.

document.write("1<br>"); 이렇게쓰면 1쓰고 엔터된다. document.write('1<br>');도 되는듯 하다.

리펙토링(동작하는 내용은 같지만 코드를 효율적으로 하는것을 의미한다) 중복의 제거로 onclick에서 자기 자신을 가리킬때는 this를 쓰면 된다.
예를들어
    <input id="night_day" type="button" value="night" onclick="
    if (document.querySelector('#night_day').value === 'night')
    {
      document.querySelector('body').style.backgroundColor = 'black';
      document.querySelector('body').style.color = 'white';
      document.querySelector('#night_day').value = 'day'
    }
이코드면 input id="night_day" type="button" 이건 어차피 자기 자신을 가리키기때문에 id를 지워주고, 관련 코드를 this로 바꿔주면
<input type="button" value="night" onclick="
    if (this.value === 'night')
    {
      document.querySelector('body').style.backgroundColor = 'black';
      document.querySelector('body').style.color = 'white';
      this.value = 'day'
    }
이렇게 중복제거로 코드 사용이 가능하다.

배열안에 " " 말고 ' ' 로 써도 아마 상관없는듯 하다.
예를 들어 var arr = ["ABC", "DEF"]; 이것과 var arr = ['ABC', 'DEF']; 이것이 모두 가능하다.

document.write('<li>' + coworkers[i] + '</li>'); 처럼 ' '의 구분과 +의 사용유무를 잘 파악하자.

console.log(값) 이것은 웹페이지의 검사의 Console 창에서 해당 입력 값을 출력할때 쓰는 코드이다.

웹페이지의 검사의 Console 창에서 입력한 코드들은 임시적인 반영이라 실제로는 그 결과가 저장되지않는다.
표면적으로 임시적인 결과를 보여주는 것뿐이고, 실제로 적용하여 반영시키려면 콘솔코드가 아닌, 실제 코드를 바꿔야한다.

javascript로 함수를 만들고 싶다면, body 태그던 head 태그던 상관없이 그 안에 script 태그를 만들고 그 안에 function 함수이름(매개변수 예를들어 self){} 이렇게 선언한다.

변수 선언을 num1, num2 처럼 숫자를 포함시켜도 된다.

<script>
   function sum(num1, num2)
   {
       document.write(num1 + num2 + '<br>');
   }
   sum(3,5);
</script>
예를 들어 이런 코드라면, 3,5는 인자(argument) 라고 부르고, num1,num2는 매개변수(parameter)라고 한다.

참고로 위처럼 document.write() 안에 태그를 넣을순 있지만, 그 태그를 ' ' 안에 넣어줘야한다.

객체는 폴더(리렉토리)라는 관점으로 봐도 무방하다.

객체에 속해있는 함수는 함수라고 하지않고 메소드(method)라고 부른다.
예를들어 document.querySelector('body')에서 document는 객체이고, querySelector('body')가 메소드이다.
참고로 coworkers.programmer 여기서 programmer는 함수가 아니기때문에 메소드가 아닌, 프로퍼티 라고 부른다. (변수라고 부르면 틀림)

배열은 순서대로 정보를 저장해서 집어넣는 폴더라면,
반면에 객체는 순서없이 정보를 저장해서 집어넣는 폴더이다. 대신, 그 정보에 대한 이름과 함께 저장한다.
그러면 그 이름으로 다시 정보를 꺼내올수있기 때문이다. 객체가 바로 이러한 이름이 있는 정리정돈 상자이다.

배열은 대괄호[]를, 객체는 중괄호{}를 사용한다.

coworkers["data scientist"] = "taeho";
document.write("data scientist : " + coworkers["data scientist"] + "<br>");
이처럼 객체에서 띄어쓰기 이름(예를들어 data scientist)을 사용하고 싶을때에는 coworkers["data scientist"] 이렇게 사용한다.
coworkers.data scientist 이렇게는 사용이 불가능하다는 것이다.

객체에 메소드 안에는 함수를 넣을수도 있다.

------------------------
-- 리액트 공부하다가 가져옴 --

자바스크립트에서의 객체와 배열 설명 참고 사이트:
https://www.zerocho.com/category/JavaScript/post/572c6f759a5f1c4db2481ee3

배열은 선언할때 [] 사용.
객체는 선언할때 {} 사용.

객체 예시로
var hello = {
  firstName: 'Zero',  // 'firstName': 'Zero' 도 가능함. 그러면 호출할때 hello['firstName']과 hello.firstName 모두 가능함. 키에 띄어쓰기 없으면 웬만하면 마침표 방법으로 호출함.
  lastName: 'Cho',  // 'lastName': 'Zero' 도 가능함. 그러면 호출할때 hello['lastName']과 hello.lastName 모두 가능함. 키에 띄어쓰기 없으면 웬만하면 마침표 방법으로 호출함.
  'other Name': 'shj'  // 키에 띄어쓰기 있으므로 other Name: 'shj' 은 불가능함. 그러면 호출할때 hello['other Name'] 으로만 가능함. 마침표 호출방법은 불가능함.
};

map메소드는 배열에서 사용하므로, 이를 응용하면
배열 안의 각 인덱스에 속해있는 객체를 꺼내 사용할 수 있다.
예시로
const students = [
    {
        id: 1,
        name: "Inje",
    },
    {
        id: 2,
        name: "Steve",
    },
];
이처럼 배열[]안에 객체{}가 들어있다면, 배열student를 map메소드로 돌려 각 객체를 뽑아 사용 가능하다. 그 예시로
students.map( (student) => {return <li key={student.id}>{student.name}</li>;} )
이런식으로 말이다.
꼭 괄호생김새를 잘 구분하자.

------------------------

css의 style 태그와 javacript의 script 태그를 따로 파일로 빼서 링크를 걸어줄때는 둘이 차이점이 있다.
css의 style 태그의 경우에는, 따로 파일로 불러오려고 style 태그와 속부분까지 모두 지우고, 대신 링크 태그로 따로 링크 걸어준다.
javascipt의 script 태그의 경우에는, 따로 파일로 불러오려고 script 태그 속부분만 지우고 기존의 script 태그 코드를 약간 수정한다.

html 이든, css든, javascript던간에 Ctrl+/ 를 누르면 주석처리 해준다.

javascript는 //로 주석처리가 가능하다. 참고로 /* */ 이것도 가능하다.

jQuery는 라이브러리고, CDN으로 링크를 걸어서 사용하는게 좋다.

javascript에서 click 버튼을 만들고, alert 코드를 사용하면 클릭했을때 경고창이 뜰수있게 만들 수 있는데,
이처럼 우리의 웹 앱을 이용하려고 하는 사용자가 이런 버튼과 같은 조작장치를 이용해서 우리의 웹 애플리케이션을 사용한다.
사용자가 시스템을 제어하기 위해서 사용하는 조작장치를 UI(User Interface)라고 부른다.
이 내용을 보아 내생각엔 코딩하여 만들어진 click 버튼이 바로 UI의 예가 아닐까 하고 예상한다.

javascript로 alert 코드를 사용하여 click 버튼을 만들면 경고창이 뜰수있게 만들수 있는데,
웹브라우저 가지고 있는 경고창 기능을 alert이라는 javascript 문법에 따라서 그 코드를 이용하여 사용하고 있는 것이다.
이렇게 애플리케이션을 만들기 위해서 프로그래밍을 할 떄 사용하는 조작 장치들을 API(Application Programming Interface)라고 부른다.
alert 코드가 바로 API의 예이다.

프로그래머가 되기전 일반인이었던 우리는 UI만을 사용했고, 이젠 프로그래머가 된 우리는 API도 사용하게 되었다.

```

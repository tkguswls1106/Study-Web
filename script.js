/* script 태그를 제외한 그 안의 순수한 javascript 코드만 복사해온다 */
/* 사실 강의에서는 script.js 말고 보기좋게 colors.js 라는 이름의 파일명으로 만들었다. */

var Links = {
  setColor:function (color)
  {
    var alist = document.querySelectorAll('a');
    var i = 0;
    while(i < alist.length)
    {
      alist[i].style.color = color;
      i++;
    }
  }
}
var Body = {
  setColor:function (color)
  {
    document.querySelector('body').style.color = color;
  },
  setBackgroundColor:function (color)
  {
    document.querySelector('body').style.backgroundColor = color;
  }
}

function nightDayhandler(self)
{
  var target = document.querySelector('body');
  if (self.value === 'night')
  {
    Body.setBackgroundColor('black');
    Body.setColor('white');
    self.value = 'day';
    Links.setColor('powderblue');
  }
  else
  {
    Body.setBackgroundColor('white');
    Body.setColor('black');
    self.value = 'night';
    Links.setColor('red');
  }

}

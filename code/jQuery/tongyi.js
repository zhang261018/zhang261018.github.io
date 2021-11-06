$(document).ready(() => {
  let typingElement = $('.typing');

  typingElement.on('click', (e) => {
    typingElement.removeClass('animate');
    setTimeout(() => typingElement.addClass('animate'), 1);
  })
});


//text文本
var theText = '\t1945年抗日战争胜利后，中国共产党和中国国民' +
  '党两党就中国未来的发展前途、建设大计，在重庆进' +
  '行的一次历史性会谈。从1945年8月29日至10月10' +
  '日，经过43天谈判，国共双方达成《政府与中共代表' +
  '会谈纪要》，即《双十协定》。重庆谈判的举行和' +
  '《双十协定》的签订，给中国人民带来了和平、民' +
  '主、团结的希望和曙光。\n' +
  '\t虽然国民党统治集团违背全国人民迫切要求休养' +
  '生息、和平建国的意愿，在1946年6月底全面撕毁' +
  '《双十协定》，但其历史意义和启示仍是非常重大' +
  '的。\n'

var CCPTText

//加载文字动画
function loadText(text) {
  CCPTText.css('visibility', 'visible')

  var index = 0
  var str = ''
  //每70ms加载一个字
  var id = setInterval(function () {
    if (index === text.length) {
      clearInterval(id)
    } else {
      str += text.charAt(index)
      CCPTText.val(str)
    }
    index++
  }, 50)
  setInterval(function () {
    enterBut.css('visibility', 'visible')
  }, 8700)
}

//开始介绍
function start() {
  // 等待一秒开始介绍
  setTimeout(
    function () {
      // 预置介绍性文字
      CCPTText.val('')
      CCPTText.css('font-size', '23px')
      loadText(theText)
    }, 6500)
}

$(document).ready(
  function () {
    //初始化元素
    fox = $('#fox')
    enterBut = $('#returnBut')
    CCPTText = $('#CCTPText')
    fox.animate(
      {
        width: '100px',
        height: '100px'
      }, 1500)

    start()
  }
)

//text文本
var theText = '1949年10月1日，庆祝中华人民共和国中央人民政府成立典礼在首都北京隆重举行，史称“开国大典”。下午3时许，毛泽东主席在天安门城楼上庄严宣告：“中华人民共和国中央人民政府今天成立了！”军乐团高奏《义勇军进行曲》，广场中央升起第一面五星红旗。毛泽东宣读中央人民政府公告之后，举行了盛大的阅兵式。人民解放军受阅部队以胜利之师的步伐通过天安门，新组建的人民空军飞行编队矫健地飞越首都上空。'


const section = document.querySelector("section");
let clicked = false;
section.addEventListener("click", (e) => {
    section.classList.toggle("flip");
    if (!clicked) {
        clicked = true;
        // document.getElementById("title").style.opacity = 0;

        var index = 0
        var str = ''
        //每70ms加载一个字
        var id = setInterval(function () {
            if (index === theText.length) {
                clearInterval(id)
            } else {
                str += theText.charAt(index)
                document.getElementById("title").innerText = str;
            }
            index++
        }, 70)
    }
});
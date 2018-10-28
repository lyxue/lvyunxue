document.addEventListener('DOMContentLoaded',()=>{
    let focus = document.querySelector(".focus");
    let ul = document.querySelector(".focus ul");
    let cloneLi = ul.children[0].cloneNode(true);
    ul.appendChild(cloneLi);
    let len = ul.children.length;
    let firstImg = ul.children[0].children[0];
    let imgWidth;
    let idx = 0;

    firstImg.onload = function(){
        imgWidth = firstImg.offsetWidth;
        focus.style.width = imgWidth + 'px';
        ul.style.width = imgWidth * len + 'px';
    };
    let page = createPage();
    let timer = autoplay();
    focus.onmouseover = function(){
        clearInterval(timer);
    }
    focus.onmouseout = function(){
        timer = autoplay();
    }
    page.onclick = function(e){
        if(e.target.tagName.toLowerCase() != "span"){
            return;
        }
        idx = e.target.innerHTML - 1;
        showPic();
    }
    function createPage(){
        var page = document.createElement("div");
        page.classList.add("page");
        for(var i=1;i<=len-1;i++){
            let span = document.createElement("span");
            span.innerHTML = i;
            page.appendChild(span);
        }
        page.children[0].classList.add("active");
        focus.appendChild(page);
        return page;
    }
    function autoplay(){
        var timer = setInterval(function(){
            idx++;
            // len为4
            if(idx >= len){
                ul.style.left = 0;
                idx = 1;
            }
            showPic();
        },2000);
        return timer;
    }
    // 不管索引，只管显示。
    function showPic(){
        for(var i=0;i<len-1;i++){
            page.children[i].classList.remove("active");
        }
        if(idx<len-1){
            page.children[idx].classList.add("active");
        }else if(idx == len-1){
            page.children[0].classList.add("active");
        }
        animate(ul,{left:-imgWidth*idx},30);
    }

})
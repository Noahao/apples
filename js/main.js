/**
 * Created by px on 2017/4/11.
 */

let datas = jsonData;
let oNav = $(`nav`)[0];
let oContents = $(`#contents`);

// 遍历数据
datas.forEach((data,idx) =>{
    ///1、布局导航区域

    // <a></a>
    let oA = document.createElement(`a`);
    // <figure></figure>
    let oFig = document.createElement(`figure`);
    // 设置figure样式
    oFig.style.cssText = `background: url("images/${data[`navImg`]}") no-repeat center;`;

    // <a href="javascript:;"></a>
    oA.setAttribute(`href`,`javascript:;`);
    // a > figure
    oA.appendChild(oFig);
    // a > figure + textNode
    oA.appendChild(document.createTextNode(data[`title`]));

    oNav.appendChild(oA);


    // 2、布局内容区域
    oContents.innerHTML += `
        <div style="display: none;" class="item">
            <div class="fl" id="ct_fl" style="background: url('images/${data["desImg"]}') no-repeat
                center">
            </div>
            <div class="fr" id="ct_fr">
                <img src="images/${data["navImg"]}">
                <h1>${data["title"]}</h1>
                <p>${data["des"]}</p>
                <a href="javascript:;">进一步了解？</a>
            </div>
        </div>
    `;
});

// 设置默认值
oNav.firstElementChild.className = `selected`;
oContents.firstElementChild.style.display = `block`;

// 遍历`a`,添加点击事件
let aA = Array.prototype.slice.call(oNav.children);
aA.forEach((a,idx) => {

    // 为`a`添加一个自定义属性
    a.idx = idx;
    // a.setAttribute(`idx`,idx);

    a.onclick = function() {
        // this -> a
        for (let i = 0; i < oNav.children.length; i++){
            if (aA[i].className == `selected`) {
                aA[i].className = ``;
                oContents.children[i].style.display = `none`;
                break;
            }
        }
        this.className =  `selected`;
        oContents.children[this.idx].style.display = `block`;
    }
});






























let useCode = `/*
* 最近哪吒挺火
* 那我们用 CSS 画个哪吒吧
*/

/* 那我们开始吧 */

/* 先初始化下页面 */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

*:after,
*:before {
    box-sizing: border-box;
}

/* 设置下背景 */
#page {
    height: 100vh;
    width: 60%;
    background: #b49c7d;
    display: flex;
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

h1 {
    margin-top: 80px;
}

/* 画个圆圈 */
.wrapper {
    width: 340px;
    height: 340px;
    background: #e8d0b3;
    border-radius: 50%;
    overflow: hidden;
    position: relative;
    z-index: 0;
    margin-bottom: 80px;
}

.nezha {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 40px;
}

/* 画脸部 */
.head {
    width: 140px;
    height: 140px;
    position: absolute;
    top: 70px;
    left: 50%;
    margin-left: -70px;
    background: #e8bb9f;
    border-bottom-right-radius: 140px 100px;
    border-bottom-left-radius: 140px 100px;
    border: 2px solid black;
    box-shadow: -4px -4px rgba(199, 93, 14, 0.5) inset, 2px 4px rgba(255, 255, 255, .5) inset, -70px 10px 8px rgb(228, 169, 149) inset;
}

/* 画头发 */
.hair {
    width: 150px;
    height: 200px;
    position: absolute;
    top: 20px;
    left: 50%;
    margin-left: -75px;
}

.center {
    width: 100%;
    height: 70px;
    background: black;
    border-radius: 200px 200px 0 0;
    border: 2px solid black;
    border-bottom-left-radius: 100px 20px;
    border-bottom-right-radius: 100px 20px;
    position: absolute;
    z-index: 2;
    background: linear-gradient(to bottom, #000000 0%, #000000 0%, #333333 31%, #000000 100%);
    box-shadow: 0 5px 5px rgba(0, 0, 0, .3)
}

.hair .left,
.hair .right {
    content: '';
    display: block;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: 2px solid black;
    background: black;
    position: absolute;
    overflow: hidden;
}

.hair .left {
    left: -20px;
    top: -10px;
}

.hair .right {
    right: -20px;
    top: -10px;
}

.hair .left::before {
    content: '';
    display: block;
    width: 100px;
    height: 15px;
    background: #df4432;
    position: absolute;
    bottom: 10px;
    left: -15px;
    transform: rotate(-45deg)
}

.hair .right::before {
    content: '';
    display: block;
    width: 100px;
    height: 15px;
    background: #df4432;
    position: absolute;
    bottom: 10px;
    right: -15px;
    transform: rotate(45deg)
}

.hair .bottom {
    width: 160px;
    height: 100%;
    border: 2px solid black;
    background: black;
    position: absolute;
    top: 10px;
    left: 50%;
    margin-left: -80px;
    z-index: -1;
    border-bottom-left-radius: 100px 30px;
    border-bottom-right-radius: 100px 30px;
}

.hair .bottom:after {
    content: '';
    display: block;
    width: 20px;
    height: 110px;
    border: 2px solid black;
    background: #df4432;
    position: absolute;
    top: 0;
    left: -12px;
    transform: rotate(20deg);
    background: linear-gradient(to bottom, #b02f2f 0%, #df4432 100%);
}

.hair .bottom:before {
    content: '';
    display: block;
    width: 20px;
    height: 110px;
    border: 2px solid black;
    background: #df4432;
    position: absolute;
    top: 0;
    right: -12px;
    transform: rotate(-20deg);
    background: linear-gradient(to bottom, #b02f2f 0%, #df4432 100%);
}

.head:after {
    content: '';
    display: block;
    width: 15px;
    height: 15px;
    position: absolute;
    top: 15px;
    left: 50%;
    margin-left: -10px;
    border-radius: 50%;
    border: 5px solid #b8261c;
    z-index: 0;
}

.head:before {
    content: '';
    display: block;
    width: 20px;
    height: 20px;
    position: absolute;
    top: 2px;
    left: 50%;
    margin-left: -20px;
    border-right: 6px solid #b8261c;
    border-radius: 0 20px 20px 0;
}

.head .point {
    width: 12px;
    height: 11px;
    border: 2px solid transparent;
    border-top: 2px solid #d2a461;
    border-left: 2px solid #d2a461;
    border-radius: 50%;
    position: absolute;
    top: 15px;
    left: 50%;
    margin-left: -6px;
    z-index: 1;
}

/* 画眼睛 */
.eye .left .eyebrow {
    width: 50px;
    height: 12px;
    border-top: 2px solid #300c11;
    border-radius: 100%;
    position: absolute;
    top: 25px;
    left: 6px;
    transform: rotate(16deg);
    box-shadow: -4px 3px black inset;
}

.eye .left .eyeball {
    width: 45px;
    height: 55px;
    background: white;
    border-radius: 100% 100% 95% 85%;
    border: 2px solid black;
    border-top: 5px solid black;
    position: absolute;
    top: 38px;
    left: 10px;
    background: linear-gradient(to bottom, #ffffff 0%, #cbcbcb 100%);
    box-shadow: 0 -1px 5px rgba(0, 0, 0, .4) inset;
}

.eye .left .eyeball:before {
    content: '';
    display: block;
    width: 22px;
    height: 24px;
    background: black;
    border-radius: 50%;
    position: absolute;
    top: 15px;
    left: 50%;
    margin-left: -5px;
    border: 3px solid #862620
}

.eye .right .eyebrow {
    width: 50px;
    height: 12px;
    border-top: 2px solid #300c11;
    border-radius: 100%;
    position: absolute;
    top: 25px;
    right: 10px;
    transform: rotate(-16deg);
    box-shadow: 4px 3px black inset;
}

.eye .right .eyeball {
    width: 45px;
    height: 55px;
    background: white;
    border-radius: 100% 100% 85% 95%;
    border: 2px solid black;
    border-top: 5px solid black;
    position: absolute;
    top: 38px;
    right: 10px;
    background: linear-gradient(to bottom, #ffffff 0%, #cbcbcb 100%);
    box-shadow: 0 -1px 5px rgba(0, 0, 0, .4) inset;
}

.eye .right .eyeball:before {
    content: '';
    display: block;
    width: 22px;
    height: 24px;
    background: black;
    border-radius: 50%;
    position: absolute;
    top: 15px;
    right: 50%;
    margin-right: -5px;
    border: 3px solid #862620
}

/* 画嘴巴 */
.head .mouth-wrapper {
    width: 80px;
    height: 40px;
    position: absolute;
    top: 80px;
    left: 50%;
    margin-left: -42px;
    box-shadow: 2px 5px black;
    border-radius: 50%;
    overflow: hidden;
}


/* 画脖子 */
.head .neck {
    width: 50px;
    height: 0;
    border-bottom: 80px solid #e8976c;
    border-left: 20px solid transparent;
    border-right: 20px solid transparent;
    position: absolute;
    top: 80px;
    left: 50%;
    margin-left: -25px;
    z-index: -1;
}

.head .neck:before {
    content: '';
    display: block;
    width: 100px;
    height: 70px;
    border: 8px solid #fffea5;
    border-radius: 50%;
    box-shadow: 0 5px rgba(0, 0, 0, 0.1);
    position: absolute;
    top: 45px;
    left: 0;
    margin-left: -45px;
    z-index: 1;
}

/* 画身体 */
.body {
    width: 150px;
    height: 110px;
    background: linear-gradient(to bottom, #e8976c 0%, #e8bb9f 100%);
    border-radius: 100% 100% 50% 50%;
    box-shadow: 0 2px rgba(255, 255, 255, 0.5) inset;
    position: absolute;
    top: 220px;
    left: 50%;
    margin-left: -75px;
    z-index: -2;
    overflow: hidden;
}

/* 画衣服*/
.body:before {
    content: '';
    display: block;
    width: 30px;
    height: 100px;
    border: 2px solid black;
    background: #df4432;
    position: absolute;
    top: 0;
    left: 15px;
    box-shadow: 5px 0 rgba(0, 0, 0, .1);
}

.body:after {
    content: '';
    display: block;
    width: 30px;
    height: 100px;
    border: 2px solid black;
    background: #df4432;
    position: absolute;
    top: 0;
    right: 15px;
    box-shadow: -5px 0 rgba(0, 0, 0, .1);
}`


let n = 0
window.setTimeout(function fn() {
    n += 1
    document.querySelector('#writeCode>pre>code').textContent = useCode.substring(0, n)
    pageStyle.textContent = useCode.substring(0, n)
    writeCode.scrollTop = writeCode.scrollHeight
    if (n < useCode.length) {
        setTimeout(fn, 10)
    }
}, 10)

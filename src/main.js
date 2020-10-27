let string = `
/*
* 我叫蘑菇头，我是一名前端新人
* 接下来我会画一个哆啦A梦
**/
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.head {
  border: 5px solid #000;
  width: 500px;
  height: 500px;
  border-radius: 50%;
  background-color: #019fe9;
}
.face {
  position: absolute;
  border: 3px solid black;
  background-color: #fff;
  width: 430px;
  height: 430px;
  border-radius: 50%;
  left: 50%;
  bottom: 0;
  transform: translateX(-215px);
}
.eyes {
  position: absolute;
  top: 7px;
  border: 3px solid #000;
  width: 100px;
  height: 125px;
  margin-left: 50%;
  border-radius: 100px/120px;
  background-color: #fff;
  z-index: 2;
}
.eyeball {
  position: absolute;
  top: 60px;
  left: 5px;
  width: 40px;
  height: 45px;
  background-color: #000;
  border-radius: 40px/45px;
  position: relative;
}
.eyeball .point {
  position: absolute;
  background-color: #fff;
  width: 14px;
  height: 14px;
  top: 50%;
  left: 50%;
  margin-left: -9px;
  margin-top: -9px;
  border-radius: 50%;
}
.left {
  transform: translate(-100px);
}
.nose {
  position: absolute;
  border-radius: 50%;
  top: 108px;
  border: 3px solid #000;
  width: 50px;
  height: 50px;
  background-color: red;
  margin-left: 50%;
  transform: translate(-25px);
  z-index: 2;
}
.nose .point {
  background-color: #fff;
  width: 14px;
  height: 14px;
  margin-left: 10px;
  margin-top: 5px;
  border-radius: 50%;
}
.mouth {
    position: absolute;
    bottom: 0px;
    border: 3px solid black;
    width: 350px;
    height: 350px;
    border-radius: 50%;
    margin-left: 50%;
    transform: translate(-175px);
}


.huxu .column{
    position: absolute;
    left: 50%;
    top: 95px;
    border: 2px solid black;
    height: 253px;
    width: 0;
    background-color: black;
    z-index: 1;
}
.huxu .row{
     z-index: 1;
    border: 2px solid black;
    width: 140px;
    height: 0;
    background-color: black;
    position: absolute;
    
}
.row1{
    transform: rotate(15deg);
     top: 95px;
    left: 30px;
}
.row2{
    top: 130px;
    left: 30px; 
}
.row3{
    transform: rotate(-15deg);
    top: 175px;
    left: 30px;
}
.row4{
     transform: rotate(-15deg);
  top: 95px;
    left: 250px; 
}
.row5{
    top: 130px;
    left: 250px;
}
.row6{
     top: 175px;
    left: 250px;
    transform: rotate(15deg);
}

.fang{
    position: absolute;
    top: 249px;
    left: 50%;
    transform: translate(-200px);
    width: 400px;
    height: 100px;
    overflow: hidden;
    position: relative;
}
.xiaoyuan{
    position: absolute;
    top: -20px;
   width: 30px;
   height: 30px;
    transform:rotate(-45deg);
   background-color: #fff;
   z-index: 1;
}
.yright{ 
   right: 40px;
}
.yleft{
    left: 40px;
}
.yiling {
    width: 280px;
    height: 30px;
    border: 5px solid black;
    position: absolute;
    bottom: -5px;
    left: 50%;
    border-radius: 15px;
    background-color: #ff0000;
    transform: translate(-140px);
}
.ld{
    position: absolute;
    border-radius: 50%;
    bottom: -17px;
    left: 50%;
    transform: translate(-25px);
    border: 3px solid black;
    background-color: #ecc81a;
    width: 50px;
    height: 50px;
}
.lrow
{
    position: absolute;
    border-radius: 5px;
    bottom: 8px;
    left: 50%;
    transform: translate(-30px);
    border: 3px solid black;
    background-color: #ecc81a;
    width: 60px;
    height: 10px;
}
.lcolumn{
     position: absolute;
    border-radius: 7px;
    bottom: -9px;
    left: 50%;
    transform: translate(-6px);
    border: 3px solid black;
    background-color: black;
    width: 14px;
    height: 14px;
}
.xyuan{
    position: absolute;
    bottom: -15px;
    left: 50%;
    transform: translate(-1px);
    border: 1px solid black;
    background-color: black;
    height: 14px;
}`
let last = document.querySelector('#last')
let style = document.querySelector("style")
let n = 0
let time = 10;
let string2 = ''
let step = () => {
     btn1.onclick = () => {
                time = 20
            }
        btn2.onclick = () => {
        time = 10
    }
    btn3.onclick = () => {
        time = 0
    }
    setTimeout(() => {
        if (string[n] === '\n') {
            string2 += '<br>'
        }
        else if(string[n] === ' ') {
            string2 += '&nbsp;'
        }
        else {
            string2 += string[n]
        }
        last.innerHTML = string2
        style.innerHTML = string.substring(0, n)
        window.scrollTo(0, 99999);
        last.scrollTo(0, 99999);
        
        if (n < string.length-1) {
            n += 1
            console.log(time);
    step()
        }
       
    },time)
}
step()
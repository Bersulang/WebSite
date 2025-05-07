console.log("life is perfect");
var man = {
    name : "蔡徐坤",
    age : 25,
    gender : "男",
    like : function(){
        console.log("我喜欢唱跳rap篮球");
    }
}; //除var外还有let和const(定义常量)
function myFunction(){
    document.getElementById("demo").innerHTML = Date(); //插入写法在html渲染完成后执行会覆盖掉原有的内容
}
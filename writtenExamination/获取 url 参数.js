/*
 * @Description: 获取url参数
 * @Author: denghuanhuan
 * @Date: 2021-08-03 11:47:03
 * @LastEditors: denghuanhuan
 * @LastEditTime: 2021-08-03 14:42:00
 */

// 描述
// 获取 url 中的参数
// 1. 指定参数名称，返回该参数的值 或者 空字符串
// 2. 不指定参数名称，返回全部的参数对象 或者 {}
// 3. 如果存在多个同名参数，则返回数组
// 4. 不支持URLSearchParams方法




function getUrlParam(sUrl, sKey) {
    let arr = sUrl.split('?')[1].split('#')[0].split('&');
    console.log("arr", arr);
    let obj = {};
    arr.forEach(element => {
        let [key, value] = element.split('=');
        if (obj[key] !== void 0) {//如果这个key不是第一次出现
            obj[key] = [].concat(obj[key], value)
        } else {
            obj[key] = value;
        }
    })
    console.log("obj", obj);
    return sKey == void 0 ? obj : obj[sKey] || ''

}

function getUrlParam(sUrl, sKey) {
    var param = sUrl.split('#')[0].split('?')[1];
    if (sKey){//指定参数名称
        var strs = param.split('&');
        var arrs = new Array();//如果存在多个同名参数，则返回数组
        for(var i = 0, len = strs.length; i < len; i++){
            var tmp = strs[i].split('=');
            if(tmp[0] == sKey){
                arrs.push(tmp[1]);
            }
        }
        if (arrs.length == 1){//返回该参数的值或者空字符串
            return arrs[0];
        } else if (arrs.length == 0){
            return "";
        } else {
            return arrs;
        }
    } else {//不指定参数名称，返回全部的参数对象 或者 {}
        if(param == undefined || param == ""){
            return {};
        } else {
            var strs = param.split('&');
            var arrObj = new Object();
            for(var i = 0, len = strs.length; i < len; i++){
                var tmp = strs[i].split('=');
                if (!(tmp[0] in arrObj)) {
                    arrObj[tmp[0]] = [];
                }
                arrObj[tmp[0]].push(tmp[1]);               
            }
            return arrObj;
        }
    }

}


function getUrlParam(sUrl,sKey){
    var result = {};
    sUrl.replace(/\??(\w+)=(\w+)&?/g,function(a,k,v){
        if(result[k] !== void 0){
            var t = result[k];
            result[k] = [].concat(t,v);
        }else{
            result[k] = v;
        }
    });
    if(sKey === void 0){
        return result;
    }else{
        return result[sKey] || '';
    }
}
let str = `http://www.nowcoder.com?key=1&key=2&key=3&test=4#hehe`;
let result = getUrlParam (str, 'key');
console.log(result);

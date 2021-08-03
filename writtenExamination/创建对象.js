/*
 * @Description: 根据包名，在指定空间创建对象
 * @Author: denghuanhuan
 * @Date: 2021-08-03 15:00:29
 * @LastEditors: denghuanhuan
 * @LastEditTime: 2021-08-03 15:36:22
 */

// 描述
// 根据包名，在指定空间中创建对象
// 输入描述：
// namespace({a: {test: 1, b: 2}}, 'a.b.c.d')
// 输出描述：
// {a: {test: 1, b: {c: {d: {}}}}}


// 思维引导：
// 把整体包名看做一栋房子，房子里面层层套有某个东西，现在我要把房子布置成要求的样子，首先找到我家，在我家范围内看是否有下一个需要必备的元素，如果有，他能不能装东西，不能就让他改装成{},能就不改变第一个元素，
// 接下来将关注点放在第一元素(因为他所在地是我家)，这时候只需要看第一元素下有没有第二元素...以此类推，最终房子改造完成，而我的房子还是我的，只是里面的样子改装成了我需要的样子。
function namespace(oNamespace, sPackage) {
    let arr = sPackage.split('.'); 
    let pointer = oNamespace;
    for (let i = 0; i < arr.length; i++) {
        if (oNamespace[arr[i]]) {
            if (typeof oNamespace[arr[i]] != 'object') {//如果是原始值
                oNamespace[arr[i]] = {}
            }
        } else {
            oNamespace[arr[i]] = {}
        }
        oNamespace = oNamespace[arr[i]];
    }

    return pointer;
}

let result = namespace({ a: { test: 1, b: 2 } }, 'a.b.c.d');
console.log("result", result);
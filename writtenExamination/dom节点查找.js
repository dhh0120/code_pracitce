/*
 * @Description: dom节点查找
 * @Author: denghuanhuan
 * @Date: 2021-08-03 14:42:52
 * @LastEditors: denghuanhuan
 * @LastEditTime: 2021-08-03 14:59:35
 */
/**
    *
    * 描述
    *查找两个节点的最近的一个共同父节点，可以包括节点自身
    *输入描述：
    *oNode1 和 oNode2 在同一文档中，且不会为相同的节点
*/

/**
 * 写法一
 * @param {*} oNode1 
 * @param {*} oNode2 
 * @returns 
 */
function commonParentNode(oNode1, oNode2) {
    for (; oNode1; oNode1 = oNode1.parentNode) {
        if (oNode1.contains(oNode2)) {
            return oNode1;
        }
    }
}
/**
 * 写法二
 * @param {*} oNode1 
 * @param {*} oNode2 
 * @returns 
 */
function commonParentNode(oNode1, oNode2) {
    if (oNode1) {
        return oNode1.contains(oNode2) ? oNode1 : commonParentNode(oNode1.parentNode, oNode2);
    }
}

/**
 * 写法三
 * @param {*} oNode1 
 * @param {*} oNode2 
 * @returns 
 */
function commonParentNode(oNode1, oNode2) {
    if(oNode1.contains(oNode2)){
      return oNode1;
  }else if(oNode2.contains(oNode1)){
      return oNode2;
  }else{
      return commonParentNode(oNode1.parentNode,oNode2);
  }
}



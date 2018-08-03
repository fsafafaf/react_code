function createElement(tag, attrs, ...children) {
    attrs = attrs || {};
    // console.log(tag, attrs, children)
    // 返回一个虚拟dom 一个json对象 VNode
    return {
        tag,
        attrs,
        children,
        key:attrs.key || null
    }
}
export default createElement
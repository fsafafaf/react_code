## VNode
1. 虚拟DOM ? VNOde Virtual DOM
mvvm 封装了DOM 层
dom 太消耗性能  用vnode + diff 算法来解决

jsx 语法如何实现？ 用js对象描述html结构

JSX 背后隐含着VNode的真相
React.createElement(
    h1 第一个参数， document.createElement()
    attributes(属性) 第二个参数 ele.setAttribute (key, val)
    children(子节点) 第三个参数
        文本节点 textnode
        node 递归一下
)

虚拟DOM 描述 JSON
<h1 className="title">标题<span>副标题</span></h1>
VNode = {
    tag: "h1",
    atts: {
        class: "title"
    },
    children: [
        '标题',
        递归VNode... 
    ]
}


1. jsx(react-jsx-plugin)->vnode(createElement)->DOM(render)

2. Component(render的第三种方式，react-jsx vnode.tag function Counter) 
    -> 标签化组件 -> Counter(extends) -> Component类 -> render(jsx) -> reactDOM.render()

3. 响应式setState() 为了达到DOM的更新，将整个DOM片段都替换掉了
    a. 新生成整个的组件DOM树，重新挂载 100行DOM html
    b. 只将setState关联的那一小段DOM，在原来DOM的基础上做一下修改，
       将修改反映到DOM上，1行
    n:1 html树，DOM开销是一般计算开销的100-1000倍 
    重绘 replaceChild 
    重排 

React DOM diff算法
需求是：减少DOM操作
setState 对应的DOM 部份
setState 返回一个新的vnode -> 跟旧的DOM 对比 
将新的内存（虚拟）DOM和旧的DOM对比
都是树状结构，采用一个算法就可以比较出差异点，在相差的地方，进行真实DOM的操作
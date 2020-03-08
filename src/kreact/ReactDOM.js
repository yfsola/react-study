//!将vnode => node
function render(vnode,container) {

  const node = createNode(vnode)
  container.appendChild(node)
}

function createNode(vnode) {
  const {type,props} = vnode
  let node;
  if(typeof type === 'function') {
    node = type.isReactComponent?
    updateClassComponent(vnode):
    updateFunctionComponent(vnode)
  }
  else if(type === 'TEXT') {
    node = document.createTextNode('')
  } else if(type) {
    node = document.createElement(type)
  } else {
    console.log(type)
    node = document.createDocumentFragment()
  }
  updateNode(node, props)
  reconcilerChildren(props.children,node)
  return node
}

// 渲染children
function reconcilerChildren(children,node) {
  for(let i=0;i<children.length;i++) {
    let child = children[i]
    //判断children类型
    if(Array.isArray(child)) {
      for(let j=0;j<child.length;j++) {
        render(child[j],node)
      }
    } else {
      render(child,node)
    }
  }
}
//更新节点上的属性，如className，nodeValue等
function updateNode(node,props) {
  Object.keys(props).filter(k => k !== 'children').forEach(k => {
    if(k.slice(0,2) === 'on') {
      let eventName = k.slice(2).toLocaleLowerCase()
      node.addEventListener(eventName,props[k])
    } else {
      node[k] = props[k]
    }
  })
}

function updateFunctionComponent(vnode) {
  const {type,props} = vnode
  const vvnode = type(props)
  const node = createNode(vvnode)
  return node;
}

function updateClassComponent(vnode) {
  const {type,props} = vnode
  const comp = new type(props)
  const vvnode = comp.render()
  const node = createNode(vvnode)
  return node;
}

export default {render}
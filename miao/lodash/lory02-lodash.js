var lory02 = function (){
  function compact(ary) {
    return ary.filter(it => it)
  }

  function chunk(ary, size)(){
    var group = Math.floor(ary.length/size)
    var res = []
    for(var i = 0; i < group; i++){
      res.push(ary.splice(0,size))
    }
    if(ary.length){
      res.push(ary)
    } 
    return res
  }

  function concat(array, ...args){
    var result = [...array]
    for(var item of args){
      if(Array.isArray(item)){
        array.push(...item)
      } else {
        array.push(item)
      }
    }
    return array
  }

  function difference(arr, ...args) {
    return arr.filter(item => args.every(val => !val.includes(item)))
  }

  function drop(arr, n) {
    arr.splice(0,n)
    return arr
  }

  function dropRight(arr, n = 1) {
    while(n){
      arr.pop()
      n--
    }
    return arr
  }

  function flatten(arr) {
    return [].concat(...arr)  
  }

  function flattenDeep(arr) {
    return flattenDepth(arr,Infinity)
  }

  function flattenDepth(arr , depth = 1) {
    for(let i = 0; i < depth; i++){
      ary = flatten(ary)
    }
    return ary
  }

  function fromPairs(arr){
    var res= {}
    arr.forEach((item) => { 
      res[item[0]] = item[1]
    })
    return res
  }

  function head(arr) {
    return arr[0]
  }

  function indexOf(arr, value, fromIndex = 0){
    for(var i = fromIndex; i < arr.length; i++){
      if(value == arr[i]) {
        return i
        break;
      }
    }
    return -1
  }

  function initial(arr) {
    return arr.slice(0,arr.length-1)
  }

  function intersection(...args){ //过滤出每个数组中都包含的元素
    return args[0].filter(item => args.every( val => val.includes(item)))
  }

  return{
    compact,
    chunk,
    concat,
    difference,
    drop,
    dropRight,
    flatten,
    flattenDeep,
    flattenDepth,
    fromPairs,
    head,
    indexOf,
    initial,
    intersection,
    
  }
}()
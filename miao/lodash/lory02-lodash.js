var lory02 = function (){
  function compact(ary) {
    return ary.filter(it => it)
  }

  function chunk(ary, size){
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
        result.push(...item)
      } else {
        result.push(item)
      }
    }
    return result
  }

  function difference(arr, ...args) {
    return arr.filter(item => args.every(val => !val.includes(item)))
  }

  function drop(arr, n = 1) {
    return arr.splice(n)
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
    let res = []
    for(let item of arr) {
      if(Array.isArray(item)){
        let flattened = flattenDeep(item)  
        res.push(...flattened) 
      }else {
        res.push(item)
      }
    }
  }

  function flattenDepth(arr , depth = 1) {
    for(let i = 0; i < depth; i++){
      arr = flatten(arr)
    }
    return arr
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

  function initial(arr) {
    return arr.slice(0,arr.length-1)
  }

  function intersection(...args){ //过滤出每个数组中都包含的元素
    return args[0].filter(item => args.every( val => val.includes(item)))
  }

  function join(array, separator = ',') {
    var result =''
    array.slice(0,array.length-1).forEach(val => {
      result = result + val + separator
    })
    return result + array[array.length - 1]
  }

  function last(array) {
    return array[array.length - 1]
  }

  function lastIndexOf(array, value, fromIndex=array.length-1) {
    for(var i = fromIndex; i >= 0; i--){
      if(array[i] === value){
        return i
      }
    }
    return -1
  }

  function pull(array, ...values) {
    return array.filter(item => !values.includes(item))
  }

  function reverse(array) {
    var res=[]
    while(array.length){
      res.push(array.pop())
    }
    return res
  }

  function sortedIndex(array, value) {
    for(let idx in array){
      if(array[idx] >= value){
        return idx 
      }
    }
  }

  function indexOf(array, value, fromIndex=0) {
    for(let i = fromIndex; i < array.length; i++){
      if(array[i] === value){
        return i
      }
    }
    return -1
  }

  return {
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
    initial,
    intersection,
    join,
    last,
    lastIndexOf,
    pull,
    reverse,
    sortedIndex,
    indexOf,
  }
}()
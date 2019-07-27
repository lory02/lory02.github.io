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

  function differenceWith(array, ...values){
    var comparator = values[values.length - 1]
    var args = [].concat(...values.slice(0,values.length-1))
    
    if(typeof comparator == 'function'){
      let ans = array.filter(val => {
        let flag = true
        for(var i =0; i< args.length; i++){
          if(comparator(args[i],val)){
            flag = false
          }
        }
        return flag
      })
      return ans
    }else{
      return difference(array,values)
    }
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

  function uniq(array) {
    var res = []
    array.forEach(val => {
      if(!res.includes(val)){
        res.push(val)
      }
    })
    return res
  }

  function uniqBy(array, iteratee=_.identity){
    var res = []
    var map = []
    if(typeof iteratee == 'string'){
      array.forEach(val => {
        var v = val[iteratee]
        if(!map.includes(v)){
          map.push(v)
          res.push(val)
        }
      })
    } else {
      array.forEach(val => {
        var v = iteratee(val)
        if(!map.includes(v)){
          map.push(v)
          res.push(val)
        }
      })
    }
    return res
  }

  function union(...arrays) {
    let ans = []
    let array=[].concat(...arrays)
    array.forEach(val => {
      if(!ans.includes(val)){
        ans.push(val)
      }
    })
    return ans
  }

  function unionBy(...arrays) {
    let iteratee = last(arrays)  
    let rest = flatten(arrays.slice(0,arrays.length - 1)) 
    let ans = [] 
    let map = []
  
    if(typeof iteratee == 'string'){
      rest.forEach(val => {
        var v = val[iteratee]
        if(!map.includes(v)){
          map.push(v)
          ans.push(val)
        }
      })
    }else {
      rest.forEach(val => {
        var v = iteratee(val)
        if(!map.includes(v)){
          map.push(v)
          ans.push(val)
        }
      })
    }
    return ans
  }

  function nth(array, n=0){
    if(n < 0){
      return array[array.length + n]
    } else{
      return array[n]
    }
  }

  function fill(array, value, start=0, end=array.length){
    for(var i = start; i < end; i++){
      array[i] = value
    }
    return array
  }

  function isFunction(value) {
    if(Object.prototype.toString.call(value) == "[object Function]"){
      return true
    } else {
      return false
    }
  }

  function isMap(value) {
    if(Object.prototype.toString.call(value) == "[object Map]"){
      return true
    } else {
      return false
    }
  }

  function isNumber(value) {
    if(Object.prototype.toString.call(value) == "[object Number]"){
      return true
    } else {
      return false
    }
  }

  function isObject(value) {
    if(Object.prototype.toString.call(value) == "[object Object]"){
      return true
    } else {
      return false
    }
  }

  function isSet(value) {
    if(Object.prototype.toString.call(value) == "[object Set]"){
      return true
    } else {
      return false
    }
  }

  function isString(value) {
    if(Object.prototype.toString.call(value) == "[object String]"){
      return true
    } else {
      return false
    }
  }
  
  function isWeakMap(value) {
    if(Object.prototype.toString.call(value) == "[object WeakMap]"){
      return true
    } else {
      return false
    }
  }
  
  function isWeakSet(value) {
    if(Object.prototype.toString.call(value) == "[object WeakSet]"){
      return true
    } else {
      return false
    }
  }
  
  function negate(predicate) {
    return function (...args){  
      return !predicate(...args)
    } 
  }
  
  function ary(func, n = func.length) {
    return function(...args){
      return func(...args.slice(0,n))
    }
  }
  
  function unary(func){
    return ary(func,1)
  }

  function findIndex(array, predicate=_.identity, fromIndex = 0){
    if(Object.prototype.toString.call(predicate) == "[object Function]"){
      for(var i = fromIndex; i < array.length; i++){
        if(predicate(array[i])){
          return i
        }
      }
    }
    if(Object.prototype.toString.call(predicate) == "[object Object]"){
      for(var i = fromIndex; i < array.length; i++){
        var flag = true
        for(var key in predicate){
          if(!(key in predicate) || !(array[i][key] == predicate[key])){
            flag = false
            break
          }
        }
        if(flag){
          return i 
        }
      }
    }
    if(Object.prototype.toString.call(predicate) == "[object Array]"){
      for(var i = fromIndex; i < array.length; i++){
        if(array[i][predicate[0]] == predicate[1] ){
          return i
        }
      }
    }
    if(Object.prototype.toString.call(predicate) == "[object String]"){
      for(var i = fromIndex; i < array.length; i++){
        if(array[i][predicate]){
          return i
        }
      }
    }
  }

  function findLastIndex(array, predicate=_.identity, fromIndex=array.length-1) {
    if(Object.prototype.toString.call(predicate) == "[object Function]"){
      for(var i = fromIndex; i>=0 ; i--){
        if(predicate(array[i])){
          return i
        }
      }
    }
    if(Object.prototype.toString.call(predicate) == "[object Object]"){
      for(var i = fromIndex; i>=0 ; i--){
        var flag = true
        for(var key in array[i]){
          if(!(key in predicate) || !(array[i][key] == predicate[key])){
            flag = false
            break
          }
        }
        if(flag){
          return i 
        }
      }
    }
    if(Object.prototype.toString.call(predicate) == "[object Array]"){
      for(var i = fromIndex; i>=0 ; i--){
        if(array[i][predicate[0]] == predicate[1] ){
          return i
        }
      }
    }
    if(Object.prototype.toString.call(predicate) == "[object String]"){
      for(var i = fromIndex; i>=0 ; i--){
        if(array[i][predicate]){
          return i
        }
      }
    }
  }

  function unzip(array){
    return array[0].map((_, idx) => {
      return array.map(row => row[idx])
    })
  }

  function without(array, ...values) {
    return array.filter(val => {
      return !values.includes(val)
    })
  }
  
  function zip(...arrays){
    return arrays[0].map((_, idx) => {
      return arrays.map(row => row[idx])
    })
  }
  
  function xor(...arrays){
    var args = flatten(arrays)
    var dict = {}
    for(var arg of args) {
      dict[arg] = dict[arg] + 1 || 1
    }
    return args.filter(val => {
      return dict[val] == 1
    })
  }

  function countBy(collection, iteratee=_.identity){
    let result = {}
    if(typeof iteratee == 'function'){
      for(let item of collection){
        item = iteratee(item)
        result[item] = result[item] + 1 || 1 
      }
    } else {
      for(let item of collection){
        item = item[iteratee]
        result[item] = result[item] + 1 || 1 
      }
    }
    return result
  }
  
  
  function every(collection, predicate=_.identity){
    if(Object.prototype.toString.call(predicate) == "[object Function]"){
      for(var item of collection){
        if(!predicate(item)){
          return false
        }
      }
      return true
    }
    if(Object.prototype.toString.call(predicate) == "[object Object]"){
      for(var item of collection){
        for(var key in item){
          if(!(key in predicate) || !(item[key] == predicate[key])){
            return false
          }
        }
      }
      return true
    }
    if(Object.prototype.toString.call(predicate) == "[object Array]"){
      for(var item of collection){
        if(!(item[predicate[0]] == predicate[1])){
          return false
        }
      }
      return true
    }
    if(Object.prototype.toString.call(predicate) == "[object String]"){
      for(var item of collection){
        if(!item[predicate]){
          return false
        }
      }
      return true
    }
  }

  function filter(collection, predicate=_.identity){
    var result = []
    if(Object.prototype.toString.call(predicate) == "[object Function]"){
      for(var item of collection){
        if(predicate(item)){
          result.push(item)
        }
      }
      return result
    }
    if(Object.prototype.toString.call(predicate) == "[object Object]"){
      for(var item of collection){
        var flag = true
        for(var key in predicate){
          if(!(key in item) || !(predicate[key] == item[key])){
            flag = false
            break
          }
        }
        if(flag){
          result.push(item)
        }
      }
      return result
    }
    if(Object.prototype.toString.call(predicate) == "[object Array]"){
      for(var item of collection){
        if(item[predicate[0]] == predicate[1]){
          result.push(item)
        }
      }
      return result
    }
    if(Object.prototype.toString.call(predicate) == "[object String]"){
      for(var item of collection){
        if(item[predicate]){
          result.push(item)
        }
      }
      return result
    }
  }
  
  function find(collection, predicate=_.identity, fromIndex=0){
    return collection[findIndex(collection, predicate, fromIndex)]
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
    uniq,
    uniqBy,
    union,
    unionBy,
    nth,
    fill,
    differenceWith,
    isFunction,
    isMap,
    isNumber,
    isObject,
    isSet,
    isString,
    isWeakMap,
    isWeakSet,
    negate,
    ary,
    unary,
    findIndex,
    findLastIndex,
    unzip,
    without,
    zip,
    xor,
    countBy,
    every,
    filter,
    find,
  }
}()


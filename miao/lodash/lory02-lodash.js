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

  function flattenDeep(array){
    let result = []
    for (let i = 0; i < array.length; i++) {
        if (Array.isArray(array[i])) {
            let temp = this.flattenDeep(array[i])
            result.push(...temp)
        } else {
            result.push(array[i])
        }
    }
    return result
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

  function eq(value, other) {
    if(isNaN(value) && isNaN(other)){
      return true;
    }
    return value === other;
  }

  function gt(value, other) {
    return value > other
  }
  
  function gte(value, other) {
    return value >= other;
  }
  
  function isArguments(value) {
    return typeName(value) == "[object Arguments]"
  }
  function isArrayBuffer(val) {
    return typeName(val) == `[object ArrayBuffer]`
  }

  function isArrayLike(value) {
    return !isFunction(value) && isLength(value.length) 
  }

  function isArrayLikeObject(value) {
    return isArrayLike(value) && isObjectLike(value); 
  }

  function isBoolean(val) {
    return typeName(val) === '[object Boolean]';
  }

  function isBuffer(val) {
    return typeName(val) === '[object Buffer]';
  }

  function isDate(val) {
    return typeName(val) === '[object Date]';
  }

  function isElement(val) {
    return typeName(val).includes('Element');
  }

  function isEmpty(val) {
    var c = 0 ;
    for(var key in val) {  //遍历可枚举属性，length和size是不可枚举属性
      c++;
    }
    return c == 0
  }
  //深对比（不支持函数和DOM节点比较。）
  function isEqual(value, other) {
    if(value === other){  //判断原始类型的值
      return true;
    }
    if(isNaN(value) && isNaN(other)){ //判断NaN
      return true;
    }
    var len1 = 0; 
    var len2 = 0;
    for( var k in value) {
      len1++;
    } 
    for(var k in other) {
      len2++;
    }
    if(len1 != len2) { //对象长度相等
      return false;
    }
    for(var key in value){
      if(!isEqual(value[key], other[key])){  //递归比较值
        return false
      }
    }
    return true
  }

  function isError(val) {
    return typeName(val) === '[object Error]';
  }

  function isFinite(val) {
    return Number.isFinite(val);
  }

  function isFunction(value) {
    return typeName(value) === "[object Function]"
  }

  function isInteger(val) {
    return Number.isInteger(val)
  }

  function isLength(val) {
    return isNumber(val) && isInteger(val) && val >= 0 && val <=  Number.MAX_SAFE_INTEGER;
  } 

  function isMap(value) {
    return typeName(value) ==="[object Map]"
  }

  function isMatch(object, source) { //判断source是否为子集
    for(var key in source){
      if(!isEqual(object[key], source[key])){ //深对比
        return false
      }
    }
    return true
  }

  function isNaN(val) {
    return isNumber(val) &&  val !== +val; 
    //!== 自动类型转换，new Number(NaN) 转换为数字比较；或者 val+''
  }

  function isNil(val) {
    return val == null;  //null == undefined;
  }

  function isNumber(value) {
    return typeName(value) ==="[object Number]"
  }

  function isObject(val) { //typeof val
    return typeof val === 'object' && val !== null; //排除null
  }

  function isObjectLike(val) {
    return isObject(val) && !isFunction(val) ;  //非null和非函数
  }

  //对象由 Object 构造函数创建，或者 [[Prototype]] 为 null 。
  function isPlainObject(val) {
    var proto = Object.getPrototypeOf(val)
    return Object.getPrototypeOf(proto) === null || proto.constructor === Object;
    //原型的原型
  }
  function isRegExp(val) {
    return typeName(val) === '[object RexgExp]'
  }

  function isSafeInteger(val) {
    return Number.isSafeInteger(val);
  }

  function isSet(value) {
    return typeName(value) === "[object Set]"
  }

  function isString(value) { 
    return typeName(value) === "[object String]"
  }
  
  function isSymbol(val) { //独一无二的值
    return typeName(val) === "[object Symbol]"
  }

  function isWeakMap(value) {
    return typeName(value) ==="[object WeakMap]"
  }
  
  function isWeakSet(value) {
    return typeName(value) ==="[object WeakSet]"
  }
  
  function isUndefined(val) {  
    return val === undefined;
  }

  function lt(value, other) {
    return value < other;
  }

  function lte(value, other) {
    return value <= other;
  }

  function toArray(val) {
    var res = [];
    for(var k in val){
      res.push(val[k]);
    }
    return res;
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

  function differenceBy(array, ...values){
    var iteratee = last(values)
    values.pop()
    values = flatten(values)
    var result = []
    if(Object.prototype.toString.call(iteratee) == "[object Function]"){
      for(var item of array){
        var flag = true
        for(var val of values){
          if(iteratee(item) == iteratee(val)){
            flag = false
            break
          }
        }
        if(flag){
          result.push(item)
        }
      }
    }
    if(Object.prototype.toString.call(iteratee) == "[object String]"){
      for(var item of array){
        var flag = true
        for(var val of values){
          if(item[iteratee] == val[iteratee]){
            flag = false
            break
          }
        }
        if(flag){
          result.push(item)
        }
      }
    }
    return result
   }

   function dropWhile(array, predicate=_.identity){
    if(Object.prototype.toString.call(predicate) == "[object Function]"){
      for(var key in array){
        if(!predicate(array[key])){
          return array.slice(key)
        }
      }
    }
    if(Object.prototype.toString.call(predicate) == "[object Object]"){
      for(var item in array){
        for(var key in predicate){
          if(!(key in array[item]) || !(predicate[key] == array[item][key])){
            return array.slice(item)
          }
        }
      }
    }
    if(Object.prototype.toString.call(predicate) == "[object Array]"){
      for(var key in array){
        if(!(array[key][predicate[0]] == predicate[1])){
          return array.slice(key)
        }
      }
    }
    if(Object.prototype.toString.call(predicate) == "[object String]"){
      for(var key in array){
        if(!array[key][predicate]){
          return array.slice(key)
        }
      }
    }
  }

  function dropRightWhile(array, predicate=_.identity) {
    var arr = reverse(array)
    return reverse(dropWhile(arr, predicate))
  } 
  
  function flatMap(collection, iteratee=_.identity){
    var res = []
    var value
    for(var item of collection){
      value = flatten(iteratee(item))
      res.push(...value)
    }
    return res
  }
  
  function flatMapDepth(collection, iteratee=_.identity, depth=1){
    var res = []
    var value
    for(var item of collection){
      value = flattenDepth(iteratee(item),depth)
      res.push(...value)
    }
    return res
  }

  function groupBy(collection, iteratee=_.identity) {
    var map = {}
    if(Object.prototype.toString.call(iteratee) == "[object Function]"){
      for(var item of collection){
        var key = iteratee(item)
        if(key in map){
          map[key].push(item)
        } else {
          map[key] = [item]
        }
      }
    }
    if(Object.prototype.toString.call(iteratee) == "[object String]"){
      for(var item of collection){
        var key = item[iteratee]
        if(key in map){
          map[key].push(item)
        } else {
          map[key] = [item]
        }
      }
    } 
    return map
  }

  function keyBy(collection, iteratee=_.identity) {
    var map = {}
    if(Object.prototype.toString.call(iteratee) == "[object Function]"){
      for(var item of collection){
        var key = iteratee(item)
        map[key] = item
      }
    }
    if(Object.prototype.toString.call(iteratee) == "[object String]"){
      for(var item of collection){
        var key = item[iteratee]
        map[key] = item
      }
    } 
    return map
  }
  
  function map(collection, iteratee=_.identity) {
    var res = []
    if(Object.prototype.toString.call(iteratee) == "[object Function]"){
      for(var item in collection){
          res.push(iteratee(collection[item]))
      }
    }
  
    if(Object.prototype.toString.call(iteratee) == "[object String]"){
      for(var item in collection){
            res.push(item[iteratee])
      }
    }
    return res
  }
  
  function partition(collection, predicate=_.identity) {
    var res = []
    if(Object.prototype.toString.call(predicate) == "[object Function]"){
      for(var item of collection){
        if(predicate(item)){
          res[0] == undefined ? res[0] = [item] : res[0].push(item)
        } else {
          res[1] == undefined ? res[1] = [item] : res[1].push(item)
        }
      }
    }
    if(Object.prototype.toString.call(predicate) == "[object Object]"){
      for(var item in collection){
        var flag = true
        for(var key in predicate){
          if(!(key in collection[item]) || !(predicate[key] == collection[item][key])){  //判断是否包含属性
            res[1] == undefined ? res[1] = [collection[item]] : res[1].push(collection[item])
            flag = false
            break
          }
        }
        if(flag){  
          res[0] == undefined ? res[0] = [collection[item]] : res[0].push(collection[item])
        }
      }
    }
    if(Object.prototype.toString.call(predicate) == "[object Array]"){
      for(var item of collection){
        if(item[predicate[0]] == predicate[1]){
          res[0] == undefined ? res[0] = [item] : res[0].push(item)
        } else {
          res[1] == undefined ? res[1] = [item] : res[1].push(item)
        }
      }
    }
    if(Object.prototype.toString.call(predicate) == "[object String]"){
      for(var item of collection){
        if(item[predicate]){
          res[0] == undefined ? res[0] = [item] : res[0].push(item)
        } else {
          res[1] == undefined ? res[1] = [item] : res[1].push(item)
        }
      }
    }
    return res
  }

  function once(func) {
    var flag = true
    return function(arg){
      if(flag){
        var result = func(arg)
        flag = flase
      }
      return result
    }
  }

  function memoize(func, resolver) {
    var cache = {}
    return function(arg) {
      if(resolver != undefined){
        if(resolver(arg) in cache){
          return cache[resolver(arg)]
        } else {
          cache[resolver(arg)] = func(arg)
        }
      } else {
        if(arg in cache){
          return cache[arg]
        } else {
          cache[arg] = func(arg)
        }
      }
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

  function after(n, f) {
    return function(){
      if(n-- < 0) {
        return f.apply(this,arguments);
      }
    }
  }

  function before(n, func) {
    var result 
    return function() {
      if(n-- > 0) {
        result = func.apply(this,arguments);
      }
      return result
    }
  }

  function bind(func, thisArg, ...partials) {
    return function(...args) {
      for(var i = 0; i < partials.length; i++){
        if(partials[i] == _ ){
          partials[i] = args.shift(); //填充占位符
        }
      }
      partials.push(...args)
      return func.apply(thisArg,partials)
    }
  }

  function bindKey(obj, key, ...partials) {
    return bind(obj[key],this,...partials)
  }

  function curry(func, arity=func.length) {
    return function(...args) {
      var newArgs = []
      args.forEach(val => {  //去掉占位符
        if(val !== _){
          newArgs.push(val)
        }
      })
      if(newArgs.length >= arity) {
        return f(...newArgs);
      } else {
        return curry(f.bind(null,...newArgs),length - newArgs.length);//绑定已有参数，传入剩下参数
      }
    }
  }

  function partial(func, ...partials) {
    return function(...args) {
       var newArgs = deletePlaceholder(partials,args)
      return func(...newArgs);
    }
  }

  function partialRight(func, ...partials) {
    return function(...args) {
      var newArgs = deletePlaceholder(reverse(partials),reverse(args));
      newArgs = reverse(newArgs)
      return func(...newArgs);
    }
  }

  function deletePlaceholder(arr,args) {
    arr = arr.slice()
    args = args.slice()
    for(var i = 0; i < arr.length; i++) {
      if(arr[i] == _ ){
        arr[i] = args.shift();
      }
    }
    arr.push(...args);
    return arr
  }

  function typeName(value) {
    return Object.prototype.toString.call(value)
  }

  
  return {
    typeName,
    deletePlaceholder,
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
    differenceBy,
    dropWhile,
    dropRightWhile,
    flatMap,
    flatMapDepth,
    groupBy,
    keyBy,
    map,
    partition,
    once,
    memoize,
    eq,
    gt,
    gte,
    isArguments,
    isArrayBuffer,
    isLength,
    isInteger,
    isArrayLike,
    isObjectLike,
    isArrayLikeObject,
    isBoolean,
    isBuffer,
    isDate,
    isElement,
    isEmpty,
    isEqual,
    isError,
    isFinite,
    isMatch,
    isNaN,
    isNil,
    isPlainObject,
    isRegExp,
    isSafeInteger,
    isSymbol,
    isUndefined,
    lt,
    lte,
    toArray,
    after,
    before,
    bind,
    bindKey,
    curry,
    partial,
    partialRight,
  }
}()

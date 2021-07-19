function debounce(callFn, timeout){
  let t = null;
  return function execute(){
    let context = this;
    let args = arguments;
    if(t){
      clearTimeout(t);
    }else{
      
    }
    t = setTimeout(function(){
      callFn.apply(context, args)
    }, timeout)
  }
}

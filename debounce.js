function debounce(callFn, timeout) {
  var t = null;
  return function execute() {
    var context = this;
    var args = arguments;
    if (t) {
      clearTimeout(t);
    } else {
    }
    t = setTimeout(function () {
      callFn.apply(context, args);
    }, timeout);
  };
}

function do_something(l) {
  var x = [];
  for (var a of l) {
    if (!x.includes(a)) {
      x.push(a);
    }
  }

  return x;
}

console.log(do_something([1, 2, 3, 3, 3, 3, 4, 5]));
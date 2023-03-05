let num = 3;

const aa = (name, level) => {
  console.log(name, level);
  if (num > 0) {
    num--;
    aa(arguments.callee);
  }
};

aa('张三', 100);

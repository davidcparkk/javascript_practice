// my_apply

Function.prototype.myApply = function(ctx, ...args) {
  return this.bind(ctx, ...args)();
};

// my_bind

Function.prototype.myBind = function(ctx, ...bindArgs) {
  return (...callArgs) => {
    return this.apply(ctx, bindArgs.concat(allArgs));
  };
};

// my_call

Function.prorotype.myCall = function (ctx, ...args) {
  return this.bind(ctx, ...args)();
};

// my_curry

Function.prototype.myCurry = function(numArgs) {
  let argsBalls = [];
  let fcn = this;
  return function _myCurry (el) {
    argsBalls.push(el);
    if (argsBalls.length < numArgs) {
      return _myCurry;
    } else {
      return fcn(...argBalls);
    }
  };
};

// mySlice

String.prototype.mySlice = function(start, end) {
  let slice = "";

  if (typeof end === 'undefined') {
    end = this.length;
  }

  for (let i = start; i < end && i < this.length; i++) {
    slice += this[i];
  }

  return slice;
}
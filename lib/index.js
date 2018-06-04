let showOff = (() => {
  var _ref = _asyncToGenerator(function* (phone) {
    const message = `Hey buddy, I have a new ${phone.color} ${phone.brand}!!!`;

    return Promise.resolve(message);
  });

  return function showOff(_x) {
    return _ref.apply(this, arguments);
  };
})();

let askMom = (() => {
  var _ref2 = _asyncToGenerator(function* () {
    try {
      console.log('before asking Mom');

      let phone = yield willGetNewPhone;
      let message = yield showOff(phone);

      console.log(message);
      console.log('after asking Mom');
    } catch (err) {
      console.log(err.message);
    }
  });

  return function askMom() {
    return _ref2.apply(this, arguments);
  };
})();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

const isMomHappy = true;

const willGetNewPhone = new Promise((resolve, reject) => {
  if (isMomHappy) {
    const phone = {
      brand: 'iPhone',
      color: 'black'
    };
    resolve(phone);
  } else {
    const reason = new Error('mom is not happy');
    reject(reason);
  }
});

askMom();
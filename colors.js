var Links = {
  SetColor: function (color) {
    var alist = document.querySelectorAll('a');
    var i = 0;
    while (i < alist.length) {
      console.log(alist[i]);
      alist[i].style.color = color;
      i = i + 1;
    }
  }
}

var Body = {
  SetColor: function (color) {
    document.querySelector('body').style.color = color;
  },
  SetBackgroundColor: function (color) {
    document.querySelector('body').style.backgroundColor = color;
  }
}

function NightDayHandler(self) {
  var target = document.querySelector('body');
  if (self.value === 'night') {
    Body.SetBackgroundColor('black');
    Body.SetColor('white');
    self.value = 'day';

    Links.SetColor('yellow');

  } else {
    Body.SetBackgroundColor('white');
    Body.SetColor('black');
    self.value = 'night';

    Links.SetColor('blue');
  }
}
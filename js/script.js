window.onload = function() {
  currentYear();
};

function currentYear(){
  const date = new Date();
  const autoDate = document.querySelector('#autoDate');
  autoDate.textContent = date.getFullYear();
};

var feed = new Instafeed({
  get: 'user',
  userId: '2297561537',
  accessToken: '2297561537.1677ed0.84731cdddd524f1987d5ef449ca437f6',
  filter: function(image) {
  var MAX_LENGTH = 40;

  // here we create a property called "short_caption"
  // on the image object, using the original caption
  if (image.caption && image.caption.text) {
    image.short_caption = image.caption.text.slice(0, MAX_LENGTH);
  } else {
    image.short_caption = "";
  }

  // ensure the filter doesn't reject any images
  return true;
},
  template: '<div class="col-2"><img class="w-100" src={{image}}><hr><p class="likes"><i class="fas fa-heart"></i>{{likes}}<p>{{model.short_caption}}...<a href="{{link}}" target="_blank">Read More</a></p></div>'
});

feed.run();

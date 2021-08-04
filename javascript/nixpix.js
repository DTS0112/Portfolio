// const canvas = document.getElementById('canvas');
// const ctx = canvas.getContext('2d');
// const image = document.getElementById('source');

// image.addEventListener('load', e => {
//   ctx.drawImage(image, 33, 71, 104, 124, 21, 20, 87, 104);
// });


var dx = 10;
    var dy = 20;
    var dWidth = 50;
    var dHeight = 60;
     
   const canvas = document.querySelector('nixcanvas');
   const ctx = canvas.getContext('2d');
 
  var img = new Image();
  img.addEventListener('load', function(){
    ctx.drawImage(img, 0, 0);
  });
  img.src = '../assets/images/NixPic.jpg';
 
      
 

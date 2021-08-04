// const canvas = document.getElementById('canvas');
// const ctx = canvas.getContext('2d');
// const image = document.getElementById('source');

// image.addEventListener('load', e => {
//   ctx.drawImage(image, 33, 71, 104, 124, 21, 20, 87, 104);
// });


var nixdx = 10;
    var nixdy = 20;
    var nixdWidth = 50;
    var nixdHeight = 60;
     
   const nixcanvas = document.querySelector('nixcanvas');
   const nixctx = nixcanvas.getContext('2d');
 
  var img = new Image();
  img.addEventListener('load', function(){
    nixctx.drawImage(img, 0, 0);
  });
  img.src = '../assets/images/NixPic.jpg';
 
      
 

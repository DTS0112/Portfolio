// const canvas = document.getElementById('canvas');
// const ctx = canvas.getContext('2d');
// const image = document.getElementById('source');

// image.addEventListener('load', e => {
//   ctx.drawImage(image, 33, 71, 104, 124, 21, 20, 87, 104);
// });

// https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/drawImage
   
    var nixsx = 80;
    var nixsy = 70;
    var nixsWidth = 25;
    var nixsHeight = 20;
    var nixdx = 0;
    var nixdy = 0;
    var nixdWidth = 249;
    var nixdHeight = 202;
     
   const nixoncanvas = document.getElementById('nixcanvas');
   const nixonctx = nixoncanvas.getContext('2d');
   var img = new Image();
   
    img.src="../assets/images/NixPic.jpg";
   

 img.addEventListener('load', function(){
   nixonctx.drawImage(img, nixsx, nixsy, nixsWidth, nixsHeight, nixdx, nixdy,nixdWidth,nixdHeight);
  });
  
  
 

 
 
      
 

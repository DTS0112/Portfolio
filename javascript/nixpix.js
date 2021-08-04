// const canvas = document.getElementById('canvas');
// const ctx = canvas.getContext('2d');
// const image = document.getElementById('source');

// image.addEventListener('load', e => {
//   ctx.drawImage(image, 33, 71, 104, 124, 21, 20, 87, 104);
// });

// https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/drawImage
   
    var nixsx = 76;
    var nixsy = 76;
    var nixsWidth = 25;
    var nixsHeight = 20;
    var nixdx = 0;
    var nixdy = 0;
    var nixdWidth = 25;
    var nixdHeight = 20;
     
   const nixoncanvas = document.getElementById('nixcanvas');
   const nixonctx = nixoncanvas.getContext('2d');
   var img = new Image();
   
    img.src="../assets/images/NixPic.jpg";
   

 img.addEventListener('load', function(){
   nixonctx.drawImage(img, nixsx, nixsy, nixsWidth, nixsHeight, nixdx, nixdy,nixdWidth,nixdHeight);
  });
  
  
 

 
 
      
 

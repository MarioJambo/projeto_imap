var i = 0; // Start point
var j = 0;
var k=0;
  var images = [];
  var images1 = [];
  var images2 = [];
  var time = 3000;

  // Image List
  images[0] = 'img/prada/prada3.jpg';
  images[1] = 'img/prada/prada2.jpg';
  images[2] = 'img/prada/prada1.jpg';

  images1[0] = 'img/lacoste/lacoste1.jpg';
  images1[1] = 'img/lacoste/lacoste2.jpeg';
  images1[2] = 'img/lacoste/lacoste3.png';

  images2[0] = 'img/nike/nike1.jpg';
  images2[1] = 'img/nike/nike2.jpg';
  images2[2] = 'img/nike/nike3.jpg';

  // Change Image
  function changeImg(){
    document.slide1.src = images[i];
    document.slide2.src = images1[j];
    document.slide3.src = images2[k];
    if(i < images.length - 1){
      i++;
      j++;
      k++;
    } else {
      i = 0;
      j=0;
      k=0;
    }

    setTimeout("changeImg()", time);
  }

  window.onload = changeImg;
var myImages =[
  "http://www.selectautocalgary.com/wp-content/uploads/2015/05/002.jpg", 
  "https://d2v9y0dukr6mq2.cloudfront.net/video/thumbnail/nX1tYZQ/timelapse-of-a-cloudy-sky-just-before-a-storm-video-about-nature-cloud-storm-water-weather-rain-climate-change-paradise-heaven_reupeghzg_thumbnail-full01.png",
  "https://img.elo7.com.br/product/original/19D34B3/adesivo-de-parede-predios-preto-e-branco-adesivo-para-cozinha.jpg",
  "https://cloudfront.dappered.com/wp-content/uploads/2012/07/Grey-Crayons.jpg",
  "https://pbs.twimg.com/media/CtrCN5qXgAAdPTP.jpg"];


var captionImages =["My Car","Storm","City Landscape","Crayon","Dessert"];

 var index=0; 

 function updateImage(){
 document.getElementById("slideshow").src = myImages[index];
 document.getElementById("slideshow").alt= captionImages[index];
 document.getElementById("caption").textContent = captionImages[index]; 
} 

function next(){
 if (myImages.length == index+1)
 index=0;
 else
 index++;
 updateImage();
} 
 

function back(){
 if (index===0)
 index=myImages.length-1;
 else
 index--;
 
 updateImage();
} 

var nextButton = document.getElementById("next"); 
var previousButton = document.getElementById("previous"); 

previousButton.addEventListener("click",back,false);
nextButton.addEventListener("click",next,false); 

function autoSlide(){
if (document.getElementById("auto").checked)
 next(); 
}


setInterval(autoSlide,1000); // Next

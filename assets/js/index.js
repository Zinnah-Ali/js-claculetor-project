var slider = document.getElementById("myRange");
var outputWords = document.getElementById("words");
var outputPrice = document.getElementById("price");
var outputBlog = document.getElementById("blog");

outputWord = slider.value/2*2;
outputWords.innerHTML = outputWord.toLocaleString('en-US'); 
outputPrice.innerHTML = slider.value/12.5;
outputBlog.innerHTML = "5-10";

document.getElementById("myRange").step = "10000";

slider.oninput = function() {
    var price = this.value/12.5;
    var words = this.value/2*2;
 
        if(parseInt(words) > 9999) {
  		 outputBlog.innerHTML = "5-10";
		}
         if(parseInt(words) > 10000) {
  		 outputBlog.innerHTML = "10-20";
		}
         if(parseInt(words) > 20000) {
  		 outputBlog.innerHTML = "20-30";
		}
        if(parseInt(words) > 30000) {
  		 outputBlog.innerHTML = "30-40";
		}
        if(parseInt(words) > 40000) {
  		 outputBlog.innerHTML = "40-50";
		}
        if(parseInt(words) > 50000) {
  		 outputBlog.innerHTML = "50-60";
		}
        if(parseInt(words) > 60000) {
  		 outputBlog.innerHTML = "60-70";
		}
        if(parseInt(words) > 70000) {
  		 outputBlog.innerHTML = "70-80";
		}
        if(parseInt(words) > 80000) {
  		 outputBlog.innerHTML = "80-90";
		}
        if(parseInt(words) > 90000) {
  		 outputBlog.innerHTML = "90-100";
		}
        if(parseInt(words) > 100000) {
  		 outputBlog.innerHTML = "100-110";
		}
        if(parseInt(words) > 110000) {
  		 outputBlog.innerHTML = "110-120";
		}
        if(parseInt(words) > 120000) {
  		 outputBlog.innerHTML = "120-130";
		}
        if(parseInt(words) > 130000) {
  		 outputBlog.innerHTML = "130-140";
		}
        if(parseInt(words) > 140000) {
  		 outputBlog.innerHTML = "140-150";
		}
        if(parseInt(words) > 150000) {
  		 outputBlog.innerHTML = "150-160";
		}
        if(parseInt(words) > 160000) {
  		 outputBlog.innerHTML = "160-170";
		}
        if(parseInt(words) > 170000) {
  		 outputBlog.innerHTML = "170-180";
		}
          if(parseInt(words) > 180000) {
  		 outputBlog.innerHTML = "180-190";
		}
          if(parseInt(words) > 190000) {
  		 outputBlog.innerHTML = "190-200";
		}
        
 

   outputPrice.innerHTML = price.toLocaleString("en-US");
   outputWords.innerHTML = words.toLocaleString("en-US");

}



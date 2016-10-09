imgtab = {
  "gal_white":["images/galerie/perso/white1.jpg","images/galerie/perso/white2.jpg","images/galerie/perso/white3.jpg","images/galerie/perso/bento4.jpg"],
  "gal_bento":["../images/galerie/perso/bento1.jpg","../images/galerie/perso/bento2.jpg","../images/galerie/perso/bento3.jpg"],
  "gal_mine":["images/galerie/perso/mine1.jpg","images/galerie/perso/mine2.jpg"],
  "gal_child":["images/galerie/perso/child1.jpg","images/galerie/perso/child2.jpg"],
  "gal_truc":["images/galerie/perso/truc1.jpg","images/galerie/perso/truc2.jpg","images/galerie/perso/truc3.jpg","images/galerie/perso/truc4.jpg"],

	"gal_nantes":["images/galerie/pro/nfy1.jpg","images/galerie/pro/nfy2.jpg","images/galerie/pro/nfy3.jpg","images/galerie/pro/nfy4.jpg","images/galerie/pro/nfy5.jpg","images/galerie/pro/nfy6.jpg","images/galerie/pro/nfy7.jpg","images/galerie/pro/nfy8.jpg","images/galerie/pro/nfy9.jpg","images/galerie/pro/nfy10.jpg","images/galerie/pro/nfy11.jpg"],
	"gal_daucy":["images/galerie/pro/legume1.jpg","images/galerie/pro/legume2.jpg"],
	"gal_vortex":["images/galerie/pro/vortex1.jpg","images/galerie/pro/vortex2.jpg","images/galerie/pro/vortex3.jpg","images/galerie/pro/vortex4.jpg","images/galerie/pro/vortex5.jpg","images/galerie/pro/vortexl1.jpg","images/galerie/pro/vortexl2.jpg"],
	"gal_the":["images/galerie/pro/the1.jpg","images/galerie/pro/the2.jpg","images/galerie/pro/the3.jpg"],
	"gal_manga":["images/galerie/pro/manga1.jpg","images/galerie/pro/manga2.jpg","images/galerie/pro/manga3.jpg","images/galerie/pro/manga4.png"],
	"gal_shuga":["images/galerie/pro/Shuga01.jpg","images/galerie/pro/Shuga02.jpg"],
  "gal_odin":["images/galerie/pro/odinphoto.jpg","images/galerie/pro/odin1.jpg","images/galerie/pro/odin2.jpg"],
  "gal_natural":["images/galerie/pro/natural1.png","images/galerie/pro/natural2.png","images/galerie/pro/natural3.png","images/galerie/pro/natural4.png","images/galerie/pro/natural5.png"],
};



function displayPics() 

{ 
  var photos = document.getElementById('galerie_mini') ; 

  var liens = photos.getElementsByTagName('a') ; 

  var big_photo = document.getElementById('big_pict') ; 

 
  var titre_photo = document.getElementById('photo').getElementsByTagName('dt')[0] ; 
	
	var btn_next = document.getElementById("btn_next");
 	
 	btn_next.style.display="none";
 
    for (var i = 0 ; i < liens.length ; ++i) { 
		liens[i].onclick = function() { 
        		if (this.className == "gal") {
					var cur_id = imgtab[this.id];
					btn_next.style.display="inline";
					big_photo.src = this.href;  
	        	    big_photo.alt = this.title; 
        	    	titre_photo.firstChild.nodeValue = this.title;
        	    	btn_next.cur_index = 0;
					btn_next.onclick = function() {
						this.cur_index++;
						this.cur_index = this.cur_index % cur_id.length;
						big_photo.src = cur_id[this.cur_index];
						return false;
					}
					
				} else {
        	    	big_photo.src = this.href;  
	        	    big_photo.alt = this.title; 
        	    	titre_photo.firstChild.nodeValue = this.title;  
	        	    btn_next.style.display="none";
	        	}
	        	return false; 
        };
		 
    } 
} 
window.onload = displayPics; 
/*document.addEventListener('DOMContentLoaded', function () {
    
  document.querySelector('id1').addEventListener('click', disp("id1"))
});

function disp(s){
  
}
*/
var c1=0;
var c2=0;
var c3=0;
var c4=0;
var c5=0;
var c6=0;

function disp(s,b){
  console.log("function called");
  var x=document.getElementById(s);
  var y=document.getElementById(b);
  if ((c1==0 && s[3]=='1') || (c2==0 && s[3]=='2') || (c3==0 && s[3]=='3') || (c4==0 && s[3]=='4') || (c5==0 && s[3]=='5') || (c6==0 && s[3]=='6')){
    x.style.display="block";
    if(s[3]=='1')c1++;
    if(s[3]=='2')c2++;
    if(s[3]=='3')c3++;
    if(s[3]=='4')c4++;
    if(s[3]=='5')c5++;
    if(s[3]=='6')c6++;
    y.innerHTML='<i class="fa fa-close" style="font-size:28px"></i>';
  }
 
  else if (x.style.display != "none") {
    x.style.display = "none";
    y.innerHTML='<i style="font-size:24px" class="fa-solid fa-plus" ></i>';
  } else {
    x.style.display = "block";
    y.innerHTML='<i class="fa fa-close" style="font-size:28px"></i>';
  }
}

function displ(s){
  console.log("function called");
  var x=document.getElementById(s);
  if ((c1==0 && s[3]=='1') || (c2==0 && s[3]=='2') || (c3==0 && s[3]=='3') || (c4==0 && s[3]=='4') || (c5==0 && s[3]=='5') || (c6==0 && s[3]=='6')){
    x.style.display="block";
    if(s[3]=='1')c1++;
    if(s[3]=='2')c2++;
    if(s[3]=='3')c3++;
    if(s[3]=='4')c4++;
    if(s[3]=='5')c5++;
    if(s[3]=='6')c6++;
    
  }
 
  else if (x.style.display == "none") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}




/*
console.log("main");
document.getElementById('id1').click(function() {
  alert("btn");
    console.log("Click");
    document.getElementById('faq1').toggle('slow', function() {
      // Animation complete.
      console.log("Clicked");
    });
  });

  document.getElementById('id2').click(function() {
    document.getElementById('faq2').toggle('slow', function() {
      // Animation complete.
    });
  });

  document.getElementById('id3').click(function() {
    document.getElementById('faq3').toggle('slow', function() {
      // Animation complete.
    });
  });

  document.getElementById('id4').click(function() {
    document.getElementById('faq4').toggle('slow', function() {
      // Animation complete.
    });
  });

  document.getElementById('id5').click(function() {
    document.getElementById('faq5').toggle('slow', function() {
      // Animation complete.
    });
  });

  document.getElementById('id6').click(function() {
    document.getElementById('faq6').toggle('slow', function() {
      // Animation complete.
    });
  });*/
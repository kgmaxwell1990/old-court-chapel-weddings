 $(document).ready(function () {


  $(".box").hide(0).fadeIn(3000);
  $(".card").hide(0).fadeIn(3000);



  var acc = document.getElementsByClassName("accordion");
  var i;

  for (i = 0; i < acc.length; i++) {
      acc[i].onclick = function(){

          this.classList.toggle("active");

          var panel = this.nextElementSibling;
          if (panel.style.display === "block") {
              panel.style.display = "none";
          } else {
              panel.style.display = "block";
          }
      }
  }


});







<!-- JS -->
<script>
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "top-nav") {
    x.className += " responsive";
  } else {
    x.className = "top-nav";
  }
}
</script>


<script>
function openPage(evt, pageName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(pageName).style.display = "block";
  evt.currentTarget.className += " active";

  // Get the element with id="defaultOpen" and click on it
}
document.getElementById("defaultOpen").click();

  // Removed Arrival when Clicked on One-way
</script>

<script>
$(document).ready(function() {
  $(".return").attr('disabled', false);
  $("form input:radio").change(function() {
    if ($(this).val() == "Disable") {
      $(".return").attr('checked', false);
      $(".return").attr('disabled', true);
      $(".return").css('opacity', '.10');
    }
    else {
      $(".return").attr('disabled', false);
      $(".return").css('opacity', '1');
    }
  });
});
</script>

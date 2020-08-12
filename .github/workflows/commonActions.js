$(document).ready(function () {

    $(".navShowHide").on("click", function() {
        // grab the main section

        var main = $("#mainSectionContainer");

        // grab the sidenav section

        var nav = $("#sideNavContainer");

        if(main.hasClass("leftPadding")){
            nav.hide();
        }
        else {
            nav.show();
        }

        // toggle the class for the main section

        main.toggleClass("leftPadding");
    })

});

function notSignedIn() {
    alert("Bu işlemi gerçekleştirmek için oturum açmış olmanız gerekiyor.");
    window.location.href = "signin.php";
}

$(document).ready(function(){
  $('[data-toggle="tooltip"]').tooltip();
});
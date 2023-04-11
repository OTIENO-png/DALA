//   $('kenyaone')
//                 .on('mouseenter', function () {
//                     $('#title1').show('fast');
//                 })
//                 .on('mouseleave', function () {
//                     $('#title1').hide('fast');
//                 });
        function myFunction() {
            let text;
            let name = prompt("Please enter your name:", "*****");
            if (name == null || name == "") {
                text = "User cancelled the prompt.";
            } else {
                text = "Hello " + name +  " we have received your essage thank you for contacting us?";
            }
            document.getElementById("ouput").innerHTML = text;
        }
// design button to display text and hide button for design.
        $(document).ready(function () {
            $("#design").click(function () {
                $("#designtext").show();
                $("#design").hide();
            });

        });
        // used to hide text and  display button for design.
        $(document).ready(function () {
                $("#designtext").click(function () {
                    $("#design").show();
                    $("#designtext").hide();
                });

            });
        // development button to display text and hide button for development.
        $(document).ready(function () {
                $("#development").click(function () {
                    $("#developmenttext").show();
                    $("#development").hide();
                });

            });
        // used to hide text and  display button for development.
            $(document).ready(function () {
                $("#developmenttext").click(function () {
                    $("#development").show();
                    $("#developmenttext").hide();
                               
                });

            });
        // development button to display text and hide button for development.
            $(document).ready(function () {
                $("#product").click(function () {
                    $("#producttext").show();
                    $("#product").hide();
                });

            });
        // used to hide text and  display button for development.
            $(document).ready(function () {
                $("#producttext").click(function () {
                    $("#product").show();
                    $("#producttext").hide();
                });

            });
            //background color change
            $(document).ready(function(){
  $('#dark-icon').click(function(){
    $('body').removeClass('bright-mode').addClass('dark-mode');
  });
  
  $('#bright-icon').click(function(){
    $('body').removeClass('dark-mode').addClass('bright-mode');
  });
});
 // development button to display text and hide button for development.
        $(document).ready(function () {
                $("#bright-icon").click(function () {
                    $("#dark-icon").show();
                    $("#bright-icon").hide();
                });

            });
        // used to hide text and  display button for development.
            $(document).ready(function () {
                $("#dark-icon").click(function () {
                    $("#bright-icon").show();
                    $("#dark-icon").hide();
                               
                });

            });
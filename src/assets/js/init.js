$(document).ready(function(){



  // back to top
  $("#back-to-top").click(function() {
    $("html, body").animate({ scrollTop: 0 }, "slow");
    return false;
  });

  // minimize Btn
  MinimizeBtn();
  $('#min-menu').click(function(event) {
    MinimizeBtn();
    if ($('body').hasClass('collapse-leftbar')) {
      $(this).removeClass('opened');
      $('#min-menu span').css('display','none');
    }
  });

  $("#min-menu").hover(
    function () {
      $(this).addClass('opened');
      $('#min-menu span').css('display','inline-block');
    },
    function () {
      $(this).removeClass('opened');
      $('#min-menu span').css('display','inline-block');
    }
  );

  datepicker();

  // img checkbox check all.

  // click to check all
  $('#chkAll').click(function(){
    $('.chkaction').prop('checked', true);
    $('.chkaction').attr('checked', 'checked');
  });
  // click to uncheck all
  $('#unchkAll').click(function(){
    $('.chkaction').prop('checked', false);
    $('.chkaction').removeAttr('checked');
  });
  // if all check, checked the fisrt checkbox
  $( ".datatables" ).on( "click", 'tbody tr td .chkaction', function() {
    if ( $('.chkaction:checked').length == $('.chkaction').length ) {
      $('.chkAll').prop('checked', true);
      $('.chkAll').attr('checked', 'checked');
    } else {
      $('.chkAll').prop('checked', false);
      $('.chkAll').removeAttr('checked');
    }
  });

  // when check box click, add check attr
  $('.chkaction').click(function() {
    if ( $(this).is(':checked') ) {
      $(this).attr('checked', 'checked');
    } else {
      $(this).removeAttr('checked');
    };
  });

  $('#onLeave').modal({
    backdrop:'static'
  })

  // select option
  /*var x, i, j, selElmnt, a, b, c;

  //look for any elements with the class "dropdown-redarrow":
  x = document.getElementsByClassName("dropdown-redarrow");
  for (i = 0; i < x.length; i++) {
    selElmnt = $("[name=assignmentOptionField]")[0];
    //for each element, create a new DIV that will act as the selected item:
    a = document.createElement("DIV");
    a.setAttribute("class", "select-selected");

    a.innerHTML = selElmnt.options[0].innerHTML;
    x[i].appendChild(a);
    //for each element, create a new DIV that will contain the option list:
    b = document.createElement("DIV");
    b.setAttribute("class", "select-items select-hide");
    for (j = 0; j < selElmnt.length; j++) {
      //for each option in the original select element,
      //create a new DIV that will act as an option item:
      c = document.createElement("DIV");
      if(j == 0){c.setAttribute("class", "same-as-selected");}
      c.innerHTML = selElmnt.options[j].innerHTML;
      c.addEventListener("click", function(e) {
        //when an item is clicked, update the original select box,
        //and the selected item:
        var y, i, k, s, h;
        s = this.parentNode.parentNode.getElementsByTagName("select")[0];
        h = this.parentNode.previousSibling;

        for (i = 0; i < s.length; i++) {
          if (s.options[i].innerHTML == this.innerHTML) {
            for (i2 = 0; i2 < s.length; i2++) {
              s.options[i2].removeAttribute("selected");
            }
            s.options[i].setAttribute("selected","selected");
            s.selectedIndex = i;
            h.innerHTML = this.innerHTML;

            y = this.parentNode.getElementsByClassName("same-as-selected");
            for (k = 0; k < y.length; k++) {
              y[k].removeAttribute("class");
            }
            this.setAttribute("class", "same-as-selected");
            break;
          }
        }
        h.click();
      });
      b.appendChild(c);
    }
    x[i].appendChild(b);
    a.addEventListener("click", function(e) {
      //when the select box is clicked, close any other select boxes,
      //and open/close the current select box:
      e.stopPropagation();
      closeAllSelect(this);
      this.nextSibling.classList.toggle("select-hide");
      this.classList.toggle("select-arrow-active");
    });
  }
*/
});

$(window).scroll(function() {

  // back to top when scroll
  if ($(this).scrollTop()) {
    $('#back-to-top:hidden').stop(true, true).fadeIn();
  } else {
    $('#back-to-top').stop(true, true).fadeOut();
  }

});

$(document).resize(function(event) {
  MinimizeBtn();
});


function closeAllSelect(elmnt) {
  /*a function that will close all select boxes in the document,
  except the current select box:*/
  var x, y, i, arrNo = [];
  x = document.getElementsByClassName("select-items");
  y = document.getElementsByClassName("select-selected");
  for (i = 0; i < y.length; i++) {
    if (elmnt == y[i]) {
      arrNo.push(i)
    } else {
      y[i].classList.remove("select-arrow-active");
    }
  }
  for (i = 0; i < x.length; i++) {
    if (arrNo.indexOf(i)) {
      x[i].classList.add("select-hide");
    }
  }
}

/*if the user clicks anywhere outside the select box,
then close all select boxes:*/
//document.addEventListener("click", closeAllSelect);

// $(function () {
//         var d1 = [];
//         for (var i = 0; i <= 10; i += 1) {
//             d1.push([i, parseInt(Math.random() * 30)]);
//         }
//         var d2 = [];
//         for (var i = 0; i <= 10; i += 1) {
//             d2.push([i, parseInt(Math.random() * 30)]);
//         }
//         var d3 = [];
//         for (var i = 0; i <= 10; i += 1) {
//             d3.push([i, parseInt(Math.random() * 30)]);
//         }
//         var stack = 0,
//             bars = true,
//             lines = false,
//             steps = false;
//         function plotWithOptions() {
//             $.plot("#stacking", [ d1, d2, d3 ], {
//                 series: {
//                     stack: stack,
//                     lines: {
//                         show: lines,
//                         fill: true,
//                         steps: steps
//                     },
//                     bars: {
//                         show: bars,
//                         barWidth: 0.6
//                     }
//                 }
//             });
//         }
//         plotWithOptions();
// });


function datepicker() {
  $( ".datepicker" ).datepicker({
    format: "dd/mm/yyyy",
    autoclose: true
  });
}

function MinimizeBtn() {
  if ( $('body').hasClass('collapse-leftbar') ) {
    $('#min-menu').html('<i class="icon-max-menu"></i> <span>Maximize Menu</span>');
  } else {
    $('#min-menu').html('<i class="icon-mini-menu"></i> <span>Minimize Menu</span>');
  }
}

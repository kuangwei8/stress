$(document).ready(function(){
  $("#stress-survey").submit(function(event){
    event.preventDefault(event);
    var stressAnswers = $("input:checkbox[name=signs-stress]:checked").each(function(){
    var answers = $(this).val();
    console.log(answers);
    });


      var length = stressAnswers.length;
      if (length >2){
        $("#level2").show();
      } else {
        $("#level1").show();
      }


  });
});

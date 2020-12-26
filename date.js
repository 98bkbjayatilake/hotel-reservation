
   JotForm.setCalculations([{"decimalPlaces":"2","equation":"[{7}-{6}]","insertAsText":"","newCalculationType":"1","operands":"7,6","readOnly":"1","resultField":"8","showBeforeInput":"","showEmptyDecimals":""}]);
  JotForm.init(function(){

 JotForm.calendarMonths = ["January","February","March","April","May","June","July","August","September","October","November","December"];
 JotForm.calendarDays = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
 JotForm.calendarOther = {"today":"Today"};
 var languageOptions = document.querySelectorAll('#langList li'); 
 for(var langIndex = 0; langIndex < languageOptions.length; langIndex++) { 
   languageOptions[langIndex].on('click', function(e) { setTimeout(function(){ JotForm.setCalendar("6", false, {"days":{"monday":true,"tuesday":true,"wednesday":true,"thursday":true,"friday":true,"saturday":true,"sunday":true},"future":true,"past":true,"custom":false,"ranges":false,"start":"","end":""}); }, 0); });
 } 
 JotForm.setCalendar("6", false, {"days":{"monday":true,"tuesday":true,"wednesday":true,"thursday":true,"friday":true,"saturday":true,"sunday":true},"future":true,"past":true,"custom":false,"ranges":false,"start":"","end":""});
 JotForm.formatDate({date:(new Date()), dateField:$("id_"+6)});
 JotForm.displayLocalTime("hour_6", "min_6", "ampm_6");

 JotForm.calendarMonths = ["January","February","March","April","May","June","July","August","September","October","November","December"];
 JotForm.calendarDays = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
 JotForm.calendarOther = {"today":"Today"};
 var languageOptions = document.querySelectorAll('#langList li'); 
 for(var langIndex = 0; langIndex < languageOptions.length; langIndex++) { 
   languageOptions[langIndex].on('click', function(e) { setTimeout(function(){ JotForm.setCalendar("7", false, {"days":{"monday":true,"tuesday":true,"wednesday":true,"thursday":true,"friday":true,"saturday":true,"sunday":true},"future":true,"past":true,"custom":false,"ranges":false,"start":"","end":""}); }, 0); });
 } 
 JotForm.setCalendar("7", false, {"days":{"monday":true,"tuesday":true,"wednesday":true,"thursday":true,"friday":true,"saturday":true,"sunday":true},"future":true,"past":true,"custom":false,"ranges":false,"start":"","end":""});
 JotForm.formatDate({date:(new Date()), dateField:$("id_"+7)});
 JotForm.displayLocalTime("hour_7", "min_7", "ampm_7");
  JotForm.newDefaultTheme = false;
  JotForm.extendsNewTheme = false;
  JotForm.newPaymentUIForNewCreatedForms = false;
      JotForm.highlightInputs = false;
    /*INIT-END*/
  });

   JotForm.prepareCalculationsOnTheFly([null,null,{"name":"submit","qid":"2","text":"SUBMIT","type":"control_button"},null,null,{"name":"clickTo","qid":"5","text":"CALCULATE NUMBER OF DAYS","type":"control_head"},{"name":"checkIn6","qid":"6","text":"Check In","type":"control_datetime"},{"name":"checkOut","qid":"7","text":"Check Out","type":"control_datetime"},{"name":"numberOf","qid":"8","text":"Number of days","type":"control_calculation"}]);
   setTimeout(function() {
JotForm.paymentExtrasOnTheFly([null,null,{"name":"submit","qid":"2","text":"SUBMIT","type":"control_button"},null,null,{"name":"clickTo","qid":"5","text":"CALCULATE NUMBER OF DAYS","type":"control_head"},{"name":"checkIn6","qid":"6","text":"Check In","type":"control_datetime"},{"name":"checkOut","qid":"7","text":"Check Out","type":"control_datetime"},{"name":"numberOf","qid":"8","text":"Number of days","type":"control_calculation"}]);}, 20); 

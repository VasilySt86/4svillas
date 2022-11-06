jQuery(function($) {

	$('#echeckin').datepicker({
        inline: true,  
        showOtherMonths: true,
        minDate: new Date(),
        dateFormat: "d M yy",
        altFormat: "dd-mm-yy",
        altField: "#eZ_chkin",
        prevText: '',
        nextText: '',
        firstDay: 1,
        dayNamesMin: [ 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
        monthNames: [ 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December' ],
        monthNamesShort: [ 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December' ],
        onSelect: function( selectedDate ) {
            var selectedDate = $(this).datepicker('getDate');
            if (selectedDate) {
              selectedDate.setDate(selectedDate.getDate() + 2);
            }
            $( "#echeckout" ).datepicker("option", "minDate", selectedDate);
            setTimeout(function(){
                $( "#echeckout" ).datepicker('show');
            }, 100);
        },
        beforeShow: function(input, inst) {
            var cal = inst.dpDiv;
            var top  = $(this).offset().top + $(this).outerHeight();
            var left = $(this).offset().left;
            setTimeout(function() {
                cal.css({
                    'top' : top,
                    'left': left
                });
            }, 10);
        },
    });
    $("#check-in-arrow").click(function() { $('#echeckin').datepicker('show');});
    $('#echeckout').datepicker({
        inline: true,  
        showOtherMonths: true,
        minDate: new Date(),
        dateFormat: "d M yy",
        altFormat: "dd-mm-yy",
        altField: "#eZ_chkout",
        prevText: '',
        nextText: '',
        firstDay: 1,
        dayNamesMin: [ 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
        monthNames: [ 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December' ],
        monthNamesShort: [ 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December' ],
        beforeShow: function(input, inst) {
            var cal = inst.dpDiv;
            var top  = $(this).offset().top + $(this).outerHeight();
            var left = $(this).offset().left;
            setTimeout(function() {
                cal.css({
                    'top' : top,
                    'left': left
                });
            }, 10);
        },
    });
    $("#check-out-arrow").click(function() { $('#echeckout').datepicker('show');});
    $(function() {
        $('#echeckin').datepicker();
        myDate=new Date(); 
        myDate.setDate(myDate.getDate() );
        $('#echeckin').datepicker('setDate', myDate);
    });
    $(function() {
        $('#echeckout').datepicker();
        myAnotherDate=new Date(); 
        myAnotherDate.setDate(myAnotherDate.getDate() + 2);
        $('#echeckout').datepicker('setDate', myAnotherDate);
    });
    $("#bb_resBookingBox").bb_resBookingBox({  
        btnContainer: "bb_resBookingBox",
        showborder: false,
        ShowHeader: "0",
        boxwidth: "800",
        boxwidthtype: "TYPE_PX",
        ShowInlineCSS: "0",
        type: "vtype",
        ShowChild:true,
        rooms:false,
        promotion:true,
        defaultadult:10,
        defaultchild:6,
        defaultroom:16,
        ShowNights:false,
        Nonights:30,
        HTextCaption: "Reservation",
        BtnTextCaption: "Book Now",
        LblPromoCaption: "",
        LblChkOutCaption: "Check-Out",
        Calinit: false,
        LblArrivalCaption: "Check-In",
        LblNightsCaption: "Nights",
        LblAdultsCaption: "Adult",
        LblChildsCaption: "Child",
        LblRoomsCaption: "Rooms",
        LblPerRoomCaption: "Per Room",
        HotelId: "tirtanilavilla"
    });

});
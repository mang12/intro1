$(document).ready(function() {
    // fullpage
	$('#fullpage').fullpage({
		//options here
        anchors:['section1', 'section2', 'section3', 'section4', 'section5', 'section6', 'section7', 'section8'],
        navigation: true,
        sectionsColor : ['#fff','#ffd8d6', '#f6d8fd', "#f3e8d6 ", '#ecf9ce', '#eaeaea', '#d9feff','#ffe7e7' ,'#fff'],
        navigationTooltips: ['HOME', 'LUSH', 'ANNA SUI','OIMU','OLIVE YOUNG','SIOT PROJECT','3CE','DESIGN','COPYRIGHT'],
        slidesNavigation: true,
        loopTop: true,
        loopBottom: true
	});

    // fancybox
    $(".fancybox").fancybox();
    $(".design_wrap a").fancybox({
        openEffect	: 'elastic',
        closeEffect	: 'elastic',

        helpers : {
            title : {
                type : 'inside'
            }
        }
    });

});

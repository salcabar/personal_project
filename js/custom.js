 $(function() {
                $('#ei-slider').eislideshow({
					easing		: 'easeOutExpo',
					titleeasing	: 'easeOutExpo',
					titlespeed	: 600,
					thumbMaxWidth:188
                });
            });
            jQuery(document).ready(function(){
            $('ul.rptabs').each(function(){
    // For each set of tabs, we want to keep track of
    // which tab is active and it's associated content
    var $active, $content, $links = $(this).find('a');

    // If the location.hash matches one of the links, use that as the active tab.
    // If no match is found, use the first link as the initial active tab.
    $active = $($links.filter('[href="'+location.hash+'"]')[0] || $links[0]);
    $active.addClass('active');
    $content = $($active.attr('href'));

    // Hide the remaining content
    $links.not($active).each(function () {
        $($(this).attr('href')).hide();
    });

    // Bind the click event handler
    $(this).on('click', 'a', function(e){
        // Make the old tab inactive.
        $active.removeClass('active');
        $content.hide();

        // Update the variables with the new link and content
        $active = $(this);
        $content = $($(this).attr('href'));

        // Make the tab active.
        $active.addClass('active');
        $content.fadeIn(300);

        // Prevent the anchor's default click action
        e.preventDefault();
    });
});
$('.menu li').hover(function () {
    $(this).find(".sub-menu").slideDown("medium");
    },
	function(){
	    $(this).find(".sub-menu").slideUp("fast");
	});
		//last blog post
jQuery(".blogpost").last().css("border-bottom","0px").css("margin-bottom","0px");
//portfolio filtering
		 	// Clone applications to get a second collection
	var $data = $(".quicksandgo").clone(true);
	
	//NOTE: Only filter on the main portfolio page, not on the subcategory pages
	$('.quicksand li a').click(function(e) {
		$(".quicksand li a").removeClass("active");	
		// Use the last category class as the category to filter by. This means that multiple categories are not supported (yet)
		var filterClass=$(this).attr('class').split(' ').slice(-1)[0];
		
		if (filterClass == 'all') {
			var $filteredData = $data.find('.all');
		} else {
			var $filteredData = $data.find('.all[data-type=' + filterClass + ']');
		}
		$(".quicksandgo").quicksand($filteredData, {
			duration: 1200,
			easing: 'easeInOutQuad',
			adjustHeight: 'dynamic'
		});		
		$(this).addClass("active"); 			
		return false;
	});
	//tweets
	 //if widget exist
			  if (jQuery(".realtwitter").length > 0){
        $(".realtwitter").tweet({
          count: 2,
          username: 'ewizz',
          template: "{text} <span class='ltw_date'>{tweet_relative_time} | {retweet_action}</span>"
        });
		}
	//portfolio single
	$(".slidem").PikaChoose();
	//contact us map
	jQuery(".gmap").gmap3({ action:'init',
options:{
center:[47.58969,9.473413],
zoom: 7
}
	});
            });
$(function() {
	// Accordion Icon
	var iconHome = "<div class='icon-setting'><span class='icon-set icon-home'></span></div>"
	var iconTask = "<div class='icon-setting'><span class='icon-set icon-task'></span></div>"
	var iconNews = "<div class='icon-setting'><span class='icon-set icon-news'></span></div>"
	var iconActivity = "<div class='icon-setting'><span class='icon-set icon-activity'></span></div>"
	var iconStaff = "<div class='icon-setting'><span class='icon-set icon-staff'></span></div>"
	var iconSystem = "<div class='icon-setting'><span class='icon-set icon-system'></span></div>"
	var iconPerformnce = "<div class='icon-setting'><span class='icon-set icon-performance'></span></div>"
	var iconVDR = "<div class='icon-setting'><span class='icon-set icon-VDR'></span></div>"
	var iconHSSE = "<div class='icon-setting'><span class='icon-set icon-HSSE'></span></div>"

	$('#homeAccordion .panel-title').each(function(index) {
		switch (index) {
			case 0:
				$('#homeAccordion .panel-title').eq(0).before(iconHome);
				break;
			case 1:
				$('#homeAccordion .panel-title').eq(1).before(iconTask);
				break;
			case 2:
				$('#homeAccordion .panel-title').eq(2).before(iconNews);
				break;
			case 3:
				$('#homeAccordion .panel-title').eq(3).before(iconActivity);
				break;
			case 4:
				$('#homeAccordion .panel-title').eq(4).before(iconStaff);
				break;
			case 5:
				$('#homeAccordion .panel-title').eq(5).before(iconSystem);
				break;
			case 6:
				$('#homeAccordion .panel-title').eq(6).before(iconPerformnce);
				break;
			case 7:
				$('#homeAccordion .panel-title').eq(7).before(iconVDR);
				break;
			case 8:
				$('#homeAccordion .panel-title').eq(8).before(iconHSSE);
				break;
			default:
				$('#homeAccordion .panel-title').eq(0).before(iconHome);
				$('#homeAccordion .panel-title').eq(1).before(iconTask);
				$('#homeAccordion .panel-title').eq(2).before(iconNews);
				$('#homeAccordion .panel-title').eq(3).before(iconActivity);
				$('#homeAccordion .panel-title').eq(4).before(iconStaff);
				$('#homeAccordion .panel-title').eq(5).before(iconSystem);
				$('#homeAccordion .panel-title').eq(6).before(iconPerformnce);
				$('#homeAccordion .panel-title').eq(7).before(iconVDR);
				$('#homeAccordion .panel-title').eq(8).before(iconHSSE);
		}
	});
	//ul li 选中样式
	$('.title-setting ul li').click(function() {
		$(this).siblings().removeClass("high");
		$(this).addClass("high");
	});
});
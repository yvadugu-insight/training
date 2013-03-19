(function() { var PixelLaunch = window.PixelLaunch =
{       
		messageUrl:"",
		
		init : function (fileServer)
	    {   
			PixelLaunch.messageUrl = fileServer;
			/*alert(" in homePage Js messageUrl is "+ PixelHome.messageUrl);		*/
					
			var mainLabelsData = PixelCommon.getContent(PixelLaunch.messageUrl, '', "pixelLabels/pixelLabelsFile.txt");
			var mainLabelsJson = JSON.parse(mainLabelsData);
			
			var launchTemplateData = PixelCommon.getContent(PixelLaunch.messageUrl, '', "homePageTmpl/launchTempl.html");
			$.template( "launchTemplate", launchTemplateData);
			PixelCommon.renderTemplate("launchTemplate",mainLabelsJson ,"#launchContentDiv");
			var windowWidth = $(window).width();
		    var windowHeight =$(window).height();
		    $('#launchContentDiv').css({'width':windowWidth ,'height':windowHeight });
	    }
	    
}	   
})();
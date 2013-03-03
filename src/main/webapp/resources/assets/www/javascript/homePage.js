/*
 * @yvadugu
 * 
 */
(function() { var PixelHome = window.PixelHome =
{       
		messageUrl:"",
		
		init : function (fileServer)
	    {   
			PixelHome.messageUrl = fileServer;
			/*alert(" in homePage Js messageUrl is "+ PixelHome.messageUrl);		*/
					
			var mainLabelsData = PixelCommon.getContent(PixelHome.messageUrl, '', "pixelLabels/pixelLabelsFile.txt");
			var mainLabelsJson = JSON.parse(mainLabelsData);
			
			var mainAddTemplateData = PixelCommon.getContent(PixelHome.messageUrl, '', "homePageTmpl/mainAddTemplate.html");
			$.template( "mainAddTemplate", mainAddTemplateData);
			PixelCommon.renderTemplate("mainAddTemplate",mainLabelsJson ,"#TrainingContentDiv");
			
	    }
}	   
})();
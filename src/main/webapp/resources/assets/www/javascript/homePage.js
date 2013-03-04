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
			
	    },
	    redirectToVideo : function (videoKey)
	    {
	    	/*PixelCommon.getServiceResponse	    	
	    	var response = PixelCommon.getServiceResponse(ordHistoryPathsObj.paths.getSTHeaders,smartTrackerJson,"POST");*/
	    	/*var redirectUrl=PixelCommon.getRootURL()+"/training/demo?key="+videoKey;
	        window.location.replace(redirectUrl);	*/
	    	
	    	var mainLabelsData = PixelCommon.getContent(PixelHome.messageUrl, '', "pixelLabels/pixelLabelsFile.txt");
			var mainLabelsJson = JSON.parse(mainLabelsData);			
			
			var videoLinkData = PixelCommon.getContent(PixelHome.messageUrl, '', "homePageTmpl/videoLinkData.txt");
			var videoLinksJson = JSON.parse(videoLinkData);
			
			var demoVideoTemplateData = PixelCommon.getContent(PixelHome.messageUrl, '', "homePageTmpl/demoVideoTmpl.html");
			$.template( "demoVideoTemplate", demoVideoTemplateData);
			PixelCommon.renderTemplate("demoVideoTemplate",mainLabelsJson ,"#TrainingVideoDiv");	    	
			$("#testPlayerId").attr('src', videoLinksJson.links[videoKey]);
	    	
	    	
	    	$("#testPlayerDivId").dialog({modal:true, width: 'auto',height:'auto',resizable:true,draggable:true,title: 'Demo Video', 'Cancel': function() {
                $(this).dialog('close');playVideoAndPauseOthers($('testPlayerId')[0]);$("#TrainingVideoDiv").empty();
            },close: function() {$(this).dialog('close');playVideoAndPauseOthers($('testPlayerId')[0]); $("#TrainingVideoDiv").empty(); } });
	    	
	    	
	    }
	    
	    
	    
	    
}	   
})();

function playVideoAndPauseOthers(frame) {
    $('iframe[src*="http://www.youtube.com/embed/"]').each(function(i) {
        var func = this === frame ? 'playVideo' : 'pauseVideo';
        this.contentWindow.postMessage('{"event":"command","func":"' + func + '","args":""}', '*');
    });
}
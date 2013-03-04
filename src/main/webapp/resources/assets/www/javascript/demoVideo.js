/*
 * @yvadugu
 * 
 */
(function() { var PixelVideo = window.PixelVideo =
{       
		messageUrl:"",
		vidID:"",
		
		init : function (fileServer,key)
	    {   
			PixelVideo.messageUrl = fileServer;
			/*alert(" in homePage Js messageUrl is "+ PixelHome.messageUrl);		*/
					
			var mainLabelsData = PixelCommon.getContent(PixelVideo.messageUrl, '', "pixelLabels/pixelLabelsFile.txt");
			var mainLabelsJson = JSON.parse(mainLabelsData);			
			
			var videoLinkData = PixelCommon.getContent(PixelVideo.messageUrl, '', "homePageTmpl/videoLinkData.txt");
			var videoLinksJson = JSON.parse(videoLinkData);
			
			var demoVideoTemplateData = PixelCommon.getContent(PixelVideo.messageUrl, '', "homePageTmpl/demoVideoTmpl.html");
			$.template( "demoVideoTemplate", demoVideoTemplateData);
			PixelCommon.renderTemplate("demoVideoTemplate",mainLabelsJson ,"#TrainingVideoDiv");
			
			//onYouTubePlayerAPIReady(videoLinksJson.links[key]);
			//doYT(videoLinksJson.links[key]);
			
	    }
    
}	   
})();

function onYouTubePlayerAPIReady(videoId) {
	var tag = document.createElement('script');
	tag.setAttribute("type","text/javascript");
	tag.setAttribute("src","http://www.youtube.com/player_api");	
    var firstScriptTag = document.getElementsByTagName('script')[0];
	firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
	window.player = new YT.Player('videoPlayerDiv', {
      height: '390',
      width: '640',
      videoId:videoId
    });
  }



(function() { var PixelCommon = window.PixelCommon =
{
		/* 
		 * To get the Templates from CMS
		 * Need to convert to Async later @Yvadugu
		 */
		
		
	getContent : function (url, language, path)
    {         
		var strReturn;
	 	
	 	if (path != null)
	 		url = url + "/resources/assets/www/" + path;
	 	
		$.ajax({ url:url, success:function(data){strReturn = data;}, async:false });
		return strReturn;
    },
    renderTemplate: function(templateName, templateData, divId) {
    	if(templateData != null)
    	{   
    		templateData = $.extend(templateData, {assetsurl:$("#globalFileServerUrlId").val()},{fileServer:""});
    		$.tmpl(templateName, templateData).appendTo(divId);
    	}
    }
}
})();
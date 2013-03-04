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
    },
    getServiceResponse : function (url,jsonObj,reqType,cacheFlag)
    { 	                   
		{
			
			var strReturn = null;
			if(url != "" && reqType != "")
			{
				if(reqType=="POST")
				{
					$.ajax({
						  url: url,
						  type: "POST",
						  data: (jsonObj),
						  global: false,
						  dataType: "json",
						  async: false,
						  contentType: "application/json",
						  crossDomain: true,
						  headers: {"Accept":"application/json"},
						  success: function(data) {strReturn = data;}
					});
				}
				else if(reqType=="GET")
				{
					if (cacheFlag != null) {
						$.ajax({
							url: url,
							type: "GET",
							dataType: "json",
							cache:cacheFlag,
							async: false,
							contentType: "application/json",
							crossDomain: true,
							headers: {"Accept":"application/xml,application/json"},
							success: function(data) { strReturn = data; }
						});
					}
					else {
						$.ajax({
							url: url,
							type: "GET",
							dataType: "json",
							async: false,
							contentType: "application/json",
							crossDomain: true,
							headers: {"Accept":"application/xml,application/json"},
							success: function(data) { strReturn = data; }
						});
					}
				}				
				else
				{
					alert("getServiceResponse :: Invalid Request Type.");		
				}
				if (strReturn)
				{
					 
					return strReturn;
				}
			
			}
			else
				alert("Please enter a URL AND JSON string to post.");
		}
    },
    /* To get the domain URL */
    getRootURL : function ()
    {         
    	var rootURL = "";
    	var baseURL = location.href;

    	if (location.protocol == "http:")
    	{
    		rootURL = baseURL.substring(0, baseURL.indexOf('/', 7));
    	}
    	else
    	{
    		rootURL = baseURL.substring(0, baseURL.indexOf('/', 8));
    	}

    	return rootURL;
    }
}
})();
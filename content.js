chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if( request.message === "clicked_browser_action" ) {
      if ($("*").css('border') == '1px solid rgb(255, 0, 0)') {
        $("*").css('border', 'none');
      }
      else {
        $("*").css('border', '1px solid rgb(255, 0, 0)');
      }
    }
  }
);
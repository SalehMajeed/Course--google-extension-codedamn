chrome.runtime.sendMessage('Passed to background script.')
var url = chrome.extension.getURL('toolbar.html')
var height = '35px'
var iframe = "<ifram src='"+url+"' height='"+height+"' id='ownCustomToolbar'></iframe>"
document.body.append(iframe)
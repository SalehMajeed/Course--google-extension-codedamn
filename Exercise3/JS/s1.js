var options = {
	// type: 'basic',
	// type: 'image',
	type: 'progress',
	title: 'My First Popup With Chrome',
	message: 'This is pretty cool',
	iconUrl: 'icon.png',
	// imageUrl: 'icon.png',
	// items: [
	// 	{ title: 'popup 1', message: 'this is item 1' },
	// 	{ title: 'popup 2', message: 'this is item 2' },
	// 	{ title: 'popup 3', message: 'this is item 3' },
	// ],
	progress: 40,
};
chrome.notifications.create(options); //(options, callback)

function callback() {
	console.log('done');
}

chrome.notifications.onClicked.addListener(redirect_window);

function redirect_window() {
	console.log('in');
	alert('Clicked');
}

var avatars = [
  chrome.extension.getURL("/images/avatar1.jpg"),
  chrome.extension.getURL("/images/avatar2.jpg"),
  chrome.extension.getURL("/images/avatar3.jpg"),
  chrome.extension.getURL("/images/avatar4.jpg"),
  chrome.extension.getURL("/images/avatar5.jpg")
]

function changeAvatar(elem, n) {
	elem.attr("src", avatars[n]);
}

$(document).ready(function() {
  $("img").each(function () {
    var n = Math.floor(Math.random() * 5);
    changeAvatar($(this), n);
 });
})

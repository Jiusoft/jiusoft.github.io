var isMobile = /Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent);
if (isMobile) {
    document.getElementById("body").innerHTML = "<p>Sorry, mobile devices are not supported...</p>";
}
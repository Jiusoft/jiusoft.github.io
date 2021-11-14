function makeSureUserIsInDesktop() {
    if navigator.userAgentData.mobile {
        document.getElementById("body").innerHTML = "<p>Sorry, mobile devices are not supported...</p>";  // Assign id body to body element.
    }
}
makeSureUserIsInDesktop();

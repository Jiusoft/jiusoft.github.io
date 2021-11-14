function makeSureUserIsInDesktop() {
  const isMobile = navigator.userAgentData.mobile; //resolves true/false
  if isMobile == true {
    document.getElementById("body").innerHTML = "<p>Sorry, mobile devices are not supported...</p>";
  }
}
makeSureUserIsInDesktop();
function makeSureUserIsInDesktop() {
  const isMobile = (/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent) || (/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.platform))); //resolves true/false
  if (isMobile == true) {
    document.getElementById("body").innerHTML = "<p>Sorry, mobile devices are not supported...</p>";
  }
}
makeSureUserIsInDesktop();

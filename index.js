function updateTextBasedOnWidth() {
  const h1 = document.querySelector("h1");
  const windowWidth = window.innerWidth;

  if (windowWidth <= 480) {
    h1.textContent = "480px 이하: 모바일 세로";
  } else if (windowWidth <= 768) {
    h1.textContent = "481~768px: 모바일 가로, 타블렛 세로";
  } else if (windowWidth <= 1024) {
    h1.textContent = "767~1024px: 타블렛 가로, 노트북";
  } else if (windowWidth <= 1280) {
    h1.textContent = "1025~1280px: 타블렛 가로, 노트북";
  } else if (windowWidth > 1280) {
    h1.textContent = "1280px 초과: 데스크탑";
  } else {
    h1.textContent = "???";
  }
}

window.addEventListener("load", updateTextBasedOnWidth);
window.addEventListener("resize", updateTextBasedOnWidth);

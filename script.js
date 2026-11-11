/* =========================================================
   ★ 履歷連結：把下面引號裡的 # 換成你的雲端履歷網址
   例如：const RESUME_URL = "https://drive.google.com/file/d/xxxx/view";
   全站三個「下載履歷」按鈕會一起更新
   ========================================================= */
const RESUME_URL = "https://drive.google.com/file/d/1-dtCrDFnE73UbFT31lE6dYZ-GK6y9byd/view?usp=sharing";

document.querySelectorAll(".resume-link").forEach(function (a) {
  a.href = RESUME_URL;
});

/* 照片還沒放進資料夾時，顯示灰色佔位框與應放入的檔名 */
document.querySelectorAll("[data-label] img").forEach(function (img) {
  var box = img.parentElement;
  function markMissing() { box.classList.add("missing"); }
  function markLoaded() { box.classList.remove("missing"); }
  img.addEventListener("error", markMissing);
  img.addEventListener("load", markLoaded);
  if (img.complete && img.naturalWidth === 0) markMissing();
});

/* 手機版選單 */
var toggle = document.querySelector(".nav-toggle");
var links = document.querySelector(".nav-links");
toggle.addEventListener("click", function () { links.classList.toggle("open"); });
links.querySelectorAll("a").forEach(function (a) {
  a.addEventListener("click", function () { links.classList.remove("open"); });
});

/* 專案作品：點卡片開啟詳細內容 */
document.querySelectorAll(".project-card").forEach(function (card) {
  card.addEventListener("click", function () {
    var modal = document.getElementById(card.dataset.modal);
    if (!modal) return;
    // 打開時才載入圖片，並檢查是否缺圖
    modal.querySelectorAll("img").forEach(function (img) {
      if (img.complete && img.naturalWidth === 0) img.parentElement.classList.add("missing");
    });
    modal.showModal();
    modal.querySelector(".modal-inner").scrollTop = 0;
  });
});
document.querySelectorAll("dialog.modal").forEach(function (modal) {
  modal.querySelector(".modal-close").addEventListener("click", function () { modal.close(); });
  modal.addEventListener("click", function (e) { if (e.target === modal) modal.close(); });
});

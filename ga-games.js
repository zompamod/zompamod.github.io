<!-- Google Analytics Loader -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-2BES6Q9C60"></script>
<script>
/* ================================
   Google Analytics – Games Script
   ================================ */

window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

// تسجيل الصفحة مع query (?id=...)
gtag('config', 'G-2BES6Q9C60', {
  page_path: location.pathname + location.search
});

/* ===== قراءة ID اللعبة ===== */
const params = new URLSearchParams(window.location.search);
const GAME_ID = params.get("id");

/* ===== إذا كانت صفحة لعبة ===== */
if (GAME_ID) {

  // تغيير عنوان الصفحة
  document.title = "تحميل لعبة " + GAME_ID;

  // تسجيل مشاهدة اللعبة
  gtag('event', 'view_game', {
    game_id: GAME_ID,
    page_location: location.href
  });
}

/* ===== عند فتح لعبة من الصفحة الرئيسية ===== */
function trackOpenGame(id){
  gtag('event', 'open_game', {
    game_id: id
  });
}

/* ===== زر تحميل اللعبة ===== */
function trackDownload(){
  if(!GAME_ID) return;

  gtag('event', 'download_game', {
    game_id: GAME_ID
  });
}

/* ===== تتبع البحث داخل الموقع (اختياري) ===== */
function trackSearch(keyword){
  gtag('event', 'search', {
    search_term: keyword
  });
}
</script>

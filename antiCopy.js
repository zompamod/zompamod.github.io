// منع تحديد النص ونسخه
document.addEventListener('selectstart', e => e.preventDefault());
document.addEventListener('copy', e => e.preventDefault());
document.addEventListener('cut', e => e.preventDefault());

// منع النقر بالزر الأيمن
document.addEventListener('contextmenu', e => e.preventDefault());

// منع سحب العناصر (مثل الصور)
document.addEventListener('dragstart', e => e.preventDefault());

// منع لمس الصور على الهواتف
document.addEventListener('touchstart', e => {
  if(e.target.tagName === 'IMG') e.preventDefault();
}, {passive:false});

// منع بعض اختصارات الكيبورد
document.addEventListener('keydown', e => {
  if((e.ctrlKey && ['c','x','v','s','u','p'].includes(e.key.toLowerCase())) || e.key === 'F12') e.preventDefault();
});

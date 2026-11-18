
/* T&Y Elite Mobility — shared header/footer for GitHub Pages */
(() => {
  'use strict';
  const root = '/';
  const path = window.location.pathname;
  const thai = /^\/th(?:\/|$)/i.test(path);
  const filename = path.split('/').pop() || 'index.html';
  const counterpart = thai ? root + filename : root + 'th/' + filename;
  const page = filename === '' ? 'index.html' : filename;
  const links = [
    ['index.html', 'Home', 'หน้าแรก', 'Home', 'หน้าแรก'],
    ['all-rental-prices.html', 'All Prices', 'ราคาค่าเช่าทั้งหมด', 'Prices', 'ราคาเช่า'],
    ['our-fleet.html', 'Real Fleet Gallery', 'แกลเลอรีรถจริง', 'Fleet Gallery', 'รูปรถจริง'],
    ['rental-info.html', 'Rental Info', 'ข้อมูลการเช่า', 'Rental Info', 'ข้อมูลเช่า'],
    ['riding-in-bangkok-guide.html', 'Bangkok Guide', 'คู่มือขับขี่ในกรุงเทพฯ', 'Bangkok Guide', 'คู่มือขับขี่'],
    ['contact.html', 'Contact', 'ติดต่อเรา', 'Contact', 'ติดต่อเรา']
  ];
  const section = thai ? '/th/' : '/';
  const nav = links.map(([file, en, th, enMobile, thMobile]) => {
    const label = thai ? th : en;
    const mobile = thai ? thMobile : enMobile;
    const active = file === page;
    return `<a class="ty-shared-nav-link${active ? ' is-active' : ''}" href="${section}${file}"${active ? ' aria-current="page"' : ''}><span class="ty-label-desktop">${label}</span><span class="ty-label-mobile">${mobile}</span></a>`;
  }).join('');
  const title = thai ? 'บริการเช่ามอเตอร์ไซค์ · กรุงเทพฯ' : 'Motorbike & Scooter Rental · Bangkok';
  const subtitle = thai ? 'บริการเช่ามอเตอร์ไซค์ · กรุงเทพฯ ประเทศไทย' : 'Motorbike & Scooter Rental · Bangkok, Thailand';
  const contact = thai ? 'โทรศัพท์ / WhatsApp' : 'Phone / WhatsApp';
  const termsEn = thai ? 'เงื่อนไขการเช่า (ภาษาอังกฤษ)' : 'Rental Terms (English)';
  const termsTh = thai ? 'ข้อกำหนดและเงื่อนไขการเช่า (Thai)' : 'Rental Terms (Thai)';
  const copyright = thai ? '© 2026 T&Y Elite Mobility Co., Ltd. สงวนลิขสิทธิ์' : '© 2026 T&Y Elite Mobility Co., Ltd. All rights reserved.';
  const logo = `${root}LOGO-FOND-NOIR.png`;
  const header = `<header class="ty-shared-header"><div class="ty-shared-header-inner"><a class="ty-shared-brand" href="${section}index.html"><img src="${logo}" alt="T&Y Elite Mobility logo" width="46" height="46"><span class="ty-shared-brand-text">T&amp;Y ELITE MOBILITY<small>${title}</small></span></a><nav class="ty-shared-nav" aria-label="${thai ? 'เมนูหลัก' : 'Main navigation'}">${nav}<span class="ty-shared-lang" aria-label="Language"><a href="${thai ? root + filename : counterpart}"${!thai ? ' aria-current="page"' : ''}>EN</a><a href="${root + 'th/' + filename}"${thai ? ' aria-current="page"' : ''}>TH</a></span></nav></div></header>`;
  const footer = `<footer class="ty-shared-footer"><div class="ty-shared-footer-inner"><img class="ty-shared-footer-logo ty-shared-footer-left" src="${logo}" alt="" width="48" height="48"><div class="ty-shared-footer-content"><strong class="ty-shared-company">T&amp;Y Elite Mobility Co., Ltd.</strong><p>${subtitle}</p><p>${contact}: <a href="tel:+66967718495">+66 96 771 8495</a></p><p><a href="${root}CGL%20Eng.pdf" target="_blank" rel="noopener">${termsEn}</a> · <a href="${root}CGL%20Thai%20.pdf" target="_blank" rel="noopener">${termsTh}</a></p><p class="ty-shared-copyright">${copyright}</p></div><img class="ty-shared-footer-logo ty-shared-footer-right" src="${logo}" alt="" width="48" height="48"></div></footer>`;
  function install() {
    if (document.querySelector('.ty-shared-header')) return;
    const oldHeader = document.querySelector('.topbar, header.site-header, header.main-header');
    if (oldHeader) oldHeader.insertAdjacentHTML('beforebegin', header);
    else document.body.insertAdjacentHTML('afterbegin', header);
    if (oldHeader) oldHeader.remove();
    const oldFooter = document.querySelector('footer.legal, footer.site-footer, footer.main-footer');
    if (oldFooter) oldFooter.insertAdjacentHTML('beforebegin', footer);
    else document.body.insertAdjacentHTML('beforeend', footer);
    if (oldFooter) oldFooter.remove();
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', install, {once:true});
  else install();
})();

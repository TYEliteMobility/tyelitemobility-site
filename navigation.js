
document.addEventListener("DOMContentLoaded", function () {
  const normalize = (path) => {
    let p = decodeURIComponent(path).replace(/\/+/g, "/");
    p = p.replace(/\/index\.html$/i, "/");
    return p.replace(/\/$/, "") || "/";
  };

  const current = normalize(window.location.pathname);

  document.querySelectorAll(".nav > a").forEach((link) => {
    const target = normalize(new URL(link.href).pathname);
    const active = current === target;

    link.classList.toggle("nav-active", active);

    if (active) {
      link.setAttribute("aria-current", "page");
    } else {
      link.removeAttribute("aria-current");
    }
  });
});

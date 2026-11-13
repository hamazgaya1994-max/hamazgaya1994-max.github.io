(function () {
  // Pub d'accueil (10 s)
  var pub = document.getElementById("pub");
  var reste = 10;
  document.body.classList.add("pub-open");
  requestAnimationFrame(function () {
    requestAnimationFrame(function () { document.getElementById("pub-progress").style.width = "100%"; });
  });
  function fermer() {
    clearInterval(timer);
    if (!pub) return;
    pub.classList.add("hide");
    document.body.classList.remove("pub-open");
    setTimeout(function () { if (pub) { pub.remove(); pub = null; } }, 500);
    if (window.apresPub) window.apresPub();
  }
  var timer;
  timer = setInterval(function () {
    reste--;
    document.getElementById("pub-count").textContent = reste;
    if (reste <= 0) fermer();
  }, 1000);
  document.getElementById("pub-skip").addEventListener("click", fermer);
  document.addEventListener("keydown", function (e) { if (e.key === "Escape") fermer(); });

  // Statistiques : visites et clics (uniquement sur le site en ligne)
  var SUIVI = "https://gaya-clics.hamazgaya1994.workers.dev/c?l=";
  function suivre(l) {
    if (location.protocol !== "https:") return;
    try {
      if (navigator.sendBeacon) navigator.sendBeacon(SUIVI + l);
      else fetch(SUIVI + l, { mode: "no-cors", keepalive: true });
    } catch (e) {}
  }
  try {
    if (!sessionStorage.getItem("vu")) { sessionStorage.setItem("vu", "1"); suivre("visite"); }
  } catch (e) { suivre("visite"); }
  document.addEventListener("click", function (e) {
    var a = e.target.closest ? e.target.closest("a") : null;
    if (!a) return;
    var h = a.getAttribute("href") || "";
    if (a.id === "li-link") suivre("linkedin");
    else if (h.indexOf("cv.pdf") === 0) suivre("cv_pdf");
    else if (h.indexOf("mailto:") === 0) suivre("contact");
    else if (h.indexOf("tel:") === 0) suivre("telephone");
    else if (h === "#cv") suivre("page_cv");
    else if (h === "#linkedin") suivre("page_linkedin");
  }, true);

  try {
    var $ = function (id) { return document.getElementById(id); };
    var esc = function (s) {
      return String(s).replace(/[&<>"']/g, function (c) {
        return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
      });
    };
    var D = DATA;
    var img = '<img src="' + esc(D.photo) + '" alt="' + esc(D.name) + '">';
    ["home-photo", "cv-photo", "li-photo"].forEach(function (id) { $(id).innerHTML = img; });

    var parts = D.name.split(" ");
    $("first").textContent = parts[0];
    $("last").textContent = parts.slice(1).join(" ");
    $("home-badge").textContent = "Disponible · " + D.city.split(",").pop().trim();
    $("home-intro").textContent = D.home.intro;
    $("home-phone").textContent = D.phone;
    $("home-phone").href = "tel:" + D.phone.replace(/\s/g, "");
    $("nav-mail").href = "mailto:" + D.email;
    document.title = D.name + " | CV & LinkedIn";

    // Chiffres animés
    $("home-stats").innerHTML = D.home.stats.map(function (s) {
      return '<div class="stat"><strong data-to="' + s.value + '" data-pre="' + esc(s.prefix) + '" data-suf="' + esc(s.suffix) + '">' +
        esc(s.prefix) + s.value + esc(s.suffix) + "</strong><span>" + esc(s.label) + "</span></div>";
    }).join("");
    function compter() {
      document.querySelectorAll("[data-to]").forEach(function (el) {
        var to = +el.dataset.to, t0 = null;
        function step(t) {
          if (!t0) t0 = t;
          var k = Math.min((t - t0) / 1400, 1), e = 1 - Math.pow(1 - k, 3);
          el.textContent = el.dataset.pre + Math.round(to * e) + el.dataset.suf;
          if (k < 1) requestAnimationFrame(step);
        }
        requestAnimationFrame(step);
      });
    }

    // Bandeau compétences
    var mots = D.skills.concat(D.tools);
    var html = mots.map(function (m) { return "<span>" + esc(m) + "</span>"; }).join("");
    $("marquee").innerHTML = html + html;

    // Texte qui s'écrit
    var roles = D.home.roles, ri = 0, ci = 0, efface = false;
    function taper() {
      var mot = roles[ri];
      $("type").textContent = mot.slice(0, ci);
      if (!efface && ci < mot.length) { ci++; return setTimeout(taper, 70); }
      if (!efface) { efface = true; return setTimeout(taper, 1600); }
      if (ci > 0) { ci--; return setTimeout(taper, 35); }
      efface = false; ri = (ri + 1) % roles.length; setTimeout(taper, 300);
    }
    taper();

    // Lumière qui suit la souris
    document.querySelectorAll(".glow").forEach(function (card) {
      card.addEventListener("mousemove", function (e) {
        var r = card.getBoundingClientRect();
        card.style.setProperty("--x", e.clientX - r.left + "px");
        card.style.setProperty("--y", e.clientY - r.top + "px");
      });
    });

    // CV
    $("cv-name").textContent = D.name;
    $("cv-title").textContent = D.title;
    $("contact").innerHTML = ['<a href="mailto:' + esc(D.email) + '">' + esc(D.email) + "</a>", esc(D.phone), esc(D.city)].join(" · ");
    $("summary").textContent = D.summary;
    $("experiences").innerHTML = D.experiences.map(function (x, i) {
      return '<div class="item r" style="--i:' + (i + 3) + '"><span class="item-role">' + esc(x.role) + '</span> <span class="item-co">@ ' + esc(x.company) +
        '</span><span class="item-date">' + esc(x.dates) + "</span><ul>" +
        x.points.map(function (p) { return "<li>" + esc(p) + "</li>"; }).join("") + "</ul></div>";
    }).join("");
    $("education").innerHTML = D.education.map(function (e) {
      return '<div class="item"><span class="item-role">' + esc(e.degree) + '</span><br><span class="item-co">' + esc(e.school) +
        '</span><span class="item-date">' + esc(e.dates) + "</span></div>";
    }).join("");
    $("skills").innerHTML = D.skills.map(function (s) { return "<li>" + esc(s) + "</li>"; }).join("");
    $("tools").innerHTML = D.tools.map(function (s) { return "<li>" + esc(s) + "</li>"; }).join("");
    $("languages").innerHTML = D.languages.map(function (l) {
      var p = l.split(":");
      return "<li><span>" + esc(p[0].trim()) + "</span><b>" + esc((p[1] || "").trim()) + "</b></li>";
    }).join("");
    $("licence").textContent = D.licence;

    // LinkedIn
    var L = D.linkedin;
    $("li-name").textContent = D.name;
    $("li-headline").textContent = L.headline;
    $("li-location").textContent = L.location;
    $("li-link").href = L.url;
    if (L.posts && L.posts.length) {
      $("li-posts-wrap").hidden = false;
      $("li-posts").innerHTML = L.posts.map(function (src) {
        return '<iframe src="' + esc(src) + '" height="600" allowfullscreen title="Publication LinkedIn"></iframe>';
      }).join("");
    }

    $("year").textContent = new Date().getFullYear();
    $("footer-name").textContent = D.name;

    // Navigation
    var dejaCompte = false;
    function show(tab) {
      if (["accueil", "cv", "linkedin"].indexOf(tab) < 0) tab = "accueil";
      document.querySelectorAll(".panel").forEach(function (p) { p.classList.remove("active"); });
      void document.body.offsetWidth;
      $(tab).classList.add("active");
      document.querySelectorAll(".tab").forEach(function (t) { t.classList.toggle("active", t.dataset.tab === tab); });
      window.scrollTo(0, 0);
      if (tab === "accueil" && !dejaCompte && !document.body.classList.contains("pub-open")) { dejaCompte = true; setTimeout(compter, 400); }
    }
    window.apresPub = function () { show(location.hash.slice(1)); };
    window.addEventListener("hashchange", function () { show(location.hash.slice(1)); });
    show(location.hash.slice(1));
  } catch (e) {
    console.error(e);
  }
})();

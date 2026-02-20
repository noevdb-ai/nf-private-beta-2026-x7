// ===========================
// DATA (FIGÉE)
// ===========================
const DATA = [
  {
    id: "refection-picc-css9553",
    category: "Pansement PICC Line",
    title: "Réfection du pansement de PICC line",
    subtitle: "Bonnes pratiques infirmières – CSS 9553",
    summary: "Technique sécurisée et conforme pour la réfection du pansement de PICC line.",
    tags: ["Adulte", "PICC line", "Asepsie", "CSS 9553"],
    image: "assets/picc_steps.png",
    imageCaption: "Illustration pédagogique des étapes de la réfection du pansement de PICC line.",

    // 🚨 Alerte figée
    alerts: [
      "Pansement non intègre (souillé, humide, décollé, déplacé)",
      "Signes locaux : rougeur, douleur, chaleur, œdème, écoulement, lésion cutanée",
      "Douleur inhabituelle au site ou au membre porteur",
      "Fièvre ou signes généraux évocateurs d’infection",
      "Traction, déplacement ou suspicion de migration du PICC line",
      "Altération de la fixation du cathéter"
    ],
    alertCTA:
      "En présence d’un point d’alerte, la conduite à tenir doit être adaptée : sécuriser le dispositif, tracer les observations et alerter conformément aux procédures et recommandations en vigueur.",
    alertKey: "Ne jamais réinsérer un PICC line ayant migré, même partiellement.",

    // 🪜 Technique figée (2 lignes pédagogiques)
    steps: [
      { t: "Hygiène des mains", d: "Friction hydro-alcoolique 20 à 30 secondes, jusqu’au séchage complet.\nLavage à l’eau et au savon si nécessaire (mains visiblement souillées)." },
      { t: "Préparation du soin", d: "Préparer l’ensemble du matériel à l’avance sur un plan propre.\nVérifier compatibilité des produits avec le PICC et intégrité des emballages." },
      { t: "Retrait de l’ancien pansement", d: "Mettre des gants non stériles.\nRetirer délicatement en stabilisant le cathéter afin d’éviter traction ou migration." },
      { t: "Inspection du site d’insertion", d: "Inspecter le point d’insertion et la peau périphérique : rougeur, douleur, chaleur, œdème, écoulement, lésion.\nEn cas de signe anormal : sécuriser, tracer, alerter selon procédures et recommandations en vigueur." },
      { t: "Surveillance de la position du PICC", d: "Vérifier l’absence de traction et toute modification de la longueur externe visible (si repère).\nToute suspicion de migration doit être signalée et tracée." },
      { t: "Nettoyage du site (si nécessaire)", d: "Nettoyer uniquement en cas de souillure visible ou présence de sang.\nUtiliser des compresses stériles, sans irriter la peau." },
      { t: "Antisepsie cutanée", d: "Antisepsie du centre vers la périphérie par friction avec antiseptique compatible PICC.\nRespecter le temps de contact fabricant (généralement ≥ 30 s) et laisser sécher complètement." },
      { t: "Port de gants stériles", d: "Enfiler des gants stériles dès qu’un contact direct avec le site d’insertion ou le cathéter est nécessaire.\nConserver une technique non-touch autant que possible." },
      { t: "Fixation du PICC line", d: "Vérifier l’efficacité du système de fixation.\nRenouveler si nécessaire avec un dispositif adapté pour prévenir tractions et migrations." },
      { t: "Pose du nouveau pansement", d: "Poser un pansement stérile, occlusif, sans tension cutanée.\nPansement transparent privilégié pour la surveillance." },
      { t: "Fin du soin et traçabilité", d: "Retirer les gants et réaliser une hygiène des mains.\nTracer : date, état du site, type de pansement, fixation, anomalies et actions entreprises." },
    ],

    // ⏱️ Fréquence figée
    frequency: {
      transparent: {
        title: "Pansement transparent",
        big: "Tous les 7 jours maximum",
        bullets: [
          "Changement immédiat si souillé, humide, décollé ou non intègre",
          "Changement immédiat si lésion cutanée ou signe local anormal"
        ]
      },
      gauze: {
        title: "Pansement de gaze",
        big: "Toutes les 48 heures maximum",
        bullets: [
          "À privilégier si surveillance rapprochée nécessaire",
          "À privilégier si exsudat ou peau altérée"
        ]
      },
      rule: "Toute perte d’intégrité du pansement impose un changement immédiat."
    },

    // 👀 Surveillance figée (pratique)
    surveillance: [
      "À chaque shift : vérifier l’intégrité du pansement et de la fixation.",
      "Au moins 1 fois par jour : inspection du site d’insertion (signes locaux).",
      "Vérifier toute modification de la longueur externe visible (si repère).",
      "Informer le patient des signes à signaler (douleur, fièvre, écoulement, décollement, traction)."
    ],

    // 🛡️ Bloc légal / aide à la pratique figé
    responsibility: {
      purpose: "Cette fiche a pour objectif de soutenir la pratique professionnelle infirmière en proposant un rappel structuré des bonnes pratiques relatives à la réfection du pansement de PICC line.",
      frame: "Les informations présentées sont fondées sur les recommandations en vigueur et visent à accompagner le raisonnement clinique infirmier. Elles ne se substituent pas aux protocoles institutionnels, aux prescriptions médicales ni au jugement professionnel.",
      duty: "Chaque situation clinique étant spécifique, le professionnel de santé demeure responsable de l’évaluation de la situation, de l’adaptation des pratiques et des décisions prises dans le respect des procédures locales et de la réglementation en vigueur.",
      doubt: "En seen cas de doute, de situation inhabituelle ou de signe de complication, il est recommandé de ne pas poursuivre le soin à l’identique, de sécuriser le dispositif et de solliciter un avis médical ou référent, conformément aux procédures en place.",
      refs: "Référence : CSS 9553 – Prévention des infections liées aux cathéters intravasculaires."
    },

    updatedAt: "27/01/2026",
    version: 1
  }
];

// ===========================
// Favoris (localStorage)
// ===========================
const FAV_KEY = "nf_favs_v1";
function loadFavs() {
  try { return new Set(JSON.parse(localStorage.getItem(FAV_KEY) || "[]")); }
  catch { return new Set(); }
}
function saveFavs(set) {
  localStorage.setItem(FAV_KEY, JSON.stringify([...set]));
}
let favs = loadFavs();
let showOnlyFavs = false;
let selectedId = null;

// ===========================
// Elements
// ===========================
const els = {
  viewHome: document.getElementById("viewHome"),
  viewSearch: document.getElementById("viewSearch"),
  detail: document.getElementById("detail"),

  categories: document.getElementById("categories"),
  searchInput: document.getElementById("search"),
  status: document.getElementById("status"),
  list: document.getElementById("list"),

  detailContent: document.getElementById("detailContent"),
  backBtn: document.getElementById("backBtn"),
  detailFavBtn: document.getElementById("detailFavBtn"),

  navBtns: Array.from(document.querySelectorAll(".navBtn")),

  goSearchBtn: document.getElementById("goSearchBtn"),
  goCatsBtn: document.getElementById("goCatsBtn"),
  goFavsBtn: document.getElementById("goFavsBtn"),

  homeLogo: document.getElementById("homeLogo"),
  homeTitle: document.getElementById("homeTitle"),
  homeHeader: document.getElementById("homeHeader"),
};

function normalize(s){ return (s || "").toString().toLowerCase().trim(); }
function esc(s){
  return (s || "")
    .replaceAll("&","&amp;")
    .replaceAll("<","&lt;")
    .replaceAll(">","&gt;");
}

// ===========================
// Navigation
// ===========================
let currentView = "home";
function setView(v){
  currentView = v;
  els.viewHome.classList.toggle("hidden", v !== "home");
  els.viewSearch.classList.toggle("hidden", v !== "search");
  els.detail.classList.add("hidden");

  els.navBtns.forEach(b => b.classList.toggle("active", b.dataset.view === v));

  if (v === "home") renderHome();
  if (v === "search") renderList();
}

els.navBtns.forEach(btn => btn.addEventListener("click", () => setView(btn.dataset.view)));

// ===========================
// Accueil
// ===========================
function renderCategories(){
  if (!els.categories) return;
  els.categories.innerHTML = "";

  const map = new Map();
  DATA.forEach(it => map.set(it.category, (map.get(it.category) || 0) + 1));
  const cats = Array.from(map.entries()).map(([name, count]) => ({name, count}));

  cats.forEach(c => {
    const div = document.createElement("div");
    div.className = "item";
    div.innerHTML = `
      <div style="flex:1; min-width:0">
        <h3 style="margin:0">${esc(c.name)}</h3>
        <p style="margin:4px 0 0 0">Voir les fiches • ${c.count} fiche(s)</p>
      </div>
    `;
    div.addEventListener("click", () => {
      setView("search");
      els.searchInput.value = c.name;
      showOnlyFavs = false;
      renderList();
    });
    els.categories.appendChild(div);
  });
}

function renderHome(){
  renderCategories();
}

// ===========================
// Recherche + favoris
// ===========================
function getFiltered(){
  const q = normalize(els.searchInput.value);
  return DATA.filter(item => {
    const hay = [
      item.title, item.subtitle, item.summary, item.category,
      ...(item.tags || [])
    ].map(normalize).join(" ");
    const match = !q || hay.includes(q);
    const favOk = !showOnlyFavs || favs.has(item.id);
    return match && favOk;
  });
}

function itemCard(item){
  const isFav = favs.has(item.id);

  const div = document.createElement("div");
  div.className = "item";
  div.innerHTML = `
    <div style="flex:1; min-width:0;">
      <h3>${esc(item.title)}</h3>
      <p>${esc(item.subtitle)}</p>
      <p style="margin-top:6px">${esc(item.summary)}</p>
      <div class="badges">
        <span class="badge">${esc(item.category)}</span>
        ${(item.tags||[]).slice(0,4).map(t => `<span class="badge">${esc(t)}</span>`).join("")}
      </div>
    </div>
    <button class="starBtn ${isFav ? "on" : ""}" title="Favori">★</button>
  `;

  div.addEventListener("click", (e) => {
    const isStar = e.target && e.target.classList && e.target.classList.contains("starBtn");
    if (!isStar) openDetail(item.id);
  });

  const star = div.querySelector(".starBtn");
  star.addEventListener("click", (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (favs.has(item.id)) favs.delete(item.id);
    else favs.add(item.id);
    saveFavs(favs);
    renderList();
  });

  return div;
}

function renderList(){
  const items = getFiltered();
  const online = navigator.onLine ? "en ligne" : "hors ligne";
  els.status.textContent = `Mode ${online} • ${items.length} fiche(s) • Favoris: ${favs.size}`;

  els.list.innerHTML = "";
  if (items.length === 0) {
    const empty = document.createElement("div");
    empty.className = "item";
    empty.innerHTML = `<div><h3 style="margin:0">Aucun résultat</h3><p style="margin:6px 0 0 0">Essayez un autre mot-clé.</p></div>`;
    els.list.appendChild(empty);
    return;
  }

  items.forEach(item => els.list.appendChild(itemCard(item)));
}

els.searchInput.addEventListener("input", () => {
  showOnlyFavs = false;
  renderList();
});

// ===========================
// Détail
// ===========================
function openDetail(id){
  selectedId = id;
  const item = DATA.find(x => x.id === id);
  if (!item) return;

  els.detail.classList.remove("hidden");

  // bouton favoris du détail
  const isFav = favs.has(id);
  els.detailFavBtn.textContent = isFav ? "★ Retirer" : "★ Ajouter";

  const badgeRow = `
    <div class="badges">
      <span class="badge">${esc(item.category)}</span>
      ${(item.tags||[]).map(t => `<span class="badge">${esc(t)}</span>`).join("")}
    </div>
  `;

  const imageHtml = `
    <div class="heroImg" style="margin-top:12px">
      <img src="${esc(item.image)}" alt="Illustration PICC">
    </div>
    <div class="caption">${esc(item.imageCaption)}</div>
  `;

  const alertsHtml = `
    <div class="section">
      <div class="sectionHead">
        <div class="sectionTitle"><span class="icon">🚨</span> Points d’alerte</div>
        <span class="pill">Action adaptée</span>
      </div>

      <div class="alertBox">
        <div class="alertTitle">Situations nécessitant une action adaptée :</div>
        <ul class="ul">
          ${(item.alerts||[]).map(a => `<li class="li">${esc(a)}</li>`).join("")}
        </ul>

        <div class="alertCTA">
          <b>➡️ Conduite à tenir :</b><br>${esc(item.alertCTA)}
        </div>

        <div class="alertKey">❗ ${esc(item.alertKey)}</div>
      </div>
    </div>
  `;

  const stepsHtml = `
    <div class="section">
      <div class="sectionHead">
        <div class="sectionTitle"><span class="icon">🪜</span> Technique pas à pas</div>
        <span class="pill">Repliable</span>
      </div>

      <div class="accordion">
        ${(item.steps||[]).map((s, i) => `
          <div class="stepCard" data-step="${i}">
            <button class="stepBtn" type="button" aria-expanded="false">
              <div class="stepLeft">
                <div class="stepNum">${i+1}</div>
                <div>
                  <div class="stepTitle">${esc(s.t)}</div>
                  <div class="small">Appuyez pour afficher</div>
                </div>
              </div>
              <div class="chev">▾</div>
            </button>
            <div class="stepBody">${esc(s.d).replaceAll("\n","<br>")}</div>
          </div>
        `).join("")}
      </div>
    </div>
  `;

  const f = item.frequency;
  const freqHtml = `
    <div class="section">
      <div class="sectionHead">
        <div class="sectionTitle"><span class="icon">⏱️</span> Fréquence</div>
        <span class="pill">Quand changer ?</span>
      </div>

      <div class="freqGrid">
        <div class="freqBox">
          <div class="freqTop">
            <div>
              <div class="freqTitle">${esc(f.transparent.title)}</div>
              <div class="freqBig">${esc(f.transparent.big)}</div>
            </div>
            <div class="freqIcon">🩹</div>
          </div>
          <div class="freqSub">${f.transparent.bullets.map(x => `• ${esc(x)}`).join("<br>")}</div>
        </div>

        <div class="freqBox">
          <div class="freqTop">
            <div>
              <div class="freqTitle">${esc(f.gauze.title)}</div>
              <div class="freqBig">${esc(f.gauze.big)}</div>
            </div>
            <div class="freqIcon">🧻</div>
          </div>
          <div class="freqSub">${f.gauze.bullets.map(x => `• ${esc(x)}`).join("<br>")}</div>
        </div>
      </div>

      <div class="ruleKey">🔑 ${esc(f.rule)}</div>
    </div>
  `;

  const survHtml = `
    <div class="section">
      <div class="sectionHead">
        <div class="sectionTitle"><span class="icon">👀</span> Surveillance</div>
        <span class="pill">Terrain</span>
      </div>
      <ul class="ul">
        ${(item.surveillance||[]).map(x => `<li class="li">${esc(x)}</li>`).join("")}
      </ul>
    </div>
  `;

  const r = item.responsibility;
  const legalHtml = `
    <div class="section">
      <div class="sectionHead">
        <div class="sectionTitle"><span class="icon">🛡️</span> Aide à la pratique</div>
        <span class="pill">Cadre</span>
      </div>

      <div class="note">
        <div class="noteTitle">Finalité</div>
        <div class="li">${esc(r.purpose)}</div>

        <div class="noteTitle" style="margin-top:10px">Cadre d’utilisation</div>
        <div class="li">${esc(r.frame)}</div>

        <div class="noteTitle" style="margin-top:10px">Responsabilité</div>
        <div class="li">${esc(r.duty)}</div>

        <div class="noteTitle" style="margin-top:10px">En cas de doute</div>
        <div class="li">${esc(r.doubt)}</div>

        <div class="small" style="margin-top:10px">${esc(r.refs)}</div>
      </div>

      <div class="small" style="margin-top:10px">
        Version ${item.version} • Mise à jour ${item.updatedAt}
      </div>
    </div>
  `;

  els.detailContent.innerHTML = `
    <h2 style="margin:0 0 6px 0">${esc(item.title)}</h2>
    <div style="color:var(--muted); margin-bottom:10px">${esc(item.subtitle)}</div>
    ${badgeRow}
    ${imageHtml}
    ${alertsHtml}
    ${stepsHtml}
    ${freqHtml}
    ${survHtml}
    ${legalHtml}
  `;

  // Accordéon : 1 ouvert à la fois
  const cards = Array.from(els.detailContent.querySelectorAll(".stepCard"));
  cards.forEach(card => {
    const btn = card.querySelector(".stepBtn");
    btn.addEventListener("click", () => {
      const isOpen = card.classList.contains("open");
      cards.forEach(c => {
        c.classList.remove("open");
        const b = c.querySelector(".stepBtn");
        if (b) b.setAttribute("aria-expanded", "false");
      });
      if (!isOpen) {
        card.classList.add("open");
        btn.setAttribute("aria-expanded", "true");
      }
    });
  });
}

function closeDetail(){
  selectedId = null;
  els.detail.classList.add("hidden");
}
els.backBtn.addEventListener("click", closeDetail);

// Favori depuis le détail
els.detailFavBtn.addEventListener("click", () => {
  if (!selectedId) return;
  if (favs.has(selectedId)) favs.delete(selectedId);
  else favs.add(selectedId);
  saveFavs(favs);
  // maj bouton
  els.detailFavBtn.textContent = favs.has(selectedId) ? "★ Retirer" : "★ Ajouter";
  // maj liste si besoin
  if (currentView === "search") renderList();
});

// ===========================
// Boutons Accueil
// ===========================
els.goSearchBtn.addEventListener("click", () => {
  showOnlyFavs = false;
  setView("search");
});

els.goFavsBtn.addEventListener("click", () => {
  showOnlyFavs = true;
  els.searchInput.value = "";
  setView("search");
});

els.goCatsBtn.addEventListener("click", () => {
  setView("home");
  setTimeout(() => {
    const el = document.getElementById("categories");
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
    el.classList.add("flash");
    setTimeout(() => el.classList.remove("flash"), 900);
  }, 50);
});

// Online/offline label refresh
window.addEventListener("online", () => { if (currentView === "search") renderList(); });
window.addEventListener("offline", () => { if (currentView === "search") renderList(); });

// ===========================
// Header (logo + titre) -> Accueil + pulse
// ===========================
function goHomeWithPulse() {
  if (els.homeLogo) {
    els.homeLogo.classList.remove("pulse");
    void els.homeLogo.offsetWidth;
    els.homeLogo.classList.add("pulse");
  }
  setView("home");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

if (els.homeLogo) els.homeLogo.style.cursor = "pointer";
if (els.homeTitle) els.homeTitle.style.cursor = "pointer";
if (els.homeHeader) els.homeHeader.style.cursor = "pointer";

if (els.homeLogo) els.homeLogo.addEventListener("click", (e) => { e.stopPropagation(); goHomeWithPulse(); });
if (els.homeTitle) els.homeTitle.addEventListener("click", (e) => { e.stopPropagation(); goHomeWithPulse(); });
if (els.homeHeader) els.homeHeader.addEventListener("click", () => { goHomeWithPulse(); });

// ===========================
// Start
// ===========================
renderHome();
setView("home");

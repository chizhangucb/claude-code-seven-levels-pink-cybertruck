// Seven Levels — shared behavior: click-to-load demos, model toggle, compare page.

// ---- Level pages: click-to-load demo iframe with Fable/Opus toggle ----
document.querySelectorAll(".demo-block").forEach((block) => {
  const frame = block.querySelector(".demo-frame");
  const cover = block.querySelector(".demo-cover");
  const openLink = block.querySelector(".demo-open");
  const buttons = block.querySelectorAll(".seg button");
  let model = "fable";
  let loaded = false;

  const src = () => `/demos/${model}/level-${block.dataset.level}.html`;

  function mount() {
    frame.querySelector("iframe")?.remove();
    const iframe = document.createElement("iframe");
    iframe.src = src();
    iframe.title = `Level ${block.dataset.level} demo (${model})`;
    frame.appendChild(iframe);
    loaded = true;
  }

  cover?.addEventListener("click", () => {
    cover.remove();
    mount();
  });

  buttons.forEach((btn) =>
    btn.addEventListener("click", () => {
      buttons.forEach((b) => b.setAttribute("aria-pressed", b === btn));
      model = btn.dataset.model;
      if (openLink) openLink.href = src();
      const thumb = cover?.querySelector("img");
      if (thumb) thumb.src = `/assets/thumbs/${model}-${block.dataset.level}.png`;
      if (loaded) mount();
    })
  );
});

// ---- Compare page ----
const compare = document.querySelector("[data-compare]");
if (compare) {
  const frames = {
    fable: compare.querySelector("#frame-fable"),
    opus: compare.querySelector("#frame-opus"),
  };
  const levelButtons = compare.querySelectorAll(".seg[data-role=level] button");
  const syncToggle = compare.querySelector("#sync-scroll");
  const mobileToggle = compare.querySelector("#mobile-width");
  let level = Math.min(7, Math.max(1, parseInt(new URLSearchParams(location.search).get("level"), 10) || 1));
  let isSyncing = false;

  function loadLevel(n) {
    level = n;
    for (const [model, holder] of Object.entries(frames)) {
      holder.querySelector("iframe")?.remove();
      const iframe = document.createElement("iframe");
      iframe.src = `/demos/${model}/level-${n}.html`;
      iframe.title = `Level ${n} (${model})`;
      iframe.addEventListener("load", () => attachSync(iframe, model));
      holder.appendChild(iframe);
    }
    levelButtons.forEach((b) => b.setAttribute("aria-pressed", b.dataset.level == n));
    history.replaceState(null, "", `?level=${n}`);
    const metricsEl = compare.querySelector("[data-compare-metrics]");
    if (metricsEl && window.renderLevelMetrics) metricsEl.innerHTML = window.renderLevelMetrics(n);
  }

  function attachSync(iframe, model) {
    const win = iframe.contentWindow;
    if (!win) return;
    win.addEventListener("scroll", () => {
      if (!syncToggle.checked || isSyncing) return;
      isSyncing = true;
      const doc = win.document.documentElement;
      const max = doc.scrollHeight - doc.clientHeight;
      const ratio = max > 0 ? win.scrollY / max : 0;
      const other = frames[model === "fable" ? "opus" : "fable"].querySelector("iframe")?.contentWindow;
      if (other) {
        const odoc = other.document.documentElement;
        const omax = odoc.scrollHeight - odoc.clientHeight;
        // behavior:'instant' overrides the demos' CSS smooth-scroll so the mirror tracks 1:1
        other.scrollTo({ top: ratio * omax, behavior: "instant" });
      }
      requestAnimationFrame(() => (isSyncing = false));
    }, { passive: true });
  }

  levelButtons.forEach((b) => b.addEventListener("click", () => loadLevel(parseInt(b.dataset.level, 10))));
  mobileToggle?.addEventListener("change", () => {
    compare.querySelectorAll(".compare-frame").forEach((f) => f.classList.toggle("mobile", mobileToggle.checked));
  });
  loadLevel(level);
}

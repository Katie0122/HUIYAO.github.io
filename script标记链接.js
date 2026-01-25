const searchInput = document.getElementById("searchInput");
const cards = Array.from(document.querySelectorAll(".card"));
const themeToggle = document.getElementById("themeToggle");
const moreBtn = document.getElementById("moreBtn");

function normalize(s) {
  return (s || "").trim().toLowerCase();
}

function filterCards(keyword) {
  const q = normalize(keyword);
  cards.forEach((card) => {
    const title = normalize(card.getAttribute("data-title"));
    const desc = normalize(
      card.querySelector(".card-desc")?.textContent || ""
    );
    const hit = !q || title.includes(q) || desc.includes(q);
    card.style.opacity = hit ? "1" : "0.25";
    card.style.pointerEvents = hit ? "auto" : "none";
    card.style.transform = hit ? "" : "scale(0.98)";
  });
}

searchInput?.addEventListener("input", (e) => {
  filterCards(e.target.value);
});

themeToggle?.addEventListener("click", () => {
  const dark = document.documentElement.classList.toggle("dark");
  if (dark) {
    document.documentElement.style.setProperty("--bg", "#0b1220");
    document.documentElement.style.setProperty("--bg-elevated", "#0f172a");
    document.documentElement.style.setProperty("--text-main", "#e5e7eb");
    document.documentElement.style.setProperty("--text-subtle", "#cbd5e1");
    document.documentElement.style.setProperty("--text-soft", "#94a3b8");
  } else {
    document.documentElement.style.removeProperty("--bg");
    document.documentElement.style.removeProperty("--bg-elevated");
    document.documentElement.style.removeProperty("--text-main");
    document.documentElement.style.removeProperty("--text-subtle");
    document.documentElement.style.removeProperty("--text-soft");
  }
});

moreBtn?.addEventListener("click", () => {
  const rect = moreBtn.getBoundingClientRect();
  const menu = document.createElement("div");
  menu.style.position = "fixed";
  menu.style.left = `${rect.left - 80}px`;
  menu.style.top = `${rect.bottom + 6}px`;
  menu.style.background = "#111827";
  menu.style.color = "#ffffff";
  menu.style.borderRadius = "12px";
  menu.style.boxShadow = "0 18px 40px rgba(15, 23, 42, 0.4)";
  menu.style.padding = "6px";
  menu.style.zIndex = "9999";
  const items = [
    { k: "refresh", label: "刷新" },
    { k: "sort", label: "排序" },
    { k: "filter", label: "筛选" },
  ];
  items.forEach((it) => {
    const btn = document.createElement("button");
    btn.textContent = it.label;
    btn.style.display = "block";
    btn.style.width = "140px";
    btn.style.textAlign = "left";
    btn.style.background = "transparent";
    btn.style.border = "0";
    btn.style.color = "#ffffff";
    btn.style.padding = "10px 12px";
    btn.style.borderRadius = "8px";
    btn.style.cursor = "pointer";
    btn.addEventListener("mouseenter", () => {
      btn.style.background = "rgba(255,255,255,0.06)";
    });
    btn.addEventListener("mouseleave", () => {
      btn.style.background = "transparent";
    });
    btn.addEventListener("click", () => {
      document.body.removeChild(menu);
    });
    menu.appendChild(btn);
  });
  const close = () => {
    if (document.body.contains(menu)) document.body.removeChild(menu);
    document.removeEventListener("click", close);
    window.removeEventListener("blur", close);
  };
  setTimeout(() => {
    document.addEventListener("click", close);
    window.addEventListener("blur", close);
  }, 0);
  document.body.appendChild(menu);
});

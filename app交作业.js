"use strict";

const openModal = document.getElementById("openModal");
const closeModal = document.getElementById("closeModal");
closeModal.addEventListener("click", hideModal);
const uploadModal = document.getElementById("uploadModal");
const fileInput = document.getElementById("fileInput");
const themeToggle = document.getElementById("themeToggle");

function showModal() {
  uploadModal.classList.add("active");
  uploadModal.setAttribute("aria-hidden", "false");
}

function hideModal() {
  uploadModal.classList.remove("active");
  uploadModal.setAttribute("aria-hidden", "true");
}

openModal.addEventListener("click", showModal);
closeModal.addEventListener("click", hideModal);
uploadModal.querySelector(".overlay").addEventListener("click", hideModal);

document.querySelectorAll(".upload-section .primary").forEach((btn) => {
  btn.addEventListener("click", () => {
    const target = btn.getAttribute("data-target");
    fileInput.setAttribute("data-target", target);
    fileInput.click();
  });
});

const LIMIT_BYTES = 50 * 1024 * 1024;
const allowTypes = {
  design: ["pdf", "jpg", "jpeg", "mov", "mp4"],
  doc: ["pdf", "jpg", "jpeg", "docs", "docx"]
};

function formatBytes(bytes) {
  if (bytes < 1024) return bytes + "B";
  if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + "KB";
  return (bytes / 1024 / 1024).toFixed(1) + "MB";
}

function createRow(file, target) {
  const row = document.createElement("div");
  row.className = "file-row";
  const name = document.createElement("div");
  name.className = "file-name";
  name.textContent = file.name;
  const meta = document.createElement("div");
  meta.className = "file-meta";
  meta.textContent = formatBytes(file.size);
  const remove = document.createElement("button");
  remove.className = "file-remove";
  remove.textContent = "删除";
  remove.addEventListener("click", () => {
    row.remove();
  });
  const left = document.createElement("div");
  left.style.display = "flex";
  left.style.alignItems = "center";
  left.style.gap = "8px";
  left.append(name, meta);
  row.append(left, remove);
  return row;
}

fileInput.addEventListener("change", (e) => {
  const target = fileInput.getAttribute("data-target") || "design";
  const files = Array.from(e.target.files || []);
  if (!files.length) return;
  const list = document.querySelector(`#${target}Upload .file-list`);
  const ext = (files[0].name.split(".").pop() || "").toLowerCase();
  if (!allowTypes[target].includes(ext)) {
    alert(`文件格式不支持：${ext}`);
    return;
  }
  if (files[0].size > LIMIT_BYTES) {
    alert("文件大小超过50M");
    return;
  }
  list.querySelectorAll(".file-row").forEach((r) => r.remove());
  list.append(createRow(files[0], target));
  e.target.value = "";
});

themeToggle.addEventListener("click", () => {
  const isDark = document.documentElement.classList.toggle("dark");
  themeToggle.textContent = isDark ? "☀️" : "🌙";
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") hideModal();
});

import startSnow from "./startSnow";

export default function startMainAnimation() {
  const app = document.getElementById("app");
  const introSection = document.getElementById("intro-section") as HTMLElement;
  introSection.style.display = "none";
  const main = document.createElement("main");
  const border = document.createElement("section");
  border.classList.add("border");
  const container = document.createElement("div");
  container.classList.add("container");
  const merry = document.createElement("p");
  merry.textContent = "MERRY";
  merry.classList.add("merry");
  const christmas = document.createElement("p");
  christmas.textContent = "Christmas";
  christmas.classList.add("christmas");
  const other = document.createElement("p");
  other.classList.add("other");
  other.textContent = "AND HAPPY NEW YEAR";

  app?.appendChild(main);
  main.appendChild(border);
  border.appendChild(container);
  container.appendChild(merry);
  container.appendChild(christmas);
  container.appendChild(other);
  startSnow();
}

const currentURL = window.location.href;
const container = document.getElementById("question-pagination");
const hiddenLinks = document.querySelectorAll("#page-links a");

hiddenLinks.forEach(link => {
  const pageNumber = link.textContent;
  const url = link.href;

  const a = document.createElement("a");
  a.href = url;
  a.textContent = pageNumber;

  if (currentURL === url || currentURL === decodeURIComponent(url)) {
    a.classList.add("active");
  }

  container.appendChild(a);
});

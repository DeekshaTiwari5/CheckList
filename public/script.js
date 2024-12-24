const fetchBtn = document.getElementById("fetch-btn");
const resultsTable = document.getElementById("checklist-results");

fetchBtn.addEventListener("click", async () => {
  resultsTable.innerHTML = '<tr><td colspan="2">Loading...</td></tr>';
  try {
    const response = await fetch("/api/checklist/evaluate");
    const { results } = await response.json();

    resultsTable.innerHTML = results
      .map(
        (result) => `
        <tr>
          <td>${result.description}</td>
          <td class="status-${result.status.toLowerCase()}">${
          result.status
        }</td>
        </tr>
      `
      )
      .join("");
  } catch (error) {
    resultsTable.innerHTML =
      '<tr><td colspan="2">Error loading results.</td></tr>';
  }
});

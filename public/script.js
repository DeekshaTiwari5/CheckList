const fetchBtn = document.getElementById("fetch-btn");
const resultsTable = document.getElementById("checklist-results");

fetchBtn.addEventListener("click", async () => {
  resultsTable.innerHTML = '<tr><td colspan="2">🔄Loading...</td></tr>';
  try {
    const response = await fetch("/api/checklist/evaluate");

    // Check for HTTP errors
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const { results } = await response.json();

    // Generate table rows for results
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
    console.error("Error fetching data:", error.message);
    resultsTable.innerHTML = `
      <tr>
        <td colspan="2" style="color: red;">Error loading results: ${error.message}</td>
      </tr>
    `;
  }
});

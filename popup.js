document.getElementById("saveBtn").addEventListener("click", () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    const currentTab = tabs[0];
    if (
      currentTab.url.startsWith("file://") &&
      currentTab.url.endsWith(".pdf")
    ) {
      const pdfEntry = {
        name: decodeURIComponent(currentTab.url.split("/").pop()),
        url: currentTab.url,
      };
      chrome.storage.local.get({ pdfs: [] }, (result) => {
        const updated = result.pdfs;
        updated.push(pdfEntry);
        chrome.storage.local.set({ pdfs: updated }, renderList);
      });
    } else {
      alert("This is not a local PDF file.");
    }
  });
});

function renderList() {
  chrome.storage.local.get({ pdfs: [] }, (result) => {
    const list = document.getElementById("pdfList");
    list.innerHTML = "";

    if (result.pdfs.length === 0) {
      list.innerHTML = '<div class="empty-message">No saved PDFs yet.</div>';
      return;
    }

    result.pdfs.forEach((pdf, index) => {
      const item = document.createElement("div");
      item.className = "pdf-item";
      const link = document.createElement("a");
      link.className = "pdf-link";
      link.href = pdf.url;
      link.target = "_blank";
      link.textContent = pdf.name;
      const deleteBtn = document.createElement("button");
      deleteBtn.className = "delete-btn bi bi-trash-fill";
      deleteBtn.title = "Delete";
      deleteBtn.addEventListener("click", () => deletePDF(index));
      item.appendChild(link);
      item.appendChild(deleteBtn);
      list.appendChild(item);
    });
  });
}

function deletePDF(index) {
  chrome.storage.local.get({ pdfs: [] }, (result) => {
    const updated = result.pdfs;
    updated.splice(index, 1);
    chrome.storage.local.set({ pdfs: updated }, renderList);
  });
}

window.deletePDF = deletePDF;
renderList();

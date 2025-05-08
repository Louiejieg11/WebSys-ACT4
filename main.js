let books = [];

fetch('https://louiejieg11.github.io/Final_Activity_Websys/data.json')
  .then(response => response.json())
  .then(data => {
    books = data;
  });

function displayBooks(bookList) {
  const tableBody = document.querySelector("table tbody");
  tableBody.innerHTML = "";

  bookList.forEach(book => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${book.title}</td>
      <td>${book.author}</td>
      <td>${book.genre}</td>
      <td>${book.status}</td>
    `;
    tableBody.appendChild(row);
  });
}

document.getElementById("searchButton").addEventListener("click", () => {
  const search = document.getElementById("searchInput").value.toLowerCase();
  const filtered = books.filter(book =>
    book.title.toLowerCase().includes(search) ||
    book.author.toLowerCase().includes(search) ||
    book.genre.toLowerCase().includes(search)
  );
  displayBooks(filtered);
});
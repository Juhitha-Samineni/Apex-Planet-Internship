const products = [
  { name: "Laptop", category: "Electronics", rating: 4.5 },
  { name: "Novel", category: "Books", rating: 3.8 },
  { name: "Headphones", category: "Electronics", rating: 4.2 },
  { name: "Comics", category: "Books", rating: 4.0 }
];

function displayProducts(filtered = products) {
  const list = document.getElementById("productList");
  list.innerHTML = "";
  filtered.forEach(p => {
    const li = document.createElement("li");
    li.textContent = `${p.name} - ${p.category} - ⭐${p.rating}`;
    list.appendChild(li);
  });
}

function filterProducts() {
  const cat = document.getElementById("category").value;
  const filtered = cat === "all" ? products : products.filter(p => p.category === cat);
  displayProducts(filtered);
}

function sortProducts() {
  const sort = document.getElementById("sort").value;
  let sorted = [...products];
  sorted.sort((a, b) => sort === "high" ? b.rating - a.rating : a.rating - b.rating);
  displayProducts(sorted);
}

window.onload = () => displayProducts();

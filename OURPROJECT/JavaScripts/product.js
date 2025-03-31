/**
 * This script adds the following features:
 * 1. Live Search/Filter: filters products by name, year, or description.
 * 2. Sort by Price: sorts products in ascending or descending order.
 * 3. Buy and Return functionality: adds/removes a product from the purchased list and notifies the user.
 */

document.addEventListener("DOMContentLoaded", () => {
    // --- References to DOM elements ---
    const searchInput = document.getElementById("searchInput");
    const searchBtn = document.getElementById("searchBtn");
    const sortSelect = document.getElementById("sortSelect");
    const productsGrid = document.getElementById("productsGrid");
    const productCards = Array.from(document.querySelectorAll(".product-card"));
    const purchasedList = document.getElementById("purchasedList");
    const notification = document.getElementById("notification");
  
    // Array to hold purchased items (store product names)
    let purchasedItems = [];
  
    // --- Function: Filter Products ---
    function filterProducts() {
      const query = searchInput.value.toLowerCase().trim();
  
      productCards.forEach((card) => {
        const name = card.dataset.name.toLowerCase();
        const year = card.dataset.year.toLowerCase();
        const desc = card.dataset.desc.toLowerCase();
  
        if (name.includes(query) || year.includes(query) || desc.includes(query)) {
          card.style.display = "flex"; // Show card
        } else {
          card.style.display = "none"; // Hide card
        }
      });
    }
  
    searchBtn.addEventListener("click", filterProducts);
    searchInput.addEventListener("keyup", (e) => {
      if (e.key === "Enter") filterProducts();
    });
  
    // --- Function: Sort Products ---
    function sortProducts(order) {
      const sorted = [...productCards].sort((a, b) => {
        const priceA = parseFloat(a.dataset.price);
        const priceB = parseFloat(b.dataset.price);
        return order === "asc" ? priceA - priceB : order === "desc" ? priceB - priceA : 0;
      });
  
      productsGrid.innerHTML = "";
      sorted.forEach((card) => productsGrid.appendChild(card));
    }
  
    sortSelect.addEventListener("change", (e) => {
      sortProducts(e.target.value);
    });
  
    // --- Function: Update Purchased Items UI ---
    function updatePurchasedItemsUI() {
      purchasedList.innerHTML = "";
      if (purchasedItems.length === 0) {
        const li = document.createElement("li");
        li.textContent = "No items purchased yet.";
        purchasedList.appendChild(li);
      } else {
        purchasedItems.forEach((item) => {
          const li = document.createElement("li");
          li.textContent = item;
          purchasedList.appendChild(li);
        });
      }
    }
  
    // --- Function: Show Notification ---
    function showNotification(message) {
      notification.textContent = message;
      notification.style.display = "block";
      setTimeout(() => {
        notification.style.display = "none";
      }, 3000);
    }
  
    // --- Buy and Return Button Functionality ---
    productCards.forEach((card) => {
      const buyBtn = card.querySelector(".buy-btn");
      const returnBtn = card.querySelector(".return-btn");
      const productName = card.dataset.name;
  
      buyBtn.addEventListener("click", () => {
        if (!purchasedItems.includes(productName)) {
          purchasedItems.push(productName);
          updatePurchasedItemsUI();
          showNotification(`Added "${productName}" to your purchases.`);
        } else {
          showNotification(`"${productName}" is already purchased.`);
        }
      });
  
      returnBtn.addEventListener("click", () => {
        if (purchasedItems.includes(productName)) {
          purchasedItems = purchasedItems.filter((name) => name !== productName);
          updatePurchasedItemsUI();
          showNotification(`Removed "${productName}" from your purchases.`);
        } else {
          showNotification(`"${productName}" was not purchased.`);
        }
      });
    });
  });
  
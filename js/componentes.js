 const products = {
            featured: [{
                id: 1,
                name: "Vestido Floral",
                price: 159.90,
                image: "https://placehold.co/500x650?text=Vestido+Floral",
                isNew: true,
                rating: 4,
                reviews: 124
            }],
            promotional: [{
                id: 5,
                name: "Kit 2 Camisetas",
                price: 99.90,
                oldPrice: 149.90,
                discount: 30,
                image: "https://placehold.co/500x650?text=Kit+Camisetas",
                rating: 5,
                reviews: 342
            }]
        };

        function renderAllProducts() {
            const featuredContainer = document.getElementById('featured-products');
            const promotionalContainer = document.getElementById('promotional-products');
            if (featuredContainer) {
                products.featured.forEach(product => {
                    const productDiv = document.createElement('div');
                    productDiv.className = 'product-card bg-white rounded-lg overflow-hidden';
                    productDiv.innerHTML = `
                        <div class="relative group">
                            <img src="${product.image}" alt="${product.name}" class="w-full h-64 object-cover" />
                            ${product.isNew ? '<span class="promo-badge">Novo</span>' : ''}
                            <button class="absolute bottom-3 left-1/2 transform -translate-x-1/2 bg-pink-600 text-white px-4 py-1 rounded-full opacity-0 group-hover:opacity-100 transition duration-300">
                                Comprar
                            </button>
                        </div>
                        <div class="p-4">
                            <h3 class="font-semibold">${product.name}</h3>
                            <p class="text-gray-600 text-sm">R$ ${product.price.toFixed(2)}</p>
                        </div>
                    `;
                    featuredContainer.appendChild(productDiv);
                });
            }
        }
   
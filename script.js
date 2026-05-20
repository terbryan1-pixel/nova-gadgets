
// when searching, hide all page sections except the products grid
let accessoriesOpen = false;

function togglePageVisibility(showOnlyProducts) {
    // hide or show all sections plus header
    const sections = document.querySelectorAll('section');
    const header = document.querySelector('header');
    const footer = document.querySelector('footer');
    if (header) {
        header.style.display = showOnlyProducts ? 'none' : '';
    }
    if (footer) {
        footer.style.display = showOnlyProducts ? 'none' : '';
    }
    // when showing only products, hide non-products sections
    sections.forEach(sec => {
        if (showOnlyProducts) {
            if (sec.id === 'products') sec.style.display = '';
            else sec.style.display = 'none';
        } else {
            sec.style.display = '';
        }
    });
}

function setAccessoriesOpen(open) {
    accessoriesOpen = !!open;
    const allCards = document.querySelectorAll('.product-card');
    allCards.forEach(card => {
        const isAccessory = card.dataset && card.dataset.category === 'Accessory';
        if (isAccessory) {
            card.style.display = accessoriesOpen ? '' : 'none';
        } else {
            // non-accessories follow hidden-product class or default
            if (card.classList.contains('hidden-product')) {
                card.style.display = 'none';
            } else {
                card.style.display = '';
            }
        }
    });
    const btn = document.getElementById('toggleAccessoriesBtn');
    if (btn) btn.textContent = accessoriesOpen ? 'Hide Accessories' : 'Accessories';
}

// Helper: normalize category strings used across the app
function normalizeCategory(cat) {
    if (!cat) return '';
    const c = String(cat).toLowerCase();
    if (c.includes('accessor')) return 'Accessory';
    return cat;
}

// Levenshtein distance for basic fuzzy matching
function levenshtein(a, b) {
    if (a === b) return 0;
    const al = a.length, bl = b.length;
    if (al === 0) return bl;
    if (bl === 0) return al;
    const matrix = Array.from({ length: al + 1 }, () => new Array(bl + 1).fill(0));
    for (let i = 0; i <= al; i++) matrix[i][0] = i;
    for (let j = 0; j <= bl; j++) matrix[0][j] = j;
    for (let i = 1; i <= al; i++) {
        for (let j = 1; j <= bl; j++) {
            const cost = a[i - 1] === b[j - 1] ? 0 : 1;
            matrix[i][j] = Math.min(
                matrix[i - 1][j] + 1,
                matrix[i][j - 1] + 1,
                matrix[i - 1][j - 1] + cost
            );
        }
    }
    return matrix[al][bl];
}

// Return true if `text` matches `query` using substring or fuzzy token matching.
function matchesQuery(text, query) {
    if (!text || !query) return false;
    const t = String(text).toLowerCase();
    const q = String(query).toLowerCase().trim();
    if (t.includes(q)) return true;
    const qTokens = q.split(/\s+/).filter(Boolean);
    const tWords = t.split(/[^a-z0-9]+/).filter(Boolean);
    // require that every token matches at least one word (substring or small edit distance)
    return qTokens.every(token => {
        // try substring match first
        if (tWords.some(w => w.includes(token))) return true;
        // otherwise allow small edit distance on short tokens
        return tWords.some(w => {
            const limit = token.length <= 4 ? 1 : token.length <= 8 ? 2 : 3;
            return levenshtein(w, token) <= limit;
        });
    });
}

// expose helper for search-results page
window.matchesQuery = matchesQuery;

// Ensure existing static `.product-card` nodes have a `data-category` attribute
function assignDataCategoryToStaticCards() {
    if (!window.products) return;
    document.querySelectorAll('.product-card').forEach(card => {
        if (card.dataset && card.dataset.category) return; // already set
        const titleEl = card.querySelector('.product-title');
        if (!titleEl) return;
        const title = titleEl.textContent.trim();
        const prod = window.products.find(p => p.title === title);
        if (prod && prod.category) {
            card.dataset.category = normalizeCategory(prod.category);
        }
    });
}

// initialize accessories collapsed
setTimeout(() => setAccessoriesOpen(false), 0);

// toggle button listener (if present)
const accessoriesBtn = document.getElementById('toggleAccessoriesBtn');
if (accessoriesBtn) {
    accessoriesBtn.addEventListener('click', () => setAccessoriesOpen(!accessoriesOpen));
}

function setupSearch(inputId) {
    const searchInput = document.getElementById(inputId);
    if (!searchInput) return;
    const products = document.querySelectorAll(".product-card");
    const noResults = document.getElementById("noResultsMessage");

    searchInput.addEventListener("keyup", function () {
        let filter = this.value.toLowerCase();
        let visibleCount = 0;

        products.forEach(product => {
            let title = product.querySelector(".product-title").textContent.toLowerCase();

            if (filter === "") {
                // Show only normal products when search is empty
                if (!product.classList.contains("hidden-product")) {
                    product.style.display = "block";
                } else {
                    product.style.display = "none";
                }
            } else {
                if (matchesQuery(title, filter)) {
                    product.style.display = "block";
                    visibleCount++;
                } else {
                    product.style.display = "none";
                }
            }
        });

        // toggle page sections visibility based on filter
        if (filter !== "") {
            togglePageVisibility(true);
            // keep header visible so search input doesn't disappear
            const header = document.querySelector('header');
            if (header) header.style.display = '';
            // when searching, allow matching accessory cards to appear even if collapsed
            // (the loop above already sets matching accessory cards to display:block)
        } else {
            togglePageVisibility(false);
            // restore accessory visibility according to toggle state when search cleared
            setAccessoriesOpen(accessoriesOpen);
        }

        if (noResults) {
            if (filter !== "" && visibleCount === 0) {
                noResults.style.display = "block";
            } else {
                noResults.style.display = "none";
            }
        }
    });
}

setupSearch("searchInput");
setupSearch("searchInputMobile");

function setupSearchRedirect(inputId) {
    const searchInput = document.getElementById(inputId);
    if (!searchInput) return;

    searchInput.addEventListener("keyup", function (e) {
        if (e.key === "Enter") { // trigger search on Enter
            const query = searchInput.value.trim();
            if (query !== "") {
                window.location.href = `search-results.html?q=${encodeURIComponent(query)}`;
            }
        }
    });
}

setupSearchRedirect("searchInput");
setupSearchRedirect("searchInputMobile");

function filterCategory(category) {
    const container = document.getElementById("searchResults") || document.querySelector(".products-grid");
    if (!container) return;
    container.innerHTML = ""; // clear current products

    let found = 0;

    products.forEach(product => {
        if (category === "All" || product.category === category) {
            found++;
            const div = document.createElement('div');
            div.classList.add('product-card');
            div.innerHTML = `
                <div class="product-image">
                    <img src="${product.img}" />
                    <span class="product-badge">${product.badge}</span>
                </div>
                <div class="product-content">
                    <h3 class="product-title">${product.title}</h3>
                    <div class="product-footer">
                        <span class="product-price">${product.price}</span>
                        <button class="btn-buy">Buy</button>
                    </div>
                </div>
            `;
            // set canonical data-category for runtime checks (e.g. openAccessoriesView)
            if (div.dataset) div.dataset.category = normalizeCategory(product.category);
            container.appendChild(div);
        }
    });

    if (found === 0) {
        const noResults = document.getElementById("noResultsMessage");
        if (noResults) noResults.style.display = "block";
    } else {
        const noResults = document.getElementById("noResultsMessage");
        if (noResults) noResults.style.display = "none";
    }
}

// WhatsApp Buy button handler
const WHATSAPP_NUMBER = '256753719042'; // digits only for wa.me
function buildWhatsAppUrl(message) {
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

function setupWhatsAppBuyButtons() {
    const buyButtons = document.querySelectorAll('.btn-buy');

    buyButtons.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Previously we included the product title in the message, but the requirement
            // is to send a simple fixed text and go directly to WhatsApp.
            const message = "Hello NOVA, can i get this item?";
            const whatsappURL = buildWhatsAppUrl(message);
             
            // Navigate straight to WhatsApp in the same tab so it feels immediate
            window.location.href = whatsappURL;
        });
    });
}

// Initialize WhatsApp buttons when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () {
        assignDataCategoryToStaticCards();
        setupWhatsAppBuyButtons();
        setupProductDetailsModal();
        setupShopNow();
    });
} else {
    assignDataCategoryToStaticCards();
    setupWhatsAppBuyButtons();
    setupProductDetailsModal();
    setupShopNow();
}

function setupShopNow() {
    const shopBtn = document.getElementById('shopNowBtn');
    const servicesBtn = document.getElementById('ourServicesBtn');

    if (shopBtn) {
        shopBtn.addEventListener('click', (e) => {
            e.preventDefault();
            // If other flows hid sections (search/accessories view), restore full page first.
            if (typeof restoreAllSections === 'function') {
                restoreAllSections();
            }

            const productsSection = document.getElementById('products');
            if (!productsSection) return;

            // Prepare slide-in animation on the products grid after scrolling.
            productsSection.classList.remove('slide-in-active');
            productsSection.classList.add('slide-in-ready');

            productsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });

            // Trigger animation after a short delay so it feels like it slides in.
            window.setTimeout(() => {
                productsSection.classList.add('slide-in-active');
                productsSection.classList.remove('slide-in-ready');

                const grid = productsSection.querySelector('.products-grid');
                if (grid) {
                    const onEnd = () => {
                        productsSection.classList.remove('slide-in-active');
                        grid.removeEventListener('animationend', onEnd);
                    };
                    grid.addEventListener('animationend', onEnd);
                }
            }, 200);
        });
    }

    if (servicesBtn) {
        servicesBtn.addEventListener('click', (e) => {
            e.preventDefault();
            if (typeof restoreAllSections === 'function') {
                restoreAllSections();
            }
            const servicesSection = document.getElementById('services');
            if (servicesSection) servicesSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    }
}

function normalizeTitleKey(title) {
    return String(title || '').trim().toLowerCase();
}

function getProductByTitle(title) {
    if (!window.products || !Array.isArray(window.products)) return null;
    const key = normalizeTitleKey(title);
    return window.products.find(p => normalizeTitleKey(p.title) === key) || null;
}

function ensureProductModalDom() {
    let overlay = document.getElementById('productModalOverlay');
    if (overlay) return overlay;

    overlay = document.createElement('div');
    overlay.id = 'productModalOverlay';
    overlay.className = 'product-modal-overlay';
    overlay.innerHTML = `
        <div class="product-modal" role="dialog" aria-modal="true" aria-labelledby="productModalTitle">
            <div class="product-modal-header">
                <div>
                    <div id="productModalTitle" class="product-modal-title"></div>
                </div>
                <button class="product-modal-close" type="button" aria-label="Close">✕</button>
            </div>
            <div class="product-modal-body">
                <div>
                    <div class="product-modal-main-image">
                        <img id="productModalMainImg" alt="" />
                    </div>
                    <div id="productModalThumbs" class="product-modal-thumbs"></div>
                </div>
                <div class="product-modal-meta">
                    <div id="productModalBadge" class="product-modal-badge" style="display:none;"></div>
                    <div id="productModalPrice" class="product-modal-price"></div>
                    <div id="productModalOffer" class="product-modal-offer" style="display:none;"></div>
                    <div id="productModalDesc" class="product-modal-desc"></div>
                    <div class="product-modal-specs">
                        <h4>Details</h4>
                        <ul id="productModalSpecs"></ul>
                    </div>
                    <div class="product-modal-actions">
                        <a id="productModalWhatsApp" class="btn-whatsapp" target="_blank" rel="noopener noreferrer">WhatsApp</a>
                    </div>
                </div>
            </div>
        </div>
    `;

    document.body.appendChild(overlay);
    return overlay;
}

function openProductModal(product, fallback) {
    const overlay = ensureProductModalDom();
    const closeBtn = overlay.querySelector('.product-modal-close');
    let escHandler;

    const title = (product && product.title) || (fallback && fallback.title) || 'Product';
    const price = (product && product.price) || (fallback && fallback.price) || '';
    const badge = (product && product.badge) || (fallback && fallback.badge) || '';
    const descBase = (product && product.description) || 'More details available on request. Tap WhatsApp to ask about colors, storage, and battery condition.';
    const isPhone = (product && product.category && !String(product.category).toLowerCase().includes('accessor')) ||
        (fallback && fallback.category && !String(fallback.category).toLowerCase().includes('accessor'));
    const desc = descBase;
    const images = (product && Array.isArray(product.images) && product.images.length ? product.images : null) || [
        (product && product.img) || (fallback && fallback.img) || ''
    ].filter(Boolean);

    const titleEl = document.getElementById('productModalTitle');
    const priceEl = document.getElementById('productModalPrice');
    const badgeEl = document.getElementById('productModalBadge');
    const offerEl = document.getElementById('productModalOffer');
    const descEl = document.getElementById('productModalDesc');
    const specsEl = document.getElementById('productModalSpecs');
    const mainImgEl = document.getElementById('productModalMainImg');
    const thumbsEl = document.getElementById('productModalThumbs');
    const whatsappEl = document.getElementById('productModalWhatsApp');

    if (titleEl) titleEl.textContent = title;
    if (priceEl) priceEl.textContent = price;
    if (descEl) descEl.textContent = desc;

    if (offerEl) {
        if (isPhone) {
            offerEl.style.display = '';
            offerEl.textContent = 'Free accessories and settings included with every purchased phone (cover, screen guard, and charger).';
        } else {
            offerEl.style.display = 'none';
            offerEl.textContent = '';
        }
    }

    if (badgeEl) {
        if (badge) {
            badgeEl.style.display = '';
            badgeEl.textContent = badge;
        } else {
            badgeEl.style.display = 'none';
            badgeEl.textContent = '';
        }
    }

    if (specsEl) {
        specsEl.innerHTML = '';
        const specs = [];
        if (product && product.colors && Array.isArray(product.colors) && product.colors.length) {
            specs.push({ label: 'Colors', value: product.colors.join(', ') });
        }
        if (product && product.storages && Array.isArray(product.storages) && product.storages.length) {
            specs.push({ label: 'Storage', value: product.storages.join(', ') });
        }
        if (product && product.batteryCondition) {
            specs.push({ label: 'Battery', value: product.batteryCondition });
        }
        if (product && product.category) {
            specs.push({ label: 'Category', value: product.category });
        } else if (fallback && fallback.category) {
            specs.push({ label: 'Category', value: fallback.category });
        }
        if (specs.length === 0) {
            specs.push({ label: 'Info', value: 'Ask us for colors, storage, and battery condition.' });
        }
        specs.forEach(s => {
            const li = document.createElement('li');
            li.textContent = `${s.label}: ${s.value}`;
            specsEl.appendChild(li);
        });
    }

    function setMainImage(src) {
        if (mainImgEl) {
            mainImgEl.src = src;
            mainImgEl.alt = title;
        }
    }

    if (thumbsEl) {
        thumbsEl.innerHTML = '';
        images.forEach((src, idx) => {
            const btn = document.createElement('button');
            btn.type = 'button';
            btn.className = 'product-modal-thumb' + (idx === 0 ? ' active' : '');
            btn.innerHTML = `<img alt="" src="${src}">`;
            btn.addEventListener('click', () => {
                setMainImage(src);
                thumbsEl.querySelectorAll('.product-modal-thumb').forEach(el => el.classList.remove('active'));
                btn.classList.add('active');
            });
            thumbsEl.appendChild(btn);
        });
    }

    if (images[0]) setMainImage(images[0]);

    if (whatsappEl) {
        const message = `Hello NOVA, I need more details about: ${title}. Colors/storages/battery condition?`;
        whatsappEl.href = buildWhatsAppUrl(message);
    }

    function close() {
        overlay.classList.remove('active');
        document.body.style.overflow = '';
        if (escHandler) document.removeEventListener('keydown', escHandler);
    }

    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';

    if (closeBtn) closeBtn.onclick = close;
    overlay.onclick = (e) => {
        if (e.target === overlay) close();
    };
    escHandler = function (ev) {
        if (ev.key === 'Escape') {
            close();
        }
    };
    document.addEventListener('keydown', escHandler);

    // focus close for accessibility
    setTimeout(() => closeBtn && closeBtn.focus && closeBtn.focus(), 0);
}

function setupProductDetailsModal() {
    ensureProductModalDom();

    document.addEventListener('click', function (e) {
        const buyBtn = e.target && e.target.closest ? e.target.closest('.btn-buy') : null;
        if (buyBtn) return; // keep existing WhatsApp buy behavior

        const card = e.target && e.target.closest ? e.target.closest('.product-card') : null;
        if (!card) return;

        const titleEl = card.querySelector('.product-title');
        const title = titleEl ? titleEl.textContent.trim() : '';
        const priceEl = card.querySelector('.product-price');
        const imgEl = card.querySelector('.product-image img');
        const badgeEl = card.querySelector('.product-badge');

        const fallback = {
            title,
            price: priceEl ? priceEl.textContent.trim() : '',
            img: imgEl ? imgEl.getAttribute('src') : '',
            badge: badgeEl ? badgeEl.textContent.trim() : '',
            category: (card.dataset && card.dataset.category) ? card.dataset.category : ''
        };

        const product = getProductByTitle(title);
        openProductModal(product, fallback);
    });
}

// Service "Learn More" toggle behavior
function setupServiceDetailsToggles() {
    const links = document.querySelectorAll('.service-link');

    function closeAllDetails() {
        document.querySelectorAll('.service-details').forEach(d => d.style.display = 'none');
    }

    links.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const card = this.closest('.service-card');
            if (!card) return;
            const details = card.querySelector('.service-details');
            if (!details) return;

            // close others and toggle this one
            closeAllDetails();
            details.style.display = details.style.display === 'none' ? 'block' : 'none';
            if (details.style.display === 'block') {
                details.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        });
    });

    // close buttons
    document.querySelectorAll('.service-details-close').forEach(btn => {
        btn.addEventListener('click', function () {
            const details = this.closest('.service-details');
            if (details) details.style.display = 'none';
        });
    });
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', setupServiceDetailsToggles);
} else {
    setupServiceDetailsToggles();
}

// helper: hide all sections except the products section
function showOnlyProductsSection() {
    document.querySelectorAll('section').forEach(sec => {
        if (sec.id !== 'products') sec.style.display = 'none';
    });
}

// helper: restore every section to default display and reset product filters
function restoreAllSections() {
    document.querySelectorAll('section').forEach(sec => sec.style.display = '');
    restoreProductsView();
}

// Open accessories view: show only accessory product-cards and scroll to products
function openAccessoriesView() {
    // move products section immediately below header by hiding other sections
    showOnlyProductsSection();
    const productsSection = document.getElementById('products');
    if (productsSection) productsSection.style.display = '';

    const allCards = document.querySelectorAll('.product-card');
    allCards.forEach(card => {
        if (card.dataset && card.dataset.category === 'Accessory') {
            card.style.display = '';
        } else {
            card.style.display = 'none';
        }
    });

    // ensure accessoriesOpen state
    accessoriesOpen = true;
    const btn = document.getElementById('toggleAccessoriesBtn');
    if (btn) btn.textContent = 'Hide Accessories';

    // scroll to products
    const productsGrid = document.querySelector('.products-grid');
    if (productsGrid) productsGrid.scrollIntoView({ behavior: 'smooth' });
}

// Restore full products view
function restoreProductsView() {
    const allCards = document.querySelectorAll('.product-card');
    allCards.forEach(card => {
        if (card.classList.contains('hidden-product')) {
            card.style.display = 'none';
        } else {
            card.style.display = '';
        }
    });
    accessoriesOpen = false;
    const btn = document.getElementById('toggleAccessoriesBtn');
    if (btn) btn.textContent = 'Accessories';
}

// Make any visible "Accessories" text open accessories view when clicked
function setupAccessoriesOpenLinks() {
    // include nav links so header/mobile nav activate in-page accessories view
    const selectors = ['.nav-desktop .nav-link', '.nav-mobile .nav-link', '.service-title', '.footer-links li', '.category-filters button', '.products-controls a', '.products-controls button'];
    selectors.forEach(sel => {
        document.querySelectorAll(sel).forEach(el => {
            if (el.textContent && el.textContent.toLowerCase().includes('accessories')) {
                el.style.cursor = 'pointer';
                // If it's an anchor, set anchor href and attach click to open in-page view
                if (el.tagName && el.tagName.toLowerCase() === 'a') {
                    el.href = '#accessories';
                    el.addEventListener('click', (e) => {
                        e.preventDefault();
                        openAccessoriesView();
                    });
                } else {
                    el.addEventListener('click', (e) => {
                        e.preventDefault();
                        openAccessoriesView();
                    });
                }
            }
        });
    });
}

// clicking the Home link should restore full view
function setupHomeLink() {
    document.querySelectorAll('.nav-desktop .nav-link, .nav-mobile .nav-link').forEach(el => {
        if (el.textContent && el.textContent.toLowerCase().trim() === 'home') {
            el.addEventListener('click', e => {
                e.preventDefault();
                restoreAllSections();
            });
        }
    });
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', setupAccessoriesOpenLinks);
    document.addEventListener('DOMContentLoaded', setupHomeLink);
} else {
    setupAccessoriesOpenLinks();
    setupHomeLink();
}

// Open phones view: show only phone product-cards (non-accessory) and scroll to products
function openPhonesView() {
    // hide other sections so products appear at top
    showOnlyProductsSection();
    const productsSection = document.getElementById('products');
    if (productsSection) productsSection.style.display = '';

    const allCards = document.querySelectorAll('.product-card');
    allCards.forEach(card => {
        // treat cards without data-category or with category !== 'Accessory' as phones
        if (!card.dataset || card.dataset.category !== 'Accessory') {
            card.style.display = '';
        } else {
            card.style.display = 'none';
        }
    });

    // scroll to products grid
    const productsGrid = document.querySelector('.products-grid');
    if (productsGrid) productsGrid.scrollIntoView({ behavior: 'smooth' });
}

// Make any visible "Phones" text open phones view when clicked
function setupPhonesOpenLinks() {
    const selectors = ['.nav-desktop .nav-link', '.nav-mobile .nav-link', '.service-title', '.footer-links li', '.category-filters button'];
    selectors.forEach(sel => {
        document.querySelectorAll(sel).forEach(el => {
            if (el.textContent && el.textContent.toLowerCase().includes('phones') && !el.textContent.toLowerCase().includes('new')) {
                el.style.cursor = 'pointer';
                el.addEventListener('click', (e) => {
                    e.preventDefault();
                    openPhonesView();
                });
            }
        });
    });
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', setupPhonesOpenLinks);
} else {
    setupPhonesOpenLinks();
}

// (old header accessories navigation removed — header anchors are handled by setupAccessoriesOpenLinks)

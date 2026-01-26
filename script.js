/* ================== CONFIG ================== */
const API_URL =
  "https://script.google.com/macros/s/AKfycbyIvfwILoqaBihI6nxSTV31-rZGooS7Ir703h_3Amya8tTCrUUxmcdgk_2SYrQuq_ZKOw/exec";

const CONTACT = {
  phone: "01284343786",
  email: "mariamasaadlabib@gmail.com",
  location_en: "Alexandria, Egypt",
  location_ar: "الإسكندرية، مصر",
};

// سيتم تحميلها من Google Sheet
let PRODUCTS = [];

/* ================== I18N ================== */
const I18N = {
  en: {
    brandTag: "Science Meets Nature",
    navHome: "Home",
    navProducts: "Products",
    navAbout: "About",
    navScience: "Science & Ingredients",
    navOrder: "Order",
    navContact: "Contact",
    whatsAppBtn: "WhatsApp",

    heroPill: "Doctor-led • Transparent Ingredients • Pharma-grade",
    heroTitle: "Natural + Pharmaceutical Care, Backed by Science",
    heroDesc:
      "Pharmaglow by Dr. Mariam Asaad — skincare & haircare formulas that balance clinical credibility with natural beauty.",
    heroShop: "Browse Products",
    heroOrder: "Place an Order",

    trust1Title: "Transparent Formulas",
    trust1Desc: "Ingredient details shown on product images.",
    trust2Title: "Pharma-grade Standards",
    trust2Desc: "Designed for real results with gentle balance.",
    trust3Title: "Alexandria, Egypt",
    trust3Desc: "Local support via WhatsApp and email.",

    bestSellers: "Best Sellers",
    bestSellersSub: "Quick add to your order",
    goToOrder: "Go to Order Form",

    productsTitle: "Products",
    productsDesc:
      "Select products, then submit your order details. We will confirm via WhatsApp or email.",
    filterAll: "All",
    filterHair: "Haircare",
    filterSkin: "Skincare",

    aboutTitle: "About Dr. Mariam Asaad",
    aboutDesc:
      "Pharmaglow is built on the principle that nature and pharmaceutical standards can work together—clearly and safely.",
    aboutCardTitle: "Science Meets Nature",
    aboutCardBody:
      "We focus on transparent ingredients, practical routines, and formulas designed for consistent results. Each product highlights its ingredients and purpose so you can make informed choices.",
    aboutB1: "Transparent ingredient highlights",
    aboutB2: "Balanced, gentle formulations",
    aboutB3: "Support through WhatsApp and email",

    quickContact: "Quick Contact",
    phoneLabel: "Phone/WhatsApp",
    emailLabel: "Email",
    locationLabel: "Location",
    locationValue: CONTACT.location_en,

    scienceTitle: "Science & Ingredients",
    scienceDesc:
      "Clear ingredient communication is part of product safety and trust. Refer to each product image for ingredient details.",
    scienceC1Title: "Ingredient Transparency",
    scienceC1Body:
      "Your product images include ingredient details so you know what you are using.",
    scienceC2Title: "Routine-Friendly",
    scienceC2Body:
      "Designed for daily or weekly routines without unnecessary complexity.",
    scienceC3Title: "Practical Guidance",
    scienceC3Body:
      "Patch test recommended. If you have a condition, consult a professional.",

    orderTitle: "Order Form",
    orderDesc:
      "Select products and submit your details. Orders are saved to our system and we will confirm.",
    fullName: "Full Name",
    phone: "Phone / WhatsApp",
    cityAddress: "City / Address",
    selectedItems: "Selected Items",
    itemsHint: "This field auto-fills from your selections.",
    notes: "Notes (optional)",
    submitOrder: "Submit Order",
    whatsAppFast: "Faster confirmation on WhatsApp",
    formPrivacy:
      "By submitting, you agree to be contacted to confirm your order details.",
    mailtoFallback: "Send via Email App (Fallback)",

    orderSentTitle: "Order sent.",
    orderSentBody: "We will contact you shortly to confirm.",

    orderSummary: "Order Summary",
    orderSummarySub: "Items you added",
    total: "Total",
    totalNote:
      "Prices are shown in EGP (LE). Final confirmation via WhatsApp/email.",
    clearCart: "Clear Selections",

    contactTitle: "Contact",
    contactDesc:
      "We respond through WhatsApp or email for order confirmation and questions.",
    emailUs: "Email Us",
    locationNote: "Delivery/meetup details confirmed after order.",
  },

  ar: {
    brandTag: "العلم يلتقي بالطبيعة",
    navHome: "الرئيسية",
    navProducts: "المنتجات",
    navAbout: "عن د. مريم",
    navScience: "العلم والمكونات",
    navOrder: "اطلب الآن",
    navContact: "تواصل معنا",
    whatsAppBtn: "واتساب",

    heroPill: "بإشراف طبي • مكونات واضحة • جودة صيدلانية",
    heroTitle: "عناية طبيعية وصيدلانية مدعومة بالعلم",
    heroDesc:
      "Pharmaglow من د. مريم أسعد — منتجات للبشرة والشعر تجمع بين المصداقية الطبية والجمال الطبيعي.",
    heroShop: "تصفح المنتجات",
    heroOrder: "اطلب الآن",

    trust1Title: "مكونات شفافة",
    trust1Desc: "تفاصيل المكونات موجودة على صور المنتجات.",
    trust2Title: "معايير صيدلانية",
    trust2Desc: "مصممة لنتائج واقعية بتوازن ولطف.",
    trust3Title: "الإسكندرية، مصر",
    trust3Desc: "دعم سريع عبر واتساب والإيميل.",

    bestSellers: "الأكثر طلبًا",
    bestSellersSub: "أضف بسرعة إلى طلبك",
    goToOrder: "اذهب لاستمارة الطلب",

    productsTitle: "المنتجات",
    productsDesc:
      "اختر المنتجات ثم ارسل بياناتك. سيتم تأكيد الطلب عبر واتساب أو الإيميل.",
    filterAll: "الكل",
    filterHair: "الشعر",
    filterSkin: "البشرة",

    aboutTitle: "عن د. مريم أسعد",
    aboutDesc:
      "Pharmaglow مبني على فكرة أن الطبيعة والمعايير الصيدلانية يمكن أن يعملوا معًا بوضوح وأمان.",
    aboutCardTitle: "العلم يلتقي بالطبيعة",
    aboutCardBody:
      "نركز على وضوح المكونات، وروتين عملي، وتركيبات مصممة لنتائج ثابتة. كل منتج يوضح مكوناته وهدفه لتختار بثقة.",
    aboutB1: "توضيح المكونات بشكل مباشر",
    aboutB2: "تركيبات متوازنة ولطيفة",
    aboutB3: "دعم عبر واتساب والإيميل",

    quickContact: "تواصل سريع",
    phoneLabel: "هاتف/واتساب",
    emailLabel: "الإيميل",
    locationLabel: "المكان",
    locationValue: CONTACT.location_ar,

    scienceTitle: "العلم والمكونات",
    scienceDesc:
      "وضوح المكونات جزء من الأمان والثقة. راجع صورة كل منتج لمعرفة التفاصيل.",
    scienceC1Title: "شفافية المكونات",
    scienceC1Body:
      "صور المنتجات تحتوي على تفاصيل المكونات لتعرف ما تستخدمه.",
    scienceC2Title: "مناسب للروتين اليومي",
    scienceC2Body: "مصمم للاستخدام اليومي/الأسبوعي بدون تعقيد.",
    scienceC3Title: "إرشادات عملية",
    scienceC3Body:
      "يفضل اختبار حساسية موضعي. وإذا لديك حالة مرضية استشر مختصًا.",

    orderTitle: "استمارة الطلب",
    orderDesc:
      "اختر المنتجات وأرسل بياناتك. سيتم حفظ الطلب وسنقوم بالتأكيد.",
    fullName: "الاسم بالكامل",
    phone: "رقم الهاتف / واتساب",
    cityAddress: "المدينة / العنوان",
    selectedItems: "المنتجات المختارة",
    itemsHint: "يتم ملء هذا الحقل تلقائيًا حسب اختياراتك.",
    notes: "ملاحظات (اختياري)",
    submitOrder: "إرسال الطلب",
    whatsAppFast: "تأكيد أسرع عبر واتساب",
    formPrivacy:
      "بإرسال الطلب أنت توافق على التواصل لتأكيد التفاصيل.",
    mailtoFallback: "إرسال عبر تطبيق البريد (بديل)",

    orderSentTitle: "تم إرسال الطلب.",
    orderSentBody: "سنقوم بالتواصل معك للتأكيد.",

    orderSummary: "ملخص الطلب",
    orderSummarySub: "العناصر التي اخترتها",
    total: "الإجمالي",
    totalNote:
      "الأسعار بالجنيه المصري (LE). التأكيد النهائي عبر واتساب/الإيميل.",
    clearCart: "مسح الاختيارات",

    contactTitle: "تواصل معنا",
    contactDesc: "نرد عبر واتساب أو الإيميل لتأكيد الطلب والاستفسارات.",
    emailUs: "راسلنا",
    locationNote: "تفاصيل التوصيل/الاستلام يتم تأكيدها بعد الطلب.",
  },
};

/* ================== STATE ================== */
let state = {
  lang: "en",
  filter: "all",
  cart: [], // {key, id, name, price, qty}
};

const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => Array.from(document.querySelectorAll(sel));

function money(n) {
  return `${Number(n || 0)} LE`;
}

/* ================== API HELPERS ================== */
async function apiGet(action) {
  const res = await fetch(`${API_URL}?action=${encodeURIComponent(action)}`, {
    method: "GET",
  });
  return res.json();
}

async function apiPost(payload) {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "text/plain;charset=utf-8" },
    body: JSON.stringify(payload),
  });
  return res.json();
}

async function fetchProducts() {
  const data = await apiGet("products");
  if (!data.ok) throw new Error(data.error || "Failed to load products");

  // توحيد شكل المنتج ليطابق كود الواجهة (img بدل image_url)
  return (data.products || []).map((p) => ({
    ...p,
    img: p.image_url || p.img || "",
    // دعم اختياري لو أنت ضفت variants لاحقًا (مش موجود في API الحالي)
    variants: p.variants || null,
    tags_en: p.tags_en || ["Transparent ingredients"],
    tags_ar: p.tags_ar || ["مكونات واضحة"],
  }));
}

/* ================== UI HELPERS ================== */
function getProductById(id) {
  return PRODUCTS.find((p) => p.id === id);
}

function currentText(product) {
  return state.lang === "ar" ? product.name_ar : product.name_en;
}
function currentTags(product) {
  return state.lang === "ar" ? product.tags_ar : product.tags_en;
}

function setLang(lang) {
  state.lang = lang;
  document.body.dataset.lang = lang;
  document.body.dataset.dir = lang === "ar" ? "rtl" : "ltr";

  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";

  const dict = I18N[lang];
  $$("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (dict[key]) el.textContent = dict[key];
  });

  renderProducts();
  renderBestSellers();
  renderCart();
}

/* ================== RENDER PRODUCTS ================== */
function renderProducts() {
  const grid = $("#productGrid");
  if (!grid) return;
  grid.innerHTML = "";

  const filtered = PRODUCTS.filter((p) => {
    if (state.filter === "all") return true;
    return p.category === state.filter;
  });

  filtered.forEach((p) => {
    const card = document.createElement("div");
    card.className = "card product";

    const name = currentText(p);
    const tags = currentTags(p);

    let priceHtml = "";
    let actionHtml = "";

    // variants (اختياري)
    if (p.variants && Array.isArray(p.variants) && p.variants.length) {
      const options = p.variants
        .map((v) => {
          const label = state.lang === "ar" ? v.label_ar : v.label_en;
          return `<option value="${v.price}">${label} — ${money(
            v.price
          )}</option>`;
        })
        .join("");

      priceHtml = `<span class="price">${
        state.lang === "ar" ? "من" : "From"
      } ${money(p.variants[0].price)}</span>`;

      actionHtml = `
        <select class="variantSelect" aria-label="variant">
          ${options}
        </select>
        <button class="btn btn--primary" type="button" data-add-variant="${p.id}">
          ${state.lang === "ar" ? "أضف للطلب" : "Add to Order"}
        </button>
      `;
    } else {
      priceHtml = `<span class="price">${money(p.price)}</span>`;
      actionHtml = `
        <button class="btn btn--primary" type="button" data-add="${p.id}">
          ${state.lang === "ar" ? "أضف للطلب" : "Add to Order"}
        </button>
        <a class="btn btn--ghost" href="#order">
          ${state.lang === "ar" ? "اطلب الآن" : "Order"}
        </a>
      `;
    }

    card.innerHTML = `
      <img class="product__img" src="${p.img}" alt="${name}">
      <div class="product__body">
        <div class="product__title">
          <h3>${name}</h3>
          ${priceHtml}
        </div>
        <div class="tagRow">
          ${tags.slice(0, 3).map((t) => `<span class="tag">${t}</span>`).join("")}
        </div>
        <div class="product__actions">${actionHtml}</div>
      </div>
    `;

    grid.appendChild(card);
  });

  // bind buttons
  $$("[data-add]").forEach((btn) => {
    btn.addEventListener("click", () => {
      addToCart(btn.getAttribute("data-add"), null);
    });
  });

  $$("[data-add-variant]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const id = btn.getAttribute("data-add-variant");
      const select = btn.parentElement.querySelector(".variantSelect");
      const price = Number(select.value);
      const label = select.options[select.selectedIndex].text;
      addToCart(id, { price, label });
    });
  });
}

/* ================== CART ================== */
function addToCart(id, variant) {
  const p = getProductById(id);
  if (!p) return;

  let name = currentText(p);
  let price = Number(p.price || 0);

  if (variant) {
    name = `${name} (${variant.label})`;
    price = Number(variant.price || 0);
  }

  const key = id + "|" + name;
  const existing = state.cart.find((x) => x.key === key);
  if (existing) existing.qty += 1;
  else state.cart.push({ key, id, name, price, qty: 1 });

  renderCart();
  syncItemsField();
}

function removeCartItem(key) {
  state.cart = state.cart.filter((x) => x.key !== key);
  renderCart();
  syncItemsField();
}

function renderCart() {
  const list = $("#cartList");
  if (!list) return;

  list.innerHTML = "";

  if (state.cart.length === 0) {
    list.innerHTML = `<div class="muted">${
      state.lang === "ar"
        ? "لم يتم اختيار منتجات بعد."
        : "No items selected yet."
    }</div>`;
    const totalEl = $("#totalPrice");
    if (totalEl) totalEl.textContent = "0 LE";
    syncItemsField();
    return;
  }

  let total = 0;
  state.cart.forEach((item) => {
    total += item.price * item.qty;

    const row = document.createElement("div");
    row.className = "cartItem";
    row.innerHTML = `
      <div>
        <strong>${item.name}</strong>
        <div class="muted">${money(item.price)} × ${item.qty}</div>
      </div>
      <div>
        <button type="button" aria-label="Remove">×</button>
      </div>
    `;
    row
      .querySelector("button")
      .addEventListener("click", () => removeCartItem(item.key));
    list.appendChild(row);
  });

  const totalEl = $("#totalPrice");
  if (totalEl) totalEl.textContent = money(total);

  syncItemsField();
}

function syncItemsField() {
  const field = $("#itemsField");
  if (!field) return;

  if (state.cart.length === 0) {
    field.value = "";
    return;
  }

  const lines = state.cart.map(
    (i) => `${i.name} — ${money(i.price)} × ${i.qty}`
  );
  field.value = lines.join("\n");
}

/* ================== BEST SELLERS ================== */
function renderBestSellers() {
  const wrap = $("#bestSellersList");
  if (!wrap) return;

  // لو المنتجات أقل/مختلفة، خليه يختار أول 3
  const best = PRODUCTS.slice(0, 3);

  wrap.innerHTML = "";
  best.forEach((p) => {
    const div = document.createElement("div");
    div.className = "miniItem";
    div.innerHTML = `
      <div>
        <strong>${currentText(p)}</strong>
        <div><span>${
          p.variants ? (state.lang === "ar" ? "متوفر بأحجام" : "Sizes") : money(p.price)
        }</span></div>
      </div>
      <button class="btn btn--ghost" type="button">${
        state.lang === "ar" ? "أضف" : "Add"
      }</button>
    `;

    div.querySelector("button").addEventListener("click", () => {
      if (p.variants && Array.isArray(p.variants) && p.variants.length) {
        const v = p.variants[0];
        const label = state.lang === "ar" ? v.label_ar : v.label_en;
        addToCart(p.id, { price: v.price, label: `${label} — ${money(v.price)}` });
      } else {
        addToCart(p.id, null);
      }
    });

    wrap.appendChild(div);
  });
}

/* ================== BIND UI ================== */
function bindUI() {
  const yearEl = $("#year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  const langToggle = $("#langToggle");
  if (langToggle) {
    langToggle.addEventListener("click", () => {
      setLang(state.lang === "en" ? "ar" : "en");
    });
  }

  // filters
  $$(".chip").forEach((chip) => {
    chip.addEventListener("click", () => {
      $$(".chip").forEach((c) => c.classList.remove("is-active"));
      chip.classList.add("is-active");
      state.filter = chip.getAttribute("data-filter");
      renderProducts();
    });
  });

  // clear cart
  const clearBtn = $("#clearCart");
  if (clearBtn) {
    clearBtn.addEventListener("click", () => {
      state.cart = [];
      renderCart();
    });
  }

  // mailto fallback (لو زر موجود)
  const mailtoBtn = $("#mailtoBtn");
  if (mailtoBtn) {
    mailtoBtn.addEventListener("click", () => {
      const items = $("#itemsField")?.value || "(No items)";
      const name = document.querySelector('input[name="name"]')?.value || "";
      const phone = document.querySelector('input[name="phone"]')?.value || "";
      const address =
        document.querySelector('input[name="address"]')?.value || "";
      const notes =
        document.querySelector('textarea[name="notes"]')?.value || "";

      const subject = encodeURIComponent("New Pharmaglow Order");
      const body = encodeURIComponent(
        `Name: ${name}\nPhone/WhatsApp: ${phone}\nAddress: ${address}\n\nItems:\n${items}\n\nNotes:\n${notes}\n`
      );
      window.location.href = `mailto:${CONTACT.email}?subject=${subject}&body=${body}`;
    });
  }

  // submit order -> Google Sheet
  const form = $("#orderForm");
  if (form) {
    form.addEventListener("submit", async (e) => {
      e.preventDefault();

      const name = document.querySelector('input[name="name"]')?.value.trim();
      const phone = document.querySelector('input[name="phone"]')?.value.trim();
      const address = document
        .querySelector('input[name="address"]')
        ?.value.trim();
      const items = $("#itemsField")?.value.trim();
      const notes =
        document.querySelector('textarea[name="notes"]')?.value.trim() || "";

      const total = state.cart.reduce((s, i) => s + i.price * i.qty, 0);

      if (!name || !phone || !address || !items) {
        alert(
          state.lang === "ar"
            ? "من فضلك أكمل البيانات واختر منتجات"
            : "Please complete your info and select products"
        );
        return;
      }

      try {
        const out = await apiPost({
          action: "create_order",
          name,
          phone,
          address,
          items,
          total,
          notes,
        });

        if (!out.ok) {
          alert("Error: " + (out.error || "Unknown"));
          return;
        }

        // success UI
        const success = $("#formSuccess");
        if (success) {
          success.classList.remove("is-hidden");
          setTimeout(() => success.classList.add("is-hidden"), 4500);
        }

        // reset
        state.cart = [];
        renderCart();
        syncItemsField();
        form.reset();
      } catch (err) {
        console.error(err);
        alert(
          state.lang === "ar"
            ? "حصل خطأ في إرسال الطلب. تأكد من رابط الـ Web App."
            : "Failed to send order. Check Web App URL."
        );
      }
    });
  }
}

/* ================== INIT ================== */
async function init() {
  bindUI();
  setLang("en");

  try {
    PRODUCTS = await fetchProducts();
  } catch (e) {
    console.error(e);
    PRODUCTS = [];
    alert(
      "Failed to load products from Google Sheet. Check Web App deployment + sheet headers."
    );
  }

  renderProducts();
  renderBestSellers();
  renderCart();
  syncItemsField();
}

init();

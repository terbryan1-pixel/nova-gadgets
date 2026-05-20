const products = [
    {
        id: "iphone-17-pro-max",
        title: "iPhone 17 Pro Max",
        price: "UGX 4,000,000",
        img: "images/iphone 17 pro max.jepg.jpeg",
        images: [
            "images/iphone 17 pro max.jepg.jpeg",
            "images/iphone 17 pro max.jepg.jpeg",
            "images/iphone 17 pro max.jepg.jpeg"
        ],
        description: "Premium iPhone with a large display and pro cameras. Contact us for exact specs and warranty details for your unit.",
        colors: ["Black", "Silver", "Gold", "Blue"],
        storages: ["256GB", "512GB", "1TB"],
        batteryCondition: "New",
        badge: "New",
        category: "New Phones"
    },
    {
        id: "samsung-galaxy-s24",
        title: "Samsung Galaxy S24",
        price: "UGX 2,500,000",
        img: "images/samsung s24.jepg.jpeg",
        images: [
            "images/samsung s24.jepg.jpeg",
            "images/samsung s24.jepg.jpeg",
            "images/samsung s24.jepg.jpeg"
        ],
        description: "Latest Galaxy series phone with a bright display and great cameras. Contact us for the exact variant and warranty.",
        colors: ["Black", "Gray", "Violet", "Green"],
        storages: ["128GB", "256GB", "512GB"],
        batteryCondition: "New",
        badge: "New",
        category: "New Phones"
    },
    {
        id: "iphone-13",
        title: "iPhone 13",
        price: "UGX 1,000,000",
        img: "images/iphone 13.jepg.jpeg",
        images: [
            "images/iphone 13.jepg.jpeg",
            "images/iphone 13.jepg.jpeg"
        ],
        description: "Clean iPhone 13 options available. Ask us for the exact condition and battery health before purchase.",
        colors: ["Black", "Blue", "Red", "White"],
        storages: ["128GB", "256GB", "512GB"],
        batteryCondition: "Used - Varies",
        badge: "Used - Excellent",
        category: "Used Phones"
    },
    {
        id: "iphone-13-pro",
        title: "iPhone 13 Pro",
        price: "UGX Contact for price",
        img: "images/iphone 13.jepg.jpeg",
        images: [
            "images/iphone 13.jepg.jpeg",
            "images/iphone 13.jepg.jpeg"
        ],
        description: "iPhone 13 Pro options available. Ask us for exact condition, battery health and storage before purchase.",
        colors: ["Graphite", "Gold", "Silver", "Sierra Blue"],
        storages: ["128GB", "256GB", "512GB", "1TB"],
        batteryCondition: "Used - Varies",
        badge: "Used - Excellent",
        category: "Used Phones"
    },
    {
        id: "iphone-13-pro-max",
        title: "iPhone 13 Pro Max",
        price: "UGX Contact for price",
        img: "images/iphone 13.jepg.jpeg",
        images: [
            "images/iphone 13.jepg.jpeg",
            "images/iphone 13.jepg.jpeg"
        ],
        description: "iPhone 13 Pro Max options available. Ask us for exact condition, battery health and storage before purchase.",
        colors: ["Graphite", "Gold", "Silver", "Sierra Blue"],
        storages: ["128GB", "256GB", "512GB", "1TB"],
        batteryCondition: "Used - Varies",
        badge: "Used - Excellent",
        category: "Used Phones"
    },
    {
        id: "iphone-12",
        title: "iPhone 12",
        price: "UGX 1,000,000",
        img: "images/iphone. jpg.jpg",
        images: [
            "images/iphone. jpg.jpg"
        ],
        description: "iPhone 12 options available. Ask for exact condition, battery health, color and storage for your unit.",
        colors: ["Black", "White", "Red", "Blue", "Green", "Purple"],
        storages: ["64GB", "128GB", "256GB"],
        batteryCondition: "Used - Varies",
        badge: "Used - Excellent",
        category: "Used Phones"
    },
    {
        id: "iphone-12-pro",
        title: "iPhone 12 Pro",
        price: "UGX 1,300,000",
        img: "images/iphone. jpg.jpg",
        images: [
            "images/iphone. jpg.jpg"
        ],
        description: "iPhone 12 Pro options available. Ask for exact condition, battery health, color and storage for your unit.",
        colors: ["Graphite", "Silver", "Gold", "Pacific Blue"],
        storages: ["128GB", "256GB", "512GB"],
        batteryCondition: "Used - Varies",
        badge: "Used - Excellent",
        category: "Used Phones"
    },
    {
        id: "iphone-12-pro-max",
        title: "iPhone 12 Pro Max",
        price: "UGX Contact for price",
        img: "images/iphone. jpg.jpg",
        images: [
            "images/iphone. jpg.jpg"
        ],
        description: "iPhone 12 Pro Max options available. Ask for exact condition, battery health, color and storage for your unit.",
        colors: ["Graphite", "Silver", "Gold", "Pacific Blue"],
        storages: ["128GB", "256GB", "512GB"],
        batteryCondition: "Used - Varies",
        badge: "Used - Excellent",
        category: "Used Phones"
    },
    {
        id: "iphone-14",
        title: "iPhone 14",
        price: "UGX Contact for price",
        img: "images/iphone. jpg.jpg",
        images: [
            "images/iphone. jpg.jpg"
        ],
        description: "iPhone 14 options available. Ask for exact condition, battery health, color and storage for your unit.",
        colors: ["Midnight", "Starlight", "Blue", "Purple", "Red", "Yellow"],
        storages: ["128GB", "256GB", "512GB"],
        batteryCondition: "Used - Varies",
        badge: "Used - Excellent",
        category: "Used Phones"
    },
    {
        id: "iphone-14-pro-max",
        title: "iPhone 14 Pro Max",
        price: "UGX Contact for price",
        img: "images/iphone. jpg.jpg",
        images: [
            "images/iphone. jpg.jpg"
        ],
        description: "Used iPhone 14 Pro Max options. Ask for storage, color and battery health for the exact unit.",
        colors: ["Deep Purple", "Gold", "Silver", "Space Black"],
        storages: ["128GB", "256GB", "512GB", "1TB"],
        batteryCondition: "Used - Varies",
        badge: "Used - Excellent",
        category: "Used Phones"
    },
    {
        id: "samsung-galaxy-a32",
        title: "Samsung Galaxy A32",
        price: "UGX Contact for price",
        img: "images/samsung s10.png.jpeg",
        images: [
            "images/samsung s10.png.jpeg"
        ],
        description: "Samsung Galaxy A32 options available. Ask for exact RAM/storage, condition and battery health for your unit.",
        colors: ["Black", "White", "Blue", "Violet"],
        storages: ["64GB", "128GB", "256GB"],
        batteryCondition: "Used - Varies",
        badge: "Used - Excellent",
        category: "Used Phones"
    },
    {
        id: "samsung-galaxy-s8-plus",
        title: "Samsung Galaxy S8+",
        price: "UGX Contact for price",
        img: "images/samsung s8+.png.jpeg",
        images: [
            "images/samsung s8+.png.jpeg"
        ],
        description: "Samsung Galaxy S8+ options available. Ask for exact condition and battery health before purchase.",
        colors: ["Black", "Silver", "Gold"],
        storages: ["64GB", "128GB"],
        batteryCondition: "Used - Varies",
        badge: "Used - Excellent",
        category: "Used Phones"
    },
    {
        id: "samsung-galaxy-s9-plus",
        title: "Samsung Galaxy S9+",
        price: "UGX Contact for price",
        img: "images/samsung s8+.png.jpeg",
        images: [
            "images/samsung s8+.png.jpeg"
        ],
        description: "Samsung Galaxy S9+ options available. Ask for exact condition and battery health before purchase.",
        colors: ["Black", "Blue", "Purple"],
        storages: ["64GB", "128GB", "256GB"],
        batteryCondition: "Used - Varies",
        badge: "Used - Excellent",
        category: "Used Phones"
    },
    {
        id: "samsung-galaxy-s10-plus",
        title: "Samsung Galaxy S10+",
        price: "UGX Contact for price",
        img: "images/samsung s10.png.jpeg",
        images: [
            "images/samsung s10.png.jpeg"
        ],
        description: "Samsung Galaxy S10+ options available. Ask for exact condition, color and storage before purchase.",
        colors: ["Black", "White", "Blue", "Green"],
        storages: ["128GB", "512GB", "1TB"],
        batteryCondition: "Used - Varies",
        badge: "Used - Excellent",
        category: "Used Phones"
    },
    {
        id: "samsung-galaxy-s20",
        title: "Samsung Galaxy S20",
        price: "UGX Contact for price",
        img: "images/samsung s10.png.jpeg",
        images: [
            "images/samsung s10.png.jpeg"
        ],
        description: "Samsung Galaxy S20 options available. Ask for exact condition and storage before purchase.",
        colors: ["Black", "Blue", "Gray", "Pink"],
        storages: ["128GB", "256GB"],
        batteryCondition: "Used - Varies",
        badge: "Used - Excellent",
        category: "Used Phones"
    },
    {
        id: "samsung-galaxy-s21-ultra",
        title: "Samsung Galaxy S21 Ultra",
        price: "UGX Contact for price",
        img: "images/samsung s21 ultra.png.jpeg",
        images: [
            "images/samsung s21 ultra.png.jpeg"
        ],
        description: "Samsung Galaxy S21 Ultra options available. Ask for exact condition, storage and battery health before purchase.",
        colors: ["Black", "Silver", "Navy", "Brown"],
        storages: ["128GB", "256GB", "512GB"],
        batteryCondition: "Used - Varies",
        badge: "Used - Excellent",
        category: "Used Phones"
    },
    {
        id: "samsung-galaxy-s23-ultra",
        title: "Samsung Galaxy S23 Ultra",
        price: "UGX Contact for price",
        img: "images/samsung s21 ultra.png.jpeg",
        images: [
            "images/samsung s21 ultra.png.jpeg"
        ],
        description: "Samsung Galaxy S23 Ultra options available. Ask for exact condition, storage and battery health before purchase.",
        colors: ["Phantom Black", "Cream", "Green", "Lavender"],
        storages: ["256GB", "512GB", "1TB"],
        batteryCondition: "Used - Varies",
        badge: "Used - Excellent",
        category: "Used Phones"
    },
    {
        id: "google-pixel-8-pro",
        title: "Google Pixel 8 Pro",
        price: "UGX 1,600,000",
        img: "images/google pixel pro 8.jepg.jpeg",
        images: [
            "images/google pixel pro 8.jepg.jpeg",
            "images/google pixel pro 8.jepg.jpeg"
        ],
        description: "Google Pixel 8 Pro with a strong camera system. Contact us for exact storage, color, and availability.",
        colors: ["Black", "Gray", "Blue"],
        storages: ["128GB", "256GB", "512GB"],
        batteryCondition: "New",
        badge: "New",
        category: "New Phones"
    },
    {
        id: "iphone-16",
        title: "Iphone 16",
        price: "UGX 2,500,000",
        img: "images/iphone 16.jepg.jpeg",
        images: [
            "images/iphone 16.jepg.jpeg",
            "images/iphone 16e.jpeg",
            "images/iphone 16.jepg.jpeg"
        ],
        description: "iPhone 16 options available. Ask for exact color, storage and warranty for your unit.",
        colors: ["Black", "White", "Blue", "Pink"],
        storages: ["128GB", "256GB", "512GB"],
        batteryCondition: "New",
        badge: "New",
        category: "New Phones"
    },
    {
        id: "samsung-s22-ultra",
        title: "Samsung S22 Ultra",
        price: "UGX 1,000,000",
        img: "https://5.imimg.com/data5/ANDROID/Default/2025/1/478641129/OI/BH/DD/227561583/product-jpeg-500x500.jpg",
        images: [
            "https://5.imimg.com/data5/ANDROID/Default/2025/1/478641129/OI/BH/DD/227561583/product-jpeg-500x500.jpg",
            "https://5.imimg.com/data5/ANDROID/Default/2025/1/478641129/OI/BH/DD/227561583/product-jpeg-500x500.jpg"
        ],
        description: "Used S22 Ultra options. Confirm storage, color, and battery health before purchase.",
        colors: ["Black", "Green", "Burgundy", "White"],
        storages: ["128GB", "256GB", "512GB"],
        batteryCondition: "Used - Varies",
        badge: "Used - Excellent",
        category: "Used Phones"
    },
    {
        id: "iphone-15-pro",
        title: "iPhone 15 Pro",
        price: "UGX 3,200,000",
        img: "https://www.apple.com/newsroom/images/2023/09/apple-unveils-iphone-15-pro-and-iphone-15-pro-max/article/Apple-iPhone-15-Pro-lineup-color-lineup-geo-230912_big.jpg.large_2x.jpg",
        images: [
            "https://www.apple.com/newsroom/images/2023/09/apple-unveils-iphone-15-pro-and-iphone-15-pro-max/article/Apple-iPhone-15-Pro-lineup-color-lineup-geo-230912_big.jpg.large_2x.jpg"
        ],
        description: "iPhone 15 Pro. Ask for exact storage, color and warranty details.",
        colors: ["Black Titanium", "White Titanium", "Blue Titanium", "Natural Titanium"],
        storages: ["128GB", "256GB", "512GB", "1TB"],
        batteryCondition: "New",
        badge: "New",
        category: "New Phones"
    },
    {
        id: "samsung-galaxy-s25-ultra",
        title: "Samsung Galaxy S25 Ultra",
        price: "UGX 3,800,000",
        img: "https://tse4.mm.bing.net/th/id/OIP.Z7N7VDtIHMSSh8409yY70gHaI8?rs=1&pid=ImgDetMain&o=7&rm=3",
        images: [
            "https://tse4.mm.bing.net/th/id/OIP.Z7N7VDtIHMSSh8409yY70gHaI8?rs=1&pid=ImgDetMain&o=7&rm=3"
        ],
        description: "Galaxy S25 Ultra. Contact us to confirm the exact variant, storage, and warranty.",
        colors: ["Black", "Gray", "Silver", "Blue"],
        storages: ["256GB", "512GB", "1TB"],
        batteryCondition: "New",
        badge: "New",
        category: "New Phones"
    },
    {
        id: "iphone-14-pro",
        title: "iPhone 14 Pro",
        price: "UGX 1,800,000",
        img: "https://iplanet.one/cdn/shop/files/iPhone_14_Pro_Deep_Purple_PDP_Image_Position-4__WWEN.jpg?v=1691140905",
        images: [
            "https://iplanet.one/cdn/shop/files/iPhone_14_Pro_Deep_Purple_PDP_Image_Position-4__WWEN.jpg?v=1691140905"
        ],
        description: "Used iPhone 14 Pro options. Ask for storage, color and battery health for the exact unit.",
        colors: ["Deep Purple", "Gold", "Silver", "Space Black"],
        storages: ["128GB", "256GB", "512GB", "1TB"],
        batteryCondition: "Used - Varies",
        badge: "Used - Excellent",
        category: "Used Phones"
    },
    {
        id: "redmi-a1-plus",
        title: "Redmi A1+",
        price: "UGX 200,000",
        img: "https://images.priceoye.pk/xiaomi-redmi-a1-pakistan-priceoye-mgy2j.jpg",
        images: [
            "https://images.priceoye.pk/xiaomi-redmi-a1-pakistan-priceoye-mgy2j.jpg"
        ],
        description: "Affordable Redmi option. Confirm storage/ram and battery condition before purchase.",
        colors: ["Black", "Blue", "Green"],
        storages: ["32GB", "64GB"],
        batteryCondition: "Used - Varies",
        badge: "Used - Excellent",
        category: "Used Phones"
    },
    {
        id: "infinix-note-30",
        title: "Infinix Note 30",
        price: "UGX 800,000",
        img: "images/offer.jepg.jpeg",
        images: [
            "images/offer.jepg.jpeg"
        ],
        description: "Budget-friendly Infinix option. Confirm storage/ram and color before ordering.",
        colors: ["Black", "Blue", "Green"],
        storages: ["128GB", "256GB"],
        batteryCondition: "New",
        badge: "New",
        category: "New Phones"
    },
    {
        id: "charger-type-c",
        title: "Phone Charger Type C",
        price: "UGX 50,000",
        img: "images/charger.jepg.jepg.jpeg",
        images: [
            "images/charger.jepg.jepg.jpeg"
        ],
        description: "Type‑C charger. Ask for wattage and compatibility details.",
        badge: "New",
        category: "Accessory"
    },
    {
        id: "p9-headsets",
        title: "P9 Headsets",
        price: "UGX 50,000",
        img: "images/p headset.jpeg.jpeg.jpeg",
        images: [
            "images/p headset.jepg.jepg.jpeg",
            "https://ultraeg.com/image/cache/catalog/headphone/01-2-320x320.jpg",
            "https://i.ebayimg.com/images/g/Z6gAAOSwm~9k9mxI/s-l1200.jpg"
        ],
        description: "P9 wireless headset. Ask us to confirm color options and availability.",
        colors: ["Black", "Blue", "Red", "White"],
        storages: [],
        batteryCondition: "New",
        badge: "New",
        category: "Accessory"
    },
    {
        id: "screen-repair",
        title: "Screen Repair",
        price: "UGX 120,000",
        img: "images/phone-repair.jepg.jepg.jpeg",
        images: [
            "images/phone-repair.jepg.jepg.jpeg"
        ],
        description: "Screen repair service. Price depends on model and part quality.",
        badge: "Service",
        category: "Phone Repair"
    }
    ,
    // Accessories: Ring lights (multiple sizes)
    {
        title: "Ring Light 10 inch",
        price: "UGX 120,000",
        img: "https://images.unsplash.com/photo-1602524818402-0d6ef2c6a6d3?q=80&w=1080",
        badge: "New",
        category: "Accessory"
    },
    {
        title: "Ring Light 12 inch",
        price: "UGX 150,000",
        img: "https://images.unsplash.com/photo-1580894908361-1f3c0f0d6a2f?q=80&w=1080",
        badge: "New",
        category: "Accessory"
    },
    {
        title: "Ring Light 14 inch",
        price: "UGX 180,000",
        img: "https://images.unsplash.com/photo-1598032890319-9e8f7f9c2c3a?q=80&w=1080",
        badge: "New",
        category: "Accessory"
    },
    {
        title: "Ring Light 18 inch",
        price: "UGX 260,000",
        img: "https://images.unsplash.com/photo-1555617117-08fda5f2f0d0?q=80&w=1080",
        badge: "New",
        category: "Accessory"
    },
    // MagSafe wireless power banks
    {
        title: "MagSafe Power Bank 5,000mAh",
        price: "UGX 180,000",
        img: "https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?q=80&w=1080",
        badge: "New",
        category: "Accessory"
    },
    {
        title: "MagSafe Power Bank 10,000mAh",
        price: "UGX 300,000",
        img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1080",
        badge: "New",
        category: "Accessory"
    },
    // More accessories requested
    {
        title: "Smart Watch - Fitness",
        price: "UGX 220,000",
        img: "https://images.unsplash.com/photo-1517433456452-f9633a875f6f?q=80&w=1080",
        badge: "New",
        category: "Accessory"
    },
    {
        title: "USB Cable (Type-C)",
        price: "UGX 15,000",
        img: "https://images.unsplash.com/photo-1585386959984-a415522f3d6b?q=80&w=1080",
        badge: "New",
        category: "Accessory"
    },
    {
        title: "Charger Head (Fast Charge)",
        price: "UGX 45,000",
        img: "https://images.unsplash.com/photo-1580910051071-1f6e1f1e0b3b?q=80&w=1080",
        badge: "New",
        category: "Accessory"
    },
    {
        title: "Battery 5,000mAh (Spare)",
        price: "UGX 80,000",
        img: "https://images.unsplash.com/photo-1582719478250-2a5b9d4c3c60?q=80&w=1080",
        badge: "New",
        category: "Accessory"
    },
    {
        title: "Battery 10,000mAh (Spare)",
        price: "UGX 140,000",
        img: "https://images.unsplash.com/photo-1503602642458-232111445657?q=80&w=1080",
        badge: "New",
        category: "Accessory"
    },
    {
        title: "Card Reader (Multi-format)",
        price: "UGX 60,000",
        img: "https://images.unsplash.com/photo-1580910051071-1f6e1f1e0b3b?q=80&w=1080",
        badge: "New",
        category: "Accessory"
    },
    {
        title: "Headset - Bluetooth",
        price: "UGX 130,000",
        img: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?q=80&w=1080",
        badge: "New",
        category: "Accessory"
    },
    {
        title: "Headset - Beats Style",
        price: "UGX 380,000",
        img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=1080",
        badge: "New",
        category: "Accessory"
    },
    {
        title: "Portable Speaker - JBL Style",
        price: "UGX 300,000",
        img: "https://images.unsplash.com/photo-1518444027223-6b7bb4b1d3d9?q=80&w=1080",
        badge: "New",
        category: "Accessory"
    },
    // Accessories: Power banks (Uganda market capacities)
    {
        title: "Oraimo Powerbank 10,000mAh",
        price: "UGX Contact for price",
        img: "https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?q=80&w=1080",
        badge: "New",
        category: "Accessory"
    },
    {
        title: "Oraimo Powerbank 20,000mAh",
        price: "UGX Contact for price",
        img: "https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?q=80&w=1080",
        badge: "New",
        category: "Accessory"
    },
    {
        title: "Excellent Powerbank 10,000mAh",
        price: "UGX Contact for price",
        img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1080",
        badge: "New",
        category: "Accessory"
    },
    {
        title: "Excellent Powerbank 20,000mAh",
        price: "UGX Contact for price",
        img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1080",
        badge: "New",
        category: "Accessory"
    },
    {
        title: "Powerbank 30,000mAh",
        price: "UGX Contact for price",
        img: "https://images.unsplash.com/photo-1503602642458-232111445657?q=80&w=1080",
        badge: "New",
        category: "Accessory"
    },
    // Accessories: Memory cards (different capacities)
    {
        title: "Memory Card 16GB",
        price: "UGX Contact for price",
        img: "https://images.unsplash.com/photo-1555617766-c94804975da3?q=80&w=1080",
        badge: "New",
        category: "Accessory"
    },
    {
        title: "Memory Card 32GB",
        price: "UGX Contact for price",
        img: "https://images.unsplash.com/photo-1555617766-c94804975da3?q=80&w=1080",
        badge: "New",
        category: "Accessory"
    },
    {
        title: "Memory Card 64GB",
        price: "UGX Contact for price",
        img: "https://images.unsplash.com/photo-1555617766-c94804975da3?q=80&w=1080",
        badge: "New",
        category: "Accessory"
    },
    {
        title: "Memory Card 128GB",
        price: "UGX Contact for price",
        img: "https://images.unsplash.com/photo-1555617766-c94804975da3?q=80&w=1080",
        badge: "New",
        category: "Accessory"
    },
    {
        title: "Memory Card 256GB",
        price: "UGX Contact for price",
        img: "https://images.unsplash.com/photo-1555617766-c94804975da3?q=80&w=1080",
        badge: "New",
        category: "Accessory"
    },
    // Accessories: Smart watches
    {
        title: "Smart Watch (Generic)",
        price: "UGX Contact for price",
        img: "https://images.unsplash.com/photo-1517433456452-f9633a875f6f?q=80&w=1080",
        badge: "New",
        category: "Accessory"
    },
    {
        title: "Apple Watch",
        price: "UGX Contact for price",
        img: "https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?q=80&w=1080",
        badge: "New",
        category: "Accessory"
    },
    {
        title: "Samsung Galaxy Watch",
        price: "UGX Contact for price",
        img: "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?q=80&w=1080",
        badge: "New",
        category: "Accessory"
    },
    // Accessories: Wired earphones (receiver = with mic)
    {
        title: "Wired Earphones (Receiver) - Samsung",
        price: "UGX Contact for price",
        img: "images/earphone.jepg.jepg.jpeg",
        badge: "New",
        category: "Accessory"
    },
    {
        title: "Wired Earphones (Non-Receiver) - Samsung",
        price: "UGX Contact for price",
        img: "images/earphone.jepg.jepg.jpeg",
        badge: "New",
        category: "Accessory"
    },
    {
        title: "Wired Earphones (Receiver) - Dr Lee",
        price: "UGX Contact for price",
        img: "images/earphone.jepg.jepg.jpeg",
        badge: "New",
        category: "Accessory"
    },
    {
        title: "Wired Earphones (Non-Receiver) - Dr Lee",
        price: "UGX Contact for price",
        img: "images/earphone.jepg.jepg.jpeg",
        badge: "New",
        category: "Accessory"
    },
    {
        title: "Wired Earphones (Receiver) - Uganda Brand",
        price: "UGX Contact for price",
        img: "images/earphone.jepg.jepg.jpeg",
        badge: "New",
        category: "Accessory"
    },
    {
        title: "Wired Earphones (Non-Receiver) - Uganda Brand",
        price: "UGX Contact for price",
        img: "images/earphone.jepg.jepg.jpeg",
        badge: "New",
        category: "Accessory"
    },
    // Accessories: Cables & chargers
    {
        title: "USB Data Cable (Type-C)",
        price: "UGX Contact for price",
        img: "https://images.unsplash.com/photo-1585386959984-a415522f3d6b?q=80&w=1080",
        badge: "New",
        category: "Accessory"
    },
    {
        title: "USB Data Cable (Micro-USB)",
        price: "UGX Contact for price",
        img: "https://images.unsplash.com/photo-1585386959984-a415522f3d6b?q=80&w=1080",
        badge: "New",
        category: "Accessory"
    },
    {
        title: "USB Data Cable (iPhone Lightning)",
        price: "UGX Contact for price",
        img: "https://images.unsplash.com/photo-1608501221513-7b5b392d14c5?q=80&w=1080",
        badge: "New",
        category: "Accessory"
    },
    {
        title: "4G LTE Cable",
        price: "UGX Contact for price",
        img: "https://images.unsplash.com/photo-1555617117-08fda5f2f0d0?q=80&w=1080",
        badge: "New",
        category: "Accessory"
    },
    {
        title: "Universal Charger",
        price: "UGX Contact for price",
        img: "images/charger.jepg.jepg.jpeg",
        badge: "New",
        category: "Accessory"
    },
    {
        title: "Charger Head - Oraimo",
        price: "UGX Contact for price",
        img: "images/charger.jepg.jepg.jpeg",
        badge: "New",
        category: "Accessory"
    },
    {
        title: "Charger Head - Samsung",
        price: "UGX Contact for price",
        img: "images/charger.jepg.jepg.jpeg",
        badge: "New",
        category: "Accessory"
    },
    {
        title: "Charger Head - Apple",
        price: "UGX Contact for price",
        img: "images/charger.jepg.jepg.jpeg",
        badge: "New",
        category: "Accessory"
    },
    {
        title: "Full Charger (Cable + Head)",
        price: "UGX Contact for price",
        img: "images/charger.jepg.jepg.jpeg",
        badge: "New",
        category: "Accessory"
    },
    // Accessories: Card readers
    {
        title: "Card Reader (OTG)",
        price: "UGX Contact for price",
        img: "https://images.unsplash.com/photo-1555617766-c94804975da3?q=80&w=1080",
        badge: "New",
        category: "Accessory"
    },
    // Accessories: Button phone batteries (Itel / Tecno)
    {
        title: "Button Phone Battery - Itel (Small)",
        price: "UGX Contact for price",
        img: "https://images.unsplash.com/photo-1582719478250-2a5b9d4c3c60?q=80&w=1080",
        badge: "New",
        category: "Accessory"
    },
    {
        title: "Button Phone Battery - Itel (Medium)",
        price: "UGX Contact for price",
        img: "https://images.unsplash.com/photo-1582719478250-2a5b9d4c3c60?q=80&w=1080",
        badge: "New",
        category: "Accessory"
    },
    {
        title: "Button Phone Battery - Itel (Large)",
        price: "UGX Contact for price",
        img: "https://images.unsplash.com/photo-1582719478250-2a5b9d4c3c60?q=80&w=1080",
        badge: "New",
        category: "Accessory"
    },
    {
        title: "Button Phone Battery - Tecno (Small)",
        price: "UGX Contact for price",
        img: "https://images.unsplash.com/photo-1582719478250-2a5b9d4c3c60?q=80&w=1080",
        badge: "New",
        category: "Accessory"
    },
    {
        title: "Button Phone Battery - Tecno (Medium)",
        price: "UGX Contact for price",
        img: "https://images.unsplash.com/photo-1582719478250-2a5b9d4c3c60?q=80&w=1080",
        badge: "New",
        category: "Accessory"
    },
    {
        title: "Button Phone Battery - Tecno (Large)",
        price: "UGX Contact for price",
        img: "https://images.unsplash.com/photo-1582719478250-2a5b9d4c3c60?q=80&w=1080",
        badge: "New",
        category: "Accessory"
    },
    // Accessories: Beats headsets
    {
        title: "Beats Headset (Solo Style)",
        price: "UGX Contact for price",
        img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=1080",
        badge: "New",
        category: "Accessory"
    },
    {
        title: "Beats Headset (Studio Style)",
        price: "UGX Contact for price",
        img: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?q=80&w=1080",
        badge: "New",
        category: "Accessory"
    },
    // Accessories: JBL speakers
    {
        title: "JBL Speaker (GO Style)",
        price: "UGX Contact for price",
        img: "https://images.unsplash.com/photo-1518444027223-6b7bb4b1d3d9?q=80&w=1080",
        badge: "New",
        category: "Accessory"
    },
    {
        title: "JBL Speaker (Charge Style)",
        price: "UGX Contact for price",
        img: "https://images.unsplash.com/photo-1518444027223-6b7bb4b1d3d9?q=80&w=1080",
        badge: "New",
        category: "Accessory"
    },
    // Accessories: SanDisk flash disks (different sizes)
    {
        title: "SanDisk Flash Disk 16GB",
        price: "UGX Contact for price",
        img: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1080",
        badge: "New",
        category: "Accessory"
    },
    {
        title: "SanDisk Flash Disk 32GB",
        price: "UGX Contact for price",
        img: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1080",
        badge: "New",
        category: "Accessory"
    },
    {
        title: "SanDisk Flash Disk 64GB",
        price: "UGX Contact for price",
        img: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1080",
        badge: "New",
        category: "Accessory"
    },
    {
        title: "SanDisk Flash Disk 128GB",
        price: "UGX Contact for price",
        img: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1080",
        badge: "New",
        category: "Accessory"
    },
    // Accessories: Phone rings
    {
        title: "Phone Ring / Ring Stand",
        price: "UGX Contact for price",
        img: "https://images.unsplash.com/photo-1580910051071-1f6e1f1e0b3b?q=80&w=1080",
        badge: "New",
        category: "Accessory"
    },
    // Accessories: Ring lights (different sizes)
    {
        title: "Ring Light 6 inch",
        price: "UGX Contact for price",
        img: "https://images.unsplash.com/photo-1602524818402-0d6ef2c6a6d3?q=80&w=1080",
        badge: "New",
        category: "Accessory"
    },
    // Phones category additions: Kids tablets
    {
        title: "Kids Tablet 7 inch",
        price: "UGX 180,000",
        img: "https://images.unsplash.com/photo-1523475496153-3d6ccf4b4c3f?q=80&w=1080",
        badge: "New",
        category: "Kids Tablets"
    },
    {
        title: "Kids Tablet 10 inch",
        price: "UGX 260,000",
        img: "https://images.unsplash.com/photo-1580894908361-1f3c0f0d6a2f?q=80&w=1080",
        badge: "New",
        category: "Kids Tablets"
    }
];

// Make products available on window for scripts that match by title
if (typeof window !== 'undefined') window.products = products;

const schemaData = {
    "@context": "https://schema.org",
    "@type": "Product",
    "@id": "https://www.kianolandgroup.com/natureland-kiano-3/rumah-40-60#product",
    "name": "Rumah Tipe 40/60 Natureland Kiano 3",
    "description": "Rumah ekonomis dengan desain modern di kawasan strategis Cibarusah Bekasi",
    "category": "Rumah Tipe 40/60",
    "image": [
        {
            "@type": "ImageObject",
            "url": "https://www.kianolandgroup.com/assets/natureland-kiano-3/Rumah%2040-60/1.jpg",
            "description": "Tampilan eksterior rumah tipe 40/60 dengan desain minimalis modern"
        },
        {
            "@type": "ImageObject",
            "url": "https://www.kianolandgroup.com/assets/natureland-kiano-3/Denah%2040-60.jpg",
            "description": "Denah rumah tipe 40/60 dengan tata ruang efisien"
        },
        {
            "@type": "ImageObject",
            "url": "https://www.kianolandgroup.com/assets/natureland-kiano-3/Interior%2040-60.jpg",
            "description": "Interior ruang tamu rumah tipe 40/60"
        },
        {
            "@type": "ImageObject",
            "url": "https://www.kianolandgroup.com/assets/natureland-kiano-3/Fasilitas-Kolam-Renang.jpg",
            "description": "Kolam renang olympic size di lingkungan perumahan"
        },
        {
            "@type": "ImageObject",
            "url": "https://www.kianolandgroup.com/assets/natureland-kiano-2/Fasilitas-Clubhouse.jpg",
            "description": "Clubhouse dengan fasilitas lengkap untuk kegiatan sosial dan rekreasi."
        },
        {
            "@type": "ImageObject",
            "url": "https://www.kianolandgroup.com/assets/natureland-kiano-2/Fasilitas-Jogging-Track.jpg",
            "description": "Jogging track yang nyaman untuk aktivitas olahraga warga."
        },
        {
            "@type": "ImageObject",
            "url": "https://www.kianolandgroup.com/assets/natureland-kiano-3/Fasilitas-Taman-Bermain.jpg",
            "description": "Area bermain anak dengan perlengkapan modern"
        }
    ],
    "brand": {
        "@type": "Brand",
        "name": "Kianoland Group",
        "logo": "https://www.kianolandgroup.com/assets/Kianoland%20Group.png"
    },
    "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "Sales & Booking",
        "telephone": "+6285282592945",
        "whatsapp": "https://wa.me/6285282592945?text=Saya%20berminat%20booking%20di%20Natureland%20Kiano%203",
        "availableLanguage": ["Bahasa Indonesia", "English"],
        "areaServed": ["Jawa Barat", "Cibarusah", "Bekasi"],
        "hoursAvailable": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            "opens": "08:00",
            "closes": "17:00"
        }
    },
    "sku": "NLK3-4060",
    "floorSize": "40 m²",
    "numberOfRooms": "2",
    "numberOfBedrooms": "2",
    "numberOfBathroomsTotal": "1",
    "material": "Hebel Double Layer + Beton Bertulang",
    "offers": {
        "@type": "Offer",
        "url": "https://www.kianolandgroup.com/natureland-kiano-3/rumah-40-60",
        "priceCurrency": "IDR",
        "price": "465000000",
        "priceValidUntil": "2024-12-31",
        "availability": "https://schema.org/InStock",
        "itemCondition": "https://schema.org/NewCondition",
        "description": "Gratis DP | Angsuran Rp4.500.000/bulan",
        "downPayment": "0",
        "loanTerm": "180",
        "loanTermUnit": "Bulan",
        "monthlyPayment": "4500000",
        "inventoryLevel": {
            "@type": "QuantitativeValue",
            "value": "7"
        },
        "eligibleRegion": {
            "@type": "AdministrativeArea",
            "name": "Bekasi"
        },
        "shippingDetails": {
            "@type": "OfferShippingDetails",
            "shippingRate": {
                "@type": "MonetaryAmount",
                "value": "0",
                "currency": "IDR"
            },
            "transitTime": {
                "@type": "QuantitativeValue",
                "minValue": "P30D",
                "maxValue": "P60D",
                "description": "Proses sertifikasi SHM: 30-60 hari kerja"
            },
            "deliveryTime": {
                "@type": "ShippingDeliveryTime",
                "description": "Serah terima kunci dalam 5 hari kerja",
                "businessDays": {
                    "@type": "OpeningHoursSpecification",
                    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]
                },
                "transitTime": {
                    "@type": "QuantitativeValue",
                    "value": 30,
                    "unitCode": "DAY",
                    "minValue": 30,
                    "maxValue": 60,
                    "description": "Proses sertifikasi SHM: 30-60 hari kerja"
                },
                "handlingTime": {
                    "@type": "QuantitativeValue",
                    "value": 5,
                    "unitCode": "DAY",
                    "minValue": 5,
                    "maxValue": 5
                }
            },
            "shippingDestination": {
                "@type": "DefinedRegion",
                "addressCountry": "ID",
                "description": "Properti siap huni di lokasi yang telah ditentukan (tidak ada pengiriman fisik)"
            }
        },
        "hasMerchantReturnPolicy": {
            "@type": "MerchantReturnPolicy",
            "applicableCountry": "ID",
            "returnPolicyCategory": "https://schema.org/MerchantReturnFiniteReturnWindow",
            "merchantReturnDays": 14,
            "returnMethod": "https://schema.org/ReturnInStore",
            "returnFees": "https://schema.org/FreeReturn",
            "description": "Garansi pengembalian DP 100% jika gagal verifikasi KPR"
        }
    },
    "location": {
        "@type": "Place",
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": "-6.438255",
            "longitude": "106.936040"
        },
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Jl. Kp. Babakan RT 015/RW 005",
            "addressLocality": "Cibarusah",
            "addressRegion": "Jawa Barat",
            "postalCode": "17340"
        }
    },
    "additionalProperty": [
        {
            "@type": "PropertyValue",
            "name": "Kolam Renang Olympic",
            "value": "Tersedia"
        },
        {
            "@type": "PropertyValue",
            "name": "Jogging Track",
            "value": "1.2 km"
        },
        {
            "@type": "PropertyValue",
            "name": "Club House",
            "value": "Tersedia"
        },
        {
            "@type": "PropertyValue",
            "name": "Smart Door System",
            "value": "Fingerprint & PIN"
        },
        {
            "@type": "PropertyValue",
            "name": "Luas Tanah",
            "value": "60 m²"
        },
        {
            "@type": "PropertyValue",
            "name": "Material Atap",
            "value": "Genteng Beton"
        },
        {
            "@type": "PropertyValue",
            "name": "Carport",
            "value": "Untuk 1 Mobil"
        }
    ],
    "amenityFeature": [
        {
            "@type": "LocationFeatureSpecification",
            "name": "Akses Tol Sukaragam",
            "value": "5 Menit via Jalan Lingkar Luar"
        },
        {
            "@type": "LocationFeatureSpecification",
            "name": "Rumah Sakit",
            "value": "RS Harapan Mulia (1.8 km)"
        },
        {
            "@type": "LocationFeatureSpecification",
            "name": "Pusat Perbelanjaan",
            "value": "Pasar Cibarusah (2.1 km)"
        },
        {
            "@type": "LocationFeatureSpecification",
            "name": "Bank & ATM",
            "value": "ATM Center (800 m)"
        }
    ],
    "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.7",
        "reviewCount": "45",
        "bestRating": "5",
        "worstRating": "1"
    },
    "review": [
        {
            "@type": "Review",
            "author": {
                "@type": "Person",
                "name": "Rina Amelia"
            },
            "datePublished": "2023-08-12",
            "reviewBody": "Desain simple tapi fungsional, cocok untuk keluarga muda",
            "reviewRating": {
                "@type": "Rating",
                "ratingValue": "4.8",
                "bestRating": "5"
            }
        },
        {
            "@type": "Review",
            "author": {
                "@type": "Person",
                "name": "Ahmad Fauzi"
            },
            "datePublished": "2023-09-05",
            "reviewBody": "Proses administrasi jelas dan transparan",
            "reviewRating": {
                "@type": "Rating",
                "ratingValue": "4.5",
                "bestRating": "5"
            }
        }
    ],
    "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Beranda",
                "item": "https://www.kianolandgroup.com/"
            },
            {
                "@type": "ListItem",
                "position": 2,
                "name": "Natureland Kiano 3",
                "item": "https://www.kianolandgroup.com/natureland-kiano-3"
            },
            {
                "@type": "ListItem",
                "position": 3,
                "name": "Tipe 40/60"
            }
        ]
    },
    "containsPlace": {
        "@type": "HousingComplex",
        "name": "Natureland Kiano 3",
        "url": "https://www.kianolandgroup.com/natureland-kiano-3"
    }
};

// Sisipkan ke dalam HTML secara otomatis
const script = document.createElement("script");
script.type = "application/ld+json";
script.textContent = JSON.stringify(schemaData);
document.head.appendChild(script);
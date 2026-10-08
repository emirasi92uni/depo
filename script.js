const bomarProjectData = [
  {
    "id": "etlik",
    "page": 21,
    "printed": 40,
    "title": [
      "Etlik Entegre Sağlık Kampüsü",
      "Etlik Integrated Healthcare Campus"
    ],
    "desc": [
      "Katalogda, Ankara’daki 3.577 yatak kapasiteli ve 1.071.885 m² toplam inşaat alanına sahip kampüsün ana binasının 212.606 m²’lik kısmı ile T4, T5 ve T6 bloklarına ait mekanik ve elektrik sistemleri için mühendislik hesapları, proje hazırlama ve tesisat işleri belirtiliyor. Katalog bu işi BOMAR / ŞG PROJE ortak girişimi kapsamında sunuyor.",
      "The catalogue lists engineering calculations, design and installation of mechanical and electrical systems for a 212,606 m² portion of the main building and blocks T4, T5 and T6 of the Ankara campus. It gives a total construction area of 1,071,885 m² and a capacity of 3,577 beds. The work is presented under the BOMAR / ŞG PROJE joint venture."
    ],
    "alt": [
      "Etlik Entegre Sağlık Kampüsü — katalog görseli",
      "Etlik Integrated Healthcare Campus — catalogue image"
    ],
    "images": [
      "assets/projects/etlik.jpg"
    ],
    "source": [
      "Kaynak: BOMAR / ŞG PROJE kataloğu, PDF sayfa 21 (basılı sayfa 40). Bilgiler ve görsel eşleşmesi bağımsız olarak doğrulanmadı.",
      "Source: BOMAR / ŞG PROJE catalogue, PDF page 21 (printed page 40). Information and image attribution have not been independently verified."
    ]
  },
  {
    "id": "presidential",
    "page": 15,
    "printed": 28,
    "title": [
      "Cumhurbaşkanlığı Külliyesi",
      "Presidential Complex"
    ],
    "desc": [
      "Katalogda, 320.000 m² inşaat alanına sahip Cumhurbaşkanlığı hizmet binasının ana bina ve kuzey idari binalarına ait tüm mekanik tesisat işleri belirtiliyor. Katalogdaki çalışma dönemi 2013–2014. İş, BOMAR / ŞG PROJE ortak girişimi referansı olarak sunuluyor.",
      "The catalogue lists all mechanical installation works for the main service building and northern administrative buildings of the Presidential Complex, with a stated construction area of 320,000 m². The catalogue gives the work period as 2013–2014 and presents it as a BOMAR / ŞG PROJE joint venture reference."
    ],
    "alt": [
      "Cumhurbaşkanlığı Külliyesi — katalog görseli",
      "Presidential Complex — catalogue image"
    ],
    "images": [
      "assets/projects/presidential.jpg",
      "assets/projects/presidential-detail-1.jpg",
      "assets/projects/presidential-detail-2.jpg"
    ],
    "source": [
      "Kaynak: BOMAR / ŞG PROJE kataloğu, PDF sayfa 15 (basılı sayfa 28). Bilgiler ve görsel eşleşmesi bağımsız olarak doğrulanmadı.",
      "Source: BOMAR / ŞG PROJE catalogue, PDF page 15 (printed page 28). Information and image attribution have not been independently verified."
    ]
  },
  {
    "id": "akm",
    "page": 27,
    "printed": 52,
    "title": [
      "Atatürk Kültür Merkezi",
      "Atatürk Cultural Centre"
    ],
    "desc": [
      "Katalogda, 95.600 m² inşaat alanına sahip Atatürk Kültür Merkezi’nin mekanik ve otomasyon işlerinin yapımı belirtiliyor. İş, BOMAR / ŞG PROJE ortak girişimi referansı olarak sunuluyor. Bu proje sayfasında çalışma tarihi belirtilmiyor.",
      "The catalogue lists mechanical and automation works for Atatürk Cultural Centre, with a stated construction area of 95,600 m². It presents the work as a BOMAR / ŞG PROJE joint venture reference. No work dates are stated on this project page."
    ],
    "alt": [
      "Atatürk Kültür Merkezi — katalog görseli",
      "Atatürk Cultural Centre — catalogue image"
    ],
    "images": [
      "assets/projects/akm.jpg"
    ],
    "source": [
      "Kaynak: BOMAR / ŞG PROJE kataloğu, PDF sayfa 27 (basılı sayfa 52). Bilgiler ve görsel eşleşmesi bağımsız olarak doğrulanmadı.",
      "Source: BOMAR / ŞG PROJE catalogue, PDF page 27 (printed page 52). Information and image attribution have not been independently verified."
    ]
  },
  {
    "id": "ikitelli",
    "page": 22,
    "printed": 42,
    "title": [
      "İkitelli Şehir Hastanesi",
      "İkitelli City Hospital"
    ],
    "desc": [
      "Katalogda, 2.682 yatak kapasiteli ve 927.290 m² toplam inşaat alanına sahip İkitelli Şehir Hastanesi’nin 290.930 m²’lik ana binasına ait tüm mekanik tesisat işleri belirtiliyor. İş, BOMAR / ŞG PROJE ortak girişimi referansı olarak sunuluyor. Bu proje sayfasında çalışma tarihi belirtilmiyor.",
      "The catalogue lists all mechanical installation works for the 290,930 m² main building of İkitelli City Hospital. It gives a total construction area of 927,290 m² and a capacity of 2,682 beds. The work is presented as a BOMAR / ŞG PROJE joint venture reference. No work dates are stated on this project page."
    ],
    "alt": [
      "İkitelli Şehir Hastanesi — katalogdaki mimari sunum görseli",
      "İkitelli City Hospital — architectural presentation image from the catalogue"
    ],
    "images": [
      "assets/projects/ikitelli.jpg",
      "assets/projects/ikitelli-detail-1.jpg",
      "assets/projects/ikitelli-detail-2.jpg"
    ],
    "source": [
      "Kaynak: BOMAR / ŞG PROJE kataloğu, PDF sayfa 22 (basılı sayfa 42). Bilgiler ve görsel eşleşmesi bağımsız olarak doğrulanmadı.",
      "Source: BOMAR / ŞG PROJE catalogue, PDF page 22 (printed page 42). Information and image attribution have not been independently verified."
    ]
  }
];

// =========================================================
// BOMAR WEBSITE
// =========================================================

const navbar = document.querySelector(".navbar");
const menuButton = document.querySelector(".menu-button");
const navLinks = document.querySelector(".nav-links");


// ---------------------------------------------------------
// Navbar - aşağı kaydırınca koyu arka plan
// ---------------------------------------------------------

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});


// ---------------------------------------------------------
// Mobil menü
// ---------------------------------------------------------

menuButton.addEventListener("click", () => {
    navLinks.classList.toggle("mobile-active");

    if (navLinks.classList.contains("mobile-active")) {
        menuButton.textContent = "✕";
    } else {
        menuButton.textContent = "☰";
    }
});


// Menüden seçim yapıldığında mobil menüyü kapat

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("mobile-active");
        menuButton.textContent = "☰";

    });

});


// ---------------------------------------------------------
// Sayfa içi bağlantılarda yumuşak geçiş
// ---------------------------------------------------------

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(event) {

        const targetId = this.getAttribute("href");

        if (targetId === "#") return;

        const target = document.querySelector(targetId);

        if (target) {

            event.preventDefault();

            const navbarHeight = navbar.offsetHeight;

            const position =
                target.getBoundingClientRect().top +
                window.pageYOffset -
                navbarHeight;

            window.scrollTo({
                top: position,
                behavior: "smooth"
            });

        }

    });

});


// ---------------------------------------------------------
// Scroll reveal animasyonu
// ---------------------------------------------------------

const revealElements = document.querySelectorAll(
    ".corporate-content, " +
    ".service-card, " +
    ".project-card, " +
    ".global-content, " +
    ".map-placeholder, " +
    ".quality-content, " +
    ".contact > div"
);

revealElements.forEach(element => {
    element.classList.add("reveal");
});


const observer = new IntersectionObserver(

    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("reveal-visible");

                observer.unobserve(entry.target);

            }

        });

    },

    {
        threshold: 0.12
    }

);


revealElements.forEach(element => {
    observer.observe(element);
});


// ---------------------------------------------------------
// Aktif menü bölümü
// ---------------------------------------------------------

const sections = document.querySelectorAll("main section[id]");

window.addEventListener("scroll", () => {

    let currentSection = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 180;

        if (window.scrollY >= sectionTop) {
            currentSection = section.getAttribute("id");
        }

    });


    document.querySelectorAll(".nav-links a").forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") ===
            "#" + currentSection
        ) {
            link.classList.add("active");
        }

    });

});

const projectModal = document.getElementById("project-modal");

if (projectModal) {
    const modalTitle = document.getElementById("modal-title");
    const modalCategory = document.getElementById("modal-category");
    const modalDescription = document.getElementById("modal-description");
    const modalImage = document.getElementById("modal-image");

    let activeProjectCard = null;
    const closeModal = () => {
        projectModal.classList.remove("active");
        projectModal.setAttribute("aria-hidden", "true");
        document.body.style.overflow = "";
        activeProjectCard?.focus();
    };

    document.querySelectorAll(".project-card").forEach(card => {

        card.setAttribute("role", "button");
        card.setAttribute("tabindex", "0");

        const openModal = () => {
            activeProjectCard = card;
            const project = bomarProjectData.find(item => item.id === card.dataset.project);
            projectModal.dataset.project = project?.id || "";
            const info = card.querySelector(".project-info");

            const title = info.querySelector("h3");
            const category = info.querySelector("p");
            const location = info.querySelector("span");

            modalTitle.textContent = title?.innerText.trim() || "";
            modalCategory.textContent = category?.textContent.trim() || "";
            modalDescription.textContent = project ? project.desc[document.documentElement.lang === "en" ? 1 : 0] : location?.textContent.trim() || "";

            // Image and work scope extracted from the supplied catalogue.
            if (project) {
                modalImage.src = project.images[0];
                modalImage.alt = project.alt[document.documentElement.lang === "en" ? 1 : 0];
                modalImage.style.display = "block";
            } else {
                modalImage.removeAttribute("src");
                modalImage.style.display = "none";
            }
            let gallery = projectModal.querySelector(".modal-gallery");
            if (!gallery) {
                gallery = document.createElement("div");
                gallery.className = "modal-gallery";
                projectModal.querySelector(".modal-body").appendChild(gallery);
            }
            gallery.replaceChildren();
            if (project) project.images.slice(1).forEach((src, index) => {
                const image = document.createElement("img");
                image.src = src;
                image.loading = "lazy";
                image.alt = document.documentElement.lang === "en"
                    ? "Catalogue image of mechanical installations " + (index + 1)
                    : "Katalogdaki mekanik tesisat görseli " + (index + 1);
                gallery.appendChild(image);
            });

            projectModal.classList.add("active");
            projectModal.setAttribute("aria-hidden", "false");
            document.body.style.overflow = "hidden";

            projectModal.querySelector(".modal-close").focus();
        };

        card.addEventListener("click", openModal);

        card.addEventListener("keydown", event => {
            if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                openModal();
            }
        });
    });

    projectModal.querySelector(".modal-close")
        .addEventListener("click", closeModal);

    projectModal.querySelector(".modal-overlay")
        .addEventListener("click", closeModal);

    document.addEventListener("keydown", event => {
        if (event.key === "Escape" &&
            projectModal.classList.contains("active")) {
            closeModal();
        }
    });
}





const bomarMapCountries = [["england", "İngiltere", "England", "GBR"], ["germany", "Almanya", "Germany", "DEU"], ["poland", "Polonya", "Poland", "POL"], ["greece", "Yunanistan", "Greece", "GRC"], ["belarus", "Beyaz Rusya", "Belarus", "BLR"], ["russia", "Rusya", "Russia", "RUS"], ["turkiye", "Türkiye", "Türkiye", "TUR"], ["canada", "Kanada", "Canada", "CAN"], ["saudi", "Suudi Arabistan", "Saudi Arabia", "SAU"], ["uae", "Birleşik Arap Emirlikleri", "United Arab Emirates", "ARE"], ["libya", "Libya", "Libya", "LBY"], ["egypt", "Mısır", "Egypt", "EGY"], ["iraq", "Irak", "Iraq", "IRQ"], ["syria", "Suriye", "Syria", "SYR"], ["nigeria", "Nijerya", "Nigeria", "NGA"], ["angola", "Angola", "Angola", "AGO"], ["tanzania", "Tanzanya", "Tanzania", "TZA"], ["benin", "Benin", "Benin", "BEN"], ["ethiopia", "Etiyopya", "Ethiopia", "ETH"], ["ghana", "Gana", "Ghana", "GHA"], ["uzbekistan", "Özbekistan", "Uzbekistan", "UZB"]];
const bomarCountryProjects = [{"id": "p13-1", "titleEN": "Pinarkent Apartments in Dikmen", "year": "1980", "client": "Pinarkent Construction Koop.", "location": "Dikmen-Ankara", "area": "19200 m2", "page": 13, "row": 1, "category": "residential", "country": "turkiye", "titleTR": "Dikmen Pınarkent Apartmanları"}, {"id": "p13-2", "titleEN": "Army Headquarters Housing in Malatya", "year": "1980", "client": "Army Const.& Real Est. Headquarters", "location": "Malatya", "area": "1650 m2", "page": 13, "row": 2, "category": "residential", "country": "turkiye", "titleTR": "Malatya Ordu Karargâhı Lojmanları"}, {"id": "p13-3", "titleEN": "“Akdeniz Bir” Apartments in Dikmen", "year": "1981", "client": "Akdeniz Bir Construction", "location": "Koop Dikmen-Ankara", "area": "6500 m2", "page": 13, "row": 3, "category": "residential", "country": "turkiye", "titleTR": "Dikmen Akdeniz Bir Apartmanları"}, {"id": "p13-4", "titleEN": "HRH Princess Mas fail Najd Villa Complex", "year": "1982", "client": "HRH Princess Mas fail Najd", "location": "Riyadh-S.Arabia", "area": "5100 m²", "page": 13, "row": 4, "category": "residential", "country": "saudi", "titleTR": "Prenses Mas fail Najd Villa Kompleksi"}, {"id": "p13-5", "titleEN": "Zliten Apartments Blocks", "year": "1982", "client": "Ozdemir Construction and Trade Inc.", "location": "Zliten-Libyan", "area": "11750 m²", "page": 13, "row": 5, "category": "residential", "country": "libya", "titleTR": "Zliten Apartman Blokları"}, {"id": "p13-6", "titleEN": "Mustafa Kokcu Villa", "year": "1985", "client": "Mustafa Pogda Kokcli", "location": "Umitköy-Ankara", "area": "600 m²", "page": 13, "row": 6, "category": "residential", "country": "turkiye", "titleTR": "Mustafa Kökçü Villası"}, {"id": "p13-7", "titleEN": "Midyad Managers and Staff Housing", "year": "1986", "client": "Botas Pipelines General Directorate", "location": "Midyat-Mardin", "area": "5600 m²", "page": 13, "row": 7, "category": "residential", "country": "turkiye", "titleTR": "Midyat Yönetici ve Personel Lojmanları"}, {"id": "p13-8", "titleEN": "Kuwait Embassy Staff Housing", "year": "1986", "client": "Knuresco Construction and Trade Inc.", "location": "GOP- Ankara", "area": "1200 m²", "page": 13, "row": 8, "category": "residential", "country": "turkiye", "titleTR": "Kuveyt Büyükelçiliği Personel Lojmanları"}, {"id": "p13-9", "titleEN": "Kuwait Embassy Ambassadors Residance", "year": "1986", "client": "Knuresco Construction and Trade Inc.", "location": "GOP- Ankara", "area": "2800 m²", "page": 13, "row": 9, "category": "residential", "country": "turkiye", "titleTR": "Kuveyt Büyükelçisi Konutu"}, {"id": "p13-10", "titleEN": "Edwin French Villa", "year": "1987", "client": "Edwin French", "location": "Selimiye-Marmaris", "area": "1000 m²", "page": 13, "row": 10, "category": "residential", "country": "turkiye", "titleTR": "Edwin French Villası"}, {"id": "p13-11", "titleEN": "M Gencler Apartments- Gencler Blocks", "year": "1989", "client": "Mehmet Gencler Construction Co.", "location": "GOP-Ankara", "area": "9500 m²", "page": 13, "row": 11, "category": "residential", "country": "turkiye", "titleTR": "M. Gençler Apartmanları — Gençler Blokları"}, {"id": "p13-12", "titleEN": "Seferihisar Summer Houses", "year": "1989", "client": "Gamas Construction and Trade Inc.", "location": "Seferihisar-izmir", "area": "16000 m²", "page": 13, "row": 12, "category": "residential", "country": "turkiye", "titleTR": "Seferihisar Yazlık Konutları"}, {"id": "p13-13", "titleEN": "B.Ozer Villa", "year": "1990", "client": "Belgium Cjzer", "location": "Bolu", "area": "450 m²", "page": 13, "row": 13, "category": "residential", "country": "turkiye", "titleTR": "B. Özer Villası"}, {"id": "p13-14", "titleEN": "Saroz Holiday Village", "year": "1990", "client": "Transtiirk Holding Inc.", "location": "Gelibolu", "area": "80000 m²", "page": 13, "row": 14, "category": "residential", "country": "turkiye", "titleTR": "Saroz Tatil Köyü"}, {"id": "p13-15", "titleEN": "M.Gencler Dikmen High Income Housing", "year": "1990", "client": "M.Gencler Construction Co.", "location": "Dikmen-Ankara", "area": "2600 m²", "page": 13, "row": 15, "category": "residential", "country": "turkiye", "titleTR": "M. Gençler Dikmen Konutları"}, {"id": "p13-16", "titleEN": "Anakent Resort Houses", "year": "1991", "client": "Aka Turin A.Ş.", "location": "Alanya", "area": "20500 m²", "page": 13, "row": 16, "category": "residential", "country": "turkiye", "titleTR": "Anakent Tatil Konutları"}, {"id": "p13-17", "titleEN": "Ovecler Apartment Blocks", "year": "1992", "client": "M.Gencler Construction Co.", "location": "Öveçler-Ankara", "area": "12800 m²", "page": 13, "row": 17, "category": "residential", "country": "turkiye", "titleTR": "Öveçler Apartman Blokları"}, {"id": "p13-18", "titleEN": "0.Tuncata Villa", "year": "1993", "client": "Özden Tuncata", "location": "Beysukent-Ankara", "area": "650 m²", "page": 13, "row": 18, "category": "residential", "country": "turkiye", "titleTR": "Ö. Tuncata Villası"}, {"id": "p13-19", "titleEN": "Goclaw Housing 104 Villas", "year": "1993", "client": "Goclaw Construction and Electrim Co.", "location": "Warsaw-Poland", "area": "48000 m²", "page": 13, "row": 19, "category": "residential", "country": "poland", "titleTR": "Goclaw Konutları — 104 Villa"}, {"id": "p13-20", "titleEN": "Strauss Berg Villas", "year": "1993", "client": "BBB Insurance Inc.", "location": "Berlin-Germany", "area": "18600 m²", "page": 13, "row": 20, "category": "residential", "country": "germany", "titleTR": "Strauss Berg Villaları"}, {"id": "p13-21", "titleEN": "Cagdaskent Mass Housing Complex", "year": "1994", "client": "Kırklareli Municipality", "location": "Kırklareli", "area": "45000 m²", "page": 13, "row": 21, "category": "residential", "country": "turkiye", "titleTR": "Çağdaşkent Toplu Konut Kompleksi"}, {"id": "p13-22", "titleEN": "Alfa Bank Mitino Rosdostveno Villas", "year": "1995", "client": "Alfa Bank - Feo Construction Inc.", "location": "Martino-Moskova", "area": "27000 m²", "page": 13, "row": 22, "category": "residential", "country": "russia", "titleTR": "Alfa Bank Mitino Rosdostveno Villaları"}, {"id": "p13-23", "titleEN": "Hocahanım Apartments", "year": "1995", "client": "Hocahanim Real Estate Inc.", "location": "Sancak-Ankara", "area": "3500 m²", "page": 13, "row": 23, "category": "residential", "country": "turkiye", "titleTR": "Hocahanım Apartmanları"}, {"id": "p13-24", "titleEN": "H.Ali Demirel Villa", "year": "1997", "client": "H.Ali Demirel", "location": "Ankara", "area": "2000 m²", "page": 13, "row": 24, "category": "residential", "country": "turkiye", "titleTR": "H. Ali Demirel Villası"}, {"id": "p13-25", "titleEN": "0zden Apartments", "year": "2000", "client": "Kuru Construction and Trade Inc.", "location": "Çigdem M.-Ankara", "area": "3200 m²", "page": 13, "row": 25, "category": "residential", "country": "turkiye", "titleTR": "Özden Apartmanları"}, {"id": "p13-26", "titleEN": "Residence of Mayor", "year": "2000", "client": "Corum Municipality", "location": "Çorum", "area": "3000 m²", "page": 13, "row": 26, "category": "residential", "country": "turkiye", "titleTR": "Belediye Başkanı Konutu"}, {"id": "p13-27", "titleEN": "Egypt Cairo Housing Complex", "year": "2009", "client": "Capital Consulting Co.Ltd", "location": "Cairo Egypt", "area": "240000 m²", "page": 13, "row": 27, "category": "residential", "country": "egypt", "titleTR": "Mısır Kahire Konut Kompleksi"}, {"id": "p13-28", "titleEN": "Qaha Housing and Shopping Mall", "year": "2009", "client": "Capital Consulting Co.Ltd", "location": "Cairo Egypt", "area": "30000 m²", "page": 13, "row": 28, "category": "residential", "country": "egypt", "titleTR": "Qaha Konutları ve Alışveriş Merkezi"}, {"id": "p13-29", "titleEN": "Al Hayyam Housing Complex", "year": "2011", "client": "Ministry of Energy and Municipality", "location": "Baghdad lraq", "area": "250000 m²", "page": 13, "row": 29, "category": "residential", "country": "iraq", "titleTR": "Al Hayyam Konut Kompleksi"}, {"id": "p13-30", "titleEN": "Viana Housing and Commercial Complex", "year": "2015", "client": "Air Forces Command of Angola", "location": "Luanda Angola", "area": "960000 m²", "page": 13, "row": 30, "category": "residential", "country": "angola", "titleTR": "Viana Konut ve Ticaret Kompleksi"}, {"id": "p13-31", "titleEN": "Military Forces Command Prefabricated Housing", "year": "2016", "client": "Onsanyapi Construction LLC", "location": "Luanda Angola", "area": "4600000 m²", "page": 13, "row": 31, "category": "residential", "country": "angola", "titleTR": "Silahlı Kuvvetler Komutanlığı Prefabrik Konutları"}, {"id": "p13-32", "titleEN": "Orozo Housing and Commercial Complex", "year": "2017", "client": "Mao bi Consulting Corp Orozo", "location": "Nigeria 1", "area": "8000 m²", "page": 13, "row": 32, "category": "residential", "country": "nigeria", "titleTR": "Orozo Konut ve Ticaret Kompleksi"}, {"id": "p13-33", "titleEN": "Kuje Housing and Commercial Complex", "year": "2017", "client": "Mao bi Consulting Corp", "location": "Kuje, Abuja, Nigeria", "area": "11000 m²", "page": 13, "row": 33, "category": "residential", "country": "nigeria", "titleTR": "Kuje Konut ve Ticaret Kompleksi"}, {"id": "p13-34", "titleEN": "Dar Es Salaam Housing Settlement", "year": "2018", "client": "George Deki Company dar Es salaam", "location": "Tanzani", "area": "23000 m²", "page": 13, "row": 34, "category": "residential", "country": "tanzania", "titleTR": "Darüsselam Konut Yerleşimi"}, {"id": "p13-35", "titleEN": "Ministry of Education Housing Complex", "year": "2018", "client": "Onsanyapi Construction LLC", "location": "Luanda Angola", "area": "1100000 m²", "page": 13, "row": 35, "category": "residential", "country": "angola", "titleTR": "Eğitim Bakanlığı Konut Kompleksi"}, {"id": "p13-36", "titleEN": "Highway Control Officers Housing", "year": "2018", "client": "Ministry of Highways", "location": "Abuja Nigeria", "area": "12000 m²", "page": 13, "row": 36, "category": "residential", "country": "nigeria", "titleTR": "Karayolu Kontrol Görevlileri Konutları"}, {"id": "p19-1", "titleEN": "Habur Customs House Building", "year": "1982", "client": "Emek Construction Inc.", "location": "Mardin", "area": "250 m²", "page": 19, "row": 1, "category": "commercial", "country": "turkiye", "titleTR": "Habur Gümrük Binası"}, {"id": "p19-2", "titleEN": "Mas fail Najd Administrative Building", "year": "1982", "client": "Mas fail Najd Construction & Trade Inc.", "location": "Riyadh-sSArabia", "area": "550 m²", "page": 19, "row": 2, "category": "commercial", "country": "saudi", "titleTR": "Mas fail Najd İdari Binası"}, {"id": "p19-3", "titleEN": "Najd Shopping Centre and Office Bldg.", "year": "1983", "client": "Mas fail Najd Construction & Trade Inc.", "location": "Jeddah-S.Arabia", "area": "12500 m²", "page": 19, "row": 3, "category": "commercial", "country": "saudi", "titleTR": "Najd Alışveriş Merkezi ve Ofis Binası"}, {"id": "p19-4", "titleEN": "Haffco Inc. Administration Building", "year": "1983", "client": "Huffington Petroleum and Natural Gas Inc", "location": "GOP-Ankara", "area": "1650 m²", "page": 19, "row": 4, "category": "commercial", "country": "turkiye", "titleTR": "Haffco İdari Binası"}, {"id": "p19-5", "titleEN": "PTT General Directorate Building", "year": "1983", "client": "Akay Construction and Trade Inc.", "location": "Bolu", "area": "4800 m²", "page": 19, "row": 5, "category": "commercial", "country": "turkiye", "titleTR": "PTT Genel Müdürlük Binası"}, {"id": "p19-6", "titleEN": "Kuwait Embassy Building", "year": "1983", "client": "Knurecco Kuwait Investment Inc.", "location": "Gop-Ankara", "area": "5400 m²", "page": 19, "row": 6, "category": "commercial", "country": "turkiye", "titleTR": "Kuveyt Büyükelçiliği Binası"}, {"id": "p19-7", "titleEN": "Credits and Dormotories Buiding", "year": "1984", "client": "Ministry of Education General Dir.", "location": "Ankara", "area": "2500 m²", "page": 19, "row": 7, "category": "commercial", "country": "turkiye", "titleTR": "Kredi ve Yurtlar Binası"}, {"id": "p19-8", "titleEN": "Halk Bank Samsun Brach", "year": "1984", "client": "General Directorate of Halk Bank", "location": "Samsun", "area": "1600 m²", "page": 19, "row": 8, "category": "commercial", "country": "turkiye", "titleTR": "Halkbank Samsun Şubesi"}, {"id": "p19-9", "titleEN": "Botas Sea Administration Building", "year": "1986", "client": "Botas Pipeline General Directorate", "location": "Ceyhan Adana", "area": "4300 m²", "page": 19, "row": 9, "category": "commercial", "country": "turkiye", "titleTR": "BOTAŞ Deniz İşletmesi Binası"}, {"id": "p19-10", "titleEN": "Mobil Oil Batman Administrative Building", "year": "1987", "client": "Mobil oil General Directorate", "location": "Batman-Siirt", "area": "1800 m²", "page": 19, "row": 10, "category": "commercial", "country": "turkiye", "titleTR": "Mobil Oil Batman İdari Binası"}, {"id": "p19-11", "titleEN": "Dikimevi Tax Office", "year": "1992", "client": "Ministry of Finance", "location": "Dikimevi-Ankara", "area": "2500 m²", "page": 19, "row": 11, "category": "commercial", "country": "turkiye", "titleTR": "Dikimevi Vergi Dairesi"}, {"id": "p19-12", "titleEN": "Navy Headquarters Service & Rec. Bldg.", "year": "1993", "client": "MKE General Directorate.", "location": "Yeşildere-Ankara", "area": "3000 m²", "page": 19, "row": 12, "category": "commercial", "country": "turkiye", "titleTR": "Deniz Kuvvetleri Hizmet ve Dinlenme Binası"}, {"id": "p19-13", "titleEN": "H.A.Demirel Office Building", "year": "1994", "client": "H.Ali Demirel", "location": "Maltepe-Ankara", "area": "61000 m²", "page": 19, "row": 13, "category": "commercial", "country": "turkiye", "titleTR": "H. A. Demirel Ofis Binası"}, {"id": "p19-14", "titleEN": "Ministry of Finance Building", "year": "1996", "client": "Ministry of Finance", "location": "Ankara", "area": "16500 m²", "page": 19, "row": 14, "category": "commercial", "country": "turkiye", "titleTR": "Maliye Bakanlığı Binası"}, {"id": "p19-15", "titleEN": "Yıldız Office Building", "year": "1999", "client": "Eser Construction and Trade Inc.", "location": "Yı|dız- Ankara", "area": "2800 m²", "page": 19, "row": 15, "category": "commercial", "country": "turkiye", "titleTR": "Yıldız Ofis Binası"}, {"id": "p19-16", "titleEN": "ASKI Etimesut Regional Administrative Bl.", "year": "2000", "client": "Hona Construction Inc.", "location": "Etimesgut-Ankara", "area": "8000 m²", "page": 19, "row": 16, "category": "commercial", "country": "turkiye", "titleTR": "ASKİ Etimesgut Bölge İdari Binası"}, {"id": "p19-17", "titleEN": "Akdeniz Shopping Mall & Office Bldg.", "year": "2000", "client": "Akdeniz Cultural Dev 8» Trade Co.Ltd.", "location": "Balgat-Ankara", "area": "19400 m²", "page": 19, "row": 17, "category": "commercial", "country": "turkiye", "titleTR": "Akdeniz Alışveriş Merkezi ve Ofis Binası"}, {"id": "p19-18", "titleEN": "CCC Cotonou Trade Centre and Office Bl.", "year": "2000", "client": "Burlington Investment Inc.", "location": "Cotonou-Benin", "area": "41000 m²", "page": 19, "row": 18, "category": "commercial", "country": "benin", "titleTR": "CCC Cotonou Ticaret Merkezi ve Ofis Binası"}, {"id": "p19-19", "titleEN": "Ministry of Justice Istanbul Regional Bldg", "year": "2008", "client": "Ministry of Justice", "location": "Istanbul Turkey", "area": "60000 m²", "page": 19, "row": 19, "category": "commercial", "country": "turkiye", "titleTR": "Adalet Bakanlığı İstanbul Bölge Binası"}, {"id": "p19-20", "titleEN": "Njango Yeto Viana Project Administrative Bldg.", "year": "2009", "client": "Njango Yeto Investment Coop.", "location": "Luanda Angola", "area": "9600 m²", "page": 19, "row": 20, "category": "commercial", "country": "angola", "titleTR": "Njango Yeto Viana Projesi İdari Binası"}, {"id": "p19-21", "titleEN": "Njango Yeto Viana Project School Buildings", "year": "2009", "client": "Njango Yetto Investment Coop", "location": "Luanda, Angola", "area": "6840 m²", "page": 19, "row": 21, "category": "commercial", "country": "angola", "titleTR": "Njango Yeto Viana Projesi Okul Binaları"}, {"id": "p19-22", "titleEN": "Promenate Building Shopping Centre", "year": "2016", "client": "Promenate Investment Corp.", "location": "Luanda Angola", "area": "14800 m²", "page": 19, "row": 22, "category": "commercial", "country": "angola", "titleTR": "Promenate Alışveriş Merkezi"}, {"id": "p28-1", "titleEN": "State Opera and Ballet Hall Restoration", "year": "1981", "client": "Directorate of State Opera and Ballet", "location": "Ulus-Ankara", "area": "1100 m²", "page": 28, "row": 1, "category": "social", "country": "turkiye", "titleTR": "Devlet Opera ve Bale Salonu Restorasyonu"}, {"id": "p28-2", "titleEN": "State Paintings and Sculptures Gallery", "year": "1982", "client": "Ministry of Culture Museums General Dir.", "location": "Ulus-Ankara", "area": "3000 m²", "page": 28, "row": 2, "category": "social", "country": "turkiye", "titleTR": "Devlet Resim ve Heykel Galerisi"}, {"id": "p28-3", "titleEN": "Pricess Mas fail Najd Office Building", "year": "1982", "client": "Mas fail Najd Investment and Trading Inc.", "location": "Riyadh-S.Arabia", "area": "550 m²", "page": 28, "row": 3, "category": "social", "country": "saudi", "titleTR": "Prenses Mas fail Najd Ofis Binası"}, {"id": "p28-4", "titleEN": "Najd Shopping Mall", "year": "1982", "client": "HRH Princess Mas fail Najd", "location": "Jeddah-S.Arabia", "area": "12500 m²", "page": 28, "row": 4, "category": "social", "country": "saudi", "titleTR": "Najd Alışveriş Merkezi"}, {"id": "p28-5", "titleEN": "Yeni Sahne Theater Restoration Works", "year": "1983", "client": "State Theaters General Directorate", "location": "Yenişehir-Ankara", "area": "1250 m²", "page": 28, "row": 5, "category": "social", "country": "turkiye", "titleTR": "Yeni Sahne Tiyatrosu Restorasyonu"}, {"id": "p28-6", "titleEN": "Botas Social and Cultural Building", "year": "1986", "client": "Botas Pipelines General Directorate", "location": "Dörtyol-iskenderun", "area": "800 m²", "page": 28, "row": 6, "category": "social", "country": "turkiye", "titleTR": "BOTAŞ Sosyal ve Kültürel Binası"}, {"id": "p28-7", "titleEN": "Dozen Medical Test Laboratories", "year": "1993", "client": "Biological Sciences Inc.", "location": "Yenişehir-Ankara", "area": "5000 m²", "page": 28, "row": 7, "category": "social", "country": "turkiye", "titleTR": "Dozen Tıbbi Test Laboratuvarları"}, {"id": "p28-8", "titleEN": "Cankaya Cultural Centre & Theater Hall", "year": "1994", "client": "Ankara Cankaya Municipality", "location": "Çankaya-Ankara", "area": "53000 m²", "page": 28, "row": 8, "category": "social", "country": "turkiye", "titleTR": "Çankaya Kültür Merkezi ve Tiyatro Salonu"}, {"id": "p28-9", "titleEN": "Ovecler Bazaaar and the Wedding Hall", "year": "1994", "client": "Ankara Cankaya Municipality", "location": "Öveçler-Ankara", "area": "40000 m²", "page": 28, "row": 9, "category": "social", "country": "turkiye", "titleTR": "Öveçler Pazarı ve Düğün Salonu"}, {"id": "p28-10", "titleEN": "Nizhny Nozgorod Airport & Terminal Bld.", "year": "1995", "client": "N. Novgorod Airport Administration", "location": "N.Novgorod-Russia", "area": "4500 m²", "page": 28, "row": 10, "category": "social", "country": "russia", "titleTR": "Nizhny Novgorod Havalimanı ve Terminal Binası"}, {"id": "p28-11", "titleEN": "Kofcas Shopping Centre", "year": "1997", "client": "Kirklareli Municipality", "location": "Kırklareli", "area": "4135 m²", "page": 28, "row": 11, "category": "social", "country": "turkiye", "titleTR": "Kofças Alışveriş Merkezi"}, {"id": "p28-12", "titleEN": "Topkapi Master Plan & Recreation C.", "year": "1998", "client": "Hona Construction and Trade Inc.", "location": "Topkapı-istanbul", "area": "120000 m²", "page": 28, "row": 12, "category": "social", "country": "turkiye", "titleTR": "Topkapı Master Plan ve Rekreasyon Merkezi"}, {"id": "p28-13", "titleEN": "IDEF Defence Industries Exebition Area", "year": "1998", "client": "CNR Exhibitions Inc.", "location": "Şaşmaz-Ankara", "area": "110000 m²", "page": 28, "row": 13, "category": "social", "country": "turkiye", "titleTR": "IDEF Savunma Sanayii Sergi Alanı"}, {"id": "p28-14", "titleEN": "Akdeniz Shopping Centre and Offices", "year": "1999", "client": "Akdeniz Cultural and Trade Dev Co.", "location": "Balgat-Ankara", "area": "19400 m²", "page": 28, "row": 14, "category": "social", "country": "turkiye", "titleTR": "Akdeniz Alışveriş Merkezi ve Ofisleri"}, {"id": "p28-15", "titleEN": "Corum City Centre Master Plan", "year": "1999", "client": "Corom Municipality", "location": "Merkez, Çorum", "area": "87000 m²", "page": 28, "row": 15, "category": "social", "country": "turkiye", "titleTR": "Çorum Kent Merkezi Master Planı"}, {"id": "p28-16", "titleEN": "Islamic centre Landmark Tower Mosque", "year": "2007", "client": "Aim Investment Corporation", "location": "Abu Dhabi, UAE", "area": "130000 m²", "page": 28, "row": 16, "category": "social", "country": "uae", "titleTR": "Islamic Centre Landmark Tower Camisi"}, {"id": "p28-17", "titleEN": "Kid’s Town, Chisdrens Education and Rec. Centre", "year": "2007", "client": "Aim Investment Corporation", "location": "Abu Dhabi, UAE", "area": "180000 m²", "page": 28, "row": 17, "category": "social", "country": "uae", "titleTR": "Kid’s Town Çocuk Eğitim ve Rekreasyon Merkezi"}, {"id": "p28-18", "titleEN": "Auto Mall Car Sales & Marketing Centre", "year": "2008", "client": "Aim Investment Corporation", "location": "Abu Dhabi, UAE", "area": "220000 m²", "page": 28, "row": 18, "category": "social", "country": "uae", "titleTR": "Auto Mall Otomobil Satış ve Pazarlama Merkezi"}, {"id": "p28-19", "titleEN": "Akdagmadeni Social and Cultural Building", "year": "2008", "client": "Yozgat Akdagmadeni Municipality", "location": "Akdaş madeni, Yozgat", "area": "12800 m²", "page": 28, "row": 19, "category": "social", "country": "turkiye", "titleTR": "Akdağmadeni Sosyal ve Kültürel Binası"}, {"id": "p28-20", "titleEN": "Bloom Housing meeting Hall and Social Bldg", "year": "2009", "client": "Sezer Construction and Investment LLC", "location": "Abu Dhabi UAE", "area": "980 m²", "page": 28, "row": 20, "category": "social", "country": "uae", "titleTR": "Bloom Konutları Toplantı Salonu ve Sosyal Binası"}, {"id": "p28-21", "titleEN": "Mohammad Sadr and Sisters Shrine", "year": "2015", "client": "Baghdat University", "location": "Nacef, Iraq", "area": "28000 m²", "page": 28, "row": 21, "category": "social", "country": "iraq", "titleTR": "Mohammad Sadr ve Kız Kardeşleri Türbesi"}, {"id": "p28-22", "titleEN": "Ahiler Housing Complex Cultural centre", "year": "2016", "client": "Kudret Yücedag Mühendislik BUrosu", "location": "Kindam, Kırşehir", "area": "148000 m²", "page": 28, "row": 22, "category": "social", "country": "turkiye", "titleTR": "Ahiler Konut Kompleksi Kültür Merkezi"}, {"id": "p28-23", "titleEN": "Beylerbeyi Villa Complex Social Buildings", "year": "2019", "client": "Boas Investment Construction & Trade JV", "location": "Beylerbeyi, Istanbul", "area": "3000 m²", "page": 28, "row": 23, "category": "social", "country": "turkiye", "titleTR": "Beylerbeyi Villa Kompleksi Sosyal Binaları"}, {"id": "p33-1", "titleEN": "Erdek Military Hotel", "year": "1984", "client": "Gencer Construction Co.Ltd.", "location": "Erdek", "area": "1750 m²", "page": 33, "row": 1, "category": "tourism", "country": "turkiye", "titleTR": "Erdek Askerî Oteli"}, {"id": "p33-2", "titleEN": "Credits and Dormotories Directorate", "year": "1984", "client": "Ministry of Education", "location": "Ankara", "area": "1150 m²", "page": 33, "row": 2, "category": "tourism", "country": "turkiye", "titleTR": "Kredi ve Yurtlar Müdürlüğü"}, {"id": "p33-3", "titleEN": "Park Restaurant and Recreation Center", "year": "1985", "client": "Ankara Metropolitan Municipality", "location": "Yenimahalle-Ankara", "area": "7000 m²", "page": 33, "row": 3, "category": "tourism", "country": "turkiye", "titleTR": "Park Restoran ve Rekreasyon Merkezi"}, {"id": "p33-4", "titleEN": "Camtur Holiday Village", "year": "1986", "client": "Camtur Tourism Inc.", "location": "Alanya", "area": "45000 m²", "page": 33, "row": 4, "category": "tourism", "country": "turkiye", "titleTR": "Çamtur Tatil Köyü"}, {"id": "p33-5", "titleEN": "Lodos Tourism Complex and Yatch Club", "year": "1986", "client": "Lodos Tourism Development Inc.", "location": "Marmaris", "area": "1000 m²", "page": 33, "row": 5, "category": "tourism", "country": "turkiye", "titleTR": "Lodos Turizm Kompleksi ve Yat Kulübü"}, {"id": "p33-6", "titleEN": "Al-Gurayath Emirates Residance", "year": "1987", "client": "Ermes Construction and Trade Inc.", "location": "A.Gurayat-S.Arabia", "area": "3600 m²", "page": 33, "row": 6, "category": "tourism", "country": "saudi", "titleTR": "Al-Gurayath Emirlik Konutu"}, {"id": "p33-7", "titleEN": "Tepesan Hotel Complex", "year": "1988", "client": "Tepesan Tourism Inc.", "location": "Kuşadası", "area": "4950 m²", "page": 33, "row": 7, "category": "tourism", "country": "turkiye", "titleTR": "Tepesan Otel Kompleksi"}, {"id": "p33-8", "titleEN": "Antalya Inter-dom Hotel", "year": "1988", "client": "Inderdom Gmbh- Aachen", "location": "Antalya", "area": "12100 m²", "page": 33, "row": 8, "category": "tourism", "country": "turkiye", "titleTR": "Antalya Inter-dom Oteli"}, {"id": "p33-9", "titleEN": "Doriendorf Holiday Village", "year": "1988", "client": "Cag Tourism and Trade Inc.", "location": "Datha-Muğla", "area": "42000 m²", "page": 33, "row": 9, "category": "tourism", "country": "turkiye", "titleTR": "Doriendorf Tatil Köyü"}, {"id": "p33-10", "titleEN": "Sas Hotel", "year": "1988", "client": "Sas Tourism Construction & Trade Inc.", "location": "Kuşadası", "area": "3500 m²", "page": 33, "row": 10, "category": "tourism", "country": "turkiye", "titleTR": "Sas Oteli"}, {"id": "p33-11", "titleEN": "Kiyi Kislacik Hotel", "year": "1989", "client": "Petrokent Tourism Inc.", "location": "Güllük-Muğla", "area": "3000 m²", "page": 33, "row": 11, "category": "tourism", "country": "turkiye", "titleTR": "Kıyı Kışlacık Oteli"}, {"id": "p33-12", "titleEN": "Petro Club Hotel and Congress Centre", "year": "1990", "client": "Petrokent Tourism Inc.", "location": "Side-Antalya", "area": "14000 m²", "page": 33, "row": 12, "category": "tourism", "country": "turkiye", "titleTR": "Petro Club Otel ve Kongre Merkezi"}, {"id": "p33-13", "titleEN": "Kardelen Winter SprortsHotel", "year": "1990", "client": "Kardelen Construction and Tourism Inc.", "location": "Bolu", "area": "15000 m²", "page": 33, "row": 13, "category": "tourism", "country": "turkiye", "titleTR": "Kardelen Kış Sporları Oteli"}, {"id": "p33-14", "titleEN": "Otel Bella amex Building", "year": "1990", "client": "Aka Tourism Inc.", "location": "Side-Antalya", "area": "5600 m²", "page": 33, "row": 14, "category": "tourism", "country": "turkiye", "titleTR": "Bella Oteli Ek Binası"}, {"id": "p33-15", "titleEN": "Degirmenburnu Holiday Village", "year": "1990", "client": "Mermeris Tourism Inc", "location": "Bodrum-Muğla", "area": "12800 m²", "page": 33, "row": 15, "category": "tourism", "country": "turkiye", "titleTR": "Değirmenburnu Tatil Köyü"}, {"id": "p33-16", "titleEN": "Saroz Hotel and Holiday Village", "year": "1991", "client": "Transturk Holding Inc.", "location": "Gelibolu", "area": "80000 m²", "page": 33, "row": 16, "category": "tourism", "country": "turkiye", "titleTR": "Saroz Oteli ve Tatil Köyü"}, {"id": "p33-17", "titleEN": "Anakent Holiday Village", "year": "1991", "client": "Aka Tourism Inc.", "location": "Alanya", "area": "20500 m²", "page": 33, "row": 17, "category": "tourism", "country": "turkiye", "titleTR": "Anakent Tatil Köyü"}, {"id": "p33-18", "titleEN": "Akahan Hotel", "year": "1992", "client": "Aka Tourism Inc.", "location": "Colaklı-Antalya", "area": "17000 m²", "page": 33, "row": 18, "category": "tourism", "country": "turkiye", "titleTR": "Akahan Oteli"}, {"id": "p33-19", "titleEN": "Mini Football and Tennis Courts", "year": "1992", "client": "TPAO Turkish Petroleum Inc.", "location": "Ankara", "area": "4100 m²", "page": 33, "row": 19, "category": "tourism", "country": "turkiye", "titleTR": "Mini Futbol ve Tenis Kortları"}, {"id": "p33-20", "titleEN": "Yukselis Hotel and Trade Centre", "year": "1994", "client": "H.Ali Demirel", "location": "Ankara", "area": "61000 m²", "page": 33, "row": 20, "category": "tourism", "country": "turkiye", "titleTR": "Yükseliş Otel ve Ticaret Merkezi"}, {"id": "p33-21", "titleEN": "Erciyes Winter Hotel", "year": "1996", "client": "Kayseri Chamber of Trade", "location": "Erciyes-Kayseri", "area": "3000 m²", "page": 33, "row": 21, "category": "tourism", "country": "turkiye", "titleTR": "Erciyes Kış Oteli"}, {"id": "p33-22", "titleEN": "Bel fan Winter Sports Hotel", "year": "1996", "client": "Bel fan Tourism and Trade Inc.", "location": "Erciyes-Kayseri", "area": "2880 m²", "page": 33, "row": 22, "category": "tourism", "country": "turkiye", "titleTR": "Bel fan Kış Sporları Oteli"}, {"id": "p33-23", "titleEN": "Asas Sports Comlex( Stadium for 20000)", "year": "1997", "client": "Asas Packaging and Printing Inc.", "location": "Yenikent-Ankara", "area": "150000 m²", "page": 33, "row": 23, "category": "tourism", "country": "turkiye", "titleTR": "Asaş Spor Kompleksi — 20.000 Kişilik Stadyum"}, {"id": "p33-24", "titleEN": "Asas Sports Hotel", "year": "1997", "client": "Asas Packaging and Printing Inc.", "location": "Yenikent-Ankara", "area": "4000 m²", "page": 33, "row": 24, "category": "tourism", "country": "turkiye", "titleTR": "Asaş Spor Oteli"}, {"id": "p33-25", "titleEN": "Asas Swimming Complex and Tennis Club", "year": "1998", "client": "Asas Packaging and Printing Inc.", "location": "Yenikent-Ankara", "area": "8000 m²", "page": 33, "row": 25, "category": "tourism", "country": "turkiye", "titleTR": "Asaş Yüzme Kompleksi ve Tenis Kulübü"}, {"id": "p33-26", "titleEN": "Minsk Hotel (Construction Management)", "year": "2001", "client": "Ems as Construction and Trade Inc.", "location": "Minsk-Belarus", "area": "30000 m²", "page": 33, "row": 26, "category": "tourism", "country": "belarus", "titleTR": "Minsk Oteli — İnşaat Yönetimi"}, {"id": "p33-27", "titleEN": "Hayitli Holiday Village", "year": "2009", "client": "Merpisa Thermal Tourism Inc.", "location": "Dikili Turkey", "area": "15000 m²", "page": 33, "row": 27, "category": "tourism", "country": "turkiye", "titleTR": "Hayıtlı Tatil Köyü"}, {"id": "p33-28", "titleEN": "Sorgun Thermal Hotel and Aparts", "year": "2009", "client": "Total Petroleum Inc.", "location": "Yozgat Turkey", "area": "46000 m²", "page": 33, "row": 28, "category": "tourism", "country": "turkiye", "titleTR": "Sorgun Termal Oteli ve Apartları"}, {"id": "feature-7", "titleTR": "Mahall Ankara", "titleEN": "Mahall Ankara", "country": "turkiye", "location": "Ankara", "year": "2014–2015", "page": 7, "category": "residential"}, {"id": "feature-8", "titleTR": "Başkent Emlak Konutları", "titleEN": "Başkent Emlak Housing", "country": "turkiye", "location": "Ankara", "year": "2017", "page": 8, "category": "residential", "note": ["Katalogda “devam” olarak belirtilmiş; güncel durum doğrulanmadı.", "Listed as ongoing in the catalogue; current status unverified."]}, {"id": "feature-9", "titleTR": "Almila Evleri", "titleEN": "Almila Housing", "country": "turkiye", "location": "Ankara Yaşamkent", "year": "", "page": 9, "category": "residential"}, {"id": "feature-10", "titleTR": "Tepe Mesa Parkmozaik Konutları", "titleEN": "Tepe Mesa Parkmozaik Housing", "country": "turkiye", "location": "Ankara Yaşamkent", "year": "", "page": 10, "category": "residential"}, {"id": "feature-11", "titleTR": "Ankara Angora Evleri", "titleEN": "Ankara Angora Houses", "country": "turkiye", "location": "Beysukent", "year": "", "page": 11, "category": "residential"}, {"id": "feature-12", "titleTR": "Muğla–Aydın Gülsaray ve Begos Villaları", "titleEN": "Muğla–Aydın Gülsaray and Begos Villas", "country": "turkiye", "location": "Muğla–Aydın", "year": "", "page": 12, "category": "residential"}, {"id": "feature-15", "titleTR": "Cumhurbaşkanlığı Külliyesi", "titleEN": "Presidential Complex", "country": "turkiye", "location": "Ankara", "year": "2013–2014", "page": 15, "category": "commercial"}, {"id": "feature-16", "titleTR": "Cumhurbaşkanlığı Kütüphane ve Sergi Salonu", "titleEN": "Presidential Library and Exhibition Building", "country": "turkiye", "location": "Türkiye", "year": "", "page": 16, "category": "commercial"}, {"id": "feature-17", "titleTR": "Malatya 7. Ana Jet Üssü", "titleEN": "Malatya 7th Main Jet Air Base", "country": "turkiye", "location": "Malatya", "year": "", "page": 17, "category": "commercial"}, {"id": "feature-18", "titleTR": "Ankara Beysupark AVM", "titleEN": "Ankara Beysupark Shopping Centre", "country": "turkiye", "location": "Ankara", "year": "", "page": 18, "category": "commercial", "note": ["Katalogdaki Türkçe ve İngilizce tarihler tutarsız; tarih gösterilmedi.", "The Turkish and English dates in the catalogue differ; dates are omitted."]}, {"id": "feature-21", "titleTR": "Etlik Entegre Sağlık Kampüsü", "titleEN": "Etlik Integrated Healthcare Campus", "country": "turkiye", "location": "Ankara", "year": "", "page": 21, "category": "social"}, {"id": "feature-22", "titleTR": "İkitelli Şehir Hastanesi", "titleEN": "İkitelli City Hospital", "country": "turkiye", "location": "İstanbul", "year": "", "page": 22, "category": "social"}, {"id": "feature-23", "titleTR": "Eskişehir Entegre Sağlık Kampüsü", "titleEN": "Eskişehir Integrated Healthcare Campus", "country": "turkiye", "location": "Eskişehir", "year": "", "page": 23, "category": "social"}, {"id": "feature-24", "titleTR": "Bursa Entegre Sağlık Kampüsü", "titleEN": "Bursa Integrated Healthcare Campus", "country": "turkiye", "location": "Bursa", "year": "", "page": 24, "category": "social"}, {"id": "feature-25", "titleTR": "Ordu Şehir Hastanesi", "titleEN": "Ordu City Hospital", "country": "turkiye", "location": "Ordu", "year": "2021", "page": 25, "category": "social", "note": ["Katalogda “devam” olarak belirtilmiş; güncel durum doğrulanmadı.", "Listed as ongoing in the catalogue; current status unverified."]}, {"id": "feature-26", "titleTR": "İstanbul Üniversitesi Hasdal Yerleşkesi", "titleEN": "İstanbul University Hasdal Campus", "country": "turkiye", "location": "İstanbul", "year": "2021", "page": 26, "category": "social", "note": ["Katalogda “devam” olarak belirtilmiş; güncel durum doğrulanmadı.", "Listed as ongoing in the catalogue; current status unverified."]}, {"id": "feature-27", "titleTR": "Atatürk Kültür Merkezi", "titleEN": "Atatürk Cultural Centre", "country": "turkiye", "location": "İstanbul", "year": "", "page": 27, "category": "social"}, {"id": "feature-30", "titleTR": "Kuzey Irak Dohuk Sheraton Oteli", "titleEN": "Northern Iraq Dohuk Sheraton Hotel", "country": "iraq", "location": "Dohuk", "year": "", "page": 30, "category": "tourism"}, {"id": "feature-31", "titleTR": "Bursa Uludağ Karinna Oteli", "titleEN": "Bursa Uludağ Karinna Hotel", "country": "turkiye", "location": "Bursa Uludağ", "year": "", "page": 31, "category": "tourism"}, {"id": "feature-32", "titleTR": "Ankara Bilkent Otel / Sports International", "titleEN": "Ankara Bilkent Hotel / Sports International", "country": "turkiye", "location": "Ankara", "year": "", "page": 32, "category": "tourism"}];
let bomarSelectedCountry = 'turkiye';
let bomarMapRenderKey = '';
function updateBomarWorldMap(language) {
 const select = document.getElementById('map-country'); if (!select) return;
 const en = language === 'en';
 // The language observer also sees map updates: avoid rebuilding unchanged lists.
 const key = language + '/' + bomarSelectedCountry;
 if (key === bomarMapRenderKey) return; bomarMapRenderKey = key;
 const labels = {
  'world-map-heading': en ? 'OUR PROJECT REFERENCES WORLDWIDE' : 'DÜNYADAKİ PROJE REFERANSLARIMIZ',
  'world-map-svg-title': en ? 'World map' : 'Dünya haritası',
  'world-map-svg-desc': en ? 'Select a red country to view projects from the catalogue. You can also use the country list.' : 'Kırmızı ülkeleri seçerek katalogdaki projeleri görüntüleyin. Ülke listesini de kullanabilirsiniz.',
  'map-instructions': en ? 'Select a country' : 'Bir ülke seçin',
  'map-legend-label': en ? 'Countries named in the catalogue' : 'Katalogda adı geçen ülkeler',
  'map-country-label': en ? 'Choose a country' : 'Ülke seçin',
  'map-source': en ? 'Projects: BOMAR / ŞG PROJE catalogue. Page numbers refer to PDF pages. Catalogue references have not been independently verified.' : 'Projeler: BOMAR / ŞG PROJE kataloğu. Sayfa numaraları PDF sayfalarıdır. Katalog referansları bağımsız olarak doğrulanmadı.'
 };
 Object.entries(labels).forEach(([id,text])=>document.getElementById(id).textContent=text);
 document.getElementById('map-project-list').setAttribute('aria-label',en?'Project list':'Proje listesi');
 if (!select.options.length) bomarMapCountries.forEach(c=>{const option=document.createElement('option');option.value=c[0];select.appendChild(option);});
 bomarMapCountries.forEach((c,i)=>select.options[i].textContent=c[en?2:1]); select.value=bomarSelectedCountry;
 const country=bomarMapCountries.find(c=>c[0]===bomarSelectedCountry);
 document.getElementById('map-selected-name').textContent=country[en?2:1];
 const projects=bomarCountryProjects.filter(p=>p.country===country[0]).sort((a,b)=>(Number(b.year.slice(0,4))||0)-(Number(a.year.slice(0,4))||0));
 document.getElementById('map-project-count').textContent=en ? projects.length+' catalogue records' : projects.length+' katalog kaydı';
 let description=projects.length ? (en ? 'Project names, locations and dates below are taken from the catalogue.' : 'Aşağıdaki proje adları, konumları ve tarihler katalogdan aktarılmıştır.') : (en ? 'The country is named on PDF page 2, but no project with a matching location was found in the project tables or feature pages. This does not mean no work was carried out there.' : 'Ülke PDF sayfa 2’de listeleniyor; proje tablolarında ve tanıtım sayfalarında bu konumla eşleşen proje ayrıntısı bulunamadı. Bu, ülkede hiç iş yapılmadığı anlamına gelmez.');
 if(country[0]==='ghana') description+=en ? ' The English name in the country-list row is inconsistent; the Turkish name Gana is used.' : ' Ülke listesindeki İngilizce isim tutarsızdır; Türkçe Gana adı esas alındı.';
 if(country[0]==='england') description+=en ? ' The marker identifies England; the basemap outlines the United Kingdom.' : ' İşaret İngiltere’yi gösterir; altlık harita Birleşik Krallık sınırlarını içerir.';
 document.getElementById('map-selected-description').textContent=description;
 const category={residential:en?'Residential buildings':'Konutlar',commercial:en?'Administrative & commercial buildings':'İdari ve ticari yapılar',social:en?'Social, cultural & healthcare buildings':'Sosyal, kültürel ve sağlık yapıları',tourism:en?'Tourism, sports & leisure':'Turizm, spor ve eğlence'};
 const list=document.getElementById('map-project-list'); list.replaceChildren();
 projects.forEach(p=>{
  const item=document.createElement('li');
  const title=document.createElement('h4');title.textContent=en?p.titleEN:p.titleTR;
  const meta=document.createElement('p');meta.className='map-project-meta';
  meta.textContent=p.location+' · '+(p.year||(en?'Date not stated':'Tarih belirtilmedi'))+' · PDF '+(en?'page ':'sayfa ')+p.page;
  const type=document.createElement('small');type.textContent=category[p.category];
  item.append(type,title,meta);
  if(p.note){const note=document.createElement('p');note.className='map-project-note';note.textContent=p.note[en?1:0];item.appendChild(note);}
  list.appendChild(item);
 });
 document.querySelectorAll('.country-shapes [data-country]').forEach(shape=>{
  const selected=shape.dataset.country===country[0];shape.classList.toggle('selected',selected);shape.setAttribute('aria-pressed',String(selected));
  const c=bomarMapCountries.find(c=>c[0]===shape.dataset.country);shape.setAttribute('aria-label',c[en?2:1]);shape.querySelector('title').textContent=c[en?2:1];
 });
}
function chooseBomarCountry(value){bomarSelectedCountry=value;updateBomarWorldMap(document.documentElement.lang);}
document.getElementById('map-country')?.addEventListener('change',e=>chooseBomarCountry(e.target.value));
document.querySelectorAll('.country-shapes [data-country]').forEach(shape=>{
 shape.addEventListener('click',()=>chooseBomarCountry(shape.dataset.country));
 shape.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();chooseBomarCountry(shape.dataset.country);}});
});

/* Additive BOMAR TR/EN patch. Keep the original script.js and style.css.
   Translates text nodes, never replaces innerHTML or existing event handlers. */
(() => {
  'use strict';
  const pairs = [
  [
    "BOMAR | İnşaat, Mimari ve Danışmanlık",
    "BOMAR | Construction, Architecture and Consultancy"
  ],
  [
    "BOMAR - İnşaat, mimari, mühendislik ve danışmanlık projeleri.",
    "BOMAR - Construction, architecture, engineering and consultancy projects."
  ],
  [
    "ANA SAYFA",
    "HOME"
  ],
  [
    "KURUMSAL",
    "ABOUT US"
  ],
  [
    "PROJELER",
    "PROJECTS"
  ],
  [
    "FAALİYET ALANLARI",
    "SERVICES"
  ],
  [
    "GLOBAL",
    "GLOBAL"
  ],
  [
    "İLETİŞİM",
    "CONTACT"
  ],
  [
    "Menüyü aç",
    "Open menu"
  ],
  [
    "Menüyü kapat",
    "Close menu"
  ],
  [
    "Kapat",
    "Close"
  ],
  [
    "Proje görseli",
    "Project image"
  ],
  [
    "İNŞAAT · MİMARİ · MÜHENDİSLİK · DANIŞMANLIK",
    "CONSTRUCTION · ARCHITECTURE · ENGINEERING · CONSULTANCY"
  ],
  [
    "SÖZE DEĞİL,",
    "TRUST IN DEEDS,"
  ],
  [
    "İŞE İNANIN.",
    "NOT WORDS."
  ],
  [
    "Türkiye'den dünyaya uzanan mühendislik, inşaat ve proje deneyimi.",
    "Engineering, construction and project experience extending from Türkiye to the world."
  ],
  [
    "PROJELERİ KEŞFET",
    "EXPLORE PROJECTS"
  ],
  [
    "BOMAR'I TANI",
    "DISCOVER BOMAR"
  ],
  [
    "KEŞFET",
    "EXPLORE"
  ],
  [
    "BOMAR HAKKINDA",
    "ABOUT BOMAR"
  ],
  [
    "Deneyim.",
    "Experience."
  ],
  [
    "Güven.",
    "Trust."
  ],
  [
    "Mühendislik.",
    "Engineering."
  ],
  [
    "BOMAR; inşaat, mimari, mühendislik ve danışmanlık alanlarında ulusal ve uluslararası projelerde faaliyet göstermektedir.",
    "BOMAR operates on domestic and international projects in construction, architecture, engineering and consultancy."
  ],
  [
    "Teknoloji, kalite ve güvenilirliği tüm faaliyetlerinde temel prensip kabul eden BOMAR; müşterilerine etkin, sürdürülebilir ve yüksek standartlarda çözümler sunmayı hedeflemektedir.",
    "With technology, quality and reliability as its guiding principles, BOMAR aims to deliver effective, sustainable solutions to high standards."
  ],
  [
    "KURUMSAL YAPIMIZI KEŞFEDİN → (Bağlantı hazırlanıyor)",
    "EXPLORE OUR COMPANY → (Link pending)"
  ],
  [
    "UZMANLIK ALANLARIMIZ",
    "OUR EXPERTISE"
  ],
  [
    "Ne Yapıyoruz?",
    "What Do We Do?"
  ],
  [
    "Tasarımdan uygulamaya, mühendislikten uluslararası ticarete uzanan çözümler.",
    "Solutions spanning design and delivery, engineering and international trade."
  ],
  [
    "İNŞAAT",
    "CONSTRUCTION"
  ],
  [
    "MİMARİ &",
    "ARCHITECTURE &"
  ],
  [
    "MÜHENDİSLİK",
    "ENGINEERING"
  ],
  [
    "TİCARET",
    "TRADE"
  ],
  [
    "DANIŞMANLIK",
    "CONSULTANCY"
  ],
  [
    "Konut, sağlık, ticari ve sosyal yapıların yapım ve uygulama hizmetleri.",
    "Construction and delivery services for residential, healthcare, commercial and community buildings."
  ],
  [
    "Mimari tasarım, mekanik sistemler, altyapı ve mühendislik çözümleri.",
    "Architectural design, mechanical systems, infrastructure and engineering solutions."
  ],
  [
    "İnşaat malzemeleri ve yan sanayi ürünlerinde uluslararası ithalat ve ihracat faaliyetleri.",
    "International import and export of construction materials and related industry products."
  ],
  [
    "Uluslararası projelerde planlama, koordinasyon ve teknik danışmanlık.",
    "Planning, coordination and technical consultancy for international projects."
  ],
  [
    "KEŞFET → (Bağlantı hazırlanıyor)",
    "EXPLORE → (Link pending)"
  ],
  [
    "SEÇİLMİŞ ÇALIŞMALAR",
    "SELECTED WORK"
  ],
  [
    "Öne Çıkan Projeler",
    "Featured Projects"
  ],
  [
    "TÜM PROJELER → (Bağlantı hazırlanıyor)",
    "ALL PROJECTS → (Link pending)"
  ],
  [
    "SAĞLIK YAPILARI",
    "HEALTHCARE BUILDINGS"
  ],
  [
    "İDARİ YAPILAR",
    "ADMINISTRATIVE BUILDINGS"
  ],
  [
    "KÜLTÜR YAPILARI",
    "CULTURAL BUILDINGS"
  ],
  [
    "Etlik Entegre",
    "Etlik Integrated"
  ],
  [
    "Sağlık Kampüsü",
    "Healthcare Campus"
  ],
  [
    "Cumhurbaşkanlığı",
    "Presidential"
  ],
  [
    "Külliyesi",
    "Complex"
  ],
  [
    "Atatürk Kültür",
    "Atatürk Cultural"
  ],
  [
    "Merkezi",
    "Centre"
  ],
  [
    "İkitelli Şehir Hastanesi",
    "İkitelli City Hospital"
  ],
  [
    "ANKARA · TÜRKİYE — Proje referansı doğrulanmadı",
    "ANKARA · TÜRKİYE — Project reference unverified"
  ],
  [
    "İSTANBUL · TÜRKİYE — Proje referansı doğrulanmadı",
    "İSTANBUL · TÜRKİYE — Project reference unverified"
  ],
  [
    "GLOBAL DENEYİM",
    "GLOBAL EXPERIENCE"
  ],
  [
    "Sınırların Ötesinde",
    "Beyond Borders"
  ],
  [
    "Üreten Güç.",
    "The Power to Build."
  ],
  [
    "Avrupa'dan Afrika'ya, Orta Doğu'dan Kuzey Amerika'ya uzanan uluslararası proje deneyimi.",
    "International project experience spanning Europe, Africa, the Middle East and North America."
  ],
  [
    "ÜLKE — Sayı doğrulanmadı",
    "COUNTRIES — Figure unverified"
  ],
  [
    "YILLIK DENEYİM — Süre doğrulanmadı",
    "YEARS OF EXPERIENCE — Duration unverified"
  ],
  [
    "PROJE — Sayı doğrulanmadı",
    "PROJECTS — Figure unverified"
  ],
  [
    "DÜNYA HARİTASI — Yer tutucu",
    "WORLD MAP — Placeholder"
  ],
  [
    "Projelerimizin bulunduğu ülkeler burada interaktif olarak gösterilecek. Ülke bilgileri doğrulanmadı.",
    "Countries where our projects are located will be displayed here interactively. Country information is unverified."
  ],
  [
    "KALİTE POLİTİKAMIZ",
    "OUR QUALITY POLICY"
  ],
  [
    "Önce",
    "First Comes"
  ],
  [
    "Uluslararası standartları, teknolojiyi ve kaliteyi tüm faaliyetlerimizin temel prensibi olarak kabul ediyoruz.",
    "International standards, technology and quality are the guiding principles of all our activities."
  ],
  [
    "SERTİFİKALARIMIZ (Belge bağlantısı yok; doğrulanmadı)",
    "OUR CERTIFICATES (No document link; unverified)"
  ],
  [
    "Birlikte",
    "Let’s Build"
  ],
  [
    "İnşa Edelim.",
    "Together."
  ],
  [
    "MERKEZ",
    "HEAD OFFICE"
  ],
  [
    "CEP TELEFONU",
    "MOBILE"
  ],
  [
    "E-POSTA",
    "EMAIL"
  ],
  [
    "TELEFON",
    "PHONE"
  ],
  [
    "Ankara, Türkiye — Adres doğrulanmadı",
    "Ankara, Türkiye — Address unverified"
  ],
  [
    "info@bomarltd.com — E-posta doğrulanmadı",
    "info@bomarltd.com — Email unverified"
  ],
  [
    "+90 --- --- -- -- — Yer tutucu; telefon doğrulanmadı",
    "+90 --- --- -- -- — Placeholder; phone unverified"
  ],
  [
    "BİZE ULAŞIN",
    "CONTACT US"
  ],
  [
    "İnşaat · Mimari · Mühendislik · Danışmanlık",
    "Construction · Architecture · Engineering · Consultancy"
  ],
  [
    "© 2026 BOMAR LTD. ŞTİ. Tüm hakları saklıdır.",
    "© 2026 BOMAR LTD. ŞTİ. All rights reserved."
  ],
  [
    "Etlik Entegre Sağlık Kampüsü",
    "Etlik Integrated Healthcare Campus"
  ],
  [
    "Cumhurbaşkanlığı Külliyesi",
    "Presidential Complex"
  ],
  [
    "Atatürk Kültür Merkezi",
    "Atatürk Cultural Centre"
  ]
];
  for (const project of bomarProjectData) pairs.push(project.desc, project.alt, project.source);
  pairs.push(["Katalogdaki mekanik tesisat görseli 1", "Catalogue image of mechanical installations 1"], ["Katalogdaki mekanik tesisat görseli 2", "Catalogue image of mechanical installations 2"]);
  const normalize = value => value.replace(/\s+/g, ' ').trim();
  const byTR = new Map(pairs.map(pair => [normalize(pair[0]), pair]));
  const byEN = new Map(pairs.map(pair => [normalize(pair[1]), pair]));
  const originals = new WeakMap();
  const attributeOriginals = new WeakMap();
  const storageKey = 'bomar-language';
  let language = 'tr';
  let observer;
  const button = document.getElementById('language-toggle');
  if (!button) return;
  const excluded = node => node.parentElement?.closest('script, style, noscript, #language-toggle, .world-map-panel');
  function translateValue(value) {
    const pair = byTR.get(normalize(value)) || byEN.get(normalize(value));
    if (!pair) return value;
    return value.replace(/\S[\s\S]*\S|\S/, pair[language === 'en' ? 1 : 0]);
  }
  function translateText(node) {
    if (excluded(node) || !normalize(node.nodeValue)) return;
    const current = node.nodeValue;
    let original = originals.get(node);
    if (!original || (current !== original.last && current !== original.value)) {
      original = { value: current, last: current };
      originals.set(node, original);
    }
    const translated = translateValue(original.value);
    if (current !== translated) node.nodeValue = translated;
    original.last = translated;
  }
  function translateAttributes(element) {
    for (const name of ['aria-label', 'alt', 'title', 'placeholder']) {
      if (!element.hasAttribute(name)) continue;
      let records = attributeOriginals.get(element);
      if (!records) { records = {}; attributeOriginals.set(element, records); }
      const current = element.getAttribute(name);
      let record = records[name];
      if (!record || (current !== record.last && current !== record.value)) {
        record = records[name] = { value: current, last: current };
      }
      const translated = translateValue(record.value);
      if (current !== translated) element.setAttribute(name, translated);
      record.last = translated;
    }
  }
  function translatePage() {
    updateBomarWorldMap(language);
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    while (walker.nextNode()) translateText(walker.currentNode);
    document.querySelectorAll('[aria-label], [alt], [title], [placeholder]')
      .forEach(element => { if (element !== button && !element.closest('.world-map-panel')) translateAttributes(element); });
    document.title = language === 'en' ? pairs[0][1] : pairs[0][0];
    const description = document.querySelector('meta[name="description"]');
    if (description) description.content = language === 'en' ? pairs[1][1] : pairs[1][0];
    document.documentElement.lang = language;
    button.dataset.language = language;
    const labels = [...button.childNodes].filter(node => node.nodeType === Node.TEXT_NODE && node.textContent.trim());
    if (labels.length === 2) {
      labels[0].textContent = language === 'tr' ? 'TR ' : 'EN ';
      labels[1].textContent = language === 'tr' ? ' EN' : ' TR';
    }
    const menuButton = document.querySelector('.menu-button');
    const menuOpen = document.querySelector('.nav-links')?.classList.contains('mobile-active');
    if (menuButton) {
      menuButton.setAttribute('aria-expanded', String(Boolean(menuOpen)));
      menuButton.setAttribute('aria-label', language === 'en'
        ? (menuOpen ? 'Close menu' : 'Open menu')
        : (menuOpen ? 'Menüyü kapat' : 'Menüyü aç'));
    }
    button.setAttribute('aria-label', language === 'tr' ? 'Switch to English' : 'Türkçeye geç');
    button.setAttribute('title', language === 'tr' ? 'Switch to English' : 'Türkçeye geç');
    // Unknown dynamic descriptions remain unchanged and visibly require translation.
    const modalDescription = document.getElementById('modal-description');
    const modalBody = document.querySelector('#project-modal .modal-body');
    const status = document.getElementById('modal-language-status');
    const activeProject = bomarProjectData.find(project => project.id === document.getElementById('project-modal')?.dataset.project);
    const content = normalize(modalDescription?.textContent || '');
    const unknown = content && !byTR.has(content) && !byEN.has(content);
    if (modalBody && content) {
      const note = status || Object.assign(document.createElement('p'), { id: 'modal-language-status' });
      if (!status) { note.setAttribute('role', 'status'); modalBody.appendChild(note); }
      note.textContent = activeProject ? activeProject.source[language === 'en' ? 1 : 0] : language === 'en'
        ? 'Project details and BOMAR’s role are unverified.' + (unknown ? ' Translation of this description is pending; original text is shown.' : '')
        : 'Proje ayrıntıları ve BOMAR’ın rolü doğrulanmadı.' + (unknown ? ' Açıklama çevirisi hazırlanıyor; özgün metin gösteriliyor.' : '');
    } else if (status) status.remove();
  }
  function observe() {
    observer.observe(document.body, { subtree: true, childList: true, characterData: true,
      attributes: true, attributeFilter: ['aria-label', 'alt', 'title', 'placeholder'] });
  }
  function refresh() {
    observer.disconnect();
    try { translatePage(); } finally { observe(); }
  }
  observer = new MutationObserver(refresh);
  try { const saved = localStorage.getItem(storageKey); if (saved === 'en') language = 'en'; } catch (_) {}
  // Capture prevents an older bubble-phase language handler from double-toggling.
  button.addEventListener('click', event => {
    event.preventDefault();
    event.stopImmediatePropagation();
    language = language === 'tr' ? 'en' : 'tr';
    try { localStorage.setItem(storageKey, language); } catch (_) {}
    refresh();
  }, true);
  refresh();
})();

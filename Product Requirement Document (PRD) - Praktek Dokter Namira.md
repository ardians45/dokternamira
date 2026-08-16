# **Product Requirement Document (PRD)**

## **Website Praktek Dokter Namira (dokternamira.com)**

## **1\. Executive Summary & Ringkasan Proyek**

| Item | Detail |
| :---- | :---- |
| **Nama Brand** | Praktek Dokter Namira / Syar'i Beauty Care |
| **Domain** | dokternamira.com |
| **Tipe Website** | Multi-Page Static Site Generator (SSG) dengan Komponen Interaktif |
| **Tech Stack Utama** | Astro (v4/v5), React (v18/v19), Tailwind CSS, TypeScript |
| **Tujuan Utama** | Meningkatkan konversi reservasi pasien via WhatsApp & mendominasi ranking pencarian Google lokal (Malang) untuk keyword kesehatan spesifik. |
| **Target Audience** | Masyarakat Malang (khususnya area Merjosari, Dinoyo, Lowokwaru, dan sekitarnya) yang membutuhkan layanan Homecare, perawatan IMS, Booster Vitamin, Bekam, serta Perawatan Kecantikan Syar'i. |

## **2\. Branding & Panduan Visual (Design System)**

Berdasarkan brosur resmi Praktek Dokter Namira, palet warna dan identitas visual ditetapkan sebagai berikut:

### **2.1 Palet Warna (Color Palette)**

* **Primary Deep Teal:** \#025D73 (Digunakan untuk Header, Tombol Utama, Title, dan Footer)  
* **Secondary Soft Teal:** \#2EB2C2 (Digunakan untuk Accent, Highlight Card, Badge, dan Icon Border)  
* **Light Mint / Teal Tint:** \#E6F7F8 / \#F0FDF4 (Digunakan untuk Background Section, Hero Overlay, dan Card Hover)  
* **Accent Color (Soft Coral/Pink):** \#F3A3B5 (Aksen opsional untuk Syar'i Beauty Care)  
* **Text Main (Dark Gray/Teal):** \#1E293B / \#0F3A44  
* **Background Pure White:** \#FFFFFF

### **2.2 Tipografi**

* **Heading Font:** Poppins atau Plus Jakarta Sans (Sans-serif modern, tegas, ramah)  
* **Body Font:** Inter atau Plus Jakarta Sans (Tingkat keterbacaan tinggi untuk informasi medis)  
* **Accent Script (Opsional):** Dancing Script atau Great Vibes (Khusus untuk estetika "Daftar Harga / Beauty Care")

## **3\. Arsitektur Situs & Struktur Rute (Route Architecture)**

Untuk memaksimalkan optimasi SEO (Search Engine Optimization), setiap pilar layanan utama dikelompokkan dalam **Dedicated Landing Page** dengan URL yang ramah SEO (*Clean Slugs*).

dokternamira.com/  
├── /                              (Homepage \- Hub Utama & Ringkasan Layanan)  
├── /layanan/                      (Index Seluruh Layanan)  
│   ├── /homecare-malang           (SEO Focus: Dokter Homecare Malang / Homevisit)  
│   ├── /infeksi-menular-seksual   (SEO Focus: Pengobatan & Konsultasi IMS Malang)  
│   ├── /infus-booster-vitamin     (SEO Focus: Infus Booster Whitening & Vitamin Malang)  
│   ├── /bekam-sunnah-fashdu       (SEO Focus: Bekam Sunnah & Terapi Fashdu Malang)  
│   └── /syari-beauty-care         (SEO Focus: Facial, Peeling & Treatment Kecantikan Syar'i)  
├── /tentang-dokter                (Profil Dr. Namira Farhayati Lubis & Legalitas)  
├── /jadwal-lokasi                 (Alamat Ruko Ragali Residence, Jam Praktik & Peta)  
├── /biaya-layanan                 (Transparansi Tarif & Pricelist Treatment)  
├── /blog/                         (Artikel Kesehatan & Edukasi Medis)  
└── /404                           (Custom Page Not Found)

## **4\. Spesifikasi Teknis & Stack Arsitektur**

### **4.1 Tech Stack Detail**

* **Framework Core:** **Astro** (Island Architecture untuk beban JavaScript minimal dan skor Lighthouse 100).  
* **UI Components:** **React** (digunakan untuk komponen interaktif seperti Modal Booking, Filter Pricelist, dan WhatsApp Floating Widget).  
* **Styling:** **Tailwind CSS** dengan konfigurasi warna custom (deep-teal, soft-teal).  
* **Icons:** Lucide React / Tabler Icons.  
* **Deployment & Hosting:** Vercel / Netlify / Cloudflare Pages.  
* **CMS / Markdown:** Astro Content Collections (untuk artikel blog & daftar layanan).

### **4.2 Alasan Pemilihan Astro \+ React**

1. **Zero JS by Default:** Astro hanya mengirimkan HTML murni ke browser untuk halaman statis, membuat kecepatan muat halaman (*Page Load Speed*) di bawah 1 detik.  
2. **SEO Supremacy:** Rendahnya *Time to Interactive* (TTI) dan *First Contentful Paint* (FCP) menjadi sinyal positif utama bagi algoritma Google Page Experience.  
3. **React Islands:** React digunakan secara terisolasi (client:visible atau client:idle) hanya pada elemen yang membutuhkan interaktivitas (seperti Widget WA dan Accordion FAQ).

## **5\. Strategi Optimasi SEO (Comprehensive SEO Plan)**

### **5.1 Technical SEO**

1. **Server-Side Rendering / Static Site Generation (SSG):** Seluruh halaman dipra-render menjadi HTML statis.  
2. **Sitemap & Robots.txt:** Automatic sitemap generation menggunakan @astrojs/sitemap.  
3. **Canonical URLs:** Penggunaan \<link rel="canonical" href="..." /\> di setiap halaman untuk mencegah isu *duplicate content*.  
4. **Core Web Vitals Target:**  
   * LCP (*Largest Contentful Paint*): ![][image1]  
   * FID / INP (*Interaction to Next Paint*): ![][image2]  
   * CLS (*Cumulative Layout Shift*): ![][image3]  
   * Lighthouse Score: ![][image4] (Performance, Accessibility, Best Practices, SEO).

### **5.2 Structured Data (Schema.org / JSON-LD)**

Setiap halaman wajib menginjeksi Structured Data format JSON-LD agar Google menampilkan *Rich Snippets* (Lokasi, Jam buka, Penilaian, Jenis Dokter).

#### **Contoh Schema MedicalBusiness & Physician:**

{  
  "@context": "https://schema.org",  
  "@type": \["MedicalBusiness", "Physician"\],  
  "@id": "https://dokternamira.com/\#organization",  
  "name": "Praktek Dokter Namira \- Homecare & Dokter Umum Malang",  
  "image": "https://dokternamira.com/assets/images/dokter-namira-logo.png",  
  "url": "https://dokternamira.com",  
  "telephone": "+6285819800843",  
  "priceRange": "$$",  
  "address": {  
    "@type": "PostalAddress",  
    "streetAddress": "Ruko Perumahan Ragali Residence, Jl. Tirto Joyo No. 119-69, Merjosari",  
    "addressLocality": "Malang",  
    "addressRegion": "Jawa Timur",  
    "postalCode": "65144",  
    "addressCountry": "ID"  
  },  
  "geo": {  
    "@type": "GeoCoordinates",  
    "latitude": \-7.9400,  
    "longitude": 112.6050  
  },  
  "openingHoursSpecification": \[  
    {  
      "@type": "OpeningHoursSpecification",  
      "dayOfWeek": \["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"\],  
      "opens": "06:00",  
      "closes": "20:00"  
    }  
  \],  
  "medicalSpecialty": \["GeneralCare", "PrimaryCare"\],  
  "availableService": \[  
    { "@type": "MedicalProcedure", "name": "Dokter Homecare & Homevisit Malang" },  
    { "@type": "MedicalProcedure", "name": "Pengobatan Infeksi Menular Seksual (IMS)" },  
    { "@type": "MedicalProcedure", "name": "Infus Booster Vitamin & Whitening" },  
    { "@type": "MedicalProcedure", "name": "Bekam Sunnah & Terapi Fashdu" }  
  \]  
}

### **5.3 Keyword Mapping & Meta Tag Strategy**

| Halaman | Primary Keyword | Meta Title | Target Search Intent |
| :---- | :---- | :---- | :---- |
| **Home** | Dokter Umum Malang, Praktek Dokter Namira | Praktek Dokter Namira Malang | Layanan Homecare & Umum | Informasional & Transaksional |
| **Homecare** | Dokter Homecare Malang, Jasa Homevisit Dokter Malang | Layanan Dokter Homecare & Homevisit Malang \- Dr. Namira | Transaksional (Butuh Dokter ke Rumah) |
| **IMS** | Pengobatan IMS Malang, Klinik Infeksi Menular Seksual Malang | Konsultasi & Pengobatan IMS Malang (Privasi Terjaga) \- Dr. Namira | Privat, Butuh Penanganan Cepat |
| **Infus Booster** | Infus Booster Vitamin Malang, Suntik Vitamin C Malang | Infus Booster Vitamin & Immune Booster Malang \- Dokter Namira | Perawatan Kesehatan & Vitalitas |
| **Bekam** | Bekam Sunnah Malang, Terapi Fashdu Malang | Bekam Sunnah Medis & Fashdu Malang \- Praktek Dr. Namira | Pengobatan Thibbun Nabawi & Medis |
| **Beauty Care** | Facial Syar'i Malang, Treatment Kecantikan Dokter Malang | Namira Syar'i Beauty Care \- Facial & Peeling Malang | Perawatan Estetika Syar'i |

## **6\. Detail Fitur & Komponen UI (Feature Specifications)**

### **6.1 Floating WhatsApp Call-to-Action (CTA) Widget**

* **Perilaku:** Melayang di sudut kanan bawah screen (Desktop & Mobile).  
* **Fitur Multi-Nomor/Direct Context:** Ketika diklik di halaman tertentu, pesan otomatis terisi sesuai konteks halaman.  
  * *Contoh Pesan Otomatis Halaman Homecare:* "Halo Dokter Namira, saya ingin reservasi layanan Homecare/Homevisit untuk wilayah \[Nama Daerah\]..."  
  * *Contoh Pesan Otomatis Halaman IMS:* "Halo Dokter Namira, saya ingin berkonsultasi privasi mengenai layanan kesehatan IMS..."  
* **Nomor Kontak:** 0858-1980-0843 / 0852-7000-1948.

### **6.2 Dynamic Pricelist Filter (Komponen React)**

* Komponen interaktif pada halaman /biaya-layanan atau /syari-beauty-care.  
* Pengunjung dapat memfilter kategori: **\[Semua\]**, **\[Facial\]**, **\[Peeling\]**, **\[Bekam\]**, **\[Body Treatment\]**.

### **6.3 Fast Booking Modal / Quick Schedule**

* Modal popup interaktif berisi formulir singkat:  
  1. Nama Pasien  
  2. Keluhan / Jenis Layanan  
  3. Tanggal & Jam Rencana Kedatangan/Homecare  
  4. Tombol "Kirim via WhatsApp" yang langsung menyusun format teks WhatsApp siap kirim.

### **6.4 Google Maps Integration & Jam Operasional**

* Sematan Google Maps interaktif (Lazy-loaded agar tidak memberatkan performa awal).  
* Indikator status real-time: **"Buka Sekarang (06.00 \- 20.00 WIB)"** atau **"Tutup"** berdasarkan jam server lokal Malang.

## **7\. Rencana Struktur Konten Halaman (Page Wireframe Specs)**

### **7.1 Homepage Layout**

1. **Header / Navbar:** Logo Monogram "N" Dokter Namira, Navigasi Layanan, Tombol Konsultasi WA.  
2. **Hero Section:**  
   * Headline: *"Your Health Is Our Priority"*  
   * Sub-headline: *"Praktek Dokter Umum, Layanan Homecare, Pengobatan IMS, & Terapi Bekam Medis di Malang."*  
   * CTA Utama: \[Reservasi Sekarang via WA\] & \[Lihat Layanan\]  
3. **Trust Badges / Keunggulan:**  
   * Dokter Berizin Resmi (SIP)  
   * Privasi Pasien Terjaga 100%  
   * Layanan Datang ke Rumah (Homecare)  
   * Pendekatan Medis & Syar'i  
4. **Grid Layanan Utama (Cards):** 4 Card Layanan Utama dengan Icon Teal & Link ke Landing Page masing-masing.  
5. **Section Syar'i Beauty Care:** Promo ringkas treatment kecantikan.  
6. **Jadwal & Lokasi Praktek:** Informasi Ruko Ragali Residence, Merjosari, Malang.  
7. **FAQ Accordion (Schema FAQPage):** Pertanyaan umum seputar tarif, reservasi, dan homecare.  
8. **Footer:** Alamat lengkap, Peta, Legalitas, Social Media link, & Copyright.

## **8\. Panduan Implementasi Kode (Code Standard & Implementation)**

### **8.1 Layout Utama (src/layouts/BaseLayout.astro)**

\---  
import Header from '../components/Header.astro';  
import Footer from '../components/Footer.astro';  
import WhatsAppFloat from '../components/React/WhatsAppFloat.jsx';  
import '../styles/global.css';

interface Props {  
  title: string;  
  description: string;  
  image?: string;  
  canonicalURL?: string;  
  schemaData?: object;  
}

const { title, description, image \= '/og-image.jpg', canonicalURL \= Astro.url.href, schemaData } \= Astro.props;  
\---

\<\!DOCTYPE html\>  
\<html lang="id"\>  
\<head\>  
  \<meta charset="UTF-8" /\>  
  \<meta name="viewport" content="width=device-width, initial-scale=1.0" /\>  
  \<title\>{title}\</title\>  
  \<meta name="description" content={description} /\>  
  \<link rel="canonical" href={canonicalURL} /\>  
    
  \<\!-- Open Graph / Facebook / WhatsApp \--\>  
  \<meta property="og:type" content="website" /\>  
  \<meta property="og:url" content={Astro.url} /\>  
  \<meta property="og:title" content={title} /\>  
  \<meta property="og:description" content={description} /\>  
  \<meta property="og:image" content={new URL(image, Astro.url)} /\>

  \<\!-- Geo Tags for Local SEO Malang \--\>  
  \<meta name="geo.region" content="ID-JI" /\>  
  \<meta name="geo.placename" content="Malang" /\>  
  \<meta name="geo.position" content="-7.9400;112.6050" /\>  
  \<meta name="ICBM" content="-7.9400, 112.6050" /\>

  \<\!-- JSON-LD Schema Markup \--\>  
  {schemaData && (  
    \<script type="application/ld+json" set:html={JSON.stringify(schemaData)} /\>  
  )}  
\</head\>  
\<body class="bg-white text-slate-800 antialiased selection:bg-\[\#2EB2C2\] selection:text-white"\>  
  \<Header /\>  
  \<main\>  
    \<slot /\>  
  \</main\>  
  \<Footer /\>  
  \<WhatsAppFloat client:idle /\>  
\</body\>  
\</html\>

### **8.2 Konfigurasi Warna Tailwind CSS (tailwind.config.mjs)**

/\*\* @type {import('tailwindcss').Config} \*/  
export default {  
  content: \['./src/\*\*/\*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'\],  
  theme: {  
    extend: {  
      colors: {  
        teal: {  
          deep: '\#025D73',   // Primary Dark Teal  
          soft: '\#2EB2C2',   // Secondary Soft Teal  
          light: '\#E6F7F8',  // Light Mint/Teal Background  
          hover: '\#014758',  // Darker shade for active state  
        }  
      },  
      fontFamily: {  
        sans: \['Plus Jakarta Sans', 'Inter', 'sans-serif'\],  
      },  
    },  
  },  
  plugins: \[\],  
}

## **9\. Rencana Kerja & Roadmap Peluncuran (Launch Checklist)**

| Tahap | Milestone | Output / Deliverables | Status |
| :---- | :---- | :---- | :---- |
| **Phase 1** | Asset & Content Gathering | Pengumpulan Foto Dokter, Logo, Detail Pricelist, Alamat | Completed |
| **Phase 2** | UI/UX Design & Architecture Setup | Inisiasi Project Astro, Tailwind Config, Layout Base | In Progress |
| **Phase 3** | Content Development & Page Creation | 6 Landing Pages, Meta Tag Setup, Optimization | Planned |
| **Phase 4** | Local SEO & Schema Integration | Injeksi Schema JSON-LD, Setup Google Search Console & GMB | Planned |
| **Phase 5** | Testing & Performance Tuning | Benchmark Lighthouse 100, Mobile Responsiveness Test | Planned |
| **Phase 6** | Deployment & Domain Linking | Linking Domain dokternamira.com, SSL Setup, Go Live | Final |

## **10\. Strategi Pemeliharaan & Skalabilitas Masa Depan**

1. **Perpanjangan Domain & Hosting:**  
   * Pencatatan siklus tahunan domain dokternamira.com.  
2. **Penambahan Halaman Baru (Scalability):**  
   * Jika kelak ingin menambah artikel edukasi kesehatan, pengembang cukup menambahkan file .md atau .mdx pada direktori src/content/blog/ tanpa merubah struktur utama website.  
3. **Google My Business (GMB) Sync:**  
   * Menghubungkan URLlanding page layanan spesifik langsung ke tombol *Service* di Google Maps Praktek Dokter Namira Malang.

[image1]: <data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGIAAAAZCAYAAADKQPsMAAAFTklEQVR4Xu1ZS4gcRRieYSNEFBKVzbDOTNfMrhoUiYcNSB4QH/ERop4juZlDPEdCEDwIIhgkFzGKmyUh8SCi5mR8HwYVclkQZGVFEFTES4hBSIIENvH769Fb/VdVV9f07LiHfOGnu/53/X9Vdc2m0UhCE//Gg3HEGUeMUuQJ6JcqCVXRqYpR+rqJFAQqH2CvCsYRKz1GusVQkGGqxArouGyXs6bRjOQbEacj4rDT6dyaZdk050cwIYTYBtv27OzsLTm3EKs8MGL+QQQ/1/A8wuUS5S58aPb7/YfgbyfeJ2ZmZjbB/3c6zt+Tk5O3c4N0OEk5jAiK+lRAJPg4EvwBNCgIS9Dr9XZB/2fQX6AbVEjQYa5XgCdV2OzXsW+EGuExy4E81nt4j8Dfss7rAC0yPPeAThLP34iyKEMCwaYwqQc4nwOrpqUb8axOesB1OGji0DsHWoDdDov/NHjXqQiWeqX5ZSI7IkRWaEQFM5kL5V5gKsPCjjAijGeR4xW3EVWilYCbI/gWBPoctNTtdp9k4iBSGkHNg96vXL99d7uD8Z+g1y11N0mJ4hWbGkD+/DvC60Ci0+0+6DSiBOFGjA50Vu8FnQdtpzFXKENKI/Q2/0QX7l3Dx3gK9Dto3tYPgYpBTaX3skboxk9h9W+0+dPT0xvA/6asEWRjF10EGxFudiW0Wq3b4PiAUOf0GS6vilgjPGlOYFJ3NCwRbO8HXcTkD1p6Dvrq27Ik1Dfle+h/iOc7FN9uBB2Z4B0GfQr6CPQv6CzJYPMi3i+LTOack7H38Qh8R9BCyvLLQvYTHWdGNwo46sPwFJ4XqRFcXoSnhB7EGhEDdsk9Qi2GS1xmQ+stmZ1gwHcEnk+gyMt4fmGprYPOxxluaYaBhpwO7QjpMws3gmqn7U/ZdhKRsjVh+BUMf8FzX+G6WBP4WIYbEUnKHBGgC8Iqkg+QH6Ji4nWdzeeNwPu8zudtoY48SZj3UTz3GzveiKaVK/epebIRWBD3Us4Yv+HUMTJf2tIbYfwbPsLPNRK/ARw8Fk1GT3zARFFghc6DFmm1FwQ8SEMVjojz7aLRasUxMdD5LIDmGO0xdk4jzEujvBEZHUfK/yL9xrDMArA9N+WHazOMzwp1DLzgmetQSG+Eiqyvvl+iCXcaCYrzcK7GUKUR8ruXyR22UsTARFkjJtrt9l30pEGkEc8gxmt6znNGngyhtupx0Cs6uIIvYR+PIb0RqgkoxKut1qbCd8qeOMGzSuNHUybeojFvGp+K3QhdkwFW+hSNuU+yNY2gsXWkLucOc/BIFnIR2yW6IPuE+ghuYRpRaHu6hVAjzq9IlBuZrLqdXEDy95EA7y9pfYdosis+HJAt/eh7uaFXLt6fAu+StM/ym18eg67Lxhi+d1MBzRi2B0FHtf420PsYr9c3rmNkT4tFq5POo6Cr1iWHrv0noPOtPlqTahcCOaXfEXSu7qUxV+CQk/dSNlBXvKacrFBXxw/U+Z3/XvDYSZIrMgT4ex46/4AWQXMYv4fnm8beOmqocI8Jdc1dgN6PeH5m+9Kr+jroa6F+xG4lvvFlCHxqdiHnnt5NTFfP20ahN6FGuXzsis0UxFoJHq3/HeYPcbJppsE99qONQEevkfnmQfy+/lONZPiUSpCo3hjGIgmr7L4WeG58XIAjdBijRd3/EM2tS9yUiCLCCEptS4U14Pfr5yaiSjGVLNy2EL86XA8uZxRY8aqntBZQzCItpzRtP9J9VLeorpkMcp3oPlE9jnxP1PFcx3ZYpMRM0V1zqJN8HdsYVsX3qJx6/HAWH48HqxE17DMsqYEKB8Z/pmiTTfN6STQAAAAASUVORK5CYII=>

[image2]: <data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEkAAAAZCAYAAAB9/QMrAAAEsklEQVR4Xs1XXWgdRRTe5Sq0+BNbSW+a3J3ZvQ29WKGClwoWFRqkGILiW0r71r4WhBYUpQ/Btxb6UhEkUERf/EWQIhbxIdSHFiMoxVgpKbSF9kEJwUALUpL4nZ2Z3dnZ2buzm3tTPzjMnjPnb86cmbnX8yrBzwy57xx6TiZw03JHsb86M5sEP0nBMRXfQc95o+qgokObuk0Wo/qEHRXV7ajgxFCtYLn5yCeXlzjBwayXimXOIipFuc34+PiTKSf02+1dQ1m5wPPd7qOc8/1hGD7l4Pohos/JYdHroDtY+BcYZ0GLoH9AL2pqPuanIVsCnWeMXQd/KYzCUNMpRb3U61k5AYvZyRjfEzPWOEIoi/KBLNAZiBq6VrvdHoL8Cmgexdmm5Ph+FbI1FGtGU+8DVLLWpGMUzziAjKMo2ovkvwddC4LgoN2jn0SC3tzw8PDj2XkJPy0G6GtIHlFT4J+RnTWv62eRE2Qk+VkXpLlXBuwaSHgKdBm031MdUeKwZ5G8uEjvQGcdHfNJLEiLuxN0C7Siqdvgw3aL+h4bG3uaRm0+9hWGkdLR4HtkG0URpxzpniTddNZATiDRbDYfg+Ex0F3Qp+Z8GahIrVZrDMV4C9+zGOmIJuGoOJkiSeAoqyKt6XIF+Hmd7KTtmxiPg25AfptzdodxPgH5CGSfxbkzvoa5z+l4k32zuYPWdQ70K+Rv0wj6lzZNj1NUF1pYBOWPMS5RkYQ0r56X5IFEf6ad0vjTcnEnJW8tEk87aV2Xm6BFgS5iI7YqGWx+kjGOa3qqqD8SL+P+iStjVLM7kRTJL14dte4PTLwuh7p4kqU4o+QKm5WW7DUUr9mzSEwvks1bclzf02Xg50D3MNfV9F6C7AE6bI54xJuRefwFmhTH1B4jgwi/T2BwE9V9wzNeoX4Bvvchxn0i+hZFYvYiuXQSjzspc0REkZhZpC4VjuaIl68qPUBUqJiQw5foyO2JoyJgdzsw+IaLO+ioOV+OdDfkQn9DQruVlJJlItl16irZCXGRYh2pKG2pSPekqRXyuKVF8gs7SRSJiSJJNEiO2Fcxt6oKpc33hkzyQ9Ap+WJUhna0kmLje1LKVrAhzwmeEf9dmL5StFk0twJaUDIbckXySookOwnjmVYQvKw2D7FHQJcgX1I2lUB3E91RXNwje32nwyv+ZsDuXU87ukj2OnZzGX5eUDL4PQlahe408RSPiYfjb4zPKj0zKulB5yzo/fj+TLuQXio60gc8cQPTXfsa+AeIfZl0qHPBL3Pxc4ZAXfUR+AuS7wXb+hNZg4nfSb+ApojPaRiA3leg30GzkUhsMQha+3QduQn06t2nzUCy33JxoU4IDeldG7Qu1ekwF12ky+Ijq8uoQHITLoAW0MnnMf4BmsOpaYkomZDVgS7oUKDQ7S8D/QjFr2d2hAqQvJiWdhwdHQ2w00fg/5X0Za0P07+OTqfzhCc22efxj038qS6D6dDkFYrkA0W2kWpiY9aVkQ+Xl5RD2NSx/H/gIWWehB1EfOWTRtN/GV8IZ8UUNUwMmB5MflDYrDgDCVTFp6ZbxWzjkNH6FHTDboocmHKTr40CRwViZyj7Yj/pTLFOP9B/7/8BSkAvy12jPKUAAAAASUVORK5CYII=>

[image3]: <data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACUAAAAZCAYAAAC2JufVAAADBklEQVR4Xq1Wv2sUQRS+IRGUBPyV88j9mLk7QQgIAa8QLKwstIhgmhT22lmaP0BS2ForwcJGUkZQCCKW2ipaKJjCMgiCFhae39uZt/tm9u3tXcwHwzrfe9+3b+a929hoHClMStQjldC+4OLdYaCrdZYxOapCl+isAk6cWsBIBelexeQkUxNXYSpU/X7/lHPuynB43qYxHYUNtMd7vd7F5lJzUSQE+Dzyt5n/0I5Go2NJUrkoCJ6joG9YT7B2sW6kOR6p1MxZa+8h/wAeT8PzYfrSbq97xjkr/Q/KXgIwuY51V3IQfcTLXna73ROS9/Bmg8GghbxPWC/opjiK/SPcyA/OJH9wfzlOaLfbS9X+0CG4jXVNkjB5Q6fBWvFZMuqBdt1EfExFSN5at0l82Gb+UVHwajabi9I/sofgNALv8RxJnlqB047Br0leArotejlyNgvWkOca8cYU/li/ihwPtFP3R/Iy1r5WlLPpCwn+TKEtNENjuhmZwUWF21jG4fZlUXwr8YHEXVExJMiKyvj8l+Jf6CAK+fKKsxfarMXeOPbMi2J/X1Q8AyUtPzGsqwj+VG+q1JoCrda5BcT3tBwqilpPRbG/vCmG1EblOmqfFe0L0bqiCFU5aftc0j6Gps1gs0G0ftBF+yB4RjOF53okEHA86NTiRjQr68QThZgfdCuL8i+inCr/eQR2IIo+ls5/Evys5SjNxG1qE56PZZROH4oizMN7R+wzhFuM/CP3TqdzFq14i8//SeYg+ANug/fckvCL5J8xnfYBmSP3MhF49rH/ipxt1nr/wTvpj/2G9Fdh/Zf5NZ0eawum91H6HMcxsKDdB6zPML+QkYYGvrVABYD/jk/DHTy/YP+K/qx4ZT4OK9If6zfo3F/FJfytwouvBtGtNF4DQ4WSNhRs8laInkh/ur0ioiEelRzafyYKphzTMF3WIXFU5v/lM41Yu0mCzhLiSHXeBGgijSNU8eWAyblSqBZSUYztBIicadJrERUg/p1DJSvYGTHrWaZKmgHsl/rGe9P4B855ydqqlEfsAAAAAElFTkSuQmCC>

[image4]: <data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAZCAYAAABHLbxYAAADOElEQVR4Xr1WvWsUQRSf5VQMfhXmOE3uZnZCNCSFFgeCYGGhlV+ITcBOQcuQxkLSiVXAwsIiGMTCVgxoIynyN1gbUAmKbVBBRePv7czsztfOLmryg3ez997vvXn7m487xjIGFB8uIq5WsPOs53blmliZIvi0mjn/H9oUDTmhR/mMeYi4fDiUGn6NuwpECZ4zymHGXxfdAVRTh02Engg8Up7ne4UQ0/1+/1i3293vx5nK6Njfer3evvHx8cMB1VY4CGrYnDiyWLCDJr/BXnLOVzBuDofD3TaBmof/C+IvMC5xIZYx/hgMBpdtXolBvz+CoePOFc4c94XAZKdh36empg4Yn1TqbsCk8XW7o9TokhAcJh5ywS+pSI1sWJoRENdhN0n6MuAJFUmNAnXuw7bwuMvzb9lqkaJQc2hzbESFo32BQouwz7AFh1OHspJbEnvzqW7UAflIOcNvarSsWwyeTKSo4HwOBR/AjrrRhKZWKNUo9uEzptmjaFRKeQr+C7BH6iWsw5VGNSNt/lzms0Jti+epPm2QSuB/dfaolD2uFF0rbgBWHqZrVWap+j2WVIWpaITRgUpXYK+lzE+wKMVBhmbvWE1kyJ3XTbyia8sm26AX5N6ha5zNI9B18w4nc0Up0phN/E3YRzT9AeNdrejjihLWQPwTboHfyDmnPJqjhjChQlaoKfP8DZZPqenQU7msMzY2NmruT1IUtW6bSXOZz6OhW3YCOO+Jx7nQVxWg/4tE5yr2Z57PQoV1FHtCSxGhKTgvrR6lzE8yczAQoP0qeLWken+u0WU/MzOzxyTT0sN+wn9G1/KRscnJyYMgLcA26LryGWlUbSK3TzVg0/R9YmLiEJ5XaSxJrDh05yHGEZOp7/NfdNdGRFEuoe7QDezBOefS/wugojlM9JNIRsu5qmPlJz3QnPo6W8bqvUXeRZvgAPtoANINeiM/VpNSgeLVvFaAZbR10MB1KHncBP1y+ofmKvHAP+uFC8TL/wtaFGpBaUZTESOJz3NEDaIxJDiJUDOaksvrI4U2HAtGle3C9pe2ZkhPlo764Qa2hs/yflPSSFCjIXJGAy5aUFwECZn2VYHyKeDuPP4A9vKMYYUU2qIAAAAASUVORK5CYII=>
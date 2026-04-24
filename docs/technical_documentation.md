# Dokumentacja Techniczna - Flora Café 🍵

### Struktura folderów
```text
/
├── frontend/
│   ├── assets/          # Zoptymalizowane grafiki
│   ├── css/
│   │   └── style.css    # Style (zmienne CSS, RWD)
│   ├── js/
│   │   └── main.js     # Interakcje (smooth scroll, hamburger)
│   └── index.html       # Semantyczna struktura strony
├── docs/                # Dokumentacja projektowa
└── README.md            # Dokumentacja główna (punkt startowy)
```

### Wykorzystane technologie
*   **HTML5**: Pełne wykorzystanie znaczników semantycznych (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`).
*   **CSS3**: 
    *   **Layout**: Flexbox (nawigacja) oraz CSS Grid (sekcja menu - Smaki Flory).
    *   **Zmienne**: System zmiennych `:root` dla kolorów i typografii.
    *   **Responsywność (RWD)**: Media Queries dostosowane do smartfonów, tabletów i desktopów.
*   **JavaScript (Vanilla JS)**: 
    *   Obsługa menu mobilnego (hamburger).
    *   Płynne przewijanie do sekcji (Smooth Scroll).
    *   Walidacja i obsługa formularza rezerwacji.

### Przystosowanie pod Backend
Projekt został przygotowany pod łatwą integrację z API:
*   **Formularz**: Kod w `main.js` posiada przechwycony event `submit`, gotowy do zamiany instrukcji `alert()` na wywołanie `fetch()` do endpointu backendowego.
*   **Dane dynamiczne**: Sekcje Menu są ustrukturyzowane w sposób powtarzalny, co umożliwia ich generowanie z tablicy JSON lub bazy danych.

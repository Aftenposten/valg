# Aftenpostens partileksikon

I valgår har utviklerne i Aftenposten behov for en oversiktelig måte å hente informasjon om ulike partier. Derfor har vi laget en enkel modul som inneholder alt vi trenger.

Modulen eksporterer én funksjon som heter `getParty()`. Den brukes slik:

```js
const getParty = require("@aftenposten/valg");
const hoyre = getParty("H", "kode");
/**
* Returnerer dette objektet
* {
*  kode: "H",
*  pop: "H",
*  name: "Høyre",
*  samisk: "Olgeš",
*  shortname: "Høyre",
*  abbr: "H",
*  color: "#0070ff",
*  logo: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 652 304"><g id="H" stroke="none" stroke-width="1"
*  fill="#FFF" fill-rule="nonzero"><path d="M.75 75.74L38.33 294.8a10.29 10.29 0 0015.49 7.06c55-33.41 272.51-158.08 399.
*  76-120.7 3.06.9 5.69-1.84 5.17-5-1.38-8.35-14.42-77.92-15.84-86C427.37 1.13 271.64-45 7.35 63.66a11 11 0 00-6.6 12.08z"
*  id="Path"/><path d="M391.87 260.77c-9.51.45-9.89-7.77-1.42-9.89 62.35-15.59 89.56-44.68 87.08-76.12-.51-6.46-9.41-64
*  95-11. 62-85.08a8.76 8.76 0 015.58-9.13C492.84 72.36 559.78 43.72 604 7.06a7.89 7.89 0 0112.74 4.58l35 176a9.22 9.22 0 *  01-4.78 9. 58c-30.36 14.65-134.82 57.92-255.09 63.55z" id="Path"/><path d="M366.7 203.17l9.88 29.63c.94 4.45 3.11 6.43 7.*  41 4.94 39.22-13.57 58-25.93 56.79-35.8-1.08-8.58-25.31-12.72-66.38-6.87-4.4.62-8.62 3.74-7.7 8.1z" id="Path"/></g></
*  svg>',
* }
* /
```

Man kan bruke `getParty()` på ulike måter. Følgende kode vil gi samme resultat som blokken ovenfor:

```js
const hoyre2 = getParty("Høyre", "name");
/**
* Returnerer dette objektet
* {
*  kode: "H",
*  pop: "H",
*  name: "Høyre",
*  samisk: "Olgeš",
*  shortname: "Høyre",
*  abbr: "H",
*  color: "#0070ff",
*  logo: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 652 304"><g id="H" stroke="none" stroke-width="1"
*  fill="#FFF" fill-rule="nonzero"><path d="M.75 75.74L38.33 294.8a10.29 10.29 0 0015.49 7.06c55-33.41 272.51-158.08 399.
*  76-120.7 3.06.9 5.69-1.84 5.17-5-1.38-8.35-14.42-77.92-15.84-86C427.37 1.13 271.64-45 7.35 63.66a11 11 0 00-6.6 12.08z"
*  id="Path"/><path d="M391.87 260.77c-9.51.45-9.89-7.77-1.42-9.89 62.35-15.59 89.56-44.68 87.08-76.12-.51-6.46-9.41-64
*  95-11. 62-85.08a8.76 8.76 0 015.58-9.13C492.84 72.36 559.78 43.72 604 7.06a7.89 7.89 0 0112.74 4.58l35 176a9.22 9.22 0 *  01-4.78 9. 58c-30.36 14.65-134.82 57.92-255.09 63.55z" id="Path"/><path d="M366.7 203.17l9.88 29.63c.94 4.45 3.11 6.43 7.*  41 4.94 39.22-13.57 58-25.93 56.79-35.8-1.08-8.58-25.31-12.72-66.38-6.87-4.4.62-8.62 3.74-7.7 8.1z" id="Path"/></g></
*  svg>',
* }
* /
```

```js
const hoyre3 = getParty("Olgeš", "samisk");
/**
* Returnerer dette objektet
* {
*  kode: "H",
*  pop: "H",
*  name: "Høyre",
*  samisk: "Olgeš",
*  shortname: "Høyre",
*  abbr: "H",
*  color: "#0070ff",
*  logo: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 652 304"><g id="H" stroke="none" stroke-width="1"
*  fill="#FFF" fill-rule="nonzero"><path d="M.75 75.74L38.33 294.8a10.29 10.29 0 0015.49 7.06c55-33.41 272.51-158.08 399.
*  76-120.7 3.06.9 5.69-1.84 5.17-5-1.38-8.35-14.42-77.92-15.84-86C427.37 1.13 271.64-45 7.35 63.66a11 11 0 00-6.6 12.08z"
*  id="Path"/><path d="M391.87 260.77c-9.51.45-9.89-7.77-1.42-9.89 62.35-15.59 89.56-44.68 87.08-76.12-.51-6.46-9.41-64
*  95-11. 62-85.08a8.76 8.76 0 015.58-9.13C492.84 72.36 559.78 43.72 604 7.06a7.89 7.89 0 0112.74 4.58l35 176a9.22 9.22 0 *  01-4.78 9. 58c-30.36 14.65-134.82 57.92-255.09 63.55z" id="Path"/><path d="M366.7 203.17l9.88 29.63c.94 4.45 3.11 6.43 7.*  41 4.94 39.22-13.57 58-25.93 56.79-35.8-1.08-8.58-25.31-12.72-66.38-6.87-4.4.62-8.62 3.74-7.7 8.1z" id="Path"/></g></
*  svg>',
* }
* /
```

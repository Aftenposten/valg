// @ts-check

/** @typedef party
 * @type {object}
 * @property {string} [kode] Valgdirektoratets partikode.
 * @property {string} [ssb] SSBs partikode.
 * @property {string} [pop] Poll of polls sin partikode.
 * @property {string} name Partiets fulle navn.
 * @property {string} [samisk] Partiets samiske navn.
 * @property {string} shortname Partiets forkortede navn, etter Aftenpostens språkregler.
 * @property {string} abbr Partiets forkortede navn.
 * @property {string} color Partiets farge i hex-kode, etter Aftenpostens designmal.
 * @property {string} textcolor Partiets lesbare farge i hex-kode, etter Aftenpostens designmal.
 * @property {string} colorDark Partiets farge på mørk bakgrunn i hex-kode, etter Aftenpostens designmal.
 * @property {string} textcolorDark Partiets lesbare farge på mørk bakgrunn i hex-kode, etter Aftenpostens designmal.
 * @property {string} [logo] Partiets logo i SVG-format.
 * @property {boolean} [diggi] Primært samepolitisk parti.
 */

/**
 * @type {party[]}
 */
const parties = [
  {
    kode: "A",
    pop: "Ap",
    name: "Arbeiderpartiet",
    samisk: "Bargiidbellodat - Baarggijbelludahka - Barkijebielien partije",
    shortname: "Ap",
    abbr: "Ap",
    color: "#fd4b5a",
    textcolor: "#fd4b5a",
    colorDark: "#fd4b5a",
    textcolorDark: "#fd4b5a",
    logo: '<svg viewBox="0 0 215 231" xmlns="http://www.w3.org/2000/svg"><g fill="#FFF" fill-rule="evenodd"><path d="M132 51c-23-10-60-10-81 2-20 12-31 35-31 66 0 14 2 28 5 40l-5-10c-4-10-9-21-12-32-5-16-9-33-8-52 1-18 5-33 15-45C24 10 38 1 55 0c21-1 35 9 47 18s22 21 30 33z"/><path d="M101 3c24 6 46 14 66 25 19 11 35 24 44 46 10 26-1 54-14 68a98 98 0 01-59 31l3-4c9-10 17-23 22-37 6-17 5-38-1-55a165 165 0 00-51-66l-10-8z"/><path d="M141 66c-37 3-67 13-75 45-3 9-4 24-2 35-7-6-13-14-19-23-5-11-11-26-6-39 3-9 10-16 19-21 8-5 18-7 31-8 21-1 37 5 52 11z"/><path d="M121 173c7-12 15-24 17-41 2-28-23-39-47-42 11-6 23-11 39-13 11-1 19 5 22 13 6 15 1 38-5 49-8 14-17 26-26 34z"/><path d="M83 103c19 0 37 7 36 24-1 9-9 13-17 14 3-3 6-8 5-14-1-13-14-19-24-24z"/><path d="M77 111c1 17 8 37 24 40 10 2 16-6 22-9-3 11-8 24-19 26-9 1-15-4-20-7-11-10-12-34-7-50z"/><path d="M31 119h1c7 14 16 27 28 38 11 10 24 20 40 25 17 6 39 5 56 0s31-12 44-22c-12 18-26 33-42 47-7 6-16 13-26 17-11 5-23 9-36 6-17-3-30-15-39-27s-16-27-21-45c-3-11-5-24-5-38v-1z"/></g></svg>',
  },
  {
    kode: "H",
    pop: "H",
    name: "Høyre",
    samisk: "Olgeš",
    shortname: "Høyre",
    abbr: "H",
    color: "#0070ff",
    textcolor: "#0070ff",
    colorDark: "#0070FF",
    textcolorDark: "#3990FF",
    logo: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 652 304"><g id="H" stroke="none" stroke-width="1" fill="#FFF" fill-rule="nonzero"><path d="M.75 75.74L38.33 294.8a10.29 10.29 0 0015.49 7.06c55-33.41 272.51-158.08 399.76-120.7 3.06.9 5.69-1.84 5.17-5-1.38-8.35-14.42-77.92-15.84-86C427.37 1.13 271.64-45 7.35 63.66a11 11 0 00-6.6 12.08z" id="Path"/><path d="M391.87 260.77c-9.51.45-9.89-7.77-1.42-9.89 62.35-15.59 89.56-44.68 87.08-76.12-.51-6.46-9.41-64.95-11.62-85.08a8.76 8.76 0 015.58-9.13C492.84 72.36 559.78 43.72 604 7.06a7.89 7.89 0 0112.74 4.58l35 176a9.22 9.22 0 01-4.78 9.58c-30.36 14.65-134.82 57.92-255.09 63.55z" id="Path"/><path d="M366.7 203.17l9.88 29.63c.94 4.45 3.11 6.43 7.41 4.94 39.22-13.57 58-25.93 56.79-35.8-1.08-8.58-25.31-12.72-66.38-6.87-4.4.62-8.62 3.74-7.7 8.1z" id="Path"/></g></svg>',
  },
  {
    kode: "FRP",
    pop: "Frp",
    name: "Fremskrittspartiet",
    samisk: "Ovddádusbellodat",
    shortname: "Frp",
    abbr: "Frp",
    color: "#4b08e4",
    textcolor: "#4b08e4",
    colorDark: "#783DFF",
    textcolorDark: "#9D74FB",
    logo: '<svg  viewBox="0 0 223 217" xmlns="http://www.w3.org/2000/svg"><g fill="#FFF" fill-rule="evenodd"><path d="M109 22c3 2 5 2 8 2 2-6 5-13 9-19-3-3-6-4-9-5-4 7-6 15-8 22zM118 25c10-10 25-25 47-23 29 3 35 37 58 38a47 47 0 01-38 16c-34 0-44-30-67-31z"/><path d="M69 14c17-1 30 12 43 15 11 3 16-1 29 12 15 15 32 21 53 18 8 13 12 27 12 40 0 32-10 58-25 78-19 27-44 40-61 40-10 0-16-4-27-5-6 0-13 2-23 1-18-1-41-27-50-40C1 146-4 115 3 83c7-29 28-65 66-69zm86 55H96c-11 0-17 7-20 20l-16 88h21l13-66c1-5 2-5 5-5h48l8-37zm-16 74l6-28h-42l-13 62h19l7-34h23z"/></g></svg>',
  },
  {
    kode: "SP",
    pop: "Sp",
    name: "Senterpartiet",
    samisk: "Guovddášbellodat",
    shortname: "Sp",
    abbr: "Sp",
    color: "#2EAF6E",
    textcolor: "#57990B",
    colorDark: "#2EAF6E",
    textcolorDark: "#49CF8C",
    logo: '<svg viewBox="0 0 247 247" xmlns="http://www.w3.org/2000/svg"><g fill="#FFF" fill-rule="evenodd"><path d="M131 121c8 9 16 23 24 34 7 11 16 21 28 28 11 6 22 7 33 5 20-6 30-23 30-38 0-12-5-22-13-30 9-9 11-18 10-28 0-9-7-31-34-33-5 0-12 1-17 4 9 0 16 0 24 5 9 4 14 12 14 23-1 19-20 24-27 29 8 5 24 13 24 30 0 8-8 22-25 22-10 0-22-9-34-19-12-11-28-29-37-32zM121 115c9-8 23-16 34-24 11-7 21-16 28-28 6-11 7-22 5-33-6-20-23-30-38-30-12 0-22 5-30 13-9-9-18-11-28-10-9 0-31 7-33 34 0 5 1 12 4 17 0-9 0-16 5-24 4-9 12-14 23-14 19 1 24 20 29 27 5-8 13-24 30-24 8 0 22 8 22 25 0 10-9 22-19 34-11 12-29 28-32 37zM115 126c-8-9-16-23-24-34-7-11-16-21-28-28-11-6-22-7-33-5C10 65 0 82 0 97c0 12 5 22 13 30-9 9-10 18-10 28 0 9 7 31 34 33 5 0 12-1 17-4-9 0-16 0-24-5-9-4-14-12-14-23 1-19 20-24 27-29-8-5-24-13-24-30 0-8 8-22 25-22 10 0 22 9 34 19 12 11 28 29 37 32zM125 132c-9 8-23 16-34 24-11 7-21 16-28 28-6 11-7 22-5 33 6 20 23 30 38 30 12 0 22-5 30-13 9 9 18 11 28 10 9 0 31-7 33-34 0-5-1-12-4-17 0 9 0 16-4 24-5 9-13 14-23 14-20-1-25-20-30-27-5 8-13 24-30 24-8 0-22-8-22-25 0-10 9-22 19-34 11-12 29-28 32-37z"/></g></svg>',
  },
  {
    kode: "SV",
    pop: "SV",
    name: "Sosialistisk venstreparti",
    shortname: "SV",
    abbr: "SV",
    color: "#ff2a7f",
    textcolor: "#ff2a7f",
    colorDark: "#FF2AAA",
    textcolorDark: "#FF52BA",
    logo: '<svg viewBox="0 0 246 144" xmlns="http://www.w3.org/2000/svg"><g fill="#FFF" fill-rule="evenodd"><path d="M111 136c0 2 0 5 5 1l62-63h-67v62zm28-67V8c0-2-2-4-4-4h-20c-2 0-4 2-4 4v61h28zM245 7l-62 62h-39l62-62 1-1c1-1 2-2 5-2h32c2 0 3 1 1 3z" fill-rule="nonzero"/><path d="M96 100c0 26-20 44-48 44S0 125 0 100c0-2 2-4 4-4h20c2 0 4 2 4 4 0 9 7 17 20 17 12 0 19-7 19-17 0-8-5-12-20-16C22 79 2 68 2 42 2 19 22 0 48 0s46 19 46 42c0 2-2 4-4 4H70c-2 0-4-2-4-4 0-8-7-15-18-15s-17 6-17 14 7 12 17 14c28 6 48 18 48 45"/></g></svg>',
  },
  {
    kode: "RØDT",
    pop: "R",
    name: "Rødt",
    shortname: "Rødt",
    abbr: "Rødt",
    color: "#cd0060",
    textcolor: "#cd0060",
    colorDark: "#D71357",
    textcolorDark: "#ED3172",
    logo: '<svg viewBox="0 0 238 228" xmlns="http://www.w3.org/2000/svg"><path d="M71 66c-4 15-13 48-13 79 24 13 59 26 81 32 22-17 51-47 62-62-10-20-27-51-43-67-26 2-73 13-87 18m-9 3c-6 23-11 53-13 71-27-15-50-32-49-37s27-24 62-34m90-29c-26 4-62 12-78 16 8-26 23-55 29-56 5-1 28 17 49 40m-1 141c18-17 36-37 55-57 11 24 27 66 22 70-5 5-50-3-77-13m-93-26l72 30c-26 24-60 46-66 43-5-3-8-47-6-73m149-48c-13-23-26-41-39-60 35-4 67 2 70 7 2 2-10 28-31 53" fill="#FFF" fill-rule="nonzero"/></svg>',
  },
  {
    kode: "KRF",
    pop: "KrF",
    name: "Kristelig folkeparti",
    shortname: "KrF",
    abbr: "KrF",
    color: "#f1c526",
    textcolor: "#CEA203",
    colorDark: "#F1C526",
    textcolorDark: "#F1C526",
    logo: '<svg viewBox="0 0 242 216" xmlns="http://www.w3.org/2000/svg"><path d="M213 8c-41-22-92 5-110 51 2-64-58-63-83-41-26 21-25 68-7 92v-4C6 92-3 53 24 32c23-19 68-17 64 46 25-10 22-38 58-55 26-13 65-5 72 29 5 26 1 61-76 108l6-47 18-8c9-6 16-9 19-24-15 7-34 13-35 15 3-28 10-45 31-51 5-1 5-4 5-4-30 0-49 6-57 61v1c-9 4-19 7-25 17l3-19c-10 3-20 11-23 30l-7 42c-4-1-17-29-21-32 22-15 23-19 26-34-10 7-34 17-37 21 0-3 5-64 11-77-14 0-24 17-26 33-1 4-13 117-23 132 23-6 29-20 34-64 16 27 34 46 45 39 7-5 9-11 17-57 1-9 22-12 24-14l-6 50c-30 21-29 41-19 43 17 4 34-22 39-46 25-13 43-25 58-37 45-33 62-96 14-122zM105 206c-5-2-4-14 14-28-3 18-8 29-14 28z" fill="#FFF" fill-rule="nonzero"/></svg>',
  },
  {
    kode: "V",
    pop: "V",
    name: "Venstre",
    shortname: "Venstre",
    abbr: "V",
    color: "#045c6c",
    textcolor: "#045c6c",
    colorDark: "#05778B",
    textcolorDark: "#068EA7",
    logo: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 108 108"><path fill="#FFF" d="M54 108A54 54 0 1 0 8 27h15l20 49 20-49h23L63 82l-11 25v1h2ZM4 35l29 68S13 97 4 74c-9-22 0-39 0-39Z"/></svg>',
  },
  {
    kode: "MDG",
    pop: "MDG",
    name: "Miljøpartiet de grønne",
    shortname: "MDG",
    abbr: "MDG",
    color: "#37CA08",
    textcolor: "#37CA08",
    colorDark: "#37CA08",
    textcolorDark: "#37CA08",
    logo: '<svg viewBox=\'0 0 238 239\' xmlns="http://www.w3.org/2000/svg"><path d="M64 0C29 0 0 29 0 64v175h187c25-4 44-22 51-46V0H64zm25 123c0-6-2-12-9-12s-10 6-10 12v25H59v-28c0-5-3-9-9-9-7 0-10 6-10 12v25H29v-46h6c3 0 5 2 5 5v3c2-5 7-9 14-9s12 4 14 9c3-6 8-9 15-9 12 0 17 9 17 18v29H89v-25zm55-31c0-5 4-9 9-9h2v66h-11v-7c-3 5-9 8-16 8-13 0-22-11-22-24 0-14 9-24 22-24 8 0 13 4 15 7h1V92zm-13 49c8 0 13-8 13-15s-5-15-13-15c-9 0-13 8-13 15s4 15 13 15zm70-33c0-3 2-5 5-5h6v41c0 17-8 27-26 27-7 0-16-3-22-7l6-9c5 4 10 6 16 6 11 0 15-6 15-15v-4h-1c-3 5-8 7-15 7-13 0-22-11-22-23 0-13 9-24 22-24 7 0 13 3 16 8v-2zm-13 32c8 0 13-7 13-14 0-8-5-15-13-15-9 0-13 7-13 15 0 7 4 14 13 14z" fill="#FFF" fill-rule="evenodd"/></svg>',
  },
  {
    kode: "FNB",
    name: "Folkets parti",
    shortname: "FP",
    abbr: "FP",
    color: "#00B9CC",
    textcolor: "#00A0B0",
    colorDark: "#00B9CC",
    textcolorDark: "#00B9CC",
    logo: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 502 600"><g fill="#fff" fill-rule="evenodd"><path d="M196 600V403c0-2 0-3 3-3h170c10 0 19-1 28-5 14-5 21-15 24-29a112 112 0 0 0 2-44c-1-12-3-23-11-33-5-6-12-9-20-11l-18-3H244l12-17 19-25 12-17 3-1h93c13 0 26 2 38 6a101 101 0 0 1 72 64l7 28 2 12v24c-1 11-3 21-6 32-6 21-17 38-34 52-22 18-48 26-77 27H271c-2 0-3 1-3 3v137h-72Zm35-385c0 4-4 5-5 8l-17 23-13 18-6 8c-2 2-3 3-6 3h-68c-2 0-3 1-3 3v153c0 3 0 3-3 3H44c-2 0-3 0-3-3V278c0-3-1-4-4-3H3c-2 0-3-1-3-3v-55c0-2 1-3 3-3h35c3 0 3 0 3-2v-29l2-17a119 119 0 0 1 22-53l11-13c10-10 23-18 36-24a179 179 0 0 1 50-12c43-4 87-1 130-2h29l-7 11-34 47c-1 2-2 2-4 2h-90c-15 0-29 3-43 11a63 63 0 0 0-28 44c-3 12-1 24-2 36 0 2 1 2 2 2h116Z"/><path d="m111 493 4-20 10-30 5-16c4-9 6-18 11-26l6-14 6-14a481 481 0 0 1 34-64 608 608 0 0 1 94-117 372 372 0 0 0 64-84l7-22 4-20 1-10 3-20V26l1-26 6 9c8 14 12 29 14 44a140 140 0 0 1-15 81c0 1-2 2-1 4 2 2 3 1 5 0a163 163 0 0 1 61 8l17 7c8 5 16 11 19 21l-10-3-35-7c-3 0-7-2-10 0-7-3-15-2-22-2a148 148 0 0 0-68 18l-3 2v1c-3 0-5 3-7 3h-1l-16 11-15 13c-9 7-16 16-24 24-11 11-21 23-30 36l-24 31-16 26c-6 8-10 17-15 25l-17 32-5 10c-2 3-2 7-5 10l-2 6c-4 7-6 15-9 22l-9 24-10 31-4 19 1-13Z"/><path d="M423 121c-15 1-30-14-29-30s12-28 27-29c21 0 32 15 32 31 0 15-14 29-30 28"/></g></svg>',
  },
  {
    kode: "PF",
    name: "Pasientfokus",
    shortname: "Pf",
    abbr: "Pf",
    color: "#FFAB88",
    textcolor: "#CD7B53",
    colorDark: "#FFAB88",
    textcolorDark: "#FFAB88",
    logo: '<svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21 12"><path fill-rule="evenodd" clip-rule="evenodd" d="m14.2.5-7 .1.2 3.3-6.5.2V8l6.5-.2.1 3.2 7-.1-.1-3.3 6.6-.1-.1-3.9-6.6.2V.5Z" fill="#fff"/></svg>',
  },
  {
    kode: "Andre",
    pop: "A",
    name: "Andre partier",
    shortname: "Andre",
    abbr: "Andre",
    color: "#333",
    textcolor: "#333",
    colorDark: "#999",
    textcolorDark: "#ccc",
  },
  {
    ssb: "LL",
    name: "Lokale lister",
    shortname: "LL",
    abbr: "LL",
    color: "#333",
    textcolor: "#333",
    colorDark: "#999",
    textcolorDark: "#ccc",
  },
  {
    ssb: "FL",
    name: "Felleslister",
    shortname: "FL",
    abbr: "FL",
    color: "#333",
    textcolor: "#333",
    colorDark: "#999",
    textcolorDark: "#ccc",
  },
  {
    kode: "Blanke",
    name: "Blanke stemmer",
    shortname: "Blanke",
    abbr: "Blanke",
    color: "#333",
    textcolor: "#333",
    colorDark: "#999",
    textcolorDark: "#ccc",
  },
  {
    kode: "NSR",
    name: "Norske Samers Riksforbund",
    samisk:
      "Norgga Sámiid Riikkasearvi - Vuona Sámij Rijkasiebrre - Nøørjen Samiej Rijhkesiebrie",
    shortname: "NSR",
    abbr: "NSR",
    color: "#FD964B",
    textcolor: "#FD964B",
    colorDark: "#FD964B",
    textcolorDark: "#FEB27C",
    logo: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 318 313"><g fill="#FFF" fill-rule="nonzero"><path d="M178 70v15.1a68.6 68.6 0 0152.3 53.9H248v26h-17.7a68.6 68.6 0 01-52.3 53.9V243h-29v-24c-27-5.5-48-27-53.3-54H70v-26h25.7A68.6 68.6 0 01149 85V70h29zm-15 38.5a43.5 43.5 0 100 87 43.5 43.5 0 000-87zM213 6.1l-.2.3L159 60.5l-53.8-54a11.1 11.1 0 01-3-6H130l29 29.2L188 .5h27.8c-.3 2-1.2 4-2.7 5.6zM213 306.9l-.2-.3-53.8-54.1-53.8 54a11.1 11.1 0 00-3 6H130l29-29.2 29 29.2h27.8c-.3-2-1.2-4-2.7-5.6zM311.9 103l-.3.2-54.1 53.8 54 53.8c1.7 1.6 3.8 2.7 6 3V186l-29.2-29 29.2-29v-27.8c-2 .3-4 1.2-5.6 2.7zM6.1 211l.3-.2L60.5 157l-54-53.8a11.1 11.1 0 00-6-3V128l29.2 29L.5 186v27.8c2-.3 4-1.2 5.6-2.7z"/></g></svg>',
    diggi: true,
  },
  {
    kode: "ARJA",
    name: "Árja",
    samisk: "",
    shortname: "Árja",
    abbr: "Á",
    color: "#D62991",
    textcolor: "#D62991",
    colorDark: "#D62991",
    textcolorDark: "#E472B6",
    logo: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 77 105"><g fill="#FFF" fill-rule="evenodd"><path d="M30.6 17.4l2.1-5.6c.5-1.2.8-2.4 1.2-3.7l1-4.5c.3-.7 1-1.4 1.7-1.6 2-.4 4-.8 6-1a15 15 0 014.9.1c1.2.3 2.2 1.4 3.3 2.2-.4.6-.7 1.3-1.3 1.7-1.7 1.5-3.6 2.7-5.2 4.2-2.5 2.3-4.7 5-7.3 7.3a14 14 0 01-4.6 2.4c-.3.1-1.2-1-1.8-1.5M33 72.3c1.6-.4 3.1-.9 4.7-1.2 1.6-.3 2.4-1.3 2.2-2.8a118.7 118.7 0 00-2.8-12c-.6-2-1.5-3.9-2.1-5.9-.8-2.5-1.4-5-2-7.5l-.5-.7-.4.3-3.2 8.8-.4.7-2.5 6.4-1.3 3.5-1.8 4.2c-.4 1.2-.6 2.5-1.1 3.7-1 2.2-2 4.5-1.8 7 0 .4.3 1 .6 1 .4.2 1 0 1.3-.3 1.1-1.3 2-2.9 3.2-4 1-1 2.2-2 3.5-2.1 1.3-.2 2.8.5 4.4 1m-19 32.5H6c-1.5-.1-3-.6-4.4-1.2-.5-.2-1-1.2-1.1-1.9l.1-6.7c0-.3.4-.6.5-1 .6-1.8 1.3-3.6 1.8-5.5.4-1.4.6-2.9 1.2-4.3.4-1.2 1.2-2.4 1.7-3.6L7 77.3l2.7-6.5c.5-1.2.7-2.5 1.2-3.6l1.4-2.9c.6-1.4 1-2.9 1.7-4.3l2.6-5.2 1.5-3.5 2.5-5.4 1.3-3.6 2.8-5.5 1.3-3.5 2.6-5.3c.4-1 1.2-1.8 1.3-2.7.2-1.3 1-1.4 2-1.3h3.3c2.6 0 3.6 1 3.8 3.6.1.8.6 1.6 1 2.4.9 2 1.9 4.1 2.7 6.2l1.3 3.5 1.6 3.4 1.3 3.8 2.9 6.4 1.2 3.3 2.9 6.6c.5 1.2.7 2.5 1.2 3.7l2.7 6.3 1.2 3.1 1.1 1.9 3.7 8 1 2.4c1.1 2.6 2 5.4 3.4 7.8 1 1.5 2.7 2.6 4.2 3.6 1.2.8 2.7 1.1 3.8 2 .5.3.6 1.5.6 2.4 0 .1-1 .5-1.5.5-5.8 0-11.6.1-17.4 0-2.2-.1-4.3-.9-5.1-3.4-.6-2-1.2-3.9-2-5.7-.7-2.1-1.7-4-2.5-6.1-.6-1.5-.9-3.2-1.5-4.6-.6-1.4-.7-3.1-3.2-3-6.4.2-13 0-19.4 0-3.3 0-6.3.7-7.5 4.4l-2.6 7.2c-.7 2.2.5 4 2.3 5 1.6 1 3.7 1.4 5.4 2.4 1.1.6 3.4.1 3.2 2.5 0 .4-.8 1.2-1.3 1.2-3.2.2-6.4.1-9.7.1"/></g></svg>',
    diggi: true,
  },
  {
    kode: "NORDK",
    name: "Nordkalottfolket",
    samisk: "",
    shortname: "NK",
    abbr: "NK",
    color: "#9E08E4",
    textcolor: "#9E08E4",
    colorDark: "#9E08E4",
    textcolorDark: "#D789FB",
    logo: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 97 111"><g fill="none" fill-rule="evenodd"><path d="M67.7 101.9c-5.7.4-11.2 0-15.6-4.2a19.4 19.4 0 01-4.1-6l-26-60c-.8-1.8-2.4-3.2-3.6-4.8-.9 1.8-2.3 3.5-2.7 5.5L5.4 91c-.5 3-1.5 6-2.3 9-.2.6-1 1-1.4 1.5-.2-.7-.8-1.3-.7-1.9.7-5.7 1.2-11.5 2.2-17.2 3.1-18.7 6.4-37.3 9.6-56 1.3-7 6-11.2 13.2-11.3 3 0 6-.2 9 0a16 16 0 0115 10.2C58.7 45.6 67.4 65.8 76.2 86c.7 1.6 2.2 2.7 3.3 4.1.9-1.5 2.2-3 2.5-4.6 3.5-19.3 6.8-38.7 10.2-58 .6-3.5 1.6-6.9 2.5-10.3.2-.6 1-1 1.4-1.5.3.6 1 1.3.9 2-.5 4.9-1 9.8-1.9 14.7l-10 57.8c-1.4 7.9-6 11.8-13.7 11.8h-3.7" fill="#FFF"/><path d="M6 106l4.7-26.6 6.9-37.9c.3-1.8.8-3.5 1.4-5.3.2-.5.8-.8 1.2-1.2.3.5.8 1 .8 1.5-.2 4.4-.2 8.8-1 13.1-2.9 17.1-6 34.2-9.2 51.2-.4 2.4-1.2 4.8-2 7.1-.2.8-1 1.4-1.5 2.1-.4-.9-.8-1.8-1-2.7v-1.2H6M76 76.8c1.6-9.7 3.2-19.4 5-29 1.9-11.4 3.9-22.7 6-34a40 40 0 011.8-6.2c.3-.6 1-1 1.5-1.6.3.6.8 1.3.7 2-.4 4.1-.7 8.4-1.4 12.5l-9.8 56c-.3 1.5-.8 3-1.3 4.4-.2.4-.7.7-1 1.1-.3-.5-.9-.9-1-1.4V77H76zM72.2 67.9c0-3-.4-6 0-8.8 1.5-9 3.2-18 4.8-26.9L81.6 7c.3-1.8 1-3.6 1.6-5.4.2-.5.7-1 1.1-1.5.3.6.8 1.3.7 2-.6 4.8-1.2 9.6-2 14.4l-6.8 37.2-3 14.4-1-.1zM65 51.6c1.5-8.8 3-17.8 4.7-26.7.6-3.7 1.5-7.4 2.5-11 .3-1 1.2-2 1.9-2.9.3 1 1 2.2.9 3.3-.4 4-1 8-1.8 12-1.4 8.5-3 17-4.5 25.4v.3l-2.4 5-1.3-5.4M15 100.5c1-5.9 2.2-11.7 3.3-17.6l5.5-31 .3-1.5 1-1.4c.4.6 1 1.2.9 1.8-.2 2.8-.3 5.7-.8 8.6L19 93.7c-.6 2.9-1.1 5.7-1.8 8.4-.2.7-.9 1.3-1.3 1.9l-.7-2.2v-1.3H15M22 97l4.4-24.6c.6-3.4 1.3-6.8 2.2-10.2.2-.8.9-1.5 1.4-2.2.3.9 1 1.8 1 2.6-.2 3.7-.4 7.4-1 11-1.1 7-2.5 14-3.8 20.9-.2 1-.3 2-.8 3-.7 1.2-1.6 2.3-2.4 3.5l-1-4" fill="#FFF"/></g></svg>',
    diggi: true,
  },
  {
    kode: "JOHT",
    name: "Flyttsamelisten",
    samisk: "Johttisápmelaččaid listtu",
    shortname: "JL",
    abbr: "JL",
    color: "#DCC600",
    textcolor: "#DCC600",
    colorDark: "#DCC600",
    textcolorDark: "#DCC600",
    logo: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 617 781"><g fill="#FFF" fill-rule="evenodd"><path d="M167 545c7 5 13 9 20 12l6 1c5 0 10 0 15-2l19-7 7-3 15-7 4-3c1-1 0-3-1-3l-3-1-6 1a260 260 0 0 0-28 10l-15 5a38 38 0 0 1-19-1l-13-3-1 1zm288 67a8 8 0 0 0-1 6l1 9 2 4 5 10c2 5 5 8 8 12a26 26 0 0 0 18 6h9c3 0 5-3 4-6l-2-3-9-5-5-3-10-10-13-12-2-4-5-4zm-84-97 2 2 9 4 5 3c1 1 3 3 2 5l-2 2-9-3-6-6c-1-1-3-1-3 1l-1 2c2 8 5 15 14 19l7 3 13 4a26 26 0 0 1 9 5l5 3c1 1 4 0 3-3l-3-10-4-12a22 22 0 0 0-7-12c-4-3-8-5-13-6l-12-1-6-1-3 1zM170 729l9-1c11-2 21-4 31-8l15-5 11-5 13-9 9-7 14-11 15-11 11-8 2-2v-2h-1l-5 1a51 51 0 0 0-13 7 192 192 0 0 1-35 22l-14 8-15 7-9 4c-6 3-13 5-19 6l-22 5-9 4v2l2 2 10 1zM0 493h16a364 364 0 0 0 14-2l6-2 8-1 7-1 4-1a44 44 0 0 0 9-3l5-1 13-2c5-2 11-2 16-2h6l20-1 3 1h5c4-1 7 1 10 3l10 7 3 3 11 9 5 4 6 6 8 5a64 64 0 0 0 26 6c8 1 17 0 25-3 6-1 10-4 15-6l2-1 20-7c7-2 14-3 22-3 1 0 3 0 4 2l7 7 9 10a5 5 0 0 0 3 1h4l4-1c1-2-1-3-1-5l-4-3-3-2a65 65 0 0 1-15-17l-10-18-1-2c-3-2-4-6-5-9a36 36 0 0 1-4-16c4-4 11-3 15 0 5 5 10 10 14 17l7 11 1 1c0 4 2 7 1 10l2 14c1 3 1 4 5 6l2-3 1-5 1-14c1-4 1-8-2-12l-7-10-3-3a19 19 0 0 0-6-6l-4-3 2-1h2l14 5 6 4 10 12 5 5 2 1c2-1 2-3 2-4l-1-4-1-3c-1-7-6-12-10-17l-13-10-19-15-13-7-7-3-10-5-3-1-12-6-5-2c-4-1-8-5-11-7l-17-11-3-2c-6-5-12-8-19-11l-2-1-13-2h-13l-16-1-9-1-9-2-8-1-9-2-10-5a31 31 0 0 1-11-8l-16-16-9-10-1-1a20 20 0 0 1-6-10l-1-1-3-6-2-6-2-10-1-11v-9l2-11c0-3 2-5 4-6 3-1 6 0 8 3h1c2 5 6 9 7 15a72 72 0 0 1 1 10 90 90 0 0 0 4 19c5 6 9 13 15 18l13 11 4 2a154 154 0 0 0 13 9 145 145 0 0 0 28 6h3v-3l-3-5-8-14-4-7-3-7-2-6-3-9-2-8a95 95 0 0 0-3-13c-1-5-1-9 1-14l2-6c0-5 2-10 6-14l1-3 9-13 13-18c3-4 6-9 6-14l1-1c2-4 0-7 0-11-2-9-8-14-15-18l-6-4-10-4-3-1-12-1h-2l-11-1-15-1-15-2h-3l-4-1-2-1c-4 0-7-2-10-5l-2-4a4 4 0 0 1 0-6l2-1 11-5h8l8 1 6 1h14c6 0 8-5 6-10a75 75 0 0 0-10-13l-6-5-3-2c-3-1-5-4-7-7l-4-6a12 12 0 0 1-2-9v-2c-1-3 0-5 2-8a5 5 0 0 1 5-2c2 0 4 0 6 2l4 3 10 8 1 1c3 4 9 6 13 10v1c6 2 10 6 14 10l10 9 10 10c4 3 7 7 9 11 0 2 1 2 2 3l1 2c1 4 4 7 4 11l3 5 2 3a11 11 0 0 0 6 5l4 2h8l4-1 2-2a47 47 0 0 0 4-5l5-9c3-4 4-9 6-13v-4l1-9a110 110 0 0 0-2-11l-1-3-3-4c-1-4-5-5-8-7l-8-5a17 17 0 0 1-4-7l-2-4-5-13c-1-5-4-10-6-14l-6-15-1-2c-1-5 1-7 6-8l8 2c7 4 14 10 18 18l5 9 1 5 3 6 3 4a12 12 0 0 0 6 6h14c2 0 4-2 5-5l2-4 1-7 1-3V33c0-4 1-8-1-12 1-4 0-9 2-14l2-4 1-2a14 14 0 0 1 9 10 203 203 0 0 0 6 16c0 5 2 10 3 14v1l2 13-1 2 1 8v3a114 114 0 0 0-2 14l-2 18-1 7-1 2-2 4-3 10-4 8-4 10-13 21-3 4-8 11-9 10-6 8-14 14-6 7-9 8a198 198 0 0 0-13 16l-7 10-1 2c-3 3-3 7-3 11l-1 9 2 10 12 28 1 2 3 3 9 13 6 6 6 4 6 5 11 8 18 10 28 15h2l13 7 16 8 7 4 8 4c6 3 11 8 17 12l13 10 14 12c4 2 6 5 8 9l4 3c5 3 11 4 17 5h18l17-2a892 892 0 0 1 11-2l8-1c7-2 14-3 20-6a55 55 0 0 0 15-10l4-3 2-2 13-13 1-2 8-9 3-4 3-4 4-5 9-12a10 10 0 0 1 8-4c4 0 6 1 8 5l3 7 2 4 3 6 4 4a5 5 0 0 0 6 0l10-6 10-8 5-6 8-10c3-3 6-5 10-6 5 1 6 5 6 10l-5 21a12 12 0 0 0 0 9l12 4v10l-2 2-1 1-8 7-4 4-2 2-9 4c-3 2-4 4-2 7l4 6v2c0 3-2 5-5 6l-6 3-2 1c-1 1-2 2-1 3a38 38 0 0 0 2 4l1 9c0 2-1 3-3 3l-9 5c-3 2-7 4-11 3l-11-2-8-1-8 2c-1 1-2 3-1 5 2 5 4 8 8 11l7 4c5 3 10 4 15 4 2 0 5 0 7-2 3-3 6-2 9-2 2 1 3 2 3 4l-3 5c-4 4-9 8-15 10h-5l-18-6-12-8c-4-2-7-6-12-8l-1-1-7-6-11-11-7-7-2-2c-1-2-4-3-6-2h-19a62 62 0 0 1-21-2c-4-2-8-2-12-2l-11 1-11 2h-6l-11 1c-3 0-5 2-5 3l4 4h3c5 1 11 0 16-1l16-2 10-1 4 2c2 1 4 3 4 6l2 6 1 2 8 9 5 5c2 2 4 5 7 6 2 0 3 2 4 3 3 4 4 8 4 13l-1 10c0 3 0 5 2 8l7 14 3 5c4 6 7 13 9 20l5 10 7 11 3 2 7 7c3 2 4 6 4 9l-4 14-3 10-1 3 4 2h4l5-1h1l3 3-2 6-4 5c-1 2-3 2-5 3-1 1-2 0-4-1a12 12 0 0 0-11-1l-6 3a15 15 0 0 1-7 3l-3 2a22 22 0 0 1-14 2 49 49 0 0 1-21-7l-7-6-2-1-6-5a47 47 0 0 0-7-6l-16-11-10-5c-7-3-12-8-18-12a229 229 0 0 0-21-13l-16-15a38 38 0 0 1-7-8l-7-13-4-9-4-7a3 3 0 0 0-2-1l-2 2v6l5 13 4 8 4 7c2 5 6 9 10 13l6 4 18 13 4 2-2 2-6 2c-5 0-10 2-14 4l-6 2-8 5-12 8-1 1-15 17-5 8-2 5c-5 8-9 16-12 25a76 76 0 0 1-7 14c-1 1-1 3-3 3s-2-3-3-4l-1-4c-1-2-3-3-5-1l-2 3-4 8c-1 3-4 6-4 10l-1 2-7 11a65 65 0 0 1-6 7c-1 1-3 1-3-1l-1-4v-3c-1-1-2-2-3-1l-4 4-4 12-1 4a40 40 0 0 1-5 13c-2 2-3 2-6 0-1-1-3-3-3-5l-2-4-4-10a9 9 0 0 0-4-4 5 5 0 0 0-4 3 252 252 0 0 1-10 14h-3l-2-4v-10l-1-7c-1-2-3-3-5-1l-5 5-6 4c-3-1-3-3-4-5l-2-5c-2-1-4 0-6 1l-8 5-1 1c-3 2-4 1-6-1l-7-9c-3-3-7-4-11-4h-2l-12 6-6 5-12 8-10 7-8 5c-5 2-10 5-16 4-2-3-2-5-1-9l2-5a43 43 0 0 1 10-15l5-6 17-12 15-9 6-3 4-3c7-2 12-5 17-9l5-3 5-4a63 63 0 0 0 13-19l5-14 1-4a39 39 0 0 0 3-9l3-17v-13c0-3-2-4-5-4-3 1-4 2-5 6l-6 32c-2 7-3 13-6 19a51 51 0 0 1-17 21 228 228 0 0 1-32 18 49 49 0 0 0-7 4l-18 13-12 12-10 17a22 22 0 0 0-3 8l-2 8h-6l-33-6-8-1V493z"/><path d="m382 436 1-2c2-3 3-9 2-12l-1-10-1-5-5-9-4-8-4-7-13-19-10-18-7-14-10-18-2-4-8-10a81 81 0 0 1-12-11l-6-7-6-8-7-12-2-3c-4-5-6-12-9-17l-1-3-2-11-1-9v-27c0-5 2-9 3-13a136 136 0 0 1 6-15c1-3 4-3 6-1 2 1 4 4 4 6 1 3 3 6 2 9v35l1 3 1 8 2 12c1 7 5 13 11 16l5 1c3-4 5-9 6-14l9-24 2-7 4-9c1-6 5-10 7-15l6-10 2-3c6-6 7-12 6-19a28 28 0 0 0-3-11 91 91 0 0 1-9-21l-3-14-2-7c-3-7-4-8-9-14l-6-6-7-7-6-5a8 8 0 0 1-3-6v-3c0-3 1-5 4-5l8-1 5 1c5 2 9 5 12 9l7 9 8 6 3 1 5-1 4-8 1-3 4-8c2-5 5-9 9-13 5-4 9-2 12 3v3c1 5-1 10-1 15-1 4-2 8-5 11l-2 5c0 3-2 6-3 8-3 5-3 10-3 16v12c0 3 1 5 3 7s4 2 6 1l4-4 7-7 5-6 10-15c3-3 4-7 5-12l2-4 4-10 2-7a408 408 0 0 1 5-10l5-9c2-3 6-4 9-2 2 0 4 1 5 3l2 4c2 3 3 7 2 10l-4 9-6 15a51 51 0 0 1-4 9c-2 4-5 9-6 14v1c0 8 2 9 9 9 6 0 11-2 17-4l6-3 16-8c7-4 13-8 17-15a12 12 0 0 1 7-4c4-1 6 1 6 5a22 22 0 0 1-2 12 61 61 0 0 0-3 8c-2 4-4 8-8 10l-11 9a106 106 0 0 1-15 6l-17 7a35 35 0 0 1-8 4 70 70 0 0 0-15 7l-4 3a75 75 0 0 0-15 8l-2 2c-5 2-8 6-12 9l-3 2c-5 2-9 7-13 11l-4 4a19 19 0 0 0-5 6l-6 11-5 12-4 14-5 16-3 17-1 16a31 31 0 0 0 3 12l7 14 6 11 10 18 6 11 4 5 6 10 5 9 1 1c3 4 4 10 5 15l2 5c2 2 2 4 3 7l4 19 1 9 1 7c0 5-2 8-7 10h-17c-3-1-6-3-8-6m95 257c-4 1-7-1-10-1l-8-6-1-2c0-1 1-2 2-1l7 1c2 1 5 2 8 1l7-2h7l14-5h1c1 0 3 1 2 2l-1 2c-2 2-4 5-7 6a25 25 0 0 1-9 3l-7 2a9 9 0 0 1-5 0m76-312c0-3 2-5 5-7l6-6a7 7 0 0 1 10 1v2c0 6-2 11-7 14l-3 2c-3 3-7 3-9-1l-2-5"/></g></svg>',
    diggi: true,
  },
  {
    kode: "SFF",
    name: "Samenes folkeforbund",
    samisk: "Sámi Álbmotlihttu",
    shortname: "SF",
    abbr: "SF",
    color: "#08CA79",
    textcolor: "#08CA79",
    colorDark: "#08CA79",
    textcolorDark: "#08CA79",
    logo: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 98 139"><g fill="#FFF" fill-rule="evenodd"><path d="M64.5 50.8c-.2 1.6 0 2.6 1.4 2.5 1.4-.1 2.8-.3 2.7-2.2 0-1.6-.7-3.2-2.2-3.2-2 0-1.7 2-2 2.9m-22.6 3.4c1.1-.9 4.2 1 3.6-1.7-.6-2.7-1.6-5.7-4-7.5-1.3 2.5-3.2 4.9-3.6 7.5-.3 2.3 2.5 1.3 4 1.7m36.8.7c1-.9 4.7 1.9 4-1.6-1.2-4.9-3.8-9.5-5.8-14.2l-7.4-17.9c-.3-.6-.6-1.4-1.1-1.7-1-.4-1.6.5-2 1.3-1.8 3.3-3.4 6.7-5.4 9.8-3.1 5-7.3 9.5-4.3 16.2.8 1.8.8 4 2.6 5.3.1 0 1-.4 1.1-.8l3.5-8.4c.7-1.5 1-3.4 2.6-4.2.2 0 .9.5 1 1 1 2.2 1.4 4.7 2.7 6.6 2.3 3.2.8 10 8.5 8.6m-25.1-2.2c-.4-1-1.2-2.5-1.7-4.1l-7.7-26.4c-.2-.8-.5-1.6-1-2.3-.7-1.2-1.5-2.1-2.6-.1-2.5 4.6-5 9.1-7.7 13.6-3.5 6-7.5 11.9-10.7 18-.7 1.4-3.4 4-1.6 4.6 3.6 1 8.8 2.1 11.3-.5 3.6-4.1 5.6-9.8 8.2-14.8.5-1 .5-2 .8-3 .5-1.6 1.6-1.3 2-.4 2.6 5.5 5 11 7.4 16.6.4 1.1.8 2 2.1 1.8 1.4-.2 1-1.3 1.2-3m44.1 7.8c0 6-3.2 4.3-5.5 3.7-13.1-3.1-26.5-3-39.9-3-8.1 0-16.3.7-24.4 1.5-7.5.8-15 2.2-22.5 3.1-1.7.2-5 1.6-5.3-.9-.3-2.5 1.8-6.6 4.4-6.4 9 .8 10.6-6.5 14-11.8 4-6 7.3-12.3 10.9-18.5 3-5.2 6.4-10.2 9-15.7.9-2 .2-5-.2-7.4-.3-1.6-.7-3 1-3.7 1.5-.6 2.3.8 3.2 1.8.4.4.9 1.2 1.1 1.2.7-.2 1.8-.7 2-1.2.4-1.7 1.4-2.2 3-1.7 1.8.6 1 1.7.3 2.8-5.7 7.2-.5 13.8 1.2 20.6.3.9.2 2 .7 2.7 1 1.7-.3 4.8 2.4 5 3 .2 3-3 4.2-4.8 3-4.6 5.5-9.4 8.3-14 2-3.3-2.2-5-2-8 .2-1.3-1.4-3.2.3-4 1.3-.5 2.1 1.2 2.7 2.5.5 1.2 1 3 2.4 2.7.8-.1 1.2-2 2-3 .9-1.3 1.5-3.8 3.4-2.6 1.7 1.2.5 3.7-.4 4.9-5.2 6.6-.2 12 1.8 17.6 2.1 5.7 4.3 11.5 7.2 16.8 3.1 5.7 3 13.2 9.3 17 2 1.2 5 .7 5.4 2.8M60.6 116.1H45.5c-.5 0-1 .3-1.4.4 0 .4.3.8.4 1.2.7 3.1 2.4 5.8 5 7.7 3.6 2.7 7.7 5 12.3 4.6 5.7-.5 9.7-4.4 13.3-8.5 1-1.2 2.8-3 1.8-4.8-.4-.7-2.4-.5-3.7-.6H60.6M75 111c5 1.6 7.6-2.2 8.7-8.3.2-1.2.9-3 2.7-2.3 2.7.9 1 3 .7 4.4-.7 3.2-2.5 6.4 3.4 6 1.7-.1 1.2 2.6 1.6 4 .2 1.2-.7 1.6-1.7 1.4-7.9-1.5-8.6 5.5-11.7 9.7-3.3 4.5-6.2 9.1-12.3 10.8-6 1.6-11.4 1-16.8-1.7-3.8-2-5.8-5.8-8-9.2-3.3-5.5-5.3-11.4-14-10-5.7.9-11.8-.7-17.6-1.5-1.8-.2-5.5-11.4-4.6-13 .3-.4 1-.5 1.6-.8 5.6-3.1 10.7-.6 11.8 5.8 0 .4.5 1 .9 1.1.2.1 1-.3 1-.3 0-1.2 0-2.5-.6-3.6-.8-1.3-2-2.5-.6-4 .3-.4 1-.8 1.1-.7 1.3 1 2.3 2.2 3.6 3 2.8 1.8 1 7 5.7 7.1 1 0 2.6-.3 2.7-.7.3-1.3.4-3-.2-4a5.7 5.7 0 01-.6-5.2c.1-.2 1.6-.5 2-.1 1.4 1.2 3.2 2 3.3 4.5 0 3.2.8 6.3 5.5 5.7 3.7-.4 7.5 0 11.2 0 5.6 0 7.1-4 5.9-9.4-1-4.4-3.6-6.2-6.7-8.3a3.7 3.7 0 01-.9-4.9c1.2-1.6 2.7.5 4 1.1.9.4 1.7 2.1 2.5.8s.7-3 .8-4.7c0-1.2-.4-2.6-.4-3.8.1-1.4 1.3-1.8 2.4-1.9.7 0 1.7.3 1.8.7.3 1 .4 2.1 0 3-.5 1.7-1 3.6.2 4.8 1.5 1.4 1.7-.8 2.4-1.5.6-.6 1.5-1 1.8-.1.7 1.8.6 4-1 5-5.4 3.8-5 17.8-1 20.2 2 1.1 4.9.5 9.4.9"/></g></svg>',
    diggi: true,
  },
  {
    kode: "GDS_KFF",
    name: "Ávjovári fastboendes liste",
    samisk: "Ávjovári Dáloniid listu",
    shortname: "DL",
    abbr: "DL",
    color: "#AACFCD",
    textcolor: "#223A39",
    colorDark: "#AACFCD",
    textcolorDark: "#AACFCD",
    logo: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 130 67"><path d="M30.7 67a56 56 0 0022.7-4.1A29.9 29.9 0 0068 47.4a35.6 35.6 0 00-2.8-31.6 31.3 31.3 0 00-14.3-12 45.5 45.5 0 00-10.4-3A92.5 92.5 0 0020.6.2h-.3l-5.7.1L.4.5v4.6c4.2 0 7 .6 8.1 1.7C9.7 8 10.3 10 10.3 13v41.8c0 2-.3 3.5-.7 4.6-.4 1-1.4 1.9-2.8 2.4a19 19 0 01-6.4.8V67h30.3zm2.2-5.4c-2.7 0-4.7-.3-6-1a4 4 0 01-2.2-2.8 31 31 0 01-.4-5.8V5.5c4 0 7.2 0 9.4.3a21 21 0 0116.9 11.1c2.6 4.7 4 10.4 4 17.3 0 7.2-1.7 13.5-5 19-3.2 5.6-8.8 8.4-16.7 8.4zM129 67l.5-22.1H125c-.6 5-2.1 8.8-4.5 11.3a15 15 0 01-7.8 4.5 50 50 0 01-9.8.9c-3 0-5.1-.4-6.4-1a4.3 4.3 0 01-2.4-3 33 33 0 01-.5-6.4V13c0-2 .2-3.5.7-4.6.4-1 1.4-1.8 2.8-2.4 1.4-.5 3.5-.8 6.2-.8V.8H70.1v4.5c2.8 0 5 .3 6.4.9 1.4.5 2.3 1.4 2.7 2.4.4 1 .6 2.6.6 4.5v41.6c0 2.9-.6 4.9-1.8 6-1.2 1.2-3.8 1.8-7.9 1.8V67h59z" fill="#FFF" fill-rule="nonzero"/></svg>',
    diggi: true,
  },
  {
    kode: "SAME",
    name: "Samefolkets parti",
    samisk: "Sámeálbmot Bellodat",
    shortname: "SáB",
    abbr: "SáB",
    color: "#AC0000",
    textcolor: "#AC0000",
    colorDark: "#AC0000",
    textcolorDark: "#FF4F4F",
    logo: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 140 71"><path d="M19.4 70.8a20 20 0 0014.3-5.1c3.7-3.5 5.5-8 5.5-13.4 0-7.7-4.2-14-12.5-19L19.2 29c-3.3-2-5.8-3.8-7.3-5.6a8.8 8.8 0 01-2.2-5.8c0-2.3 1-4.2 3-5.7 2.1-1.5 4.7-2.2 8-2.2 5.6 0 10.9 2.4 15.8 7v-11C31.8 2.5 26.5.9 20.8.9 14.8 1 10 2.6 6.3 6A16.8 16.8 0 00.7 19c0 3.6 1 6.8 3 9.5 2 2.8 5.2 5.6 9.9 8.4l7.4 4.5c6 3.7 9 7.6 9 11.8a8 8 0 01-3 6.4c-2 1.7-4.6 2.6-7.7 2.6-7 0-13-3.3-18.3-10v12.4a30 30 0 0018.4 6.2zm44.3-55.4L74.7.7h-9.9l-6.6 14.7h5.5zm11.1 55.4c1.4 0 2.6-.3 3.9-.7a29 29 0 004.8-2.7V62c-2.3 1.6-4 2.4-5 2.4s-1.6-.8-1.6-2.3V42.6c0-3.6 0-6-.3-7.3-.2-1.3-.7-2.7-1.5-4a12 12 0 00-2.6-3.3c-3-2.5-6.8-3.8-11.7-3.8-6.5 0-11.4 2-14.9 6.1V40c4.6-5 9.3-7.5 14.2-7.5 5.4 0 8 2.7 8 8.1V43l-11.3 3.9c-3.7 1.3-6.6 3-8.6 5.3a11 11 0 00-3.1 7.6 10.6 10.6 0 0011 10.9c4.2 0 8.2-1.5 12-4.4.7 3 3 4.5 6.7 4.5zm-14.5-6.2a6.1 6.1 0 01-6.4-6.3c0-1.8.7-3.4 2-4.6 1.2-1.2 3.3-2.4 6.3-3.6l6-2.3V61c-2.4 2.3-5 3.5-7.9 3.5zm55.4 5.4a29 29 0 0013-2.6c3.5-1.7 6.1-4 7.9-6.7 1.8-2.7 2.7-5.8 2.7-9.3a16 16 0 00-4.4-11.3c-3-3.2-7-5.2-12-6.2 7-2.9 10.5-7.7 10.5-14.4a17 17 0 00-2.5-9.2c-1.7-2.6-4-4.7-7.2-6.2a31.1 31.1 0 00-13.2-2.3H92.6V70h23.1zm-6.8-39h-6.5V10.5h8.4c8.3 0 12.5 3.3 12.5 9.8A10 10 0 01120 28c-2.2 2-6 3-11.1 3zm3 30.3h-9.5V39.7h9.1c4.9 0 8.4.4 10.6 1.2 2.3.9 4 2.2 5.2 3.9a9.7 9.7 0 011.9 5.7c0 2-.6 4-1.8 5.7-1.1 1.7-2.6 3-4.5 3.9-2 .8-5.6 1.2-11 1.2z" fill="#FFF" fill-rule="nonzero"/></svg>',
    diggi: true,
  },
  {
    kode: "INP",
    name: "Industri- og næringspartiet",
    shortname: "INp",
    abbr: "INp",
    color: "#00aeef",
    textcolor: "#00aeef",
    colorDark: "#00aeef",
    textcolorDark: "#00aeef",
    logo: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path fill="#FFF" d="M15 68h6V34h-6zm14 0h6V42l15 26h7V34h-6v24L37 34h-8zm35 0h7V55h4c7 0 13-3 13-10s-5-11-13-11H64v34Zm7-17V39h4c4 0 6 2 6 6s-2 6-6 6h-4Z"/></svg>'
  },
];

/**
 * Hjelpefunksjon som henter info om et gitt parti.
 * @param {string} kode Partiets navn.
 * @param {string} format Hvilket format partiets navn er gitt i. Må være én av `kode`, `name`, `samisk`, `shortname` eller `abbr`.
 * @returns {party|{}}
 */
function getParty(kode, format = "kode") {
  const match = parties.find(
    (d) => d[format]?.toLowerCase?.() === kode?.toLowerCase?.()
  );
  return match || {};
}

module.exports = getParty;

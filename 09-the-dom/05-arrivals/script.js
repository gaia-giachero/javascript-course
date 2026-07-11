/*
    ● Implement the arrivals page of an airport such as this one
        ○ Create a complete proper webpage with a title, description and all other HTML tags
        ○ Add Javascript and CSS files
        ○ Include as much detail as you can to each flight row
        ○ Add a Status to each flight. Status can be DEPARTING, DELAYED, ON_TIME, ARRIVED, etc
    ● Simulate a real arrivals list
        ○ The list should start empty and update every 10 seconds
        ○ Flights that have arrived should be removed after 60 seconds
        ○ Flights should change status in time. E.g. departing>on_time>delayed>arrived
        ○ Flights that are delayed should be displayed in red
        ○ New flights should be added to the bottom of the list
        ○ The list should be sorted by date and hour 
*/

// includere dettagli per gli arrivi (n_volo, compagnia aerea, provenienze, orario previsto, terminal/gate)
// aggiungere uno stato a ciascun volo: DEPARTING (In partenza), DELAYED (In ritardo), ON_TIME (In orario), ARRIVED (Arrivato), ecc.
// simulare una lista in tempo reale:
// lista iniziale vuota -> deve aggiornarsi ogni 10 secondi
// voli ARRIVED -> rimossi dopo 60 secondi
// i voli devono cambiare stato nel corso del tempo: departing -> on_time -> delayed -> arrived
// voli DELAYED -> evidenziati in rosso
// i nuovi voli generati -> aggiunti alla fine della lista
// tabellone della lista ordinato per data e ora -> non basta .sort()

const arrivi = [
  {
    orario_arrivo: "2026-07-11T17:25:00",
    n_volo: "IB3456",
    provenienza: "Madrid (MAD)",
    compagnia_aerea: "Iberia",
    stato: "DEPARTING",
  },
  {
    orario_arrivo: "2026-07-11T15:10:00",
    n_volo: "FR5678",
    provenienza: "Londra Stansted (STN)",
    compagnia_aerea: "Ryanair",
    stato: "ON_TIME",
  },
  {
    orario_arrivo: "2026-07-11T18:05:00",
    n_volo: "W61234",
    provenienza: "Budapest (BUD)",
    compagnia_aerea: "Wizz Air",
    stato: "ARRIVED",
  },
  {
    orario_arrivo: "2026-07-11T14:45:00",
    n_volo: "AZ1234",
    provenienza: "Roma Fiumicino (FCO)",
    compagnia_aerea: "ITA Airways",
    stato: "DELAYED",
  },
  {
    orario_arrivo: "2026-07-11T16:50:00",
    n_volo: "AF1123",
    provenienza: "Parigi Orly (ORY)",
    compagnia_aerea: "Air France",
    stato: "DELAYED",
  },
  {
    orario_arrivo: "2026-07-11T15:50:00",
    n_volo: "U21234",
    provenienza: "Parigi Charles de Gaulle (CDG)",
    compagnia_aerea: "easyJet",
    stato: "DEPARTING",
  },
  {
    orario_arrivo: "2026-07-11T17:00:00",
    n_volo: "BA789",
    provenienza: "Londra Heathrow (LHR)",
    compagnia_aerea: "British Airways",
    stato: "ON_TIME",
  },
  {
    orario_arrivo: "2026-07-11T16:10:00",
    n_volo: "EK205",
    provenienza: "Dubai (DXB)",
    compagnia_aerea: "Emirates",
    stato: "ARRIVED",
  },
  {
    orario_arrivo: "2026-07-11T17:45:00",
    n_volo: "TK1875",
    provenienza: "Istanbul (IST)",
    compagnia_aerea: "Turkish Airlines",
    stato: "ON_TIME",
  },
  {
    orario_arrivo: "2026-07-11T15:40:00",
    n_volo: "LH2345",
    provenienza: "Francoforte (FRA)",
    compagnia_aerea: "Lufthansa",
    stato: "DELAYED",
  },
];

let voliAttivi = [];

// elemento a cui verrà appeso l'elemento riga
let tBody = document.getElementById("corpo-tabella");

function renderingTabellone() {
  tBody.innerHTML = "";
  voliAttivi.map(function (volo) {
    // elemento a cui verranno agganciati tutti i campi e successivamente verrà passato all'html
    let riga = document.createElement("tr");

    // elementi che comporranno la lista, mappati -> un elemento per ogni campo dell'array
    let orario_arrivo = document.createElement("td");
    let n_volo = document.createElement("td");
    let provenienza = document.createElement("td");
    let compagnia_aerea = document.createElement("td");
    let stato = document.createElement("td");

    orario_arrivo.textContent = volo.orario_arrivo.substring(11, 16);
    n_volo.textContent = volo.n_volo;
    provenienza.textContent = volo.provenienza;
    compagnia_aerea.textContent = volo.compagnia_aerea;
    stato.textContent = volo.stato;
    stato.classList.add("stato");
    if (volo.stato === "DEPARTING") {
      stato.classList.add("departing");
    } else if (volo.stato === "ON_TIME") {
      stato.classList.add("onTime");
    } else if (volo.stato === "DELAYED") {
      stato.classList.add("delayed");
    } else if (volo.stato === "ARRIVED") {
      stato.classList.add("arrived");
    }
    riga.append(orario_arrivo, n_volo, provenienza, compagnia_aerea, stato);
    tBody.appendChild(riga);
  });
}

let indiceVolo = 0;

let caricaVoli = setInterval(function () {
  voliAttivi.forEach(function (voloCorrente) {
    if (voloCorrente.stato === "DEPARTING") {
      voloCorrente.stato = "ON_TIME";
    } else if (voloCorrente.stato === "ON_TIME") {
      voloCorrente.stato = "DELAYED";
    } else if (voloCorrente.stato === "DELAYED") {
      voloCorrente.stato = "ARRIVED";
      voloCorrente.secondiArrivato = 0;
    } else {
      voloCorrente.secondiArrivato += 10;
    }
  });

  // se voloCorrente.secondiArrivato <= 60s -> lo tengo nell'array
  voliAttivi = voliAttivi.filter(function (singoloVolo) {
    if (singoloVolo.stato === "ARRIVED" && singoloVolo.secondiArrivato >= 60) {
      return false;
    }
    return true;
  });

  // se l'indice del volo è minore della lunghezza dell'array continua ad aggiungere voli
  if (indiceVolo < arrivi.length) {
    voliAttivi.push(arrivi[indiceVolo]);
    indiceVolo++;
  }

  voliAttivi.sort(function (a, b) {
    return a.orario_arrivo.localeCompare(b.orario_arrivo);
  });

  // stampa il nuovo array filtrato
  renderingTabellone();
}, 10000);

// clearInterval(caricaVoli);

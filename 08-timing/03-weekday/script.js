/**
    ● Write a function getWeekDay(date) to show the weekday in short format:
        ‘MO’, ‘TU’, ‘WE’, ‘TH’, ‘FR’, ‘SA’, ‘SU’
    ● Write another function that does the same in Italian
    ● Add a language parameter to the function that accepts ‘en’ or ‘it’ 
        and outputs the day in the correct language 
*/

const it = ["DOM", "LUN", "MAR", "MER", "GIO", "VEN", "SAB"];
const en = ["SUN", "MON", "TUE", "WEN", "THU", "FRY", "SAT"];

function getWeekDay(date, lang) {
  let dateParam = date.getDay();

  if (lang === "it") {
    console.log(`${date}: ${it[dateParam]}`);
  } else {
    console.log(`${date}: ${en[dateParam]}`);
  }
}

getWeekDay(new Date("2026-07-10"), "it");
getWeekDay(new Date("2026-07-10"), "en");

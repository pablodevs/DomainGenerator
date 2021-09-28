/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  document.querySelector("#activator").addEventListener("click", () => {
    document.querySelector("#domain").innerHTML = domainGenerator();
  });
};

const domainGenerator = () => {
  let exotic_colours = [
    "framboise",
    "tanager",
    "tuberose",
    "yarrow",
    "jacaranda",
    "lobelia",
    "mesclun",
    "amaryllis",
    "cyclamen",
    "azalea",
    "jonquil",
    "lacewing",
    "frangipane",
    "alyssum",
    "verbena",
    "citrine",
    "saguaro",
    "reynard",
    "nankeen",
    "arugula",
    "armagnac",
    "persimmon",
    "shagreen",
    "cordovan",
    "umber",
    "andiron",
    "tricorn",
    "chinchilla",
    "nuthatch",
    "hopsack",
    "tatami",
    "clary",
    "camelback",
    "greige",
    "taupe",
    "ramie",
    "samovar",
    "netsuke",
    "angora",
    "opaline",
    "nacre",
    "muslin",
    "cinereal",
    "puce",
    "vermilion",
    "dahlia",
    "carmine",
    "verdigris",
    "roseate",
    "gainsboro",
    "cornsilk",
    "chartreuse",
    "bisque"
  ];
  let exotic_animal = [
    "dragon",
    "snake",
    "ferret",
    "tarantula",
    "lizard",
    "iguana",
    "fox",
    "gecko",
    "hamster",
    "frog",
    "cheetah",
    "Porcupine",
    "Agouti",
    "Genet",
    "Binturong",
    "Hyrax",
    "Tayra",
    "Opossum",
    "Zorilla",
    "Kinkajou",
    "Caecilian",
    "Paca",
    "primates",
    "silversides",
    "oscines",
    "testudines",
    "cyclopes",
    "silverside",
    "tardigrade",
    "trematode",
    "hornet",
    "cyborg"
  ];
  let extensions = [
    "com",
    "es",
    "fr",
    "de",
    "org",
    "net",
    "int",
    "edu",
    "gov",
    "mil"
  ];
  let rand_animal = randomeElement(exotic_animal).toLowerCase();
  let extension_type1 = rand_animal.slice(-3);
  let extension_type2 = rand_animal.slice(-2);

  if (extensions.includes(extension_type1)) {
    rand_animal =
      rand_animal.substring(0, rand_animal.length - extension_type1.length) +
      "." +
      extension_type1;
    return randomeElement(exotic_colours).toLowerCase() + rand_animal;
  } else if (extensions.includes(extension_type2)) {
    rand_animal =
      rand_animal.substring(0, rand_animal.length - extension_type2.length) +
      "." +
      extension_type2;
    return randomeElement(exotic_colours).toLowerCase() + rand_animal;
  } else {
    return (
      randomeElement(exotic_colours).toLowerCase() +
      rand_animal +
      "." +
      randomeElement(extensions)
    );
  }
};

function randomeElement(array) {
  return array[Math.floor(Math.random() * array.length)];
}

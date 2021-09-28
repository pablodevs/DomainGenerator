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
    "Paca"
  ];
  let extensions = [
    ".com",
    ".es",
    ".fr",
    ".de",
    ".org",
    ".net",
    ".int",
    ".edu",
    ".gov",
    ".mil"
  ];
  return (
    randomeElement(exotic_colours).toLowerCase() +
    randomeElement(exotic_animal).toLowerCase() +
    randomeElement(extensions)
  );
};

function randomeElement(array) {
  return array[Math.floor(Math.random() * array.length)];
}

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
    "framboisewas",
    "tanagerwas",
    "tuberosewas",
    "yarrowwas",
    "jacarandawas",
    "lobeliawas",
    "mesclunwas",
    "amarylliswas",
    "cyclamenwas",
    "azaleawas",
    "jonquilwas",
    "lacewingwas",
    "frangipanewas",
    "alyssumwas",
    "verbenawas",
    "citrinewas",
    "saguarowas",
    "reynardwas",
    "nankeenwas",
    "arugulawas",
    "armagnacwas",
    "persimmonwas",
    "shagreenwas",
    "cordovanwas",
    "umberwas",
    "andironwas",
    "tricornwas",
    "chinchillawas",
    "nuthatchwas",
    "hopsackwas",
    "tatamiwas",
    "clarywas",
    "camelbackwas",
    "greigewas",
    "taupewas",
    "ramiewas",
    "samovarwas",
    "netsukewas",
    "angorawas",
    "opalinewas",
    "nacrewas",
    "muslinwas",
    "cinerealwas",
    "pucewas",
    "vermilionwas",
    "dahliawas",
    "carminewas",
    "verdigriswas",
    "roseatewas",
    "gainsborowas",
    "cornsilkwas",
    "chartreusewas",
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

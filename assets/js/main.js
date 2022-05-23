"use strict";

let calc = () => {
  const groesse = Number(document.getElementById("groesse").value);
  const alter = Number(document.getElementById("alter").value);
  const gewicht = Number(document.getElementById("gewicht").value);
  const geschlecht_w = document.getElementById("geschlecht-w");
  const geschlecht_m = document.getElementById("geschlecht-m");
  const aktivitaet = Number(document.getElementById("aktivitaet").value);
  const output_grundumsatz = document.getElementById("output_grundumsatz");
  const output_grundumsatzkj = document.getElementById("output_grundumsatzkj");
  const output_gesamtumsatz = document.getElementById("output_gesamtumsatz");
  const output_gesamtumsatzkj = document.getElementById(
    "output_gesamtumsatzkj"
  );

  let grundumsatz;
  let grundkj;
  let gesamtkj;
  let gesamtumsatz;
  if (geschlecht_w.checked) {
    grundumsatz = 655.1 + 9.6 * gewicht + 1.8 * groesse - 4.7 * alter;
    output_grundumsatz.innerHTML = grundumsatz.toFixed();
    gesamtumsatz = grundumsatz * aktivitaet;
    output_gesamtumsatz.innerHTML = gesamtumsatz.toFixed();
    grundkj = grundumsatz * 4.1868;
    output_grundumsatzkj.innerHTML = grundkj.toFixed();
    gesamtkj = gesamtumsatz * 4.1868;
    output_gesamtumsatzkj.innerHTML = gesamtkj.toFixed();
  } else {
    grundumsatz = 664.7 + 13.7 * gewicht + 5 * groesse - 6.8 * alter;
    output_grundumsatz.innerHTML = grundumsatz.toFixed();
    gesamtumsatz = grundumsatz * aktivitaet;
    output_gesamtumsatz.innerHTML = gesamtumsatz.toFixed();
    grundkj = grundumsatz * 4.1868;
    output_grundumsatzkj.innerHTML = grundkj.toFixed();
    gesamtkj = gesamtumsatz * 4.1868;
    output_gesamtumsatzkj.innerHTML = gesamtkj.toFixed();
  }
};

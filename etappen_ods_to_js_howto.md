# Etappen aus LibreOffice nach JSON konvertieren

* [Convert CSV to JSON](https://www.convertcsv.com/csv-to-json.htm)

* Inhalt von [etappen.ods](https://webmapping.github.io/nz/etappen.ods) nach *Step 1: Select your input* kopieren

* in *Step 5: Generate output* erscheint das Resultat von *CSV to JSON*

   * die einzelnen Etappenobjekte werden in einen *Array* verpackt
   * die *keys* der Etappenobjekte kommen aus den Spaltenüberschriften
   * die *values* der Etappenobjekte kommen aus der jeweiligen Spalte
   * Zahlen bei *nr*, *lat*, *lng* werden automatisch erkannt

* Result in [etappen.js](https://webmapping.github.io/nz/etappen.js) speichern

* ganz am Anfang die Variablendeklaration *const ETAPPEN =* ergänzen

* ganz am Ende noch ein *Semikolon* nach dem Array ergänzen und das war's

```js
const ETAPPEN = [{
   "nr": 1,
   "github": "gatt-f",
   "titel": "Christchurch",
   "wikipedia": "https://de.wikipedia.org/wiki/Christchurch",
   "lat": -43.53,
   "lng": 172.62028
},{
   // weitere Etappen ...
}];
```

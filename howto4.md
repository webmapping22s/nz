# Neuseelandreise HOWTO (Teil 4)

## Marker für Etappen & DOC Hütten in der Karte und Etappen-Navigation

### a) Marker für alle Etappen mit Popups

* alle Etappen finden wir in <https://webmapping.github.io/nz/etappen.js>
    * die Javascriptdatei beginnt mit der Variablendeklaration `const ETAPPEN =`
    * besteht aus einem `Array` (**eckige Klammern**) mit den einzelnen Etappenobjekten
    * jede Etappe dieses `Arrays` ist ein `Objekt` (**geschwungene Klammern**) mit **key-value-Paaren**
    * ganz zum Schluß noch ein *Semikolon*

        ```js
        const ETAPPEN = [{
            "nr": 1,
            "github": "gatt-f",
            "titel": "Christchurch",
            "wikipedia": "https://de.wikipedia.org/wiki/Christchurch",
            "lat": -43.53,
            "lng": 172.62028
        },{
            // weitere Etappen
        }];
        ```

* das Skript wird im &lt;head>-Bereich von `index.html` eingebunden

    ```html
    <!-- Etappen-Objekt -->
    <script src="etappen.js"></script>
    ```

    [🔗 COMMIT](https://github.com/webmapping/webmapping.github.io/commit/deddccbfadcd2886c1a50707314f9ea59ca8f0fb)

* die Marker werden in einer **for ... of** Schleife erzeugt
    * **for ... of** Schleifen sind eine Möglichkeit, `Arrays` abzuarbeiten

        ```js
        for (let etappe of ETAPPEN) {
            //console.log(etappe);
            L.marker([etappe.lat, etappe.lng]).addTo(map);
        }
        ```

        [🔗 COMMIT](https://github.com/webmapping/webmapping.github.io/commit/e6c4f5f76810a3cd3b8128b90c38ba15af8d2b3f)

        * bei jedem Schleifendurchlauf ist das Etappenobjekt in der Varaiblen `etappe` verfügbar
        * der Zugriff auf die `values` des Etappenobjekts erfolgt über seine `keys`
        * zwischen der Etappenvariable und dem `key` steht ein **Punkt** (z.B. `etappe.lat`)

* Popups an alle Etappenmarker hängen

    * innerhalb der **for ... of** Schleife definieren wir das Popup mit **Template-Syntax** (also **Backticks**)

        ```html
        let popup = `
            <h3>${etappe.titel} (Etappe ${etappe.nr})</h3>
            <ul>
            <li>geogr. Länge: ${etappe.lng}</li>
            <li>geogr. Breite: ${etappe.lat}</li>
            <li><a href="${etappe.wikipedia}">Link zur Wikipediaseite</a></li>
            <li><a href="https://${etappe.github}.github.io/nz/">Link zur Etappenseite</a></li>
        </ul>
        `;
        ```

    * über `bindPopup` hängen wir es dann an den Marker

        ```js
        L.marker([etappe.lat, etappe.lng]).addTo(map).bindPopup(popup);
        ```

    [🔗 COMMIT](https://github.com/webmapping/webmapping.github.io/commit/72700a67c5a4f036792d593a028b928d046ff139)

### b) Marker für die DOC Hütten mit Popups

* Quelle für die *Department of conservation* Hütten ist <https://catalogue.data.govt.nz/dataset/doc-huts1>

* das Python-Skript [huts_js_create.py](https://github.com/webmapping/webmapping.github.io/tree/main/nz/huts_js_create.py) konvertiert die originalen GeoJSON-Daten nach Javascript

* so sieht der Datensatz in <https://webmapping.github.io/nz/huts.js> aus

    ```js
    const HUTS = [{
        "name": "Lane Cove Hut",
        "info": "Mattresses, Toilets - non-flush, Water from tap - not treated, boil before use, Water supply",
        "region": "Northland, Whangaroa area",
        "image": "https://www.doc.govt.nz/thumbs/large/link/fdb8d47c96fb421db2d75021e0ff524a.jpg",
        "link": "https://www.doc.govt.nz/link/08cd5aa2d643478db1fe37a89a5c4bac.aspx",
        "bookable": true,
        "open": true,
        "lat": -35.01224,
        "lng": 173.73094
    },{
        // mehr als 900 weitere Hütten
    }]
    ```

* gleich wie bei den Etappen, wird `huts.js` im &lt;head>-Bereich von `index.html` eingebunden

    ```html
    <!-- DOC Hütten -->
    <script src="huts.js"></script>
    ```

    [🔗 COMMIT](https://github.com/webmapping/webmapping.github.io/commit/8b9adb59ae5a67eb8ba76716faa139a42a2ec33a)

* eine **for  of** Schleife zeichnet die Marker

    ```js
    // DOC Hütten anzeigen
    for (let hut of HUTS) {
        L.marker([hut.lat, hut.lng]).addTo(map);
    }
    ```

    [🔗 COMMIT](https://github.com/webmapping/webmapping.github.io/commit/4f46cf060ef897a130edf2a11d9e6a3bc5aa64ba)

* zur besseren Unterscheidung werden Kreise (`L.circleMarker`) statt Markern ( `L.marker`) verwendet

    ```js
    L.circleMarker([hut.lat, hut.lng]).addTo(map);
    ```

    [🔗 COMMIT](https://github.com/webmapping/webmapping.github.io/commit/a8e59915b7699f177692886fbb00ee9de1bf0b0e)

* die Popups werden wieder in der **for  of** Schleife definiert und an die Kreise angehängt

    ```html
    let popup = `
        <h3>${hut.name}</h3>
        <h4>${hut.region}</h3>
        <hr>
        <p>${hut.info}</p>
        <img src="${hut.image}" alt="Vorschaubild">
        <hr>
        <a href="${hut.link}" target="Neuseeland">Link zur Hütte</a>
    `;
    L.circleMarker([hut.lat, hut.lng]).addTo(map).bindPopup(popup);
    ```

    [🔗 COMMIT](https://github.com/webmapping/webmapping.github.io/commit/873b1494186f3aa130a5cb144a58e34acf1eec55)
    [🔗 COMMIT](https://github.com/webmapping/webmapping.github.io/commit/d2ae83922c90246d862880cd7bf4a05de47ca05d)

### c) Etappen-Navigation hinzufügen

* zuerst wird der Bereich in `index.html` definiert, in dem die Navigation landen soll

    * wir definieren ihn gleich unterhalb der Karte
    * er besteht aus einem &lt;div>- und einem &lt;nav>-Element
    * das &lt;nav>-Element bekommt ein **id-Attribut** mit dem Wert `navigation`

    ```html
    <div id="map"></div>
    <div>
        <nav id="navigation"></nav>
    </div>
    ```

    [🔗 COMMIT](https://github.com/webmapping/webmapping.github.io/commit/438cfd194984d86a17fee8954da94569b3e2536c)

* dann wird der &lt;nav>-Bereich in der **for of** Schleife mit Hyperlinks zur jeweiligen Etappe gefüllt

    * in einer Variablen `link` wird der HTML-Code für den Etappenlink definiert - die Etappennummer ist der Linktext

        ```html
        let link = `<a href="https://${etappe.github}.github.io/nz/">${etappe.nr}</a>`;
        ```

    * über **document.querySelector** können wir den &lt;nav>-Bereich ansprechen und den Link ergänzen

        ```js
        document.querySelector("#navigation").innerHTML += link;
        ```

        * `document` steht dabei für das HTML-Dokument
        * `querySelector` selektiert Elemente im HTML-Dokument über ihre *CSS-Selektoren*
            * `document.querySelector("#navigation")` findet also das Element mit `id="navigation`
            * `document.querySelector(".shadow")` findet das erste Element mit `class="shadow"`
            * `document.querySelector("h3")` findet das erste &lt;h3>-Element
        * `querySelectorAll` würde **alle** passenden Elemente finden, für uns ist das jetzt aber nicht nötig

    * über **.innerHTML** können wir den Inhalt des &lt;nav>-Bereichs sowohl abfragen, als auch verändern

    * wir verwenden natürlich **+=** bei **.innerHTML**, um die Links anzuhängen

    [🔗 COMMIT](https://github.com/webmapping/webmapping.github.io/commit/a943a6e20734b42b29f28857a0c595b8fae76124)

* die Einträge der Etappennavigation stylen

    * in `main.css` definieren wir ein Klassen-Format `.etappenLink`

        ```css
        .etappenLink {
            background: white;
            border: 1px solid black;
            padding: 0.5em;
            width: 2em;
            text-align: center;
            margin-top: 0.5em;
            display: inline-block;
        }
        ```

    * die meisten CSS-Eigenschaften sind selbsterklärend
    * `display: inline-block` bewirkt, dass die einzelnen Kästchen ohne Zeilenumbruch in einer Zeile angezeigt werden

    [🔗 COMMIT](https://github.com/webmapping/webmapping.github.io/commit/00ed7057a7f01871426407305690f24374a87471)
    [🔗 COMMIT](https://github.com/webmapping/webmapping.github.io/commit/ceb2f883f89a4a0a1699886f119f5fc0118a06c7)

    * anwenden können wir diesen Stil in `main.js` bei der Definition des Links über `class="etappenLink"`

        ```html
        let link = `<a href="https://${etappe.github}.github.io/nz/" class="etappenLink">${etappe.nr}</a>`;
        ```

        [🔗 COMMIT](https://github.com/webmapping/webmapping.github.io/commit/f31ac489ecf55537945e6e2392e0ac45d612e8c1)

* einen Tooltip mit dem Etappentitel hinzufügen

    * über das **globale title-Attribut** können wir bei unseren Kästchen *onmouseover* auch den Etappentitel anzeigen

    ```html
    let link = `<a href="https://${etappe.github}.github.io/nz/" class="etappenLink" title="${etappe.titel}">${etappe.nr}</a>`;
    ```

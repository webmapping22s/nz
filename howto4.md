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

    [🔗 COMMIT](https://github.com/webmapping/nz/commit/84a80aad19110ce8261caebdbc8bb7c4ebff092d)

* die Marker werden in einer **for ... of** Schleife erzeugt
    * **for ... of** Schleifen sind eine Möglichkeit, `Arrays` abzuarbeiten

        ```js
        for (let etappe of ETAPPEN) {
            //console.log(etappe);
            L.marker([etappe.lat, etappe.lng]).addTo(map);
        }
        ```

        [🔗 COMMIT](https://github.com/webmapping/nz/commit/cad12f275e8f931318cbc2219b505757241eadfb)

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

    [🔗 COMMIT](https://github.com/webmapping/nz/commit/76fb7864ec2a1603c94a923e4ab6553c5abbbc6b)

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

    [🔗 COMMIT](https://github.com/webmapping/nz/commit/0d4452b93a1430302b52af38f729fd792a869273)

* eine **for  of** Schleife zeichnet die Marker

    ```js
    // DOC Hütten anzeigen
    for (let hut of HUTS) {
        L.marker([hut.lat, hut.lng]).addTo(map);
    }
    ```

    [🔗 COMMIT](https://github.com/webmapping/nz/commit/ac25cc652179d18d9076c27beff2f2e059052c90)

* zur besseren Unterscheidung werden Kreise (`L.circleMarker`) statt Markern ( `L.marker`) verwendet

    ```js
    L.circleMarker([hut.lat, hut.lng]).addTo(map);
    ```

    [🔗 COMMIT](https://github.com/webmapping/nz/commit/934f043c8f25c9db4c699c0f79f1668c1850ad9b)

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

    [🔗 COMMIT](https://github.com/webmapping/nz/commit/8a65405b3efe3e628128b7a5cd24078002ef3753)
    [🔗 COMMIT](https://github.com/webmapping/nz/commit/00ced24cb66d7d63d70c2359d3730aeee2269a07)

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

    [🔗 COMMIT](https://github.com/webmapping/nz/commit/7800f2cc90fb868e81ab0893b66c9f063ea212b3)

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

    [🔗 COMMIT](https://github.com/webmapping/nz/commit/25aa1b6daa3310a2e28b491bd52ab68913d76c06)

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

    [🔗 COMMIT](https://github.com/webmapping/nz/commit/211b0e920f0fa01d21e3939e0062070b8f0df869)
    [🔗 COMMIT](https://github.com/webmapping/nz/commit/91af750d778bde436b57aae3b502584ce27d4112)

    * anwenden können wir diesen Stil in `main.js` bei der Definition des Links über `class="etappenLink"`

        ```html
        let link = `<a href="https://${etappe.github}.github.io/nz/" class="etappenLink">${etappe.nr}</a>`;
        ```

        [🔗 COMMIT](https://github.com/webmapping/nz/commit/25aa1b6daa3310a2e28b491bd52ab68913d76c06)

* einen Tooltip mit dem Etappentitel hinzufügen

    * über das **globale title-Attribut** können wir bei unseren Kästchen *onmouseover* auch den Etappentitel anzeigen

    ```html
    let link = `<a href="https://${etappe.github}.github.io/nz/" class="etappenLink" title="${etappe.titel}">${etappe.nr}</a>`;
    ```

## Code cleanup und ein paar if-Abfragen

### a) unbenötigten Code löschen

* den händisch gesetzten Marker entfernen wir

    ```javascript
    L.marker([lat, lng]).addTo(map)
        .bindPopup(popup)
        .openPopup();
    ```

* damit brauchen wir auch die Definition der Variable `popup` nicht mehr

    ```javascript
    let popup = `
    <h3>${ETAPPEN[0].titel} (Etappe ${ETAPPEN[0].nr})</h3>
    <ul>
        <li>geogr. Länge: ${ETAPPEN[0].lng}</li>
        <li>geogr. Breite: ${ETAPPEN[0].lat}</li>
        <li><a href="${ETAPPEN[0].wikipedia}">Link zur Wikipediaseite</a></li>
        <li><a href="${ETAPPEN[0].github}">Link zur Etappenseite</a></li>
    </ul>
    `;
    ```

* die zwei Variablen `lat` und `lng` sind auch überflüssig

    ```javascript
    let lat = -39.13;
    let lng = 175.65;
    ```

[🔗 COMMIT](https://github.com/webmapping/nz/commit/0f6f387c55a476f6869de57c366914d3f2e28713)

### b) auf die eigene Etappe blicken

* wir verwenden das Etappenobjekt für die Koordinaten auf die wir blicken

    * statt

        ```javascript
        let coords = [-39.13, 175.65];
        ```

    * verwenden wir

        ```javascript
        let coords = [
            ETAPPEN[13].lat,
            ETAPPEN[13].lng,
        ];
        ```

        [🔗 COMMIT](https://github.com/webmapping/nz/commit/2b3d2628be34dae6a9b9283e0e86b375870ef938)

        * `13` ist der *Index* für das eigene Etappenobjekt im Etappen-Array - also die Etappennummer minus 1
        * mit Werten von 0 bis 18 können wir auch auf andere Etappen blicken ...

* wir öffnen das Popup für den Marker in der **for of** Schleife des ETAPPEN-Objekts

    * dazu müssen wir uns den Marker in einer Variablen merken

    * statt

        ```javascript
        L.marker([etappe.lat, etappe.lng]).addTo(map).bindPopup(popup);
        ```

    * verwenden wir

        ```javascript
        let mrk = L.marker([etappe.lat, etappe.lng]).addTo(map).bindPopup(popup);
        ```

    * in einer **if-Abfrage** können wir den Marker dann öffnen, sobald wir bei unserer Etappennummer sind

        ```javascript
        if (etappe.nr == 14) {
            mrk.openPopup();
        }
        ```

    [🔗 COMMIT](https://github.com/webmapping/nz/commit/6c2d3e577fd2ebc512ea11b6aa4a060d9776ae1e)

    * **Sidestep: if-Abfrage**

        * bei **if-Abfragen** kann als **if**, **else-if**, **else** verwendet werden

        * in den runden Klammern steht die Bedingung, die erfüllt werden soll
            * **==** überprüft, ob die Ausdrücke Links und Rechts gleich sind
            * **!=** überprüft, ob sie ungleich sind
            * **>**, **>=**, **&lt;**, **&lt;=** gibt es natürlich auch noch
            * und noch mehr ... für jetzt genügt es aber

        * in den geschwungenen Klammern steht der Code, der ausgeführt werden soll, wenn eine Bedingung zutrifft

### c) die Etappen-Navigation optisch verfeinern

* wenn wir schon bei unserer eigenen Etappe sind, können wir auch gleich die Etappennavigation stylen

* wir erinnern uns, dass wir die Navigationskästchen über `class="etappenLink"` in `main.css` stylen

    * das eigene Kästchen soll jetzt hellgrau werden und der Link nicht anklickbar sein (wir sind ja schon hier)

    * deshalb führen vor der **if-Abfrage** eine Variable `navClass` ein und geben ihr den default-Wert `etappenLink`

        ```javascript
        let navClass = "etappenLink";
        ```

    * in der **if-Abfrage** schreiben wir bei unserer Etappe eine zweite Klasse `etappeAktuell` dazu

        ```javascript
        if (etappe.nr == 14) {
            mrk.openPopup();
            navClass = "etappenLink etappeAktuell";
        }
        ```

    * damit können wir `navClass` beim Template-String für den link verwenden

    ```javascript
    let link = `<a href="https://${etappe.github}.github.io/nz/" class="${navClass}" title="${etappe.titel}">${etappe.nr}</a>`;
    ```

    * mit einer neuen CSS-Regel `.etappeAktuell` in `main.css` wird das Kästchen verändert

        ```css
        .etappeAktuell {
            background: silver;
            color: white;
            text-decoration: none;
            pointer-events: none;
        }
        ```

        * das eigene Kästchen ist jetzt hellgrau mit weißer Schrift, ohne Unterstreichung und nicht klickbar

    [🔗 COMMIT](https://github.com/webmapping/nz/commit/410e2180f398b1d02b47ed30ee47a469cb8d74be)

    * bei der Gelegenheit setzen wir die Kästchen beim Format `.etappenLink` noch etwas von einander ab

        ```css
        .etappenLink {
            /* bestehende Stile */
            margin-right: 2px;
        }
        ```

        [🔗 COMMIT](https://github.com/webmapping/nz/commit/1b6e6352dc26accd06f9d56a22c5979c48a433ed)

### d) offene von geschlossenen Hütten unterscheiden

* in der **for-of** Schleife der Hütten verwenden wir eine weitere **if-Abfrage**, um geöffnete Hütten *grün* und geschlossene Hütten *rot* einzufärben

* dazu führen wir am Beginn der for-Schleife die Variable `statusColor` ohne default-Wert ein

    ```javascript
    let statusColor;
    ```

* mit einer **if** / **else** Abfrage setzen wir dann die gewünschte Farbe, je nachdem ob `huts.open` wahr oder falsch ist

    ```javascript
    if (huts.open == true) {
        statusColor = "green";
    } else {
        statusColor = "red";
    }
    ```

* damit die Kreise auch ihre Farbe ändern, ergänzen wir die Kreisfarbe als Optionen-Objekt beim `L.circleMarker` Aufruf

    ```javascript
    L.circleMarker([hut.lat, hut.lng], {
        color: statusColor
    }).addTo(map).bindPopup(popup);
    ```

    [🔗 COMMIT](https://github.com/webmapping/nz/commit/21dc6a493f714cdcf9c7937d781a8a3d42ae7690)

* woher weiß man das, mit dem Optionen-Objekt?

    * die Leaflet-Docs helfen uns: <https://leafletjs.com/reference.html#circlemarker> :-)

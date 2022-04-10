# Neuseelandreise HOWTO (Teil 3)

## Übersichtskarte mit Leaflet (Javascript Erstkontakt)

### a) Kartenbereich vorbereiten

* in `index.html`: wir definieren den Kartenbereich
    * neue Überschrift vor der Linkliste
    * danach den Kartenbereich als &lt;div>-Element mit einem **id-Attribut**

        ```html
        <h3>Übersichtskarte</h3>
        <div id="map"></div>
        ```

        [🔗 COMMIT](https://github.com/webmapping/webmapping.github.io/commit/b7ad50c5be5ac98be343043e6ad7d27bff6efc41)

    * **Sidestep: das id-Attribut**
        * ist ein globales Attribut
        * kann bei allen HTML-Elementen verwendet werden
        * sein Wert muss *unique* innerhalb der Seite sein

* in `main.css`: wir stylen den Kartenbereich
    * als Selektor für id-Attribute verwenden wir die **Raute**, also **#map**
    * die Breite des Kartenfelds setzen wir auf 100%
    * die Höhe fixieren wir mit 600 Pixel
    * dazu ein grauer Rahmen

        ```css
        #map {
            width: 100%;
            height: 600px;
            border: 1px solid gray;
        }
        ```

        [🔗 COMMIT](https://github.com/webmapping/webmapping.github.io/commit/eadf1a52bf9210f192ac4f10825f48e2fa1f5629)

    * **Sidestep: CSS-Selektoren**
        * wir kennen jetzt diese Selektoren:
            * Selektor für Elemente: **h1**, **img**, **a**, ...
            * Selektor für Klassen: **.shadow**, **.user**, ...
            * Selektor für id-Attribute: **#map**, ....

        * Beispiele für die drei Arten von Selektoren:

            ```css
            h1 {
                /* alle <h1> Elemente */
            }
            .user {
                /* Elemente mit class="user" */
            }
            #map {
                /* das (einzige) Element mit id="map" */
            }
            ```

### b) Leafletbibliothek einbinden

* Die Homepage der Kartenbibliothek liegt hier: <https://leafletjs.com/>

    * der Ukrainekrieg holt uns ein: "*Leaflet was created 11 years ago by Vladimir Agafonkin, an Ukrainian citizen living in Kyiv*"
    * ganz unten bei "*over here*" geht's weiter
    * alles in einem Verzeichnis "*[SlavaUkraini](https://www.deepl.com/translator#lv/de/Slava%20Ukraini)*"

* auf der *Download-Seite* <https://leafletjs.com/SlavaUkraini/download.html>
    * wählen wir *Using a Hosted Version of Leaflet*
    * kopieren die beiden Zeilen in den &lt;head>-Bereich von `index.html`, nach &lt;title> mit einem Kommentar

        ```html
        <!-- Leaflet Bibliothek -->
        <link rel="stylesheet" href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css" integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A==" crossorigin="" />
        <script src="https://unpkg.com/leaflet@1.7.1/dist/leaflet.js" integrity="sha512-XQoYMqMTK8LvdxXYG3nZ448hOEQiglfqkJs1NOQV44cWnUrBc8PkAOcXy20w0vlaXaVUearIOBhiXZ5V3ynxwA==" crossorigin=""></script>
        ```

        [🔗 COMMIT](https://github.com/webmapping/webmapping.github.io/commit/c0a58195cd3011a4ed2e50c2a8192986d6b6564f)

* woraus besteht die Kartenbibliothek Leaflet?
    * aus einem Stylesheet [leaflet.css](https://unpkg.com/leaflet@1.7.1/dist/leaflet.css) für das Layout
    * und einer Javascript Datei [leaflet.js](https://unpkg.com/leaflet@1.7.1/dist/leaflet.js) für die Kartenfunktionalitäten
    * und ein paar Icons (für die Marker z.B.), die uns automatisch mitgeliefert werden
    * lesbarer als die von uns verwendete, sogenannte *minified*-Version der Javascriptdatei, ist der Originalquelltext von  [leaflet-src.js](https://unpkg.com/leaflet@1.7.1/dist/leaflet-src.js)
    * beim Einbinden aus dem CDN verwenden wir zusätzlich zwei Attribute
        * *integrity*: stellt sicher, dass der Inhalt von `leaflet.css` und `leaflet.js` "original" ist
        * *crossorigin*: tja, sehr kompliziert, das kommt später ...
    * Leaflet wird übrigens auch auf github.com entwickelt: <https://github.com/Leaflet/Leaflet>

### c) Javascript Code für die Karte kopieren

* wir erstellen nach &lt;/main>, also ganz Unten, ein &lt;script>-Element

    ```html
    <script>
    </script>
    ```

    [🔗 COMMIT](https://github.com/webmapping/webmapping.github.io/commit/5b0d51a3e7c675c8331bdd43d1990a854c8a9cc3)

* und kopieren den Code des Beispiels auf der Startseite von Leafletjs dorthin

    * <https://leafletjs.com/SlavaUkraini/>

    ```javascript
    var map = L.map('map').setView([51.505, -0.09], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    L.marker([51.5, -0.09]).addTo(map)
        .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
        .openPopup();
    ```

    [🔗 COMMIT](https://github.com/webmapping/webmapping.github.io/commit/1b9c49ad65b6d1da43c583666650baf74fa8b119)

* **Voilà, die erste Karte ist fertig :-)**

* **Challenge, Zeit 10 Minuten**:

    * den Kartenausschnitt auf das eigene Etappenziel setzen
    * den Marker in dessen Mittelpunkt
    * den Popuptext auf den Etappentitel ändern

    * Auflösung für die Tongariro Etappe
        * [Emerald Lakes](https://de.wikipedia.org/wiki/Emerald_Lakes) der Wikipedia als Bezugspunkt für unserer Etappe
        * -39.13°, 175.65°
        * Gradzeichen müssen weg und als Komma (bleibt) der Punkt
        * Lat/Lng jeweils 2 x ersetzen bei **setView()** und **L.marker()**
        * wir ändern auch den Zoomfaktor von 13 auf 11
        * und den Popuptitel auf &lt;h3>Tongariro Nationalpark &lt;/h3>

        [🔗 COMMIT](https://github.com/webmapping/webmapping.github.io/commit/d1ab41dce12c1cb583a2cc99effa4385508f0d38)

### d) Was bedeutet der Javascript-Code den wir gerade geändert haben?

* die Karte initialisieren

    ```javascript
    var map = L.map('map')
    ```

    * dreimal *map*, wie kompliziert, gut, dass das Syntax-Highlighting im VS Code drei verschieden Farben anzeigt :-)
    * **var map** definiert eine *Variable* mit dem Namen `map`. Wir könnten sie auch `karte` nennen, dann müssten wir alle Vorkommen von `map` (in der selben Farbe wie bei `var map`) mit `karte` ersetzen
    * **L.map()** kommt von der Leaflet Bibliothek (`L` steht für Leaflet) und ist eine sogenannte "*Methode*". Methoden sind Codeblöcke, die *Irgendetwas können*, in diesem Fall, eine Karte initialisieren
    * **'map'** ist das sogenannte *Argument* der *Methode* `L.map()` und bestimmt den Wert des id-Attributs unseres &lt;div>-Elements (allerdings ohne #) in dem die Karte gezeichnet werden soll

* den Ausschnitt setzen

    ```javascript
    .setView([-39.13, 175.65], 10)
    ```

    * ist eine weitere Leaflet Methode, die den Kartenausschnitt setzt und zwei Argumente erwartet:
        * Argument 1: die Lat/Lng Koordinaten `[-39.13, 175.65]` des Ausschnitts als sogenannten **Array**
            * **WICHTIG**: wir erkennen Arrays an eckigen Klammern
            * **WICHTIG**: Array-Elemente sind durch Kommas getrennt
            * **WICHTIG**: die Reihenfolge der Elemente in Arrays ist fixiert

        * Argument 2: der Zoomlevel als **Number** zwischen `1` (*Welt*) und 20-25 (*Detail*, je nach Kartenhintergrund), wir sind mit `11` mitten drin

* die Hintergrundkarte definieren und an die Karte hängen

    ```javascript
    L.tileLayer().addTo(map);
    ```

    * die Leaflet-Methode `L.tileLayer()` erwartet zwei *Argumente*
        * Argument 1: `https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png`
            * ist das URL-Pattern für die sogenannten **WMTS-Tiles**
            * wir sehen die Auflösung der Platzhalter `{s}`, `{x}`, `{y}`, `{z}` in der Seiteninformation des Browsers (**STRG+I** im Firefox) unter *Medien*
                * jedes Tile ist 256x256 Pixel groß
                * z.B. [https://a.tile.openstreetmap.org/11/2022/1266.png](https://a.tile.openstreetmap.org/11/2022/1266.png)
                * `{s}` steht für den **Server** (a,b oder c)
                * `{z}` steht für den **Zoomlevel**
                * `{x}` steht für die Tilenummer des Tiles entsprechend der geographischen **Länge**
                * `{y}` steht für die Tilenummer des Tiles entsprechend der geographischen **Breite**

            * mehr zu WMTS in der Wikipedia unter [https://de.wikipedia.org/wiki/Web_Map_Tile_Service](https://de.wikipedia.org/wiki/Web_Map_Tile_Service)
            * oder im Leaflet-Tutorial [https://leafletjs.com/SlavaUkraini/examples/zoom-levels/](https://leafletjs.com/SlavaUkraini/examples/zoom-levels/)

        * Argument 2: Copyrightinformationen als sogenanntes **Objekt**
            * **WICHTIG**: wir erkennen Objekte an geschwungenen Klammern
            * **WICHTIG**: Objekte bestehen aus Doppelpunkt-getrennten *Key/Value* Paaren

                ```javascript
                {
                    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                }
                ```

                * `attribution` ist der *Key*
                * `'&copy; ....contributors'` ist der *Value*
            * **WICHTIG**: die Reihenfolge der Elemente in Objekten ist nicht zwingend fixiert

        * Umgesetzt wird das Ganze im rechten, unteren Eck der Karte
    * `.addTo(map)` hängt den Kartenhintergrund an die Karte

* den Marker positionieren und zur Karte hinzufügen

    ```javascript
    L.marker().addTo(map)
    ```

    * die Leaflet-Methode `L.marker()` erwartet ein Argument und zwar einen Array mit der Lat/Lng Koordinate des Markers (`[-39.13, 175.65]`)
    * `.addTo(map)` hängt den Marker an die Karte

* ein Popup hinzufügen und öffnen

    ```javascript
    .bindPopup().openPopup()
    ```

    * `.bindPopup()` erwartet ein Argument und zwar den Text für das Popup, der auch HTML-Markup enthalten kann
    * `.openPopup()` öffnet das Popup in der Karte

* **Sidestep: Fluent Interfaces**
    * der `L.marker` Code ist ein gutes Beispiel für ein sogenanntes "*Fluent Interface*"
    * der Code wird dabei beinahe in Form von Sätzen natürlicher Sprache programmiert
    * siehe [https://de.wikipedia.org/wiki/Fluent_Interface](https://de.wikipedia.org/wiki/Fluent_Interface)
    * die einzelnen Schritte werden durch einen Punkt getrennt
    * `L.marker().addTo().bindPopup().openPopup()` steht dabei für den Satz *definiere einen Marker, füge ihn der Karte hinzu, definiere dort ein zusätzliches Popup und öffne es*

### e) bleibt noch, das Skript in ein externes main.js zu verschieben

* **bevor wir das tun, die Frage**: warum ist das &lt;script>-Element ganz am Ende der Seite?
    * `var map = L.map('map')` ist der Grund, denn `'map'` verweist auf unseren &lt;div>-Element mit der ID 'map' - nennen wir ihn ab jetzt **map-DIV**
    * deshalb muss der map-DIV vor dem &lt;script>-Element stehen
    * denn der Browser lädt die Seite von oben nach unten
    * würde das &lt;script>-Element oberhalb des map-DIV stehen, wäre der map-DIV noch nicht "bekannt"
    * deshalb der Trick mit dem &lt;script>-Element am Ende der Seite

* elegant ist das nicht, deshalb erstellen wir ein externes Skript `main.js`

    * zuerst im HEAD-Bereich das &lt;script>-Element mit einem Kommentar und dem Baustein **script:src** erstellen und `main.js` als src-Attribut verwenden

        ```html
        <!-- Kartenscript -->
        <script src="main.js"></script>
        ```

    * dann mit **STRG+Klick** das `main.js erstellen`
    * beide Dateien speichern

        [🔗 COMMIT](https://github.com/webmapping/webmapping.github.io/commit/d09027c6d2a3a7c9b4540326b934208ef0b3ea3d)

* den Skript-Code nach `main.js` verschieben

    * alles zwischen &lt;script> und &lt;script> ausschneiden und in `main.js` einfügen
    * einen Kommentar ganz oben dazu

    * **Sidestep: Kommentare in Javascript**

        * **mehrzeilig** - wie bei CSS-Kommentaren

            ```css
            /* 
            Kartenskript für
            Neuseelandreise
            */
            ```

        * **einzeilig** - das ist neu

            ```css
            // Kartenskript für Neuseelandreise
            ```

    * danach noch **F1+Beautify file**
    * das &lt;script>-Element in index.html entfernen
    * beides speichern

        [🔗 COMMIT](https://github.com/webmapping/webmapping.github.io/commit/02a1e4ff48a7dc5d6aadfe94c2abb979654c40dd)

* **Ooops - die Karte ist weg :-(**
    * wir erinnern uns, dass der Browser die Seite von oben nach unten lädt
    * das &lt;script>-Element wird zuerst gefunden und ausgeführt
    * unser map-DIV ist zu diesem Zeitpunkt nicht bekannt
    * die Karte kann also nicht gezeichnet werden
    * die Entwicklerwerkzeuge des Browsers zeigen das auch an, wo sind sie zu finden?

        * **F12** oder
        * **STRG+UMSCHALT+I** oder
        * **Extras / Browser-Werkzeuge / Werkzeuge für Web-Entwickler**

    * was steht in der "Konsole"?

        ```console
        Uncaught Error: Map container not found.
        _initContainer Map.js:1103
        initialize Map.js:136
        i Class.js:22
        map Map.js:1728
        <anonymous> main.js:3
        ```

        * *Map container not found* ist der entscheidende Hinweis

        * wir müssen also sicherstellen, dass das Skript in `main.js` erst ausgeführt wird, wenn die ganze `index.html` Seite gelanden ist und dabei hilft uns

    * das **defer-Attribut** beim &lt;script>-Element [🔗 COMMIT](https://github.com/webmapping/webmapping.github.io/commit/34a080e96fd8f3f74acfce18a870c5e3ab48739f)

        ```html
        <script defer src="main.js"></script>
        ```

        * es stellt sicher, dass das Skript erst ausgeführt wird, wenn die ganze Seite geladen ist
        * "defer" heißt soviel wie "aufschieben"
        * genau das tut es auch und unsere Karte ist wieder da

        * **Wichtig:** ab jetzt haben alle unsere `main.js` Skripts das defer-Attribut beim Einbinden

* **Sidestep: favicon.ico**
    * im Firefox sehen wir in der Konsole auch noch einen **favicon.ico Error**

    ```console
    GET http://127.0.0.1:5500/favicon.ico
    404 Not found
    ```

    * *favicons* werden als Vorschaublider bei den Tabs im Browser verwendet

    * wir haben ja ein 100x100 Pixel großes user-Bild, das wir dafür verwenden können

    * über den Baustein **link:favicon** definieren wir es im head-Bereich

        ```html
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon">
        ```

    * und ändern den Pfad zum Bild sowie den Typ, da wir ja ein .jpg-Bild haben

        ```html
        <!-- Tab-Vorschaubild -->
        <link rel="icon" href="images/user.jpg" type="image/jpg" />
        ```

        [🔗 COMMIT](https://github.com/webmapping/webmapping.github.io/commit/0bfb826bba0c1dac6aa4e73484ddee980bb76cf3)

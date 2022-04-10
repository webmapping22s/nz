# Neuseelandreise HOWTO (Teil 1)

## HTML Grundgerüst

### a) Vorbereitung

* `index.html` Datei erstellen [🔗 COMMIT](https://github.com/webmapping/webmapping.github.io/commit/f122d991b83d0b89de2e2535588234e5fd162155)

* den **html 5** Baustein von VS Code einfügen [🔗 COMMIT](https://github.com/webmapping/webmapping.github.io/commit/25694a79c21569b47f41fbc87e725054358da6d5)

* **Sidestep: VS Code Hilfestellungen**
	* Bausteine wie z.B. oben, *autocomplete* bei allen Elementen, Attributen
    * Tooltips bei Elementen & Attributen *onmouseover*
    * Links zur [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML) für jedes html-Element verfügbar
    * mit dem "Live Server" Plugin können wir einen lokalen Webserver starten und uns die Seite (wie im Internet) ansehen

### b) Die HTML-Seite entwickeln

* Seitensprache über das lang-Attribut auf Deutsch ändern [🔗 COMMIT](https://github.com/webmapping/webmapping.github.io/commit/1faaf1846af37d286f51ad7b444e4e8ea8302b1c)

    ```html
    <html lang="de">
    ```

* Seitentitel `title` ändern [🔗 COMMIT](https://github.com/webmapping/webmapping.github.io/commit/d0fb59e601c396e2757ae6e7477da469d4ebf923)

    ```html
    <title>Neuseelandreise</title>
    ```

* Titel `h1` (für header 1) [🔗 COMMIT](https://github.com/webmapping/webmapping.github.io/commit/2974e86d25af2d4bb92cef6a3ee13143b050b4c8)

    ```html
    <h1>Neuseelandreise</h1>
    ```

* Untertitel `h2` (für header 2) und kursiv `em` (für emphasis) [🔗 COMMIT](https://github.com/webmapping/webmapping.github.io/commit/5f90866a7a14816569dbf898ae96af2326271608)

    ```html
    <h2><em>Tongariro-Nationalpark</em></h2>
    ```

* Introtext `p` (für paragraph) hinzufügen -  Wikipedia-Suche "*Tongariro-Nationalpark*", die ersten drei Absätze [🔗 COMMIT](https://github.com/webmapping/webmapping.github.io/commit/a923203702929b30297db3da6c77c06d2261a30e)

    ```html
    <p>Der Tongariro-Nationalpark  ... Vulkane als heilig verehren.</p>
    ```

* einen Begriff mit `strong` fett formatieren [🔗 COMMIT](https://github.com/webmapping/webmapping.github.io/commit/752ead6adf615e6c00bd7cbfa4aac08cb9ea28d5)

    ```html
    <strong>Kultstätten der Māori</strong>
    ```

* Link zur Quelle als `a` (wie anchor) [🔗 COMMIT](https://github.com/webmapping/webmapping.github.io/commit/4b4182e0c83b774b61bc05457514876751a0d84a)

    ```html
    (Quelle: <a href="https://...">Wikipedia</a>)
    ```

    * das Link-Ziel wird durch das href-Atrtribut (wie Hyperlink reference) bestimmt
    * der Linktext steht zwischen `<a href="">` und `</a>`

* ein Bild als Abbildung mit Bildunterschrift einbauen

    * zuerst suchen wir ein frei verfügbares Bild ohne Copyright Einschränkungen bei [https://pixabay.com](https://pixabay.com)
        * Suche "Emerald Lakes" führt zu [https://pixabay.com/photos/emerald-lakes-3189389/](https://pixabay.com/photos/emerald-lakes-3189389/)
        * wir öffnen das Vorschaubild gleich in einem neuem Tab und speichern es
            * in einem neuen Unterverzeichnis `images/`
            * mit dem Namen `attraction.jpg` (oder `attraction.webp` je nach Browser)
        * [🔗 COMMIT](https://github.com/webmapping/webmapping.github.io/commit/5766bf011430e9790045582047a7bc3b51cc339d)

    * die Abbildung als &lt;figure>-Element mit einem Bild als &lt;img>-Element [🔗 COMMIT](https://github.com/webmapping/webmapping.github.io/commit/b62016fa6a7cb77299eeeca859a89f41235a2122)

        ```html
        <figure>
            <img src="images/attraction.webp" alt="Drei grüne Seen im Gipfelbereich mit Schneeflecken und Rauch">
        </figure> 
        ```

        * das &lt;img>-Element benötigt (mindestens) zwei Attribute
            * das **src-Attribut** (wie source) mit dem Ablageort des Bildes
            * das **alt-Attribut** (wie alternative) als Beschreibung des Bildes für Screenreader

    * die Bildunterschrift als &lt;figcaption>-Element mit einem Link zur Bildquelle [🔗 COMMIT](https://github.com/webmapping/webmapping.github.io/commit/1fb367f887c128278893d89ad665d4669bd4a3fb)

        ```html
        <figcaption>
            Blick auf die Emerald Lakes. Bild: <a href="https://pixabay.com/de/photos/emerald-lakes-3189389/">Laura7933</a>
        </figcaption>
        ```

* eine Linkliste mit drei weiterführenden Links vorbereiten [🔗 COMMIT](https://github.com/webmapping/webmapping.github.io/commit/655a817ef2d6107b5e7c6627f28f53ac7cae1ab3)

    ```html
    <h3>Links</h3>
    <ul>
        <li><a href=""></a></li>
        <li><a href=""></a></li>
        <li><a href=""></a></li>
    </ul>
    ```

* und mit Weblinks der Wikipedia-Seite komplettieren [🔗 COMMIT](https://github.com/webmapping/webmapping.github.io/commit/5d701ac5b2917e541ab4029d444694b3a8d1b466)

### c) Seitenstruktur verfeinern

* wir verpacken alles im &lt;body>-Element in ein &lt;article>-Element innerhalb eines &lt;main>-Elements [🔗 COMMIT](https://github.com/webmapping/webmapping.github.io/commit/c8a1a889dcf7e3027e61a7bb48782a4cf1e88ca4)

    ```html
    <body>
        <main>
            <article>
                <h1>Neuseelandreise</h1>
                ....
            </article>
        </main>
    </body>
    ```

* **Sidestep: Beautify Plugin**

    * das Beautify Plugin von VS Code hilft uns, die Einrückungen unter Kontrolle zu behalten
    * Aufruf nach der Installation:
        * **F1** + Beautify file (oder Beautify selection)
        * **STRG+UMSCHALT+P** + Beautify file
        * **View / Command Palette** + Beautify file

### d) Headerbereich mit Banner und Usericon erstellen

* wir brauchen zuerst ein Bannerbild für den Header von [https://pixabay.com](https://pixabay.com)
    * Suche "Tongariro" führt zu [https://pixabay.com/de/photos/tongariro-vulkan-herr-der-ringe-583179/](https://pixabay.com/de/photos/tongariro-vulkan-herr-der-ringe-583179/)
    * Version mit 1280 Pixel downloaden
        * im Unterverzeichnis `images/`
        * mit dem Namen `header.jpg`

    * Größe ändern mit [https://redketchup.io/](https://redketchup.io/)

        * *Image Resizer*
        * *Browse / Crop Dimensions*
        * 1280 x 365 Pixel einstellen
        * *Save Image*

        * [🔗 COMMIT](https://github.com/webmapping/webmapping.github.io/commit/5766bf011430e9790045582047a7bc3b51cc339d)

* wir bauen das Banner in einem neuen &lt;header>-Element als &lt;img>-Element ein [🔗 COMMIT](https://github.com/webmapping/webmapping.github.io/commit/5d0ebd2d7069b0ce3b2e709881d44902b1236ac4)

    ```html
    <main>
        <header>
            <img src="images/header.jpg" alt="Straße im Vordergrund mit dem Vulkankegel im Hintergrund">
        </header>
        <article>
        </article>
    </main>
    ```

    * **Hinweis**: im commit ist das &lt;header>-Element falsch positioniert und wurde erst später in das &lt;main>-Element verschoben (siehe [🔗 COMMIT](https://github.com/webmapping/webmapping.github.io/commit/cc34e3bc8980c629c2cd4aea74c1438c26172573))

    * das Bannerbild wird diesmal ohne &lt;figure>-Element direkt als &lt;img>-Element eingebaut

* analog zum Bannerbild suchen wir ein Userbild bei [https://pixabay.com](https://pixabay.com)

    * Suche "Bus" führt zu [https://pixabay.com/de/photos/vw-bus-vw-bully-volkswagen-meer-1845719/](https://pixabay.com/de/photos/vw-bus-vw-bully-volkswagen-meer-1845719/)

    * wir speichern wieder direkt das Vorschaubild
        * im Unterverzeichnis `images/`
        * mit dem Namen `user.jpg`

    * Größe ändern mit [https://redketchup.io/](https://redketchup.io/)

        * *Image Resizer*
        * *Aspect Ratio / Square*
        * Ausschnitt wählen
        * *Resize Dimensions*
        * 100 x 100 Pixel einstellen
        * *Save Image*

        * [🔗 COMMIT](https://github.com/webmapping/webmapping.github.io/commit/19676e6fab8a4de13114ab022ddd5df38e82f1df)

* Userbild mit Bildquelle und Bild als Link direkt unter dem Bannerbild einbauen [🔗 COMMIT](https://github.com/webmapping/webmapping.github.io/commit/6cd882b76dc945b5a38540b40da4d2c2cbbd20e5)

    ```html
    <a href="#"><img src="images/user.jpg" alt="Another one rides the bus"></a>
    ```

    * beim href-Attribut des Links verwenden wir die Raute (**#**) als Platzhalter, später werden wir das eigene github User-Repo verlinken
    * als *Linktext* verwenden wir das Bild statt einem Text

### e) Footerbereich mit Etappennavigation erstellen

* wir ergänzen ein &lt;footer>-Element
    * nach &lt;/article> und vor &lt;/main>
    * im &lt;footer>-Element ein &lt;nav>-Element mit zwei Links (# wieder als Platzhalter)

    ```html
    <footer>
        <nav>
            <a href="#">vorhergehende Etappe</a>
            <a href="#">nächste Etappe</a>
        </nav>
    </footer>
    ```

    [🔗 COMMIT](https://github.com/webmapping/webmapping.github.io/commit/eed4057e5a21a93f441508004653a94a1ecc5697)

    * **Hinweis**: im commit ist das &lt;footer>-Element falsch positioniert und wurde erst später in das &lt;main>-Element verschoben (siehe [🔗 COMMIT](https://github.com/webmapping/webmapping.github.io/commit/db67bb30e18b8ee0a999b1373a871d2ec5689111))

* Unicode-Zeichen für Pfeile unterstreichen die Richtung der Navigation

    * die Pfeile finden wir auf [https://unicode-table.com](https://unicode-table.com)

    * *Pfeile / 13. Navigation Arrows / Nach links gerichteter mittlerer Barb-Pfeil* [🔗 COMMIT](https://github.com/webmapping/webmapping.github.io/commit/6e0373862331e2204098c4b5533db59354c4dad8)

    ```html
    <a href="#">🡨 vorhergehende Etappe</a>
    <a href="#">nächste Etappe 🡪</a>
    ```

### f) Userlink und Etappennavigation ergänzen

* mit Erstellung eurer github-Repos und der Zuteilung der github-User zu den Etappen können die #-Links noch angepasst werden

* Userlink zum github-Repo [🔗 COMMIT](https://github.com/webmapping/webmapping.github.io/commit/9734593ca1135024e0c7b9c35166233bf005aa0d)

    ```html
    <a href="https://github.com/webmapping"><img src="images/user.jpg" alt="Another one rides the bus"></a>
    ```

* Vor- und Zurücklinks für die Tongariro-Seite [🔗 COMMIT](https://github.com/webmapping/webmapping.github.io/commit/cc99b19ce1587e58bdd9d6332eaa338843dc05ef)

    ```html
    <a href="https://paulasp3.github.io/nz/index.html">🡨 vorhergehende Etappe</a>
    <a href="https://andrea-1408.github.io/nz/index.html">nächste Etappe 🡪</a>
    ```

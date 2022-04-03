# Neuseelandreise HOWTO

## 1. HTML Grundgerüst

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

## 2. CSS Layout

### a) erste Versuche mit dem style-Attribut und &lt;style>-Element

Wie können wir die Seite stylen? Es gibt mehrere Möglichkeiten

* **Möglichkeit 1: das style-Attribut**

    * wir versuchen es und spielen mit der &lt;h1>-Überschrift

    ```html
    <h1 style="color:green">
    ```

    * zur Syntax:

        * **style** ist das HTML-Attribut
        * **color:green** ist eine sogenannte *CSS Deklaration* (**declaration**) bestehend aus

            * der Eigenschaft (**property**) links
            * einem Doppelpunkt als Trenner und
            * dem Wert (**value**) rechts

        * weitere Stile / Deklarationen werden durch **Semikolon getrennt** (z.B. color:green;font-size:40px;)

    * wir verlängern das style-Attribut [🔗 COMMIT](https://github.com/webmapping/webmapping.github.io/commit/8c275405f69b771736a0a3b83c8e9560f51eb5bd)

        ```html
        <h1 style="color:green;font-size:40px;border:3px dashed black;background-color:blue;width:50%">Neuseelandreise</h1>
        ```

    * was bedeuten die Deklarationen?
        * `color:green`: Farbe grün
        * `font-size:40px`: Schriftgröße 40 Pixel
        * `border: 3px dashed black`: schwarz-strichlierter Ramen mit 3 Pixel Rahmenbreite
        * `background-color:blue`: Hintergrundfarbe blau
        * `width:50%`: Breite 50%

    * Tooltips im VS Code geben wieder Hilfestellung und führen zur MDN-Hilfe

* **Möglichkeit 2: das &lt;style>-Element**

    * wir verschieben jetzt den Inhalt des style-Attributs in ein &lt;style>-Element

    * das &lt;style>-Element gehört in den &lt;head>-Bereich

    * dort erstellen wir eine sogenannte *CSS-Regel* (**ruleset**)

        ```css
        h1 {

        }
        ```

        * **h1** ist der "CSS-Selektor" (**selector**)
        * die geschwungenen Klammern umschließen die "CSS-Deklarationen" (**declarations**)

    * und dorthin verschieben wir den Inhalt unseres style-Attributs und löschen das style-Attribut [🔗 COMMIT](https://github.com/webmapping/webmapping.github.io/commit/af344f726c62e598a011184e0710ea837d276a47)

        ```html
        <style>
            h1 {
                color: yellow;
                font-size: 40px;
                border: 3px dashed black;
                background-color: blue;
                width: 50%
            }
        </style>
        ```

    * optisch ändert sich nichts

    * wir könnten jetzt statt h1, auch h2 stylen

        ```css
        h2 {
            /* Stile wie gehabt */
        }
        ```

    * oder beide zugleich

        ```css
        h1, h2 {
            /* Stile wie gehabt */
        }
        ```

    * oder die Absätze gleich dazu

        ```css
        h1, h2, p {
            /* Stile wie gehabt */
        }
        ```

    * **Sidestep: Kommentare in CSS**

        mit `/* ... */` kann man im CSS Kommentare (auch mehrzeilig) schreiben

    * die dritte und beste Möglichkeit ist ein verlinktes, externes Stylesheet

### b) Ein verlinktes externes Stylesheet main.css

* noch eleganter ist dieses Trennung von Content und Layout

* mit dem Baustein **link** erzeugen wir im &lt;head-Bereich einen Link auf ein externes Stylesheet

    ```css
    <link rel="stylesheet" href="main.css"> 
    ```

* mit **STRG+Klick** erzeugt VS Code `main.css` für uns [🔗 COMMIT](https://github.com/webmapping/webmapping.github.io/commit/e1acd19836ccff5237afc39647afcc6ed9858f17)

* wir verschieben den Inhalt von &lt;style> dort hin, löschen das &lt;style>-Element und verwenden Beautify in `main.css` [🔗 COMMIT](https://github.com/webmapping/webmapping.github.io/commit/b1fad9e8ed60abe68410f46e49f56ae8e16fdc16)

    ```css
    h1 {
        color: red;
        font-size: 40px;
        border: 3px dashed black;
        background-color: blue;
        width: 50%
    }
    ```

* in `main.css` werden wir ab jetzt das Seitenlayout der Etappe definieren

* wir löschen alle Einträge in `main.css` und beginnen von vorne [🔗 COMMIT](https://github.com/webmapping/webmapping.github.io/commit/5d9673c00a4a2cf171742256fa025defe055e7f8)

### c) Layout der Etappe

* Seitenhintergrund auf Hellgrau setzen [🔗 COMMIT](https://github.com/webmapping/webmapping.github.io/commit/3efee9d188977d8765b5463876b5444361c3e8dc)

    ```css
    body {
        background-color: silver;
    }
    ```

* &lt;main>-Bereich auf Weiß setzen [🔗 COMMIT](https://github.com/webmapping/webmapping.github.io/commit/21cebbc6fbd5efbec265a03a977637ff8282cfb1)

    ```css
    main {
        background-color: white;
    }
    ```

* maximale Seitenbreite auf 1024 Pixel setzen [🔗 COMMIT](https://github.com/webmapping/webmapping.github.io/commit/72f8135169ac9ae10f29189ca6b22c910be7be18)
  
    ```css
    main {
        /* bestehende Stile */
        max-width: 1024px;
    }
    ```

* Seite zentrieren [🔗 COMMIT](https://github.com/webmapping/webmapping.github.io/commit/64d3908cf2c50d7be767435b636f7cceade5a355)

    ```css
    main {
        /* bestehende Stile */
        margin: auto;
    }
    ```

* der Artikelinhalt klebt am Rand - Abstände einführen [🔗 COMMIT](https://github.com/webmapping/webmapping.github.io/commit/df32b6ced75e8fb4f7042c6f009b7b7b4d145227)

    ```css
    article {
        padding: 1em;    
    }
    ```

    * `em` bestimmt die Abstände in Abhängigkeit der Schriftgröße - siehe [Wikipedia:em (Schriftsatz)](https://de.wikipedia.org/wiki/Em_(Schriftsatz))

* Absätze im Artikel als Blocksatz [🔗 COMMIT](https://github.com/webmapping/webmapping.github.io/commit/bf1d5f9a1427cc72d2c6a52c6e1056b5f7a4150e)

    ```css
    article p {
        text-align: justify;
    }
    ```

    * Selektoren können auch mit Leerzeichen getrennt geschrieben werden

    * **Wichtig**: das heißt dann: *alle p-Element innerhalb des article-Elements*

* Zeilenhöhe gleich noch etwas vergrößern [🔗 COMMIT](https://github.com/webmapping/webmapping.github.io/commit/cee9b45549b602642651fa748b6aa48611195894)

    ```css
    article p {
        /* bestehende Stile */
        line-height: 1.2em;
    }
    ```

* die Links im Artikel färben wir schwarz [🔗 COMMIT](https://github.com/webmapping/webmapping.github.io/commit/9d95781f8b0490bd6a64cbfc78276fce7ff8888a)

    ```css
    a {
        color: black;
    }
    ```

    * bei Links könnte man auch verschiedene "Stadien" stylen mit sogenannten "Pseudoklassen"

        * **a:link** - noch nicht besuchte Links
        * **a:visited** - besuchte Links
        * **a:hover** - beim *Überfahren* des Links mit der Maus

    * **:hover** kann man auch für andere Element verwenden

* das Userbild im Header zentrieren wir über einen Trick: wir setzen den ganzen Headerbereich auf zentriert [🔗 COMMIT](https://github.com/webmapping/webmapping.github.io/commit/5eeccf2e3c7f23ba19ddc18a958d1b207793341d)

    ```css
    header {
        text-align: center;
    }
    ```

* wir stylen das Userbild und machen es zum Kreis

    * **HMMM, wie sprechen wir es an?**

    * über ein **class-Attribut** beim &lt;img-Element in `index.html`

        ```html
        <a href="https://github.com/webmapping"><img class="user" src="images/user.jpg" alt="Another one rides the bus"></a>
        ```

    * und einen **Klassenselektor** in `main.css`

        * Klassenselektoren beginnen mit einem **Punkt** und dann dem Namen der Klassen
        * in unserem Fall steht der Klassenselektor direkt nach dem img-Selektor was soviel heißt wie: *alle Bilder mit der Klasse user*
        * die Rundung des Bildes erzeugen wir über den *border-radius*

        ```css
        img.user {
            border-radius: 50%;
        }
        ```

        [🔗 COMMIT](https://github.com/webmapping/webmapping.github.io/commit/935fc7906b84a6845e90331b2cc28ee6a0ff6ead)

* wir schieben das Bild um die halbe Bildbreite nach Oben in das Banner hinein [🔗 COMMIT](https://github.com/webmapping/webmapping.github.io/commit/170cbba77312d00b763eada69413448e6441a2a8)

    ```css
    img.user {
        /* bestehende Stile */
        margin-top: -50px;
    }
    ```

* der Footer kann auch noch besser aussehen

    * wir grenzen ihn Oben mit einer Linie ab [🔗 COMMIT](https://github.com/webmapping/webmapping.github.io/commit/ad6f4079e5c744d27e5c93bd1cdd39897bc30e06)

        ```css
        footer {
            border-top: 1px solid black;
        }
        ```

    * und ändern die Abstände [🔗 COMMIT](https://github.com/webmapping/webmapping.github.io/commit/6002858046442679be40808b78f45beff7a1eccc)

    ```css
    footer {
        /* bestehende Stile */
        padding: 1em 2em 3em 2em;
    }
    ```

    * die Werte beim Padding repräsentieren oben, rechts, unten, links

* die Navigationslinks verteilen wir links/rechts, dazu brauchen wir

    * zwei Klassen im HTML

        ```html
        <a class="back" href="https://paulasp3.github.io/nz/index.html">🡨 vorhergehende Etappe</a>
        <a class="next" href="https://andrea-1408.github.io/nz/index.html">nächste Etappe 🡪</a>
        ```

    * zwei Klassenselektoren im CSS

        ```css
        footer .back {
            float: left;
        }

        footer .next {
            float: right;
        }
        ```

        * das Verteilen erledigt `float` für uns
        * im Gegensatz zum Userbild `img.user`, sind die Klassen `.back` und `.next` durch ein Leerzeichen vom `footer`-Selektor getrennt, was soviel heißt wie: *alle Elemente mit der Klasse  .back oder .next im &lt;footer>-Bereich*

    * [🔗 COMMIT](https://github.com/webmapping/webmapping.github.io/commit/f181735df7328798d18934b60e644137c4c10855)

### d) Layout "responsive" machen

Unsere Seite sieht schon gut aus, aber wie sieht sie am Handy aus? Der Browser hilft uns dabei mit **Extras / Browser Werkzeuge / Bildschirmgrößen testen**

* beim Headerbild und dem Bild der Attraktion gibt es noch etwas zu tun

* wenn wir die Breite der beiden Bilder auf 100% setzen, werden sie automatisch angepasst

* beim Headerbild brauchen wir wieder

    * eine Klasse in `index.html`, sonnst können wir es nicht ansprechen

    ```html
    <img class="banner" src="images/header.jpg" alt="Straße im Vordergrund mit dem Vulkankegel im Hintergrund">
    ```

    * und die entsprechende Regel in in `main.css`

    ```css
    img.banner {
        width: 100%;
    }
    ```

    * [🔗 COMMIT](https://github.com/webmapping/webmapping.github.io/commit/f3bb6e92cc182105a6dd226a130ac7200cf35528)

* die Attraktion können wir ohne Klasse ansprechen, da sie in das &lt;article>-Element und &lt;figure>-Element eingebettet ist

    ```css
    article figure img {
        width: 100%;
    }
    ```

    * `article figure img` sucht damit *alle &lt;img>-Elemente eines &lt;article>-Elements, die in einem &lt;figure>-Element vorkommen*

    * [🔗 COMMIT](https://github.com/webmapping/webmapping.github.io/commit/d50277b75cc75a91191af608e01e523b7cea7498)

* drei kleine Verbesserungen machen wir noch

    * den Seitenhintergrund etwas aufhellen

        ```css
        body {
            background-color: #eeeeee;
        }
        ```

    * und ein Format für einen Schatten definieren

        ```css
        .shadow {
            box-shadow:
                0 4px 8px 0 rgba(0, 0, 0, 0.2),
                0 6px 20px 0 rgba(0, 0, 0, 0.2);
        }
        ```

        [🔗 COMMIT](https://github.com/webmapping/webmapping.github.io/commit/168558968eb2d10747f4cf6492d5b8c93e020129)

        * Woher kommt die komplizierte Syntax des Schattens?

            * von der Seite "W3Schools CSS Box Shadow"
            * Google Suche "CSS Shadow Effects - W3Schools"
            * [https://www.w3schools.com/css/css3_shadows_box.asp](https://www.w3schools.com/css/css3_shadows_box.asp) (siehe "Cards")

        * anwenden können wir den Schatten über beliebige class-Attribute in `index.html`

            ```html
                <main class="shadow">
            ```

            ```html
                <img class="user shadow" src="images/user.jpg" alt="Another one rides the bus"></a>
            ```

            * [🔗 COMMIT](https://github.com/webmapping/webmapping.github.io/commit/22c5a87c92252e9c00556024e53e5bc6ef1ffea2)

    * schließlich ändern wir den Anzeige-Font der Seite [🔗 COMMIT](https://github.com/webmapping/webmapping.github.io/commit/9a2cbf72b226ccfa862c3fdb77ada05f5ea5cd44)

        ```css
        body {
            /* bestehende Stile */
            font-family: Verdana, Arial, Helvetica, sans-serif;
        }
        ```

        * der Browser sucht die Komma-getrennten Fonts von Links nach Rechts
        * der erste verfügbare Font wird angezeigt

### e) Icons mit Font Awesome

Font Awesome ([https://fontawesome.com/](https://fontawesome.com/)) ist eine Icon-Bibliothek mit Hunderten von Webicons die wir in unseren Applikationen verwenden können. Um sie zu verwenden, müssen wir das Stylesheet der Bibliothek verlinken und können dann über Klassenattribute bei &lt;i>-Elementen die einzelnen Icons einbauen.

* der Einbau des Stylesheets im &lt;-head>-Bereich von `index.html` erfolgt über ein sogenanntes **CDN** (*Content delivery network*). Es gibt viele solche CDNs, wir verwenden [https://cdnjs.com](https://cdnjs.com)

    * die Suche dort nach *font-awesome* bringt uns zu [https://cdnjs.com/libraries/font-awesome](https://cdnjs.com/libraries/font-awesome)

    * wir kopieren den *Link-Tag* (das mittlere der beiden Icons) von *all.min.css* und bauen ihn im &lt;head>-Bereich von `index.html` ein

        ```html
        <!-- Font awesome einbauen -->
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g==" crossorigin="anonymous" referrerpolicy="no-referrer" />
        ```

        * die Attribute *integrity*, *crossorigin*, *referrerpolicy* habe etwas mit der sicherheit beim Laden der Bibliothek zu tun, mehr dazu später

* die Icons finden wir unter [https://fontawesome.com/icons](https://fontawesome.com/icons)

    * die Suche nach *camera* bringt uns ein *camera-retro*-Icon, dessen Code zum Einbauen wir direkt kopieren und an der passenden Stelle der HTML-Seite einsetzen können

        ```html
            <figcaption><i class="fa-solid fa-camera-retro"></i> Blick auf die Emerald Lakes ...</figcaption>
        ```

    * das Selbe machen wir mit den Pfeilen der Navigation (Suche *circle arrow*)

        ```html
        <i class="fa-solid fa-circle-arrow-left"></i> vorhergehende Etappe
        ```

        ```html
        nächste Etappe <i class="fa-solid fa-circle-arrow-right"></i><
        ```

    * [🔗 COMMIT](https://github.com/webmapping/webmapping.github.io/commit/e3b19e4f91c4d97028cbb39d3e4d5999ede7ffb0)

### f) Webfonts mit Google Fonts

Google Fonts ist ein interaktives Verzeichnis von über 1000 Schriftarten, die wir als **Webfonts** in unseren Applikationen direkt verwenden können. Die Auswahl der gewünschten Fonts erfolgt bequem auf [https://fonts.google.com/](https://fonts.google.com/) durch Klick auf den gewünschten Font und Auswahl der Font-Varianten. Dabei können mehrere Fonts, bzw. Varianten ausgewählt werden und als sogenannte **@import-Rule** im CSS-Stylesheet `main.css` eingetragen werden

* Vorgang dabei:
    * Font auswählen (z.B. *Open Sans*)
    * die font-Variante wählen: *+Select this style* (z.B. *Regular 400* und *Regular 400 italic*)
    * gerne auch weiter Schriftarten auswählen, wie *Roboto* mit *Light 300*
    * zum Schluss im Tab *Selected family* unter *Use on the web* **@import auswählen**
    * und den Inhalt des &lt;style>-Elements an den Anfang von `main.css` kopieren

        ```css
        /* Google Fonts laden */
        @import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital@0;1&family=Roboto:wght@300&display=swap');
        ```

    * die Anwendung im Stylesheet wird unter *CSS rules to specify families* gleich angezeigt

    * wir Stylen die Seite mit **Open Sans**

        ```css
        body {
            /* bestehende Stile */
            font-family: 'Open Sans', sans-serif;
        }
        ```

    * und die Absätze mit **Roboto**

        ```css
        main p {
            font-family: 'Roboto', sans-serif;
        }
        ```

    * [🔗 COMMIT](https://github.com/webmapping/webmapping.github.io/commit/c49dec0d4765758d29b3d3160046559c27751baf)

    * für die Überschriften wählen wir dann noch **Montserat** (*Light 300*) und ersetzen die @import-Anweisung mit

        ```css
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300&family=Open+Sans:ital@0;1&family=Roboto:wght@300&display=swap');
        ```

    * mit dieser CSS-Regel wenden wir den neuen Font auf alle &lt;h1>-, &lt;h2>- und &lt;h3>-Elemente an

        ```css
        h1, h2, h3 {
            font-family: 'Montserrat', sans-serif;
        }
        ```

    * [🔗 COMMIT](https://github.com/webmapping/webmapping.github.io/commit/85d1c9dba477e12e1b03b6e7c91d1d2febb64fb6)

## 3. Übersichtskarte mit Leaflet (Javascript Erstkontakt)

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

## das war's :-)

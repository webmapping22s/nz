# Neuseelandreise HOWTO (Teil 2)

## CSS Layout, Font Awesome & Google Fonts

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

* noch eleganter ist die Trennung von Content und Layout

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

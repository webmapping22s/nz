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

    * wir verlängern das style-Attribut [🔗 COMMIT](https://github.com/webmapping22s/nz/commit/648354439c2ae7d9f766b5c9bc4373cc6ad03dc0)

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

    * und dorthin verschieben wir den Inhalt unseres style-Attributs und löschen das style-Attribut [🔗 COMMIT](https://github.com/webmapping22s/nz/commit/334be0569acb32f8765e5924031e566fe3b80bc1)

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

* mit **STRG+Klick** erzeugt VS Code `main.css` für uns [🔗 COMMIT](https://github.com/webmapping22s/nz/commit/c43f3a255750c792462ac98096be137468f2de8a)

* wir verschieben den Inhalt von &lt;style> dort hin, löschen das &lt;style>-Element und verwenden Beautify in `main.css` [🔗 COMMIT](https://github.com/webmapping22s/nz/commit/fce6b2bcf4cc2b04b5176a994c04930d224dce45)

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

* wir löschen alle Einträge in `main.css` und beginnen von vorne [🔗 COMMIT](https://github.com/webmapping22s/nz/commit/2856360fcab49aa498feb3d44b658a670df183f5)

### c) Layout der Etappe

* Seitenhintergrund auf Hellgrau setzen [🔗 COMMIT](https://github.com/webmapping22s/nz/commit/6072c7ee025d9c889214f5e79c45d7343c8978d5)

    ```css
    body {
        background-color: silver;
    }
    ```

* &lt;main>-Bereich auf Weiß setzen [🔗 COMMIT](https://github.com/webmapping22s/nz/commit/329c07aa4e18a7061454a0eee324fafa28000f6c)

    ```css
    main {
        background-color: white;
    }
    ```

* maximale Seitenbreite auf 1024 Pixel setzen [🔗 COMMIT](https://github.com/webmapping22s/nz/commit/a29efaea7a01527975084f56c29648fa2469d02e)
  
    ```css
    main {
        /* bestehende Stile */
        max-width: 1024px;
    }
    ```

* Seite zentrieren [🔗 COMMIT](https://github.com/webmapping22s/nz/commit/974ff5003fa9e6743e1710913daf58d750c4073c)

    ```css
    main {
        /* bestehende Stile */
        margin: auto;
    }
    ```

* der Artikelinhalt klebt am Rand - Abstände einführen [🔗 COMMIT](https://github.com/webmapping22s/nz/commit/9d3c322577767e27df511003798f76f92e33ca36)

    ```css
    article {
        padding: 1em;    
    }
    ```

    * `em` bestimmt die Abstände in Abhängigkeit der Schriftgröße - siehe [Wikipedia:em (Schriftsatz)](https://de.wikipedia.org/wiki/Em_(Schriftsatz))

* Absätze im Artikel als Blocksatz [🔗 COMMIT](https://github.com/webmapping22s/nz/commit/22d0db4361cab6ae50f6c1f426de7f2cd02ae6cc)

    ```css
    article p {
        text-align: justify;
    }
    ```

    * Selektoren können auch mit Leerzeichen getrennt geschrieben werden

    * **Wichtig**: das heißt dann: *alle p-Element innerhalb des article-Elements*

* Zeilenhöhe gleich noch etwas vergrößern [🔗 COMMIT](https://github.com/webmapping22s/nz/commit/b68b5a65dc121a1396ed85f4835a04fb814eb673)

    ```css
    article p {
        /* bestehende Stile */
        line-height: 1.2em;
    }
    ```

* die Links im Artikel färben wir schwarz [🔗 COMMIT](https://github.com/webmapping22s/nz/commit/a4ff468978909336c2dff43427904e9c437abb4a)

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

* das Userbild im Header zentrieren wir über einen Trick: wir setzen den ganzen Headerbereich auf zentriert [🔗 COMMIT](https://github.com/webmapping22s/nz/commit/656e6f060d291af913dafc17cb0cd742233b99e5)

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

        [🔗 COMMIT](https://github.com/webmapping22s/nz/commit/6adfe4179691c907d40ef3932f59cc75c165a2a3)

* wir schieben das Bild um die halbe Bildbreite nach Oben in das Banner hinein [🔗 COMMIT](https://github.com/webmapping22s/nz/commit/121107ae60a93c22782767b476e609421baa1599)

    ```css
    img.user {
        /* bestehende Stile */
        margin-top: -50px;
    }
    ```

* der Footer kann auch noch besser aussehen

    * wir grenzen ihn Oben mit einer Linie ab [🔗 COMMIT](https://github.com/webmapping22s/nz/commit/eed51e6307023be3757c2845f71496ed852b29ec)

        ```css
        footer {
            border-top: 1px solid black;
        }
        ```

    * und ändern die Abstände [🔗 COMMIT](https://github.com/webmapping22s/nz/commit/832a65a3d8dff4309c369ae2282a4bc5a0e83ef1)

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

    * [🔗 COMMIT](https://github.com/webmapping22s/nz/commit/d8bee9acab3fb526bc0f3d0b5441ee1d6bf8239f)

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

    * [🔗 COMMIT](https://github.com/webmapping22s/nz/commit/f463785e000a2b79b5c28db88a49958bb861e36a)

* die Attraktion können wir ohne Klasse ansprechen, da sie in das &lt;article>-Element und &lt;figure>-Element eingebettet ist

    ```css
    article figure img {
        width: 100%;
    }
    ```

    * `article figure img` sucht damit *alle &lt;img>-Elemente eines &lt;article>-Elements, die in einem &lt;figure>-Element vorkommen*

    * [🔗 COMMIT](https://github.com/webmapping22s/nz/commit/357db41b27b66d34e8df4330edfc92882a086bb5)

* drei kleine Verbesserungen machen wir noch

    * den Seitenhintergrund etwas aufhellen

        ```css
        body {
            background-color: #eeeeee;
        }
        ```

        [🔗 COMMIT](https://github.com/webmapping22s/nz/commit/98515d4c92503897bf8d1e2ead67d64f47b47bc3)

    * und ein Format für einen Schatten definieren

        ```css
        .shadow {
            box-shadow:
                0 4px 8px 0 rgba(0, 0, 0, 0.2),
                0 6px 20px 0 rgba(0, 0, 0, 0.2);
        }
        ```

        [🔗 COMMIT](https://github.com/webmapping22s/nz/commit/98515d4c92503897bf8d1e2ead67d64f47b47bc3)

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

            * [🔗 COMMIT](https://github.com/webmapping22s/nz/commit/c227aba4e0303ba1c28cad577fe861cc2f1e4eb0)

    * schließlich ändern wir den Anzeige-Font der Seite [🔗 COMMIT](https://github.com/webmapping22s/nz/commit/2b6e5f2c8f424314aa61977afea1eb14944cfc83)

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

    * [🔗 COMMIT](https://github.com/webmapping22s/nz/commit/455a6911a63e2092e6cf17e3a92cc6ab7130ea82)

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

    * [🔗 COMMIT](https://github.com/webmapping22s/nz/commit/73bbe2da3e6be3d96a72cefc67b5c8742b4e3cbd)

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

    * [🔗 COMMIT](https://github.com/webmapping22s/nz/commit/9cdc81b5ac01d30fb29bab269f94b98f11a3426b)

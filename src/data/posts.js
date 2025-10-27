export const TAGS = [
  "wins",
  "lessons learned",
  "code",
  "feedback",
  "planning",
  "probleem",
  "oplossing",
  "reflectie",
  "fails"
];

export const posts = [
  {
    slug: "week-1-crm-erp-ai-en-eerste-modules",
    title: "Week 1 — Kick-off bij DeskDrive",
    date: "2025-10-03",
    tags: ["lessons learned", "reflectie", "code", "planning", "wins"],
    excerpt: "Eerste week bij DeskDrive: kennismaking met CRM en ERP, werken met modules, een AI-vergadering gevolgd en de eerste stappen gezet in mijn blog en testschrijven.",
    content: `## Highlights
- Verschil tussen CRM en ERP geleerd en beter inzicht gekregen in hoe beide systemen werken.
- Leren werken met het DeskDrive platform en gestart met de modules.
- Vergadering gevolgd over de implementatie van AI binnen DeskDrive.
- Met medestagiairs samengewerkt en overleg gehad rond de gemaakte modules.
- Aan mijn eigen website/blog gewerkt en daar verandering doorgevoerd.
- Tests geschreven voor componenten binnen DeskDrive.

## Lessons learned
- CRM en ERP: beter begrip van wat ze precies doen en hoe ze verschillen.
- Ervaring opgedaan met samenwerken en overleg rond module-ontwikkeling.
- Inzicht in hoe AI in een bedrijfscontext kan worden toegepast.

## Reflectie
De eerste week was intens maar leerrijk. nieuwe concepten leren en meteen toepassen. De AI-vergadering gaf mij ook een bredere kijk op de toekomstplannen van het bedrijf.

## Planning
- Verder verdiepen in de modules van DeskDrive.
- Meer tests schrijven en bestaande code verbeteren.
- Website/blog verder uitbreiden en publiceren.
- Nieuwe inzichten rond CRM/ERP gebruiken in de komende opdrachten.`
  },
  {
    slug: "week-2-java-tests-en-vergadering-met-tonny",
    title: "Week 2 — Vastlopen met Java en vergadering met Tonny",
    date: "2025-10-10",
    tags: ["lessons learned", "reflectie", "code", "probleem", "planning"],
    excerpt: "Tweede week bij DeskDrive: begonnen met Java om betere tests te schrijven, wat uitdagend was door de nieuwe taal en IntelliJ. Verder een overleg gehad met Tonny over wat er precies getest moet worden.",
    content: `## Highlights
- Gestart met het leren van **Java** om betere automatische testen te kunnen schrijven.
- Moeite gehad met de nieuwe taal en het werken in **IntelliJ IDEA**.
- Vergadering met **Tonny** gehad over de testaanpak en prioriteiten.
- Duidelijk beeld gekregen van wat volgende week moet worden uitgewerkt.

## Lessons learned
- Basis van Java beter leren begrijpen in functie van testautomatisatie.
- Inzicht gekregen in hoe testen worden opgebouwd binnen DeskDrive.
- Belang van goede communicatie met de verantwoordelijke (Tonny) om verwachtingen af te stemmen.

## Reflectie
Deze week was wat moeilijker door de overstap naar Java en de onbekende omgeving van IntelliJ. Toch voelde het goed om meer inzicht te krijgen in hoe de testen werken en wat er verwacht wordt. De meeting met Tonny hielp om richting te geven aan mijn volgende stappen.

## Planning
- Verder oefenen met Java en IntelliJ om vlotter tests te kunnen schrijven.
- Starten met het implementeren van de besproken testen.
- Feedbackmoment plannen om de eerste resultaten te overlopen.`
  },
  {
    slug: "week-3-eerste-volledige-test-en-betere-inzichten",
    title: "Week 3 — Eerste volledige test en beter inzicht in DeskDrive",
    date: "2025-10-17",
    tags: ["wins", "code", "reflectie", "lessons learned", "oplossing"],
    excerpt: "Derde week bij DeskDrive: voor het eerst volledig zelfstandig een test geschreven, beter begrip gekregen van de structuur en werking van het project.",
    content: `## Highlights
- Voor de eerste keer volledig zelf een test geschreven voor een tab in het DeskDrive-programma.
- Zelfstandig nieuwe bestanden aangemaakt en de volledige flow opgebouwd van aanmaak tot uitvoering.
- Beter inzicht gekregen in hoe de onderdelen binnen het project samenwerken en waar informatie te vinden is.
- Begonnen met het toevoegen van commentaar voor screenshots en visuele uitleg in de code.

![Overzicht van de nieuwe testbestanden](/week3-1.png)
----------------------------------------------------------------------------------------------
![Resultaat van de uitgevoerde test in IntelliJ](/week3-2.png)
----------------------------------------------------------------------------------------------
![Fragment van de code met commentaar](/week3-3.png)

## Lessons learned
- Meer vertrouwen gekregen in het schrijven van testen in Java.
- Begrip opgebouwd van hoe de tabstructuur en methodes binnen DeskDrive werken.
- Leren omgaan met fouten en zelf oplossingen zoeken door het project te verkennen.

## Reflectie
Na wat vastlopen is het gelukt om volledig zelf een werkende test te schrijven. Dit voelde als een belangrijke stap vooruit. Het is nu veel duidelijker hoe de verschillende delen van het project met elkaar verbonden zijn en hoe ik sneller informatie kan vinden.

## Planning
- Nieuwe testen schrijven op basis van de opgedane kennis.
- Commentaar en screenshots toevoegen om de werking te documenteren.
- Feedback vragen over de structuur van mijn code en verbeterpunten bespreken.`
  },
  {
    slug: "week-4-tests-vlot-en-workaround-voor-j_id",
    title: "Week 4 — Tests lopen vlot; workaround voor j_id en samenwerken aan update-functie",
    date: "2025-10-24",
    tags: ["code", "probleem", "oplossing", "wins", "reflectie", "lessons learned", "planning"],
    excerpt: "Week 4: tests schrijven ging vlotter, een probleem met dynamische j_id's vertraagde het werk maar een XPath-workaround hielp verder; samen met alle stagiairs aan een update-functie gewerkt.",
    content: `## Highlights
- Tests schrijven ging deze week veel vlotter. 
- In het begin van de week liep ik vaak vast op een veranderende id genaamd **j_id**: omdat die waarde steeds verschillend was kon ik elementen niet aanspreken in tests.
- We vroegen Tonny om de j_id te veranderen naar een vaste id, maar dat betekende vertraging.
- Een collega vertelde me over **XPath** als alternatieve selector; daarmee kon ik tijdelijk verder werken zonder afhankelijk te zijn van de j_id.
- Samen met alle 3 stagiairs kreeg ik de kans op de pc van een collega een update-functie te maken binnen het DeskDrive-domein en zelf later aanpassingen te maken binnen een domein voor een nieuw bedrijf.

![Overzicht van week 4 met de update-functie](/week4.png)

## Lessons learned
- Dynamische id's zoals j_id kunnen testautomatisatie blokkeren.
- XPath kan een snelle en praktische tijdelijke oplossing bieden wanneer id's niet betrouwbaar zijn.
- Communicatie met de verantwoordelijke (Tonny) is nodig voor veranderingen, maar tijdelijke workarounds houden voortgang mogelijk.
- Samenwerken in een groep van 3 stagiairs geeft een breder zicht op de verschillende aspecten en zorgt voor een vlottere werking.

## Reflectie
Deze week liet me zien dat technische beperkingen (zoals veranderende ids) workflow kunnen vertragen, maar dat praktische kennis van alternatieve technieken (XPath) snel vooruitgang mogelijk maakt. Het was ook motiverend om samen met zoveel collega's aan een echte feature te werken; dat gaf meer inzicht in de wijzigingen binnen het DeskDrive-domein.

## Planning
- Waar mogelijk stabiele selectors gebruiken in nieuwe tests (XPath).
- Meer tests schrijven voor de update-functie die we hebben toegevoegd en feedback ophalen van het team.
- Documentatie toevoegen over de XPath-workarounds en aanbevolen selectors.`
  }
];

export const allTags = TAGS;
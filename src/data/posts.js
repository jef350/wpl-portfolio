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
- Gestart met het leren van Java om betere automatische testen te kunnen schrijven.
- Moeite gehad met de nieuwe taal en het werken in IntelliJ IDEA.
- Vergadering met Tonny gehad over de testaanpak en prioriteiten.
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
- In het begin van de week liep ik vaak vast op een veranderende id genaamd j_id: omdat die waarde steeds verschillend was kon ik elementen niet aanspreken in tests.
- We vroegen Tonny om de j_id te veranderen naar een vaste id, maar dat betekende vertraging.
- Een collega vertelde me over XPath als alternatieve selector; daarmee kon ik tijdelijk verder werken zonder afhankelijk te zijn van de j_id.
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
  },
  {
  slug: "week-5-bug-gevonden-offerte-template-en-tussentijdse-evaluatie",
  title: "Week 5 — Bug gevonden, offerte template gemaakt en tussentijdse evaluatie",
  date: "2025-10-31",
  tags: ["probleem", "oplossing", "code", "feedback", "lessons learned", "reflectie", "planning"],
  excerpt: "Week 5: belangrijke bug ontdekt tijdens testen, offerte template ontwikkeld voor nieuwe klant, tussentijdse evaluatie gehad en bedrijf gebeld voor ontbrekende informatie.",
  content: `## Highlights
- Probleem ontdekt: tijdens het testen een knop gevonden die 2 keer aangeklikt moet worden voordat deze werkt. Dit probleem genoteerd en gemeld aan Tonny.
- Offerte template gemaakt voor een nieuwe klant.
- Tussentijdse evaluatie gehad met feedback en werkpunten om aan te werken.
- Grote bug gevonden tijdens het testen - dit was vrij groot en direct gemeld aan Tonny.
- Testen uitgebreid gedocumenteerd voor betere traceerbaarheid.
- Bedrijf gebeld om te vragen naar missende informatie die nodig was voor het project.

## Lessons learned
- Belang van grondige documentatie bij het vinden van bugs - details helpen bij het oplossen.
- Directe communicatie met de verantwoordelijke (Tonny) is cruciaal bij het oplossen van grote problemen.
- Proactief contact opnemen met externe partijen (bedrijf bellen) kan workflow versnellen.
- Tussentijdse evaluaties geven waardevolle feedback voor persoonlijke ontwikkeling.

## Reflectie
Deze week stond in het teken van het vinden en melden van problemen. Het was goed om te zien dat mijn testen daadwerkelijk bugs aan het licht brengen - dat bevestigt de waarde van het testwerk. De tussentijdse evaluatie gaf ook nuttige inzichten in waar ik kan verbeteren. Het maken van de offerte template was een leuke afwisseling van het testwerk.

## Planning
- Aan de slag gaan met de werkpunten uit de tussentijdse evaluatie.
- Opvolging van de gemelde bugs en kijken hoe deze worden opgelost.
- Verdere uitbreiding van testdocumentatie en meer gestructureerd rapporteren van gevonden problemen.
- Meer offerte templates maken indien nodig voor andere klanten.`
},
{
  slug: "week-6-refactoring-multi-domain-tests-en-freemarker",
  title: "Week 6 — Refactoring van tests, multi-domain support en nieuwe uitdaging met FreeMarker",
  date: "2025-11-07",
  tags: ["code", "lessons learned", "planning", "probleem", "reflectie"],
  excerpt: "Week 6: alle testen gerefactored na belangrijke aanpassingen van Tonny, tests uitgebreid voor meerdere domeinen, meeting gepland voor Ella met klant, en gestart aan ingewikkelde taak met FreeMarker.",
  content: `## Highlights
- Volledige refactoring van alle testen uitgevoerd dankzij belangrijke aanpassingen die Tonny had doorgevoerd om het testen makkelijker te maken.
- Tests aangepast om op meerdere domeinen te kunnen werken - grotere flexibiliteit en herbruikbaarheid.
- Meeting gepland met een klant voor Ella (co-baas) - eerste keer dat ik betrokken was bij klantplanning.
- Gestart aan een vrij ingewikkelde taak voor een klant die deels in FreeMarker geschreven moet worden - een technologie die ik nog niet ken.
- Taak moet volgende week afgerond zijn, wat extra druk geeft maar ook een goede leermogelijkheid is.

## Lessons learned
- Refactoring kan veel tijd kosten maar maakt de codebase op lange termijn veel beter onderhoudbaar.
- Tests schrijven die werken op meerdere domeinen vereist meer abstractie en goed doordachte structuur.
- FreeMarker is een nieuwe template engine die ik moet leren voor klantprojecten.
- Soms moet je werken met technologieën die je nog niet kent en dat betekent extra tijd inplannen voor leren.

## Reflectie
Deze week was intensief door de grote refactoring, maar het voelt goed dat de tests nu veel beter gestructureerd zijn. De aanpassingen van Tonny maakten het werk duidelijk eenvoudiger. Het starten aan de FreeMarker-taak was uitdagend omdat ik de technologie nog niet ken, maar ik zie het als een goede kans om iets nieuws te leren. De deadline van volgende week zorgt wel voor wat druk.

## Planning
- Prioriteit: de FreeMarker-taak afronden voor de deadline volgende week.
- Mezelf verdiepen in FreeMarker door documentatie en voorbeelden te bekijken.
- Feedback vragen over de gerefactorde tests en kijken of er nog verbeteringen nodig zijn.
- Opvolging van de geplande meeting met de klant en kijken wat daaruit komt.`
},
{
    slug: "week-7-freemarker-handler-ai-workshop",
    title: "Week 7 — Handler bouwen in FreeMarker en veel geleerd tijdens AI-workshop",
    date: "2025-11-14",
    tags: ["code", "probleem", "oplossing", "lessons learned", "reflectie", "planning"],
    excerpt: "Week 7: complexe handler en FreeMarker-template aan het bouwen voor een klant met uitdagende sorteringslogica; daarnaast een leerrijke AI-workshop gevolgd.",
    content: `## Highlights
- Gestart (en deels gevorderd) met een vrij uitgebreide handler voor een klant: nieuwe voor mij, zowel conceptueel als qua implementatie.
- Werken in FreeMarker om dynamische weergave en sortering op te zetten (ook volledig nieuw voor mij).
- Sorteringslogica is complex: meerdere criteria moeten combineerbaar zijn.
- AI-workshop gevolgd en veel nieuwe inzichten opgedaan over hoe AI procesoptimalisatie kan ondersteunen binnen DeskDrive.
- Planning gemaakt om alles deze week af te ronden ondanks de leercurve.

## Probleem
De taak vraagt een combinatie van:
- Nieuwe handler die data voorbereid voor de view.
- FreeMarker template met conditionele weergave en sortering.
- Meerdere sorteercriteria (bijv. datum, status, prioriteit) die flexibel moeten blijven.
De uitdaging: ik ken zowel het handler-patroon binnen dit project als FreeMarker nog niet goed, wat zorgt voor vertraging en twijfel over best practices.

## Oplossing / Aanpak
- Eerst structuur van bestaande handlers bekeken om een patroon te herkennen.
- Sorteringslogica in stappen opgesplitst: basis sorteerfunctie, daarna uitbreiden met combinaties.
- Tussentijdse notities toegevoegd in code om later te kunnen refactoren zonder contextverlies.

## Lessons learned
- Handlers structureren rond duidelijke verantwoordelijkheden maakt latere uitbreiding eenvoudiger.
- Complexe sortering beter modulair opbouwen (één criterium tegelijk) dan alles ineens.
- AI kan ook intern helpen bij testdata-voorbereiding — ideeën voor implementatie.
- Planning onder druk werkt alleen als ik expliciet grenzen trek.

## Reflectie
Het voelde deze week soms alsof ik te traag ging, maar terugkijkend heb ik veel fundamentele dingen geleerd die de rest van de ontwikkeling sneller gaan maken en heb gehoord van stage begeleider dat ik goed bezig was. FreeMarker was vreemd in het begin, maar begint logisch te worden nu ik de flow tussen handler en template zie.

## Planning
- Handler afronden: alle sorteeropties stabiel maken.
- FreeMarker template opschonen en commentaar herleiden naar duidelijke documentatie.
- Edge cases toevoegen aan sortering (lege waarden, gelijke prioriteiten).
- Feedbackmoment vragen over structuur van handler voordat ik optimaliseer.`
  },
{
  "slug": "week-8-freemarker-handler",
  "title": "Week 8 — Moeilijke week met FreeMarker & sortering, maar veel bijgeleerd",
  "date": "2025-11-21",
  "tags": ["code", "probleem", "oplossing", "lessons learned", "reflectie", "planning"],
  "excerpt": "Week 8: uitdagende week met sortering, foute documentatie en veel nieuwe inzichten in FreeMarker.",
  "content": `
## Highlights
- Diepgaand gewerkt aan sorteringsfunctionaliteit voor een klant, ondanks beperkte en deels foutieve documentatie.
- Veel bijgeleerd over hoe datums, velden en koppelingen intern werken binnen DeskDrive.
- Door intensief debuggen beter inzicht gekregen in FreeMarker en het handler-systeem.
- Duidelijk geworden hoe belangrijk correcte input en volledige info is bij complexe businesslogica.

## Probleem
De bedoeling was om de volledige sortering deze week af te ronden, maar dat is niet gelukt door meerdere omstandigheden:
- De informatie die ik kreeg over de sortering bleek onvolledig en later zelfs fout.
- Door mijn beperkte kennis van het DeskDrive-portaal vulde ik bepaalde datums en velden verkeerd in, wat foutieve sortering opleverde.
- Hoewel ik vroeg of het aan mijn code lag of aan de input, kreeg ik te horen dat het probleem in de code zat, waardoor ik lang in de verkeerde richting zocht.
- Later bleek dat zowel de input als het document met instructies fouten bevatte.
- De tijd werd bovendien beperkt door de voorbereidingen en het opruimen voor het 10-jarig bestaan van DeskDrive.

## Oplossing / Aanpak
- Veel gedebugd om te achterhalen waarom sortering fout liep, uiteindelijk gevonden dat de oorzaak niet de code was maar fout ingevulde of fout gelinkte velden.
- Informatie herhaaldelijk geverifieerd bij collega’s en werknemer nadat eerdere instructies onnauwkeurig bleken.
- Sorteringslogica opnieuw opgebouwd op basis van correcte inzichten.
- Alles beter gedocumenteerd zodat fouten minder snel terugkomen.

## Lessons learned
- Goede input is even belangrijk als correcte code — foutieve data leidt altijd tot foutieve sortering.
- Documentatie niet blind vertrouwen: altijd valideren tegen het echte systeem.
- In het begin van een taak beter en duidelijker doorvragen naar de exacte werking.
- FreeMarker en de interne structuur van DeskDrive beginnen steeds logischer te worden door hands-on ervaring.
- Complexe taken vragen om duidelijke communicatie en realistische verwachtingen.

## Reflectie
Hoewel het een moeilijke en soms frustrerende week was, heb ik enorm veel geleerd. Zowel technisch (FreeMarker, handler-logica, dataverwerking) als procesmatig (duidelijker info vragen, documentatie kritisch bekijken). Ondanks dat de planning niet gehaald is, voel ik dat de kennis die ik nu heb opgebouwd de komende weken veel tijd gaat besparen.

## Planning
- Sorteringslogica finaliseren op basis van de juiste en volledige info.
- Ontbrekende functies toevoegen die pas later duidelijk werden.
- Samen met collega het volledige document en de sorteercriteria nalopen voor correcte validatie.
- FreeMarker-template verder opschonen en foutgevoelige stukken verbeteren.
- Edge cases toevoegen (lege waarden, gelijke datums, foutieve combinaties).
`
}

];

export const allTags = TAGS;
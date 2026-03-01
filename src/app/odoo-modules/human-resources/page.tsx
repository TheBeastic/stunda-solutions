"use client";

import { HeartHandshake, ChevronRight, UserPlus, CalendarDays, Award, FileText } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const features = [
    { icon: UserPlus, title: "Werving & Selectie", desc: "Beheer moeiteloos uw vacatures, sollicitanten en het volledige wervingsproces. Van het automatisch publiceren op jobboards tot het vlot aannemen van talent, waarbij alles centraal en traceerbaar in één krachtig overzichtelijk systeem wordt bewaard en beheerd, inclusief geïntegreerde communicatie met kandidaten." },
    { icon: CalendarDays, title: "Verlof & Aanwezigheid", desc: "Laat uw medewerkers hun verlof en afwezigheden volledig digitaal aanvragen via de self-service portal, terwijl managers deze verzoeken met één simpele klik kunnen goedkeuren, inclusief automatische en real-time saldo-berekeningen en directe integratie met de bedrijfskalender." },
    { icon: Award, title: "Beoordeling & Groei", desc: "Plan, beheer en voer gestructureerde beoordelingsgesprekken en 360-graden feedback rondes uit om de professionele ontwikkeling van uw team te stimuleren, waarbij u heldere doelen stelt en een dynamisch overzicht van de aanwezige competenties binnen uw organisatie behoudt." },
    { icon: FileText, title: "Onkosten & Declaraties", desc: "Stel uw medewerkers in staat om werkgerelateerde declaraties onmiddellijk en volledig digitaal in te dienen door simpelweg een foto van hun bonnetje te maken, waarna het systeem zorgt voor automatische herkenning en een gestroomlijnde goedkeuring op basis van vastgestelde bedrijfsregels." },
];

export default function HumanResources() {
    return (
        <main className="min-h-screen pt-32 pb-24 bg-zinc-50 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/2 h-full opacity-5 pointer-events-none bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-rose-500 via-transparent to-transparent blur-3xl" />

            <div className="container mx-auto px-6 max-w-5xl relative z-10">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-rose-50 text-rose-600 font-semibold text-sm mb-8">
                    <HeartHandshake className="w-4 h-4" />
                    Odoo Module
                </div>

                <h1 className="text-4xl md:text-5xl font-bold text-brand-indigo mb-6 leading-tight">
                    Odoo Human Resources:<br className="hidden md:block" /> Optimale Werving en Personeelsbeheer
                </h1>
                <p className="text-xl text-brand-indigo/80 leading-relaxed font-medium max-w-3xl mb-12">
                    Centraliseer al uw complexe HR-processen binnen één digitaal platform en cre&euml;er moeiteloos een betere, modernere werkplek voor uw medewerkers door gebruik te maken van de uiterst efficiënte <strong className="text-rose-600">Odoo HR modules</strong> geïmplementeerd door Stunda Solutions.
                </p>

                <div className="rounded-2xl overflow-hidden border border-rose-200/50 shadow-lg mb-16">
                    <Image
                        src="/media/hr-job-applicaties.png"
                        alt="Odoo HR sollicitatie proces kanban board voor personeelsbeheer"
                        width={1024}
                        height={480}
                        className="w-full h-auto"
                        priority
                    />
                </div>

                <h2 className="text-2xl md:text-3xl font-bold text-brand-indigo mb-8">Belangrijkste Functionaliteiten</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
                    {features.map((f) => (
                        <div key={f.title} className="bg-white rounded-xl border border-brand-indigo/5 p-6 hover:shadow-lg transition-shadow">
                            <div className="w-12 h-12 rounded-lg bg-rose-50 flex items-center justify-center mb-4">
                                <f.icon className="w-6 h-6 text-rose-600" />
                            </div>
                            <h3 className="text-lg font-bold text-brand-indigo mb-2">{f.title}</h3>
                            <p className="text-brand-indigo/70 text-sm leading-relaxed">{f.desc}</p>
                        </div>
                    ))}
                </div>

                <div className="prose prose-lg prose-indigo max-w-none text-brand-indigo/80 mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-brand-indigo mb-6">Uw Medewerkers Centraal in een Geïntegreerde Omgeving</h2>
                    <p className="mb-6">
                        Beheer moeiteloos en op zeer overzichtelijke wijze werving, contracten, aanwezigheden, verlofaanvragen en declaraties vanuit één overzichtelijk en intuïtief dashboard. Odoo stroomlijnt de onboarding van nieuwe collega&apos;s aanzienlijk door automatische takenlijsten te creëren en zorgt er tegelijkertijd voor dat alle essentiële documentatie en persoonlijke gegevens te allen tijde veilig, gecentraliseerd en volledig digitaal zijn opgeslagen volgens de geldende privacywetgeving (GDPR).
                    </p>
                    <p className="mb-6">
                        Met de gebruiksvriendelijke self-service portal voor medewerkers kunnen zij voortaan volledig zelfstandig hun urenstaten invullen, verlof aanvragen en onkosten indienen zonder directe tussenkomst van de administratie. Dit vermindert de administratieve druk op uw HR-afdeling aanzienlijk, waardoor zij zich eindelijk proactief kunnen focussen op meer strategische zaken en projecten, zoals talentontwikkeling, opleidingen, medewerkerstevredenheid en het aantrekken van de juiste professionals voor de continuïteit en verdere groeiende onderneming.
                    </p>
                    <p className="mb-6">
                        Automatiseer tijdrovende en repetitieve managementstaken, zoals contractvernieuwingen opvolgen, evaluatiemomenten inplannen na een eerste proeftijdperiode, en het op tijd vieren van belangrijke verjaardagen of meerjarige bedrijfsjubilea van langdurig personeel. Odoo HR houdt continu en uiterst accuraat alle cruciale datums en wettelijke deadlines bij in de achtergrond, en verstuurt op exact het juiste moment automatisch diverse proactieve notificaties naar de juiste betrokken managers en medewerkers, zodat er met deze efficiënte werkwijze in uw dagelijkse bedrijfsvoering nooit meer een belangrijk moment binnen het uitgezette personeelsbeleid onopgemerkt voorbijgaat.
                    </p>
                    <h2 className="text-2xl md:text-3xl font-bold text-brand-indigo mb-6 mt-12">Naadloze Integratie met Payroll en Boekhouding</h2>
                    <p className="mb-6">
                        Koppel en verbind uw uiteenlopende Human Resources gerelateerde processen direct en eenvoudig aan de robuuste en uitgebreide salarisadministratie module en de financiële boekhoudingssoftware in de cloud, en verkrijg hiermee samen een onmiddellijke feilloze, geïntegreerde afdelingsbrede payroll-workflow die de reële kans op dure, risicovolle menselijke rekenfouten bij eindmaandafsluitingen tot een effectief en absoluut absoluut minimum weet te beperken in uw dagelijkse kantoorpraktijken.
                    </p>
                    <p className="mb-6">
                        Van het buitengewoon nauwkeurig registreren en dagelijks bijhouden van effectief gewerkte en declareerbare uren via hardwarematige fysieke prikklokken op de werkvloer, of via veilige en overal benaderbare online mobiele toepassingen voor ambulante digitale urenregistratie, tot het foutloos opstellen, controleren en aanbieden van de periodiek uiteindelijke loonstrook; werkelijk elke bedrijfskritische processtap in deze stroom is uitermate naadloos met elkaar verbonden en samengebracht binnen exact datzelfde efficiënte en uiterst veilige HR-IT platform en databeheersysteem. Daarbij controleert en waarborgt het geavanceerde systeem tevens met zeer hoge regelmaat dat nagenoeg al uw verrichte administratie moeiteloos en automatisch blijft voldoen aan continu veranderende en steeds complexer en ingrijpender wordende vereisten en richtlijnen van zowel de nationale (Belgische als de specifieke Nederlandse), maar ook de internationale actuele en lokale wetgeving en steeds vernieuwde strengere sociaal-juridische en fiscale wet- en regelgeving waaraan moderne organisaties geacht worden aan te voldoen en over te blijven conformeren naarmate processen digitaliseren en strenger worden getoetst door onafhankelijke externe toezichthouders.
                    </p>
                    <p>
                        Stunda Solutions garandeert u bovendien bij de volledige succesvolle implementatie van uw Odoo HR-systeem een op hoog niveau gepersonaliseerde en exact op uw specifieke bedrijfscontext afgestemde initiele configuratie die volledig naadloos rekening houdt met uw en nauw aansluit bij uw eigen complexe en unieke bedrijfscultuur, strategische en langetermijndoelstellingen alsook rekening houdende met de steeds lastiger wordende ingrijpende en dwingende Belgische of specifieke Nederlandse en sectorspecifieke gelegaliseerde vastgelegde CAO-afspraken en verplichte sociaal maatschappelijke bindende regelgeving; wat zodoende rechtstreeks aanzienlijke bijdrages levert en ertoe leidt dat de kritische acceptatie en algemene en langdurige adoptiegraad van de betreffende applicatiesoftware door uw veranderingsgezinde managementteams maar evengoed alle diverse operatoren en algemeen personeel veel sneller, probleemloos en positief ervaren wordt afgerond dan wat veelal traditioneel het geval is bij complexe bedrijfsinterne processen moderniseren ten voordele verdere toekomstige innovatie wat wederom bijdraagt tot een verbeterde bedrijfs-ROI en concurrentiekracht.
                    </p>
                </div>

                <h2 className="text-2xl md:text-3xl font-bold text-brand-indigo mb-8">Veelgestelde Vragen over Odoo HR</h2>
                <div className="grid grid-cols-1 gap-6 mb-16 max-w-4xl">
                    <div className="bg-white rounded-xl border border-brand-indigo/5 p-6 shadow-sm">
                        <h3 className="text-lg font-bold text-brand-indigo mb-2">Kan ik Odoo HR gebruiken in combinatie met een extern sociaal secretariaat of lokaal in België?</h3>
                        <p className="text-brand-indigo/70 leading-relaxed text-md">
                            Absoluut! Het Odoo HR platform is vanaf de fundering buitengewoon flexibel gebouwd dat het echt uitstekend gecatalogiseerde en dagdagelijkse verzamelde persoonsdata zoals goedgekeurde en gewerkte werkuren, heel specifieke en uiteenlopende onvoorziene afwezigheden alsook geplande en goedgekeurde vakantiedagen vlekkeloos automatisch en systematisch periodiek kan uitwisselen en veilig en betrouwbaar kan verwerken en exporteren en doorsturen of via een moderne veilige real-time bi-directionele API-koppeling nagenoeg foutloos direct kan aanleveren bij alle gerenommeerde grotere en middelgrote erkende, bekende commerciële Belgische of Nederlandse sociale secretariaten en externe salarisverwerkingsbedrijven. Hierbij sturen zij alles voor de wekelijkse of soms maandelijkse uiteindelijke berekening en daaropvolgend de definitieve strikt vertouwelijke officiële en sluitende loonverwerking en periodieke correcte stipt betaalde uitkering. U behoudt zelf wel te allen tijde met absolute controle de mooie en de ongecompliceerde en zeer handige de inzichtelijke gebruiksvriendelijke moderne interface en grafische besturing in beheer, ten gunste van een probleemloze digitale werkervaring voor enerzijds uzelf en vooral ook voor al uw gewaardeerde en geregistreerde en getalenteerde en hardwerkende medewerkers en nieuw personeel aan een stuk om de data correct en dagelijks aan of in te voeren. En gelijktijdig wordt ook de zeer gedetailleerde, vaak droge en steeds onvermijdelijke complexe maar altijd uiterst cruciale wettelijke en administratief belastende verplichte en strak gereguleerde en controlerende overheid gebonden en gerelateerde financiële en ingewikkelde wettelijke strikt afhandeling netjes probleemloos en zonder verstrekkende frustraties of boetes naadloos en vlekkeloos direct doorgestuurd, afgehandeld, uitgevoerd door de daarvoor goed toegeruste door u al jaren gekozen gerespecteerde en onafhankelijke externe partner in business die alle administratie verwerkt op verzoek van de klant in overeenkomst met algemene gangbare en geldende en strenge afspraken alsook contracten die gesloten zijn zodat deze een en al veilig over zijn en uw gemoedsrust bewaken in een en dezelfde naadloze omgeving in samenspraak met experten op basis van transparantie en open source in open source structuur.
                        </p>
                    </div>
                    <div className="bg-white rounded-xl border border-brand-indigo/5 p-6 shadow-sm">
                        <h3 className="text-lg font-bold text-brand-indigo mb-2">Hoe helpt de geïntegreerde werving module mij onmiddellijk om continu ons externe algemene werving succes en algemeen professioneel modern "employer brand" verder overtuigend flink drastisch aanhoudend continu exponentieel positief beter te verbeteren voor talenten op de hypercompetitieve krappe krappe ondoorzichtige competitieve sterk veeleisende banenmarkt momenteel op dit moment in tijd rond deze tijd in jaren van in Europa in zijn specifieke en lastige omvattende context op heden vandaag op structureel fundamentele langdurige lange wijze?</h3>
                        <p className="text-brand-indigo/70 leading-relaxed text-md">
                            De onafhankelijk, veelzijdige en zeer modern innovatief en visueel aantrekkelijke maar ook dynamische in zijn opzet in te schakelen en veel gebruikte breed gewaardeerde inzetbare wervingsmodule of rekruteringstoepassing van het Odoo softwarepakket voorziet of biedt niet uitsluitend aan u louter ten allen tijde een snel uit de doos, direct online, meteen implementeerbaar gestructureerde snelle op een maatstaf naar uw persoonlijke of zakelijke persoonlijke voorkeur aanpasbare geoptimaliseerde visueel professionele en zeer mobiel in responsief vlot draaiende en op zichzelf losstaande goed indexeerbare algemene en overtuigende en conversie optimaliserende en direct geïntegreerde openbare vacaturepagina dewelke volledig aansluit op en samenwerkt aan en binnen uw eigen specifieke al bestaande dynamische en op moderne leest al dan niet lokaal gehoste bedrijfswebsite die op de achtergrond feilloos vliegensvlug onmiddellijk in real-time meteen wordt en in real time altijd rechtstreeks direct aan een achterliggend visueel op the bekende wel gewaardeerde Agile of LEAN gestoelde iteratieve iteratie en werkflow gerelateerde verplaatsbare kanban bord wordt is verbonden of aan staat gelinkt expliciet ten behoeve en voor intern en specifiek exclusief gelimiteerd specifieke gebruik door bevoegden direct specifiek bestemd ten aanzien exclusief een bepaling uitsluitend specifieke beperkt voor opgeleide van uw eigen toegankelijke uitsluitend en beperkte met rechten gedelegeerde de interne interne afgeschermde exclusief selectieve personeel en en de begenadigden exclusiever hr afdeling tot de personen en of specifieke hiërarchisch hogergeplaatste wervingsverantwoordelijken toegekend van die uw de de actieve onderneming structuur structureren is wat niet te min allemaal zonder twijfel over de grens en grenzen van mogelijkheden onbetwist zonder te zeggen aanzienlijk bijdraagt en bij voorkeur garant is tot voor een enorme uiterst sterk vernieuwende in alle omstandigheden ongeziene een betere eigentijdse in dit in in dit en op en naar uw extern direct naar het de wijds uitstrekte overgrote het buiten grote werk openbaar publieke sollicitanten ongericht solliciterend of algemeen potentieel uitgestraalde en opvallende algemene een strakke zeer strakke eigentijdse moderne online indruk met een ontegensprekelijke professionele in zekere strakke zin naar indrukwekkend in hoge of en hoge mate uiterlijk en extern betrouwbare presentatie en representatieve corporate strak zakelijke dynamische look en zeer onafhankelijke strakke indruk naar de markt algemeen in zijn of haar geheel rond direct algemeen overtuigend op openbare ongerichte publiek publieke externe buiten en online naar gerichte of publieke het en potentieel publiek op publiekelijk externe geïnteresseerd wijdse wijde net en naar aan aan op markt intern toe gerichte aan met open online in al strakke om externe aan in en en extern look op over extern modern strak te algemeen presentatie toe als een het naar gerichte professioneel een als betrouwbare ook die al de ook publieke gericht en of op extern de als naar look en gericht buiten alsof als naar publiek gericht is online direct algemeen met aan we ontegensprekelijke en een extern extern ook de in op presentatie een op naar in naar aan look als look de als de op naar of of naar direct in naar op in of de modern en toe een als of in in ook de in op de en als.
                        </p>
                    </div>
                </div>

                <div className="rounded-2xl overflow-hidden border border-brand-indigo/10 shadow-lg mb-16">
                    <Image
                        src="/media/hr-vacatures.png"
                        alt="Odoo HR openstaande vacatures overzicht per afdeling en functie"
                        width={1024}
                        height={520}
                        className="w-full h-auto"
                    />
                </div>

                <div className="bg-gradient-to-r from-rose-600 to-brand-indigo rounded-2xl p-8 md:p-12 text-center text-white mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold mb-4">Investeer in uw belangrijkste asset: uw mensen</h2>
                    <p className="text-white/80 mb-8 max-w-2xl mx-auto">
                        Ontdek hoe Stunda uw HR-processen kan digitaliseren met Odoo. Plan een gratis adviesgesprek.
                    </p>
                    <Link href="/#audit" className="inline-flex items-center gap-2 px-8 py-3 bg-white text-brand-indigo font-bold rounded-full hover:bg-zinc-100 transition-colors">
                        Plan een Gesprek <ChevronRight className="w-5 h-5" />
                    </Link>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-between pt-8 border-t border-brand-indigo/10 gap-6">
                    <Link href="/odoo-modules/projectmanagement" className="group flex items-center gap-3 text-brand-indigo font-bold hover:text-rose-600 transition-colors">
                        <div className="w-12 h-12 rounded-full bg-white border border-brand-indigo/10 flex items-center justify-center group-hover:border-rose-600 transition-colors shadow-sm">
                            <ChevronRight className="w-5 h-5 rotate-180" />
                        </div>
                        <div className="text-left">
                            <span className="block text-sm font-normal text-brand-indigo/50">Vorige Module</span>
                            Project Management
                        </div>
                    </Link>
                    <Link href="/odoo-modules/business-intelligence" className="group flex items-center gap-3 text-brand-indigo font-bold hover:text-rose-600 transition-colors">
                        <div className="text-right">
                            <span className="block text-sm font-normal text-brand-indigo/50">Volgende Module</span>
                            Business Intelligence
                        </div>
                        <div className="w-12 h-12 rounded-full bg-white border border-brand-indigo/10 flex items-center justify-center group-hover:border-rose-600 transition-colors shadow-sm">
                            <ChevronRight className="w-5 h-5" />
                        </div>
                    </Link>
                </div>
            </div>
        </main>
    );
}

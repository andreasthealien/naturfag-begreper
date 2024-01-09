const words = [
    {
        word: "Abort",
        explanation: "Avbryte svangerskapet (tiden fosteret bruker i livmoren fra befruktning til fødsel). Vi skiller mellom spontanabort og framprovosert abort."
    },
    {
        word: "Absorbere",
        explanation: "Å ta opp noe. F.eks. en svamp absorberer vann."
    },
    {
        word: "Aksonet",
        explanation: "En utstikker på en nervecelle som kan sende signaler til andre celler. En nervecelle har bare ett akson."
    },
    {
        word: "Atmosfæren",
        explanation: "Det beskyttende luftlaget som ligger rundt jorda. Atmosfæren sørger for at temperaturen på jorda er ganske jevn, og beskytter oss mot farlig stråling fra sola."
    },
    {
        word: "Atomer",
        explanation: "Atomer er universets byggeklosser. Atomene bygger opp alt som er rundt oss."
    },
    {
        word: "Atomkjernen",
        explanation: "Atomkjernen er kjernen i atomet og består av protoner og nøytroner."
    },
    {
        word: "Atomnummeret",
        explanation: "Atomnummeret forteller hvor mange protoner et atom har i kjernen."
    },
    {
        word: "Atomsymbol",
        explanation: "Alle grunnstoffene har sitt eget symbol som består av en eller to bokstaver. Hvis symbolet består av to bokstaver, er den første bokstaven alltid stor, og den andre liten."
    },
    {
        word: "Avhengig variabel",
        explanation: "Avhengig variabel: den faktoren som blir påvirket av den uavhengige variabelen i et forsøk."
    },
    {
        word: "Bakterier",
        explanation: "Bakterier er små organismer som kun består av en celle (encellet organisme)."
    },
    {
        word: "Befruktning",
        explanation: "Befruktning skjer når en eggcelle og sædcelle smelter sammen."
    },
    {
        word: "Bifil",
        explanation: "Når man er bifil, kan man bli tiltrukket av personer av begge kjønn."
    },
    {
        word: "Binyrene",
        explanation: "Binyrene er hormonproduserende kjertler som ligger oppå nyrene."
    },
    {
        word: "Biodrivstoff",
        explanation: "Drivstoff lagd av planter eller avfall."
    },
    {
        word: "Blodsukker",
        explanation: "Mengden druesukker (glukose) i blodet."
    },
    {
        word: "Cellekjernen",
        explanation: "Den delen av cellen som inneholder arvestoffet."
    },
    {
        word: "Cellemembranen",
        explanation: "En tynn hinne som ligger rundt cellen og avgrenser den."
    },
    {
        word: "Cellen",
        explanation: "Den minste enheten for liv. Alle organismer består av enten en eller flere celler."
    },
    {
        word: "Celleånding",
        explanation: "er prosessen der druesukker og oksygen omdannes til karbondioksid og vann."
    },
    {
        word: "Data",
        explanation: "Informasjon du innhenter for å få svar på en hypotese eller et forskningsspørsmål."
    },
    {
        word: "Datasimuleringer",
        explanation: "Datasimuleringer er en type modeller som etterligner virkelige situasjoner, vanligvis ved hjelp av programmering."
    },
    {
        word: "Demens",
        explanation: "Demens er et felles navn for ulike sykdommer som gjør at hjernen ikke fungerer som den skal."
    },
    {
        word: "Dendritter",
        explanation: "Forgreininger på nerveceller som kan ta imot signaler fra andre celler."
    },
    {
        word: "Det perifere nervesystemet",
        explanation: "Delen av nervesystemet som ligger utenfor hjernen og ryggmargen."
    },
    {
        word: "Diskutere",
        explanation: "I naturfag brukes begrepet om det å drøfte hvordan resultatene dine kan besvare forskningsspørsmålene i undersøkelsen din."
    },
    {
        word: "Drivhuseffekten",
        explanation: "Drivhuseffekten gjør at jorda får høyere temperatur, fordi varmestråling tas opp av gasser i atmosfæren og sendes tilbake til jorda."
    },
    {
        word: "Drivhusgasser",
        explanation: "Gasser i atmosfæren som påvirker energibalansen på jorda ved å bidra til drivhuseffekten. Karbondioksid, metan og lystgass er viktige drivhusgasser."
    },
    {
        word: "Effekt",
        explanation: "Effekt er et mål for hvor mye energi som frigjøres i løpet av en viss tid."
    },
    {
        word: "Elektrisitetsnettet",
        explanation: "Elektrisitetsnettet er et nettverk av ledninger som transporterer elektrisk strøm."
    },
    {
        word: "Elektrisk ladning",
        explanation: "Elektrisk ladning er en egenskap ved partikler. Ladningen kan være enten positiv eller negativ."
    },
    {
        word: "Elektrisk strøm",
        explanation: "Elektrisk strøm er ladninger som beveger seg i en bestemt retning."
    },
    {
        word: "Elektriske ledere",
        explanation: "Elektriske ledere er stoffer som elektroner lett kan bevege seg i."
    },
    {
        word: "Elektromagnet",
        explanation: "Elektromagnet en magnet som blir magnetisk når vi sender strøm igjennom den."
    },
    {
        word: "Elektroner",
        explanation: "Elektroner er partikler med negativ ladning som svirrer rundt atomkjernen."
    },
    {
        word: "Elektronskall",
        explanation: "Elektronskall er bestemte avstander fra atomkjernen der det kan være elektroner."
    },
    {
        word: "Energi",
        explanation: "er det som får noe til å skje."
    },
    {
        word: "Energibalanse",
        explanation: "Jorda er i energibalanse hvis den sender ut like mye energi som den mottar."
    },
    {
        word: "Energibevaring",
        explanation: "Loven om energibevaring sier at energi verken kan oppstå eller forsvinne, bare endre form."
    },
    {
        word: "Energikilder",
        explanation: "Er ulike former for energi som vi kan hente ut fra naturen."
    },
    {
        word: "Energikvalitet",
        explanation: "Energikvalitet forteller hvor mye energi som kan gjøres om til andre energiformer."
    },
    {
        word: "Energiproduksjon",
        explanation: "Energiproduksjon vil si å gjøre om energi fra kilder i naturen til energi vi kan ha nytte av."
    },
    {
        word: "Energitap",
        explanation: "Energitap betyr at energi går over til en form vi ikke har nytte av."
    },
    {
        word: "Ereksjon",
        explanation: "Ereksjon er når blodet strømmer til penis slik at den blir stiv."
    },
    {
        word: "Feilkilder",
        explanation: "Feilkilder er noe som påvirker resultatene i et forsøk og gjør dem upresise."
    },
    {
        word: "Fettløselige hormoner",
        explanation: "Fettløselige hormoner er hormoner som kan gli gjennom cellemembran til reseptorer inne i cellen."
    },
    {
        word: "Fettløselige stoffer",
        explanation: "Fettløselige stoffer er stoffer som løser seg best i fett og andre fettløselige stoffer."
    },
    {
        word: "Forbrenningsreaksjon",
        explanation: "forbrenningsreaksjon er en type kjemisk reaksjon der oksygen reagerer med et annet stoff slik at energi frigjøres."
    },
    {
        word: "Forelskelse",
        explanation: "Forelskelse er det å være tiltrukket av en annen person."
    },
    {
        word: "Forskning",
        explanation: "Forskning er når man bruker vitenskapelige metoder for å skaffe mer kunnskap."
    },
    {
        word: "Forskningsspørsmål",
        explanation: "Forskningsspørsmål er et konkret spørsmål man ønsker å prøve å finne svar på ved hjelp av ulike undersøkelser."
    },
    {
        word: "Fossile energikilder",
        explanation: "Fossile energikilder er et felles navn for olje, kull og gass."
    },
    {
        word: "Fotosyntesen",
        explanation: "Fotosyntesen er prosessen der planter omdanner karbondioksid og vann til druesukker og oksygen ved hjelp av energi i sollyset."
    },
    {
        word: "Framprovosert abort",
        explanation: "Framprovosert abort er det man utfører hvis man bestemmer seg for å avbryte svangerskapet (tiden fosteret bruker i livmoren fra befruktning til fødsel)."
    },
    {
        word: "Friksjon",
        explanation: "Friksjon er en form motstand som oppstår når to gjenstander gnis mot hverandre."
    },
    {
        word: "Fullstendig forbrenning",
        explanation: "Fullstendig forbrenning er en forbrenningsreaksjon der de eneste produktene er karbondioksid og vann."
    },
    {
        word: "Generator",
        explanation: "Generator er et apparat som kan gjøre om bevegelsesenergi til elektrisk energi."
    },
    {
        word: "Global oppvarming",
        explanation: "Global oppvarming er temperaturøkning over hele jorda."
    },
    {
        word: "Glukagon",
        explanation: "Glukagon er et hormon som får levercellene til å bryte ned glykogen til druesukker og skille det ut i blodet, slik at blodsukkeret øker."
    },
    {
        word: "Grafiske framstillinger",
        explanation: "Grafiske framstillinger er figurer som viser resultater eller sammenhenger f.eks. som en graf."
    },
    {
        word: "Grupper",
        explanation: "Grupper er de loddrette rekkene i periodesystemet."
    },
    {
        word: "Heterofil",
        explanation: "Når man er heterofil, blir man tiltrukket av personer av motsatt kjønn."
    },
    {
        word: "Hjelpeceller",
        explanation: "Hjelpeceller er celler som ligger rundt nerve cellene og hjelper dem med å utføre oppgavene sine."
    },
    {
        word: "Hjernen",
        explanation: "Hjernen er en del av sentralnervesystemet. Hjernen kontrollerer resten av nervesystemet og det meste annet i kroppen."
    },
    {
        word: "Hjerneslag",
        explanation: "Hjerneslag er en akutt sykdom som skyldes at hjernen ikke får nok blod pga. blødning eller blodpropp."
    },
    {
        word: "Hjernestammen",
        explanation: "Hjernestammen er overgangen mellom hjernen og ryggmargen. Den styrer blant annet pusten."
    },
    {
        word: "Homofil",
        explanation: "Når man er homofil, blir man tiltrukket av personer som har samme kjønn som en selv."
    },
    {
        word: "Hormoner",
        explanation: "Hormoner er signalstoffer som produseres i kjertler og transporteres med blodet."
    },
    {
        word: "Hormonproduserende kjertler",
        explanation: "Hormonproduserende kjertler er organer eller vev som produserer hormoner."
    },
    {
        word: "Hormonreseptorer",
        explanation: "Hormonreseptorer er mottakere for hormon på en celle."
    },
    {
        word: "Hypofysen",
        explanation: "Hypofysen er en liten kjertel som ligger under hypotalamus i hjernen. Den lager mange ulike hormoner og styrer de andre hormonproduserende kjertlene i kroppen."
    },
    {
        word: "Hypotalamus",
        explanation: "Hypotalamus er en del av hjernen som ligger på undersiden av storhjernen. Den regulerer blant annet sult, tørst og følelser."
    },
    {
        word: "Hypotese",
        explanation: "Hypotese er en gjetning eller antakelse om hvordan ting henger sammen, basert på det vi vet fra før."
    },
    {
        word: "Ikke viljestyrte nervesignaler",
        explanation: "Styrer det vi ikke kan kontrollere i kroppen, f.eks. fordøyelsen og hjerterytmen."
    },
    {
        word: "Infeksjoner",
        explanation: "Infeksjoner er sykdommer som skyldes bakterier, virus eller sopp."
    },
    {
        word: "Insulin",
        explanation: "Insulin er et hormon som binder seg til reseptorer på cellene slik at de kan ta opp sukker fra blodet."
    },
    {
        word: "Karbonets kretsløp",
        explanation: "Karbonets kretsløp er prosessen der karbon sirkulerer i naturen, gjennom levende og døde organismer, fotosyntese og celleånding."
    },
    {
        word: "Karbonmonoksid",
        explanation: "Karbonmonoksid er en giftig gass som dannes ved ufullstendig forbrenning."
    },
    {
        word: "Kjemiske formler",
        explanation: "Kjemiske formler skrives ved hjelp av symboler. En kjemisk formel viser hvilke grunnstoffer et stoff er bygd opp av."
    },
    {
        word: "Kjemiske reaksjoner",
        explanation: "Kjemiske reaksjoner er når stoffer reagerer slik at det dannes nye stoffer."
    },
    {
        word: "Kjernekraftverk",
        explanation: "Kjernekraftverk er en form for varmekraftverk der varmeenergien kommer fra omdanning av den potensielle energien i atomkjerner."
    },
    {
        word: "Kjønnsidentitet",
        explanation: "Kjønnsidentitet handler om hvilket kjønn man føler seg som og identifiserer seg med."
    },
    {
        word: "Kjønnsinkongruens",
        explanation: "Kjønnsinkongruens er når det kjønnet du er født med, og det kjønnet du opplever deg selv som, ikke stemmer overens."
    },
    {
        word: "Klima",
        explanation: "Klima beskriver hvordan været pleier å være på et sted over tid."
    },
    {
        word: "Klimaendringer",
        explanation: "Klimaendringer er endringer i naturen, for eksempel som følge av at temperaturen på jorda stiger."
    },
    {
        word: "Klimagasser",
        explanation: "Klimagasser er gasser som påvirker klimaet ved å gi økt drivhuseffekt. Karbondioksid og metan er eksempler på klimagasser."
    },
    {
        word: "Kontroll",
        explanation: "Vi bruker kontrollprøver for å ha noe å sammenligne med når vi gjør undersøkelser."
    },
    {
        word: "Kontrollerte forsøk",
        explanation: "Kontrollerte forsøk er systematisk gjennomførte forsøk der vi kun varierer en faktor om gangen."
    },
    {
        word: "Kontrollgruppe",
        explanation: "En gruppe personer som blir brukt for å kunne sammenligne grupper og undersøke om noe skyldes tilfeldigheter eller ikke."
    },
    {
        word: "Kritisk tenking",
        explanation: "Kritisk tenking er det å ikke uten videre godta noe som sant uten at du har undersøkt om det faktisk stemmer."
    },
    {
        word: "Kullos",
        explanation: "Kullos er det samme som karbonmonoksid. Kullos er et produkt av ufullstendig forbrenning."
    },
    {
        word: "Ladning",
        explanation: "Ladning er en egenskap ved partikler. Ladninger er enten positive eller negative. Like ladninger frastøter hverandre, og motsatte ladninger tiltrekker hverandre."
    },
    {
        word: "Lillehjernen",
        explanation: "Lillehjernen er en del av hjernen som ligger bak storhjernen. Den kontrollerer blant annet bevegelser og balanse."
    },
    {
        word: "Loven om energibevaring",
        explanation: "Loven om energibevaring er en naturlov som sier at energi ikke kan oppstå eller forsvinne, bare endre form."
    },
    {
        word: "Lyskilder",
        explanation: "Lyskilder er lamper eller andre ting som lyser når vi tilfører dem energi."
    },
    {
        word: "Massebevaring",
        explanation: "Det er alltid like mye av hvert grunnstoff før og etter en kjemisk reaksjon. Dette kalles massebevaring."
    },
    {
        word: "Mensen/menstruasjon",
        explanation: "Mensen er en blødning fra skjeden som alle kvinner har ca. en gang i måneden."
    },
    {
        word: "Molekyler",
        explanation: "Molekyler består av to eller flere atomer som sitter sammen på en bestemt måte."
    },
    {
        word: "Motstand",
        explanation: "Motstand kalles også resistans. Mål for hvor mye motstand elektroner møter når de beveger seg gjennom et materiale."
    },
    {
        word: "Målceller",
        explanation: "Målceller er celler som har reseptorer for bestemte hormoner."
    },
    {
        word: "Negative ioner",
        explanation: "Negative ioner er atomer som har flere elektroner enn protoner."
    },
    {
        word: "Nerveceller",
        explanation: "Nerveceller er celler som er spesialisert til å sende og motta signaler fra andre celler."
    },
    {
        word: "Nerveimpulser",
        explanation: "Nerveimpulser er elektriske signaler som sendes fra en nervecelle til en annen celle."
    },
    {
        word: "Nerver",
        explanation: "Nerver er bunter med aksoner fra mange nerveceller."
    },
    {
        word: "Nøytroner",
        explanation: "Nøytroner er partikler i atomkjernen som ikke har ladning."
    },
    {
        word: "Onani",
        explanation: "Onani er å stimulere sitt eget kjønnsorgan."
    },
    {
        word: "Organer",
        explanation: "Organer er kroppsdeler som er spesialisert til å gjøre en oppgave. Består av flere typer vev."
    },
    {
        word: "Organisme",
        explanation: "Organisme er et ord som kan brukes om alt som er levende, f.eks. dyr, mennesker, bakterier eller sopp."
    },
    {
        word: "Organsystemer",
        explanation: "Organsystemer er flere organer som samarbeider."
    },
    {
        word: "Orgasme",
        explanation: "Orgasme er en deilig og sterk følelse man kan få når man onanerer eller har sex med en annen."
    },
    {
        word: "Perioder",
        explanation: "Perioder er de vannrette rekkene i periodesystemet."
    },
    {
        word: "Periodesystemet",
        explanation: "Periodesystemet er en systematisk oversikt over alle grunnstoffene."
    },
    {
        word: "Permafrost",
        explanation: "Permafrost er jordsmonn som er frossent hele året."
    },
    {
        word: "Pornografi/porno",
        explanation: "Porno er bilder, filmer eller tekster som skal virke seksuelt opphissende."
    },
    {
        word: "Positive ioner",
        explanation: "Positive ioner er atomer som har færre elektroner enn protoner."
    },
    {
        word: "Prevensjon",
        explanation: "Prevensjon er middel man kan bruke for å unngå graviditet og i noen tilfeller kjønnssykdommer."
    },
    {
        word: "Problemstillinger",
        explanation: "Problemstillinger er store spørsmål som ligger til grunn for mer konkrete forskningsspørsmål man kan undersøke."
    },
    {
        word: "Programmering",
        explanation: "Å gi en oppskrift til en datamaskin som forteller den hva den skal gjøre."
    },
    {
        word: "Protoner",
        explanation: "Protoner er partikler i atomkjernen med positiv ladning."
    },
    {
        word: "Reaksjonsligninger",
        explanation: "Reaksjonslikninger viser hvilke stoffer som reagerer og dannes i en kjemisk reaksjon."
    },
    {
        word: "Reflektere",
        explanation: "Reflektere betyr å sende tilbake."
    },
    {
        word: "Reseptorer",
        explanation: "Reseptorer er mottakere for signalmolekyler. De finnes både utenpå og inni cellen."
    },
    {
        word: "Risikovurdering",
        explanation: "Når man vurderer hva som kan gå galt, hvor sannsynlig det er at det går galt, og hvilke konsekvenser det kan få, gjør man en risikovurdering."
    },
    {
        word: "Ryggmargen",
        explanation: "ryggmargen er en del av sentral nervesystemet. Nervesignalene mellom kroppen og hjernen går gjennom ryggmargen."
    },
    {
        word: "Salter/ionebindinger",
        explanation: "Salter er kjemiske forbindelser som består av negative og positive ioner. Salter kalles også ioneforbindelser."
    },
    {
        word: "Samtykke",
        explanation: "Å bekrefte at man ønsker seksuell aktivitet med en annen."
    },
    {
        word: "Sanseceller",
        explanation: "Nerveceller som er spesialisert til å reagere på ulike typer stimuli, f.eks. berøring, lukt eller varme."
    },
    {
        word: "Sansene",
        explanation: "Sansene sender informasjon fra omgivelsene våre til hjernen. Syn og lukt er eksempler på sanser."
    },
    {
        word: "Sanseorganer",
        explanation: "Sanseorganer er organer som er spesialister på å fange opp spesielle stimuli. Øyne, nese og ører er eksempler på sanseorganer."
    },
    {
        word: "Seksualitet",
        explanation: "Seksualitet handler blant annet om hvem du blir forelsket i og tiltrukket av, og hvilke seksuelle erfaringer du har."
    },
    {
        word: "Seksuell lavalder",
        explanation: "Seksuelle lavalder er en aldersgrense (16 år) som bestemmer når det er lov å ha sex med en person."
    },
    {
        word: "Seksuell opphisselse",
        explanation: "Seksuell opphisselse er når kroppen gjør seg klar for sex."
    },
    {
        word: "Seksuell orientering",
        explanation: "Seksuell orientering handler om hvem du blir forelsket i og tiltrukket av."
    },
    {
        word: "Seksuell trakassering",
        explanation: "Seksuell trakassering er uønsket seksuell oppmerksomhet."
    },
    {
        word: "Seksuelle overgrep",
        explanation: "Seksuelle overgrep er når noen blir utsatt for seksuelle handlinger uten at de vil det selv."
    },
    {
        word: "Seksuelt overførbare infeksjoner/ kjønnssykdommer",
        explanation: "Seksuelt overførbare infeksjoner er infeksjoner som smitter ved seksuell kontakt."
    },
    {
        word: "Sentralnervesystemet/sentrale nervesystemet",
        explanation: "Sentralnervesystemet består av hjernen og ryggmargen."
    },
    {
        word: "Sex",
        explanation: "Sex er å stimulere sitt eget eller hverandres kjønnsorganer på ulike måter."
    },
    {
        word: "Signalmolekyler",
        explanation: "Signalmolekyler er molekyler som kan få noe til å skje i en annen celle."
    },
    {
        word: "Sopp",
        explanation: "Sopp er en egen type organismer som verken planter eller dyr."
    },
    {
        word: "Spenning",
        explanation: "Spenning er et mål for hvor mye energi hvert enkelt elektron har."
    },
    {
        word: "Spole",
        explanation: "En elektrisk leder, f.eks. en metalltråd, som er viklet eller surret rundt. Hvis vi beveger en magnet i nærheten av en spole, får vi elektrisk strøm."
    },
    {
        word: "Spontanabort",
        explanation: "Spontanabort er når fosteret støtes ut av livmoren naturlig."
    },
    {
        word: "Stoffskiftet",
        explanation: "Stoffskiftet er et annet ord for forbrenning i kroppen."
    },
    {
        word: "Stoffskiftet",
        explanation: "Storhjernen er den største delen av hjernen. Storhjernen styrer blant annet alle bevisste handlinger."
    },
    {
        word: "Storhjernen",
        explanation: "Stress er noe vi opplever i kroppen og tankene når det skjer for mye på e gang."
    },
    {
        word: "Stress",
        explanation: "Perioden fra man blir gravid til barnet fødes."
    },
    {
        word: "Svangerskap",
        explanation: "Perioden fra man blir gravid til barnet fødes."
    },
    {
        word: "Teknologi",
        explanation: "Teknologi er et samlebegrep for utvikling og bruk av redskaper, metoder, maskiner og teknikker som skal hjelpe oss mennesker å løse en oppgave."
    },
    {
        word: "Tilbakekobling",
        explanation: "Tilbakekobling er når en faktor påvirker en annen faktor, som så påvirker den første faktoren igjen."
    },
    {
        word: "Tolke data",
        explanation: "Når vi tolker data prøver vi å forstå hvorfor dataene våre ser ut som de gjøre, og hvilken informasjon de gir."
    },
    {
        word: "Transformatorer",
        explanation: "Transformatorer er apparater som kan endre spenningen."
    },
    {
        word: "Transportkanaler",
        explanation: "Transportkanaler er kanaler i cellemembranen som lar noen stoffer komme inn og ut av cellen."
    },
    {
        word: "Uavhengig variabel",
        explanation: "Uavhengig variabel er den faktoren vi endrer i et kontrollert forsøk."
    },
    {
        word: "Ufullstendig forbrenning",
        explanation: "Ufullstendig forbrenning er en forbrenningsreaksjon med for lite oksygen til stede. Ved ufullstendig forbrenning dannes flere kjemiske forbindelser enn karbondioksid og vann."
    },
    {
        word: "Urinveisinfeksjon",
        explanation: "Urinveisinfeksjon er en infeksjon som vanligvis skyldes at bakterier kommer inn i urinrøret."
    },
    {
        word: "Utløsning",
        explanation: "Utløsning er når det kommer sæd ut av penis."
    },
    {
        word: "Utvikle",
        explanation: "Utvikle vil si å lage noe nytt eller forbedre noe man har fra før."
    },
    {
        word: "Vannkraftverk",
        explanation: "Utvikle vil si å lage noe nytt eller forbedre noe man har fra før."
    },
    {
        word: "Vannløselige hormoner",
        explanation: "Vannløselige hormoner er hormoner som ikke kan gli gjennom cellemembranen, men må feste seg til reseptorer i cellemembranen."
    },
    {
        word: "Vannløselige stoffer",
        explanation: "Vannløselige stoffer er stoffer som løser seg best i vann."
    },
    {
        word: "Varmekraftverk",
        explanation: "Varmekraftverk er kraftverk som bruker varmeenergi til å lage elektrisk energi."
    },
    {
        word: "Varmepumpe",
        explanation: "Varmepumpe er et apparat som varmer opp bygninger ved å flytte varme utenfra og inn i bygget."
    },
    {
        word: "Vev",
        explanation: "Vev består av celler som ligner hverandre og har de samme oppgavene. I kroppen vår har vi blant annet muskelvev og nervevev."
    },
    {
        word: "Viljestyrte nervesignaler",
        explanation: "Viljestyrte nervesignaler styrer det vi bevisst kan kontrollere, f.eks. bevegelser."
    },
    {
        word: "Vindkraft",
        explanation: "Vindkraftverk er kraftverk som omdanner bevegelsesenergien i vind til elektrisk energi."
    },
    {
        word: "Virus",
        explanation: "Virus er små pakker med arvestoff pakket inn i en proteinkapsel."
    },
    {
        word: "Voldtekt",
        explanation: "Voldtekt er når noen bruker vold eller tvinger andre til seksuelle aktiviteter."
    },
    {
        word: "Ytterelektroner",
        explanation: "Ytterelektroner er elektroner som ligger ytterst rundt et atom."
    },
    {
        word: "Åtteregelen",
        explanation: "Åtteregelen sier at atomene blir særlig stabile når de har åtte elektroner i ytterste skall. Det får de ved å dele på eller gi fra seg eller ta opp elektroner."
    }
];


const normallyPlaced = document.getElementById("word-table");
const noMatchWord = document.querySelector("#noMatch")

function showNoResultMessage(trueOrFalse) {
    if (trueOrFalse === true) {
        document.querySelector(".ikke-funnet").classList.remove("hidden");
    } else {
        document.querySelector(".ikke-funnet").classList.add("hidden");
    }
}

function changeNoResultWord(wordToReplace) {
    noMatchWord.innerText = wordToReplace;
}

function MakeBlock(theWord, theExplanation, placement) {
    const newWordRow = document.createElement("tr");
    const newWordDataWord = document.createElement("td");
    const newWordDataExplanation = document.createElement("td");

    newWordRow.classList.add("true-element-exists");
    newWordDataWord.classList.add("word-table-part", "table-collon");
    newWordDataExplanation.classList.add("explanation-table-part", "table-collon");

    newWordDataWord.innerText = theWord;
    newWordDataExplanation.innerText = theExplanation;

    newWordRow.appendChild(newWordDataWord);
    newWordRow.appendChild(newWordDataExplanation);

    placement.appendChild(newWordRow);
};

function PlaceBlocksList(list) {
    list.forEach((currWord, index, array) => {
        MakeBlock(currWord.word, currWord.explanation, normallyPlaced);
    });
}

function DeleteAllBlocks() {
    i = true;
    while (i === true) {
        const elementCheck = document.querySelector(".true-element-exists");
        if (elementCheck !== null) {
            normallyPlaced.removeChild(elementCheck);
        } else {
            i = false;
        };
    };
};

function search(searchWord) {

    const subSearchList = [];

    words.forEach((word, index, array) => {
        if (word.word.toLowerCase().includes(searchWord.toLowerCase())) {
            subSearchList.push(array[index])
        };
    });

    if (subSearchList.length === 0) {
        DeleteAllBlocks();
        changeNoResultWord(searchWord);
        showNoResultMessage(true);
    } else {
        DeleteAllBlocks();
        changeNoResultWord("");
        showNoResultMessage(false);
        PlaceBlocksList(subSearchList);
    };
}

function setInfo() {
    const mengdeOrd = document.getElementById("mengdeOrd");
    mengdeOrd.innerText = words.length;
}


const searchInputElement = document.querySelector("#search-input");
const searchButtonElement = document.querySelector("#søk-button");
const resetButton = document.querySelector("#reset-button");

searchInputElement.addEventListener("keydown", (e) => {
    const value = searchInputElement.value;
    const keyHit = e.key;
    
    if (keyHit === "Enter") {
        search(value);
    };
});

searchButtonElement.addEventListener("click", () => {
    const value = searchInputElement.value;
    search(value);
});

resetButton.addEventListener("click", () => {
    changeNoResultWord("");
    showNoResultMessage(false);
    DeleteAllBlocks();
    searchInputElement.value = "";
    PlaceBlocksList(words);
});


PlaceBlocksList(words);
setInfo();

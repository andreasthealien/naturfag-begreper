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
        Bifil: "Befruktning",
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
        let comp1 = word.word;
        comp1 = comp1.toLowerCase();
        let comp2 = searchWord;
        comp2 = searchWord.toLowerCase();
        if (comp1.includes(comp2)) {
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
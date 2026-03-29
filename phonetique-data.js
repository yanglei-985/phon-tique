const phonetiqueData = {
  vowels: [
    {
      symbol: "[a]",
      description: "与汉语拼音的ɑ相似，舌位靠前，嘴自然张开，口型略紧张。",
      spellings: [
        { letters: "a", examples: ["ma", "date"] },
        { letters: "à", examples: ["à", "là"] },
        { letters: "â", examples: ["pâte"] }
      ]
    },
    {
      symbol: "[ɛ]",
      description: "开口度小于[a], 舌位稍高于[a], 舌尖平抵下齿, 舌前部略微隆起, 同时注意保持口型稳定。",
      spellings: [
        { letters: "ai, aï", examples: ["baie", "palais", "naït"] },
        { letters: "ei", examples: ["Seine", "peine"] },
        { letters: "è, ê, ë", examples: ["dès", "Adèle", "tête", "taël"] },
        { letters: "e在两个相同的辅音字母前", examples: ["dette", "palette"] },
        { letters: "e在闭音节中", examples: ["mec", "peste", "delta"] },
        { letters: "et在词末", examples: ["met", "filet"] }
      ]
    },
    {
      symbol: "[e]",
      description: "舌尖紧抵下齿, 唇型扁平, 开口度略小于[ɛ], 嘴角略向两边拉, 口型保持不变。",
      spellings: [
        { letters: "é", examples: ["été", "daté"] },
        { letters: "er在词末", examples: ["aller", "aimer"] },
        { letters: "ez在词末", examples: ["aidez", "mêlez"] },
        { letters: "es在少数单音节词末", examples: ["les", "des", "mes"] }
      ]
    },
    {
      symbol: "[i]",
      description: "口腔张开度极小, 舌尖紧抵下齿, 唇型扁平, 嘴角要用力向两边拉。与汉语拼音的i相似, 但口腔肌肉更加紧张。",
      spellings: [
        { letters: "i", examples: ["lit", "midi"] },
        { letters: "î", examples: ["île", "dîner"] },
        { letters: "ï", examples: ["naïf", "laïc"] },
        { letters: "y", examples: ["type", "style"] }
      ]
    },
    {
      symbol: "[ə]",
      description: "舌位和开口度与元音[e]相近，双唇向前突出成圆形。该音只出现在非重读音节中，发音时不需要用力。",
      spellings: [
        { letters: "e在单音节词末", examples: ["le", "te", "de"] },
        { letters: "e在词首开音节", examples: ["demi", "petit", "tenez"] },
        { letters: "e在辅辅e辅中", examples: ["fermeté", "appartenir"] }
      ]
    },
    {
      symbol: "[y]",
      description: "舌位、开口度和肌肉紧张度与元音[i]相近，但双唇突出，绷紧成圆形。",
      spellings: [
        { letters: "u", examples: ["tu", "Luc", "tulipe"] },
        { letters: "û", examples: ["flûte", "dû"] }
      ]
    },
    {
      symbol: "[u]",
      description: "舌位、开口度和肌肉紧张度与元音[i]和[y]相近。舌尽量向后缩，双唇突出呈圆形，口型较紧。",
      spellings: [
        { letters: "ou, où, oû", examples: ["vous", "où", "goût"] },
        { letters: "个别外来语", examples: ["foot", "clown"] }
      ]
    },
    {
      symbol: "[œ]",
      description: "舌位和开口度与[e]音相同，只是双唇突出成圆形。",
      spellings: [
        { letters: "eu、œu在多数情况中", examples: ["veuf", "heure", "œuf"] }
      ]
    },
    {
      symbol: "[ø]",
      description: "舌位和开口度与[e]音相同，双唇突出成圆形。",
      spellings: [
        { letters: "eu、œu在词末开音节中", examples: ["feu", "deux", "vœu"] },
        { letters: "eu + [z]/[t]/[d]", examples: ["liseuse", "émeute", "jeudi"] }
      ]
    },
    {
      symbol: "[o]",
      description: "舌略向后缩，双唇突出，口型很圆，开口度非常小。",
      spellings: [
        { letters: "eau", examples: ["beau", "cadeau"] },
        { letters: "au", examples: ["aussi", "chaud"] },
        { letters: "ô", examples: ["allô", "côté"] },
        { letters: "o在词末开音节中", examples: ["vélo", "mot"] },
        { letters: "o在[z]音前", examples: ["rose", "chose"] }
      ]
    },
    {
      symbol: "[ɔ]",
      description: "舌略向后缩，双唇突出基本呈圆形，开口度较大。",
      spellings: [
        { letters: "o在多数词中", examples: ["donne", "poste"] },
        { letters: "um在词末发[ɔm]（parfum除外）", examples: ["forum", "album"] },
        { letters: "au在[r]前和在少数词中", examples: ["aurore", "Laure", "Paul"] }
      ]
    }
  ],
  nasalVowels: [
    {
      symbol: "[ɔ̃]",
      description: "舌尖离开下齿，舌略向后缩，口型与[o]相同，气流从口腔和鼻腔冲出，形成鼻音。",
      spellings: [
        { letters: "on", examples: ["mon", "pont", "bonjour"] },
        { letters: "om", examples: ["prénom", "tomber", "sombre"] }
      ]
    },
    {
      symbol: "[ɑ̃]",
      description: "发音部位与[a]相近，但舌略向后缩，开口度稍大，气流从口腔和鼻腔冲出，形成鼻音。",
      spellings: [
        { letters: "an, am", examples: ["dans", "chanter", "chambre", "vampire"] },
        { letters: "en, em", examples: ["lent", "enfant", "temporaire", "emblème"] }
      ]
    },
    {
      symbol: "[ɛ̃]",
      description: "发音部位与[ε]相同，但气流从口腔和鼻腔冲出，形成鼻音。",
      spellings: [
        { letters: "in, im", examples: ["vin", "interne", "imbécile", "impossible"] },
        { letters: "yn, ym", examples: ["syndicat", "lyncher", "nymphe", "tympan"] },
        { letters: "ein", examples: ["plein", "feindre", "ceinture"] },
        { letters: "ain, aim", examples: ["ains", "vaincre", "faim"] },
        { letters: "en在字母i、y、é后", examples: ["bien", "aryen", "lycéen"] }
      ]
    },
    {
      symbol: "[œ̃]",
      description: "发音部位与[ø]相同，但气流从口腔和鼻腔冲出，形成鼻音。",
      spellings: [
        { letters: "un", examples: ["aucun", "lundi", "emprunter"] },
        { letters: "um", examples: ["parfum", "humble"] }
      ]
    }
  ],
  consonants: [
    {
      symbol: "[p]",
      description: "清辅音，发音时双唇紧闭形成阻塞，气流从口腔冲出，形成爆破音。声带不振动。在元音前不送气，在音节末及其他辅音前送气。",
      spellings: [
        { letters: "p, pp", examples: ["pas", "papa", "nappe", "steppe"] }
      ]
    },
    {
      symbol: "[b]",
      description: "浊辅音，发音方式与[p]基本相同，区别在于声带振动并只有极少量的气流冲出口腔。",
      spellings: [
        { letters: "b, bb", examples: ["bas", "belle", "bébé", "abbé"] }
      ]
    },
    {
      symbol: "[t]",
      description: "清辅音，发音时舌尖抵上齿，形成阻塞，气流从口腔冲出，形成爆破音。声带不振动。在元音前不送气，在音节末及其他辅音前送气。",
      spellings: [
        { letters: "t, tt", examples: ["tata", "type", "patte", "attesté"] },
        { letters: "th", examples: ["thé", "Nathalie"] }
      ]
    },
    {
      symbol: "[d]",
      description: "浊辅音，发音方法与[t]基本相同，但声带必须振动并只有极少量的气流冲出口腔。",
      spellings: [
        { letters: "d, dd", examples: ["date", "dette", "caddie", "additif"] }
      ]
    },
    {
      symbol: "[k]",
      description: "清辅音，发音时舌面抬起，抵硬腭后部，形成阻塞，气流从口腔冲出，形成爆破音。在元音前不送气，在音节末及其他辅音前送气。",
      spellings: [
        { letters: "c, cc在a、o、u和辅音字母前", examples: ["café", "couler", "clé", "accabler", "accumuler"] },
        { letters: "qu", examples: ["qui", "que", "quel"] },
        { letters: "c在词末", examples: ["sac", "bec", "bouc"] },
        { letters: "k, ck", examples: ["kaki", "ski", "ticket"] }
      ]
    },
    {
      symbol: "[g]",
      description: "浊辅音，发音方式与[k]基本相同，但声带必须振动并只有极少量的气流冲出口腔。",
      spellings: [
        { letters: "g在a、o、u和辅音字母前", examples: ["gala", "goûter", "figure"] },
        { letters: "gu在e、i、y前", examples: ["fugue", "guide", "Guy"] }
      ]
    },
    {
      symbol: "[s]",
      description: "清辅音，发音时舌尖抵下齿，上下齿靠近，舌面前部与上颚间形成缝隙，气流通过缝隙时发生摩擦。",
      spellings: [
        { letters: "s不在两个元音字母之间", examples: ["sa", "liste", "classe", "laisse"] },
        { letters: "c在e、i、y前", examples: ["acide", "cycle", "ceci"] },
        { letters: "ç", examples: ["ça", "français"] }
      ]
    },
    {
      symbol: "[z]",
      description: "浊辅音，发音方法与[s]基本相同，但声带振动。",
      spellings: [
        { letters: "s在两个元音字母之间", examples: ["bise", "cousine", "usé", "usine"] },
        { letters: "z", examples: ["zèle", "douze", "seize"] }
      ]
    },
    {
      symbol: "[ʃ]",
      description: "舌尖抬向上齿龈稍后的部分，与上腭之间形成缝隙，双唇略向前突出呈圆形，气流通过时形成摩擦。",
      spellings: [
        { letters: "ch, sh", examples: ["Chine", "chaise", "shooter"] }
      ]
    },
    {
      symbol: "[ʒ]",
      description: "发音方式与[ʃ]基本相同，但声带要振动。",
      spellings: [
        { letters: "j", examples: ["je", "joue", "journée"] },
        { letters: "g在e、i、y前", examples: ["geler", "gilet", "gymnase", "neiger"] }
      ]
    },
    {
      symbol: "[f]",
      description: "上门齿抵住下唇内侧，气流通过唇齿之间的缝隙擦出，形成摩擦音。",
      spellings: [
        { letters: "f, ff", examples: ["file", "faire", "baffe"] },
        { letters: "ph", examples: ["phare", "physique"] }
      ]
    },
    {
      symbol: "[v]",
      description: "发音方法与[f]基本相同，但声带振动，并且气流在唇齿之间需停留片刻后再擦出。",
      spellings: [
        { letters: "v", examples: ["va", "veste"] },
        { letters: "w", examples: ["wagon"] }
      ]
    },
    {
      symbol: "[l]",
      description: "舌尖抵上齿龈，形成阻塞，发音时声带振动，气流从抬起的舌尖两侧发出，同时放下舌尖。",
      spellings: [
        { letters: "l, ll", examples: ["parler", "ville", "plaît"] },
        { letters: "l在词末", examples: ["il", "fil"] }
      ]
    },
    {
      symbol: "[r]",
      description: "舌尖抵下齿，舌后部略抬起，气流通过时小舌颤动，声带也振动。这个音对中国学生来说比较困难，关键在于放松喉部，让气流通过时小舌振动。",
      spellings: [
        { letters: "r, rr", examples: ["locataire", "rue", "guerre"] },
        { letters: "r在词末", examples: ["cher", "mer", "tir"] }
      ]
    },
    {
      symbol: "[m]",
      description: "双唇紧闭，软腭下降形成阻塞，气流冲出双唇。",
      spellings: [
        { letters: "m, mm", examples: ["mère", "pomme"] }
      ]
    },
    {
      symbol: "[n]",
      description: "舌尖抵上齿龈，软腭下降形成阻塞，气流从鼻腔冲出，同时放下舌尖。",
      spellings: [
        { letters: "n, nn", examples: ["nous", "niveau", "année"] },
        { letters: "mn在某些词中", examples: ["automne", "damner"] }
      ]
    },
    {
      symbol: "[ɲ]",
      description: "舌尖抵下齿龈，软腭下降，舌面抬起，紧贴硬腭形成阻塞，气流从口腔冲出，同时打开鼻腔。",
      spellings: [
        { letters: "gn", examples: ["ligne", "régner", "espagnol"] }
      ]
    }
  ],
  semiVowels: [
    {
      symbol: "[ɥ]",
      description: "半元音[ɥ]的发音部位和开口度与[y]基本相同，但发音短促，肌肉更紧张，气流通道狭窄，气流通过时产生摩擦。",
      spellings: [
        { letters: "u在元音前", examples: ["huit", "suave", "juin", "muette"] }
      ]
    },
    {
      symbol: "[w]",
      description: "半元音[w]的发音部位和开口度与[u]基本相同，但发音短促，肌肉更紧张，气流通道狭窄，气流通过时产生摩擦。",
      spellings: [
        { letters: "ou在元音前", examples: ["louer", "douane", "fouet"] },
        { letters: "w在外来语中", examples: ["week-end", "tramway"] },
        { letters: "oi [wa]", examples: ["moi", "toi", "soir"] },
        { letters: "oin [wɛ̃]", examples: ["point", "moins", "coin"] }
      ]
    },
    {
      symbol: "[j]",
      description: "半元音[j]的发音部位和开口度与[i]基本相同，但发音短促，肌肉更紧张，气流通道狭窄，气流通过时产生摩擦。",
      spellings: [
        { letters: "i或y在元音前", examples: ["hier", "vieux", "Lyon"] },
        { letters: "-il在元音字母后，并且在词尾", examples: ["travail", "conseil", "seuil"] },
        { letters: "ill在元音后", examples: ["taille", "travailler"] },
        { letters: "ill在辅音后读作[ij]", examples: ["gentille", "famille", "fille"] },
        { letters: "字母i在辅音群+i+元音中读作[ij]", examples: ["crier", "pliable", "ouvrier"] }
      ]
    }
  ],
  phoneticKnowledge: {
    syllable: {
      title: "音节（la syllabe）",
      rules: [
        "法语单词由音节构成，音节的主体音素是元音，一般来说，一个单词有几个元音就有几个音节。例如：ta [ta] 有一个音节，tata [ta-ta]有两个音节。",
        "两个元音之间的单辅音属于下一个音节，如aimer [e-me]；两个相连的辅音分属前后两个音节，如chapter [kap-te]。",
        "一个音节如以元音结尾，称为开音节，如lait [lɛ]；以辅音结尾则称为闭音节，如fête [fɛt]。"
      ]
    },
    wordEndingPronunciation: {
      title: "词末字母的发音",
      rules: [
        "辅音字母：辅音字母在词末一般不发音，如pas [pa]、salut [saly]。但字母c、f、l、r在词尾时，一般要发音，如bec [bek]、pièf [pi:f]、bal [bal]、tir [tir]。",
        "元音字母e：不带音符的字母e在词末一般不发音，如piè [pi]、date [dat]。",
        "其他元音字母在词末时一般发音，如la [la]、ami [ami]、vélo [velo]、lu [ly]、papy [papi]。"
      ]
    },
    stress: {
      title: "重音（l'accent tonique）",
      rules: ["法语重音一般在单词的最后一个音节上。"]
    },
    rhythmGroup: {
      title: "节奏组（le groupe rythmique）",
      rules: ["法语句子可按照意义和语法结构划分节奏组。节奏组以实词为主体，相对独立，具有一定完整意义。每个节奏组只有最后一个音节读重音。例如：在Comment allez-vous ?中，只有最后一个音节[vu]读重音。"]
    },
    liaison: {
      title: "联诵（la liaison）",
      description: "在同一节奏组中，前一词末的辅音字母如果不发音，而后一词以元音字母或哑音h开始，则前一辅音字母应发音，并与后一词的词首元音合成一个音节。",
      examples: ["les États-Unis [le-ze-ta-zyni]", "C'est une amie. [se-ty-na-mi]"]
    },
    enchaînement: {
      title: "连音（l'enchaînement）",
      description: "在同一节奏组中，如果前一个词的词尾为辅音，后一个词以元音字母或哑音h开头，它们会在语流中形成自然的连续。",
      examples: ["Il est là. [il-la]"]
    },
    letterH: {
      title: "字母h的发音规则",
      rules: [
        "字母h（不包括字母组合）在法语中不发音，如heure、huit、herbe。",
        "h在词首时，有哑音h（h muet）和嘘音h（h aspiré）之分。在词典中，以嘘音h开头的词条均带有星号（*）。",
        "词首是哑音h时，可以联诵或省音，如vous habitez [vu-za-bi-te], l'heure [lœʁ].",
        "词首是嘘音h时，不能联诵或省音，如deux héros [dø-e-ro], le héros [lə-e-ro]."
      ]
    },
    elision: {
      title: "省音 (l'élision)",
      rules: [
        "大部分以字母e或字母a结尾的单音节词, 当后面的单词是以元音字母或哑音h开始时, 通常需要省去该元音字母e或a, 省去的元音字母用省文撇 ' (apostrophe) 代替。",
        "si在il, ils前要省音为s'il、s'ils。但请特别注意, si与elle或on在一起时不能省音。"
      ],
      examples: ["le + ami → l'ami", "se + appelle → s'appelle", "la + heure → l'heure", "ce + est → c'est"]
    },
    consonantClusters: {
      title: "辅音群",
      rules: [
        "其他辅音+[l]/[r]组合成为不可分割的辅音群，但[l]+[r]不构成辅音群。",
        "辅音群在词首和词中时，与后面的元音构成一个音节，如classe [klas]；mercredi [mɛr-kra-di]；辅音群在词末时可自成一个音节，如sable [sa-bl]、propre [prɔ-pr]。",
        "三个辅音相连时，前两个辅音属于前一个音节，第三个辅音属于下一个音节，如abstenir [aps-ta-nir]；但如果后两个辅音构成辅音群，则辅音群不可分割，如apostrophe [a-pos-trof]、mercredi [mɛr-kra-di]。",
        "四个辅音相连时，两个辅音一组，分属两个音节，如abstrait [aps-trɛ]。"
      ]
    },
    nasalVowelRules: {
      title: "法语鼻化元音基本特点",
      rules: [
        "书写上，该音标上方有相应符号[˜]；发音时，注意气流同时从口腔及鼻腔送出；拼写方面，发鼻化元音的字母组合均是以m或n结尾。",
        "发鼻化元音的字母组合，如果后面跟有元音字母或字母m，n，一般情况下不再发鼻化音，如 homme、onomatopée、lame、année、peine、hymne、aimable、humour、union。",
        "单词在同一节奏组中也遵循同样规律。例如：Bon appétit。 C'est un bon élève。",
        "观察发鼻化元音的单词，如果是以m结尾的字母组合，后面经常是b、p两个辅音字母；以n结尾的字母组合后面经常是其他辅音字母。"
      ]
    },
    semiVowelRules: {
      title: "半元音规则",
      rules: [
        "半元音无法独立构成音节，要与前后的辅音、元音一起构成一个音节，如mouette [mwɛt]只有一个音节。",
        "以[j]结尾的音节被视作闭音节，如conseil [kɔ̃-sɛj]。",
        "en在字母组合ien、yen、éen中读[ɛ̃]，如magicien、libyen、lycéen。",
        "字母组合tion前面如果没有s，读[sjɔ̃]，如solution。"
      ]
    },
    liaisonRules: {
      title: "联诵的规则",
      mandatory: {
        title: "必须联诵",
        description: "同一节奏组内部要求联诵，其中必须联诵的主要包括以下几种情况：",
        cases: [
          "主语人称代词和动词之间：elles aiment",
          "限定词和名词之间：les hommes",
          "前置形容词和名词之间：les jeunes étudiants",
          "在动词être之后：C'est à moi.",
          "动词和代词之间：Vas-y ! / Sont-ils sympathiques ?",
          "副词très和它所修饰的词之间：C'est très amusant. / Ils sont très amis.",
          "单音节介词和它后面的词之间：Elle est chez elle.",
          "连词quand和它后面的词之间：Quand il arrive, je pars.",
          "在复合名词中：les États-Unis",
          "在一些常用的表达方式中：de temps en temps"
        ]
      },
      forbidden: {
        title: "禁止联诵",
        description: "不属于同一节奏组的单词之间不能联诵，具体包括以下几种情况：",
        cases: [
          "做主语的名词和动词之间禁止联诵：Thomas habite ici.",
          "在主谓倒装疑问句中，主语人称代词与其后的成分禁止联诵：Vont-ils arriver ?",
          "连词et与后面的单词禁止联诵：C'est son vingt et unième anniversaire.",
          "哑音h前禁止联诵：Elle va aux Halles ce samedi.",
          "在oui、数词onze和onzième前禁止联诵：Mais oui, ce sont les onze îles du pays.",
          "在辅音[r]后的其他辅音字母禁止联诵：bord à bord.（但leurs enfants和chers amis等复数形式除外）"
        ]
      },
      optional: {
        title: "自由联诵",
        description: "其他情况为自由联诵，如名词与后置的多音节修饰词之间，les langues étrangères（可联诵，也可不联诵）。"
      },
      pronunciation: {
        title: "辅音字母在联诵中的发音",
        rules: [
          "s、x、z读[z]：Mes amis vont partir. / Il est deux heures. / Amélie est chez elle.",
          "d、t读[t]：Quand elle est là, je suis là. / C'est une belle occasion.",
          "g读[k]：Il écrit un long article.",
          "鼻化元音在联诵中的基本规则是，在鼻化音之后加[n]：J'ai un ami. / On apprend vite.",
          "bon和以-ain、-ein、-yen结尾的形容词有联诵时，要失去原来的鼻化元音。例如：Au Moyen-Âge [o-mwa-je-naʒ] / bon appétit [bo-na-pe-ti] / en plein été [ã-ple-ne-te]"
        ]
      }
    }
  },
  specialLetterCombinations: [
    { letters: "cc", sound: "[k]", condition: "在a、o、u前及辅音字母前", examples: ["accabler", "accord", "accumuler", "acclamer"] },
    { letters: "cc", sound: "[ks]", condition: "在e、i、y前", examples: ["succès", "accident", "coccygien"] },
    { letters: "ch", sound: "[ʃ]", condition: "多数情况下", examples: ["chinois", "machine"] },
    { letters: "ch", sound: "[k]", condition: "在少数词中", examples: ["chaos", "orchestre", "technique"] },
    { letters: "e", sound: "不发音", condition: "在元辅e辅元中", examples: ["samedi", "Catherine", "appeler"] },
    { letters: "e", sound: "[ə]", condition: "在辅辅e辅中", examples: ["vendredi", "enregistrement", "département"] },
    { letters: "en", sound: "[ɑ̃]", condition: "多数情况下", examples: ["enchanté", "enfant", "pente", "client"] },
    { letters: "en", sound: "[ɛ̃]", condition: "在少数词中", examples: ["examen", "agenda", "pentagone"] },
    { letters: "词首ess-、eff-、dess-、desc-", sound: "[e]", condition: "字母e在这些字母组合中的发音", examples: ["essai", "essouffler", "effectif", "effort", "dessin", "dessert", "descente"] },
    { letters: "ex-、inex-在词首", sound: "[egz]", condition: "在元音前", examples: ["examen", "exemple", "exil", "exhale", "exonérer", "inexact", "inexistante"] },
    { letters: "ex-、inex-在词首", sound: "[eks]", condition: "在辅音前", examples: ["excuse", "expatrier", "excursion", "extrême", "inexprimé", "inextensible"] },
    { letters: "sc", sound: "[s]", condition: "在e、i、y前", examples: ["descendre", "scène", "scientifique", "scythe"] },
    { letters: "sc", sound: "[sk]", condition: "在a、o、u前及辅音字母前", examples: ["scanner", "score", "scrutin"] },
    { letters: "-tion在词末", sound: "[sjɔ̃]", condition: "多数情况下", examples: ["révolution", "augmentation", "orientation"] },
    { letters: "-tion在词末", sound: "[tjɔ̃]", condition: "在s后", examples: ["question", "gestion", "bastion"] },
    { letters: "-tie在词末", sound: "[si]", condition: "前面无s时", examples: ["diplomatie", "aristocratie"] },
    { letters: "-tie在词末", sound: "[ti]", condition: "前面有s时", examples: ["modestie", "dynastie"] },
    { letters: "-tier", sound: "[tje]", condition: "在词末", examples: ["forestier", "métier"] },
    { letters: "-tière", sound: "[tjɛr]", condition: "在词末", examples: ["forestière", "charcutière"] },
    { letters: "ti+元音", sound: "[sj]", condition: "前面无s时", examples: ["patient", "national"] },
    { letters: "ti+元音", sound: "[tj]", condition: "前面有s时", examples: ["questionner", "vestiaire"] },
    { letters: "x", sound: "[ks]", condition: "多数情况下", examples: ["fixer", "expliquer", "index"] },
    { letters: "x", sound: "[s]", condition: "在少数词中", examples: ["six", "dix", "soixante"] },
    { letters: "x", sound: "[z]", condition: "在序数词中及联诵时", examples: ["sixième", "deuxième", "deux ans"] },
    { letters: "y", sound: "[i]", condition: "多数情况下", examples: ["physique", "stylo", "nylon", "syllabe"] },
    { letters: "y", sound: "[j]", condition: "元音前", examples: ["Lyon", "yeux", "Himalaya", "yoga"] },
    { letters: "y", sound: "[i]", condition: "在辅音群和元音之间", examples: ["embryon", "amphitryon"] },
    { letters: "y", sound: "= i + i", condition: "在两个元音字母之间", examples: ["essayer", "payant", "essuyer", "voyelle", "paye", "rayent", "balayer"] }
  ],
  pronunciationTable: [
    { letters: "a, â, à", sound: "[a]", examples: ["tache", "tâche", "là"] },
    { letters: "ai", sound: "[ɛ]", examples: ["j'ai", "fait", "maître"] },
    { letters: "aim, ain", sound: "[ɛ̃]", examples: ["daim", "pain", "incertain"] },
    { letters: "an, am, aon", sound: "[ɑ̃]", examples: ["sans", "ampère", "paon"] },
    { letters: "au", sound: "[o]", examples: ["saut"] },
    { letters: "au", sound: "[ɔ]", examples: ["Laure"] },
    { letters: "b", sound: "[b]", examples: ["bout"] },
    { letters: "c", sound: "[s]", examples: ["ici"] },
    { letters: "c", sound: "[k]", examples: ["cou", "sac"] },
    { letters: "c", sound: "[g]", examples: ["second"] },
    { letters: "ç", sound: "[s]", examples: ["ça"] },
    { letters: "cc", sound: "[k]", examples: ["accord"] },
    { letters: "cc", sound: "[ks]", examples: ["accélérer"] },
    { letters: "ch, sch, sh", sound: "[ʃ]", examples: ["chou", "schéma", "short"] },
    { letters: "ch", sound: "[k]", examples: ["technique"] },
    { letters: "d", sound: "[d]", examples: ["doux"] },
    { letters: "e", sound: "不发音", examples: ["larme", "samedi", "Jean"] },
    { letters: "e", sound: "[ə]", examples: ["le", "menace"] },
    { letters: "é, es, er, ez, et", sound: "[e]", examples: ["blé", "des", "février", "parlez", "et"] },
    { letters: "e, ê, è, ë, -et, est", sound: "[ɛ]", examples: ["mettre", "Noël", "pèle-mêle", "mètre", "poulet", "il est"] },
    { letters: "ein", sound: "[ɛ̃]", examples: ["plein"] },
    { letters: "em", sound: "[œ̃]", examples: ["empereur"] },
    { letters: "en", sound: "[ɑ̃]", examples: ["gendre"] },
    { letters: "en", sound: "[ɛ̃]", examples: ["examen"] },
    { letters: "eu, œu", sound: "[ø]", examples: ["peu", "deux", "tondeuse", "vœu"] },
    { letters: "eu, œu", sound: "[œ]", examples: ["peur", "neuf", "œuf"] },
    { letters: "f", sound: "[f]", examples: ["fou"] },
    { letters: "g", sound: "[g]", examples: ["garde", "goût"] },
    { letters: "g", sound: "[ʒ]", examples: ["gène"] },
    { letters: "gn", sound: "[ɲ]", examples: ["agneau"] },
    { letters: "gu", sound: "[g]", examples: ["guerre"] },
    { letters: "gu", sound: "[gw]", examples: ["Guadeloupe"] },
    { letters: "h", sound: "h aspiré", examples: ["les haricots [leaʁiko]"] },
    { letters: "h", sound: "h muet", examples: ["les hommes [lezɔm]"] },
    { letters: "i", sound: "[i]", examples: ["lit", "signifie"] },
    { letters: "i", sound: "[j]", examples: ["miel"] },
    { letters: "il", sound: "[j]", examples: ["sommeil"] },
    { letters: "ill", sound: "[j]", examples: ["conseille"] },
    { letters: "ill", sound: "[ij]", examples: ["billet"] },
    { letters: "in, im", sound: "[ɛ̃]", examples: ["vin", "timbre"] },
    { letters: "j", sound: "[ʒ]", examples: ["joue"] },
    { letters: "k", sound: "[k]", examples: ["kaki"] },
    { letters: "l", sound: "[l]", examples: ["loup"] },
    { letters: "m", sound: "[m]", examples: ["mal"] },
    { letters: "n", sound: "[n]", examples: ["nous", "automne"] },
    { letters: "o, ô", sound: "[o]", examples: ["rose", "hôte"] },
    { letters: "o", sound: "[ɔ]", examples: ["botte"] },
    { letters: "œ", sound: "[œ]", examples: ["œil"] },
    { letters: "oi", sound: "[wa]", examples: ["noix"] },
    { letters: "oi", sound: "[ɔ]", examples: ["oignon"] },
    { letters: "oin", sound: "[wɛ̃]", examples: ["soin"] },
    { letters: "om, on", sound: "[ɔ̃]", examples: ["nom", "son"] },
    { letters: "ou", sound: "[u]", examples: ["mou"] },
    { letters: "ou", sound: "[w]", examples: ["oui"] },
    { letters: "p", sound: "[p]", examples: ["pou"] },
    { letters: "ph", sound: "[f]", examples: ["photographie"] },
    { letters: "q", sound: "[k]", examples: ["coq"] },
    { letters: "qu", sound: "[k]", examples: ["quel"] },
    { letters: "qu", sound: "[kw]", examples: ["équation"] },
    { letters: "r", sound: "[r]", examples: ["reine"] },
    { letters: "s, ss", sound: "[s]", examples: ["saut", "poisson"] },
    { letters: "s", sound: "[z]", examples: ["poison"] },
    { letters: "sc", sound: "[s]", examples: ["scie"] },
    { letters: "sc", sound: "[sk]", examples: ["escalade"] },
    { letters: "t, th", sound: "[t]", examples: ["tout", "théorie"] },
    { letters: "t", sound: "[si]", examples: ["diplomatie"] },
    { letters: "ti", sound: "[sj]", examples: ["observation"] },
    { letters: "ti", sound: "[tj]", examples: ["bastion"] },
    { letters: "u", sound: "[y]", examples: ["lu"] },
    { letters: "u", sound: "[u]", examples: ["nuit"] },
    { letters: "(c/g)+ue+(il)", sound: "[œ]", examples: ["accueil", "orgueil"] },
    { letters: "un", sound: "[œ̃]", examples: ["un"] },
    { letters: "um", sound: "[œ̃]", examples: ["parfum"] },
    { letters: "um", sound: "[ɔm]", examples: ["maximum"] },
    { letters: "v", sound: "[v]", examples: ["vous"] },
    { letters: "w", sound: "[v]", examples: ["wagon"] },
    { letters: "w", sound: "[w]", examples: ["tramway"] },
    { letters: "x", sound: "[s]", examples: ["dix"] },
    { letters: "x", sound: "[ks]", examples: ["Alexandre"] },
    { letters: "x", sound: "[gz]", examples: ["xénophobe", "existence"] },
    { letters: "y", sound: "[i]", examples: ["lyrique"] },
    { letters: "y", sound: "[j]", examples: ["yaourt"] },
    { letters: "y", sound: "= i + i", examples: ["foyer", "paye"] },
    { letters: "z", sound: "[z]", examples: ["zigzag"] }
  ],
  intonation: {
    title: "法语句子基本语调（l'intonation）",
    description: "法语句子语调较平稳，如小河流水一般，婉转动听。基本原则是每个节奏组末尾语调轻微上扬，每个节奏组只有最后一个音节读重音，节奏组内部没有停顿，句末语调视具体情况而定。",
    types: [
      {
        type: "肯定陈述句",
        rule: "句末降调，前面节奏组末尾升调。",
        examples: ["Mes parents sont très compréhensifs avec moi.", "Le week-end, je vois souvent mes parents."]
      },
      {
        type: "否定句",
        rule: "视否定词pas的位置确定语调。",
        cases: [
          { condition: "如果pas位于句末", rule: "句子语调逐渐下降。", examples: ["Il ne viennent pas.", "C'est triste, vous ne riez pas."] },
          { condition: "如果pas位于句中", rule: "句子语调最高点在pas上，pas前、后分别升、降语调。", examples: ["Maintenant, nous ne pouvons pas encore bien parler français.", "Je ne suis pas d'accord."] }
        ]
      },
      {
        type: "一般疑问句",
        rule: "句末语调上升。",
        examples: ["Il joue au football après les cours ?", "Font-ils du sport tous les jours ?", "Est-ce que vous préférez la cuisine française ?"]
      },
      {
        type: "特殊疑问句",
        rule: "疑问词在句首时，语调上升或下降都可以；疑问词在句末时，语调一般上升。",
        examples: ["Où vont-ils passer leurs vacances ?", "Quand pouvez-vous me donner les devoirs ?", "Après les études, vous voulez faire quoi ?", "Tu aimes quels cours ?"]
      }
    ]
  }
};

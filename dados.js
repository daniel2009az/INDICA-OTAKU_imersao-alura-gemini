const mangas  = [
    {
      titulo: "To LOVE-Ru",
      autor: "Saki Hasemi",
      descricao: "Rito Yuuki, um estudante do ensino médio, acidentalmente fica noivo de uma princesa alienígena enquanto tenta confessar seu amor por sua colega de classe.",
      genero: "Comédia, Romance, Harem"
    },
    {
      titulo: "Nisekoi",
      autor: "Naoshi Komi",
      descricao: "Raku Ichijou, herdeiro de uma família da yakuza, acaba fingindo estar em um relacionamento com a filha de uma gangue rival, enquanto tenta encontrar seu verdadeiro amor de infância.",
      genero: "Comédia, Romance, Harem"
    },
    {
      titulo: "Date A Live",
      autor: "Koushi Tachibana",
      descricao: "Shido Itsuka descobre que a única maneira de salvar o mundo de espíritos destrutivos é fazê-los se apaixonar por ele.",
      genero: "Ação, Romance, Harem"
    },
    {
      titulo: "Rosario + Vampire",
      autor: "Akihisa Ikeda",
      descricao: "Um humano normal entra por engano em uma escola para monstros, onde se torna alvo de várias garotas sobrenaturais.",
      genero: "Ação, Sobrenatural, Harem"
    },
    {
      titulo: "High School DxD",
      autor: "Ichiei Ishibumi",
      descricao: "Issei Hyoudou, um estudante pervertido, é revivido como um demônio após ser morto por um anjo caído e agora deve servir a uma poderosa família demoníaca.",
      genero: "Ação, Sobrenatural, Harem"
    },
    {
      titulo: "Saenai Heroine no Sodatekata (Saekano: How to Raise a Boring Girlfriend)",
      autor: "Fumiaki Maruto",
      descricao: "Um aspirante a criador de jogos tenta criar o jogo perfeito enquanto lida com várias garotas em sua vida.",
      genero: "Comédia, Romance, Harem"
    },
    {
      titulo: "Sora no Otoshimono (Heaven's Lost Property)",
      autor: "Suu Minazuki",
      descricao: "Tomoki Sakurai, um garoto que adora uma vida pacífica, encontra uma garota alada que cai do céu e transforma sua vida em caos.",
      genero: "Comédia, Romance, Harem"
    },
    {
      titulo: "Trinity Seven",
      autor: "Kenji Saito",
      descricao: "Arata Kasuga é levado para uma escola mágica, onde ele conhece sete belas e poderosas magas.",
      genero: "Ação, Sobrenatural, Harem"
    },
    {
      titulo: "Infinite Stratos",
      autor: "Izuru Yumizuru",
      descricao: "Em um mundo onde apenas mulheres podem pilotar mechas chamadas IS, um garoto descobre que também pode usar uma, e acaba frequentando uma escola dominada por garotas.",
      genero: "Ação, Sci-Fi, Harem"
    },
    {
      titulo: "Mayo Chiki!",
      autor: "Hajime Asano",
      descricao: "Kinjirou Sakamachi, que tem medo de garotas, descobre que o mordomo de sua colega de classe é na verdade uma garota disfarçada.",
      genero: "Comédia, Romance, Harem"
    },
    {
      titulo: "Sekirei",
      autor: "Sakurako Gokurakuin",
      descricao: "Minato Sahashi se envolve em uma competição sobrenatural onde mulheres poderosas chamadas Sekirei escolhem seus parceiros para lutar.",
      genero: "Ação, Sobrenatural, Harem"
    },
    {
      titulo: "Boku wa Tomodachi ga Sukunai (Haganai: I Don't Have Many Friends)",
      autor: "Yomi Hirasaka",
      descricao: "Kodaka Hasegawa e um grupo de socialmente desajustados criam um clube para fazer amigos, mas acabam se envolvendo em várias situações cômicas.",
      genero: "Comédia, Escolar, Harem"
    },
    {
      titulo: "Kami nomi zo Shiru Sekai (The World God Only Knows)",
      autor: "Tamiki Wakaki",
      descricao: "Keima Katsuragi, um mestre em jogos de simulação de namoro, é forçado a conquistar garotas da vida real para salvar suas almas.",
      genero: "Comédia, Romance, Harem"
    },
    {
      titulo: "Mahou Sensei Negima!",
      autor: "Ken Akamatsu",
      descricao: "Negi Springfield, um jovem mago, se torna professor de uma turma cheia de garotas, muitas das quais acabam se apaixonando por ele.",
      genero: "Ação, Comédia, Harem, Magia"
    },
    {
      titulo: "Ichiban Ushiro no Daimaou",
      autor: "Shoutarou Mizuki",
      descricao: "Akuto Sai, um estudante que sonha em se tornar um sumo sacerdote, é predito como o futuro Rei Demônio, atraindo várias garotas para sua vida.",
      genero: "Ação, Magia, Harem"
    },
    {
      titulo: "Hoshizora e Kakaru Hashi",
      autor: "Matsuri Wataru",
      descricao: "Um estudante se muda para uma nova cidade e acaba se envolvendo romanticamente com várias garotas de sua nova escola.",
      genero: "Comédia, Romance, Harem"
    },
    {
      titulo: "Outbreak Company",
      autor: "Ichirou Sakaki",
      descricao: "Um otaku é enviado para outro mundo para difundir a cultura otaku, mas acaba envolvido com várias garotas fantásticas.",
      genero: "Comédia, Fantasia, Harem"
    },
    {
      titulo: "Oreshura (Ore no Kanojo to Osananajimi ga Shuraba Sugiru)",
      autor: "Yuuji Yuuji",
      descricao: "Eita, que não tem interesse em romance, é arrastado para situações de comédia romântica por sua namorada falsa e amiga de infância.",
      genero: "Comédia, Romance, Harem"
    },
    {
      titulo: "Kore wa Zombie Desu ka? (Is This a Zombie?)",
      autor: "Shinichi Kimura",
      descricao: "Ayumu Aikawa, um zumbi, se envolve em uma série de situações absurdas envolvendo garotas mágicas, ninjas e vampiras.",
      genero: "Comédia, Sobrenatural, Harem"
    },
    {
      titulo: "Love Hina",
      autor: "Ken Akamatsu",
      descricao: "Keitaro Urashima, um jovem desajeitado, acaba se tornando o gerente de uma pensão feminina cheia de garotas excêntricas.",
      genero: "Comédia, Romance, Harem"
    },
    {
      titulo: "Shokugeki no Soma (Food Wars!)",
      autor: "Yuto Tsukuda",
      descricao: "Soma Yukihira, um jovem chef, entra em uma prestigiada escola de culinária, onde participa de intensas batalhas culinárias.",
      genero: "Culinária, Comédia, Escolar"
    },
    {
      titulo: "Toriko",
      autor: "Mitsutoshi Shimabukuro",
      descricao: "Toriko, um caçador de ingredientes raros, embarca em aventuras para encontrar os alimentos mais deliciosos do mundo.",
      genero: "Ação, Aventura, Culinária"
    },
    {
      titulo: "Yakitate!! Japan",
      autor: "Takashi Hashiguchi",
      descricao: "Kazuma Azuma sonha em criar o pão definitivo do Japão, competindo contra outros padeiros em várias competições.",
      genero: "Comédia, Culinária"
    },
    {
      titulo: "Amaama to Inazuma (Sweetness & Lightning)",
      autor: "Gido Amagakure",
      descricao: "Um pai viúvo aprende a cozinhar para sua filha com a ajuda de uma de suas alunas.",
      genero: "Slice of Life, Culinária, Comédia"
    },
    {
      titulo: "Koufuku Graffiti (Gourmet Girl Graffiti)",
      autor: "Makoto Kawai",
      descricao: "Ryou Machiko, uma jovem que adora cozinhar, aprende a criar pratos deliciosos para compartilhar com seus amigos.",
      genero: "Culinária, Slice of Life"
    },
    {
      titulo: "Ristorante Paradiso",
      autor: "Natsume Ono",
      descricao: "Nicoletta vai a Roma e se envolve em um restaurante charmoso cheio de personagens interessantes.",
      genero: "Romance, Culinária, Slice of Life"
    },
    {
      titulo: "Addicted to Curry",
      autor: "Kazuki Funatsu",
      descricao: "A história de um jovem que ajuda a salvar um restaurante de curry enquanto aperfeiçoa suas habilidades culinárias.",
      genero: "Culinária, Comédia"
    },
    {
      titulo: "Cooking Papa",
      autor: "Tochi Ueyama",
      descricao: "Um homem de negócios que secretamente é um excelente cozinheiro, mas esconde suas habilidades de seus colegas.",
      genero: "Culinária, Slice of Life, Comédia"
    },
    {
      titulo: "Oishinbo",
      autor: "Tetsu Kariya",
      descricao: "Um jornalista especializado em culinária busca o menu supremo, explorando diferentes aspectos da gastronomia japonesa.",
      genero: "Culinária, Slice of Life"
    },
    {
      titulo: "Bartender",
      autor: "Araki Joh",
      descricao: "A história de um bartender talentoso que resolve os problemas emocionais de seus clientes com a bebida certa.",
      genero: "Culinária, Slice of Life"
    },  
    {
      titulo: "Nodame Cantabile",
      autor: "Tomoko Ninomiya",
      descricao: "A história de uma jovem pianista talentosa e excêntrica que sonha em ser uma maestra.",
      genero: "Comédia, Drama, Musical"
    },
    {
      titulo: "Beck",
      autor: "Harold Sakuishi",
      descricao: "Um garoto encontra o mundo da Musical através de uma banda de rock e tenta alcançar o estrelato.",
      genero: "Ação, Drama, Musical"
    },
    {
      titulo: "Shigatsu wa Kimi no Uso (Your Lie in April)",
      autor: "Naoshi Arakawa",
      descricao: "Um jovem pianista prodígio que perdeu sua habilidade de tocar, encontra nova inspiração em uma violinista energética.",
      genero: "Drama, Romance, Musical"
    },
    {
      titulo: "Fuuka",
      autor: "Seo Kouji",
      descricao: "A vida de um jovem muda quando conhece uma garota misteriosa apaixonada por Musical.",
      genero: "Romance, Musical, Drama"
    },
    {
      titulo: "Sakamichi no Apollon (Kids on the Slope)",
      autor: "Yuki Kodama",
      descricao: "Dois jovens se aproximam através de sua paixão compartilhada pelo jazz.",
      genero: "Drama, Musical, Escolar"
    },
    {
      titulo: "K-On!",
      autor: "Kakifly",
      descricao: "Um grupo de garotas forma uma banda no clube de Musical da escola.",
      genero: "Comédia, Slice of Life, Musical"
    },
    {
      titulo: "Tenshi no 3P!",
      autor: "Sagu Aoyama",
      descricao: "Um recluso começa a se abrir para o mundo ao ajudar três meninas a formar uma banda.",
      genero: "Musical, Slice of Life"
    },
    {
      titulo: "Detroit Metal City",
      autor: "Kiminori Wakasugi",
      descricao: "Um jovem tímido sonha em tocar pop suave, mas acaba se tornando o líder de uma banda de death metal.",
      genero: "Comédia, Musical, Seinen"
    },
    {
      titulo: "Blue Giant",
      autor: "Shinichi Ishizuka",
      descricao: "Um jovem se apaixona pelo jazz e sonha em se tornar o melhor saxofonista do mundo.",
      genero: "Drama, Musical"
    },
    {
      titulo: "Piano no Mori",
      autor: "Makoto Isshiki",
      descricao: "A história de um jovem que encontra um piano abandonado na floresta e desenvolve um talento natural.",
      genero: "Drama, Musical"
    },
    {
      titulo: "I Am a Hero",
      autor: "Kengo Hanazawa",
      descricao: "Um mangaká fracassado luta para sobreviver em um Japão pós-apocalíptico cheio de zumbis.",
      genero: "Ação, Terror, Seinen"
    },
    {
      titulo: "Uzumaki",
      autor: "Junji Ito",
      descricao: "Os habitantes de uma cidade começam a ser obcecados por espirais, levando-os à loucura.",
      genero: "Horror, Sobrenatural"
    },
    {
      titulo: "Tokyo Ghoul",
      autor: "Sui Ishida",
      descricao: "Um jovem se torna um híbrido humano-ghoul e deve sobreviver em um mundo onde ghouls caçam humanos.",
      genero: "Horror, Ação"
    },
    {
      titulo: "Shiki",
      autor: "Fuyumi Ono",
      descricao: "Uma pequena vila é abalada por uma série de mortes misteriosas, que parecem ter origem em criaturas sobrenaturais.",
      genero: "Horror, Sobrenatural"
    },
    {
      titulo: "Gantz",
      autor: "Hiroya Oku",
      descricao: "Após a morte, dois jovens são recrutados para participar de uma violenta batalha contra alienígenas.",
      genero: "Ação, Horror, Sci-Fi"
    },
    {
      titulo: "Parasyte",
      autor: "Hitoshi Iwaaki",
      descricao: "Parasitas alienígenas invadem a Terra, tomando o controle de humanos. Um jovem luta contra a criatura que o possuiu parcialmente.",
      genero: "Horror, Sci-Fi"
    },
    {
      titulo: "Another",
      autor: "Yukito Ayatsuji",
      descricao: "Um aluno de uma escola começa a investigar mortes misteriosas e uma maldição que aflige sua turma.",
      genero: "Horror, Mistério"
    },
    {
      titulo: "Higurashi no Naku Koro ni",
      autor: "Ryukishi07",
      descricao: "Em uma pequena vila, uma série de assassinatos misteriosos parece se repetir a cada ano durante um festival.",
      genero: "Horror, Mistério"
    },
    {
      titulo: "Ajin",
      autor: "Gamon Sakurai",
      descricao: "Um jovem descobre que é imortal e precisa fugir de uma organização do governo que captura seres como ele.",
      genero: "Horror, Sobrenatural, Ação"
    },
    {
      titulo: "Hell's Paradise: Jigokuraku",
      autor: "Yuuji Kaku",
      descricao: "Um ninja imortal é enviado para uma ilha misteriosa cheia de criaturas grotescas em busca de um elixir da imortalidade.",
      genero: "Ação, Horror, Sobrenatural"
    },
    {
      titulo: "Vampire Knight",
      autor: "Matsuri Hino",
      descricao: "Em uma escola para humanos e vampiros, uma jovem tenta proteger a paz entre as duas raças.",
      genero: "Romance, Drama, Shoujo"
    },
    {
      titulo: "Fruits Basket",
      autor: "Natsuki Takaya",
      descricao: "Uma jovem órfã vai morar com uma família que esconde um segredo: eles são amaldiçoados pelos animais do zodíaco chinês.",
      genero: "Drama, Comédia, Shoujo"
    },
    {
      titulo: "Ouran High School Host Club",
      autor: "Bisco Hatori",
      descricao: "Uma garota comum é confundida com um garoto e forçada a trabalhar para um clube de anfitriões em uma escola de elite.",
      genero: "Comédia, Romance, Shoujo"
    },
    {
      titulo: "Kimi ni Todoke",
      autor: "Karuho Shiina",
      descricao: "Uma garota tímida e mal compreendida tenta fazer amigos e se conectar com seus colegas de classe.",
      genero: "Romance, Escolar, Shoujo"
    },
    {
      titulo: "Skip Beat!",
      autor: "Yoshiki Nakamura",
      descricao: "Uma jovem entra no mundo do entretenimento para se vingar do ex-namorado, mas descobre sua verdadeira paixão por atuar.",
      genero: "Comédia, Drama, Shoujo"
    },
    {
      titulo: "Nana",
      autor: "Ai Yazawa",
      descricao: "Duas jovens mulheres com o mesmo nome, mas estilos de vida muito diferentes, tornam-se amigas inseparáveis.",
      genero: "Drama, Romance, Shoujo"
    },
    {
      titulo: "Lovely★Complex",
      autor: "Aya Nakahara",
      descricao: "A história de um casal de amigos inseparáveis com uma diferença de altura incomum que começa a desenvolver sentimentos um pelo outro.",
      genero: "Comédia, Romance, Shoujo"
    },
    {
      titulo: "Akatsuki no Yona",
      autor: "Mizuho Kusanagi",
      descricao: "Uma princesa em fuga descobre sua força interior e luta para recuperar seu reino com a ajuda de seus amigos leais.",
      genero: "Aventura, Romance, Shoujo"
    },
    {
      titulo: "Ao Haru Ride",
      autor: "Io Sakisaka",
      descricao: "Uma jovem tenta se reconectar com seu primeiro amor depois de uma série de mal-entendidos os afastarem.",
      genero: "Romance, Escolar, Shoujo"
    },
    {
      titulo: "Cardcaptor Sakura",
      autor: "CLAMP",
      descricao: "Uma jovem descobre que possui poderes mágicos e precisa recuperar as cartas mágicas espalhadas pelo mundo.",
      genero: "Aventura, Magia, Shoujo"
    },
  {
    titulo: "One Piece",
    autor: "Eiichiro Oda",
    descricao: "Um jovem pirata sonha em se tornar o Rei dos Piratas e encontrar o tesouro One Piece.",
    genero: "Ação, Aventura"
  },
  {
    titulo: "Naruto",
    autor: "Masashi Kishimoto",
    descricao: "Um ninja órfão busca reconhecimento e o sonho de se tornar Hokage.",
    genero: "Ação, Aventura"
  },
  {
    titulo: "Attack on Titan",
    autor: "Hajime Isayama",
    descricao: "A humanidade luta para sobreviver contra titãs gigantes que ameaçam destruir o mundo.",
    genero: "Ação, Drama, Suspense"
  },
  {
    titulo: "Dragon Ball",
    autor: "Akira Toriyama",
    descricao: "A história de Goku, um guerreiro saiyajin que defende a Terra de vários inimigos poderosos.",
    genero: "Ação, Aventura, Fantasia"
  },
  {
    titulo: "My Hero Academia",
    autor: "Kohei Horikoshi",
    descricao: "Em um mundo onde quase todos têm superpoderes, um jovem sem habilidades sonha em se tornar um herói.",
    genero: "Ação, Aventura, Superpoderes"
  },
  {
    titulo: "Fullmetal Alchemist",
    autor: "Hiromu Arakawa",
    descricao: "Dois irmãos alquimistas buscam a pedra filosofal para restaurar seus corpos após um experimento fracassado.",
    genero: "Ação, Aventura, Fantasia"
  },
  {
    titulo: "Death Note",
    autor: "Tsugumi Ohba",
    descricao: "Um estudante encontra um caderno que permite matar qualquer pessoa cujo nome seja escrito nele.",
    genero: "Mistério, Thriller"
  },
  {
    titulo: "Bleach",
    autor: "Tite Kubo",
    descricao: "Ichigo Kurosaki, que pode ver espíritos, se torna um Shinigami e luta contra espíritos malignos.",
    genero: "Ação, Fantasia"
  },
  {
    titulo: "Tokyo Ghoul",
    autor: "Sui Ishida",
    descricao: "Um estudante universitário se transforma em um híbrido humano-ghoul e deve sobreviver em um mundo dividido.",
    genero: "Horror, Suspense, Ação"
  },
  {
    titulo: "Demon Slayer",
    autor: "Koyoharu Gotouge",
    descricao: "Um jovem busca vingar sua família e salvar sua irmã, transformada em demônio, de um destino sombrio.",
    genero: "Ação, Fantasia"
  },
  {
    titulo: "One Piece",
    autor: "Eiichiro Oda",
    descricao: "Um jovem pirata sonha em se tornar o Rei dos Piratas e encontrar o tesouro One Piece.",
    genero: "Ação, Aventura, Fantasia"
  },
  {
    titulo: "Naruto",
    autor: "Masashi Kishimoto",
    descricao: "Um ninja órfão busca reconhecimento e o sonho de se tornar Hokage.",
    genero: "Ação, Aventura, Fantasia"
  },
  {
    titulo: "Attack on Titan",
    autor: "Hajime Isayama",
    descricao: "A humanidade luta para sobreviver contra titãs gigantes que ameaçam destruir o mundo.",
    genero: "Ação, Drama, Fantasia"
  },
  {
    titulo: "Dragon Ball",
    autor: "Akira Toriyama",
    descricao: "A história de Goku, um guerreiro saiyajin que defende a Terra de vários inimigos poderosos.",
    genero: "Ação, Aventura, Artes Marciais"
  },
  {
    titulo: "My Hero Academia",
    autor: "Kohei Horikoshi",
    descricao: "Em um mundo onde quase todos têm superpoderes, um jovem sem habilidades sonha em se tornar um herói.",
    genero: "Ação, Superpoderes, Shounen"
  },
  {
    titulo: "Fullmetal Alchemist",
    autor: "Hiromu Arakawa",
    descricao: "Dois irmãos alquimistas buscam a pedra filosofal para restaurar seus corpos após um experimento fracassado.",
    genero: "Ação, Aventura, Fantasia"
  },
  {
    titulo: "Death Note",
    autor: "Tsugumi Ohba",
    descricao: "Um estudante encontra um caderno que lhe dá o poder de matar qualquer pessoa cujo nome seja escrito nele.",
    genero: "Mistério, Psicológico, Sobrenatural"
  },
  {
    titulo: "Sword Art Online",
    autor: "Reki Kawahara",
    descricao: "Jogadores ficam presos em um MMORPG virtual, onde a morte no jogo significa a morte no mundo real.",
    genero: "Aventura, Fantasia, Ficção Científica"
  },
  {
    titulo: "Fairy Tail",
    autor: "Hiro Mashima",
    descricao: "A história segue um grupo de magos da famosa guilda Fairy Tail enquanto enfrentam inimigos poderosos.",
    genero: "Ação, Aventura, Fantasia, Magia"
  },
  {
    titulo: "Bleach",
    autor: "Tite Kubo",
    descricao: "Ichigo Kurosaki ganha os poderes de um shinigami e luta contra espíritos malignos conhecidos como hollows.",
    genero: "Ação, Sobrenatural, Shounen"
  },
  {
    titulo: "Hunter x Hunter",
    autor: "Yoshihiro Togashi",
    descricao: "Gon Freecss se torna um caçador para encontrar seu pai e embarca em uma jornada cheia de perigos.",
    genero: "Ação, Aventura, Fantasia"
  },
  {
    titulo: "Tokyo Ghoul",
    autor: "Sui Ishida",
    descricao: "Após ser atacado por um ghoul, um estudante universitário é transformado em um meio-ghoul e luta para sobreviver.",
    genero: "Ação, Drama, Horror"
  },
  {
    titulo: "Black Clover",
    autor: "Yūki Tabata",
    descricao: "Asta, um jovem sem poderes mágicos, tenta se tornar o Rei Mago em um mundo repleto de magia.",
    genero: "Ação, Aventura, Fantasia, Magia"
  },
  {
    titulo: "Demon Slayer",
    autor: "Koyoharu Gotouge",
    descricao: "Um jovem busca vingar sua família e curar sua irmã, que foi transformada em um demônio.",
    genero: "Ação, Aventura, Sobrenatural"
  },
  {
    titulo: "JoJo's Bizarre Adventure",
    autor: "Hirohiko Araki",
    descricao: "A saga da família Joestar e suas lutas contra forças sobrenaturais ao longo das gerações.",
    genero: "Ação, Aventura, Sobrenatural"
  },
  {
    titulo: "The Seven Deadly Sins",
    autor: "Nakaba Suzuki",
    descricao: "Os Sete Pecados Capitais, um grupo de cavaleiros desonrados, tenta salvar o reino de Liones.",
    genero: "Ação, Aventura, Fantasia"
  },
  {
    titulo: "Blue Exorcist",
    autor: "Kazue Kato",
    descricao: "Rin Okumura descobre que é filho de Satã e decide lutar contra demônios ao se tornar um exorcista.",
    genero: "Ação, Fantasia, Sobrenatural"
  },
  {
    titulo: "Berserk",
    autor: "Kentaro Miura",
    descricao: "A história de Guts, um mercenário em um mundo sombrio, cheio de violência, demônios e traição.",
    genero: "Ação, Aventura, Fantasia Sombria"
  },
  {
    titulo: "Neon Genesis Evangelion",
    autor: "Yoshiyuki Sadamoto",
    descricao: "Adolescentes pilotam robôs gigantes para defender a Terra de seres misteriosos chamados Angels.",
    genero: "Ficção Científica, Mecha, Psicológico"
  },
  {
    titulo: "Claymore",
    autor: "Norihiro Yagi",
    descricao: "Mulheres guerreiras, conhecidas como Claymores, lutam contra criaturas conhecidas como Youma.",
    genero: "Ação, Aventura, Fantasia"
  },
  {
    titulo: "Akira",
    autor: "Katsuhiro Otomo",
    descricao: "Em uma Neo-Tóquio pós-apocalíptica, dois amigos se veem envolvidos em uma conspiração governamental.",
    genero: "Ficção Científica, Ação, Distopia"
  },
  {
    titulo: "Hellsing",
    autor: "Kouta Hirano",
    descricao: "A organização Hellsing luta contra vampiros e criaturas sobrenaturais para proteger a Inglaterra.",
    genero: "Ação, Horror, Sobrenatural"
  },
  {
    titulo: "Inuyasha",
    autor: "Rumiko Takahashi",
    descricao: "Uma colegial viaja no tempo e se junta a um meio-demônio para recuperar os fragmentos de uma joia poderosa.",
    genero: "Ação, Aventura, Fantasia"
  },
  {
    titulo: "Fruits Basket",
    autor: "Natsuki Takaya",
    descricao: "Uma jovem descobre que uma família é amaldiçoada a se transformar nos animais do zodíaco chinês.",
    genero: "Drama, Romance, Sobrenatural"
  },
  {
    titulo: "Parasyte",
    autor: "Hitoshi Iwaaki",
    descricao: "Shinichi Izumi é infectado por um parasita que assume o controle de sua mão, e os dois precisam trabalhar juntos para sobreviver.",
    genero: "Ação, Horror, Ficção Científica"
  },
  {
    titulo: "Tokyo Revengers",
    autor: "Ken Wakui",
    descricao: "Um jovem volta no tempo para salvar sua namorada e mudar o futuro de um grupo de delinquentes.",
    genero: "Ação, Drama, Sobrenatural"
  },
  {
    titulo: "Yuyu Hakusho",
    autor: "Yoshihiro Togashi",
    descricao: "Um delinquente adolescente é revivido como um detetive espiritual para combater ameaças do submundo.",
    genero: "Ação, Sobrenatural, Artes Marciais"
  },
  {
    titulo: "Haikyuu!!",
    autor: "Haruichi Furudate",
    descricao: "A jornada de um garoto determinado a se tornar um grande jogador de vôlei, apesar de sua baixa estatura.",
    genero: "Esporte, Comédia, Drama"
  },
  {
    titulo: "One Punch Man",
    autor: "ONE",
    descricao: "Um super-herói que derrota qualquer oponente com um soco busca um desafio digno.",
    genero: "Ação, Comédia, Superpoderes"
  },
  {
    titulo: "Vinland Saga",
    autor: "Makoto Yukimura",
    descricao: "Um jovem guerreiro viking busca vingança contra o assassino de seu pai.",
    genero: "Ação, Aventura, Histórico"
  },
  {
    titulo: "Shingeki no Kyojin: Before the Fall",
    autor: "Ryo Suzukaze",
    descricao: "Uma prequela de Attack on Titan, que explora a origem dos dispositivos de manobra tridimensionais.",
    genero: "Ação, Fantasia, Drama"
  },
  {
    titulo: "Great Teacher Onizuka",
    autor: "Tohru Fujisawa",
    descricao: "Eikichi Onizuka, um ex-delinquente, se torna professor e tenta mudar a vida de seus alunos.",
    genero: "Comédia, Drama, Slice of Life"
  },
  {
    titulo: "Mob Psycho 100",
    autor: "ONE",
    descricao: "Um garoto com poderes psíquicos extraordinários tenta levar uma vida normal enquanto esconde suas habilidades.",
    genero: "Ação, Comédia, Sobrenatural"
  },
  {
    titulo: "Gintama",
    autor: "Hideaki Sorachi",
    descricao: "Em um Japão alternativo dominado por alienígenas, um samurai freelancer faz qualquer tipo de trabalho para sobreviver.",
    genero: "Ação, Comédia, Sci-Fi"
  },
  {
    titulo: "Kuroko no Basket",
    autor: "Tadatoshi Fujimaki",
    descricao: "Um time de basquete do ensino médio luta para se tornar o melhor com a ajuda de um jogador invisível.",
    genero: "Esporte, Comédia, Drama"
  },
  {
    titulo: "Ao Haru Ride",
    autor: "Io Sakisaka",
    descricao: "Uma jovem redescobre seu primeiro amor enquanto lida com os desafios emocionais da adolescência.",
    genero: "Drama, Romance, Slice of Life"
  },
  {
    titulo: "Beelzebub",
    autor: "Ryuhei Tamura",
    descricao: "Um delinquente colegial se torna responsável por criar o filho do Rei Demônio.",
    genero: "Ação, Comédia, Sobrenatural"
  },
  {
    titulo: "Assassination Classroom",
    autor: "Yūsei Matsui",
    descricao: "Uma turma de estudantes tem a missão de assassinar seu professor alienígena antes que ele destrua a Terra.",
    genero: "Ação, Comédia, Sobrenatural"
  },
  {
    titulo: "Nisekoi",
    autor: "Naoshi Komi",
    descricao: "Dois jovens fingem estar em um relacionamento para evitar um conflito entre suas famílias mafiosas.",
    genero: "Comédia, Romance, Harem"
  },
  {
    titulo: "Magi: The Labyrinth of Magic",
    autor: "Shinobu Ohtaka",
    descricao: "Aladdin, Alibaba e Morgiana embarcam em uma jornada em um mundo cheio de magia e mistérios.",
    genero: "Ação, Aventura, Fantasia, Magia"
  },
  {
    titulo: "Noragami",
    autor: "Adachitoka",
    descricao: "Yato, um deus menor sem templo, tenta ganhar reconhecimento ao atender pedidos humanos.",
    genero: "Ação, Sobrenatural, Fantasia"
  },
  {
    titulo: "Re:Zero",
    autor: "Tappei Nagatsuki",
    descricao: "Um jovem é transportado para um mundo de fantasia e descobre que tem o poder de voltar no tempo sempre que morre.",
    genero: "Fantasia, Drama, Aventura"
  },
  {
    titulo: "To Love-Ru",
    autor: "Saki Hasemi",
    descricao: "Um estudante do ensino médio tem sua vida virada de cabeça para baixo quando uma princesa alienígena cai em sua banheira.",
    genero: "Comédia, Romance, Ecchi"
  },
  {
    titulo: "Katekyo Hitman Reborn!",
    autor: "Akira Amano",
    descricao: "Um estudante tímido descobre que é o herdeiro da máfia italiana e precisa treinar para se tornar o próximo chefe.",
    genero: "Ação, Comédia, Shounen"
  },
  {
    titulo: "Elfen Lied",
    autor: "Lynn Okamoto",
    descricao: "Uma mutante com poderes telecinéticos foge de uma instalação secreta e encontra refúgio com dois jovens.",
    genero: "Ação, Horror, Sobrenatural"
  },
  {
    titulo: "D.Gray-man",
    autor: "Katsura Hoshino",
    descricao: "Allen Walker, um exorcista, luta contra Akumas, criaturas criadas pelo Conde do Milênio.",
    genero: "Ação, Sobrenatural, Shounen"
  },
  {
    titulo: "Soul Eater",
    autor: "Atsushi Ōkubo",
    descricao: "Alunos de uma escola de mestres e suas armas vivas tentam coletar almas malignas para se tornarem Death Scythes.",
    genero: "Ação, Comédia, Sobrenatural"
  },
  {
    titulo: "Kimi ni Todoke",
    autor: "Karuho Shiina",
    descricao: "Uma garota tímida e mal compreendida tenta fazer amigos e conquistar seu primeiro amor.",
    genero: "Drama, Romance, Slice of Life"
  },
  {
    titulo: "Boku dake ga Inai Machi (Erased)",
    autor: "Kei Sanbe",
    descricao: "Um homem com a habilidade de voltar no tempo tenta impedir uma série de assassinatos que ocorreu em sua infância.",
    genero: "Mistério, Sobrenatural, Suspense"
  },
  {
    titulo: "Yakusoku no Neverland (The Promised Neverland)",
    autor: "Kaiu Shirai",
    descricao: "Crianças de um orfanato descobrem que seu lar perfeito esconde um segredo sombrio e planejam uma fuga.",
    genero: "Suspense, Drama, Sobrenatural"
  },
  {
    titulo: "Deadman Wonderland",
    autor: "Jinsei Kataoka",
    descricao: "Um jovem é acusado injustamente de um massacre e enviado para uma prisão onde os presos lutam em jogos mortais.",
    genero: "Ação, Horror, Sci-Fi"
  },
  {
    titulo: "Tengen Toppa Gurren Lagann",
    autor: "Kazuki Nakashima",
    descricao: "Dois jovens em um mundo subterrâneo lutam para conquistar a superfície pilotando mechas gigantes.",
    genero: "Ação, Aventura, Mecha"
  },
  {
    titulo: "Toriko",
    autor: "Mitsutoshi Shimabukuro",
    descricao: "Um caçador gourmet viaja por um mundo cheio de criaturas gigantescas em busca dos ingredientes mais raros e deliciosos.",
    genero: "Ação, Aventura, Comédia"
  },
  {
    titulo: "Samurai Champloo",
    autor: "Manglobe",
    descricao: "Dois espadachins e uma jovem embarcam em uma jornada para encontrar o samurai que cheira a girassóis.",
    genero: "Ação, Aventura, Histórico"
  },
  {
    titulo: "Black Lagoon",
    autor: "Rei Hiroe",
    descricao: "Uma empresa mercenária opera em uma cidade fictícia no sudeste asiático, envolvendo-se em ações criminosas.",
    genero: "Ação, Aventura, Seinen"
  },
  {
    titulo: "Fate/Stay Night",
    autor: "Type-Moon",
    descricao: "Mestres e servos lutam em uma guerra secreta pelo Cálice Sagrado, que concede qualquer desejo.",
    genero: "Ação, Fantasia, Sobrenatural"
  },
  {
    titulo: "Rurouni Kenshin",
    autor: "Nobuhiro Watsuki",
    descricao: "Um ex-assassino vaga pelo Japão Meiji como um andarilho, jurando nunca mais matar.",
    genero: "Ação, Aventura, Histórico"
  },
  {
    titulo: "The Rising of the Shield Hero",
    autor: "Aneko Yusagi",
    descricao: "Um jovem é invocado para outro mundo como o Herói do Escudo e precisa salvar o reino de ondas de destruição.",
    genero: "Aventura, Fantasia, Isekai"
  },
  {
    titulo: "Bakuman",
    autor: "Tsugumi Ohba",
    descricao: "Dois estudantes do ensino médio sonham em se tornar mangakás de sucesso.",
    genero: "Comédia, Drama, Slice of Life"
  },
  {
    titulo: "Shokugeki no Soma",
    autor: "Yūto Tsukuda",
    descricao: "Um jovem chef ambicioso entra em uma academia culinária de elite onde batalhas gastronômicas são travadas.",
    genero: "Comédia, Escolar, Shounen"
  },
  {
    titulo: "Dr. Stone",
    autor: "Riichiro Inagaki",
    descricao: "Após a humanidade ser petrificada por milhares de anos, um jovem gênio tenta reconstruir a civilização com ciência.",
    genero: "Aventura, Ficção Científica, Shounen"
  },
  {
    titulo: "Anohana: The Flower We Saw That Day",
    autor: "Mari Okada",
    descricao: "Um grupo de amigos de infância tenta lidar com o fantasma de sua amiga que morreu anos atrás.",
    genero: "Drama, Sobrenatural, Slice of Life"
  },
  {
    titulo: "Bungou Stray Dogs",
    autor: "Kafka Asagiri",
    descricao: "Detetives com poderes sobrenaturais enfrentam organizações criminosas em uma cidade fictícia.",
    genero: "Ação, Mistério, Sobrenatural"
  },
  {
    titulo: "Golden Kamuy",
    autor: "Satoru Noda",
    descricao: "Um veterano da guerra russo-japonesa e uma jovem ainu partem em busca de um tesouro escondido.",
    genero: "Ação, Aventura, Histórico"
  },
  {
    titulo: "Ajin",
    autor: "Gamon Sakurai",
    descricao: "Humanos imortais conhecidos como Ajin são caçados pelo governo e tratados como experimentos.",
    genero: "Ação, Horror, Sobrenatural"
  },
  {
    titulo: "Gantz",
    autor: "Hiroya Oku",
    descricao: "Pessoas mortas são ressuscitadas para participar de uma série de missões violentas em um jogo mortal.",
    genero: "Ação, Ficção Científica, Horror"
  },
  {
    titulo: "Monster",
    autor: "Naoki Urasawa",
    descricao: "Um cirurgião salva a vida de um menino que se torna um serial killer, e ele tenta capturá-lo para impedir mais mortes.",
    genero: "Mistério, Psicológico, Seinen"
  },
  {
    titulo: "Horimiya",
    autor: "HERO",
    descricao: "Dois estudantes com personalidades contrastantes formam uma amizade que se transforma em romance.",
    genero: "Comédia, Romance, Slice of Life"
  },
  {
    titulo: "The Quintessential Quintuplets",
    autor: "Negi Haruba",
    descricao: "Um estudante pobre é contratado para ser tutor de cinco irmãs gêmeas idênticas e desmotivadas.",
    genero: "Comédia, Romance, Harem"
  },
  {
    titulo: "Akame ga Kill!",
    autor: "Takahiro",
    descricao: "Um jovem guerreiro se junta a um grupo de assassinos que busca derrubar um império corrupto.",
    genero: "Ação, Fantasia, Shounen"
  },
  {
    titulo: "Erased",
    autor: "Kei Sanbe",
    descricao: "Um homem com a habilidade de voltar no tempo tenta salvar uma jovem de ser assassinada.",
    genero: "Mistério, Sobrenatural, Drama"
  },
  {
    titulo: "The Ancient Magus' Bride",
    autor: "Kore Yamazaki",
    descricao: "Uma jovem vendida como escrava se torna aprendiz e noiva de um mago não humano.",
    genero: "Fantasia, Romance, Sobrenatural"
  },
  {
    titulo: "Yamada-kun to 7-nin no Majo",
    autor: "Miki Yoshikawa",
    descricao: "Um delinquente descobre que tem o poder de trocar de corpo com outras pessoas ao beijá-las.",
    genero: "Comédia, Escolar, Sobrenatural"
  },
  {
    titulo: "Nana",
    autor: "Ai Yazawa",
    descricao: "Duas jovens com o mesmo nome e passados diferentes se tornam amigas enquanto perseguem seus sonhos em Tóquio.",
    genero: "Drama, Romance, Musical"
  },
  {
    titulo: "Violet Evergarden",
    autor: "Kana Akatsuki",
    descricao: "Uma ex-soldado se torna escritora de cartas para entender os sentimentos e encontrar seu próprio propósito.",
    genero: "Drama, Slice of Life, Militar"
  },
  {
    titulo: "Spy x Family",
    autor: "Tatsuya Endo",
    descricao: "Um espião, uma assassina e uma telepata formam uma família para cumprir suas respectivas missões.",
    genero: "Ação, Comédia, Slice of Life"
  },
  {
    titulo: "Fire Force",
    autor: "Atsushi Ōkubo",
    descricao: "Bombeiros com habilidades especiais combatem pessoas que espontaneamente entram em combustão.",
    genero: "Ação, Sobrenatural, Shounen"
  },
  {
    titulo: "Zatch Bell!",
    autor: "Makoto Raiku",
    descricao: "Demônios infantis competem para se tornar o rei de seu mundo usando livros de feitiços e humanos como parceiros.",
    genero: "Ação, Comédia, Sobrenatural"
  },
  {
    titulo: "Record of Ragnarok",
    autor: "Shinya Umemura",
    descricao: "Deuses e humanos se enfrentam em batalhas épicas para decidir o destino da humanidade.",
    genero: "Ação, Mitologia, Fantasia"
  },
  {
    titulo: "Darling in the Franxx",
    autor: "Code:000",
    descricao: "Pilotos adolescentes defendem a humanidade de criaturas monstruosas em um futuro distópico.",
    genero: "Ficção Científica, Mecha, Drama"
  },
  {
    titulo: "Barakamon",
    autor: "Satsuki Yoshino",
    descricao: "Um calígrafo é exilado para uma ilha rural, onde aprende lições de vida com os habitantes locais.",
    genero: "Comédia, Slice of Life, Seinen"
  },
  {
    titulo: "March Comes in Like a Lion",
    autor: "Chica Umino",
    descricao: "Um prodígio do shogi luta com depressão e a busca por significado em sua vida enquanto se conecta com uma nova família.",
    genero: "Drama, Slice of Life, Seinen"
  },
  {
    titulo: "Tales of Demons and Gods",
    autor: "Mad Snail",
    descricao: "Após morrer em batalha, Nie Li retorna ao passado com seu conhecimento de cultivação e busca mudar seu destino.",
    genero: "Ação, Aventura, Cultivação"
  },
  {
    titulo: "Martial Peak",
    autor: "Momo",
    descricao: "Yang Kai luta para alcançar o pináculo da cultivação em um mundo onde apenas os fortes sobrevivem.",
    genero: "Ação, Aventura, Cultivação"
  },
  {
    titulo: "Battle Through the Heavens",
    autor: "Tian Can Tu Dou",
    descricao: "Xiao Yan, outrora um gênio, busca recuperar seu poder perdido e alcançar o topo da cultivação.",
    genero: "Ação, Aventura, Cultivação"
  },
  {
    titulo: "Star Martial God Technique",
    autor: "Mad Snail",
    descricao: "Em um mundo dividido em diferentes caminhos de cultivação, Ye Xinghe busca dominar as artes marciais e alcançar o poder supremo.",
    genero: "Ação, Aventura, Cultivação"
  },
  {
    titulo: "Apotheosis",
    autor: "Ranzai Studio",
    descricao: "Luo Zheng, escravizado e humilhado, busca a ascensão através da cultivação e a vingança contra seus inimigos.",
    genero: "Ação, Aventura, Cultivação"
  },
  {
    titulo: "The Great Ruler",
    autor: "Tian Can Tu Dou",
    descricao: "Mu Chen, um jovem talentoso, busca se tornar o governante supremo no vasto mundo da cultivação.",
    genero: "Ação, Aventura, Cultivação"
  },
  {
    titulo: "Spirit Sword Sovereign",
    autor: "Yuan Man Dongman",
    descricao: "Após ser traído e morto, Chu Xingyun reencarna e busca poder através da cultivação para vingar-se de seus inimigos.",
    genero: "Ação, Aventura, Cultivação"
  },
  {
    titulo: "God of Martial Arts",
    autor: "Mad Snail",
    descricao: "Em um mundo onde a força reina, Lin Feng busca tornar-se o deus das artes marciais através da cultivação.",
    genero: "Ação, Aventura, Cultivação"
  },
  {
    titulo: "Wu Dong Qian Kun",
    autor: "Tian Can Tu Dou",
    descricao: "Lin Dong, filho de uma família arruinada, busca se vingar e ascender ao topo da cultivação.",
    genero: "Ação, Aventura, Cultivação"
  },
  {
    titulo: "Against the Gods",
    autor: "Mars Gravity",
    descricao: "Yun Che, renascido com um poderoso artefato, busca desafiar o destino e alcançar o poder supremo através da cultivação.",
    genero: "Ação, Aventura, Cultivação"
  },
  {
    titulo: "The Strongest God King",
    autor: "Manga King",
    descricao: "Um jovem cultivador tenta se tornar o rei supremo dos deuses através de técnicas poderosas.",
    genero: "Ação, Cultivação, Fantasia"
  },
  {
    titulo: "Rebirth of the Urban Immortal Cultivator",
    autor: "Ten Miles Swordsman",
    descricao: "Chen Fan, um imortal em outro mundo, reencarna em sua vida anterior na Terra e busca ascender novamente.",
    genero: "Cultivação, Ação, Fantasia"
  },
  {
    titulo: "Cultivation Chat Group",
    autor: "Legend of the Paladin",
    descricao: "Um estudante universitário comum é arrastado para o mundo da cultivação após ser adicionado a um grupo de cultivadores.",
    genero: "Comédia, Cultivação, Aventura"
  },
  {
    titulo: "Immortal, Invincible",
    autor: "Dong Man Tang",
    descricao: "Um cultivador que perambula pelos céus e terras tenta alcançar o status de imortal.",
    genero: "Ação, Cultivação, Aventura"
  },
  {
    titulo: "Heavenly Jewel Change",
    autor: "Tang Jia San Shao",
    descricao: "Zhou Weiqing, um jovem marginalizado, descobre seu talento para a cultivação e se torna um mestre poderoso.",
    genero: "Ação, Cultivação, Aventura"
  },
  {
    titulo: "Dragon Prince Yuan",
    autor: "Heavenly Silkworm Potato",
    descricao: "Yuan, o príncipe do dragão, busca dominar as artes da cultivação para se tornar invencível.",
    genero: "Ação, Aventura, Cultivação"
  },
  {
    titulo: "The King of Fighters: A New Beginning",
    autor: "KOF",
    descricao: "Guerreros lutam em um torneio mortal onde a cultivação e as artes marciais são as chaves para a vitória.",
    genero: "Ação, Cultivação, Artes Marciais"
  },
  {
    titulo: "I Shall Seal the Heavens",
    autor: "Er Gen",
    descricao: "Meng Hao é arrastado para o mundo da cultivação, onde deve selar os céus para alcançar o poder supremo.",
    genero: "Cultivação, Ação, Aventura"
  },
  {
    titulo: "Everlasting God of Sword",
    autor: "Jie He Xiang",
    descricao: "Um jovem mestre espadachim busca dominar a cultivação para alcançar a imortalidade.",
    genero: "Ação, Cultivação, Fantasia"
  },
  {
    titulo: "Heavenly Sword Villa",
    autor: "Qin Mo",
    descricao: "Um jovem herdeiro de uma vila mística tenta proteger seus entes queridos e dominar as artes da cultivação.",
    genero: "Ação, Cultivação, Aventura"
  },
  {
    titulo: "Lord Xue Ying",
    autor: "I Eat Tomatoes",
    descricao: "Xue Ying luta contra inimigos poderosos enquanto tenta proteger sua família e dominar o caminho da cultivação.",
    genero: "Ação, Cultivação, Fantasia"
  },
  {
    titulo: "Legend of Immortals",
    autor: "Tian Can Tu Dou",
    descricao: "Um jovem cultivador tenta superar adversidades e se tornar um imortal.",
    genero: "Ação, Cultivação, Aventura"
  },
  {
    titulo: "Master of Gu",
    autor: "Skyfarrow",
    descricao: "Em um mundo onde a cultivação está ligada ao uso de criaturas místicas, Fang Yuan busca o poder supremo.",
    genero: "Ação, Cultivação, Fantasia"
  },
  {
    titulo: "Perfect World",
    autor: "Chen Dong",
    descricao: "Shi Hao busca dominar o caminho da cultivação para sobreviver em um mundo de deuses e demônios.",
    genero: "Ação, Cultivação, Fantasia"
  },
  {
    titulo: "Spirit Blade Mountain",
    autor: "Xian Man Dongman",
    descricao: "Um jovem talentoso busca seu lugar no mundo da cultivação e nas artes espirituais.",
    genero: "Ação, Cultivação, Fantasia"
  },
  {
    titulo: "Swallowed Star",
    autor: "I Eat Tomatoes",
    descricao: "Luo Feng deve usar seu talento e cultivação para proteger a humanidade contra forças alienígenas.",
    genero: "Ficção Científica, Cultivação, Ação"
  },
  {
    titulo: "World of Immortals",
    autor: "Tian Can Tu Dou",
    descricao: "Em um mundo de imortais, Xiao Chen busca a ascensão ao poder máximo através da cultivação.",
    genero: "Ação, Cultivação, Fantasia"
  },
  {
    titulo: "The Path Toward Heaven",
    autor: "Mao Ni",
    descricao: "Um cultivador enigmático trilha um caminho que pode levá-lo à imortalidade ou à destruição.",
    genero: "Ação, Cultivação, Aventura"
  },
  {
    titulo: "The Peerless Martial Spirit",
    autor: "Golden Age",
    descricao: "Um jovem guerreiro com um espírito marcial sem igual busca seu lugar no mundo da cultivação.",
    genero: "Ação, Cultivação, Fantasia"
  },
  {
    titulo: "The Scholar’s Reincarnation",
    autor: "Soheun",
    descricao: "Após sua morte, um mestre de artes marciais reencarna e busca um novo caminho através da cultivação.",
    genero: "Ação, Cultivação, Fantasia"
  },
  {
    titulo: "Immortal Swordsman in the Reverse World",
    autor: "Rebirth Studio",
    descricao: "Um poderoso espadachim imortal se encontra em um mundo onde a cultivação é governada por mulheres.",
    genero: "Ação, Cultivação, Fantasia"
  },
  {
    titulo: "Legend of the Northern Blade",
    autor: "Hae-Min",
    descricao: "Após a queda de sua seita, Jin busca vingança e o poder máximo através da cultivação.",
    genero: "Ação, Cultivação, Artes Marciais"
  },
  {
    titulo: "Holy Ancestor",
    autor: "Kue King",
    descricao: "Um jovem cultivador busca superar seus limites e alcançar o poder supremo em um mundo hostil.",
    genero: "Ação, Cultivação, Fantasia"
  },
  {
    titulo: "The God of High School",
    autor: "Yongje Park",
    descricao: "Competidores de todo o mundo lutam em um torneio mortal, onde as habilidades de cultivação são cruciais.",
    genero: "Ação, Cultivação, Artes Marciais"
  },
  {
    titulo: "Immortal Path to Heaven",
    autor: "Starve",
    descricao: "Um jovem cultivador tenta desvendar os mistérios da imortalidade e alcançar o pináculo do poder.",
    genero: "Ação, Cultivação, Aventura"
  },
  {
    titulo: "Heavenly Dao Rankings",
    autor: "Dark Realm",
    descricao: "Cultivadores de todo o mundo competem por poder e prestígio nos rankings divinos.",
    genero: "Ação, Cultivação, Fantasia"
  },
  {
    titulo: "God Level Demon",
    autor: "Panda Studio",
    descricao: "Um demônio poderoso busca se elevar ao nível dos deuses por meio da cultivação.",
    genero: "Ação, Cultivação, Fantasia"
  },
  {
    titulo: "Nine Star Hegemon Body Art",
    autor: "Xiang Yan",
    descricao: "Um jovem cultivador tenta dominar as artes da cultivação para superar seus rivais e inimigos.",
    genero: "Ação, Cultivação, Aventura"
  },
  {
    titulo: "Transcending the Nine Heavens",
    autor: "Fenglin Tianxia",
    descricao: "Chu Yang, o mestre da espada dos Nove Céus, busca poder e vingança através da cultivação.",
    genero: "Ação, Cultivação, Fantasia"
  },
  {
    titulo: "Immortal Mortal",
    autor: "Goose Five",
    descricao: "Mo Wuji, um cultivador comum, luta para superar suas limitações e se tornar um imortal.",
    genero: "Ação, Cultivação, Aventura"
  },
  {
    titulo: "God Emperor",
    autor: "Flying Fish",
    descricao: "Um jovem príncipe tenta se tornar o imperador dos deuses por meio da cultivação.",
    genero: "Ação, Cultivação, Fantasia"
  },
  {
    titulo: "Reverend Insanity",
    autor: "Gu Zhen Ren",
    descricao: "Fang Yuan, um cultivador malvado, busca poder e imortalidade a qualquer custo.",
    genero: "Ação, Cultivação, Seinen"
  },
  {
    titulo: "Peerless Dad",
    autor: "Lee Hyun-Seok",
    descricao: "Um pai solteiro tenta criar seus filhos enquanto avança em seu caminho de cultivação.",
    genero: "Ação, Comédia, Cultivação"
  },
  {
    titulo: "Heavenly Star",
    autor: "Su Xiao Nian",
    descricao: "Um jovem mestre das artes marciais busca ascender ao poder supremo e proteger seus entes queridos.",
    genero: "Ação, Cultivação, Fantasia"
  },
  {
    titulo: "Unrivaled Tang Sect",
    autor: "Tang Jia San Shao",
    descricao: "Em um mundo de espíritos e cultivação, Tang San busca se tornar o cultivador mais poderoso de todos.",
    genero: "Ação, Cultivação, Aventura"
  },
  {
    titulo: "Strongest Abandoned Son",
    autor: "Goose Five",
    descricao: "Um jovem abandonado tenta se vingar e alcançar o poder máximo por meio da cultivação.",
    genero: "Ação, Cultivação, Aventura"
  },
  {
    titulo: "Heavenly Martial God",
    autor: "Xian Man Studio",
    descricao: "Um mestre das artes marciais busca se tornar uma divindade por meio da cultivação.",
    genero: "Ação, Cultivação, Fantasia"
  },
  {
    titulo: "Nine Heavenly Star Art",
    autor: "Spirit Immortal",
    descricao: "Um jovem tenta dominar as artes celestiais e alcançar a imortalidade por meio da cultivação.",
    genero: "Ação, Cultivação, Aventura"
  },
  {
    titulo: "Divine Throne of Primordial Blood",
    autor: "Mao Ni",
    descricao: "Um cultivador cego tenta superar as adversidades e se tornar o governante dos céus.",
    genero: "Ação, Cultivação, Fantasia"
  },
  {
    titulo: "Forty Millenniums of Cultivation",
    autor: "The Enlightened Master",
    descricao: "Um cultivador usa tecnologia avançada para alcançar novos níveis de poder em um mundo futurista.",
    genero: "Ficção Científica, Cultivação, Ação"
  },
  {
    titulo: "The Beginning After the End",
    autor: "TurtleMe",
    descricao: "Um rei é reencarnado em um novo mundo com suas memórias intactas e busca viver uma nova vida.",
    genero: "Ação, Aventura, Isekai",
  },
  {
    titulo: "Solo Leveling",
    autor: "Chugong",
    descricao: "Um caçador fraco se torna o mais forte após receber um sistema que o ajuda a melhorar suas habilidades.",
    genero: "Ação, Aventura, Isekai",
  },
  {
    titulo: "The Legendary Moonlight Sculptor",
    autor: "Hee-Jeong",
    descricao: "Um jogador de MMORPG se torna um escultor lendário e busca sucesso e riqueza em um novo mundo virtual.",
    genero: "Ação, Aventura, Isekai",
  },
  {
    titulo: "Overgeared",
    autor: "Park Saenal",
    descricao: "Um jogador em um MMORPG começa sua jornada com uma arma lendária e busca se tornar o mais forte.",
    genero: "Ação, Aventura, Isekai",
  },
  {
    titulo: "The World's Finest Assassin Gets Reincarnated in Another World as an Aristocrat",
    autor: "Ryo Shirakome",
    descricao: "Um assassino de renome é reencarnado em um mundo de fantasia e usa suas habilidades para atingir seus novos objetivos.",
    genero: "Ação, Aventura, Isekai",
  },
  {
    titulo: "Log Horizon",
    autor: "Mamare Touno",
    descricao: "Jogadores de um MMORPG ficam presos no jogo e devem se adaptar ao novo mundo enquanto buscam uma forma de voltar para casa.",
    genero: "Ação, Aventura, Isekai",
  },
  {
    titulo: "Re:Zero - Starting Life in Another World",
    autor: "Tappei Nagatsuki",
    descricao: "Subaru Natsuki é transportado para um novo mundo e descobre que tem o poder de voltar no tempo após a morte.",
    genero: "Ação, Aventura, Isekai",
  },
  {
    titulo: "Arifureta: From Commonplace to World's Strongest",
    autor: "Ryo Shirakome",
    descricao: "Hajime Nagumo e seus colegas são transportados para outro mundo, mas ele é traído e deve lutar para se tornar o mais forte.",
    genero: "Ação, Aventura, Isekai",
  },
  {
    titulo: "That Time I Got Reincarnated as a Slime",
    autor: "Fuse",
    descricao: "Um homem é reencarnado como um slime em um novo mundo e usa suas habilidades para se tornar o ser mais poderoso.",
    genero: "Ação, Aventura, Isekai",
  },
  {
    titulo: "No Game No Life",
    autor: "Yuu Kamiya",
    descricao: "Os irmãos Sora e Shiro são transportados para um mundo onde tudo é decidido por jogos e eles buscam conquistar o mundo.",
    genero: "Ação, Aventura, Isekai",
  },
  {
    titulo: "The Rising of the Shield Hero",
    autor: "Aneko Yusagi",
    descricao: "Naofumi Iwatani é transportado para outro mundo como o Herói do Escudo e deve lutar contra monstros e traições.",
    genero: "Ação, Aventura, Isekai",
  },
  {
    titulo: "Ascendance of a Bookworm",
    autor: "Miya Kazuki",
    descricao: "Uma garota fã de livros é reencarnada em um mundo medieval e busca preencher sua vida com livros e conhecimento.",
    genero: "Ação, Aventura, Isekai",
  },
  {
    titulo: "The Devil is a Part-Timer!",
    autor: "Satoshi Wagahara",
    descricao: "O Senhor dos Demônios é transportado para o mundo moderno e deve trabalhar meio período em uma loja para sobreviver.",
    genero: "Comédia, Isekai",
  },
  {
    titulo: "KonoSuba: God's Blessing on This Wonderful World!",
    autor: "Natsume Akatsuki",
    descricao: "Kazuma Satou é reencarnado em um mundo de fantasia e forma um grupo de heróis excêntricos para enfrentar desafios.",
    genero: "Ação, Aventura, Comédia, Isekai",
  },
  {
    titulo: "My Next Life as a Villainess: All Routes Lead to Doom!",
    autor: "Satoru Yamaguchi",
    descricao: "Katarina Claes reencarna no corpo de uma vilã de um jogo e tenta evitar todos os cenários que levam à sua ruína.",
    genero: "Comédia, Isekai, Romance",
  },
  {
    titulo: "How a Realist Hero Rebuilt the Kingdom",
    autor: "Dojyomaru",
    descricao: "Kazuya Souma é transportado para um reino em crise e usa seu conhecimento moderno para reconstruí-lo.",
    genero: "Ação, Aventura, Isekai",
  },
  {
    titulo: "The Saint's Magic Power is Omnipotent",
    autor: "Yoshiko Usui",
    descricao: "Uma mulher é transportada para outro mundo e descobre que tem um poder mágico incrível, que usa para ajudar a realeza.",
    genero: "Ação, Aventura, Isekai",
  },
  {
    titulo: "Reincarnated as a Sword",
    autor: "Yuu Tanaka",
    descricao: "Um homem é reencarnado como uma espada em um novo mundo e se torna a arma de uma jovem guerreira.",
    genero: "Ação, Aventura, Isekai",
  },
  {
    titulo: "The Faraway Paladin",
    autor: "Kanata Yanagino",
    descricao: "Will, um garoto criado por mortos-vivos em um mundo estranho, busca se tornar um paladino e cumprir sua missão.",
    genero: "Ação, Aventura, Isekai",
  },
  {
    titulo: "The Hero is Overpowered but Overly Cautious",
    autor: "Light Tuchihi",
    descricao: "O herói que deve salvar o mundo é extremamente poderoso, mas também excessivamente cauteloso em suas ações.",
    genero: "Ação, Aventura, Isekai",
  },
  {
    titulo: "Isekai Meikyuu de Harem wo",
    autor: "Shachi Sogano",
    descricao: "Um jovem é transportado para outro mundo e cria um harém enquanto explora masmorras e enfrenta perigos.",
    genero: "Ação, Aventura, Isekai",
  },
  {
    titulo: "The Adventurer Who Doesn't Believe in the Gods",
    autor: "Hiroshi Koyama",
    descricao: "Um aventureiro é transportado para um novo mundo e deve lidar com deuses e poderes sobrenaturais.",
    genero: "Ação, Aventura, Isekai",
  },
  {
    titulo: "The World's Best Assassin, Reincarnated in a Different World as an Aristocrat",
    autor: "Fujino Omori",
    descricao: "O Senhor dos Demônios reencarna como um mago no nível máximo em um novo mundo e busca novas formas de poder.",
    genero: "Ação, Aventura, Isekai, Magia",
  },
  {
    titulo: "The Last Boss is a Female Soldier",
    autor: "Araki Ryo",
    descricao: "Um homem é transportado para um mundo onde é necessário enfrentar uma chefe final que é uma poderosa soldado.",
    genero: "Ação, Aventura, Isekai",
  },
  {
    titulo: "The Reincarnation of the Strongest Exorcist in Another World",
    autor: "Shin no Kizuna",
    descricao: "Um exorcista poderoso reencarna em um novo mundo e usa suas habilidades para proteger e enfrentar forças das trevas.",
    genero: "Ação, Aventura, Isekai",
  },
  {
    titulo: "The Black Summoner",
    autor: "Kurosawa Ryo",
    descricao: "Um jovem é transportado para outro mundo e se torna um invocador negro com habilidades únicas e perigosas.",
    genero: "Ação, Aventura, Isekai",
  },
  {
    titulo: "The Perfect World",
    autor: "Yoshihiro Togashi",
    descricao: "Um jovem reencarna em um mundo perfeito, mas descobre que precisa enfrentar desafios para encontrar seu verdadeiro propósito.",
    genero: "Ação, Aventura, Isekai",
  },
  {
    titulo: "Isekai Tensei Soudouki",
    autor: "Shiba",
    descricao: "Um homem é reencarnado em um novo mundo e usa suas habilidades e conhecimentos anteriores para mudar o destino.",
    genero: "Ação, Aventura, Isekai",
  },
  {
    titulo: "The Beginning After the End",
    autor: "TurtleMe",
    descricao: "Um rei é reencarnado em um novo mundo com suas memórias intactas e busca viver uma nova vida.",
    genero: "Ação, Aventura, Isekai",
  },
  {
    titulo: "Solo Leveling",
    autor: "Chugong",
    descricao: "Um caçador fraco se torna o mais forte após receber um sistema que o ajuda a melhorar suas habilidades.",
    genero: "Ação, Aventura, Isekai",
  },
  {
    titulo: "The Legendary Moonlight Sculptor",
    autor: "Hee-Jeong",
    descricao: "Um jogador de MMORPG se torna um escultor lendário e busca sucesso e riqueza em um novo mundo virtual.",
    genero: "Ação, Aventura, Isekai",
  },
  {
    titulo: "Overgeared",
    autor: "Park Saenal",
    descricao: "Um jogador em um MMORPG começa sua jornada com uma arma lendária e busca se tornar o mais forte.",
    genero: "Ação, Aventura, Isekai",
  },
  {
    titulo: "The World's Finest Assassin Gets Reincarnated in Another World as an Aristocrat",
    autor: "Ryo Shirakome",
    descricao: "Um assassino de renome é reencarnado em um mundo de fantasia e usa suas habilidades para atingir seus novos objetivos.",
    genero: "Ação, Aventura, Isekai",
  },
  {
    titulo: "Log Horizon",
    autor: "Mamare Touno",
    descricao: "Jogadores de um MMORPG ficam presos no jogo e devem se adaptar ao novo mundo enquanto buscam uma forma de voltar para casa.",
    genero: "Ação, Aventura, Isekai",
  },
  {
    titulo: "Re:Zero - Starting Life in Another World",
    autor: "Tappei Nagatsuki",
    descricao: "Subaru Natsuki é transportado para um novo mundo e descobre que tem o poder de voltar no tempo após a morte.",
    genero: "Ação, Aventura, Isekai",
  },
  {
    titulo: "Arifureta: From Commonplace to World's Strongest",
    autor: "Ryo Shirakome",
    descricao: "Hajime Nagumo e seus colegas são transportados para outro mundo, mas ele é traído e deve lutar para se tornar o mais forte.",
    genero: "Ação, Aventura, Isekai",
  },
  {
    titulo: "That Time I Got Reincarnated as a Slime",
    autor: "Fuse",
    descricao: "Um homem é reencarnado como um slime em um novo mundo e usa suas habilidades para se tornar o ser mais poderoso.",
    genero: "Ação, Aventura, Isekai",
  },
  {
    titulo: "No Game No Life",
    autor: "Yuu Kamiya",
    descricao: "Os irmãos Sora e Shiro são transportados para um mundo onde tudo é decidido por jogos e eles buscam conquistar o mundo.",
    genero: "Ação, Aventura, Isekai",
  },
  {
    titulo: "The Rising of the Shield Hero",
    autor: "Aneko Yusagi",
    descricao: "Naofumi Iwatani é transportado para outro mundo como o Herói do Escudo e deve lutar contra monstros e traições.",
    genero: "Ação, Aventura, Isekai",
  },
  {
    titulo: "Ascendance of a Bookworm",
    autor: "Miya Kazuki",
    descricao: "Uma garota fã de livros é reencarnada em um mundo medieval e busca preencher sua vida com livros e conhecimento.",
    genero: "Ação, Aventura, Isekai",
  },
  {
    titulo: "The Devil is a Part-Timer!",
    autor: "Satoshi Wagahara",
    descricao: "O Senhor dos Demônios é transportado para o mundo moderno e deve trabalhar meio período em uma loja para sobreviver.",
    genero: "Comédia, Isekai",
  },
  {
    titulo: "KonoSuba: God's Blessing on This Wonderful World!",
    autor: "Natsume Akatsuki",
    descricao: "Kazuma Satou é reencarnado em um mundo de fantasia e forma um grupo de heróis excêntricos para enfrentar desafios.",
    genero: "Ação, Aventura, Comédia, Isekai",
  },
  {
    titulo: "My Next Life as a Villainess: All Routes Lead to Doom!",
    autor: "Satoru Yamaguchi",
    descricao: "Katarina Claes reencarna no corpo de uma vilã de um jogo e tenta evitar todos os cenários que levam à sua ruína.",
    genero: "Comédia, Isekai, Romance",
  },
  {
    titulo: "How a Realist Hero Rebuilt the Kingdom",
    autor: "Dojyomaru",
    descricao: "Kazuya Souma é transportado para um reino em crise e usa seu conhecimento moderno para reconstruí-lo.",
    genero: "Ação, Aventura, Isekai",
  },
  {
    titulo: "The Saint's Magic Power is Omnipotent",
    autor: "Yoshiko Usui",
    descricao: "Uma mulher é transportada para outro mundo e descobre que tem um poder mágico incrível, que usa para ajudar a realeza.",
    genero: "Ação, Aventura, Isekai",
  },
  {
    titulo: "Reincarnated as a Sword",
    autor: "Yuu Tanaka",
    descricao: "Um homem é reencarnado como uma espada em um novo mundo e se torna a arma de uma jovem guerreira.",
    genero: "Ação, Aventura, Isekai",
  },
  {
    titulo: "The Faraway Paladin",
    autor: "Kanata Yanagino",
    descricao: "Will, um garoto criado por mortos-vivos em um mundo estranho, busca se tornar um paladino e cumprir sua missão.",
    genero: "Ação, Aventura, Isekai",
  },
  {
    titulo: "The Hero is Overpowered but Overly Cautious",
    autor: "Light Tuchihi",
    descricao: "O herói que deve salvar o mundo é extremamente poderoso, mas também excessivamente cauteloso em suas ações.",
    genero: "Ação, Aventura, Isekai",
  },
  {
    titulo: "Isekai Meikyuu de Harem wo",
    autor: "Shachi Sogano",
    descricao: "Um jovem é transportado para outro mundo e cria um harém enquanto explora masmorras e enfrenta perigos.",
    genero: "Ação, Aventura, Isekai",
  },
  {
    titulo: "The Adventurer Who Doesn't Believe in the Gods",
    autor: "Hiroshi Koyama",
    descricao: "Um aventureiro é transportado para um novo mundo e deve lidar com deuses e poderes sobrenaturais.",
    genero: "Ação, Aventura, Isekai",
  },
  {
    titulo: "The World's Best Assassin, Reincarnated in a Different World as an Aristocrat",
    autor: "Fujino Omori",
    descricao: "O Senhor dos Demônios reencarna como um mago no nível máximo em um novo mundo e busca novas formas de poder.",
    genero: "Ação, Aventura, Isekai, Magia",
  },
  {
    titulo: "The Last Boss is a Female Soldier",
    autor: "Araki Ryo",
    descricao: "Um homem é transportado para um mundo onde é necessário enfrentar uma chefe final que é uma poderosa soldado.",
    genero: "Ação, Aventura, Isekai",
  },
  {
    titulo: "The Reincarnation of the Strongest Exorcist in Another World",
    autor: "Shin no Kizuna",
    descricao: "Um exorcista poderoso reencarna em um novo mundo e usa suas habilidades para proteger e enfrentar forças das trevas.",
    genero: "Ação, Aventura, Isekai",
  },
  {
    titulo: "The Black Summoner",
    autor: "Kurosawa Ryo",
    descricao: "Um jovem é transportado para outro mundo e se torna um invocador negro com habilidades únicas e perigosas.",
    genero: "Ação, Aventura, Isekai",
  },
  {
    titulo: "The Perfect World",
    autor: "Yoshihiro Togashi",
    descricao: "Um jovem reencarna em um mundo perfeito, mas descobre que precisa enfrentar desafios para encontrar seu verdadeiro propósito.",
    genero: "Ação, Aventura, Isekai",
  },
  {
    titulo: "Isekai Tensei Soudouki",
    autor: "Shiba",
    descricao: "Um homem é reencarnado em um novo mundo e usa suas habilidades e conhecimentos anteriores para mudar o destino.",
    genero: "Ação, Aventura, Isekai",
  },
  {
    titulo: "Battle Through the Heavens",
    autor: "Tian Can Tu Dou",
    descricao: "Um jovem luta para se tornar o mais forte lutador em um mundo onde poder e habilidades são essenciais.",
    genero: "Ação, Aventura, Isekai",
  },
  {
    titulo: "Tales of Demons and Gods",
    autor: "Mad Snail",
    descricao: "Um jovem renasce após sua morte e busca mudar seu destino enquanto enfrenta demônios e inimigos poderosos.",
    genero: "Ação, Aventura, Isekai",
  },
  {
    titulo: "Martial Peak",
    autor: "Momo",
    descricao: "Um jovem busca se tornar o mais poderoso mestre marcial em um mundo onde apenas os mais fortes sobrevivem.",
    genero: "Ação, Aventura, Isekai",
  },
  {
    titulo: "The Great Ruler",
    autor: "Heavenly Sword",
    descricao: "Um jovem herói busca se tornar o governante supremo em um mundo cheio de magia e conflitos.",
    genero: "Ação, Aventura, Isekai, Magia",
  },
  {
    titulo: "Douluo Dalu",
    autor: "Tang Jia San Shao",
    descricao: "Em um mundo onde a força dos espíritos determina o poder, um jovem busca se tornar o mais forte lutador espiritual.",
    genero: "Ação, Aventura, Isekai",
  },
  {
    titulo: "The King's Avatar",
    autor: "Butterfly Blue",
    descricao: "Um jogador profissional é forçado a deixar seu time e começa uma nova jornada em um MMORPG com um novo avatar.",
    genero: "Ação, Aventura, Isekai",
  },
  {
    titulo: "Star Martial God Technique",
    autor: "Xia Da",
    descricao: "Um jovem busca dominar uma técnica marcial lendária e se tornar o mais poderoso em um mundo de guerras e magia.",
    genero: "Ação, Aventura, Isekai, Magia",
  },
  {
    titulo: "God of War",
    autor: "Shao Chen",
    descricao: "Um jovem que busca se tornar o Deus da Guerra em um mundo de batalhas e confrontos épicos.",
    genero: "Ação, Aventura, Isekai",
  },
  {
    titulo: "Qin's Moon",
    autor: "Qin Chen",
    descricao: "Um jovem herói deve enfrentar desafios e inimigos poderosos em sua jornada para se tornar o mais forte do mundo.",
    genero: "Ação, Aventura, Isekai",
  },
  {
    titulo: "The Wandering Warrior",
    autor: "Yu Dong",
    descricao: "Um guerreiro errante viaja por um mundo perigoso em busca de propósito e desafios.",
    genero: "Ação, Aventura, Isekai",
  },
  {
    titulo: "Genius Doctor: Black Belly Miss",
    autor: "Kong Xiao",
    descricao: "Uma médica excepcional reencarna em um novo mundo e usa suas habilidades para enfrentar perigos e intrigas.",
    genero: "Ação, Aventura, Isekai",
  },
  {
    titulo: "Divine Throne of Primordial Blood",
    autor: "Hao Xin",
    descricao: "Um jovem herói busca alcançar o trono divino enquanto enfrenta desafios e inimigos poderosos.",
    genero: "Ação, Aventura, Isekai",
  },
  {
    titulo: "Against the Gods",
    autor: "Mars Gravity",
    descricao: "Um jovem busca vingar sua família e se tornar o mais forte em um mundo cheio de deuses e poderes místicos.",
    genero: "Ação, Aventura, Isekai",
  },
  {
    titulo: "Sovereign of the Three Realms",
    autor: "Li Hu",
    descricao: "Um jovem busca se tornar o soberano dos três reinos e enfrentar desafios e inimigos em sua jornada.",
    genero: "Ação, Aventura, Isekai",
  },
  {
    titulo: "Dragon-Marked War God",
    autor: "Zhang Xiaofan",
    descricao: "Um jovem herói com uma marca de dragão busca se tornar o mais poderoso guerreiro em um mundo cheio de magia e perigos.",
    genero: "Ação, Aventura, Iseka, Magia",
  },
  {
    titulo: "Legend of the Northern Blade",
    autor: "Gao Wei",
    descricao: "Um jovem busca se tornar o mais forte espadachim em um mundo de artes marciais e rivalidades.",
    genero: "Ação, Aventura, Isekai",
  },
  {
    titulo: "Chaotic Sword God",
    autor: "Tian Xia Gui Yuan",
    descricao: "Um jovem herói luta para se tornar o mais poderoso em um mundo onde a força e a habilidade são tudo.",
    genero: "Ação, Aventura, Isekai",
  },
  {
    titulo: "Supreme Magus",
    autor: "Jasyn",
    descricao: "Um jovem é reencarnado como um mago supremo e busca dominar a magia e enfrentar desafios em um novo mundo.",
    genero: "Ação, Aventura, Isekai, Magia",
  },
  {
    titulo: "A Returner's Magic Should Be Special",
    autor: "Sun-Woo",
    descricao: "Um herói retorna ao passado após a derrota e usa suas habilidades para mudar o futuro e evitar o apocalipse.",
    genero: "Ação, Aventura, Isekai",
  },
  {
    titulo: "Swordsman",
    autor: "Chen Fei",
    descricao: "Um jovem espadachim busca se tornar o melhor em um mundo onde a habilidade com a espada é tudo.",
    genero: "Ação, Aventura, Isekai",
  },
  {
    titulo: "Perfect World",
    autor: "Chen Dong",
    descricao: "Um jovem busca a perfeição e se torna um dos mais poderosos em um mundo cheio de perigos e desafios.",
    genero: "Ação, Aventura, Isekai",
  },
  {
    titulo: "The Scholar's Reincarnation",
    autor: "Jeong Hae-Ryeong",
    descricao: "Um erudito é reencarnado em um novo mundo e usa seu conhecimento para enfrentar desafios e buscar poder.",
    genero: "Ação, Aventura, Isekai",
  }
]



 
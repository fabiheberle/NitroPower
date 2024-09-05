let dados = [
    {
        titulo: "Volkswagen Jetta TSI 2.0",
        descricao: "O Volkswagen Jetta TSI 2.0 é um sedã intermediário que combina conforto, desempenho e tecnologia. Equipado com motor 2.0 litros turbo, oferece uma experiência de condução esportiva e eficiente.",
        cavalos: "Cavalos: 231cv",
        "0-100km/h": "0-100km/h: 6.7seg",
        velocidadeMaxima: "Velocidade Máx.: 249km/h",
        cambio: "Câmbio: Automático DSG",
        tracao: "Tração: Dianteira",
        motor: "Motor: 2.0 350 TSI",
        link: "https://www.vw.com.br/pt/carros/Jetta.html"
    },
    {
        titulo: "Mercedes A45",
        descricao: "A Mercedes-AMG A45 é um hatchback compacto que redefine os limites do desempenho em sua categoria. Com um motor turbo de quatro cilindros, este pequeno gigante entrega uma potência impressionante, capaz de rivalizar com muitos esportivos de maior porte.",
        cavalos: "Cavalos: 421cv",
        "0-100km/h": "0-100km/h: 3.9seg",
        velocidadeMaxima: "Velocidade Máx.: 270km/h",
        cambio: "Câmbio: Automático 8G-DCT",
        tracao: "Tração: Integral 4MATIC",
        motor: "Motor: 2.0 Turbo M139",
        link: "https://www2.mercedes-benz.com.br/passengercars/models/hatchback/a-class/amg.html"
    },
    {
        titulo: "BMW M5",
        descricao: "A BMW M5 é um sedã de alto desempenho que combina luxo e esportividade. Com um motor V8 biturbo, ele oferece aceleração e manobrabilidade excepcionais, além de um interior sofisticado e tecnológico.",
        cavalos: "Cavalos: 727cv",
        "0-100km/h": "0-100km/h: 3.5seg",
        velocidadeMaxima: "Velocidade Máx.: 305km/h",
        cambio: "Câmbio: Automático 8 Velocidades",
        tracao: "Tração: Integral MxDrive",
        motor: "Motor: 4.4 V8 Biturbo",
        link: "https://www.bmw.com/en-au/models/m-series/m5-series/bmw-m5-sedan.html"
    },
    {
        titulo: "Porsche 911 GT3 RS",
        descricao: "A Porsche 911 GT3 RS é um esportivo de alta performance, projetado para as pistas de corrida. Com um motor boxer de seis cilindros e um chassi leve e rígido, ele oferece uma experiência de condução emocionante e precisa.",
        cavalos: "Cavalos: 525cv",
        "0-100km/h": "0-100km/h: 3.2seg",
        velocidadeMaxima: "Velocidade Máx.: 296km/h",
        cambio: "Câmbio: Automático PDK",
        tracao: "Tração: Traseira",
        motor: "Motor: Aspirado 6 cilindros",
        link: "https://www.porsche.com/brazil/pt/models/911/911-gt3-rs/911-gt3-rs/"
    },
    {
        titulo: "Audi RS6",
        descricao: "O Audi RS6 é um sedan de alto desempenho que combina luxo e potência. Com um motor V8 biturbo, ele oferece aceleração brutal e um design esportivo.",
        cavalos: "Cavalos: 630cv",
        "0-100km/h": "0-100km/h: 3.4seg",
        velocidadeMaxima: "Velocidade Máx.: 280km/h",
        cambio: "Câmbio: Automático 8-speed",
        tracao: "Tração: Integral quattro",
        motor: "Motor: 4.0 V8 Biturbo TFSI",
        link: "https://www.audi.com.br/br/web/pt/models/a6/rs-6-avant.html"
    },
    {
        titulo: "Jaguar F-Type",
        descricao: "O Jaguar F-Type é um esportivo elegante e potente, que evoca a tradição da marca britânica. Com um design atemporal e um motor V8 supercharged, ele oferece uma experiência de condução emocionante.",
        cavalos: "Cavalos: 300cv",
        "0-100km/h": "0-100km/h: 5.9seg",
        velocidadeMaxima: "Velocidade Máx.: 250km/h",
        cambio: "Câmbio: Automático 8-speed",
        tracao: "Tração: Traseira",
        motor: "Motor: V8 Supercharged",
        link: "https://www.jaguarbrasil.com.br/jaguar-range/f-type/specifications/index.html"
    },
    {
        titulo: "Bugatti Chiron",
        descricao: "O Bugatti Chiron é um hipercarro que redefine os limites da velocidade e do luxo. Com um motor quadriturbo W16, ele é um dos carros mais rápidos do mundo.",
        cavalos: "Cavalos: 1500cv",
        "0-100km/h": "0-100km/h: 2.4seg",
        velocidadeMaxima: "Velocidade Máx.: 420km/h",
        cambio: "Câmbio: Automático dupla embreagem",
        tracao: "Tração: Integral Permanente",
        motor: "Motor: 8.0 Quadriturbo W16",
        link: "https://bugatti.com/the-bugatti-models/chiron-facets-of-performance/chiron/"
    },
    {
        titulo: "Dodge Challenger",
        descricao: "O Dodge Challenger é um muscle car icônico, conhecido por seu design clássico e motor V8 potente. Ele oferece uma experiência de condução emocionante e nostálgica.",
        cavalos: "Cavalos: 807",
        "0-100km/h": "0-100km/h: 3.8seg",
        velocidadeMaxima: "Velocidade Máx.: 327km/h",
        cambio: "Câmbio: Automático ou Manual",
        tracao: "Tração: Traseira",
        motor: "Motor: 6.2 V8 Hemi Supercharged",
        link: "https://www.dodge.com/challenger.html"
    },
    {
        titulo: "Koenigsegg Jesko Absolut",
        descricao: "O Koenigsegg Jesko Absolut é um hipercarro sendo uma versão ainda mais extrema do Jesko, projetado para atingir velocidades máximas e um desempenho aerodinâmico incomparáveis.",
        cavalos: "Cavalos: 1625cv",
        "0-100km/h": "0-100km/h: 2.8seg",
        velocidadeMaxima: "Velocidade Máx.: 500km/h",
        cambio: "Câmbio: Automático 9-speed LST",
        tracao: "Tração: Traseira",
        motor: "Motor: 5.0 V8 Biturbo",
        link: "https://www.koenigsegg.com/model/jesko-absolut"
    },
    {
        titulo: "Ferrari LaFerrari",
        descricao: "A Ferrari LaFerrari é um hipercarro híbrido que combina a potência de um motor V12 com a eficiência de um sistema elétrico. Ela é um dos carros mais desejados do mundo.",
        cavalos: "Cavalos: 963cv",
        "0-100km/h": "0-100km/h: 2.5seg",
        velocidadeMaxima: "Velocidade Máx.: 350km/h",
        cambio: "Câmbio: Automático Dupla embreagem 7-speed",
        tracao: "Tração: Traseira",
        motor: "Motor: 6.3 V12",
        link: "https://www.ferrari.com/en-EN/auto/laferrari"
    },
    {
        titulo: "Lamborghini Huracán STO",
        descricao: "A Lamborghini Huracán STO é uma versão extrema do Huracán, inspirada nos carros de corrida da série Super Trofeo, com um design aerodinâmico agressivo.",
        cavalos: "Cavalos: 640cv",
        "0-100km/h": "0-100km/h: 3.0seg",
        velocidadeMaxima: "Velocidade Máx.: 310km/h",
        cambio: "Câmbio: Automático LDF 7-speed",
        tracao: "Tração: Integral",
        motor: "Motor: 5.2 V10 MPI + DSI",
        link: "https://www.lamborghini.com/en-en/models/huracan/huracan-sto"
    },
    {
        titulo: "Chevrolet Camaro",
        descricao: "O Chevrolet Camaro é um muscle car americano clássico, conhecido por seu design musculoso e motor V8 potente. Ele oferece uma experiência de condução emocionante e esportiva.",
        cavalos: "Cavalos: 461",
        "0-100km/h": "0-100km/h: 4.2seg",
        velocidadeMaxima: "Velocidade Máx.: 290km/h",
        cambio: "Câmbio: Automático ou Manual",
        tracao: "Tração: Traseira",
        motor: "Motor: 6.2 V8",
        link: "https://www.chevrolet.com.br/esportivos/novo-camaro"
    }
];
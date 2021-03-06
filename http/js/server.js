var http = require('http');

var server = http.createServer(function(req, res) {
    var data = 'Хуй мусорам!';

    if (req.url.includes('games')) {
        data = games;
    }

    if (req.url.includes('menu/en')) {
        data = navEn;
    }

    if (req.url.includes('menu/ru')) {
        data = navRu;
    }

    if (req.url.includes('whores')) {
        data = whores;
    }

    if (req.url.includes('movies')) {
        data = movies;
    }

    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.end(JSON.stringify(data));
});

server.listen('3000', '127.0.0.1', function() {
    console.log('Server running at http://127.0.0.1:3000/');
});

var games = [
    {
        name: 'Batman v Superman Dawn of Justice',
        imageURL: 'images/games/Batman-v-Superman-Dawn-of-Justice-290x180.jpg',
        flagHot: true,
        flagExclusive: true
    },
    {
        name: 'Batman Begins',
        imageURL: 'images/games/Batman-Begins-290x180.jpg'
    },
    {
        name: 'Jackpot Giant',
        imageURL: 'images/games/jackpot-giant-290x180.jpg',
        flagNew: true
    },
    {
        name: 'Premium European Roulette',
        imageURL: 'images/games/european-roulette-290x180.jpg',
        flagHot: true,
        flagNew: true
    },
    {
        name: 'Da Vinci’s Vault',
        imageURL: 'images/games/Da-vinci-Vault-290x180.jpg'
    },
    {
        name: 'Murder Mystery',
        imageURL: 'images/games/Murder-Mystery-290x180.jpg',
        flagExclusive: true
    },
    {
        name: 'Premium Blackjack',
        imageURL: 'images/games/PremiumBlackjack-290x180.jpg',
        flagNew: true
    },
    {
        name: 'Gladiator 2',
        imageURL: 'images/games/Gladiator-road-to-rome-290x180.jpg',
        flagHot: true
    }
];
var navEn = [
    {
        title: 'Fruits',
        url: '#',
        children: [
            {
                title: 'Orange',
                url: '#'
            },
            {
                title: 'Kiwi',
                url: '#'
            },
            {
                title: 'Cherry',
                url: '#'
            },
            {
                title: 'Banana',
                url: '#'
            }
        ]
    },
    {
        title: 'Vegetables',
        url: '#',
        children: [
            {
                title: 'Cabbage',
                url: '#'
            },
            {
                title: 'Cucumber',
                url: '#'
            }
        ]
    },
    {
        title: 'Fish',
        url: '#',
        children: [
            {
                title: 'Salmon',
                url: '#'
            },
            {
                title: 'Pike',
                url: '#'
            }
        ]
    },
    {
        title: 'Nuts',
        url: '#',
        children: [
            {
                title: 'Peanut',
                url: '#'
            },
            {
                title: 'Cashew',
                url: '#'
            },
            {
                title: 'Hazelnut',
                url: '#'
            },
            {
                title: 'Almond',
                url: '#'
            }
        ]
    },
    {
        title: 'Meat',
        url: '#'
    }
];
var navRu = [
    {
        title: 'Фрукты',
        url: '#',
        children: [
            {
                title: 'Апельсин',
                url: '#'
            },
            {
                title: 'Киви',
                url: '#'
            },
            {
                title: 'Вишня',
                url: '#'
            },
            {
                title: 'Банан',
                url: '#'
            }
        ]
    },
    {
        title: 'Овощи',
        url: '#',
        children: [
            {
                title: 'Капуста',
                url: '#'
            },
            {
                title: 'Огурец',
                url: '#'
            }
        ]
    },
    {
        title: 'Рыба',
        url: '#',
        children: [
            {
                title: 'Лосось',
                url: '#'
            },
            {
                title: 'Щука',
                url: '#'
            }
        ]
    },
    {
        title: 'Орехи',
        url: '#',
        children: [
            {
                title: 'Арахис',
                url: '#'
            },
            {
                title: 'Кешью',
                url: '#'
            },
            {
                title: 'Фундук',
                url: '#'
            },
            {
                title: 'Миндаль',
                url: '#'
            }
        ]
    },
    {
        title: 'Мясо',
        url: '#'
    }
];
var whores = [
    {
        name: 'Сильвия',
        photo: 'images/whores/silvia.jpg',
        age: '18',
        hair: 'блондинка',
        boobs: '4',
        weight: '50',
        height: '168',
        phone: '+380960000001',
        can_come: true,
        teaser: 'Очень нежная девчонка доставит Вам удовольствие по полной программе! Каждый мужчина ищет идеальную женщину - попробуй, может быть я именно та которая тебе нужна... Фото мои 1000%!!! Выезда НЕТ!!! Квартира для встреч ЕСТЬ, 5 мин от ст. метро \"Дворец Украина\"'
    },
    {
        name: 'Белла',
        photo: 'images/whores/bella.jpg',
        age: '21',
        hair: 'брюнетка',
        boobs: '3',
        weight: '65',
        height: '172',
        phone: '+380960000002',
        can_come: false,
        teaser: 'Я - барышня абсолютно особенная! Я яркая и стильная, веселая и заводная, сексуальная и конечно же очень красивая! Для тех, кто способен оценить по достоинству настоящую женщину, для тех, кто любит в постели задор и изобретательность, для тех прекрасных и щедрых мужчин, которые хотят провести незабываемый досуг в объятиях умелой красотки! Я вся для вас, дорогие мои. Да, да! Именно для тебя, милый! ФОТО МОИ!!!'
    },
    {
        name: 'Марта',
        photo: 'images/whores/marta.jpg',
        age: '23',
        hair: 'брюнетка',
        boobs: '2',
        weight: '54',
        height: '163',
        phone: '+380960000003',
        can_come: false,
        teaser: 'Я - симпатичная девочка экзотической внешности без комплексов и с огромной любовью к сексу! Я непревзойденная любовница, страстная, доступная и яркая! Я невероятно сексуальна и изобретательна, мила и непосредственна. Не теряй времени, звони мне, мой друг! Я скрашу твоё одиночество :)'
    },
    {
        name: 'Жасмин',
        photo: 'images/whores/zhasmin.jpg',
        age: '32',
        hair: 'блондинка',
        boobs: '1',
        weight: '45',
        height: '151',
        phone: '+380960000004',
        can_come: true,
        teaser: 'Еще не распустившаяся розочка ждет своего воздыхателя! Чарующий аромат, тонкий силуэт. Раскрой мой бутончик и покажи свою силу! Я храню свою свежесть, чтоб ты мог вкусить первым тот первозданный нектар, что приготовлен для тебя! Мои упругие девичьи грудки покрываются росой вожделения, когда я думаю о сексе с тобой, мое лоно наполняется жаркой страстью и желаниями.'
    }
];
var movies = [
    {
        title: 'Джентльмены',
        id: '1580980803_e29f9c3',
        year: 2020,
        country: ['США'],
        zhanr: ['боевик, комедия, криминал'],
        time: 113,
        rating: 8.5,
        suzhet: 'Талантливый выпускник Оксфорда, применив свой уникальный ум и невиданную дерзость, придумал нелегальную схему обогащения с использованием поместья обедневшей английской аристократии. Однако когда он решает продать свой бизнес влиятельному клану миллиардеров из США, на его пути встают не менее обаятельные, но жесткие джентльмены. Намечается обмен любезностями, который точно не обойдется без перестрелок и парочки несчастных случаев.'
    },
    {
        title: 'Джентльмены удачи',
        id: '1437566539_88761604',
        year: 1971,
        country: ['СССР'],
        zhanr: ['драма, комедия, криминал, детектив'],
        time: 84,
        rating: 8.4,
        suzhet: 'Заведующему детсадом Трошкину фатально не повезло: он оказался как две капли воды похож на бандита по кличке «Доцент», похитившего уникальный шлем Александра Македонского.\n\nМилиция внедряет добряка Трошкина в воровскую среду — и ему ничего не остается, кроме как старательно изображать своего двойника-злодея, путая всех окружающих. Со временем он настолько блестяще входит в роль, что сам начинает порой приходить в ужас. Между тем, жизни его угрожает смертельная опасность...'
    },
    {
        title: 'Мстители: Война бесконечности',
        id: '1533155746_20b5bd3',
        year: 2018,
        country: ['США'],
        zhanr: ['фантастика, фэнтези, боевик, приключения'],
        time: 149,
        rating: 7.8,
        suzhet: 'Пока Мстители и их союзники продолжают защищать мир от различных опасностей, с которыми не смог бы справиться один супергерой, новая угроза возникает из космоса: Танос. Межгалактический тиран преследует цель собрать все шесть Камней Бесконечности — артефакты невероятной силы, с помощью которых можно менять реальность по своему желанию. Всё, с чем Мстители сталкивались ранее, вело к этому моменту — судьба Земли никогда ещё не была столь неопределённой.'
    },
    {
        title: 'Веном',
        id: '1538682174_690d454',
        year: 2018,
        country: ['США'],
        zhanr: ['ужасы, фантастика, боевик, триллер'],
        time: 112,
        rating: 6.8,
        suzhet: 'Что если в один прекрасный день в тебя вселяется существо-симбиот, которое наделяет тебя сверхчеловеческими способностями? Вот только Веном — симбиот совсем недобрый, и договориться с ним невозможно. Хотя нужно ли договариваться?.. Ведь в какой-то момент ты понимаешь, что быть плохим вовсе не так уж и плохо. Так даже веселее. В мире и так слишком много супергероев! Мы — Веном!'
    },
    {
        title: 'Первому игроку приготовиться',
        id: '1530651906_9226a04',
        year: 2018,
        country: ['США'],
        zhanr: ['фантастика, боевик, приключения'],
        time: 140,
        rating: 7.3,
        suzhet: 'Действие фильма происходит в 2045 году, мир погружается в хаос и находится на грани коллапса. Люди ищут спасения в игре OASIS — огромной вселенной виртуальной реальности. Ее создатель, гениальный и эксцентричный Джеймс Холлидэй, оставляет уникальное завещание. Все его колоссальное состояние получит игрок, первым обнаруживший цифровое «пасхальное яйцо», которое миллиардер спрятал где-то на просторах OASISа. Запущенный им квест охватывает весь мир. Совершенно негероический парень по имени Уэйд Уоттс решает принять участие в состязании, с головой бросаясь в головокружительную, искажающую реальность погоню за сокровищами по фантастической вселенной, полной загадок, открытий и опасностей.'
    },
    {
        title: 'Фантастические твари и где они обитают',
        id: '1479633673_69883a3',
        year: 2016,
        country: ['Великобритания, США'],
        zhanr: ['фэнтези, приключения, семейный'],
        time: 133,
        rating: 7.5,
        suzhet: 'Поиск и изучение необычайных волшебных существ приводят магозоолога Ньюта Саламандера в Нью-Йорк. Скорее всего, он отбыл бы на поезде дальше, если бы не не маг (так в Америке называют магглов) по имени Якоб, оставленный в неположенном месте магический чемодан и побег из него фантастических животных Ньюта.'
    },
    {
        title: 'Яркость',
        id: '1514032370_5fe3334',
        year: 2017,
        country: ['США'],
        zhanr: ['фантастика, фэнтези, боевик, триллер, криминал'],
        time: 117,
        rating: 6.4,
        suzhet: 'Действие разворачивается в Лос-Анджелесе, в вымышленном фантастическом мире, где царствуют не только высокие технологии, но и магия. В городе бок о бок с людьми живут эльфы, орки и другие сверхъестественные существа. Главный герой служит в полицейском департаменте, в специальном отделе, занимающимся раскрытием преступлений, в которых замешаны магические силы. Пытаясь раскрыть очередное дело, он вынужден объединиться с орком. Вместе им предстоит найти и защитить древний мистический артефакт, обладающий могущественными способностями, от рук злоумышленников.'
    },
    {
        title: 'Джуманджи: Зов джунглей',
        id: '1520282582_c9dc4bf',
        year: 2017,
        country: ['США'],
        zhanr: ['фэнтези, боевик, комедия, приключения'],
        time: 119,
        rating: 7.0,
        suzhet: 'Четверо подростков оказываются внутри игры «Джуманджи». Их ждет схватка с носорогами, черными мамбами, а на каждом шагу будет подстерегать бесконечная череда ловушек и головоломок. Чтобы пройти игру и остаться в живых, им придется перевоплотиться в персонажей игры: робкий и застенчивый Спенсер превращается в отважного и сильного исследователя, здоровяк Фридж — в коротышку, модница и красавица Беттани — в профессора, а неуклюжая и нескладная Марта становится бесстрашной и ловкой амазонкой. Друзьям придется привыкнуть к совершенно новым и таким непривычным для себя ролям и найти дорогу домой.'
    },
    {
        title: 'Дэдпул 2',
        id: '1532601059_8414b29',
        year: 2018,
        country: ['США'],
        zhanr: ['фантастика, боевик, комедия, приключения'],
        time: 119,
        rating: 7.5,
        suzhet: 'Единственный и неповторимый болтливый наемник — вернулся! Ещё более масштабный, ещё более разрушительный и даже ещё более голозадый, чем прежде! Когда в его жизнь врывается суперсолдат с убийственной миссией, Дэдпул вынужден задуматься о дружбе, семье и о том, что на самом деле значит быть героем, попутно надирая 50 оттенков задниц. Потому что иногда чтобы делать хорошие вещи, нужно использовать грязные приёмчики.'
    },
    {
        title: 'Пираты Карибского моря: Мертвецы не рассказывают сказки',
        id: '1504650777_piraty-karibskogo-morya-mertvecy-ne-rasskazyvayut-skazki',
        year: 2017,
        country: ['США'],
        zhanr: ['фэнтези, боевик, комедия, приключения'],
        time: 129,
        rating: 6.6,
        suzhet: 'Исчерпавший свою удачу капитан Джек Воробей обнаруживает, что за ним охотится его старый неприятель, ужасный капитан Салазар и его призрачные пираты. Они только что сбежали из Дьявольского треугольника и намерены уничтожить всех пиратов, включая Джека. Поможет спастись лишь могущественный артефакт — трезубец Посейдона, который дарует своему обладателю полный контроль над морями.'
    },
    {
        title: 'Логан',
        id: '1502576549_ce30651',
        year: 2017,
        country: ['США'],
        zhanr: ['фантастика, боевик, триллер, драма'],
        time: 141,
        rating: 7.4,
        suzhet: 'В недалеком будущем уставший от жизни Логан заботится о больном профессоре Икс, который прячется неподалеку от мексиканской границы. Но Логан больше не сможет скрывать свое прошлое, когда встретится с юным мутантом, которого преследуют темные силы.'
    },
    {
        title: 'Джон Уик 2',
        id: '1487431931_dzhon-uik-2',
        year: 2017,
        country: ['США'],
        zhanr: ['боевик, триллер, криминал'],
        time: 122,
        rating: 7.1,
        suzhet: 'Когда бывший коллега Джона решает взять под свой контроль таинственную гильдию убийц, Уик вынужден выйти из отставки. Ведомый кровавой клятвой Джон отправляется в Рим, где ему придется сразиться с одними из самых опасных киллеров в мире.'
    },
    {
        title: 'Достать ножи',
        id: '1576196432_0fa6ac8',
        year: 2019,
        country: ['США'],
        zhanr: ['детектив, комедия, драма, криминал'],
        time: 130,
        rating: 7.8,
        suzhet: 'Когда сразу после празднования 85-летия известного автора криминальных романов Харлана Тромби виновника торжества находят мёртвым, за расследование берётся обаятельный и дотошный детектив Бенуа Блан. Ему предстоит распутать тугую сеть уловок и корыстной лжи, которой его опутывают члены неблагополучной семьи Харлана и преданный ему персонал.'
    },
    {
        title: 'Убийство в Восточном экспрессе',
        id: '1510288752_01106ea',
        year: 2017,
        country: ['США, Великобритания, Мальта, Франция, Канада, Новая Зеландия'],
        zhanr: ['драма, криминал, детектив'],
        time: 114,
        rating: 6.7,
        suzhet: 'Путешествие на одном из самых роскошных поездов Европы неожиданно превращается в одну из самых стильных и захватывающих загадок в истории. Фильм рассказывает историю тринадцати пассажиров поезда, каждый из которых находится под подозрением. И только сыщик должен как можно быстрее разгадать головоломку, прежде чем преступник нанесет новый удар.'
    },
    {
        title: 'Оно',
        id: '1507135882_c6d0632',
        year: 2017,
        country: ['США, Канада'],
        zhanr: ['ужасы, триллер, драма'],
        time: 135,
        rating: 7.5,
        suzhet: 'Когда в городке Дерри, штат Мэн, начинают пропадать дети, несколько ребят сталкиваются со своими величайшими страхами и вынуждены помериться силами со злобным клоуном Пеннивайзом, чьи проявления жестокости и список жертв уходят в глубь веков.'
    },
    {
        title: 'Интерстеллар',
        id: '1422882994_3f5443f',
        year: 2014,
        country: ['США, Великобритания, Канада'],
        zhanr: ['фантастика, драма, приключения'],
        time: 169,
        rating: 8.5,
        suzhet: 'Когда засуха приводит человечество к продовольственному кризису, коллектив исследователей и учёных отправляется сквозь червоточину (которая предположительно соединяет области пространства-времени через большое расстояние) в путешествие, чтобы превзойти прежние ограничения для космических путешествий человека и переселить человечество на другую планету.'
    },
    {
        title: 'Сделано в Америке',
        id: '1512594179_d5d2dc2',
        year: 2017,
        country: ['США'],
        zhanr: ['боевик, триллер, драма, комедия, криминал, биография, история'],
        time: 115,
        rating: 7.1,
        suzhet: 'Он был самым юным пилотом Боинга 747 в США, а уже через несколько лет стал одним из богатейших людей в Америке. Его стиль жизни был столь же экстремальным, как и его бизнес. Закрытые приемы, роскошные блондинки, крутые тачки и рисковые сделки. Он обладал талантом делать деньги из воздуха.'
    },
    {
        title: 'Отряд самоубийц',
        id: '1479623658_f3b2fdc',
        year: 2016,
        country: ['США'],
        zhanr: ['фантастика, фэнтези, боевик, приключения'],
        time: 118,
        rating: 6.4,
        suzhet: 'Правительство решает дать команде суперзлодеев шанс на искупление. Подвох в том, что их отправляют на миссию, где они, вероятнее всего, погибнут.'
    },
    {
        title: 'Марсианин',
        id: '1444073412_7b5f4286b7',
        year: 2015,
        country: ['США'],
        zhanr: ['фантастика, приключения'],
        time: 141,
        rating: 8.2,
        suzhet: 'Марсианская миссия «Арес-3» в процессе работы была вынуждена экстренно покинуть планету из-за надвигающейся песчаной бури. Инженер и биолог Марк Уотни получил повреждение скафандра во время песчаной бури. Сотрудники миссии, посчитав его погибшим, эвакуировались с планеты, оставив Марка одного.\n' + '\n' + 'Очнувшись, Уотни обнаруживает, что связь с Землёй отсутствует, но при этом полностью функционирует жилой модуль. Главный герой начинает искать способ продержаться на имеющихся запасах еды, витаминов, воды и воздуха ещё 4 года до прилёта следующей миссии «Арес-4».'
    },
    {
        title: 'Заражение',
        id: '1584800229_d5161b2',
        year: 2011,
        country: ['ОАЭ, США'],
        zhanr: ['фантастика, боевик, триллер, драма'],
        time: 106,
        rating: 6.4,
        suzhet: 'Международная организация врачей совместно с Центром по контролю и профилактике заболеваний США пытается помешать распространению смертельного вируса.'
    },
    {
        title: 'Паразиты',
        id: '1562661887_7028fa9',
        year: 2019,
        country: ['Корея Южная'],
        zhanr: ['драма, комедия, триллер'],
        time: 131,
        rating: 8.0,
        suzhet: 'Генеральный директор международной IT-компании мистер Пак живёт со своей семьёй в роскошном особняке, полном дизайнерских вещей, произведений искусства и мрачных тайн. Скрытое становится явным, когда у старшей дочери мистера Пака появляется новый репетитор по английскому языку.'
    },
    {
        title: 'Счастливого дня смерти',
        id: '1509249509_af64a1d',
        year: 2017,
        country: ['США'],
        zhanr: ['ужасы, триллер, детектив, комедия'],
        time: 96,
        rating: 6.4,
        suzhet: 'Каждый в универе мечтал попасть на её день рождения, но праздник был безнадежно испорчен незнакомцем в маске, убившим виновницу торжества. Однако судьба преподнесла имениннице леденящий душу подарок — бесконечный запас жизней. И теперь у девушки появился шанс вычислить своего убийцу, ведь этот день будет повторяться снова и снова...'
    },
    {
        title: 'Гарри Поттер и философский камень',
        id: '1374782528_2abd3db',
        year: 2001,
        country: ['Великобритания, США'],
        zhanr: ['фэнтези, приключения, семейный'],
        time: 152,
        rating: 8.1,
        suzhet: 'Жизнь десятилетнего Гарри Поттера нельзя назвать сладкой: его родители умерли, едва ему исполнился год, а от дяди и тётки, взявших сироту на воспитание, достаются лишь тычки да подзатыльники. Но в одиннадцатый день рождения Гарри всё меняется. Странный гость, неожиданно появившийся на пороге, приносит письмо, из которого мальчик узнаёт, что на самом деле он чистокровный волшебник и принят в Хогвартс — школу магии. А уже через пару недель Гарри будет мчаться в поезде Хогвартс-экспресс навстречу новой жизни, где его ждут невероятные приключения, верные друзья и самое главное — ключ к разгадке тайны смерти его родителей.'
    },
    {
        title: 'Грань будущего',
        id: '1409591645_705a08d',
        year: 2014,
        country: ['США, Австралия'],
        zhanr: ['фантастика, боевик'],
        time: 113,
        rating: 8.1,
        suzhet: 'В недалёком будущем раса инопланетян вторгается на Землю. Никакая армия в мире не может противостоять им. Майор Уильям Кейдж умирает в бою, но случается невозможное — он оказывается во временной петле. Раз за разом он попадает в один и тот же бой, сражается и умирает... снова и снова. И каждое повторяющееся сражение приближает его к разгадке того, как победить врага.'
    }
];

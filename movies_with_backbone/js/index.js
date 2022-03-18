var movieModels = [
    {
        title: 'Джентльмены',
        id: '1580980803_e29f9c3',
        year: 2020,
        countries: ['США'],
        genre: ['боевик', 'комедия', 'криминал'],
        time: 113,
        rating: 8.5,
        plot: 'Талантливый выпускник Оксфорда, применив свой уникальный ум и невиданную дерзость, придумал нелегальную схему обогащения с использованием поместья обедневшей английской аристократии. Однако когда он решает продать свой бизнес влиятельному клану миллиардеров из США, на его пути встают не менее обаятельные, но жесткие джентльмены. Намечается обмен любезностями, который точно не обойдется без перестрелок и парочки несчастных случаев.'
    },
    {
        title: 'Джентльмены удачи',
        id: '1437566539_88761604',
        year: 1971,
        countries: ['СССР'],
        genre: ['драма', 'комедия', 'криминал', 'детектив'],
        time: 84,
        rating: 8.4,
        plot: 'Заведующему детсадом Трошкину фатально не повезло: он оказался как две капли воды похож на бандита по кличке «Доцент», похитившего уникальный шлем Александра Македонского.\n\nМилиция внедряет добряка Трошкина в воровскую среду — и ему ничего не остается, кроме как старательно изображать своего двойника-злодея, путая всех окружающих. Со временем он настолько блестяще входит в роль, что сам начинает порой приходить в ужас. Между тем, жизни его угрожает смертельная опасность...'
    },
    {
        title: 'Мстители: Война бесконечности',
        id: '1533155746_20b5bd3',
        year: 2018,
        countries: ['США'],
        genre: ['фантастика', 'фэнтези', 'боевик', 'приключения'],
        time: 149,
        rating: 7.8,
        plot: 'Пока Мстители и их союзники продолжают защищать мир от различных опасностей, с которыми не смог бы справиться один супергерой, новая угроза возникает из космоса: Танос. Межгалактический тиран преследует цель собрать все шесть Камней Бесконечности — артефакты невероятной силы, с помощью которых можно менять реальность по своему желанию. Всё, с чем Мстители сталкивались ранее, вело к этому моменту — судьба Земли никогда ещё не была столь неопределённой.'
    },
    {
        title: 'Веном',
        id: '1538682174_690d454',
        year: 2018,
        countries: ['США'],
        genre: ['ужасы', 'фантастика', 'боевик', 'триллер'],
        time: 112,
        rating: 6.8,
        plot: 'Что если в один прекрасный день в тебя вселяется существо-симбиот, которое наделяет тебя сверхчеловеческими способностями? Вот только Веном — симбиот совсем недобрый, и договориться с ним невозможно. Хотя нужно ли договариваться?.. Ведь в какой-то момент ты понимаешь, что быть плохим вовсе не так уж и плохо. Так даже веселее. В мире и так слишком много супергероев! Мы — Веном!'
    },
    {
        title: 'Первому игроку приготовиться',
        id: '1530651906_9226a04',
        year: 2018,
        countries: ['США'],
        genre: ['фантастика', 'боевик', 'приключения'],
        time: 140,
        rating: 7.3,
        plot: 'Действие фильма происходит в 2045 году, мир погружается в хаос и находится на грани коллапса. Люди ищут спасения в игре OASIS — огромной вселенной виртуальной реальности. Ее создатель, гениальный и эксцентричный Джеймс Холлидэй, оставляет уникальное завещание. Все его колоссальное состояние получит игрок, первым обнаруживший цифровое «пасхальное яйцо», которое миллиардер спрятал где-то на просторах OASISа. Запущенный им квест охватывает весь мир. Совершенно негероический парень по имени Уэйд Уоттс решает принять участие в состязании, с головой бросаясь в головокружительную, искажающую реальность погоню за сокровищами по фантастической вселенной, полной загадок, открытий и опасностей.'
    },
    {
        title: 'Фантастические твари и где они обитают',
        id: '1479633673_69883a3',
        year: 2016,
        countries: ['Великобритания', 'США'],
        genre: ['фэнтези', 'приключения', 'семейный'],
        time: 133,
        rating: 7.5,
        plot: 'Поиск и изучение необычайных волшебных существ приводят магозоолога Ньюта Саламандера в Нью-Йорк. Скорее всего, он отбыл бы на поезде дальше, если бы не не маг (так в Америке называют магглов) по имени Якоб, оставленный в неположенном месте магический чемодан и побег из него фантастических животных Ньюта.'
    },
    {
        title: 'Яркость',
        id: '1514032370_5fe3334',
        year: 2017,
        countries: ['США'],
        genre: ['фантастика', 'фэнтези', 'боевик', 'триллер', 'криминал'],
        time: 117,
        rating: 6.4,
        plot: 'Действие разворачивается в Лос-Анджелесе, в вымышленном фантастическом мире, где царствуют не только высокие технологии, но и магия. В городе бок о бок с людьми живут эльфы, орки и другие сверхъестественные существа. Главный герой служит в полицейском департаменте, в специальном отделе, занимающимся раскрытием преступлений, в которых замешаны магические силы. Пытаясь раскрыть очередное дело, он вынужден объединиться с орком. Вместе им предстоит найти и защитить древний мистический артефакт, обладающий могущественными способностями, от рук злоумышленников.'
    },
    {
        title: 'Джуманджи: Зов джунглей',
        id: '1520282582_c9dc4bf',
        year: 2017,
        countries: ['США'],
        genre: ['фэнтези', 'боевик', 'комедия', 'приключения'],
        time: 119,
        rating: 7.0,
        plot: 'Четверо подростков оказываются внутри игры «Джуманджи». Их ждет схватка с носорогами, черными мамбами, а на каждом шагу будет подстерегать бесконечная череда ловушек и головоломок. Чтобы пройти игру и остаться в живых, им придется перевоплотиться в персонажей игры: робкий и застенчивый Спенсер превращается в отважного и сильного исследователя, здоровяк Фридж — в коротышку, модница и красавица Беттани — в профессора, а неуклюжая и нескладная Марта становится бесстрашной и ловкой амазонкой. Друзьям придется привыкнуть к совершенно новым и таким непривычным для себя ролям и найти дорогу домой.'
    },
    {
        title: 'Дэдпул 2',
        id: '1532601059_8414b29',
        year: 2018,
        countries: ['США'],
        genre: ['фантастика', 'боевик', 'комедия', 'приключения'],
        time: 119,
        rating: 7.5,
        plot: 'Единственный и неповторимый болтливый наемник — вернулся! Ещё более масштабный, ещё более разрушительный и даже ещё более голозадый, чем прежде! Когда в его жизнь врывается суперсолдат с убийственной миссией, Дэдпул вынужден задуматься о дружбе, семье и о том, что на самом деле значит быть героем, попутно надирая 50 оттенков задниц. Потому что иногда чтобы делать хорошие вещи, нужно использовать грязные приёмчики.'
    },
    {
        title: 'Пираты Карибского моря: Мертвецы не рассказывают сказки',
        id: '1504650777_piraty-karibskogo-morya-mertvecy-ne-rasskazyvayut-skazki',
        year: 2017,
        countries: ['США'],
        genre: ['фэнтези', 'боевик', 'комедия', 'приключения'],
        time: 129,
        rating: 6.6,
        plot: 'Исчерпавший свою удачу капитан Джек Воробей обнаруживает, что за ним охотится его старый неприятель, ужасный капитан Салазар и его призрачные пираты. Они только что сбежали из Дьявольского треугольника и намерены уничтожить всех пиратов, включая Джека. Поможет спастись лишь могущественный артефакт — трезубец Посейдона, который дарует своему обладателю полный контроль над морями.'
    },
    {
        title: 'Логан',
        id: '1502576549_ce30651',
        year: 2017,
        countries: ['США'],
        genre: ['фантастика', 'боевик', 'триллер', 'драма'],
        time: 141,
        rating: 7.4,
        plot: 'В недалеком будущем уставший от жизни Логан заботится о больном профессоре Икс, который прячется неподалеку от мексиканской границы. Но Логан больше не сможет скрывать свое прошлое, когда встретится с юным мутантом, которого преследуют темные силы.'
    },
    {
        title: 'Джон Уик 2',
        id: '1487431931_dzhon-uik-2',
        year: 2017,
        countries: ['США'],
        genre: ['боевик', 'триллер', 'криминал'],
        time: 122,
        rating: 7.1,
        plot: 'Когда бывший коллега Джона решает взять под свой контроль таинственную гильдию убийц, Уик вынужден выйти из отставки. Ведомый кровавой клятвой Джон отправляется в Рим, где ему придется сразиться с одними из самых опасных киллеров в мире.'
    },
    {
        title: 'Достать ножи',
        id: '1576196432_0fa6ac8',
        year: 2019,
        countries: ['США'],
        genre: ['детектив', 'комедия', 'драма', 'криминал'],
        time: 130,
        rating: 7.8,
        plot: 'Когда сразу после празднования 85-летия известного автора криминальных романов Харлана Тромби виновника торжества находят мёртвым, за расследование берётся обаятельный и дотошный детектив Бенуа Блан. Ему предстоит распутать тугую сеть уловок и корыстной лжи, которой его опутывают члены неблагополучной семьи Харлана и преданный ему персонал.'
    },
    {
        title: 'Убийство в Восточном экспрессе',
        id: '1510288752_01106ea',
        year: 2017,
        countries: ['США', 'Великобритания', 'Мальта', 'Франция', 'Канада', 'Новая Зеландия'],
        genre: ['драма', 'криминал', 'детектив'],
        time: 114,
        rating: 6.7,
        plot: 'Путешествие на одном из самых роскошных поездов Европы неожиданно превращается в одну из самых стильных и захватывающих загадок в истории. Фильм рассказывает историю тринадцати пассажиров поезда, каждый из которых находится под подозрением. И только сыщик должен как можно быстрее разгадать головоломку, прежде чем преступник нанесет новый удар.'
    },
    {
        title: 'Оно',
        id: '1507135882_c6d0632',
        year: 2017,
        countries: ['США', 'Канада'],
        genre: ['ужасы', 'триллер', 'драма'],
        time: 135,
        rating: 7.5,
        plot: 'Когда в городке Дерри, штат Мэн, начинают пропадать дети, несколько ребят сталкиваются со своими величайшими страхами и вынуждены помериться силами со злобным клоуном Пеннивайзом, чьи проявления жестокости и список жертв уходят в глубь веков.'
    },
    {
        title: 'Интерстеллар',
        id: '1422882994_3f5443f',
        year: 2014,
        countries: ['США', 'Великобритания', 'Канада'],
        genre: ['фантастика', 'драма', 'приключения'],
        time: 169,
        rating: 8.5,
        plot: 'Когда засуха приводит человечество к продовольственному кризису, коллектив исследователей и учёных отправляется сквозь червоточину (которая предположительно соединяет области пространства-времени через большое расстояние) в путешествие, чтобы превзойти прежние ограничения для космических путешествий человека и переселить человечество на другую планету.'
    },
    {
        title: 'Сделано в Америке',
        id: '1512594179_d5d2dc2',
        year: 2017,
        countries: ['США'],
        genre: ['боевик', 'триллер', 'драма', 'комедия', 'криминал', 'биография', 'история'],
        time: 115,
        rating: 7.1,
        plot: 'Он был самым юным пилотом Боинга 747 в США, а уже через несколько лет стал одним из богатейших людей в Америке. Его стиль жизни был столь же экстремальным, как и его бизнес. Закрытые приемы, роскошные блондинки, крутые тачки и рисковые сделки. Он обладал талантом делать деньги из воздуха.'
    },
    {
        title: 'Отряд самоубийц',
        id: '1479623658_f3b2fdc',
        year: 2016,
        countries: ['США'],
        genre: ['фантастика', 'фэнтези', 'боевик', 'приключения'],
        time: 118,
        rating: 6.4,
        plot: 'Правительство решает дать команде суперзлодеев шанс на искупление. Подвох в том, что их отправляют на миссию, где они, вероятнее всего, погибнут.'
    },
    {
        title: 'Марсианин',
        id: '1444073412_7b5f4286b7',
        year: 2015,
        countries: ['США'],
        genre: ['фантастика', 'приключения'],
        time: 141,
        rating: 8.2,
        plot: 'Марсианская миссия «Арес-3» в процессе работы была вынуждена экстренно покинуть планету из-за надвигающейся песчаной бури. Инженер и биолог Марк Уотни получил повреждение скафандра во время песчаной бури. Сотрудники миссии, посчитав его погибшим, эвакуировались с планеты, оставив Марка одного.\n' + '\n' + 'Очнувшись, Уотни обнаруживает, что связь с Землёй отсутствует, но при этом полностью функционирует жилой модуль. Главный герой начинает искать способ продержаться на имеющихся запасах еды, витаминов, воды и воздуха ещё 4 года до прилёта следующей миссии «Арес-4».'
    },
    {
        title: 'Заражение',
        id: '1584800229_d5161b2',
        year: 2011,
        countries: ['ОАЭ', 'США'],
        genre: ['фантастика', 'боевик', 'триллер', 'драма'],
        time: 106,
        rating: 6.4,
        plot: 'Международная организация врачей совместно с Центром по контролю и профилактике заболеваний США пытается помешать распространению смертельного вируса.'
    },
    {
        title: 'Паразиты',
        id: '1562661887_7028fa9',
        year: 2019,
        countries: ['Корея Южная'],
        genre: ['драма', 'комедия', 'триллер'],
        time: 131,
        rating: 8.0,
        plot: 'Генеральный директор международной IT-компании мистер Пак живёт со своей семьёй в роскошном особняке, полном дизайнерских вещей, произведений искусства и мрачных тайн. Скрытое становится явным, когда у старшей дочери мистера Пака появляется новый репетитор по английскому языку.'
    },
    {
        title: 'Счастливого дня смерти',
        id: '1509249509_af64a1d',
        year: 2017,
        countries: ['США'],
        genre: ['ужасы', 'триллер', 'детектив', 'комедия'],
        time: 96,
        rating: 6.4,
        plot: 'Каждый в универе мечтал попасть на её день рождения, но праздник был безнадежно испорчен незнакомцем в маске, убившим виновницу торжества. Однако судьба преподнесла имениннице леденящий душу подарок — бесконечный запас жизней. И теперь у девушки появился шанс вычислить своего убийцу, ведь этот день будет повторяться снова и снова...'
    },
    {
        title: 'Гарри Поттер и философский камень',
        id: '1374782528_2abd3db',
        year: 2001,
        countries: ['Великобритания', 'США'],
        genre: ['фэнтези', 'приключения', 'семейный'],
        time: 152,
        rating: 8.1,
        plot: 'Жизнь десятилетнего Гарри Поттера нельзя назвать сладкой: его родители умерли, едва ему исполнился год, а от дяди и тётки, взявших сироту на воспитание, достаются лишь тычки да подзатыльники. Но в одиннадцатый день рождения Гарри всё меняется. Странный гость, неожиданно появившийся на пороге, приносит письмо, из которого мальчик узнаёт, что на самом деле он чистокровный волшебник и принят в Хогвартс — школу магии. А уже через пару недель Гарри будет мчаться в поезде Хогвартс-экспресс навстречу новой жизни, где его ждут невероятные приключения, верные друзья и самое главное — ключ к разгадке тайны смерти его родителей.'
    },
    {
        title: 'Грань будущего',
        id: '1409591645_705a08d',
        year: 2014,
        countries: ['США', 'Австралия'],
        genre: ['фантастика', 'боевик'],
        time: 113,
        rating: 8.1,
        plot: 'В недалёком будущем раса инопланетян вторгается на Землю. Никакая армия в мире не может противостоять им. Майор Уильям Кейдж умирает в бою, но случается невозможное — он оказывается во временной петле. Раз за разом он попадает в один и тот же бой, сражается и умирает... снова и снова. И каждое повторяющееся сражение приближает его к разгадке того, как победить врага.'
    }
];

//----------------------------------------------------------------- Movies Collection
var Movies = Backbone.Collection.extend({
    initialize: function() {
        this.transformModels();
    },

    // getItemsByItemsPerPage: function(models, itemsPerPage) {// По сколько фильмов отображать
    //     if (itemsPerPage === 'default') {
    //         return models;
    //     } else {
    //         return _.first(models, itemsPerPage);
    //     }
    // },

    getSearchedItems: function(models, needle) {
        if (needle === '') {
            return models;
        } else {
            return models.filter(function(movie) {
                return movie.title.toLowerCase().includes(needle.toLowerCase());
            });
        }
    },

    getItemsSortedBy: function(models, sortBy) {
        if (sortBy === 'default') {
            return models;
        } else {
            var [direction, field] = sortBy.split('_');
            // direction: ascending descending
            // field: title rating year time

            return direction === 'ascending' ?
                _.sortBy(models, field) :
                _.sortBy(models, field).reverse();
        }
    },

    getListOfCountries: function() {
        return _.countBy(_.flatten(_.pluck(this.toJSON(), 'countries')));
    },

    getListOfGenres: function() {
        return _.countBy(_.flatten(_.pluck(this.toJSON(), 'genre')));
    },

    getItemsFilteredBy: function(models, field, filter) {
        return models.filter(function(movie) {
            return filter.every(function(item) {
                return movie[field].includes(item);
            });
        });
    },

    convertMinutesToHours: function(minutes) {
        var _hours = Math.trunc(minutes / 60);
        var _minutes = minutes % 60;

        return `${_hours}:${_minutes}`;
    },

    transformModels: function() {
        this.toJSON().forEach(function(movie) {
            _.extend(movie, {
                hours: this.convertMinutesToHours(movie.time)
            });
        }.bind(this));//TODO: Поясни
    },

    getItemsByPage: function(models, itemsPerPage, page) {
        if (itemsPerPage === 'default') {
            return models;
        }

        return models.slice((page - 1) * itemsPerPage, (page - 1) * itemsPerPage + itemsPerPage);
    }
});

var movies = new Movies(movieModels);

//----------------------------------------------------------------- Application Model
var appModel = new Backbone.Model({
    viewType: 'tiles',              // tiles list
    itemsPerPage: 'default',        // default 6 12 18
    searchText: '',
    sortBy: 'default',              // default ascending_title descending_title...
    filters: {
        countries: [],              // ['СССР', 'Мальта']
        genres: []                  // ['комедия', 'ужасы']
    },
    page: 1                         // 1,2,3
});

//----------------------------------------------------------------- List View
var ListView = Backbone.View.extend({
    initialize: function() {
        this.renderModels();

        this.listenTo(this.model, 'change', function() {
            this.renderModels();
        });
    },

    el: '.movies',

    collection: movies,

    model: appModel,

    tmplFnMovieTiles: $('#movie-tiles-template').html(),
    tmplFnMovieList: $('#movie-list-template').html(),
    tmplFnPagination: $('#pagination-template').html(),

    renderModels: function() {
        var {viewType, itemsPerPage, searchText, sortBy, filters: {countries, genres}, page} = this.model.toJSON();
        var tmplFn = viewType === 'tiles' ? this.tmplFnMovieTiles : this.tmplFnMovieList;
        var viewTypeStateClass = viewType === 'tiles' ? 'state-tiles' : 'state-list';
        var models = [...this.collection.toJSON()];

        models = this.collection.getSearchedItems(models, searchText);
        models = this.collection.getItemsSortedBy(models, sortBy);
        models = this.collection.getItemsFilteredBy(models, 'countries', countries);
        models = this.collection.getItemsFilteredBy(models, 'genre', genres);

        // models = this.collection.getItemsByItemsPerPage(models, itemsPerPage);
        models = this.collection.getItemsByPage(models, itemsPerPage, page);

        this.$el
            .html(doT.template(tmplFn)(models))
            .removeClass('state-tiles state-list')
            .addClass(viewTypeStateClass);

        this.renderPagination(models, itemsPerPage, page);
    },

    renderPagination: function(models, itemsPerPage, page) {
        var pagesCount = Math.ceil(this.collection.toJSON().length / Number(itemsPerPage));

        if (itemsPerPage === 'default') {
            pagesCount = 0;
        }

        $('.pagination').html(doT.template(this.tmplFnPagination)({
            buttons: Array.from({ length: pagesCount }, (v, i) => i+1),// По сколько кнопок отображать
            page: this.model.page
        }));
    }
});

var listView = new ListView;

//----------------------------------------------------------------- Application View
var AppView = Backbone.View.extend({
    initialize: function() {
        this.renderFilters();
    },

    el: '.app',

    events: {
        'click .top-bar .button-list': 'handleButtonList',
        'click .top-bar .button-tiles': 'handleButtonTiles',
        'change .display-quantity select': 'handleChangeItemsPerPage',
        'keyup .top-bar .search': 'handleSearch',
        'change .sorting select': 'handleSort',
        'change .filters input': 'handleCheckboxes',
        'click .pagination': 'handlePagination',
        'click .movies': 'handleClickOnMovie'
    },

    collection: movies,

    model: appModel,

    tmplFnCountries: $('#filter-countries-template').html(),
    tmplFnGenres: $('#filter-genre-template').html(),

    renderFilters: function() {
        var listOfCountries = this.collection.getListOfCountries();
        var listOfGenres = this.collection.getListOfGenres();

        $('.filter-countries').html(doT.template(this.tmplFnCountries)({
            countries: Object.keys(listOfCountries),
            counts: Object.values(listOfCountries)
        }));
        $('.filter-genre').html(doT.template(this.tmplFnGenres)({
            genres: Object.keys(listOfGenres),
            counts: Object.values(listOfGenres)
        }));
    },

    handleClickOnMovie: function(e) {
        if (this.model.viewType === 'list') {
            return;
        }

        var $movie = $(e.target).closest('.movie');
        if (!$movie.length) {
            return;
        }

        var movieId = $movie.data('id');
        this.showMoviePopUp(movieId);
    },

    findMovieById: function(movieId) {
        return this.collection.toJSON().filter(function(movie) {
            return movie.id === movieId;
        });
    },

    showMoviePopUp: function(movieId) {
        var movie = this.findMovieById(movieId);
        new PopUp(movie);
    },

    handlePagination: function(e) {
        if ($(e.target)[0].localName !== 'button') {
            return;
        }

        this.model.set('page', Number($(e.target).text()));

        $('.pagination button').removeClass('active');
        $(e.target).addClass('active');
    },

    handleButtonList: function() {
        this.model.set('viewType', 'list');

        $('.top-bar .button-list').addClass('active');
        $('.top-bar .button-tiles').removeClass('active');
    },

    handleButtonTiles: function() {
        this.model.set('viewType', 'tiles');

        $('.top-bar .button-tiles').addClass('active');
        $('.top-bar .button-list').removeClass('active');
    },

    handleChangeItemsPerPage: function(e) {
        this.model.set('itemsPerPage', e.target.value);
    },

    handleSearch: function(e) {
        this.model.set('searchText', e.target.value);
    },

    handleSort: function(e) {
        this.model.set('sortBy', e.target.value);
    },

    handleCheckboxes: function(e) {
        this.model.set('filters.countries', $('.filter-countries input:checked').toArray().map(function(input) {
            return input.value;
        }));

        this.model.set('filters.genres', $('.filter-genre input:checked').toArray().map(function(input) {
            return input.value;
        }));
    }
});

var appView = new AppView;

//----------------------------------------------------------------- Popup View
var PopUp = Backbone.View.extend({
    initialize: function(movie) {
        this.movie = movie;
        this.render();
        $(document).on('keyup', this.remove.bind(this));
    },

    tmplFnMovieList: $('#movie-list-template').html(),

    render: function() {
        $('<div class="overlay">').appendTo('body');
        $('<div class="popup">').appendTo('body');
        $('.popup').html(doT.template(this.tmplFnMovieList)(this.movie));
    },

    remove: function(e) {
        if (e.keyCode === 27) {
            Backbone.View.prototype.remove.apply(this, arguments);
            $('.overlay').remove();
            $('.popup').remove();
        }
    }
});
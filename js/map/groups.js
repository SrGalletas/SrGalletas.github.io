const baby_marker = "img/map/babies.png";
const cosmetic_marker = "img/map/cosmetic.png";
const edu_marker = "img/map/edu.png";
const film_marker = "img/map/film.png";
const health_marker = "img/map/health.png";
const market_marker = "img/map/market.png";
const rest_marker = "img/map/rest.png";

const set_marker = (src) => {
    const obj = {
        iconLayout: "default#image",
        iconImageHref: src,
        iconImageSize: [45, 45],
        iconImageOffset: [-20, -20],
    };
    return obj;
};

const groups = [
    {
        name: "Красота и здоровье",
        items: [
            {
                center: [54.32244896471903, 48.35846367606636],
                marker: set_marker(health_marker),
            },
            {
                center: [54.322913064059584, 48.353603513331365],
                marker: set_marker(health_marker),
            },
            {
                center: [54.32273118791774, 48.3559316707563],
                marker: set_marker(cosmetic_marker),
            },
        ],
    },
    {
        name: "Магазины",
        items: [
            {
                center: [54.32308866784383, 48.35477295646186],
                marker: set_marker(market_marker),
            },
            {
                center: [54.32375898755966, 48.35317310990852],
                marker: set_marker(market_marker),
            },
            {
                center: [54.32325099715208, 48.35929927529853],
                marker: set_marker(market_marker),
            },
            {
                center: [54.32261129656319, 48.360887143035335],
                marker: set_marker(market_marker),
            },
        ],
    },
    {
        name: "Обучение",
        items: [
            {
                center: [54.3244488409859, 48.36124119462531],
                marker: set_marker(edu_marker),
            },
            {
                center: [54.32271742017724, 48.354570026841564],
                marker: set_marker(edu_marker),
            },
        ],
    },
    {
        name: "Детсад",
        items: [
            {
                center: [54.3239392388232, 48.357691199870075],
                marker: set_marker(baby_marker),
            },
            {
                center: [54.323970595911234, 48.35432234534736],
                marker: set_marker(baby_marker),
            },
            {
                center: [54.32466279670633, 48.36054507026193],
                marker: set_marker(baby_marker),
            },
        ],
    },
    {
        name: "Отдых, развлечения",
        items: [
            {
                center: [54.32277386460255, 48.35868989988843],
                marker: set_marker(rest_marker),
            },
            {
                center: [54.322950917187406, 48.359935216009525],
                marker: set_marker(rest_marker),
            },
            {
                center: [54.323358567297554, 48.35385196596375],
                marker: set_marker(rest_marker),
            },
            {
                center: [54.322957188758295, 48.35290782839052],
                marker: set_marker(film_marker),
            },
        ],
    },
];

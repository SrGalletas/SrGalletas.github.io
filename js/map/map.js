const center = [54.323638209556435, 48.35700455436226];
const bounds = [
    [54.32244896471476, 48.352907828390464],
    [54.32466279670207, 48.36124119462526],
];

function init() {
    const map = new ymaps.Map("map", {
        center: center,
        zoom: 17,
    });

    const block_filter = document.getElementById("map-block__filter");
    for (var i = 0, l = groups.length; i < l; i++) {
        createMenuGroup(groups[i], i);
    }

    function createMenuGroup(group, i) {
        let item = createEl("a", ["block-filter__item"]);
        block_filter.append(item);
        if (i === 0) {
            item.classList.add("active");
        }

        let item_name = createEl("div", ["block-filter_name"], group.name);
        item.append(item_name);

        let item_counter = createEl(
            "div",
            ["block-filter_counter"],
            group.items.length
        );
        item.append(item_counter);

        // Коллекция для геообъектов группы.
        let collection = new ymaps.GeoObjectCollection(null, {});

        // Добавляем коллекцию на карту.
        if (i === 0) {
            map.geoObjects.add(collection);
        }
        // По клику удаляем/добавляем коллекцию на карту
        item.addEventListener("click", () => {
            if (collection.getParent()) {
                map.geoObjects.remove(collection);
                item.classList.remove("active");
            } else {
                map.geoObjects.add(collection);
                item.classList.add("active");
            }
        });

        for (var j = 0, m = group.items.length; j < m; j++) {
            let item_map = group.items[j];
            // Создаем метку.
            let placemark = new ymaps.Placemark(
                item_map.center,
                {},
                item_map.marker
            );
            // Добавляем метку в коллекцию.
            collection.add(placemark);
        }
    }

    // Выставляем масштаб карты чтобы были видны все группы.
    map.setBounds(bounds);
    // map.setBounds(map.geoObjects.getBounds());

    map.controls.remove("geolocationControl"); // удаляем геолокацию
    map.controls.remove("searchControl"); // удаляем поиск
    map.controls.remove("trafficControl"); // удаляем контроль трафика
    map.controls.remove("typeSelector"); // удаляем тип
    map.controls.remove("fullscreenControl"); // удаляем кнопку перехода в полноэкранный режим
    map.controls.remove("zoomControl"); // удаляем контрол зуммирования
    map.controls.remove("rulerControl"); // удаляем контрол правил
    map.behaviors.disable(["scrollZoom"]); // отключаем скролл карты (опционально)
    map.behaviors.disable('drag'); // отключаем скролл на мобильном
}

ymaps.ready(init);

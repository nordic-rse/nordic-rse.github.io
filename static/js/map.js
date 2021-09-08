'use strict';

function add_icon(service, account) {
    var href = (service == 'email') ? `mailto:${account}` : `https://${service}.com/${account}`;
    return `<a id="img-link" href="${href}" target="_blank">
                <i class="fa fa-${service} fa-lg" aria-hidden="true"></i>
            </a>`;
}


function popup_text(person_or_group) {
    var s = ''

    if (person_or_group.homepage != undefined) {
        s += `<a href="${person_or_group.homepage}" target="_blank">${person_or_group.name}</a>`;
    } else {
        s += person_or_group.name;
    }

    if (person_or_group.github != undefined) {
        s += add_icon('github', person_or_group.github);
    }

    if (person_or_group.gitlab != undefined) {
        s += add_icon('gitlab', person_or_group.gitlab);
    }

    if (person_or_group.twitter != undefined) {
        s += add_icon('twitter', person_or_group.twitter);
    }

    // email icon by Icon Island licensed under CC BY 3.0
    if (person_or_group.email != undefined) {
        s += add_icon('email', person_or_group.email);
    }

    return s;
}


function coordinates_of_places(places) {
    var dict = {};
    for (const place of places) {
        dict[place.name] = [place.lat, place.lon];
    }
    return dict;
}


function add_marker(markers, places, person_or_group, color) {
    var lat = (person_or_group.place != undefined) ? places[person_or_group.place][0] : person_or_group.lat;
    var lon = (person_or_group.place != undefined) ? places[person_or_group.place][1] : person_or_group.lon;

    var marker = L.circleMarker([lat, lon], {
        radius: 10
    }).setStyle({
        color: color
    });
    marker.bindPopup(popup_text(person_or_group));

    markers.addLayer(marker);
}


function load_map(args) {
    axios.get(args.data_url)
        .then(function(response) {
            var _data = jsyaml.load(response.data);
            var persons = _data.persons;
            var groups = _data.groups;
            var places = coordinates_of_places(_data.places);

            var markers = L.markerClusterGroup({
                iconCreateFunction: function(cluster) {
                    return new L.DivIcon({
                        html: '<div><span>' + cluster.getChildCount() + '</span></div>',
                        className: 'cluster',
                        iconSize: new L.Point(40, 40)
                    });
                }
            });

            var leaflet_map = L.map(args.id).setView([63.0, 15.0], 4);
            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {}).addTo(leaflet_map);

            for (const person of persons) {
                add_marker(markers, places, person, "#3383ff");
            }

            for (const group of groups) {
                add_marker(markers, places, group, "#dc33ff");
            }

            leaflet_map.addLayer(markers);
        })
};
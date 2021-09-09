'use strict';

function add_icon(service, account, instance) {
    if (service === 'email') {
        var href = `mailto:${account}`
    } else if (service === 'mastodon') {
        var href = `https://${instance}/@${account}`;
    } else if (service === 'gitlab') {
        var href = `https://${instance != undefined ? instance : 'gitlab.com'}/${account}`;
    } else if (service === 'gitea') {
        var href = `https://${instance}/${account}`;
    } else {
        var href = `https://${service}.com/${account}`;
    }

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
        s += add_icon('gitlab', person_or_group.gitlab, person_or_group.gitlab_instance);
    }

    if (person_or_group.gitea != undefined) {
        s += add_icon('gitea', person_or_group.gitea, person_or_group.gitea_instance);
    }

    if (person_or_group.twitter != undefined) {
        s += add_icon('twitter', person_or_group.twitter);
    }

    if (person_or_group.email != undefined) {
        s += add_icon('email', person_or_group.email);
    }

    if (person_or_group.mastodon != undefined) {
        s += add_icon('mastodon', person_or_group.mastodon, person_or_group.mastodon_instance);
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

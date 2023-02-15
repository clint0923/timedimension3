import "./styles.css";

import "leaflet/dist/leaflet.css";
import "leaflet-timedimension/dist/leaflet.timedimension.control.min.css";

import L from "leaflet";
import "leaflet-timedimension";

import data from "./data2.json";

var map = L.map("app", {
  zoom: 3,
  center: [38.705, 1.15],
  timeDimension: true,
  timeDimensionControl: true,
  timeDimensionOptions: {
    times: [1496314227000, 1504263027000],
    currentTime: 1496314227000,
    // period: "P1M",
  },
  timeDimensionControlOptions: {
    playerOptions: { transitionTime: 1000, startOver: true },
  }
});

const dataLayer = L.geoJson(data);
L.timeDimension.layer.geoJson(dataLayer).addTo(map);

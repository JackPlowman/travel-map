import jsVectorMap from "jsvectormap"
import "jsvectormap/dist/jsvectormap.min.css"
import "jsvectormap/dist/maps/world"
import "./style.css"

// Codes - https://en.wikipedia.org/wiki/ISO_3166-2
const places = [
  // North America
  "US", // United States

  // Europe
  "CY", // Cyprus
  "ES", // Spain
  "FR", // France
  "GB", // United Kingdom
  "GR", // Greece
  "IT", // Italy
  "MT", // Malta
  "NO", // Norway
  "PT", // Portugal
  "TR", // Turkey

  // Asia
  "CN", // China
  "SG", // Singapore

  // Oceania
  "AU", // Australia
]

new jsVectorMap({
  selector: "#map",
  map: "world",
  regionStyle: {
    selectedHover: { fill: "gray" },
    selected: { fill: "green" },
  },
  selectedRegions: places,
})

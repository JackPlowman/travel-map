import jsVectorMap from "jsvectormap"
import "jsvectormap/dist/jsvectormap.min.css"
import "jsvectormap/dist/maps/world"
import "./style.css"

const places = [
  // North America
  "US", // United States

  // Europe
  "GB", // United Kingdom
  "IT", // Italy
  "FR", // France
  "ES", // Spain
  "PT", // Portugal
  "CY", // Cyprus
  "GR", // Greece
  "TR", // Turkey
  "NO", // Norway

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
    selected: { fill: 'green' },
  },
  selectedRegions: places,
})

import jsVectorMap from "jsvectormap"
import "jsvectormap/dist/jsvectormap.min.css"
import "jsvectormap/dist/maps/world"
import "./style.css"

const map = new jsVectorMap({
  selector: "#map",
  map: "world",
  regionStyle: {
    selectedHover: { fill: "gray" },
  },
})

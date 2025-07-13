import "./style.css";
import jsVectorMap from "jsvectormap";
import "jsvectormap/dist/jsvectormap.min.css";
import "jsvectormap/dist/maps/world";

const map = new jsVectorMap({
  selector: "#map",
  map: "world",
});

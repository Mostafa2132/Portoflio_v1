import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

// font-awesome
import "@fortawesome/fontawesome-free/css/all.min.css";

// import $ from 'jquery';
// // import _ from 'lodash';
// import noUiSlider from 'nouislider';
// import 'datatables.net-dt';
// import Dropzone from 'dropzone';
// import * as VanillaCalendarPro from 'vanilla-calendar-pro';

// // window._ = _;
// window.$ = $;
// window.jQuery = $;
// window.DataTable = $.fn.dataTable;
// window.noUiSlider = noUiSlider;
// window.Dropzone = Dropzone;
// window.VanillaCalendarPro = VanillaCalendarPro;



createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App  />
  </StrictMode>
);

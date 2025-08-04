import React from "react";
import ReactDOM from "react-dom/client";

import Header from "./components/Header.js";

/* Components of Our Food-Order App
 * Header
 * - Logo
 * - Nav Items
 * Body
 * - Search Bar
 * - Restaurant-Container
 *  - Restaurant-Card
 *    - Img
 *    - Name of Res, Star Rating, cuisine, delivery time.
 * Footer
 * - Copyright
 * - Links
 * - Address
 * - Contact
 */

const currYear = new Date().getFullYear();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);

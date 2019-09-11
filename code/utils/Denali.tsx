function Denali() {
  if (document.getElementById("framerDenaliCSS")) {
    console.log("CSS already loaded!");
    return;
  } else {
    console.log("Adding CSS...");
    // Add body class
    document.body.classList.add("denali-default-theme");
    document.body.setAttribute("id", "framerDenaliCSS");

    // Add link tag to add main css
    let css = document.createElement("link");
    css.href = "https://unpkg.com/denali-css/dist/css/denali-v0.4.2.css";
    css.id = "framerDenaliCSS";
    css.rel = "stylesheet";
    document.head.appendChild(css);

    // Add link tag to add font css
    let font = document.createElement("link");
    font.href =
      "https://unpkg.com/denali-css/dist/css/denali-icon-font-v1.0.0.css";
    font.id = "framerDenaliCSS";
    font.rel = "stylesheet";
    document.head.appendChild(font);

    // Loading css finished
    console.log("CSS added!");
  }
}

Denali();

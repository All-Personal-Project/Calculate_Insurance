import domGenerator from "dom-generator";
import "./index.scss";

function renderProject() {
  let renderPage = domGenerator({
    tag: "section",
    attributes: { id: "parentSection" },
    // children: [
    //   {},
    // ],
  });

  document.body.append(renderPage)
}

export default renderProject;

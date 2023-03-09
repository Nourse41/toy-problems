/*
HmtlNode
@prop {string} tag = HTML tag name
@prop {object} attributes - (optional) Map of attribute names to values
@prop {array} children = (optional) Array of HTMLNodes and / or strings

EXAMPLE:
INPUT:
let example = {
  "tag": "body",
  "attrs": { "id": "app" },
  "children": [{"tag": "div"}, "text to render"]
}

OUTPUT:
<body id="app"> <div />
  text to render
<body>

conditions:
- may handle more than one argument
- non-root lines should be continually indented by two spaces
- each child should be on a new line (except...)
  - if a node has no children, use self closing tag
  - if a node has only one child, and child is a string, keep child in line with the tags
  - DO no indent attributes
*/

let example = {
  "tag": "body",
  "attrs": { "id": "app", "class": "blue"},
  "children": [{"tag": "div"}, "text to render"]
}
let example4 = {
  "tag": "div",
  "attrs": {"class": "div"},
  "children": ["I'm a div!", {"tag": "div"}]
};
let example2 = {
  "tag": "p",
  "attrs": { "id": "paragraph"},
  "children": [example4]
};
let example3 = {
  "tag": "span",
  "attrs": { "id": "app", "class": "blue"},
  "children": [{"tag": "div"}, "I'm the span", example2]
};
let simpleSample3 = {
  "tag": "span",
  "attrs": {"class": "span"},
  "children": ["I an in-line span!"]
};
let simpleSample2 = {
  "tag": "div",
  "attrs": {"class": "div", "class": "blue"},
  "children": ["I come second!"]
};
let simpleSample = {
  "tag": "body",
  "attrs": {"id": "body"},
  "children": ["I'm the body!", simpleSample3, example3, simpleSample2, example]
};

const jsonToHtml = (json) => {
  //! declare variables
  let attributes = [];
  let opening = ""
  let closing =  "";
  let body = "";

  //! recursive break case
  if (typeof json === 'string') {
    return json + '\n';
  }

  //! create tag attributes & adjust opening (optional)
  if (json.attrs) {
    for (var key in json.attrs) {
      let attribute = `${key}="${json.attrs[key]}"`;
      attributes.push(attribute);
    }
    opening = `<${json.tag} ${attributes.join(` `)}>\n`;
  } else {
    opening = `<${json.tag}>\n`
  }

  if (json.children && json.children.length) {
    closing = `</${json.tag}>`

    //! handle children recursively
    for (var i = 0; i < json.children.length; i++) {
      // check if tag should be in line to handle single children
      let chunk = jsonToHtml(json.children[i]);
      if (chunk[1] === '/') {
        opening = opening.slice(0, -1) + chunk
      } else {
        body += `  ${chunk}`
      }
    }
  // if no children, create self closing tag
  } else {
    opening = `</${opening.slice(1)}`;
  }

  // return html string
  return body.length ? opening + body + closing : opening + closing;
};

console.log(jsonToHtml(simpleSample));

module.exports = jsonToHtml

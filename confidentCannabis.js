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

const jsonToHtml = (json, depth = 0) => {
  let attributes = [];
  let opening = `<${json.tag}>\n`;
  let body = ``;
  let closing =  ``;
  let spacing = `  `.repeat(depth);
  let result = ``;

  if (typeof json === `string`) {
    return spacing + json + `\n`;
  }

  if (json.attrs && Object.keys(json.attrs).length) {
    for (var key in json.attrs) {
      attributes.push(`${key}="${json.attrs[key]}"`);
    }
    opening = `<${json.tag} ${attributes.join(` `)}>\n`;
  }

  if (json.children && json.children.length) {
    closing = (depth === 0) ? `</${json.tag}>` : `</${json.tag}>\n`;
    for (var i = 0; i < json.children.length; i++) {
      let chunk = jsonToHtml(json.children[i], depth + 1);
      if (chunk[chunk.indexOf(`>`) - 1] === `/`) {
        opening = opening.slice(0, -1) + ` ` + chunk.slice(chunk.indexOf(`<`));
      } else {
        body += chunk;
      }
    }
  } else {
    opening = opening.replace(`>\n`, ` />\n`);
  }

  if (body.length > 0 && body.includes(`<`) === false) {
    opening = opening.replace(`\n`, ``);
    body = body.replace(`\n`, ``);
    while (body[0] === ` `) {body = body.substring(1)}
    result = spacing + opening + body + closing;

  } else if (body.length > 0) {
    let spacingCount = 0, pointer = 0;
    body = spacing + body;
    while (body[pointer] === ` `) {spacingCount++; pointer++;}
    while (spacingCount > spacing.length + 2) {spacingCount--; body = body.substring(1);
    }
    opening = spacing + opening;
    closing = spacing + closing;
    result = opening + body + closing;

  } else {
    opening = spacing + opening;
    closing = (closing.length !== 0) ? spacing + closing : closing;
    result = opening + closing;
  }

  return result;
};

console.log(jsonToHtml(simpleSample));

module.exports = jsonToHtml;

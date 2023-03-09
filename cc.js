let example6 = {
  "tag": "div",
  "attrs": undefined,
  "children": null
};
let example5 = {
  "tag": "div",
  "attrs": null,
  "children": undefined
};
let example = {
  "tag": "img",
  "attrs": { "src": "http://someimageurl.com/image.png"},
  "children": []
}
let example4 = {
  "tag": "div",
  "attrs": {"class": "div"},
  "children": ["I'm a div!", {"tag": "div"}]
};
let example2 = {
  "tag": "p",
  "attrs": { "id": "paragraph"},
  "children": ["sup it's lil' P", example4]
};
let example3 = {
  "tag": "span",
  "attrs": { "id": "app", "class": "blue"},
  "children": [{"tag": "div"}, {"tag": "div"}, "I'm the span", {"tag": "div"}, example2]
};
let simpleSample3 = {
  "tag": "span",
  "attrs": {},
  "children": ["Single child of text"]
};
let simpleSample2 = {
  "tag": "div",
  "attrs": {"class": "div", "class": "blue"},
  "children": ["Im an inline div!"]
};
let smallestSample = {
  "tag": "body",
  "attrs": { "id": "app" },
  "children": [{"tag": "div"}, simpleSample3, "text to render"]
}
let sample = {
  "tag": "body",
  "attrs": {"id": "app"},
  "children": [{"tag": "div"}, "I'm the body!", simpleSample3, example3, simpleSample2, example, example5, example6]
};

let span1 = {
  "tag": "span",
  "attrs": {},
  "children": [{"tag": "div", "attrs": {"background-color": "blue"}, "children": [simpleSample3]}, "First line of text", "Second line of text"]
}

let sampleOutPut = {
  "tag": "body",
  "attrs": {"id": "app"},
  "children": [{"tag": "div", "attrs": {"id": "i-have-no-children", "class": "a-pretty-class"}}, span1]
}

/*
HTMLNodes
@prop {string} tag = HTML tag name
@prop {object} attributes = (optional) Map of attribute names to values
@prop {array} children = (optional) Array of HTMLNodes and/or strings

The format of the HTML should be as follows:
  [X] Every non-root line should be continually indented by two spaces per indented line
  [X] Each child should be on a new line (except for the exceptions below)
    [X] If a node has no children, use a self-closing tag
    [X] If a node has only one child, and that child is a string, keep the child in line with the tags
    [X] Do not indent attributes

EXAMPLE:
INPUT:
let example = {
  "tag": "body",
  "attrs": { "id": "app" },
  "children": [{"tag": "div"}, "text to render"]
}

OUTPUT:
<body id="app"><div />
  text to render
<body>
*/

// [each child should be on a new line except...] If a node has only one child, and that child is a string, keep the child in line with the tags
// --> assumed in-line tag of single child string should maintain line position (as to maintain HTML/JSON tree structure) vs staying on same line as parent ›

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
    opening = opening.replace(`>\n`, ` ${attributes.join(` `)}>\n`);
  }

  if (json.children && json.children.length) {
    closing = depth === 0 ? `</${json.tag}>` : `</${json.tag}>\n`;
    for (var i = 0; i < json.children.length; i++) {
      let chunk = jsonToHtml(json.children[i], depth + 1);

      var openingCount = 0; pointer = 0;
      while (pointer < chunk.length) {
        if (chunk[pointer] === `<`) {
          openingCount++;
        }
        pointer++;
      }

      if (openingCount === 2 && body.length === 0) {
        opening = opening.slice(0, -1) + chunk.slice(chunk.indexOf(`<`));
      } else if (chunk[chunk.indexOf(`>`) - 1] === `/` && body.length === 0) {
        opening = opening.slice(0, -1) + chunk.slice(chunk.indexOf(`<`));
      } else {
        body += chunk;
      }
    }
  } else {
    opening = opening.replace(`>\n`, ` />\n`);
  }

  if (body.length > 0 && body.includes(`<`) === false && depth !== 0) {
    opening = opening.replace(`\n`, ``);
    body = body.replace(`\n`, ``);
    while (body[0] === ` `) {
      body = body.substring(1);
    }
    result = spacing + opening + body + closing;

  } else if (body.length > 0) {
    body = spacing + body;
    var spacingCount = 0, pointer = 0;
    while (body[pointer] === ` `) {
      spacingCount++;
      pointer++;
    }
    while (spacingCount > spacing.length + 2) {
      spacingCount--;
      body = body.substring(1);
    }
    opening = spacing + opening;
    closing = spacing + closing;
    result = opening + body + closing;

  } else {
    opening = spacing + opening;
    closing = closing.length > 0 ? spacing + closing : closing;
    result = opening + closing;
  }

  return result;
};

console.log(jsonToHtml(sample));

module.exports = jsonToHtml;

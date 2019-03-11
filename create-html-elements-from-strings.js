/**
 * @param {String} HTML representing a single element
 * @return {Element}
 */
function htmlToElement(html) {
    var template = document.createElement('template');
    html = html.trim(); // Never return a text node of whitespace as the result
    template.innerHTML = html;
    return template.content.firstChild;
}

var td = htmlToElement('<td>foo</td>'),
    div = htmlToElement('<div><span>nested</span> <span>stuff</span></div>');

/**
 * @param {String} HTML representing any number of sibling elements
 * @return {NodeList} 
 */
function htmlToElements(html) {
    var template = document.createElement('template');
    template.innerHTML = html;
    return template.content.childNodes;
}

var rows = htmlToElements('<tr><td>foo</td></tr><tr><td>bar</td></tr>');













// Note: most current browsers support HTML <template> elements, which provide a more reliable way of turning creating elements from strings. See Mark Amery's answer below for details.

// For older browsers, and node/jsdom: (which doesn't yet support <template> elements at the time of writing), use the following method. It's the same thing the libraries use to do to get DOM elements from an HTML string (with some extra work for IE to work around bugs with its implementation of innerHTML):

function createElementFromHTML(htmlString) {
  var div = document.createElement('div');
  div.innerHTML = htmlString.trim();

  // Change this to div.childNodes to support multiple top-level nodes
  return div.firstChild; 
}

// Note that unlike HTML templates this won't work for some elements that cannot legally be children of a <div>, such as <td>s. 














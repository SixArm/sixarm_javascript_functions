////
//
// SixArm.com JavaScript functions:
// Rapid App Development (RAD) utilties.
//
// https://github.com/sixarm/sixarm_javascript_functions
//
//   * These are intentionally simple, to be easy to learn and adjust.
//
//   * These are intentionally generic, to be easy to use with any project.
//
//   * These do not check for conflicts, and do not do any error handling.
//
//   * These use current vanilla JavaScript, and not any other library.
//
////

////
//
// Node prototypes
//
////

// Set id.
Node.prototype.setId = function(id) {
    this.id = id;
    return this;
};

// Set innerHTML.
Node.prototype.setInnerHTML = function(innerHTML) {
    this.innerHTML = innerHTML;
    return this;
};

// Set checked.
Node.prototype.setChecked = function(boolean) {
    this.checked = boolean;
    return this;
};

// Set selected.
Node.prototype.setSelected = function(boolean) {
    this.selected = boolean;
    return this;
};


// Toogle node style display to show the node or hide the node.
Node.prototype.toggle = function() {
    this.style.display = (this.style.display == "none") ? "block" : "none";
    return this;
}

////
//
// Node prototypes for element children
//
////

// Append all child elements
Node.prototype.appendChildren = function(children) {
    children.forEach(child => this.appendChild(child));
    return this;
};

// Remove all child elements.
Node.prototype.removeChildren = function() {
    while (this.lastChild) this.removeChild(this.lastChild);
    return this;
};

// Replace all child elements.
Node.prototype.replaceChildren = function(children) {
    return this.removeChildren().appendChildren(children);
};

////
//
// Storage prototypes
//
////

// Save an object via local storage.
Storage.prototype.setObject = function(key, value) {
    this.setItem(key, JSON.stringify(value));
}

// Load an object via local storage.
Storage.prototype.getObject = function(key) {
    return JSON.parse(this.getItem(key));
}

////
//
// Element convenience functions
//
////

// Create an element with a type, optional props, and optional children.
function element(type, props, ...children) {
    let e = document.createElement(type);
    if (typeof props != "undefined" && props != null) {
        Object.keys(props).forEach(key => e.setAttribute(key, props[key]));
    }
    if (typeof children != "undefined" && children != null) {
        children.forEach(child => e.appendChild(child));
    }
    return e;
}

// Get element by id.
function elementById(id) {
    return document.getElementById(id);
}

// Get element by class name.
function elementsByClassName(className) {
    return document.getElementsByClassName(className);
}

////
//
// Browsing convenience functions
//
////

/**
 * Parse a query string to its parameters.
 * See https://stackoverflow.com/questions/901115/how-can-i-get-query-string-values-in-javascript
 */
function parseQueryString(queryString) {
    let pairs = queryString.split('&'));
    if (pairs == "") return {};
    var params = {};
    for (var i = 0; i < pairs.length; ++i)
    {
        var p = pairs[i].split('=', 2);
        if (p.length == 1)
            params[p[0]] = "";
        else
            params[p[0]] = decodeURIComponent(p[1].replace(/\+/g, " "));
    }
    return params;
}

/**
 * Parse a URL string to its parameters, such as query string key-value items.
 * See https://stackoverflow.com/questions/901115/how-can-i-get-query-string-values-in-javascript
 *
 * The code is thanks to Google. It is obfuscated, but it is understandable. 
 * It does not work because some variables are undefined.
 * 
 * They start to look for parameters on the url from ? and also from the hash #. 
 * Then for each parameter they split in the equal sign b[f][p]("=") (which looks 
 * like indexOf, they use the position of the char to get the key/value). 
 *
 * Having it split they check whether the parameter has a value or not, if 
 * it has then they store the value of d, otherwise they just continue.
 *
 * In the end the object d is returned, handling escaping and the + sign. 
 * This object is just like mine, it has the same behavior.
 */
function getURLParameters(b) {
    var c = typeof b === "undefined";
    if (a !== h && c) return a;
    for (var d = {}, b = b || k[B][vb], e = b[p]("?"), f = b[p]("#"), b = (f === -1 ? b[Ya](e + 1) : [b[Ya](e + 1, f - e - 1), "&", b[Ya](f + 1)][K](""))[z]("&"), e = i.dd ? ia : unescape, f = 0, g = b[w]; f < g; ++f) {
        var l = b[f][p]("=");
        if (l !== -1) {
            var q = b[f][I](0, l),
                l = b[f][I](l + 1),
                l = l[Ca](/\+/g, " ");
            try {
                d[q] = e(l)
            } catch (A) {}
        }
    }
    c && (a = d);
    return d
}
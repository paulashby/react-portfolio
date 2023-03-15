import React from "react";
import sanitizeHtml from 'sanitize-html';

function sanitize(dirty) {
  
    // https://stackoverflow.com/questions/38663751/how-to-safely-render-html-in-react
    const clean = sanitizeHtml(dirty, {
        allowedTags: ['p', 'b', 'i', 'em', 'strong', 'a', 'br'],
        allowedAttributes: {
            'a': ['href', 'target']
        }
    });
    return clean;
}

function createMarkup(innerHTML) {
    return {__html: sanitize(innerHTML)};
}

function Description(props) {
  return (
    <div className="card-text" dangerouslySetInnerHTML={createMarkup(props.innerHTML)} />    
  );
}

export default Description;
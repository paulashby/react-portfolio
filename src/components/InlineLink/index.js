import React from "react";

function InlineLink(props) {
    return (
        <span>
            <a href={props.url} target="blank">{props.text}</a>
        </span>
    )
}
export default InlineLink;
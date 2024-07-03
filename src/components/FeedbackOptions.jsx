import React from "react";
import propTypes from "prop-types";

export default function FeedbackOptions ({ options, onLeaveFeedback }) {
    return (
        <div className="buttons">
            {options.map((option) => (
                <button key={option} onClick={() => onLeaveFeedback(option)}>
                    {option}
                </button>
            ))}
        </div>
    );
}

FeedbackOptions.propTypes = {
    options : propTypes.arrayOf(propTypes.string),
    onLeaveFeedback : propTypes.func,
}




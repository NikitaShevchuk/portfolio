import React from "react";

const Tip = ({ tipIsShown }) => {
    console.log(tipIsShown);
    return (
        <div className="tip">
            {tipIsShown && (
                <span className="opacity">
                    Scroll down to see all page content
                </span>
            )}
        </div>
    );
};

export default Tip;

import React from "react";

const Price = ({ salePrice, originalPrice }) => {
    return (
        <div className="book__price">
            {salePrice ? (
                <>
                    <span className="book__price--normal">
                        ${Price.originalPrice.toFixed(2)}
                    </span>
                    ${Price.salePrice.toFixed(2)}
                </>
            ) : (
                <> ${Price.originalPrice.toFixed(2)}</>
            )}
        </div>
    )
}

export default Price
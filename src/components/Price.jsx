import React from "react";

const Price = ({ salePrice, originalPrice }) => {
    return (
        <div className="book__price">
            {salePrice ? (
                <>
                    <span className="book__price--normal">
                        ${price.originalPrice.toFixed(2)}
                    </span>
                    ${price.salePrice.toFixed(2)}
                </>
            ) : (
                <> ${price.originalPrice.toFixed(2)}</>
            )}
        </div>
    )
}

export default Price
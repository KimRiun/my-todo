import React from "react";

function CaptionImage({imgUrl, caption='기본값'}) {
    return(
        <div>
            <img src={imgUrl} alt={caption} />
            <p>{caption}</p>
        </div>
    )
}

export default CaptionImage;
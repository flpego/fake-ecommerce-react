
export function RatingStars({ rateProp }) {
    const renderStars = () => {
        const stars = [];
        const fullStars = Math.floor(rateProp);
        const hasHalfStar = rateProp % 1 !== 0; // si rateProp es un numero entero, el resultado da 0
        for (let i = 1; i <= 5; i++) {
            if (i <= fullStars) {
                stars.push(<i key={i} className="fa-solid fa-star span-blue"></i>);
            } else if (i === fullStars + 1 && hasHalfStar) {
                stars.push(<i key={i} className="fa-regular fa-star-half-stroke span-blue"></i>);

            } else {
                stars.push(<i key={i} className="fa-regular fa-star span-blue"></i>);

            }
        }
        return stars;

    }
    return (
        <div>
            <span className="span-blue p-1">{rateProp}</span>
            {renderStars()}
        </div>  
    )
}

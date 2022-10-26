import '../App.css';
// import element from '../data';


export default function Card(prop) {
    let badgeText
    if (prop.openSpots === 0){
        badgeText ="SOLD OUT"
    } else if (prop.location === "Online"){
        badgeText = "ONLINE"
        console.log(badgeText)
    }
    return (
        <section>
            <div className='card'>
                {badgeText && <div className='card--badge'>{badgeText}</div>}
                <img
                src= {require(`../${prop.coverImg}`)}
                alt="katie Zafares"
                className="card_img"
                />
                <div className='card_info'>
                    <img className='star'
                    src= {require(`../${prop.star}`)}

                    alt="rating"
                    />
                        <span className='rating info'>{prop.rating}</span>
                        <span className='num_rating gray info'>({prop.stats.rating})• </span>
                        <span className='country gray info'>{prop.location}</span>
                </div>
                <div>
                    <p>
                        {prop.title}
                    </p>
                    <p><span className='bold'>From {prop.price}</span> / person</p>
                </div>
            </div>
        </section>
    )
}

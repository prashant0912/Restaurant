export const Restaurant = ({name,image,vote,review,cost,payment,categories,rating})=>{
    return (
        <div id = "change">
        <div className = "card">
            <div id = "img_div">
               <img id = "image" src={image} alt="" />
            </div>
            <div id = "name1">{name}</div>
            <div id = "cat">{categories}</div>
            <div >Cost:{cost} for one</div>
            <div id = "move"><span id = "rating1">{rating}</span></div>
            <div className = "vote">{vote} votes</div>
            <div className ="vote">{review} reviews</div>
            <div className = "payment">Accepts <span id = "method">{payment}</span> Payment only</div>
            

        </div>
        </div>

    )
}
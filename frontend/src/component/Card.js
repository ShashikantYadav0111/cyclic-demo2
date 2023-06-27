import './Card.css'

export default function Card({character}){
    

    console.log(character);
    const char = {
        id:character.id,
        name:character.name,
        age:character.age,
        occupation:character.occupation,
        imageuri:character.imageuri
    }


    return(
        <div className="card-body">
            <div className="image-section"><img src={char.imageuri} alt="profile-pic"/></div>
            <div className="detail-section">
                <ul>
                    <li>Name:{char.name}</li>
                    <li>Age:{char.age}</li>
                    <li>Occupation:{char.occupation}</li>
                </ul>
            </div>
        </div>
    )
}
import './Veg.css';

export default function FoodLabel(props){
    return(
        <div className="foodlabel" style={{border:(props.veg==true)?"2px solid green":"2px solid red"}}>
            <div className="round" style={{backgroundColor:(props.veg==true)?"green":"red"}} ></div>
        </div>
    )
}

import React from "react"

export default function Option(props){
    let styles={}

    if(props.option.isHeld && !props.checked){
        //selected style
        styles = {
            backgroundColor: "#D6DBF5",
            border: "none",
            color: "rgba(77,91,158,1)"
        }
    }
    else if(props.option.isCorrect){
        styles={
            backgroundColor: "#94D7A2",
            border: "none"
        }
    } else if(props.option.isWrong){
        styles={
            backgroundColor: "#F8BCBC",
            border: "none"
        }

    } else if(props.checked){
        styles={
            backgroundColor: "#FFFFFF",
            border: "1px solid rgba(77,91,158,0.5)",
            color: "rgba(77,91,158,0.5)"
        }
    }

    return (
        <span   
            key={props.option.id}
            className="option" 
            style={styles}
            onClick={()=>props.toggleOption(props.option.id, props.qId)}
        >
            {props.option.value}
        </span>
    )
}
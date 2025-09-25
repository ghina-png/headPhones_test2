import './../../assets/styles/input.css'

const Input = (props) => {
    if( props.item == "input"){
  return (
    <div className="input-box " >
      {props.showSpan && (<label htmlFor={props.name}>{props.placeholder}</label>)}
      <input type={props.type} id={props.name} name={props.name} required placeholder={props.place} className={"input " + props.className} />
    </div>   
    )
  } 
  else  if( props.item == "check"){
    return (
    <div className="check-box " >
      <input type="checkbox" id={props.name} name={props.name}   className={"input " + props.className} />
      {props.showSpan && (<label htmlFor={props.name}>{props.placeholder}</label>)}
    </div>   
    )
  }
    else {
      return (
    <div  className="text-box ">
      <label htmlFor={props.name}>{props.placeholder}</label>
      <textarea name={props.name} id={props.name} rows={5} required></textarea>      
    </div>    
    )}
}

export default Input

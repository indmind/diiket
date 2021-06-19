import "./HowItWorkItem.css";

export default function HowItWorkItem(props) {
  return (
    <div className="item-box">
      <div className="row">
        <div className="col-md-2 col-xs-2 pl-3 pl-lg-2 mb-2">
          <img src={props.imgSrc} className="process-picture" alt={props.title}/>
        </div>
        <div className="col-md-10 col-xs-10 pl-4">
          <h6 className='mb-2'>{props.title}</h6>
          <small>{props.body}</small>
        </div>
      </div>
    </div>
  );
}

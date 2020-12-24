function EducationItem(props) {
  return (
    <div className="card p-4 m-4">
      <div className="my-edu-item">
        <div>
          <figure className="image is-24x24">
            <img src={props.img} alt={props.place} />
          </figure>
          <h4 className="subtitle">{props.place}</h4>
        </div>
        <h3 className="title">{props.title}</h3>
        <p className="is-size-5">{props.desc}</p>
      </div>
    </div>
  );
}

export default EducationItem;
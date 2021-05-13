const CityCard = ({ city }) => {
  console.log(city);
  return (
    <div className="ui card raised">
      <div className="content">
        <div className="header">
          <i className="hospital outline icon"></i> {city.name}
        </div>
      </div>

      <div className="ui content ">
        <div className="item">
          <h4 className="ui left floated ">
            <i className="clock outline icon"></i> Available Slots :
          </h4>
          <br/>
          <div className="ui divider"></div>
          
          <div className=" ui one column centered  grid">
            {city.slots.map((item) => {
              return (
                <div className="column">
                  <div className="ui label">{item}</div>
                  <br />
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="content">
        <div className="ui small feed">
          <div className="event">
            <div className="content">
              <div className="summary">
                <div>
                  <i className="stethoscope icon"></i>&nbsp;&nbsp;&nbsp;
                  <b>vaccine name : </b>
                  {city.vaccine}
                </div>
                <div>
                  <i className="money bill alternate icon"></i>&nbsp;&nbsp;&nbsp;
                  <b>vaccine fee : </b>
                  {city.fee}
                </div>
                <div>
                  <i className="calendar check outline icon"></i>&nbsp;&nbsp;&nbsp;
                  <b>min_age_limit : </b>
                  {city.min_age_limit}
                </div>
                <div>
                  <i className="shield alternate icon"></i>&nbsp;&nbsp;&nbsp;
                  <b>available capacity : </b>
                  {city.available_capacity}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CityCard;

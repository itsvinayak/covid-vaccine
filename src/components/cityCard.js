const CityCard = ({ city }) => {
  console.log(city);
  return (
    <div class="ui card raised">
      <div class="content">
        <div class="header">
          <i class="hospital outline icon"></i> {city.name}
        </div>
      </div>

      <div class="ui content ">
        <div class="item">
          <h4 class="ui left floated ">
            <i class="clock outline icon"></i> Available Slots :
          </h4>
          <br/>
          <div class="ui divider"></div>
          
          <div class=" ui one column centered  grid">
            {city.slots.map((item) => {
              return (
                <div class="column">
                  <div class="ui label">{item}</div>
                  <br />
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div class="content">
        <div class="ui small feed">
          <div class="event">
            <div class="content">
              <div class="summary">
                <div>
                  <i class="stethoscope icon"></i>&nbsp;&nbsp;&nbsp;
                  <b>vaccine name : </b>
                  {city.vaccine}
                </div>
                <div>
                  <i class="money bill alternate icon"></i>&nbsp;&nbsp;&nbsp;
                  <b>vaccine fee : </b>
                  {city.fee}
                </div>
                <div>
                  <i class="calendar check outline icon"></i>&nbsp;&nbsp;&nbsp;
                  <b>min_age_limit : </b>
                  {city.min_age_limit}
                </div>
                <div>
                  <i class="shield alternate icon"></i>&nbsp;&nbsp;&nbsp;
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

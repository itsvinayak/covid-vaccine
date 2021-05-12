const CityCard = ({ city }) => {
  console.log(city);
  return (
    <div class="ui card">
      <div class="content">
        <div class="header"> <i class="hospital outline icon"></i> {city.name}</div>
      </div>
      <div class="content">
        <div class="ui small feed">
          <div class="event">
            <div class="content">
              <div class="summary">
                <div>
                  <b>vaccine name : </b>
                  {city.vaccine}
                </div>
                <div>
                  <b>vaccine fee : </b>
                  {city.fee}
                </div>
                <div>
                  <b>min_age_limit : </b>
                  {city.min_age_limit}
                </div>
                <div>
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

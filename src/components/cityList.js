import CityCard from './cityCard';

const CityList = ({ citys }) => {
  
  const cityLink = citys.map( (item) =>{
    return <div className="column"> <CityCard city={item} /> </div>
  });

  return(
    <div className="ui stackable three centered column grid">
     {cityLink}
    </div>
  );
}

export default CityList;
import CityCard from './cityCard';

const CityList = ({ citys }) => {
  
  const cityLink = citys.map( (item) =>{
    return <div class="column"> <CityCard city={item} /> </div>
  });

  return(
    <div class="ui three column grid">
     {cityLink}
    </div>
  );
}

export default CityList;
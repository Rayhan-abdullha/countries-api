import React, { useEffect, useState } from "react";
import axios from "axios";
import Countries from "../../components/Countries/Countries";

function sorting(a, b) {
  const nameA = a.name.common.toUpperCase();
  const nameB = b.name.common.toUpperCase();

  let comparison = 0;
  if (nameA > nameB) {
    comparison = 1;
  } else if (nameA < nameB) {
    comparison = -1;
  }
  return comparison;
}


export default function Home({searchData}) {
  const [country, setCountry] = useState([]);
  useEffect(() => {
    let mounted = true;
    (async () => {
      const { data: countries } = await axios.get(
        "https://restcountries.com/v3.1/all"
      );

      if (searchData){
        console.log(searchData);
        const filter = countries.filter(c => c.name.common.toLowerCase().includes(searchData))
        if (filter.length !== 0){
          setCountry(filter)
        } else {
          setCountry([])
        }
      } else {
        countries.sort(sorting)
        setCountry(countries);
      }
      
    })();
    return () => {
      mounted = false;
    };
  }, [searchData]);

  return (
    <div className='container'>
        <div className="row">
            <Countries country={country}/>
        </div>
    </div>
  )
}

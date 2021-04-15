async function fetchData(fn: () => Array<Country>) {
  const response = await fetch("http://localhost:3000/Netherlands");
  const counrtryData = await response.json();
  return counrtryData;
}

export interface Country {
  [countryName: string]: {
    All?: {
      confirmed: number;
      lat: number;
      long: number;
    };
  };
}

export default fetchData;

import { getDateFromUnix } from "../../utils";

interface IHeader {
  weatherItem: any;
}

export const Header = ({ weatherItem }: IHeader) => {
  if (!weatherItem) return <h1>No data.</h1>;

  return (
    <div className="mt-12">
      <p className="mx-auto bg-gray-300 rounded-full px-4 py-1 w-fit">Hari ini</p>
      <div className="my-4">
      <div className="flex justify-between items-center">
        <p>{getDateFromUnix(weatherItem.dt)}</p>
        <p>{weatherItem.weather[0]["main"]}</p>
      </div>
      <h1 className="text-6xl sm:text-8xl font-bold">
        {weatherItem.temp.day}
        <span className="ml-2">°C</span>
      </h1>
      </div>

    </div>
  );
};

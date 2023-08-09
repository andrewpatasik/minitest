import { CloudSolidIcon } from "../../assets";
import { getDateFromUnix } from "../../utils";

interface ICard {
  weatherItem: any;
}

export const Card = ({ weatherItem }: ICard) => {
  if (!weatherItem) return <h1>No data.</h1>;

  return (
    <div className="bg-gray-200 p-4 rounded-md">
      <p>{getDateFromUnix(weatherItem.dt)}</p>
      <h3 className="text-2xl sm:text-2xl md:text-3xl font-bold">
        <span className="inline-block align-middle mr-1">
          <CloudSolidIcon className="w-6 h-6" />
        </span>
        {weatherItem.temp.day}
        <span className="ml-2">°C</span>
      </h3>
      <ul className="mt-2">
        <li>
          <p>
            Min: <span>{weatherItem.temp.min}</span>
          </p>
        </li>
        <li>
          <p>
            Max: <span>{weatherItem.temp.max}</span>
          </p>
        </li>
      </ul>
    </div>
  );
};

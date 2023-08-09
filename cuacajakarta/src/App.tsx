import { Card, Footer, Header, Navbar } from "./components";
import { isObjectEmpty } from "./utils";
import { CalendarSolidIcon } from "./assets";
import { useFetch } from "./hooks/useFetch";

const App = () => {
  const [weatherData] = useFetch();

  if (isObjectEmpty(weatherData)) return <h1>loading</h1>;

  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <main className="mx-4 flex flex-col flex-1 text-gray-700 items-center">
        <Header weatherItem={weatherData.daily[0]} />
        <section className="flex-1 w-full">
            <h2 className="font-medium text-xl my-2">
              <span className="inline-block align-middle mr-1">
                <CalendarSolidIcon />
              </span>
              Cuaca sepekan
            </h2>
            <article className="grid grid-cols-1 sm:grid-cols-4 gap-4">
              {weatherData.daily
                .splice(1, 4)
                .map((weatherItem: any, index: any) => {
                  return <Card key={index} weatherItem={weatherItem} />;
                })}
            </article>
          </section>
      </main>
      <Footer />
    </div>
  );
};

export default App;

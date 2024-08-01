import Arrow from "../assets/Arrow";
import Card from "./Card";

function Imprint() {
  return (
    <div className=" w-full flex flex-col gap-10">
      <Card >
        <a className="pb-2" href="/">
        <div className="bg-primary w-10 h-10 rounded-full flex justify-center items-center">
          <Arrow />
        </div>
        </a>
        <h1 className="mt-5 text-2xl pb-5">Impressum</h1>

        <p>
          Kevin Rohlf
          <br />
          Saselbergring 6<br />
          22395 Hamburg
        </p>

        <h2>Kontakt</h2>
        <p>
          Telefon: <a href="tel:+4915161553487">
            015161553487
            </a>
          <br />
          E-Mail: <a href="mailto:kevin@rohlf.io">kevin@rohlf.io</a>
        </p>

        <p>
          Quelle:{" "}
          <a href="https://www.e-recht24.de/impressum-generator.html">
            https://www.e-recht24.de/impressum-generator.html
          </a>
        </p>
      </Card>
    </div>
  );
}

export default Imprint;

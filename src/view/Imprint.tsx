import { Link } from "react-router-dom";
import Arrow from "../assets/Arrow";
import Card from "../components/Card";

function Imprint() {
  return (
    <div className="flex w-full flex-col gap-10">
      <Card>
        <Link className="pb-2" to="/">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary">
            <Arrow />
          </div>
        </Link>
        <h1 className="mt-5 pb-5 text-2xl">Impressum</h1>

        <p>
          Kevin Rohlf
          <br />
          Saselbergring 6<br />
          22395 Hamburg
        </p>

        <h2>Kontakt</h2>
        <p>
          Telefon: <a href="tel:+4915161553487">015161553487</a>
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

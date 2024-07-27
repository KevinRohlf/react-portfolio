import Card from "./Card";

function Imprint() {
    return ( 
        
          <div className=" flex flex-col gap-10">
            <Card>
                <a className="pb-2" href="/">{'<--'}</a>
              <h2 className="text-2xl">Impressum</h2>
              <div className="mt-5 text-sm text-pretty">
                <h3>Angaben gemäß § 5 TMG:</h3>
                <p>Kevin Rohlf</p>
                <p>Heideweg 1</p>
                <p>22397 Hamburg</p>
                <h3>Kontakt:</h3>
                <p>Telefon: 0176 12345678</p>
                <p>E-Mail: kevin@rohlf.io</p>
                <h3>Haftung für Inhalte</h3>
                <p>
                  Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene
                  Inhalte auf diesen Seiten nach den allgemeinen Gesetzen
                  verantwortlich. Nach §§ 8 bis 10 TMG sind wir als
                  Diensteanbieter jedoch nicht verpflichtet, übermittelte oder
                  gespeicherte fremde Informationen zu überwachen oder nach
                  Umständen zu forschen, die auf eine rechtswidrige Tätigkeit
                  hinweisen.
                </p>
              </div>
            </Card>
          </div>
     );
}

export default Imprint;
import React from "react";
import Help from "../Help/Help";
import useToggle from "../Help/use-toggle";
import { HelpCircle } from "react-feather";

function Header() {
  const [isModalOpen, toggleIsModalOpen] = useToggle(false);
  return (
    <header>
      <h1>Hra WORDLE</h1>
      {isModalOpen && (
        <Help handleDismiss={toggleIsModalOpen} isModalOpen={isModalOpen}>
          <h3>
            WORDLE je slovní hra, ve které se snažíte uhodnout pětipísmenné
            slovo.
          </h3>{" "}
          <p>
            <strong>První pokus:</strong> Napíšete libovolné pětipísmenné slovo
            jako váš první tip.
          </p>
          <p>
            <strong>Zpětná vazba:</strong> Po odeslání slova se každé písmeno
            obarví, aby vám ukázalo, jak blízko jste uhodnutí správného slova:
          </p>
          <ul>
            <li>
              <strong style={{ color: "green" }}>Zelená:</strong> Písmeno je ve
              slově a je na správné pozici.
            </li>
            <li>
              <strong style={{ color: "rgb(210, 181, 91)" }}>Žlutá: </strong>
              Písmeno je ve slově, ale na jiné pozici.
            </li>
            <li>
              <strong style={{ color: "grey" }}>Šedá:</strong> Písmeno ve slově
              není.
            </li>
          </ul>{" "}
          <p>
            <strong>Další pokusy:</strong> S pomocí této zpětné vazby zadáváte
            další slova, přičemž se snažíte slovo uhodnout. Každé nové slovo by
            mělo vycházet z informací získaných z předchozích pokusů.
          </p>{" "}
          <p>
            <strong>Cíl hry:</strong> Cílem je uhodnout slovo během šesti
            pokusů. Pokud se vám to podaří, vyhráváte.
          </p>
        </Help>
      )}
      <button className="help" onClick={toggleIsModalOpen}>
        <HelpCircle />
      </button>
    </header>
  );
}

export default Header;

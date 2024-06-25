import { cssGridData } from "../data";
import Avatar from "../components/Avatar";
import BioText from "../components/BioText";
import SocalMedia from "../components/SocalMedia";
import My from "../components/My";
import BackEnd from "../components/BackEnd";
import ImpactApp from "../components/ImpactApp";
import Saas from "../components/Saas";
import Aiapp from "../components/Aiapp";

export default function Home() {
  const sStyleCss = `rounded-xl flex flex-col items-center justify-center`;
  return (
    <div className="md:ml-56 grid md:grid-cols-3 auto-rows-[200px] gap-1 mr-2 py-10 h-full">
      {cssGridData.map((_, i) => {
        return (
          <div
            key={i}
            className={`${sStyleCss} ${i === 0 ? "md:col-span-2" : ""}`}
          >
            {i === 0 && <Avatar />}
            <div className="">{i === 2 && <BioText />}</div>
            {i === 1 && <SocalMedia />}
            {i === 3 && <My />}
            {i === 4 && <ImpactApp />}
            {i === 5 && <Saas />}
            {i === 6 && <BackEnd />}
            {i === 7 && <Aiapp />}
          </div>
        );
      })}
    </div>
  );
}

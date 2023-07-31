import bir from "./Resimler/images (12).png";
import iki from "./Resimler/images (2).png";
import uc from "./Resimler/images (3).png";
import dort from "./Resimler/images (32).png";
import bes from "./Resimler/images (4).png";
import alti from "./Resimler/images.png";
import yedi from "./Resimler/indir (1).png";
import sekiz from "./Resimler/indir (2).png";
import dokuz from "./Resimler/indir.png";
import "./Course.css";
const teamMap = {
  bir: bir,
  iki: iki,
  uc: uc,
  dort: dort,
  bes: bes,
  alti: alti,
  yedi: yedi,
  sekiz: sekiz,
  dokuz: dokuz,
}; //İki isim yazmak yerine app.js de ve course de aynı olan isimleri tek yazılabilir

function Course({ teamName }) {
  console.log(teamName);
  return (
    <div className="teamDiv">
      <img className="team" src={teamMap[teamName]} alt="" />
    </div>
  );
}

export default Course;

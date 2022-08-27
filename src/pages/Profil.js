import React from "react";
import { useParams } from "react-router-dom";
import BarCharts from "../components/Charts/BarCharts";
import LineCharts from "../components/Charts/LineCharts";
import PieCharts from "../components/Charts/PieChart";
import RadarCharts from "../components/Charts/RadarChart";
import CardMacro from "../components/Cards/CardMacro";
import NavigationHorizontal from "../components/Navigations/NavigationHorizontal";
import NavigationVertical from "../components/Navigations/NavigationVertical";
import { useFetch } from "../utils/hooks";

const Profil = () => {
  const { id } = useParams();
  const datas = useFetch("userName", id);

  return (
    <div className="profil">
      <NavigationHorizontal img="../pictures/logo.png" />
      <div className="contain_nav_information">
        <NavigationVertical />
        <div className="contain_more_info_profil">
          <div className="nameUser">
            <p>
              Bonjour <span>{datas.userInfos?.firstName}</span>
            </p>
            <p className="contain_text_for_win">
              Félicitation ! Vous avez explosé vos objectifs hier 👏
            </p>
          </div>
          <div className="contain_charts">
            <div className="charts">
              <BarCharts userId={id} />
              <div className="contain_litle_charts">
                <LineCharts userId={id} />
                <RadarCharts userId={id} />
                <PieCharts userId={id} />
              </div>
            </div>
            <div className="cards">
              <CardMacro
                logo="../pictures/logos/path.png"
                title={datas.keyData?.calorieCount}
                macro="KCal"
                weight="Calories"
                bgColor="bg--calories"
              />
              <CardMacro
                logo="../pictures/logos/chicken.png"
                title={datas.keyData?.proteinCount}
                macro="g"
                weight="Proteines"
                bgColor="bg--proteines"
              />
              <CardMacro
                logo="../pictures/logos/apple.png"
                title={datas.keyData?.carbohydrateCount}
                macro="g"
                weight="Glucides"
                bgColor="bg--glucides"
              />
              <CardMacro
                logo="../pictures/logos/cheeseburger.png"
                title={datas.keyData?.lipidCount}
                macro="g"
                weight="Lipides"
                bgColor="bg--lipides"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profil;

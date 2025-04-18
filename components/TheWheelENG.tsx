import { StyleSheet, View, Image, Platform } from "react-native";
import React from "react";
import {
  Svg,
  Circle,
  Path,
  Text,
  TextPath,
  Defs,
  G,
  TSpan,
} from "react-native-svg";
import { mobile } from "@/app/SettingsContext";
import { useSettings } from "@/app/SettingsContext";

const TheWheelENG = () => {
  const { hemisphere } = useSettings();

  const pi = Math.PI;
  let tday: Date = new Date();
  let todayNum: number = Math.ceil(
    (tday.getTime() - new Date(tday.getFullYear(), 0, 1).getTime()) / 86400000
  );
  let initialAngle = getDegrees(todayNum) + 11;

  function getDegrees(day: number) {
    return (day * 360) / 365;
  }

  function getRadians(day: number) {
    let toDegrees = getDegrees(day);
    return toDegrees * (pi / 180);
  }

  function drawMoon(angle: number) {
    return (
      <Circle
        cx={175 + 150 * Math.cos(angle)}
        cy={175 + 150 * Math.sin(angle)}
        r="13"
        fill="black"
        stroke="white"
        strokeWidth="1.3"
      />
    );
  }

  let moon1 = -getRadians(1 + 101); //Renovaçao
  let moon2 = -getRadians(29 + 101); //Limpeza
  let moon3 = -getRadians(59 + 101); //Ventos fortes
  let moon4 = -getRadians(88 + 101); //Novos começos
  let moon5 = -getRadians(117 + 101); //Crescimento
  let moon6 = -getRadians(147 + 101); //Floraçao
  let moon7 = -getRadians(176 + 101); //Dias Longos
  let moon8 = -getRadians(205 + 101); //Amadurecim
  let moon9 = -getRadians(235 + 101); //Abundancia
  let moon10 = -getRadians(276 + 101); //Cair das Folhas --aggiornare da qui, inclusa
  let moon11 = -getRadians(306 + 101); //Decomposiçao
  let moon12 = -getRadians(336 + 101); //Noites Longas

  function cardinalWinter() {
    if (hemisphere === "north") {
      return (
        <Text fontSize="20" fontWeight="400" fontFamily="Cocchin">
          <TextPath fill="black" href="#moontextsLuados" startOffset="24.4%">
            N
          </TextPath>
        </Text>
      );
    } else {
      return (
        <Text fontSize="20" fontWeight="400" fontFamily="Cocchin">
          <TextPath fill="black" href="#moontextsLuados" startOffset="24.4%">
            S
          </TextPath>
        </Text>
      );
    }
  }
  function cardinalSummer() {
    if (hemisphere === "north") {
      return (
        <Text fontSize="20" fontWeight="400" fontFamily="Cocchin">
          <TextPath fill="black" href="#moontextsLuados" startOffset="74.4%">
            S
          </TextPath>
        </Text>
      );
    } else {
      return (
        <Text fontSize="20" fontWeight="400" fontFamily="Cocchin">
          <TextPath fill="black" href="#moontextsLuados" startOffset="74.4%">
            N
          </TextPath>
        </Text>
      );
    }
  }

  return (
    <View style={styles.container}>
      <Svg style={styles.dateSvg}>
        <Text
          x="20"
          y="25"
          fill="none"
          fontFamily="Cocchin"
          strokeWidth="2"
          stroke="purple"
          fontSize="30"
        >
          TODAY: {tday.toLocaleDateString()}
        </Text>
      </Svg>
      {!mobile && (
        <Image
          style={styles.bufaloWEB}
          source={require("@/assets/images/bufalone.png")}
        />
      )}
      <Svg style={styles.svg}>
        <Image
          style={styles.bufalo}
          source={require("@/assets/images/bufalone.png")}
        />

        <Path
          d={mobile ? "M185,52 L180,5 L190,5" : "M185,15 L180,-60 L190,-60"}
          fill="rgb(160 120 220)"
          stroke="black"
        />

        <G
          rotation={hemisphere === "north" ? initialAngle : -initialAngle}
          origin="175, 175"
          translateY="20"
          translateX="10"
          scale={mobile ? "0.95" : "1.2"}
        >
          <Path
            d="M175,175 v-150 a150,150 30 0,0 -150,150 z"
            fill={
              hemisphere === "north" ? "rgb(250 250 250)" : "rgb(250 230 30)"
            }
            stroke="black"
            strokeWidth="2"
          />
          <Path
            d="M175,175 v150 a150,150  30   0,1   -150,-150 z"
            fill={
              hemisphere === "north" ? "rgb(250 230 30)" : "rgb(250 250 250)"
            }
            stroke="black"
            strokeWidth="2"
          />
          <Path
            d="M175,175 h150 a150,150  30   0,1   -150,150 z"
            fill={hemisphere === "north" ? "red" : "rgb(100 100 100)"}
            stroke="black"
            strokeWidth="2"
          />
          <Path
            d="M175,175 v-150 a150,150  30   0,1   150,150 z"
            fill={hemisphere === "north" ? "rgb(100 100 100)" : "red"}
            stroke="black"
            strokeWidth="2"
          />

          <Defs>
            <Path
              id="moontextsLuados"
              d="M-5,175 a167.5,167.5 30 0,1 360,0 a167.5,167.5 30 0,1 -360,0"
              stroke="black"
              strokeWidth="1"
              fill="none"
            />
            <Path
              id="moontextsLuada"
              d="M2.5,175 a170,170 30 0,1 342.5,0 a170,170 30 0,1 -342.5,0"
              stroke="black"
              strokeWidth="1"
              fill="none"
            />
            <Path
              id="moontexts"
              d="M10,175 a165,165 30 0,1 330,0 a165,165 30 0,1 -330,0"
            />
            <Path
              id="elementos"
              d="M137,175 a30.5,30.5 30 0,1 76,0 a30.5,30.5 30 0,1 -76,0"
            />
            <Path
              id="corpos"
              d="M106,175 a67,67 30 0,1 138,0 a67,67 30 0,1 -138, 0"
            />
            <Path
              id="estacoes"
              d="M120,175 a55,55 30 0,1 110,0 a55,55 30 0,1 -110, 0 "
            />
            <Path
              id="reinos"
              d="M91,175 a67,67 30 0,1 168,0 a67,67 30 0,1 -168, 0"
            />
            <Path id="corpo mental" d="M106,170 a67,67 30 0,1 65,-63" />
            <Path id="inverno" d="M122,170 a53,53 30 0,1 50,-48" />
            <Path
              id="spirits"
              d="M70,175 a105,105 30 0,1 210, 0 a105,105 30 0,1 -210, 0"
            />
          </Defs>
          <Text fontSize="20" fontWeight="400" fontFamily="Cocchin">
            <TextPath fill="black" href="#moontextsLuados" startOffset="99.39%">
              E
            </TextPath>
          </Text>
          {cardinalWinter()}
          <Text fontSize="20" fontWeight="400" fontFamily="Cocchin">
            <TextPath fill="black" href="#moontextsLuados" startOffset="49.2%">
              W
            </TextPath>
          </Text>
          {cardinalSummer()}

          <Text fontSize="9" fontWeight="400" fontFamily="Cocchin">
            <TextPath
              fill="black"
              href="#estacoes"
              startOffset={hemisphere === "north" ? "7%" : "82%"}
            >
              WINTER
            </TextPath>
          </Text>
          <Text fontSize="9" fontWeight="400" fontFamily="Cocchin">
            <TextPath
              fill="white"
              href="#estacoes"
              startOffset={hemisphere === "north" ? "30.5%" : "56%"}
            >
              AUTUMN
            </TextPath>
          </Text>
          <Text fontSize="9" fontWeight="400" fontFamily="Cocchin">
            <TextPath
              fill="black"
              href="#estacoes"
              startOffset={hemisphere === "north" ? "56%" : "31%"}
            >
              SUMMER
            </TextPath>
          </Text>
          <Text fontSize="9" fontWeight="400" fontFamily="Cocchin">
            <TextPath
              fill="black"
              href="#estacoes"
              startOffset={hemisphere === "north" ? "82%" : "7.5%"}
            >
              SPRING
            </TextPath>
          </Text>
          <Text fontSize="9" fontWeight="400" fontFamily="Cocchin">
            <TextPath
              fill="black"
              href="#elementos"
              startOffset={hemisphere === "north" ? "9%" : "84%"}
            >
              AIR
            </TextPath>
          </Text>
          <Text fontSize="9" fontWeight="400" fontFamily="Cocchin">
            <TextPath
              fill="white"
              href="#elementos"
              startOffset={hemisphere === "north" ? "30%" : "55.5%"}
            >
              EARTH
            </TextPath>
          </Text>
          <Text fontSize="9" fontWeight="400" fontFamily="Cocchin">
            <TextPath
              fill="black"
              href="#elementos"
              startOffset={hemisphere === "north" ? "55%" : "30%"}
            >
              WATER
            </TextPath>
          </Text>
          <Text fontSize="9" fontWeight="400" fontFamily="Cocchin">
            <TextPath
              fill="black"
              href="#elementos"
              startOffset={hemisphere === "north" ? "82.5%" : "8.5%"}
            >
              FIRE
            </TextPath>
          </Text>
          <Text fontSize="9" fontWeight="400" fontFamily="Cocchin">
            <TextPath
              fill="black"
              href="#corpos"
              startOffset={hemisphere === "north" ? "5%" : "79%"}
            >
              MENTAL BODY
            </TextPath>
          </Text>
          <Text fontSize="9" fontWeight="400" fontFamily="Cocchin">
            <TextPath
              fill="white"
              href="#corpos"
              startOffset={hemisphere === "north" ? "28.5%" : "53.5%"}
            >
              PHYSICAL BODY
            </TextPath>
          </Text>
          <Text fontSize="9" fontWeight="400" fontFamily="Cocchin">
            <TextPath
              fill="black"
              href="#corpos"
              startOffset={hemisphere === "north" ? "52%" : "27.5%"}
            >
              EMOTIONAL BODY
            </TextPath>
          </Text>
          <Text fontSize="9" fontWeight="400" fontFamily="Cocchin">
            <TextPath
              fill="black"
              href="#corpos"
              startOffset={hemisphere === "north" ? "78%" : "3.5%"}
            >
              SPIRITUAL BODY
            </TextPath>
          </Text>
          <Text fontSize="9" fontWeight="400" fontFamily="Cocchin">
            <TextPath
              fill="black"
              href="#reinos"
              startOffset={hemisphere === "north" ? "6%" : "80.2%"}
            >
              ANIMAL REALM
            </TextPath>
          </Text>
          <Text fontSize="9" fontWeight="400" fontFamily="Cocchin">
            <TextPath
              fill="white"
              href="#reinos"
              startOffset={hemisphere === "north" ? "30%" : "55%"}
            >
              MINERAL REALM
            </TextPath>
          </Text>
          <Text fontSize="9" fontWeight="400" fontFamily="Cocchin">
            <TextPath
              fill="black"
              href="#reinos"
              startOffset={hemisphere === "north" ? "54.5%" : "30%"}
            >
              VEGETAL REALM
            </TextPath>
          </Text>
          <Text fontSize="9" fontWeight="400" fontFamily="Cocchin">
            <TextPath
              fill="black"
              href="#reinos"
              startOffset={hemisphere === "north" ? "79.5%" : "4.5%"}
            >
              SPIRITUAL REALM
            </TextPath>
          </Text>
          <Text fontSize="13" fontFamily="CocchinBold">
            <TextPath
              fill="black"
              href="#spirits"
              startOffset={hemisphere === "north" ? "7%" : "82%"}
            >
              WABOOSE
            </TextPath>
          </Text>
          <Text fontSize="13" fontFamily="CocchinBold">
            <TextPath
              fill="white"
              href="#spirits"
              startOffset={hemisphere === "north" ? "28.5%" : "54.5%"}
            >
              MUDJEKEEWIS
            </TextPath>
          </Text>
          <Text fontSize="13" fontFamily="CocchinBold">
            <TextPath
              fill="black"
              href="#spirits"
              startOffset={hemisphere === "north" ? "54.5%" : "30%"}
            >
              SHAWNODESE
            </TextPath>
          </Text>
          <Text fontSize="13" fontFamily="CocchinBold">
            <TextPath
              fill="black"
              href="#spirits"
              startOffset={hemisphere === "north" ? "83.5%" : "8%"}
            >
              WABUN
            </TextPath>
          </Text>
          <Circle
            cx="175"
            cy="175"
            r="50"
            fill="none"
            stroke="black"
            strokeWidth="1"
          />
          <Circle
            cx="175"
            cy="175"
            r="65"
            fill="none"
            stroke="black"
            strokeWidth="1"
          />
          <Circle
            cx="175"
            cy="175"
            r="80"
            fill="none"
            stroke="black"
            strokeWidth="1"
          />
          <Circle
            cx="175"
            cy="175"
            r="95"
            fill="none"
            stroke="black"
            strokeWidth="1"
          />

          <Text fontSize="9" fontFamily="Cocchin">
            <TextPath
              fill="black"
              href="#moontexts"
              startOffset={hemisphere === "north" ? "20%" : "73.9%"}
            >
              Renovation
            </TextPath>
          </Text>
          <Text fontSize="9" fontFamily="Cocchin">
            <TextPath
              fill="black"
              href="#moontextsLuada"
              startOffset={hemisphere === "north" ? "20.5%" : "74.4%"}
            >
              Moon of
            </TextPath>
          </Text>

          <Text fontSize="9" fontFamily="Cocchin">
            <TextPath
              fill="black"
              href="#moontexts"
              startOffset={hemisphere === "north" ? "12.6%" : "82%"}
            >
              Cleansing
            </TextPath>
          </Text>
          <Text fontSize="9" fontFamily="Cocchin">
            <TextPath
              fill="black"
              href="#moontextsLuada"
              startOffset={hemisphere === "north" ? "13%" : "82.3%"}
            >
              Moon of
            </TextPath>
          </Text>

          <Text fontSize="9" fontFamily="Cocchin">
            <TextPath
              fill="black"
              href="#moontexts"
              startOffset={hemisphere === "north" ? "3.9%" : "89.7%"}
            >
              Strong Winds
            </TextPath>
          </Text>
          <Text fontSize="9" fontFamily="Cocchin">
            <TextPath
              fill="black"
              href="#moontextsLuada"
              startOffset={hemisphere === "north" ? "4.9%" : "90.5%"}
            >
              Moon of
            </TextPath>
          </Text>

          <Text fontSize="9" fontFamily="Cocchin">
            <TextPath
              fill="black"
              href="#moontexts"
              startOffset={hemisphere === "north" ? "96.1%" : "1.1%"}
            >
              Beginnings
            </TextPath>
          </Text>
          <Text fontSize="9" fontFamily="Cocchin">
            <TextPath
              fill="black"
              href="#moontextsLuados"
              startOffset={hemisphere === "north" ? "96.7%" : "1.6%"}
            >
              Moon of
            </TextPath>
          </Text>
          <Text fontSize="9" fontFamily="Cocchin">
            <TextPath
              fill="black"
              href="#moontextsLuada"
              startOffset={hemisphere === "north" ? "97.4%" : "2.5%"}
            >
              new
            </TextPath>
          </Text>

          <Text fontSize="9" fontFamily="Cocchin">
            <TextPath
              fill="black"
              href="#moontexts"
              startOffset={hemisphere === "north" ? "89%" : "9.9%"}
            >
              Growth
            </TextPath>
          </Text>
          <Text fontSize="9" fontFamily="Cocchin">
            <TextPath
              fill="black"
              href="#moontextsLuada"
              startOffset={hemisphere === "north" ? "88.9%" : "9.9%"}
            >
              Moon of
            </TextPath>
          </Text>

          <Text fontSize="9" fontFamily="Cocchin">
            <TextPath
              fill="black"
              href="#moontexts"
              startOffset={hemisphere === "north" ? "80.3%" : "17.8%"}
            >
              Florishing
            </TextPath>
          </Text>
          <Text fontSize="9" fontFamily="Cocchin">
            <TextPath
              fill="black"
              href="#moontextsLuada"
              startOffset={hemisphere === "north" ? "80.6%" : "18.2%"}
            >
              Moon of
            </TextPath>
          </Text>

          <Text fontSize="9" fontFamily="Cocchin">
            <TextPath
              fill="black"
              href="#moontexts"
              startOffset={hemisphere === "north" ? "72.2%" : "25.9%"}
            >
              Long Days
            </TextPath>
          </Text>
          <Text fontSize="9" fontFamily="Cocchin">
            <TextPath
              fill="black"
              href="#moontextsLuada"
              startOffset={hemisphere === "north" ? "72.5%" : "26.5%"}
            >
              Moon of
            </TextPath>
          </Text>

          <Text fontSize="9" fontFamily="Cocchin">
            <TextPath
              fill="black"
              href="#moontexts"
              startOffset={hemisphere === "north" ? "64.6%" : "34%"}
            >
              Ripening
            </TextPath>
          </Text>
          <Text fontSize="9" fontFamily="Cocchin">
            <TextPath
              fill="black"
              href="#moontextsLuada"
              startOffset={hemisphere === "north" ? "64.7%" : "34.3%"}
            >
              Moon of
            </TextPath>
          </Text>

          <Text fontSize="9" fontFamily="Cocchin">
            <TextPath
              fill="black"
              href="#moontexts"
              startOffset={hemisphere === "north" ? "56.1%" : "41.6%"}
            >
              Abundance
            </TextPath>
          </Text>
          <Text fontSize="9" fontFamily="Cocchin">
            <TextPath
              fill="black"
              href="#moontextsLuada"
              startOffset={hemisphere === "north" ? "56.8%" : "42.3%"}
            >
              Moon of
            </TextPath>
          </Text>

          <Text fontSize="9" fontFamily="Cocchin">
            <TextPath
              fill="black"
              href="#moontexts"
              startOffset={hemisphere === "north" ? "44%" : "49.3%"}
            >
              Falling Leaves
            </TextPath>
          </Text>
          <Text fontSize="9" fontFamily="Cocchin">
            <TextPath
              fill="black"
              href="#moontextsLuada"
              startOffset={hemisphere === "north" ? "45.3%" : "50.5%"}
            >
              Moon of
            </TextPath>
          </Text>

          <Text fontSize="9" fontFamily="Cocchin">
            <TextPath
              fill="black"
              href="#moontexts"
              startOffset={hemisphere === "north" ? "36%" : "57.4%"}
            >
              Decomposition
            </TextPath>
          </Text>
          <Text fontSize="9" fontFamily="Cocchin">
            <TextPath
              fill="black"
              href="#moontextsLuada"
              startOffset={hemisphere === "north" ? "37%" : "58.4%"}
            >
              Moon of
            </TextPath>
          </Text>

          <Text fontSize="9" fontFamily="Cocchin">
            <TextPath
              fill="black"
              href="#moontexts"
              startOffset={hemisphere === "north" ? "27.8%" : "65.8%"}
            >
              Long Nights
            </TextPath>
          </Text>
          <Text fontSize="9" fontFamily="Cocchin">
            <TextPath
              fill="black"
              href="#moontextsLuada"
              startOffset={hemisphere === "north" ? "28.7%" : "66.3%"}
            >
              Moon of
            </TextPath>
          </Text>
        </G>
        <G
          rotation={hemisphere === "north" ? initialAngle : -initialAngle}
          origin="175, 175"
          translateY="20"
          translateX="10"
          scale={mobile ? "0.95" : "1.2"}
          transform={
            hemisphere === "south"
              ? "scale(-1, 1) translate(-350, 0)"
              : undefined
          }
        >
          <Defs>
            <Path
              id="moondates"
              d="M28,175 a147,147 30 0,1 294,0 a147,147 30 0,1 -294,0"
            />
            <Path
              id="moontexts"
              d="M10,175 a165,165 30 0,1 330,0 a165,165 30 0,1 -330,0"
            />
          </Defs>

          {drawMoon(hemisphere === "north" ? moon1 : moon1)}
          {drawMoon(hemisphere === "north" ? moon2 : moon2)}
          {drawMoon(hemisphere === "north" ? moon3 : moon3)}
          {drawMoon(hemisphere === "north" ? moon4 : moon4)}
          {drawMoon(hemisphere === "north" ? moon5 : moon5)}
          {drawMoon(hemisphere === "north" ? moon6 : moon6)}
          {drawMoon(hemisphere === "north" ? moon7 : moon7)}
          {drawMoon(hemisphere === "north" ? moon8 : moon8)}
          {drawMoon(hemisphere === "north" ? moon9 : moon9)}
          {drawMoon(hemisphere === "north" ? moon10 : moon10)}
          {drawMoon(hemisphere === "north" ? moon11 : moon11)}
          {drawMoon(hemisphere === "north" ? moon12 : moon12)}
        </G>
        <G
          rotation={hemisphere === "north" ? initialAngle : -initialAngle}
          origin="175, 175"
          translateY="20"
          translateX="10"
          scale={mobile ? "0.95" : "1.2"}
        >
          <Text fontSize="9.5" fontFamily="CocchinBold">
            <TextPath
              fill="white"
              href="#moondates"
              startOffset={hemisphere === "north" ? "21.4%" : "27.3%"}
            >
              1/1
            </TextPath>
          </Text>

          <Text fontSize="9.5" fontFamily="CocchinBold">
            <TextPath
              fill="white"
              href="#moondates"
              startOffset={hemisphere === "north" ? "13.5%" : "34.8%"}
            >
              29/1
            </TextPath>
          </Text>

          <Text fontSize="9.5" fontFamily="CocchinBold">
            <TextPath
              fill="white"
              href="#moondates"
              startOffset={hemisphere === "north" ? "5.2%" : "42.9%"}
            >
              28/2
            </TextPath>
          </Text>

          <Text fontSize="9.5" fontFamily="CocchinBold">
            <TextPath
              fill="white"
              href="#moondates"
              startOffset={hemisphere === "north" ? "97.3%" : "50.9%"}
            >
              29/3
            </TextPath>
          </Text>

          <Text fontSize="9.5" fontFamily="CocchinBold">
            <TextPath
              fill="white"
              href="#moondates"
              startOffset={hemisphere === "north" ? "89.3%" : "58.8%"}
            >
              27/4
            </TextPath>
          </Text>

          <Text fontSize="9.5" fontFamily="CocchinBold">
            <TextPath
              fill="white"
              href="#moondates"
              startOffset={hemisphere === "north" ? "81.1%" : "67%"}
            >
              27/5
            </TextPath>
          </Text>

          <Text fontSize="9.5" fontFamily="CocchinBold">
            <TextPath
              fill="white"
              href="#moondates"
              startOffset={hemisphere === "north" ? "73.2%" : "74.9%"}
            >
              25/6
            </TextPath>
          </Text>

          <Text fontSize="9.5" fontFamily="CocchinBold">
            <TextPath
              fill="white"
              href="#moondates"
              startOffset={hemisphere === "north" ? "65.3%" : "82.9%"}
            >
              24/7
            </TextPath>
          </Text>

          <Text fontSize="9.5" fontFamily="CocchinBold">
            <TextPath
              fill="white"
              href="#moondates"
              startOffset={hemisphere === "north" ? "57.1%" : "91.1%"}
            >
              23/8
            </TextPath>
          </Text>

          <Text fontSize="9.5" fontFamily="CocchinBold">
            <TextPath
              fill="white"
              href="#moondates"
              startOffset={hemisphere === "north" ? "45.8%" : "2.3%"}
            >
              2/10
            </TextPath>
          </Text>

          <Text fontSize="9.5" fontFamily="CocchinBold">
            <TextPath
              fill="white"
              href="#moondates"
              startOffset={hemisphere === "north" ? "37.6%" : "10.6%"}
            >
              1/11
            </TextPath>
          </Text>

          <Text fontSize="9.5" fontFamily="CocchinBold">
            <TextPath
              fill="white"
              href="#moondates"
              startOffset={hemisphere === "north" ? "29.3%" : "18.8%"}
            >
              1/12
            </TextPath>
          </Text>
        </G>
      </Svg>
    </View>
  );
};

export default TheWheelENG;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1,
    elevation: 1,
  },
  svg: {
    height: 390,
    width: 370,
    bottom: 20,
    overflow: "visible",
  },
  dateSvg: {
    position: "absolute",
    flex: 1,
    justifyContent: "center",
    width: 300,
    height: 35,
    top: "9%",
  },
  bufalo: {
    width: 50,
    height: 50,
    margin: "auto",
    top: 170,
  },
  bufaloWEB: {
    width: 50,
    height: 50,
    margin: "auto",
    top: "47%",
    zIndex: 99,
    position: "absolute",
    left: "50%",
    transform: [{ translateX: -25 }],
  },
  textWheel: {
    fontSize: 15,
    color: "black",
    zIndex: 99,
  },
  rotatingView: {
    width: "100%",
    height: "100%",
  },
});

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

const WheelStructure = () => {
  const pi = Math.PI;

  function getRadians(angle: number) {
    return angle * (pi / 180);
  }

  function drawMoon(
    angle: number,
    bgcolor: string,
    strokecol: string,
    r = 12,
    dist = 150
  ) {
    return (
      <Circle
        cx={175 + dist * Math.cos(angle)}
        cy={175 + dist * Math.sin(angle)}
        r={r}
        fill={bgcolor}
        stroke={strokecol}
        strokeWidth="1.3"
      />
    );
  }

  function drawNumMoon(num: string, angle: number, color: string, size = 13, dist=146) {
    return (
      <Text
        x={175 + dist * Math.cos(angle)}
        y={175 + dist * Math.sin(angle)}
        fill={color}
        fontSize={size}
        fontFamily="CocchinBold"
      >
        {num}
      </Text>
    );
  }

  return (
    <View style={styles.container}>
      <Svg style={styles.svg}>
        <G origin="175, 175" translateY="20" translateX="10">
          <Path
            d="M175,175 v-150 a150,150 30 0,0 -150,150 z"
            fill="rgb(250 250 250)"
            stroke="black"
            strokeWidth="2"
          />
          <Path
            d="M175,175 v150 a150,150  30   0,1   -150,-150 z"
            fill="rgb(250 230 30)"
            stroke="black"
            strokeWidth="2"
          />
          <Path
            d="M175,175 h150 a150,150  30   0,1   -150,150 z"
            fill="red"
            stroke="black"
            strokeWidth="2"
          />
          <Path
            d="M175,175 v-150 a150,150  30   0,1   150,150 z"
            fill="black"
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
          </Defs>
        </G>
        <G origin="175, 175" translateY="20" translateX="10">
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

          <Circle cx="175" cy="175" fill="black" stroke="white" r="25" />
          <Circle cx="175" cy="240" fill="red" stroke="white" r="9" />
          <Circle cx="175" cy="265" fill="red" stroke="white" r="9" />
          <Circle cx="175" cy="290" fill="red" stroke="white" r="9" />
          <Circle cx="175" cy="110" fill="white" stroke="black" r="9" />
          <Circle cx="175" cy="85" fill="white" stroke="black" r="9" />
          <Circle cx="175" cy="60" fill="white" stroke="black" r="9" />
          <Circle cx="240" cy="175" fill="black" stroke="white" r="9" />
          <Circle cx="265" cy="175" fill="black" stroke="white" r="9" />
          <Circle cx="290" cy="175" fill="black" stroke="white" r="9" />
          <Circle
            cx="110"
            cy="175"
            fill="rgb(250 230 30)"
            stroke="black"
            r="9"
          />
          <Circle
            cx="85"
            cy="175"
            fill="rgb(250 230 30)"
            stroke="black"
            r="9"
          />
          <Circle
            cx="60"
            cy="175"
            fill="rgb(250 230 30)"
            stroke="black"
            r="9"
          />

          <Text
            x="168"
            y="184"
            fill="white"
            fontSize="30"
            fontFamily="CocchinBold"
          >
            1
          </Text>
          <Text
            x="169"
            y="244"
            fill="white"
            fontSize="12"
            fontFamily="CocchinBold"
          >
            33
          </Text>
          <Text
            x="169"
            y="269"
            fill="white"
            fontSize="12"
            fontFamily="CocchinBold"
          >
            32
          </Text>
          <Text
            x="169.5"
            y="294"
            fill="white"
            fontSize="12"
            fontFamily="CocchinBold"
          >
            31
          </Text>
          <Text
            x="169"
            y="114"
            fill="black"
            fontSize="12"
            fontFamily="CocchinBold"
          >
            27
          </Text>
          <Text
            x="169"
            y="89"
            fill="black"
            fontSize="12"
            fontFamily="CocchinBold"
          >
            26
          </Text>
          <Text
            x="169"
            y="64"
            fill="black"
            fontSize="12"
            fontFamily="CocchinBold"
          >
            25
          </Text>
          <Text
            x="104"
            y="179"
            fill="black"
            fontSize="12"
            fontFamily="CocchinBold"
          >
            30
          </Text>
          <Text
            x="79"
            y="179"
            fill="black"
            fontSize="12"
            fontFamily="CocchinBold"
          >
            29
          </Text>
          <Text
            x="53.5"
            y="179"
            fill="black"
            fontSize="12"
            fontFamily="CocchinBold"
          >
            28
          </Text>
          <Text
            x="284"
            y="179"
            fill="white"
            fontSize="12"
            fontFamily="CocchinBold"
          >
            34
          </Text>
          <Text
            x="259"
            y="179"
            fill="white"
            fontSize="12"
            fontFamily="CocchinBold"
          >
            35
          </Text>
          <Text
            x="233.5"
            y="179"
            fill="white"
            fontSize="12"
            fontFamily="CocchinBold"
          >
            36
          </Text>

          {drawMoon(getRadians(15), "black", "white", 9, 38)}
          {drawMoon(getRadians(65), "black", "white", 9, 38)}
          {drawMoon(getRadians(115), "black", "white", 9, 38)}
          {drawMoon(getRadians(165), "black", "white", 9, 38)}
          {drawMoon(getRadians(217.5), "black", "white", 9, 38)}
          {drawMoon(getRadians(270), "black", "white", 9, 38)}
          {drawMoon(getRadians(322.5), "black", "white", 9, 38)}

          

          <Text
            x="156"
            y="214"
            fill="white"
            fontSize="12"
            fontFamily="CocchinBold"
          >
            3
          </Text>
          <Text
            x="188"
            y="214"
            fill="white"
            fontSize="12"
            fontFamily="CocchinBold"
          >
            4
          </Text>
          <Text
            x="135.5"
            y="188.5"
            fill="white"
            fontSize="12"
            fontFamily="CocchinBold"
          >
            2
          </Text>
          <Text
            x="209"
            y="188.5"
            fill="white"
            fontSize="12"
            fontFamily="CocchinBold"
          >
            5
          </Text>
          <Text
            x="142"
            y="155.5"
            fill="white"
            fontSize="12"
            fontFamily="CocchinBold"
          >
            8
          </Text>
          <Text
            x="202.5"
            y="155.5"
            fill="white"
            fontSize="12"
            fontFamily="CocchinBold"
          >
            6
          </Text>
          <Text
            x="172.5"
            y="141"
            fill="white"
            fontSize="12"
            fontFamily="CocchinBold"
          >
            7
          </Text>

          {drawMoon(0, "black", "white", 15)}
          {drawMoon(getRadians(22.5), "red", "white")}
          {drawMoon(getRadians(45), "red", "white")}
          {drawMoon(getRadians(67.5), "red", "white")}
          {drawMoon(getRadians(90), "red", "white", 15)}
          {drawMoon(getRadians(112.5), "rgb(250 230 30)", "black")}
          {drawMoon(getRadians(135), "rgb(250 230 30)", "black")}
          {drawMoon(getRadians(157.5), "rgb(250 230 30)", "black")}
          {drawMoon(getRadians(180), "rgb(250 230 30)", "black", 15)}
          {drawMoon(getRadians(202.5), "white", "black")}
          {drawMoon(getRadians(225), "white", "black")}
          {drawMoon(getRadians(247.5), "white", "black")}
          {drawMoon(getRadians(270), "white", "black", 15)}
          {drawMoon(getRadians(292.5), "black", "white")}
          {drawMoon(getRadians(315), "black", "white")}
          {drawMoon(getRadians(337.5), "black", "white")}

          {drawNumMoon('21', getRadians(25), 'white', 13)}
          {drawNumMoon('20', getRadians(47.5), 'white', 13, 148)}
          {drawNumMoon('19', getRadians(70.5), 'white', 13, 151)}
          {drawNumMoon('11', getRadians(92.7), 'white', 16, 155)}
          {drawNumMoon('18', getRadians(114.4), 'black', 13, 156.5)}
          {drawNumMoon('17', getRadians(135.5), 'black', 13, 157.5)}
          {drawNumMoon('16', getRadians(157), 'black', 13, 158)}
          {drawNumMoon('10', getRadians(178.3), 'black', 16, 158.5)}
          {drawNumMoon('15', getRadians(200.2), 'black', 13, 155)}
          {drawNumMoon('14', getRadians(222), 'black', 13, 152.3)}
          {drawNumMoon('13', getRadians(244.5), 'black', 13, 149)}
          {drawNumMoon('9', getRadians(268.7), 'black', 16)}
          {drawNumMoon('24', getRadians(290.6), 'white', 13, 144)}
          {drawNumMoon('23', getRadians(314.5), 'white', 13, 142.5)}
          {drawNumMoon('22', getRadians(338), 'white', 13, 142.5)}
          {drawNumMoon('12', getRadians(362), 'white', 16, 141)}

        </G>
      </Svg>
    </View>
  );
};

export default WheelStructure;

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

import styled, { keyframes, css } from "styled-components";

//TODO fix cloud positioning bug during animation
//TODO find better solution for reoccuring switch/case -> Theming
//TODO add rain animation

const moving = keyframes`
  0% {
    transform: translate(0%, 0%);
  }
  100% {
    transform: translate(115%, 0%);
  }
`;

const Svg = styled.svg`
  ${(props) => {
    switch (props.weatherCondition) {
      case "Thunderstorm":
        return `
          background: linear-gradient(#490a9d, #9186c0);
        `;
      case "Drizzle":
        return `
          background: linear-gradient(#00c4e6, #85cfdd);
        `;
      case "Rain":
        return `
          background: linear-gradient(#00aec1,#9ebec4);
        `;
      case "Snow":
        return `
          background: linear-gradient(#d8bbff, #c0fdff);
        `;
      case "Atmosphere":
        return `
          background: linear-gradient(#ffe566, #c0fdd8);
        `;
      case "Clear":
        return `
          background: linear-gradient(#4ac1ff, #bbdefb);
        `;
      case "Clouds":
        return `
          background: linear-gradient(#83b1df, #a9cae6);
        `;
      default:
        return `background-color: #00b4d8;`;
    }
  }}
`;

const LightningGroup = styled.g`
  ${(props) => {
    switch (props.weatherCondition) {
      case "Thunderstorm":
        return css`
        fill="#d3c0f7";
        stroke="#b3aac2";
        `;
      case "Drizzle":
        return `
          display: none;
        `;
      case "Rain":
        return `
          display: none;
        `;
      case "Snow":
        return `
          display: none;
        `;
      case "Atmosphere":
        return `
          display: none;
        `;
      case "Clear":
        return `
          display: none;
        `;
      case "Clouds":
        return `
        display: none;
        `;
      default:
        return `fill: #00b4d8;`;
    }
  }}
`;

const Lightning = styled.path`
  ${(props) => {
    switch (props.weatherCondition) {
      case "Thunderstorm":
        return css`
        fill="#d3c0f7";
        stroke="#b3aac2";
        `;
      case "Drizzle":
        return `
          display: none;
        `;
      case "Rain":
        return `
          display: none;
        `;
      case "Snow":
        return `
          display: none;
        `;
      case "Atmosphere":
        return `
          display: none;
        `;
      case "Clear":
        return `
          display: none;
        `;
      case "Clouds":
        return `
        display: none;
        `;
      default:
        return `fill: #00b4d8;`;
    }
  }}
`;

const Mountains = styled.path`
  ${(props) => {
    switch (props.weatherCondition) {
      case "Thunderstorm":
        return `
          fill: #524467;
        `;
      case "Drizzle":
        return `
          fill: #98d8e6;
        `;
      case "Rain":
        return `
          fill: #a3d1db;
        `;
      case "Snow":
        return `
          fill: #ffd2f2;
        `;
      case "Atmosphere":
        return `
          fill: #ffe97f;
        `;
      case "Clear":
        return `
          fill: #cae6ff;
        `;
      case "Clouds":
        return `
        fill: #8cabd0;
        `;
      default:
        return `fill: #00b4d8;`;
    }
  }}
`;

const Cloud1 = styled.path`
  ${(props) => {
    switch (props.weatherCondition) {
      case "Thunderstorm":
        return `
          fill: #7f73e0;
        `;
      case "Drizzle":
        return css`
          fill: #83daeb;
          animation: ${moving} 60s linear infinite;
        `;
      case "Rain":
        return css`
          fill: #91d1dd;
          animation: ${moving} 60s linear infinite;
        `;
      case "Snow":
        return `
          fill: #ffe2f7;
        `;
      case "Atmosphere":
        return `
          fill: #fff6cc;
        `;
      case "Clear":
        return css`
          fill: #e3f2fd;
          animation: ${moving} 120s linear infinite;
          opacity: 0.5;
        `;
      case "Clouds":
        return css`
          fill: #d0def6;
          animation: ${moving} 60s linear infinite;
        `;
      default:
        return `fill: #00b4d8;`;
    }
  }}
`;

const Cloud2 = styled.path`
  ${(props) => {
    switch (props.weatherCondition) {
      case "Thunderstorm":
        return `
          fill: #8773e0;
        `;
      case "Drizzle":
        return css`
          fill: #83daeb;
          animation: ${moving} 60s linear infinite;
        `;
      case "Rain":
        return css`
          fill: #91d1dd;
          animation: ${moving} 45s linear infinite;
        `;
      case "Snow":
        return `
        fill: #ffe2f7;
        `;
      case "Atmosphere":
        return `
        fill: #fff6cc;
        `;
      case "Clear":
        return `
        display: none;
        `;
      case "Clouds":
        return css`
          fill: #d0def6;
          animation: ${moving} 60s linear infinite;
        `;
      default:
        return `fill: #00b4d8;`;
    }
  }}
`;

const Cloud3 = styled.path`
  ${(props) => {
    switch (props.weatherCondition) {
      case "Thunderstorm":
        return `
          fill: #9e81d2;
        `;
      case "Drizzle":
        return css`
          fill: #83daeb;
          animation: ${moving} 60s linear infinite;
        `;
      case "Rain":
        return css`
          fill: #98ccd6;
          animation: ${moving} 60s linear infinite;
        `;
      case "Snow":
        return `
        fill: #ffe2f7;
        `;
      case "Atmosphere":
        return `
        fill: #fff6cc;
        `;
      case "Clear":
        return `display: none;`;
      case "Clouds":
        return css`
          fill: #d0def6;
          animation: ${moving} 60s linear infinite;
        `;
      default:
        return `fill: #00b4d8;`;
    }
  }}
`;

const Cloud4 = styled.path`
  ${(props) => {
    switch (props.weatherCondition) {
      case "Thunderstorm":
        return `
          fill: #9371e2;
        `;
      case "Drizzle":
        return css`
          fill: #83daeb;
          animation: ${moving} 60s linear infinite;
        `;
      case "Rain":
        return css`
          fill: #91d1dd;
          animation: ${moving} 30s linear infinite;
        `;
      case "Snow":
        return `
        fill: #ffe2f7;
        `;
      case "Atmosphere":
        return `
        fill: #fff6cc;
        `;
      case "Clear":
        return `
        display: none;
        `;
      case "Clouds":
        return css`
          fill: #d0def6;
          animation: ${moving} 60s linear infinite;
        `;
      default:
        return `fill: #00b4d8;`;
    }
  }}
`;

const Cloud5 = styled.path`
  ${(props) => {
    switch (props.weatherCondition) {
      case "Thunderstorm":
        return `
          fill: #8968c9;
        `;
      case "Drizzle":
        return css`
          fill: #83daeb;
          animation: ${moving} 60s linear infinite;
        `;
      case "Rain":
        return css`
          fill: #91d1dd;
          animation: ${moving} 70s linear infinite;
        `;
      case "Snow":
        return `
        fill: #ffe2f7;
        `;
      case "Atmosphere":
        return `
        fill: #fff6cc;
        `;
      case "Clear":
        return css`
          fill: #e3f2fd;
          animation: ${moving} 80s linear infinite;
          opacity: 0.3;
        `;
      case "Clouds":
        return css`
          fill: #d0def6;
          animation: ${moving} 60s linear infinite;
        `;
      default:
        return `fill: #00b4d8;`;
    }
  }}
`;

const Foreground0 = styled.path`
  ${(props) => {
    switch (props.weatherCondition) {
      case "Thunderstorm":
        return `
          fill: #1f194c;
        `;
      case "Drizzle":
        return `
          fill: #324f7c;
        `;
      case "Rain":
        return `
          fill: #283462;
        `;
      case "Snow":
        return `
          fill: #6247aa;
        `;
      case "Atmosphere":
        return `
          fill: #ff7b00;
        `;
      case "Clear":
        return `
          fill: #0d47a1;
        `;
      case "Clouds":
        return `
        fill: #4c688e;
        `;
      default:
        return `fill: #00b4d8;`;
    }
  }}
`;

const Foreground1 = styled.path`
  ${(props) => {
    switch (props.weatherCondition) {
      case "Thunderstorm":
        return `
          fill: #40386c;
        `;
      case "Drizzle":
        return `
          fill: #3973a5;
        `;
      case "Rain":
        return `
          fill: #2a4d7b;
        `;
      case "Snow":
        return `
          fill: #815ac0;
        `;
      case "Atmosphere":
        return `
          fill: #ff9500;
        `;
      case "Clear":
        return `
          fill: #1976d2;
        `;
      case "Clouds":
        return `
        fill: #94b5d6;
        `;
      default:
        return `fill: #00b4d8;`;
    }
  }}
`;

const Foreground2 = styled.path`
  ${(props) => {
    switch (props.weatherCondition) {
      case "Thunderstorm":
        return `
          fill: #8850a9;
        `;
      case "Drizzle":
        return `
          fill: #4390b8;
        `;
      case "Rain":
        return `
          fill: #467995;
        `;
      case "Snow":
        return `
          fill: #9163cb;
        `;
      case "Atmosphere":
        return `
          fill: #ffb700;
        `;
      case "Clear":
        return `
          fill: #2196f3;
        `;
      case "Clouds":
        return `
          fill: #c5e2ff;
        `;
      default:
        return `fill: #00b4d8;`;
    }
  }}
`;

const Foreground3 = styled.path`
  ${(props) => {
    switch (props.weatherCondition) {
      case "Thunderstorm":
        return `
          fill: #6859af;
        `;
      case "Drizzle":
        return `
          fill: #3da3b9;
        `;
      case "Rain":
        return `
          fill: #368ea2;
        `;
      case "Snow":
        return `
          fill: #b185db;
        `;
      case "Atmosphere":
        return `
          fill: #ffe14c;
        `;
      case "Clear":
        return `
          fill: #64b5f6;
        `;
      case "Clouds":
        return `
          fill: #7ba8d0;
        `;
      default:
        return `fill: #00b4d8;`;
    }
  }}
`;

const Foreground4 = styled.path`
  ${(props) => {
    switch (props.weatherCondition) {
      case "Thunderstorm":
        return `
          fill: #5053ac;
        `;
      case "Drizzle":
        return `
          fill: #73c4d4;
        `;
      case "Rain":
        return `
          fill: #7dbdca;
        `;
      case "Snow":
        return `
          fill: #d2b7e5;
        `;
      case "Atmosphere":
        return `
          fill: #ffd000;
        `;
      case "Clear":
        return `
          fill: #90caf9;
        `;
      case "Clouds":
        return `
          fill: #a5caee;
        `;
      default:
        return `fill: #00b4d8;`;
    }
  }}
`;

const Background = ({ weatherCondition }) => {
  return (
    <Svg
      weatherCondition={weatherCondition}
      xmlns="http://www.w3.org/2000/svg"
      height="100vh"
      width="100vw"
      viewBox="160 0 1600 1080"
      preserveAspectRatio="xMinYMin slice"
    >
      <Mountains
        weatherCondition={weatherCondition}
        className="mountains"
        d="M-63.912247 1125.7273C15.506204 897.0082 94.924656 668.28915 140.0149 563.49824c45.09024-104.78691 55.84572-85.64569 65.35689-38.28645 9.51445 47.35524 17.78789 122.9205 43.84594 139.54661 26.06134 16.62612 69.904-25.69091 91.82861-31.23294 21.92462-5.54204 21.92462 25.6909 34.74845 51.38581 12.82383 25.69491 38.46821 45.84377 60.80321 50.37817 22.33829 4.53439 41.3672-6.54968 66.59791-4.03057 25.23399 2.5191 56.66977 18.6414 81.48681 22.16815 24.82032 3.52275 43.02188-5.54204 68.66954-2.01529 25.64438 3.52676 58.73486 19.64505 98.44737 24.68327 39.70922 5.03821 86.0372-1.00765 123.26439-4.03058 37.23048-3.02293 65.35689-3.02293 94.7276-7.55732 29.36743-4.5344 59.97588-13.59919 87.27818-31.23295 27.2991-17.63376 51.2921-43.82849 69.4904-45.84377 18.2015-2.01529 30.6117 20.15287 49.2269 29.21766 18.6153 9.06879 43.4323 5.03821 64.1126-4.03058 20.6836-9.06879 37.2305-23.1718 53.7741-37.2788l52.1194-30.2293c24.8203 17.12993 49.6406 34.25987 76.9397 15.61847 27.299-18.6414 57.0801-73.04615 86.8645-78.58819 29.7844-5.54204 59.5655 37.78263 85.6236 47.35524 26.0613 9.56862 48.3963-14.61083 72.3893-55.42038 23.9897-40.80556 49.6373-98.23724 95.5516-121.91685 45.9176-23.67563 112.0986-13.59919 146.8437-26.19473 34.7452-12.59555 38.0546-47.85907 47.9827 64.99299 9.9281 112.85206 26.475 373.80771 43.0186 634.77139m-658.9368-821.17741 -8.6871 5.03821z"
        strokeWidth=".960156"
        fill="none"
        stroke="none"
      />

      <Cloud5
        weatherCondition={weatherCondition}
        className="cloud-5"
        d="M911.0827 544.58563c107.709 4.53439 347.9441 6.54968 588.1791 8.56497-67.3514-18.50993-91.94-7.64249-175.5985-44.97019-77.5453-17.17974-25.4294 23.26555-242.4721 22.34702-116.26543-11.00588-106.64807-24.39572-214.55854-4.58321-38.43866 7.05351-63.2557 14.10701 44.45332 18.64141z"
        strokeWidth="1.03262"
        stroke="none"
        fill="none"
      />

      <Cloud4
        weatherCondition={weatherCondition}
        className="cloud-4"
        d="M1230.2304 265.49913c98.0928 6.04587 367.5416 6.21854 581.712 8.23383-23.8193-15.19833-107.1093-32.06779-129.8419-60.26985-14.5704-18.07611-35.8528-23.39735-50.7953-18.55403-14.1371 7.0535-31.6902 19.47367-34.3576 22.9747-31.4613 40.97366-92.429 21.39205-110.9956-.24371-20.5622-24.68326-41.6363 17.41444-68.1966 15.39916-26.5571-2.01929-99.1313-37.0919-144.1034-13.9161-44.9786 23.1758-54.9847 16.1507-89.2538 23.20421-34.2658 7.0535-52.2573 17.12593 45.8322 23.17179z"
        strokeWidth=".974649"
        fill="none"
        stroke="none"
      />

      <Cloud3
        weatherCondition={weatherCondition}
        className="cloud-3"
        d="M346.168 696.61513c107.70901 4.53439 347.94409 6.54968 588.17916 8.56497-41.32124-15.11465-82.63919-30.22931-119.15723-34.7637-36.51476-4.5344-68.22304 1.51146-84.08047 4.53439l-15.85742 3.02293-15.37481-1.51146c-15.37481-1.51147-46.12443-4.5344-73.3644-14.10301-27.23668-9.57261-50.96373-25.69491-80.75467-27.71019-29.78767-2.01529-65.63924 10.07643-109.59025 19.64904-43.95757 9.56862-96.01129 16.62212-134.44995 23.67562-38.43866 7.05351-63.2557 14.10701 44.45332 18.64141z"
        strokeWidth="1.03262"
        stroke="none"
        fill="none"
      />

      <Cloud2
        weatherCondition={weatherCondition}
        className="cloud-2"
        d="M38.553643 383.46995c98.092787 6.04587 312.263237 8.06115 526.433697 10.07644-36.83651-23.1718-73.67301-46.3436-101.94388-51.88964-28.27415-5.54204-47.9761 6.54969-62.10989 13.60319-14.13708 7.0535-22.70271 9.06879-26.98717 10.07643-4.28446 1.00765-4.28446 1.00765-17.99145-.50382-13.7037-1.51146-41.11768-4.53439-61.6798-29.22166-20.56213-24.68326-34.26583-71.03086-60.8262-73.04614-26.55708-2.01929-65.96426 40.29773-110.93631 63.47353-44.978622 23.1758-95.522114 27.20637-129.7912249 34.25988-34.2658281 7.0535-52.2572751 17.12593 45.8322279 23.17179z"
        strokeWidth=".974649"
        fill="none"
        stroke="none"
      />

      <Cloud1
        weatherCondition={weatherCondition}
        className="cloud-1"
        d="M261.0435 68.461442c-9.92813 6.445719 536.08275 7.897205 536.08275 7.897205-10.75218-10.636235-21.50765-21.272471-36.39985-23.695614-14.89219-2.415145-33.91781 3.386802-47.56899 6.769605-13.65117 3.386801-21.92133 4.354458-34.74516 1.795364-12.82383-2.559094-30.19477-8.640942-50.87837-12.027743-20.6836-3.382803-44.67329-4.070559-72.38931-13.175337-27.71274-9.104778-59.15181-26.630575-77.35009-24.939174-18.20157 1.6954-23.16563 22.604-48.81329 29.993385-25.64438 7.393384-71.97236 1.267552-105.06284 4.650354-33.09375 3.386802-52.94672 16.282238-62.87485 22.727957z"
        strokeWidth=".663051"
        fill="none"
        stroke="none"
      />

      <Cloud2
        weatherCondition={weatherCondition}
        className="cloud-2"
        d="M-818.13783 173.90777c98.0928 6.04587 367.5416 6.21854 581.712 8.23383-23.8193-15.19833-107.1093-32.06779-129.8419-60.26985-14.5704-18.07611-35.8528-23.397346-50.7953-18.55403-14.1371 7.0535-31.6902 19.47367-34.3576 22.9747-31.4613 40.97366-92.429 21.39205-110.9956-.24371-20.5622-24.68326-41.6363 17.41444-68.1966 15.39916-26.5571-2.01929-99.1313-37.0919-144.1034-13.9161-44.9786 23.1758-54.9847 16.1507-89.2538 23.20421-34.2658 7.0535-52.2573 17.12593 45.8322 23.17179z"
        fill="#d0def6"
      />
      <Cloud4
        weatherCondition={weatherCondition}
        className="cloud-3"
        d="M-504.20152 574.35888c107.709 4.53439 347.9441 6.54968 588.179105 8.56497-67.3514-18.50993-91.94-7.64249-175.5985-44.97019-77.545305-17.17974-25.429405 23.26555-242.472105 22.34702-116.26543-11.00588-106.64807-24.39572-214.55854-4.58321-38.43866 7.05351-63.2557 14.10701 44.45332 18.64141z"
        fill="#d0def6"
      />
      <Cloud1
        weatherCondition={weatherCondition}
        className="cloud-1"
        d="M-1731.0072 61.648515c-9.9281 6.445719 536.0828 7.897205 536.0828 7.897205-10.7522-10.636235-21.5077-21.272471-36.3999-23.695614-14.8922-2.415145-33.9178 3.386802-47.569 6.769605-13.6512 3.386801-21.9213 4.354458-34.7452 1.795364-12.8238-2.559094-30.1947-8.640942-50.8783-12.027743-20.6836-3.382803-44.6733-4.070559-72.3893-13.175337-27.7128-9.104778-59.1518-26.6305749-77.3501-24.9391739-18.2016 1.6954-23.1657 22.6039999-48.8133 29.9933849-25.6444 7.393384-71.9724 1.267552-105.0629 4.650354-33.0937 3.386802-52.9467 16.282238-62.8748 22.727957z"
        fill="#d0def6"
      />
      <Cloud2
        weatherCondition={weatherCondition}
        className="cloud-2"
        d="M-1288.0036 436.8696c98.0928 6.04587 312.26334 8.06115 526.43378 10.07644-36.83651-23.1718-73.67301-46.3436-101.94388-51.88964-28.27416-5.54204-47.97606 6.54969-62.10986 13.60319-14.1371 7.0535-22.7027 9.06879-26.9872 10.07643-4.2845 1.00765-4.2845 1.00765-17.9915-.50382-13.7037-1.51146-41.11764-4.53439-61.67984-29.22166-20.5621-24.68326-34.2658-71.03086-60.8262-73.04614-26.557-2.01929-65.9642 40.29773-110.9363 63.47353-44.9786 23.1758-95.5221 27.20637-129.7912 34.25988-34.2658 7.0535-52.2573 17.12593 45.8322 23.17179z"
        fill="#d0def6"
      />

      <LightningGroup weatherCondition={weatherCondition}>
        <Lightning
          weatherCondition={weatherCondition}
          d="M1324.2035 265.49913l-63.858 82.75422-40.5375 11.05567 7.3705 36.8522 44.2226 49.75048-31.3243 36.85221 9.213 36.85221-38.6948 46.06526 9.213 25.79654-86.6026 11.05566 9.213 25.79655 7.3705 31.32437-16.5835 31.32438 27.6391-33.16699-16.5835-49.75048 90.2879-12.89827-12.8982-25.79654 35.0096-46.06526-11.0557-42.38004 38.6948-36.85221-47.9079-46.06526-11.0556-31.32437 44.2226-16.58349z"
          fill="#d3c0f7"
          stroke="#b3aac2"
        />
        <Lightning
          weatherCondition={weatherCondition}
          d="M1240.0768 482.76391l-20.5416 20.16409-33.8759-3.90877-6.5146 18.24091-24.7556 23.4526 27.3614-22.14968 6.5146-14.33214h31.2701zM1284.2994 444.06909l2.9878 26.28585 31.2701 11.7263 37.7848-1.30292 20.8467 24.75552-18.2409-28.66429-33.876 2.60584-31.2701-11.7263z"
          fill="#d3c0f7"
          stroke="#b3aac2"
        />
        <Lightning
          weatherCondition={weatherCondition}
          d="M1356.3421 480.77832l-15.6351 20.84675-17.0437 6.55534-7.7118 24.7148 7.7118-24.7148 22.2554-5.25241z"
          fill="#d3c0f7"
          stroke="#b3aac2"
        />
      </LightningGroup>
      <LightningGroup weatherCondition={weatherCondition}>
        <Lightning
          weatherCondition={weatherCondition}
          d="M543.57005 77.389634L681.76583 202.68714l132.66794 44.22265 1.84261 86.60268-31.32437 35.0096 31.32437 16.58349 105.02879 199.00192-66.33397 132.66794-55.27831 60.80614 49.75048-62.64875 66.33397-132.66794-105.02879-191.63148-33.16699-23.95393 31.32438-29.48177-3.68522-84.76007-127.14011-44.22265z"
          fill="#d3c0f7"
          stroke="#b3aac2"
        />
        <Lightning
          weatherCondition={weatherCondition}
          d="M777.58156 366.67946l-84.76007 11.05566-40.53743 62.64875-14.74088-25.79654-38.69482 42.38004-14.74088 84.76007 18.4261-81.07485 36.85221-38.69482 12.89827 23.95393 42.38004-60.80614z"
          fill="#d3c0f7"
          stroke="#b3aac2"
        />
        <Lightning
          weatherCondition={weatherCondition}
          d="M676.238 418.27255l57.12092 53.4357 33.16698 79.23224-5.52783 35.0096 11.05566-38.69482-35.00959-79.23224zM814.43377 246.90979l86.60269 9.21305 62.64875 58.96353 27.63915-11.05566-31.32437 12.89827-60.80614-55.27831zM678.08061 208.21497l-25.79655 68.17658 16.58349 12.89827 31.32438 42.38004-27.63915-44.22265-14.74089-11.05566z"
          fill="#d3c0f7"
          stroke="#b3aac2"
        />
      </LightningGroup>
      <LightningGroup weatherCondition={weatherCondition}>
        <Lightning
          weatherCondition={weatherCondition}
          d="M302.1881 396.16122l-25.79655 66.33398 35.0096 23.95393-20.26872 46.06526 79.23225 42.38004-16.58349 23.95393 7.37044 46.06526-1.84261-42.38004 16.58349-31.32437-75.54702-40.53743 18.4261-47.90787-35.0096-23.95393zM291.13243 532.51439l-23.95393 12.89827-12.89827 20.26872 16.58349 23.95393-16.58349 11.05566 22.11132-11.05566-16.58349-23.95393 9.21305-16.5835z"
          fill="#d3c0f7"
          stroke="#b3aac2"
        />
      </LightningGroup>

      <Foreground4
        weatherCondition={weatherCondition}
        className="foreground_4"
        d="M-63.912247 1125.7273c2.482032-115.871 4.964063-231.74203 89.349862-293.70809C109.82341 770.04914 276.10313 761.99199 411.3673 771.5606c135.26416 9.57261 239.49965 36.77899 373.93647 32.24459 134.43683-4.53439 299.06183-40.80556 421.50543-43.82849 122.4404-3.02293 202.6862 27.20237 329.2632 15.11465 126.5771-12.09572 299.4756-66.50046 384.6887-15.11465 85.2099 51.38981 82.7278 208.56619 80.2458 365.7506"
        strokeWidth=".960156"
        fill="none"
        stroke="none"
      />
      <Foreground3
        weatherCondition={weatherCondition}
        className="foreground_3"
        d="M-63.912247 1125.7273c6.618751-99.7487 13.237503-199.49744 40.950242-253.40636 27.7160214-53.90492 76.52603-61.96607 212.617545-52.39346 136.09151 9.57262 359.45139 36.77499 534.42478 45.84378 174.97996 9.06879 301.55048 0 395.45068-12.09172 93.897-12.09172 155.1139-27.20237 219.2298-30.72913 64.1191-3.52675 131.1274 4.5304 238.2619-3.02293 107.1377-7.55732 254.3885-30.73312 331.7419 17.63376 77.3501 48.36289 84.7995 168.26046 92.2423 288.16606"
        strokeWidth=".960156"
        fill="none"
        stroke="none"
      />
      <Foreground2
        weatherCondition={weatherCondition}
        className="foreground_2"
        d="M-63.912247 1125.7273c330.917877-56.4241 661.829187-112.8481 916.224307-169.27613 254.39844-56.42403 432.25764-112.84806 610.95734-84.63405 178.6998 28.21401 358.2203 141.06208 537.7408 253.91018"
        strokeWidth=".960156"
        fill="none"
        stroke="none"
      />
      <Foreground1
        weatherCondition={weatherCondition}
        className="foreground_1"
        d="M-63.912247 1125.7273c19.856254-59.447 39.709226-118.894 158.429797-168.26449 118.71729-49.37453 336.28904-88.66862 493.88821-77.58454 157.60246 11.08407 255.21919 72.54232 352.84249 88.66462 97.62335 16.12229 195.24005-13.09537 285.82765-17.12594 90.5909-4.03058 174.146 17.12594 263.0789-1.01164 88.9395-18.13758 183.2436-75.56526 262.2549-98.74106 79.0048-23.1718 142.7037-12.09172 181.5889 39.29809 38.8819 51.38582 52.9467 143.07736 67.0083 234.76496"
        strokeWidth=".960156"
        fill="none"
        stroke="none"
      />
      <Foreground0
        weatherCondition={weatherCondition}
        className="foreground_0"
        d="M-63.912247 1125.7273C79.208404 1051.1656 222.32906 976.60403 382.82721 964.51631c160.49816-12.09172 338.35741 38.28649 529.05362 68.51179 190.69297 30.2293 394.19987 40.3057 574.55097 6.0458 180.3544-34.2599 337.5333-112.84804 419.4371-105.79453 81.9038 7.0535 88.5225 99.75273 95.138 192.44793"
        strokeWidth=".960156"
        fill="none"
        stroke="none"
      />
    </Svg>
  );
};

export default Background;

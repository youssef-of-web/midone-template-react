import { Chart } from "@/base-components";
import { colors } from "@/utils";
import PropTypes from "prop-types";
import { useRecoilValue } from "recoil";
import { colorScheme as colorSchemeStore } from "@/stores/color-scheme";
import { darkMode as darkModeStore } from "@/stores/dark-mode";
import { useMemo } from "react";

function Main(props) {
  const darkMode = useRecoilValue(darkModeStore);
  const colorScheme = useRecoilValue(colorSchemeStore);

  const data = useMemo(() => {
    return {
      labels: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
      datasets: [
        {
          label: "# of Votes",
          data: [0, 200, 250, 200, 700, 550, 650, 1050, 950, 1100, 900, 1200],
          borderWidth: 2,
          borderColor: colorScheme ? colors.primary(0.8) : "",
          backgroundColor: "transparent",
          pointBorderColor: "transparent",
          tension: 0.4,
        },
        {
          label: "# of Votes",
          data: [0, 300, 400, 560, 320, 600, 720, 850, 690, 805, 1200, 1010],
          borderWidth: 2,
          borderDash: [2, 2],
          borderColor: darkMode
            ? colors.darkmode["100"]()
            : colors.slate["400"](),
          backgroundColor: "transparent",
          pointBorderColor: "transparent",
          tension: 0.4,
        },
      ],
    };
  });

  const options = useMemo(() => {
    return {
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false,
        },
      },
      scales: {
        x: {
          ticks: {
            display: false,
          },
          grid: {
            display: false,
            drawBorder: false,
          },
        },
        y: {
          ticks: {
            display: false,
          },
          grid: {
            display: false,
            drawBorder: false,
          },
        },
      },
    };
  });

  return (
    <Chart
      type="line"
      width={props.width}
      height={props.height}
      data={data}
      options={options}
      className={props.className}
    />
  );
}

Main.propTypes = {
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  lineColor: PropTypes.string,
  className: PropTypes.string,
};

Main.defaultProps = {
  width: "auto",
  height: "auto",
  lineColor: "",
  className: "",
};

export default Main;

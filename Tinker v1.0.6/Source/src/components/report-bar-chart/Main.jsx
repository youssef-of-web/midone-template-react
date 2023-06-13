import { Chart } from "@/base-components";
import { colors } from "@/utils";
import PropTypes from "prop-types";
import { useRecoilValue } from "recoil";
import { colorScheme as colorSchemeStore } from "@/stores/color-scheme";
import { darkMode as darkModeStore } from "@/stores/dark-mode";
import { createRef, useMemo, useEffect } from "react";

function Main(props) {
  const reportBarChartRef = createRef();
  const darkMode = useRecoilValue(darkModeStore);
  const colorScheme = useRecoilValue(colorSchemeStore);

  // Fake visitor data
  const reportBarChartData = new Array(40).fill(0).map((data, key) => {
    if (key % 3 == 0 || key % 5 == 0) {
      return Math.ceil(Math.random() * (0 - 20) + 20);
    } else {
      return Math.ceil(Math.random() * (0 - 7) + 7);
    }
  });

  // Fake visitor bar color
  const reportBarChartColor = useMemo(() => {
    return reportBarChartData.map((data) => {
      if (data >= 8 && data <= 14) {
        return colorScheme ? colors.primary(0.65) : "";
      } else if (data >= 15) {
        return colorScheme ? colors.primary() : "";
      }

      return colorScheme ? colors.primary(0.35) : "";
    });
  });

  const data = useMemo(() => {
    return {
      labels: reportBarChartData,
      datasets: [
        {
          label: "Html Template",
          barPercentage: 0.5,
          barThickness: 6,
          maxBarThickness: 8,
          minBarLength: 2,
          data: reportBarChartData,
          backgroundColor: reportBarChartColor,
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

  useEffect(() => {
    setInterval(() => {
      const chartInstance = reportBarChartRef.current.instance;
      const chartConfig = chartInstance.config;

      // Swap visitor data
      const newData = chartConfig.data.datasets[0].data[0];
      chartConfig.data.datasets[0].data.shift();
      chartConfig.data.datasets[0].data.push(newData);
      chartInstance.update();

      // Swap visitor bar color
      const newColor = chartConfig.data.datasets[0].backgroundColor[0];
      chartConfig.data.datasets[0].backgroundColor.shift();
      chartConfig.data.datasets[0].backgroundColor.push(newColor);
      chartInstance.update();
    }, 1000);
  }, [reportBarChartRef.current]);

  return (
    <Chart
      type="bar"
      width={props.width}
      height={props.height}
      data={data}
      options={options}
      className={props.className}
      getRef={(el) => {
        reportBarChartRef.current = el;
      }}
    />
  );
}

Main.propTypes = {
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  className: PropTypes.string,
};

Main.defaultProps = {
  width: "auto",
  height: "auto",
  className: "",
};

export default Main;

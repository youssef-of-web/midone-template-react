import { Chart } from "@/base-components";
import { colors } from "@/utils";
import PropTypes from "prop-types";
import { useRecoilValue } from "recoil";
import { useMemo } from "react";
import { helper as $h } from "@/utils/helper";
import { colorScheme as colorSchemeStore } from "@/stores/color-scheme";
import { darkMode as darkModeStore } from "@/stores/dark-mode";

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
          label: "Html Template",
          barPercentage: 0.5,
          barThickness: 6,
          maxBarThickness: 8,
          minBarLength: 2,
          backgroundColor: colorScheme ? colors.primary() : "",
          data: $h.randomNumbers(-100, 100, 12),
        },
        {
          label: "VueJs Template",
          barPercentage: 0.5,
          barThickness: 6,
          maxBarThickness: 8,
          minBarLength: 2,
          backgroundColor: darkMode
            ? colors.darkmode["200"]()
            : colors.slate["300"](),
          data: $h.randomNumbers(-100, 100, 12),
        },
      ],
    };
  });

  const options = useMemo(() => {
    return {
      maintainAspectRatio: false,
      plugins: {
        legend: {
          labels: {
            color: colors.slate["500"](0.8),
          },
        },
      },
      scales: {
        x: {
          stacked: true,
          ticks: {
            font: {
              size: 12,
            },
            color: colors.slate["500"](0.8),
          },
          grid: {
            display: false,
            drawBorder: false,
          },
        },
        y: {
          stacked: true,
          ticks: {
            font: {
              size: 12,
            },
            color: colors.slate["500"](0.8),
            callback: function (value) {
              return "$" + value;
            },
          },
          grid: {
            color: darkMode ? colors.slate["500"](0.3) : colors.slate["300"](),
            borderDash: [2, 2],
            drawBorder: false,
          },
        },
      },
    };
  });

  return (
    <Chart
      type="bar"
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
  className: PropTypes.string,
};

Main.defaultProps = {
  width: "auto",
  height: "auto",
  className: "",
};

export default Main;

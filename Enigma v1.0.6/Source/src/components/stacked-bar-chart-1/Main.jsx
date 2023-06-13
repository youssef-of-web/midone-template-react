import { Chart } from "@/base-components";
import PropTypes from "prop-types";
import { useMemo } from "react";
import { helper as $h } from "@/utils/helper";

function Main(props) {
  const data = useMemo(() => {
    return {
      labels: [...Array(16).keys()],
      datasets: [
        {
          label: "Html Template",
          barPercentage: 0.5,
          barThickness: 6,
          maxBarThickness: 8,
          minBarLength: 2,
          backgroundColor: "#3160D8",
          data: $h.randomNumbers(-100, 100, 16),
        },
        {
          label: "VueJs Template",
          barPercentage: 0.5,
          barThickness: 6,
          maxBarThickness: 8,
          minBarLength: 2,
          backgroundColor: "#cbd5e0",
          data: $h.randomNumbers(-100, 100, 16),
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
          stacked: true,
          ticks: {
            font: {
              size: 12,
            },
            color: "#777777",
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
            color: "#777777",
            callback: function (value) {
              return "$" + value;
            },
          },
          grid: {
            color: "#D8D8D8",
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

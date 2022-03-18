import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function DonutChart() {
    const data = {
        labels: [
            "Institute 2012-13 : 10,258",
            "Institute 2013-14 : 10,300",
            "Institute 2014-15 : 10,332",
            "Institute 2015-16 : 10,325",
            "Institute 2016-17 : 10,367",
            "Institute 2017-18 : 10,398",
            "Institute 2018-19 : 10,423",
            "Institute 2019-20 : 10,990",
            "Institute 2020-21 : 9,650",
            "Institute 2021-22 : 8,997",
        ],
        datasets: [
            {
                label: "# of Votes",
                data: [10, 10, 10, 10, 10, 10, 10, 10, 10, 10],
                backgroundColor: [
                    "rgb(176, 204, 225)",
                    "rgb(149, 187, 215)",
                    "rgb(103, 157, 198)",
                    "rgb(57, 128, 181)",
                    "rgba(11, 98, 164, 1)",

                    "rgb(9, 87, 145)",
                    "rgb(9, 80, 133)",
                    "rgb(8, 62, 103)",
                    "rgb(5, 44, 72)",
                    "rgb(4, 33, 53)",
                ],
                borderColor: [
                    "rgba(255, 255, 255, 1)",
                    "rgba(255, 255, 255, 1)",
                    "rgba(255, 255, 255, 1)",
                    "rgba(255, 255, 255, 1)",
                    "rgba(255, 255, 255, 1)",
                    "rgba(255, 255, 255, 1)",
                    "rgba(255, 255, 255, 1)",
                    "rgba(255, 255, 255, 1)",
                    "rgba(255, 255, 255, 1)",
                    "rgba(255, 255, 255, 1)",
                ],
                borderWidth: 3,
            },
        ],
    };

    return (
        <div className='w-1/3 relative mx-auto'>
            <Doughnut
                data={data}
                options={{
                    plugins: {
                        legend: {
                            display: false,
                        },
                    },
                }}
            />
            <p className='font-semibold text-3xl text-[#0C5C8C] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                Institute
            </p>
        </div>
    );
}

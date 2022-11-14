<template>
  <div>
    <div class="AdminPageChartItemsBox">
      <div class="AdminPageChartBoxs">

        <div class="AdminPageChartBox" v-for="chartInfo in TopChartInfo" :key="chartInfo.Title">
          <div class="TitleBox">
            <div class="IconBox" :style="'background-color: ' + chartInfo.color + '1f;'">
              <svg width="22" height="24" viewBox="0 0 22 24" :fill="chartInfo.color"
                xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M12.3 0.600003L20.3 4.6C21.4 5.1 22 6.1 22 7.2V16.7C22 17.9 21.3 18.9 20.3 19.4L12.3 23.4C11.9 23.6 11.5 23.7 11 23.7C10.6 23.7 10.1 23.6 9.7 23.4L1.7 19.4C0.6 18.9 0 17.8 0 16.7V7.2C0 6.1 0.6 5.1 1.6 4.6L9.6 0.600003C10.5 0.200003 11.5 0.200003 12.3 0.600003ZM11 2.2C10.9 2.2 10.7 2.2 10.6 2.3L3.2 6L11 9.9L18.8 6L11.4 2.3C11.3 2.2 11.2 2.2 11 2.2ZM2.5 17.7C2.2 17.5 2 17.1 2 16.8V7.6L10 11.6V21.4L2.5 17.7ZM12 21.4L19.4 17.7C19.8 17.5 20 17.2 20 16.8V7.6L12 11.6V21.4Z"
                  :fill="chartInfo.color" />
              </svg>
            </div>
            <div class="TitleTextBox">{{ chartInfo.Title }}</div>
            <div class="DescriptionTextBox">{{ chartInfo.Description }}</div>
          </div>
          <div class="ChartBox">
            <div class="InsertChartInAdminPage" :color="chartInfo.color" :dataChart="chartInfo.data"></div>
            <apexchart :options="ChartOption"></apexchart>
          </div>
        </div>


      </div>
    </div>
  </div>
</template>
<script>
export default {
  layout: 'admin',
  data() {
    return {
      TopChartInfo: [
        { IconURL: '1', Title: '245 هزار', Description: 'آگهی منتشر شده . . .', color: '#FF9920', data: [0, 50, 100, 30, 80, 20, 50, 25] },
        { IconURL: '1', Title: '300 هزار', Description: 'آگهی رزرو شده . . .', color: '#FD444E', data: [0, 50, 100, 30] },
        { IconURL: '1', Title: '675 هزار', Description: 'به انتخاب خودتون هرچی خواستین', color: '#00CB65', data: [0, 50, 100, 50, 25] },
        { IconURL: '1', Title: '500 هزار', Description: 'اکانت های فعال . . .', color: '#7466F0', data: [0, 100, 50, 25] },
        { IconURL: '1', Title: '245 هزار', Description: 'آگهی منتشر شده . . .', color: '#FF9920', data: [0, 50, 100, 30, 25] },
        { IconURL: '1', Title: '675 هزار', Description: 'به انتخاب خودتون هرچی خواستین', color: '#00CB65', data: [0, 50, 100, 25, 100] },
      ],
      ChartOption: {
        chart: {
          height: 80,
          type: "area",
          toolbar: false,
          sparkline: { enabled: true },
          grid: { show: false, padding: { left: 0, right: 0 } },
        },
        fill: {
          type: "gradient",
          gradient: {
            shadeIntensity: 0.9,
            opacityFrom: 0.7,
            opacityTo: 0.5,
            stops: [0, 80, 100],
          },
        },
        series: [{ data: [0, 50, 100, 30, 80, 20, 50, 25] }],
        colors: ["#FF9920"],
        dataLabels: { enabled: false },
        stroke: { curve: "smooth", width: 2.5 },
        xaxis: { labels: { show: false }, axisBorder: { show: false } },
        yaxis: { y: 0, offsetX: 0, offsetY: 0, padding: { left: 0, right: 0 } },
        tooltip: { enabled: false },
      }
    }
  },
  mounted() {
    // for (let i = 0; i < this.TopChartInfo.length; i++) {
    //   var chart = new ApexCharts(document.getElementsByClassName("InsertChartInAdminPage")[i], {
    //     chart: {
    //       height: 80,
    //       type: "area",
    //       toolbar: false,
    //       sparkline: { enabled: true },
    //       grid: { show: false, padding: { left: 0, right: 0 } },
    //     },
    //     fill: {
    //       type: "gradient",
    //       gradient: {
    //         shadeIntensity: 0.9,
    //         opacityFrom: 0.7,
    //         opacityTo: 0.5,
    //         stops: [0, 80, 100],
    //       },
    //     },
    //     series: [{ data: [0, 50, 100, 30, 80, 20, 50, 25] }],
    //     colors: ["#FF9920"],
    //     dataLabels: { enabled: false },
    //     stroke: { curve: "smooth", width: 2.5 },
    //     xaxis: { labels: { show: false }, axisBorder: { show: false } },
    //     yaxis: { y: 0, offsetX: 0, offsetY: 0, padding: { left: 0, right: 0 } },
    //     tooltip: { enabled: false },
    //   });
    // chart.render();
    // }
  },
}
</script>

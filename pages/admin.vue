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
            <!-- <apexchart :options="ChartOption"></apexchart> -->
          </div>
        </div>


      </div>
    </div>




    <div class="AdminPageContentInfoBox">
        <div class="AdminPageBigChartBox">
          <div class="AdminPageBigChartIconSettingBox">
            <lord-icon src="https://cdn.lordicon.com/dycatgju.json" trigger="hover" id="SettingIcon" class="SettingIcon" colors="primary:#BABFC7" style="width: 24px; height: 24px"> </lord-icon>
          </div>
          <div class="AdminPageBigChartTitleBox">
            <span>نمودار تست</span>
            <div class="AdminPageBigChartSubTitleBox FirstElementInBigChart">
              <span>ماه اول</span>
              <span>1.750 تومان</span>
            </div>
            <div class="AdminPageBigChartSubTitleBox">
              <span>ماه آخر</span>
              <span>8.960 تومان</span>
            </div>
          </div>
          <div class="AdminPageBigChartSeriesBox" id="AdminPageBigChartSeriesBox"></div>
        </div>

        <div class="AdminPageUserInfoTableBox">
          <table>
            <thead>
              <th>#</th>
              <th>اکانت</th>
              <th>مقدار خرید</th>
              <th>وضعیت</th>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td class="UserInformationBoxTableAdminPage">
                  <div>
                    <div class="AvatarInUserTableAdminPage"><img src="@/static/img/avatar2.png" alt="" /></div>
                    <div class="ClientInfoInAdminPage">
                      <div class="ClientUsernameBoxInAdminPage">سارا شریفی</div>
                      <div class="ClientContactInfoInAdminBox">SaraSharifi@gmail.com</div>
                    </div>
                  </div>
                </td>
                <td class="UserBuyInformationBoxTableAdminPage">10,000 تومان</td>
                <td><span class="OfflineClientShowInAdminPage">آفلاین</span></td>
              </tr>

              <tr>
                <td>2</td>
                <td class="UserInformationBoxTableAdminPage">
                  <div>
                    <div class="AvatarInUserTableAdminPage"><img src="@/static/img/avatar2.png" alt="" /></div>
                    <div class="ClientInfoInAdminPage">
                      <div class="ClientUsernameBoxInAdminPage">سارا شریفی</div>
                      <div class="ClientContactInfoInAdminBox">SaraSharifi@gmail.com</div>
                    </div>
                  </div>
                </td>
                <td class="UserBuyInformationBoxTableAdminPage">10,000 تومان</td>
                <td><span class="OfflineClientShowInAdminPage">آفلاین</span></td>
              </tr>
              <tr>
                <td>3</td>
                <td class="UserInformationBoxTableAdminPage">
                  <div>
                    <div class="AvatarInUserTableAdminPage"><img src="@/static/img/avatar3.png" alt="" /></div>
                    <div class="ClientInfoInAdminPage">
                      <div class="ClientUsernameBoxInAdminPage">سارا شریفی</div>
                      <div class="ClientContactInfoInAdminBox">SaraSharifi@gmail.com</div>
                    </div>
                  </div>
                </td>
                <td class="UserBuyInformationBoxTableAdminPage">10,000 تومان</td>
                <td><span class="OfflineClientShowInAdminPage">آفلاین</span></td>
              </tr>
              <tr>
                <td>4</td>
                <td class="UserInformationBoxTableAdminPage">
                  <div>
                    <div class="AvatarInUserTableAdminPage"><img src="@/static/img/avatar.png" alt="" /></div>
                    <div class="ClientInfoInAdminPage">
                      <div class="ClientUsernameBoxInAdminPage">سارا شریفی</div>
                      <div class="ClientContactInfoInAdminBox">SaraSharifi@gmail.com</div>
                    </div>
                  </div>
                </td>
                <td class="UserBuyInformationBoxTableAdminPage">10,000 تومان</td>
                <td><span class="OfflineClientShowInAdminPage">آفلاین</span></td>
              </tr>
              <tr>
                <td>5</td>
                <td class="UserInformationBoxTableAdminPage">
                  <div>
                    <div class="AvatarInUserTableAdminPage"><img src="@/static/img/avatar3.png" alt="" /></div>
                    <div class="ClientInfoInAdminPage">
                      <div class="ClientUsernameBoxInAdminPage">سارا شریفی</div>
                      <div class="ClientContactInfoInAdminBox">SaraSharifi@gmail.com</div>
                    </div>
                  </div>
                </td>
                <td class="UserBuyInformationBoxTableAdminPage">10,000 تومان</td>
                <td><span class="OnlineClientShowInAdminPage">آنلاین</span></td>
              </tr>
              <tr>
                <td>6</td>
                <td class="UserInformationBoxTableAdminPage">
                  <div>
                    <div class="AvatarInUserTableAdminPage"><img src="@/static/img/avatar.png" alt="" /></div>
                    <div class="ClientInfoInAdminPage">
                      <div class="ClientUsernameBoxInAdminPage">سارا شریفی</div>
                      <div class="ClientContactInfoInAdminBox">SaraSharifi@gmail.com</div>
                    </div>
                  </div>
                </td>
                <td class="UserBuyInformationBoxTableAdminPage">10,000 تومان</td>
                <td><span class="OfflineClientShowInAdminPage">آفلاین</span></td>
              </tr>
              <tr>
                <td>7</td>
                <td class="UserInformationBoxTableAdminPage">
                  <div>
                    <div class="AvatarInUserTableAdminPage"><img src="@/static/img/avatar2.png" alt="" /></div>
                    <div class="ClientInfoInAdminPage">
                      <div class="ClientUsernameBoxInAdminPage">سارا شریفی</div>
                      <div class="ClientContactInfoInAdminBox">SaraSharifi@gmail.com</div>
                    </div>
                  </div>
                </td>
                <td class="UserBuyInformationBoxTableAdminPage">10,000 تومان</td>
                <td><span class="OnlineClientShowInAdminPage">آنلاین</span></td>
              </tr>
            </tbody>
            <tfoot>
              <td>
                <label for="UserTableAdminPageSearchInput">
                  <div class="UserTableAdminPageSearchBox">
                    <lord-icon src="https://cdn.lordicon.com/rlizirgt.json" trigger="hover" colors="primary:#707070" style="width: 18px; height: 18px"> </lord-icon>
                    <input type="text" id="UserTableAdminPageSearchInput" placeholder="جستجو" />
                  </div>
                </label>
              </td>
              <td>
                <div class="SlideButtonAdminPage">
                  <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.46667 5.46665L1.46667 9.46665C1.33333 9.59998 1.2 9.66665 0.999999 9.66665C0.799999 9.66665 0.666665 9.59998 0.533332 9.46665C0.266665 9.19998 0.266665 8.79998 0.533332 8.53331L4.06667 4.99998L0.533332 1.46665C0.266665 1.19998 0.266665 0.79998 0.533332 0.533313C0.799999 0.266646 1.2 0.266646 1.46667 0.533313L5.46667 4.53331C5.73333 4.79998 5.73333 5.19998 5.46667 5.46665Z" fill="black" />
                  </svg>
                </div>
                <div class="SlideIDBoxAdminPage">
                  <span>1</span>
                  <span>2</span>
                  <span>3</span>
                  <span class="SlideIDBoxSeleced">4</span>
                  <span>5</span>
                  <span>6</span>
                  <span>7</span>
                </div>
                <div class="SlideButtonAdminPage">
                  <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.46668 8.53331C5.73334 8.79998 5.73334 9.19998 5.46668 9.46665C5.33334 9.59998 5.20001 9.66665 5.00001 9.66665C4.80001 9.66665 4.66668 9.59998 4.53334 9.46665L0.533344 5.46665C0.266677 5.19998 0.266677 4.79998 0.533344 4.53331L4.53334 0.533313C4.80001 0.266646 5.20001 0.266646 5.46668 0.533313C5.73334 0.79998 5.73334 1.19998 5.46668 1.46665L1.93334 4.99998L5.46668 8.53331Z" fill="black" />
                  </svg>
                </div>
              </td>
            </tfoot>
          </table>
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




    // var chart = new ApexCharts(document.getElementById("AdminPageBigChartSeriesBox"), {
    //         series: [{ data: [0, 20, 30, 55, 43, 77, 88, 110] }, { data: [0, 50, 100, 30, 80, 20, 50, 25] }],
    //         chart: { height: 350, toolbar: false, zoom: { enabled: false }, type: "line" },
    //         tooltip: { enabled: false },
    //         legend: { show: false },
    //         stroke: {
    //           show: true,
    //           curve: "smooth",
    //           width: [4],
    //           dashArray: [0, 5],
    //         },
    //         colors: ["#a62626", "#707070"],
    //         xaxis: {
    //           show: true,
    //           labels: {
    //             show: true,
    //             style: {
    //               cssClass: "AdminPageApexChartsLabels",
    //             },
    //           },
    //         },
    //         yaxis: {
    //           show: true,
    //           labels: {
    //             show: true,
    //             style: {
    //               cssClass: "AdminPageApexChartsLabels",
    //             },
    //           },
    //         },
    //         grid: {
    //           show: true,
    //           padding: {
    //             top: 0,
    //             right: 30,
    //             bottom: 0,
    //             left: 30,
    //           },
    //         },
    //       });

    //       chart.render();
  },
}
</script>

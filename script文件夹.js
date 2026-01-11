const init = () => {
  const donut = document.getElementById('donut');
  if (donut) {
    donut.animate([{ transform: 'scale(0.96)' }, { transform: 'scale(1)' }], { duration: 500, easing: 'ease-out' });
  }
  const cards = document.querySelectorAll('.stat-card');
  cards.forEach(c => {
    c.addEventListener('mouseenter', () => {
      c.style.boxShadow = '0 12px 30px rgba(0,0,0,0.16)';
    });
    c.addEventListener('mouseleave', () => {
      c.style.boxShadow = '';
    });
    c.addEventListener('mousedown', () => {
      c.style.transform = 'translateY(1px) scale(0.99)';
    });
    c.addEventListener('mouseup', () => {
      c.style.transform = '';
    });
  });
};
document.addEventListener('DOMContentLoaded', init);
// 等待 DOM 加载完成
// 等待 DOM 加载完成
document.addEventListener('DOMContentLoaded', function () {
  // 获取图表容器
  const chartDom = document.getElementById('chart-container');
  const myChart = echarts.init(chartDom);

  // 定义选项
  const option = {
    color: ['#9370DB', '#32CD32', '#000000'], // 紫色、绿色、黑色
    tooltip: {
      trigger: 'item'
    },
    legend: {
      top: '5%',
      left: 'center'
    },
    series: [
      {
        name: 'Access From',
        type: 'pie',
        radius: ['40%', '70%'],
        avoidLabelOverlap: false,
        itemStyle: {
          borderRadius: 10,
          borderColor: '#fff',
          borderWidth: 2
        },
        label: {
          show: false,
          position: 'center'
        },
        emphasis: {
          label: {
            show: false,
            fontSize: 40,
            fontWeight: 'bold'
          }
        },
        labelLine: {
          show: false
        },
        data: [
          { value: 1048, name: 'open source' },
          { value: 735, name: 'figure' },
          { value: 580, name: 'plant' },
          { value: 484, name: 'anlmal' },
          { value: 300, name: 'festival' }
        ]
      }
    ]
  };

  // 使用配置项渲染图表
  myChart.setOption(option);
});
const dataMap = {
  'open source': [
    { name: '教程名', author: 'a1.svg', time: '2h 21min', status: 'Complete' }
  ],
  'plant': [
    { name: '教程名', author: 'a3.svg', time: '58min', status: 'Approved' }
  ],
  'figure': [
    { name: '教程名', author: 'a2.svg', time: '20min', status: 'In Progress' }
  ],
  'Union Ads': [
    { name: '教程名', author: 'a4.svg', time: '5min', status: 'Pending' }
  ],
  'Video Ads': [
    { name: '教程名', author: 'a5.svg', time: '22min', status: 'Rejected' }
  ]
};


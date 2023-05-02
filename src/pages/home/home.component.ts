import { Component } from '@angular/core';
import { ChartConfiguration } from 'chart.js';

import { Tab } from 'src/components/tabs/tabs.types';
import { ViewChild } from '@angular/core';

import Highcharts from "highcharts";
import { Options } from "highcharts";

// Estilos Banmedica
// @Component({
//   selector: 'app-home',
//   templateUrl: './home.component.html',
//   styleUrls: ['./home.component.scss', './sitebanmedica.scss']
// })

// Estilos Vidatres
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss', './sitevidatres.scss']
})

export class HomeComponent {
  public barChartLegend = false;
  public barChartPlugins = [];
  public activedTab = 0;
  public isDocuemntsVisible = false;
  public barColor0 = '#FFFFFF';
  public barColor0B = '#9BA5B7';

  // Colores Banmedica
  // public barColor1 = '#357B99';
  // public barColor2 = '#4C97B7';
  // public barColor3 = '#83C0DA';
  // public barColor4 = '#B8EAFF';

  // Colores Vidatres
  public barColor1 = '#2d816b';
  public barColor2 = '#46a088';
  public barColor3 = '#82c6b2';
  public barColor4 = '#BAEDDD';

  Highcharts: typeof Highcharts = Highcharts;

  chartOptions: Options = {
    chart: {
      type: 'column',
      height: 300
    },
    title:{
      text:''
    },
    legend: {
      enabled: false
    },
    xAxis: [{
      labels: {
              enabled: false
          },
    }],
    yAxis: [{
      title: {
        text: ''
      }
    }],
    tooltip: {
      useHTML: true,
      headerFormat: '<span style="font-size: 33px; color: #173181; font-weight: 800;">{point.y}%</span>',
      pointFormat: ''
    },
    plotOptions: {
      series: {
        pointPadding: 0,
        groupPadding: 0,
        borderWidth: 0,
        shadow: false
      }
    },
    series: [{
      data: [[0,100]],
      color: this.barColor1,
    }, {
      data: [[0,80]],
      color: this.barColor2,
    }, {
      data: [[0,70]],
      color: this.barColor3,
    }, {
      data: [[0,50]],
      color: this.barColor4,
    }]
  };

  chartOptions0: Options = {
    chart: {
      type: 'column',
      height: 300
    },
    title:{
      text:''
    },
    legend: {
      enabled: false
    },
    yAxis: [{
      title: {
        text: ''
      }
    }],
    tooltip: {
      useHTML: true,
      headerFormat: '<span style="font-size: 33px; color: #173181; font-weight: 800;">{point.y}%</span>',
      pointFormat: ''
    },
    plotOptions: {
      series: {
        pointPadding: 0,
        groupPadding: 0,
        borderWidth: 0,
        shadow: false
      }
    },
    series: [{
      data: [[0,100]],
      color: this.barColor1,
    }]
  };

  public tabs = [
    {
      ico: '../assets/svg/hospital_coverage.svg',
      title: 'Cobertura Hospitalaria',
      subtitle: 'Por más de 4 horas en prestador',
    },
    {
      ico: '../assets/svg/ambulatory_coverage.svg',
      title: 'Cobertura Ambulatoria',
      subtitle: 'Por menos de 4 horas en prestador',
    },
    {
      ico: '../assets/svg/emergency_coverage.svg',
      title: 'Cobertura Urgencia',
      subtitle: 'Urgencia médica',
    },
    {
      ico: '../assets/svg/restricted_benefits.svg',
      title: 'Prestaciones Restringidas',
      subtitle: 'Cobertura más baja',
    },
  ];

  public barChartData: ChartConfiguration<'bar'>['data'] = {
    labels: [''],
    datasets: [
      { 
        data: [90], 
        barPercentage: 1.0,
        categoryPercentage: 1.0,
        label: '', 
        backgroundColor: '#9BA5B7' }
    ],
  };

  // Tab0
  public barChartData0: ChartConfiguration<'bar'>['data'] = {
    labels: ['', '', '', ''],
    datasets: [
      {
        data: [100, 80, 70, 50],
        label: '',
        backgroundColor: [this.barColor1, this.barColor2, this.barColor3, this.barColor4],
        barPercentage: 1.0,
        categoryPercentage: 1.0,
      },
    ],
  };

  // Tab1
  public barChartData1: ChartConfiguration<'bar'>['data'] = {
    labels: ['', '', ''],
    datasets: [
      {
        data: [100, 80, 70],
        label: '',
        backgroundColor: [this.barColor1, this.barColor2, this.barColor3],
        barPercentage: 1.0,
        categoryPercentage: 1.0,
      },
    ],
  };

  // Tab2
  public barChartData2: ChartConfiguration<'bar'>['data'] = {
    labels: ['', ''],
    datasets: [
      {
        data: [100, 80],
        label: '',
        backgroundColor: [this.barColor1, this.barColor2],
        barPercentage: 1.0,
        categoryPercentage: 1.0,
      },
    ],
  };

  // Tab3
  public barChartData3: ChartConfiguration<'bar'>['data'] = {
    labels: [''],
    datasets: [
      {
        data: [100],
        label: '',
        backgroundColor: [this.barColor1],
        barPercentage: 1.0,
        categoryPercentage: 1.0,
      },
    ],
  };

  public barChartData3B: ChartConfiguration<'bar'>['data'] = {
    labels: [''],
    datasets: [
      {
        data: [100],
        label: '',
        backgroundColor: [this.barColor0],
        borderColor: [this.barColor0B],
        borderWidth: 1,
        barPercentage: 1.0,
        categoryPercentage: 1.0,
      },
    ],
  };

  public barChartOptions: ChartConfiguration<'bar'>['options'] = {
    responsive: true,
    maintainAspectRatio: false,
    events: [],
    scales: {
      y: {
        beginAtZero: true,
        max: 100,
      },
    },
  };


  public toolOptions = {
      'placement': 'top',
      'trigger' : 'click',
      'maxWidth' : '500px',
      'tooltipClass' : 'dashtooltip',
      'showDelay': 300
  }

  public toolOptions2 = {
      'placement': 'top',
      'maxWidth' : '600px',
      'tooltipClass' : 'dashtooltip',
      'showDelay': 300
  }

  public ngOnInit() {
    if (window.innerWidth >= 992) {
      this.isDocuemntsVisible = true;
    }
  }

  public selectTab(tab: Tab) {
    this.activedTab = tab.id as number;
  }

  public toggleDocuments() {
    let para = document.getElementById("mainbox");
    if(para){
      para.classList.toggle("active");
    }
    this.isDocuemntsVisible = !this.isDocuemntsVisible;
  }
}

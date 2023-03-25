import { Component } from '@angular/core';
import { ChartConfiguration } from 'chart.js';

import { Tab } from 'src/components/tabs/tabs.types';
import { ViewChild } from '@angular/core';

// Estilos Banmedica
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss', './sitebanmedica.scss']
})

// Estilos Vidatres
// @Component({
//   selector: 'app-home',
//   templateUrl: './home.component.html',
//   styleUrls: ['./home.component.scss', './sitevidatres.scss']
// })

export class HomeComponent {
  public barChartLegend = false;
  public barChartPlugins = [];
  public activedTab = 0;
  public isDocuemntsVisible = false;
  public barColor0 = '#FFFFFF';

  // Colores Banmedica
  public barColor1 = '#357B99';
  public barColor2 = '#4C97B7';
  public barColor3 = '#83C0DA';
  public barColor4 = '#B8EAFF';

  // Colores Vidatres
  // public barColor1 = '#2d816b';
  // public barColor2 = '#46a088';
  // public barColor3 = '#82c6b2';
  // public barColor4 = '#BAEDDD';

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

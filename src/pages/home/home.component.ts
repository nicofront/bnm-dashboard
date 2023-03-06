import { Component } from '@angular/core';
import { ChartConfiguration } from 'chart.js';

import { Tab } from 'src/components/tabs/tabs.types';
import { ViewChild } from '@angular/core';

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
    labels: ['', '', '', ''],
    datasets: [
      {
        data: [100, 80, 70, 50],
        label: '',
        backgroundColor: ['#2d816b', '#46a088', '#82c6b2', '#BAEDDD'],
        barPercentage: 1.0,
        categoryPercentage: 1.0,
      },
    ],
  };

  public barChartData2: ChartConfiguration<'bar'>['data'] = {
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

  public barChartOptions: ChartConfiguration<'bar'>['options'] = {
    responsive: true,
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

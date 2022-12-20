import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { FinanceiroService } from 'src/app/service/financeiro.service';




@Component({
  selector: 'app-relatorios',
  templateUrl: './relatorios.component.html',
  styleUrls: ['./relatorios.component.css']
})
export class RelatoriosComponent implements OnInit {

  startDate: Date;
  endDate: Date;


  constructor(
    private financeiroService: FinanceiroService
  ) {
    const currentYear = new Date().getFullYear();
    const month = 3; // April (0-based index, so 0 = January, 1 = February, etc.)
    const lastDayOfMonth = new Date(currentYear, month + 1, 0).getDate();

    this.startDate = new Date(currentYear, month, 1);
    this.endDate = new Date(currentYear, month, lastDayOfMonth);
  }

  ngOnInit(): void {

  }

  calcular() {
    /*this.financeiroService.buscarPlantoesPorUsuario(this.startDate: Date, this.endDate: Date).subscribe(result => {
      console.log(result);
    });*/
  }








    @ViewChild('content', {static:false})el!:ElementRef //especifica qual div pegar com #content

    generatePDF() {

      let pdf = new jsPDF('p','pt','a4');
      var margin = 35;
      var scale = (1.85*pdf.internal.pageSize.width - margin*2)/document.body.scrollWidth;

      pdf.html(this.el.nativeElement, {
        x: margin,
        y: margin,
        html2canvas:{
          scale: scale,
          },

        callback:(pdf)=>{

          pdf.save("RelatorioFinanceiro.pdf");
        }

      })

    }
}


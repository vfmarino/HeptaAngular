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

  startDate:Date =new Date();
  endDate:Date=new Date();;


  constructor(
    private financeiroService: FinanceiroService
  ) {

  }

  ngOnInit(): void {

  }

  calcular() {
    console.log(this.startDate);
    console.log(this.endDate);
    this.financeiroService.buscarPlantoesPorUsuario(this.startDate, this.endDate).subscribe(result => {
      console.log(result);
    });
  }


  @ViewChild('content', { static: false }) el!: ElementRef //especifica qual div pegar com #content

  generatePDF() {

    let pdf = new jsPDF('p', 'pt', 'a4');
    var margin = 35;
    var scale = (1.85 * pdf.internal.pageSize.width - margin * 2) / document.body.scrollWidth;

    pdf.html(this.el.nativeElement, {
      x: margin,
      y: margin,
      html2canvas: {
        scale: scale,
      },

      callback: (pdf) => {

        pdf.save("RelatorioFinanceiro.pdf");
      }

    })

  }
}


import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { FinanceiroService } from 'src/app/service/financeiro.service';
import { Relatorio } from '../../../../modelos/relatorioFinanceiro/Relatorio';

@Component({
  selector: 'app-relatorios',
  templateUrl: './relatorios.component.html',
  styleUrls: ['./relatorios.component.css']
})
export class RelatoriosComponent implements OnInit {

  startDate:Date =new Date();
  endDate:Date=new Date();;

  relatorios: Relatorio[] = [];

  constructor(
    private financeiroService: FinanceiroService
  ) { }

  ngOnInit(): void {
    this.relatorio();

  }

  relatorio(){
    this.financeiroService.relatorio().subscribe(response => this.relatorios = response);
    console.log(this.relatorios);
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


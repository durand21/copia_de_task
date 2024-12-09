import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CsvHandlerService } from '../../../../services/csv-handler';

@Component({
  selector: 'app-data-handle-table',
  imports: [FormsModule],
  templateUrl: './data-handle-table.component.html',
  styleUrl: './data-handle-table.component.css',
})
export class DataHandleTableComponent {
  csvHandlerService = inject(CsvHandlerService);
  fileContent = this.csvHandlerService.csvData();
  possibleDelimiters = this.csvHandlerService.possibleDelimiters();
  possibleLineBreaks = this.csvHandlerService.possibleLineBreaks();
  newColumnName: string = '';
  headers = [
    'testId',
    'parentId',
    'Test Type',
    'Test Title',
    'Test Priority',
    'Scope',
    'Step',
  ];

  ngOnInit() {
    this.csvHandlerService.parseCSV()
  }

  toggleRowSelection(rowIndex: number): void {
    this.csvHandlerService.toggleRowSelection(rowIndex)
  }
}

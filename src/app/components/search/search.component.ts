import { Component, EventEmitter, Input, Output } from '@angular/core';
import { List } from 'src/types/types';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  @Output() resultsSearch = new EventEmitter<List[]>();
  @Input() dataArray!: List[]

  onSearch(event: Event): void {
    const searchValue = (event.target as HTMLInputElement).value;
    let results: List[] = this.dataArray.filter((item: any) =>
      Object.values(item).some((value: any) =>
        value.toString().toLowerCase().includes(searchValue),
      ),
    );

    this.resultsSearch.emit(results);

  }
  

}

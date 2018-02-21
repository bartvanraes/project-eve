import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
    selector: 'paging',
    templateUrl: './paging.component.html',
    styleUrls: [ './paging.component.css' ]
  })
export class PagingComponent {
    @Input() pager: any = {};
    @Output() onPageChanged = new EventEmitter<number>();

    setPage(page: number) {
        this.onPageChanged.emit(page);
    }
} 
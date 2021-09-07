import { AfterContentInit, Component, ContentChildren, EventEmitter, Output, QueryList } from '@angular/core';
import { TabComponent } from '../tab/tab.component';
import { merge, Observable } from 'rxjs';

@Component({
  selector: 'app-tab-group',
  templateUrl: './tab-group.component.html',
  styleUrls: ['./tab-group.component.scss']
})
export class TabGroupComponent implements AfterContentInit {
  @ContentChildren(TabComponent) tabs: QueryList<TabComponent>;
  isActive: string;
  @Output() tabChanged: EventEmitter<string> = new EventEmitter<string>();

  ngAfterContentInit() {
    merge(...this.tabs.map((item => item.clicked)))
      .subscribe(e => {
        this.tabs.forEach(tempTab => tempTab.isActive = false);
        this.isActive = e.id;
        e.isActive = true;
        this.tabChanged.emit(e.id);
      });
  }


}

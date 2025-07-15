import {ChangeDetectionStrategy, Component} from '@angular/core';
import {MatIconModule} from '@angular/material/icon';

/**
 * @title Basic icons
 */
@Component({
  selector: 'app-icon',
  templateUrl: './componente14.html',
  imports: [MatIconModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconOverviewExample {}

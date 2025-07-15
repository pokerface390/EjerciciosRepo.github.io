import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'card-overview-example',
  templateUrl: './componente6.html',
  styleUrls: ['./componente6.css'], 
  imports: [MatCardModule, MatButtonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true, 
})
export class CardOverviewExample {}

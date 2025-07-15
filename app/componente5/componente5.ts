import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCheckboxModule } from '@angular/material/checkbox';

@Component({
  selector: 'app-componente5',
  templateUrl: './componente5.html',
  styleUrls: ['./componente5.css'],
  imports: [MatButtonToggleModule, MatCheckboxModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class ButtonToggleModeExample {
  // Ambos indicadores visibles al inicio
  hideSingleSelectionIndicator = signal(false);
  hideMultipleSelectionIndicator = signal(false);

  toggleSingleSelectionIndicator() {
    this.hideSingleSelectionIndicator.update(value => !value);
  }

  toggleMultipleSelectionIndicator() {
    this.hideMultipleSelectionIndicator.update(value => !value);
  }
}

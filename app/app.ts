import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatAutocompleteUno } from "./mat-autocomplete/mat-autocomplete";
import { Componente2 } from "./componente2/componente2";
import { BadgeOverviewExample } from "./componente3/componente3";
import { ButtonDisabledInteractiveExample } from "./componente4/componente4";
import { ButtonToggleModeExample } from "./componente5/componente5";
import { CardOverviewExample } from "./componente6/componente6";
import { CheckboxOverviewExample } from "./componente7/componente7";
import { ChipsOverviewExample } from "./componente8/componente8";
import { DateRangePickerComparisonExample } from "./componente9/componente9";
import { DividerOverviewExample } from "./componente10/componente10";
import { ExpansionOverviewExample } from "./componente11/componente11";
import { FormFieldOverviewExample } from "./componente12/componente12";
import { IconOverviewExample} from "./componente14/componente14";
import { ListOverviewExample } from "./componente15/componente15";
import { MenuOverviewExample } from "./componente16/componente16";
import { FormFieldHintExample } from "./componente13/componente13";
 

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MatAutocompleteUno,
    Componente2,
    BadgeOverviewExample,
    ButtonDisabledInteractiveExample,
    ButtonToggleModeExample,
    CardOverviewExample,
    CheckboxOverviewExample,
    ChipsOverviewExample,
    DateRangePickerComparisonExample,
    DividerOverviewExample,
    ExpansionOverviewExample,
    FormFieldOverviewExample,
    FormFieldHintExample,
    IconOverviewExample,
    ListOverviewExample,
    MenuOverviewExample
],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected title = 'Angular_Material';
}

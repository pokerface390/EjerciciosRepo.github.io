import {Component} from '@angular/core';
import {MatButton} from '@angular/material/button';
import {MatTooltip} from '@angular/material/tooltip';

/**
 * @title Interactive disabled buttons
 */
@Component({
  selector: 'button-disabled-interactive-example',
  templateUrl: './componente4.html',
  styleUrl: './componente4.css',
  imports: [MatButton, MatTooltip],
})
export class ButtonDisabledInteractiveExample {}

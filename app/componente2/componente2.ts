import { Component, OnInit } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { AsyncPipe } from '@angular/common';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

export interface User {
  name: string;
}

@Component({
  selector: 'autocomplete-display-example',
  templateUrl: './componente2.html',
  styleUrls: ['./componente2.css'],
  standalone: true,
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    AsyncPipe,
  ],
})
export class Componente2 implements OnInit {
  myControl = new FormControl<string | User>('');
  options: User[] = [{ name: 'Mary' }, { name: 'Shelley' }, { name: 'Igor' }];

  // Inicializa con la lista completa para evitar error
  filteredOptions: Observable<User[]> = of(this.options);

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => {
        const name = typeof value === 'string' ? value : value?.name;
        return name ? this._filter(name as string) : this.options.slice();
      }),
    );
  }

  displayFn(user: User): string {
    return user && user.name ? user.name : '';
  }

  private _filter(name: string): User[] {
    const filterValue = name.toLowerCase();

    return this.options.filter(option =>
      option.name.toLowerCase().includes(filterValue),
    );
  }
}

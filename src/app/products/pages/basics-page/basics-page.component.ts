import { Component } from '@angular/core';

@Component({
  selector: 'products-basics-page',
  standalone: false,
  templateUrl: './basics-page.component.html'
})
export class BasicsPageComponent {
  public nameLower: string =  'maise';
  public nameUpper: string =  'MAISE';
  public fullName: string =  'maISe mENdES DamASCeno';

  public customDate: Date = new Date();
}

import { Component } from '@angular/core';

/**
 * The best component.
 *
 * @example
 * ```html
 * <ya-map
 *   [center]="[55.751952, 37.600739]"
 *   [state]="{type: 'yandex#satellite'}"
 * ></ya-map>
 * ```
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'compodoc-reproduction';
}

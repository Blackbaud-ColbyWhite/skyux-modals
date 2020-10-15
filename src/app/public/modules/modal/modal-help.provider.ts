import {
  Injectable
} from '@angular/core';

import {
  Observable
} from 'rxjs';

@Injectable()
export abstract class SkyModalHelpProvider {
  public abstract openTopic(topic: string): Observable<never>;
}

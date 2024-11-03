import { HttpParams } from '@angular/common/http';
import { Dictionary } from '../../shared/models';

export class HttpUtils {

  static buildHttpParams(params: Dictionary<any>): HttpParams {
    let httpParams = new HttpParams();
    if (!params) return httpParams;

    Object.keys(params).map(key => {
      const value = params[key];
      if (!key || !value) return;

      if (Array.isArray(value)) {
        if (!value.length) return;

        httpParams = httpParams.set(key, value.join(','));
      } else {
        httpParams = httpParams.append(key, `${value}`);
      }
    });

    return httpParams;
  }
}

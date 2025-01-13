import { provideHttpClient, withInterceptors } from "@angular/common/http";
import { ApplicationConfig, importProvidersFrom } from "@angular/core";
import {JwtModule} from "@auth0/angular-jwt";
import { authInterceptor } from "./auth/auth.interceptor";
import { httpInterceptor } from "./http/http.interceptor";

export const appConfig: ApplicationConfig = {
  providers: [
    importProvidersFrom([
      JwtModule.forRoot({
        config: {
          tokenGetter: () => localStorage.getItem('token')
        }
      })
    ]),
    provideHttpClient(
      withInterceptors([authInterceptor, httpInterceptor])
    ),
  ],
};
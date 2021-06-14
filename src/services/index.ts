import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { LogInterceptor } from "@services/log.interceptor";
import { RestInterceptor } from "@services/rest.interceptor";

export const httpInterceptorProviders = [
    //binding RestInterceptor with HTTP_INTERCEPTORS
    { provide : HTTP_INTERCEPTORS, useClass : RestInterceptor, multi : true },
    { provide : HTTP_INTERCEPTORS, useClass : LogInterceptor, multi : true }
]
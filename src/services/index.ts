import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { RestInterceptor } from "./rest.interceptor";

export const httpInterceptorProviders = [
    //binding RestInterceptor with HTTP_INTERCEPTORS
    { provide : HTTP_INTERCEPTORS, useClass : RestInterceptor, multi : true }
]
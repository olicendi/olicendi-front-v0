import { HttpInterceptorFn } from '@angular/common/http';

export const baseUrlInterceptorFn: HttpInterceptorFn = (req, next) => {
    // Only prepend base URL for relative URLs
    console.log(req.url);
    if (!req.url.startsWith('http') && !req.url.startsWith('//')) {
        const apiReq = req.clone({
            url: `${'http://olicendi.ru:8080'}${req.url}`
        });
        console.log(apiReq)
        return next(apiReq);
    }
    return next(req);
};
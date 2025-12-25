import { HttpInterceptorFn } from '@angular/common/http';

export const baseUrlInterceptorFn: HttpInterceptorFn = (req, next) => {
    if (!req.url.startsWith('http') && !req.url.startsWith('//')) {
        const apiReq = req.clone({
            url: `${'http://olicendi.ru:8080'}${req.url}`,
        });
        return next(apiReq);
    }
    return next(req);
};

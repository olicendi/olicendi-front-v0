import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Card } from './card-editor.model';

@Injectable({ providedIn: 'root' })
export class CardService {
    private http = inject(HttpClient);

    endpoint = '';

    getCards() {
        return this.http.get<Card[]>('/api/card');
    }
}

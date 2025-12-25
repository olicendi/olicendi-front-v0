import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TuiTextfield } from '@taiga-ui/core';

@Component({
    selector: 'ol-card-editor',
    imports: [FormsModule, TuiTextfield],
    templateUrl: './card-editor.component.html',
    styleUrl: './card-editor.component.scss',
})
export class CardEditorComponent {
    value = 'olicendi-front-v0';
}

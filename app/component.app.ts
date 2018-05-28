import { Component } from '@angular/core';

@Component({
    selector: 'app',
    templateUrl: './partials/app.html'
})

export class AppComponent {
    name: string;

    constructor(){
        this.name = "Krishna Chaitanya K";
    }
}
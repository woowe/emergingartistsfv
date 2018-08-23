import { Component, OnInit } from '@angular/core';
import { ContentfulService } from '../../../core/services/contentful/contentful.service';
import { visitAnimationTrigger } from './home.animations';
import { AnimationBuilder } from '@angular/animations';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    animations: [visitAnimationTrigger]
})
export class HomeComponent implements OnInit {
    fields: any;
    animState = null;

    constructor(
        private contentful: ContentfulService,
        private ab: AnimationBuilder
    ) {}

    ngOnInit() {
        this.contentful
            .getHomepageData()
            .then(data => {
                console.log(data);

                this.fields = data.fields;

                this.animState = 'loaded';
            })
            .catch(console.log);
    }
}

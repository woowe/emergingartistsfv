import {
    Component,
    OnInit,
    ViewChildren,
    AfterViewInit,
    QueryList
} from '@angular/core';
import { Observable, from, timer } from 'rxjs';
import { ContentfulService } from '../../../core/services/contentful/contentful.service';
import { tap, map, share, switchMap, take } from 'rxjs/operators';
import { RatioImgComponent } from '../../../core/components/ratio-img/ratio-img.component';
import {
    visitAnimationTrigger,
    switchAnimationTrigger
} from './team.animations';

@Component({
    selector: 'app-team',
    templateUrl: './team.component.html',
    styleUrls: ['./team.component.scss'],
    animations: [visitAnimationTrigger, switchAnimationTrigger]
})
export class TeamComponent implements OnInit, AfterViewInit {
    @ViewChildren(RatioImgComponent)
    imgs: QueryList<RatioImgComponent>;

    fields$: Observable<any>;
    selectedMember: any;
    animState;

    constructor(private contentful: ContentfulService) {}

    ngOnInit() {
        this.fields$ = from(this.contentful.getTeamData()).pipe(
            tap(console.log),
            map(data => data.fields),
            tap(fields => {
                if (!this.selectedMember) {
                    this.selectedMember = fields.members[0];
                }
                console.log(this.selectedMember);

                this.animState = 'loaded';
            }),
            share()
        );
    }

    ngAfterViewInit() {
        console.log(this.imgs);
    }

    selectMember(member) {
        this.selectedMember = member;

        timer(0, 16)
            .pipe(take(13))
            .subscribe((fields: any) => {
                this.imgs.forEach(img => img.resize());
            });
    }
}

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
import { Meta, Title } from '@angular/platform-browser';

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

    constructor(
        private contentful: ContentfulService,
        private meta: Meta,
        private title: Title
    ) {}

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

                this.title.setTitle(
                    (fields as any).metaTitle ||
                        'Emerging Artists Fox Valley'
                );

                this.meta.addTags([
                    { name: 'author', content: 'emergingartistsfv.com' },
                    {
                        name: 'keywords',
                        content: ((fields as any).metaKeywords || []).join(
                            ', '
                        )
                    },
                    {
                        name: 'description',
                        content: (fields as any).metaDescription || ''
                    }
                ]);
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

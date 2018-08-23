import { Component, OnInit, ViewChildren, AfterViewInit, QueryList } from '@angular/core';
import { Observable, from, timer } from 'rxjs';
import { ContentfulService } from '../../../core/services/contentful/contentful.service';
import { tap, map, share, switchMap } from 'rxjs/operators';
import { RatioImgComponent } from '../../../core/components/ratio-img/ratio-img.component';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit, AfterViewInit {

    @ViewChildren(RatioImgComponent) imgs: QueryList<RatioImgComponent>;

    fields$: Observable<any>;
    selectedMember: any;

    constructor(private contentful: ContentfulService) { }

    ngOnInit() {
      this.fields$ = from(this.contentful.getTeamData()).pipe(
          tap(console.log),
          map(data => data.fields),
          tap(fields => {
              if (!this.selectedMember) {
                this.selectedMember = fields.members[0];
              }
              console.log(this.selectedMember);
          }),
          share()
      );
    }

    ngAfterViewInit() {
        console.log(this.imgs);
    }

    selectMember(member) {
        this.selectedMember = member;

        timer(50).pipe(
            switchMap(() => this.fields$)
        ).subscribe((fields: any) => {
            const idx = fields.members.findIndex((v) => v === member);

            this.imgs.toArray()[idx].resize();
        });
    }

}

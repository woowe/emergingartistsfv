import { Component, OnInit } from '@angular/core';
import { ContentfulService } from '../../../core/services/contentful/contentful.service';
import { Observable, from } from 'rxjs';
import { map, tap, share } from 'rxjs/operators';

@Component({
  selector: 'app-get-involved',
  templateUrl: './get-involved.component.html',
  styleUrls: ['./get-involved.component.scss']
})
export class GetInvolvedComponent implements OnInit {

  fields$: Observable<any>;

  constructor(private contentful: ContentfulService) { }

  ngOnInit() {
    this.fields$ = from(this.contentful.getGetInvolvedData()).pipe(
        tap(console.log),
        map(data => data.fields),
        share()
    );
  }

}

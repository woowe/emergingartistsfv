import {
    Component,
    OnInit,
    Input,
    ElementRef,
    HostBinding,
    HostListener,
    Renderer2,
    AfterViewInit,
    ViewChild,
    Output,
    EventEmitter
} from '@angular/core';
import {
    ImgRatios,
    ImgRatioService
} from '../../services/img-ratio/img-ratio.service';

@Component({
    selector: 'app-ratio-img',
    templateUrl: './ratio-img.component.html',
    styleUrls: ['./ratio-img.component.scss']
})
export class RatioImgComponent implements OnInit {
    @ViewChild('img')
    public img: ElementRef;

    @Input()
    public imgsize: ImgRatios;
    @Input()
    public src: string;
    @Input()
    public alt: string;

    @Input()
    public width: string;
    @Input()
    public height: string;

    @Output()
    load: EventEmitter<any> = new EventEmitter();

    constructor(
        private el: ElementRef,
        private renderer: Renderer2,
        private imgRatio: ImgRatioService
    ) {}

    apply_sizing() {
        this.imgRatio.apply_sizing(
            this.imgsize,
            this.img.nativeElement,
            this.el.nativeElement.parentElement,
            this.renderer
        );
    }

    loaded() {
        this.apply_sizing();
        this.load.emit(true);
    }

    @HostListener('window:resize')
    resize() {
        this.apply_sizing();
    }

    ngOnInit() {}
}

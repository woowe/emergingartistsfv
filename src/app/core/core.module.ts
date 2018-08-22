import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentfulService } from './services/contentful/contentful.service';
import { RatioImgComponent } from './components/ratio-img/ratio-img.component';
import { ImgRatioService } from './services/img-ratio/img-ratio.service';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
    imports: [CommonModule],
    providers: [ContentfulService, ImgRatioService],
    declarations: [RatioImgComponent, FooterComponent],
    exports: [RatioImgComponent, FooterComponent]
})
export class CoreModule {}

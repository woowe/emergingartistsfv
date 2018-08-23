import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentfulService } from './services/contentful/contentful.service';
import { RatioImgComponent } from './components/ratio-img/ratio-img.component';
import { ImgRatioService } from './services/img-ratio/img-ratio.service';
import { FooterComponent } from './components/footer/footer.component';
import { MenuComponent } from './components/menu/menu.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [CommonModule, FlexLayoutModule, RouterModule],
    providers: [ContentfulService, ImgRatioService],
    declarations: [RatioImgComponent, FooterComponent, MenuComponent],
    exports: [RatioImgComponent, FooterComponent, MenuComponent]
})
export class CoreModule {}

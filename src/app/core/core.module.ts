import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentfulService } from './services/contentful/contentful.service';
import { RatioImgComponent } from './components/ratio-img/ratio-img.component';
import { ImgRatioService } from './services/img-ratio/img-ratio.service';
import { FooterComponent } from './components/footer/footer.component';
import { MenuComponent } from './components/menu/menu.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { RouterAnimComponent } from './components/router-anim/router-anim.component';

@NgModule({
    imports: [CommonModule, FlexLayoutModule, RouterModule],
    providers: [ContentfulService, ImgRatioService],
    declarations: [RatioImgComponent, FooterComponent, MenuComponent, RouterAnimComponent],
    exports: [RatioImgComponent, FooterComponent, MenuComponent, RouterAnimComponent]
})
export class CoreModule {}

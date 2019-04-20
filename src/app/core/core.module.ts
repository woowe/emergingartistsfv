import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';

import { FooterComponent } from './components/footer/footer.component';
import { HeaderImageComponent } from './components/header-image/header-image.component';
import { MenuComponent } from './components/menu/menu.component';
import { RatioImgComponent } from './components/ratio-img/ratio-img.component';
import { RouterAnimComponent } from './components/router-anim/router-anim.component';
import { ContentfulService } from './services/contentful/contentful.service';
import { ImgRatioService } from './services/img-ratio/img-ratio.service';

@NgModule({
    imports: [CommonModule, FlexLayoutModule, RouterModule],
    providers: [ContentfulService, ImgRatioService],
    declarations: [
        RatioImgComponent,
        FooterComponent,
        MenuComponent,
        RouterAnimComponent,
        HeaderImageComponent
    ],
    exports: [
        RatioImgComponent,
        FooterComponent,
        MenuComponent,
        RouterAnimComponent,
        HeaderImageComponent
    ]
})
export class CoreModule {}

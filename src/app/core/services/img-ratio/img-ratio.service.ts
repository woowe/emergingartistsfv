import { Injectable, Renderer2, ElementRef } from '@angular/core';

export type ImgRatios = 'contain' | 'cover' | 'auto' | 'stretch';

@Injectable()
export class ImgRatioService {
    constructor() {}

    cover(w_ratio, h_ratio) {
        return Math.max(w_ratio, h_ratio);
    }

    contain(w_ratio, h_ratio) {
        return Math.min(w_ratio, h_ratio);
    }

    auto() {
        return 1;
    }

    stretch(w_ratio, h_ratio) {
        return {
            width: w_ratio,
            height: h_ratio
        };
    }

    apply_sizing(
        ratio_type: ImgRatios,
        img: HTMLElement,
        container: HTMLElement,
        renderer: Renderer2
    ) {
        if (!img || !container) {
            return;
        }

        const img_rect = img.getBoundingClientRect();
        const container_rect = container.getBoundingClientRect();

        const r = (this[ratio_type] as any)(
            container_rect.width / img_rect.width,
            container_rect.height / img_rect.height
        );

        const new_width = img_rect.width * (r.width || r);
        const new_height = img_rect.height * (r.height || r);

        console.log(r, new_width, new_height);

        renderer.setStyle(img, 'width', `${new_width}px`);
        renderer.setStyle(img, 'height', `${new_height}px`);
    }
}

import {
    trigger,
    animate,
    transition,
    style,
    query,
    stagger,
    group
} from '@angular/animations';

export const visitAnimation = [
    transition('* => true', [
        query('*', [style({ opacity: 0, transform: 'translateY(25px)' })], {
            optional: true
        }),
        style({ opacity: 0 }),
        group([
            animate('0.3s ease', style({ opacity: 1 })),
            query(
                '*',
                [
                    style({ opacity: 0, transform: 'translateY(25px)' }),
                    stagger('75ms ease', [
                        animate(
                            '0.6s ease',
                            style({ opacity: 1, transform: 'translateY(0px)' })
                        )
                    ])
                ],
                { optional: true }
            )
        ])
    ])
];

export const visitAnimationTrigger = trigger('visit', visitAnimation);

import {
    trigger,
    animate,
    transition,
    style,
    query,
    stagger
} from '@angular/animations';

export const visitAnimation = [
    transition('* => *', [
        query(':enter', [style({ opacity: 0, transform: 'translateY(25%)' })], {
            optional: true
        }),
        query(
            ':enter',
            [
                style({ opacity: 0, transform: 'translateY(25%)' }),
                stagger('100ms ease', [
                    animate(
                        '0.4s ease',
                        style({ opacity: 1, transform: 'translateY(0%)' })
                    )
                ])
            ],
            { optional: true }
        )
    ])
];

export const visitAnimationTrigger = trigger('visit', visitAnimation);

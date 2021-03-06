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
        query(
            ':enter',
            [style({ opacity: 0, transform: 'translateY(25px)' })],
            {
                optional: true
            }
        ),
        query(
            ':enter',
            [
                style({ opacity: 0, transform: 'translateY(25px)' }),
                stagger('150ms ease', [
                    animate(
                        '0.6s ease',
                        style({ opacity: 1, transform: 'translateY(0px)' })
                    )
                ])
            ],
            { optional: true }
        )
    ])
];

export const switchAnimation = [
    transition('* => *', [
        query('*', [style({ opacity: 0, transform: 'translateX(25px)' })], {
            optional: true
        }),
        query(
            '*',
            [
                style({ opacity: 0, transform: 'translateX(25px)' }),
                stagger('50ms ease', [
                    animate(
                        '0.2s ease',
                        style({ opacity: 1, transform: 'translateX(0px)' })
                    )
                ])
            ],
            { optional: true }
        )
    ])
];

export const visitAnimationTrigger = trigger('visit', visitAnimation);
export const switchAnimationTrigger = trigger('switch', switchAnimation);

import {
    trigger,
    animate,
    transition,
    style,
    query,
    group,
    sequence,
    animateChild
} from '@angular/animations';

// animation-name: example;
// animation-duration: 1.7s;
// animation-iteration-count: infinite;
// animation-direction: forwards;

// @keyframes example {
//     from {
//         bottom: 0;
//         transform: translateY(100%);
//     }
//     to {
//         bottom: 100%;
//         transform: translateY(0%);
//     }
// }

export const loadingAnimation = trigger('loading', [
    transition('* => *', [
        sequence([
            style({ zIndex: 99, opacity: 1 }),
            query('.inner', [
                style({ bottom: 0, transform: 'translateY(100%)' })
            ]),
            query('.inner', [
                animate(
                    '1.7s ease',
                    style({ bottom: '100%', transform: 'translateY(0%)' })
                )
            ]),
            animate('0.2s ease', style({ opacity: 0 })),
            style({ zIndex: -1 })
        ])
    ])
]);

export const fadeAnimation = trigger('fadeAnimation', [
    transition('* => *', [
        query(':enter', [animateChild()], { optional: true })
    ])
]);

// export const fadeAnimation = trigger('fadeAnimation', [
//     // The '* => *' will trigger the animation to change between any two states
//     transition('* => *', [
//         // The query function has three params.
//         // First is the event, so this will apply on entering or when the element is added to the DOM.
//         // Second is a list of styles or animations to apply.
//         // Third we add a config object with optional set to true, this is to signal
//         // angular that the animation may not apply as it may or may not be in the DOM.
//         query(':enter', [style({ opacity: 0 })], { optional: true }),
//         query(
//             ':leave',
//             [
//                 style({
//                     opacity: 1,
//                     position: 'absolute',
//                     width: '100%',
//                     height: '100%'
//                 })
//             ],
//             { optional: true }
//         ),
//         group([
//             query(
//                 ':leave',
//                 // here we apply a style and use the animate function to apply the style over 0.3 seconds
//                 [
//                     style({
//                         opacity: 1,
//                         position: 'absolute',
//                         width: '100%',
//                         height: '100%'
//                     }),
//                     animate('0.1s', style({ opacity: 0 }))
//                 ],
//                 { optional: true }
//             ),
//             query(
//                 ':enter',
//                 [style({ opacity: 0 }), animate('0.3s', style({ opacity: 1 }))],
//                 { optional: true }
//             )
//         ])
//     ])
// ]);

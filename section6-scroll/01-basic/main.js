import './scroll-timeline.js';

const progress = document.querySelector('.progress');
const scrollBox = document.querySelector('.scroll-box');

progress.animate(
    [
        { transform: 'scaleX(0)' },
        { transform: 'scaleX(1)' },
    ],
    {
        timeline: new ScrollTimeline({
            scrollOffsets: [
                { target: document.body, edge: 'start', threshold: 1 },
                { target: document.body, edge: 'end', threshold: 1 },
                // { target: scrollBox, edge: 'start', threshold: 1 },
                // { target: scrollBox, edge: 'end', threshold: 1 },
            ]
        })
    }
);
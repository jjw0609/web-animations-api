const galleryTimelineElem = document.querySelector('.gallery-timeline');
const gallery = document.querySelector('.gallery');

gallery.animate(
	[
		{ opacity: 0, offset: 0 },
		{ opacity: 1, offset: 0.04 },
		{ transform: 'translateX(0)', offset: 0.1 },
		{ transform: 'translateX(calc(-100% + 100vw)', offset: 0.9 },
		{ opacity: 1, offset: 0.96 },
		{ opacity: 0, transform: 'translateX(calc(-100% + 100vw)', offset: 1 }
	],
	{
		duration: 1,
		fill: "both",
		timeline: new ScrollTimeline({
			scrollOffsets: [
				{ target: galleryTimelineElem, edge: "start", threshold: 1 },
				{ target: galleryTimelineElem, edge: "end", threshold: 1 }
			]
		})
	}
);

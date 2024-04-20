const track = document.querySelector('.track');
const galleryTimelineElem = document.querySelector('.gallery-timeline');

track.animate(
	[
		{ transform: 'translate(-50%, 0)' },
		{ transform: 'translate(-50%, calc(2000px - 100vh))' }
		// .gallery-timeline의 높이가 2000px
	],
	{
		fill: "both",
		timeline: new ScrollTimeline({
			scrollOffsets: [
				{ target: galleryTimelineElem, edge: "start", threshold: 1 },
				{ target: galleryTimelineElem, edge: "end", threshold: 1 }
			]
		})
	}
);

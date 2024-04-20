const airplane = document.querySelector('.airplane');
const airplaneScrollTimeline = document.querySelector('.airplane-scroll-timeline');

airplane.animate(
  [
    { offsetDistance: '100%', offset: 0 },
    { offsetDistance: '47%', offset: 0.4 },
		{ offsetDistance: '47%', offset: 0.58 },
		{ offsetDistance: '0%', offset: 1 },
  ],
  {
    fill: 'both',
    timeline: new ScrollTimeline({
      scrollOffsets: [
        { target: airplaneScrollTimeline, edge: 'start', threshold: 1 },
        { target: airplaneScrollTimeline, edge: 'end', threshold: 1 }
      ]
    })
  }
);

// 스크롤
let prevScrollY = -1; // 처음 스크롤 할 때 오락가락 방지
let scrollFlag;
window.addEventListener('scroll', e => {
	if (scrollFlag) return;

	scrollFlag = true;

	setTimeout(() => {
		scrollFlag = false;

		if (window.scrollY >= prevScrollY) {
			console.log('down');
			airplane.dataset.direction = 'down';
		} else {
			console.log('up');
			airplane.dataset.direction = 'up';
		}
		prevScrollY = window.scrollY;
	}, 100);
});

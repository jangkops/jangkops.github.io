(function () {
  var tabs = document.getElementById('projectTabs');
  var grid = document.getElementById('projectGrid');
  if (!tabs || !grid) return;

  var cards = Array.prototype.slice.call(grid.querySelectorAll('.project-card'));

  // 탭 라벨의 개수는 카드에서 직접 세어 채운다 (하드코딩 방지)
  tabs.querySelectorAll('.project-tabs__btn').forEach(function (btn) {
    var filter = btn.dataset.filter;
    var count = filter === 'all'
      ? cards.length
      : cards.filter(function (c) { return c.dataset.category === filter; }).length;

    var badge = btn.querySelector('.project-tabs__count');
    if (badge) badge.textContent = count;
    btn.hidden = count === 0;
  });

  tabs.addEventListener('click', function (e) {
    var btn = e.target.closest('.project-tabs__btn');
    if (!btn) return;

    var filter = btn.dataset.filter;

    tabs.querySelectorAll('.project-tabs__btn').forEach(function (b) {
      b.classList.remove('project-tabs__btn--active');
    });
    btn.classList.add('project-tabs__btn--active');

    cards.forEach(function (card) {
      if (filter === 'all' || card.dataset.category === filter) {
        card.classList.remove('project-card--hidden');
      } else {
        card.classList.add('project-card--hidden');
      }
    });
  });
})();

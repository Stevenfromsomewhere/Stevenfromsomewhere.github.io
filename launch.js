(function () {
  var TARGET = "launch.html?v=1402s&log=1&afterglow=run&mode=goldhen";
  var DELAY  = 3; // seconds

  var el = document.getElementById("count");
  var n  = DELAY;

  function tick() {
    if (n <= 0) {
      window.location.href = TARGET;
      return;
    }
    if (el) el.textContent = "launching in " + n + "...";
    n--;
    setTimeout(tick, 1000);
  }

  tick();
})();

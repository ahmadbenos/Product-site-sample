AOS.init();

const options = {
  suffix: "+",
};

window.onload = function () {
  const costumers = new CountUp("clients", 0, 14811, 0, 9, options);
  costumers.start();

  const xp = new CountUp("xp", 0, 8, 0, 5);
  xp.start();

  const experts = new CountUp("experts", 0, 94, 0, 7);
  experts.start();

  const vps = new CountUp("vps", 0, 8046, 0, 7, options);
  vps.start();
};

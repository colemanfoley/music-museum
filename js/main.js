if (!rdioUtils.startupChecks()) {
  return;
}

R.ready(function() {
	console.log("R.ready called");
  R.player.play({source: "a3032151"}); // Alice In Chains - The Devil Put Dinosaurs Here
});

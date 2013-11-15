Package.describe({
  summary: "Node-Stripe brought to Meteor.  Server-only fork of https://github.com/appleifreak/stripe-meteor"
});

Npm.depends({ "stripe": "2.1.0-rc3" });

Package.on_use(function (api) {

	 // ensure backwards compatibility with Meteor pre-0.6.5
	if (api.export){
	    api.export('STRIPEMETEOR');
	}

	api.add_files('stripe_server.js', 'server');
});

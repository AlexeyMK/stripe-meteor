Package.describe({
  summary: "Node-Stripe brought to Meteor.  Server-only fork of https://github.com/appleifreak/stripe-meteor"
});

Npm.depends({ "stripe": "2.2.1" });

Package.on_use(function (api) {

	 // ensure backwards compatibility with Meteor pre-0.6.5
	if (api.export){
	    api.export('StripeAPI', 'server');
	}

	api.add_files('stripe_server.js', 'server');
});

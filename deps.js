exports.SERVER_DEPS = [
	'admin/common.js',
	'admin/panel.js',
	'common/index.js',
	'common/oneesama.js',
	'common/options.js',
	'config.js',
	'db.js',
	'deps.js',
	'etc.js',
	'hooks.js',
	'tail.js',
	'curfew/server.js',
	'imager/config.js',
	'imager/daemon.js',
	'imager/db.js',
	'imager/index.js',
	'imager/jobs.js',
	'radio/server.js',
	'report/config.js',
	'report/server.js',
	'server/amusement.js',
	'server/api.js',
	'server/archive.js',
	'server/caps.js',
	'server/msgcheck.js',
	'server/okyaku.js',
	'server/opts.js',
	'server/perceptual.c',
	'server/persona.js',
	'server/render.js',
	'server/server.js',
	'server/state.js',
	'server/web.js',
	'time/server.js',
	'tripcode/tripcode.cc'
];

/* Changes to the below only require a state.js reload */

exports.VENDOR_DEPS = [
	'./node_modules/jquery/dist/jquery.js',
	'./lib/yepnope.js',
	'./node_modules/underscore/underscore.js',
	'./node_modules/backbone/backbone.js',
	'./lib/oninput.js',
	'./node_modules/jquery.cookie/jquery.cookie.js',
	'./node_modules/velocity-animate/velocity.min.js',
	'./node_modules/velocity-animate/velocity.ui.js',
	'./lib/pixastic.blurfast.min.js'
];

exports.CLIENT_DEPS = [
	'client/common.js',
	'client/init.js',
	'client/memory.js',
	'client/imager.js',
	'client/models.js',
	'client/extract.js',
	'client/options.js',
	'client/scroll.js',
	'client/client.js',
	'client/posting.js',
	'client/menu.js',
	'client/conn.js',
	'client/notify.js',
	'client/drop.js',
	'client/hide.js',
	'client/hover.js',
	'client/amusement.js',
	'client/embed.js',
	'curfew/client.js',
	'report/client.js',
	'time/client.js',
	'client/banner.js',
	'radio/client.js',
	'client/catalog.js',
	'client/mobile.js'
];

exports.SERVER_STATE = [
	'admin/client.js',
	'hot.js',
	'tmpl/alookup.html',
	'tmpl/alpha.tmpl',
	'tmpl/curfew.html',
	'tmpl/filter.html',
	'tmpl/index.html',
	'tmpl/login.html',
	'tmpl/redirect.html'
];

exports.MOD_CLIENT_DEPS = [
	'admin/index.js',
	'admin/client.js'
];

// Only used for monitoring by builder.js
exports.ALPHA = [
	'gulpfile.js',
	'common/index.js',
	'common/oneesama.js',
	'common/options.js',
	'alpha/amusement.js',
	'alpha/background.js',
	'alpha/banner.js',
	'alpha/client.js',
	'alpha/connection.js',
	'alpha/extract.js',
	'alpha/history.js',
	'alpha/hover.js',
	'alpha/identity.js',
	'alpha/main.js',
	'alpha/memory.js',
	'alpha/mobile.js',
	'alpha/options',
	'alpha/posts',
	'alpha/scroll.js',
	'alpha/state.js',
	'alpha/time.js',
	'alpha/options/index.js',
	'alpha/posts/article.js',
	'alpha/posts/identity.js',
	'alpha/posts/index.js',
	'alpha/posts/imager.js',
	'alpha/posts/index.js',
	'alpha/posts/posting.js',
	'alpha/posts/section.js'
];
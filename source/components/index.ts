const atomModules = import.meta.glob('./atoms/**/*.vue', { eager: true });
const moleculesModules = import.meta.glob('./molecules/**/*.vue', { eager: true });
const organismModules = import.meta.glob('./organisms/**/*.vue', { eager: true });
const templatesModules = import.meta.glob('./templates/**/*.vue', { eager: true });

const modules = {
	...atomModules,
	...moleculesModules,
	...organismModules
};

const install = (app) => {
	for (const path in modules) {
		const componentConfig = modules[path];
		const modulePath = path
			.replace(/^\.\//, '')
			.replace(/\.\w+$/, '')
			.split(/\//);

		const moduleName = `he-${modulePath.pop()}`;
		console.log(moduleName)

		if (!app.component(moduleName)) {
			app.component(
				moduleName,
				componentConfig.default || componentConfig
			);
		}
	}
};

export default {
	install
};

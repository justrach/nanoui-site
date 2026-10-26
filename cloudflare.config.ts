import { bindings, defineConfig } from "cf/config";

export default defineConfig({
	worker: {
		name: "nanoui-site",
		compatibilityDate: "2026-09-01",
		compatibilityFlags: [
			"nodejs_compat",
			"global_fetch_strictly_public",
		],
		entrypoint: ".open-next/worker.js",
		domains: ["nanoui.dev"],
		observability: {
			enabled: true,
		},
		env: {
			WORKER_SELF_REFERENCE: bindings.worker({
				worker: "nanoui-site",
			}),
			ASSETS: bindings.assets(),
		},
	},
});

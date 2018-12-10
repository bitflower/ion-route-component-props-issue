import { Component, Prop, Listen, State } from "@stencil/core";
import { ListItem } from "../../interfaces/list-card-item";
import { getList } from "../../services/data";

@Component({ tag: "app-root" })
export class AppRoot {
	@Prop({ connect: "ion-toast-controller" })
	toastCtrl: HTMLIonToastControllerElement;

	/**
	 * Handle service worker updates correctly.
	 *
	 * This code will show a toast letting the user of the PWA know that there is
	 * a new version available. When they click the reload button it then enables
	 * the new service worker and reloads the page so that the fresh content will
	 * be served.
	 */
	@Listen("window:swUpdate")
	async onSWUpdate() {
		const registration = await navigator.serviceWorker.getRegistration();

		if (registration && registration.waiting) {
			// registration.waiting is the waiting service worker

			const toast = await this.toastCtrl.create({
				message: "New version available",
				showCloseButton: true,
				closeButtonText: "Reload"
			});

			await toast.present();
			await toast.onWillDismiss();

			registration.waiting.postMessage("skipWaiting");
			window.location.reload();
		}
	}

	@State()
	list: ListItem[] = [];

	@Listen("remove")
	onRemove({ detail: item }: CustomEvent<ListItem>) {
		this.list = this.list.filter(i => i !== item);
	}

	componentWillLoad() {
		this.list = getList();
	}

	render() {
		const { list } = this;

		return (
			<ion-app>
				<ion-router useHash={false}>
					<ion-route url="/" component="app-home" />
					<ion-route
						url="/slow-list"
						component="app-list"
						componentProps={{ list }}
					/>
					<ion-route url="/fast-list" component="app-fast-list" />
					<ion-route url="/list-component" component="app-component-list" />
					<ion-route url="/item" component="app-item" />
				</ion-router>

				<ion-nav />
			</ion-app>
		);
	}
}

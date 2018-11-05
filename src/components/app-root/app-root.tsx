import { Component, Prop, Listen, State } from "@stencil/core";
import { ListItem } from "../../interfaces/list-card-item";
import { getList } from "../../services/data";

@Component({ tag: "app-root" })
export class AppRoot {
	@Prop({ connect: "ion-toast-controller" })
	toastCtrl: HTMLIonToastControllerElement;

	/**
	 * Handle service worker updates correctly.
	 * This code will show a toast letting the
	 * user of the PWA know that there is a
	 * new version available. When they click the
	 * reload button it then reloads the page
	 * so that the new service worker can take over
	 * and serve the fresh content
	 */
	@Listen("window:swInstall")
	async onSWUpdate() {
		const toast = await this.toastCtrl.create({
			message: "A new version has been installed",
			showCloseButton: true
		});
		await toast.present();
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

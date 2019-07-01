import { h, Component, Event, EventEmitter, Prop } from "@stencil/core";
import Header from "../shared/Header";
import { ListItem } from "../../interfaces/list-card-item";

let t0: number;
let t1: number;

@Component({ tag: "app-list" })
export class SlowListPage {
	@Prop({ connect: "ion-toast-controller" })
	toastCtrl: HTMLIonToastControllerElement;

	@Prop()
	list: ListItem[];

	@Event()
	remove: EventEmitter<ListItem>;

	componentWillLoad() {
		t0 = Date.now();
	}

	componentDidUnload() {
		t1 = Date.now();

		this.toastCtrl
			.create({
				message: `Re-rendering took ${t1 - t0} ms.`,
				buttons: [{ icon: "close" }],
				duration: 2000,
				color: "danger"
			})
			.then(toast => toast.present());
	}

	render() {
		return [
			<Header label="Slow List" color="danger" />,
			<ion-content>
				{this.list.map(item => (
					<ion-nav-push
						key={item.id}
						component="app-item"
						componentProps={{ item }}
					>
						<ion-card>
							<ion-card-header>
								<ion-card-title>
									<ion-item no-padding lines="none">
										<ion-label>{item.title}</ion-label>
										<ion-button
											slot="end"
											fill="clear"
											color="medium"
											onClick={e => {
												e.stopImmediatePropagation();
												this.remove.emit(item);
											}}
										>
											<ion-icon slot="icon-only" name="close" />
										</ion-button>
									</ion-item>
								</ion-card-title>
							</ion-card-header>
							<ion-card-content>{item.content()}</ion-card-content>
						</ion-card>
					</ion-nav-push>
				))}
			</ion-content>
		];
	}
}

import { h, Component, Prop, State } from "@stencil/core";
import Header from "../shared/Header";
import { ListItem } from "../../interfaces/list-card-item";
import { getList } from "../../services/data";

@Component({ tag: "app-fast-list" })
export class FastListPage {
	@Prop({ connect: "ion-toast-controller" })
	toastCtrl: HTMLIonToastControllerElement;

	@State()
	list: ListItem[];

	componentWillLoad() {
		this.list = getList();
	}

	remove(item: ListItem) {
		this.list = this.list.filter(i => i !== item);
	}

	t0: number;
	t1: number;

	componentWillUpdate() {
		this.t0 = Date.now();
	}

	componentDidUpdate() {
		this.t1 = Date.now();

		this.toastCtrl
			.create({
				message: `Re-rendering took ${this.t1 - this.t0} ms.`,
				buttons: [{ icon: "close" }],
				duration: 2000,
				color: "success"
			})
			.then(toast => toast.present());
	}

	render() {
		return [
			<Header label="Fast List" color="success" />,
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
												this.remove(item);
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

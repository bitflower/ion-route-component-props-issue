import { Component, Event, EventEmitter, Prop } from "@stencil/core";
import { ListItem } from "../../interfaces/list-card-item";

@Component({ tag: "list-component" })
export class ListComponent {
	@Prop()
	items: ListItem[];

	@Event()
	remove: EventEmitter<ListItem>;

	render() {
		return this.items.map(item => (
			<ion-card key={item.id}>
				<ion-card-header>
					<ion-card-title>
						<ion-item no-padding lines="none">
							<ion-label>{item.title}</ion-label>
							<ion-button
								slot="end"
								fill="clear"
								color="medium"
								onClick={() => {
									this.remove.emit(item);
								}}
							>
								<ion-icon slot="icon-only" name="close" />
							</ion-button>
						</ion-item>
					</ion-card-title>
				</ion-card-header>
				<ion-card-content>{item.content}</ion-card-content>
			</ion-card>
		));
	}
}

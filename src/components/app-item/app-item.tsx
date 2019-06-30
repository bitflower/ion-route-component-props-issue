import { h, Component, Prop } from "@stencil/core";
import Header from "../shared/Header";
import { ListItem } from "../../interfaces/list-card-item";

@Component({ tag: "app-item" })
export class ItemPage {
	@Prop()
	item: ListItem;

	render() {
		return [
			<Header label={`Item #${this.item.id}`} color="secondary" />,
			<ion-content class="ion-padding">
				<h2>{this.item.title}</h2>
				{this.item.content()}
			</ion-content>
		];
	}
}

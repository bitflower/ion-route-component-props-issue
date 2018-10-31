import { Component, State, Listen } from "@stencil/core";
import Header from "../shared/Header";
import { ListItem } from "../../interfaces/list-card-item";
import { getList } from "../../services/data";

@Component({ tag: "app-component-list" })
export class ListComponentPage {
	@State()
	list: ListItem[] = [];

	componentWillLoad() {
		this.list = getList();
	}

	@Listen("remove")
	onRemove({ detail: item }: CustomEvent<ListItem>) {
		this.list = this.list.filter(i => i !== item);
	}

	render() {
		return [
			<Header label="Component List" color="warning" />,
			<list-component items={this.list} />
		];
	}
}

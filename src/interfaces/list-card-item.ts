import { VNode } from "@stencil/core/dist/declarations";

export interface ListItem {
	id: string;
	title: string;
	content: () => VNode;
}

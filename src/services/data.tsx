import { h } from "@stencil/core";
import { ListItem } from "../interfaces/list-card-item";

export const getList = (): ListItem[] => [
	{
		id: "Oh77czV9",
		title: "First Item",
		content: () => <i>Italic</i>
	},
	{
		id: "ea3hrCHN",
		title: "Foo",
		content: () => <strong>Bold</strong>
	},
	{
		id: "UrSSYXsU",
		title: "Bar",
		content: () => (
			<strong>
				<i>Bold Italic</i>
			</strong>
		)
	},
	{
		id: "IbsFudk8",
		title: "Foobar",
		content: () => <ion-text text-uppercase>Uppercase</ion-text>
	},
	{
		id: "LvaKZ8xb",
		title: "Barfoo",
		content: () => <ion-text text-center>Center</ion-text>
	},
	{
		id: "0tTwJ5EI",
		title: "Text no-wrap",
		content: () => (
			<ion-text text-nowrap>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
				quisquam error at laboriosam amet harum illo
			</ion-text>
		)
	},
	{
		id: "7XARlu7I",
		title: "Text wrap",
		content: () => (
			<ion-text text-wrap>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
				quisquam error at laboriosam amet harum illo
			</ion-text>
		)
	}
];

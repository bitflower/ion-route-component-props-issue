import { ListItem } from "../interfaces/list-card-item";

export const getList = () =>
	[
		{
			title: "First Item",
			content: <i>Italic</i>
		},
		{
			title: "Foo",
			content: <strong>Bold</strong>
		},
		{
			title: "Bar",
			content: (
				<strong>
					<i>Bold Italic</i>
				</strong>
			)
		},
		{
			title: "Foobar",
			content: <ion-text text-uppercase>Uppercase</ion-text>
		},
		{
			title: "Barfoo",
			content: <ion-text text-center>Center</ion-text>
		},
		{
			title: "Text no-wrap",
			content: (
				<ion-text text-nowrap>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
					quisquam error at laboriosam amet harum illo
				</ion-text>
			)
		},
		{
			title: "Text wrap",
			content: (
				<ion-text text-wrap>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
					quisquam error at laboriosam amet harum illo
				</ion-text>
			)
		}
	].map<ListItem>((el, id) => ({ ...el, id }));

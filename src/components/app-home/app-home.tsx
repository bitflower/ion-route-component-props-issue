import { Component } from "@stencil/core";
import Header from "../shared/Header";

@Component({ tag: "app-home" })
export class HomePage {
	render() {
		return [
			<Header label="Home" />,

			<ion-content padding>
				<p>
					This app reproduces an issue with slow re-rendering when an array
					lives in the app-root component and is passed down as a prop, vs. when
					it is a direct state member of the page component.
				</p>
				<p>
					On the slow list page (list passed in as a prop and updated from the
					root component via an event), there is a noticable lag before
					re-rendering when removing items.
				</p>
				<p>
					Furthermore, the "slow" list scrolls up every time an item is removed,
					and the back button disappears.
				</p>
				<p>
					However, on the fast list page, the application throws an error when
					removing an item at the same position as the previously removed one
					(the item still gets removed though); this doesn't happen on the slow
					list page.
				</p>

				<ion-button href="/slow-list" expand="block" color="danger">
					Slow list
				</ion-button>

				<ion-button href="/fast-list" expand="block" color="success">
					Fast list
				</ion-button>
			</ion-content>
		];
	}
}

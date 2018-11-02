import { Component } from "@stencil/core";
import Header from "../shared/Header";

@Component({ tag: "app-home" })
export class HomePage {
	render() {
		return [
			<Header label="App Home" />,

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
					This performance issue is probably due to how Stencil diffs and
					decides what it has to re-render. Updating state in the `app-root`
					means re-rendering not only the root component itself but also all its
					children, i. e. all it's pages.
				</p>

				<ion-button href="/slow-list" expand="block" color="danger">
					Slow List
				</ion-button>

				<ion-button href="/fast-list" expand="block" color="success">
					Fast List
				</ion-button>

				<ion-button href="/list-component" expand="block" color="warning">
					List Component
				</ion-button>
			</ion-content>
		];
	}
}

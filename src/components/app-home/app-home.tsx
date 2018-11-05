import { Component } from "@stencil/core";
import Header from "../shared/Header";

@Component({ tag: "app-home" })
export class HomePage {
	render() {
		return [
			<Header label="Home" />,

			<ion-content padding>
				<p>
					The app reproduces an issue with slow re-rendering when an array lives
					in the `app-root` component and is passed down as a prop, vs. when it
					is a direct state member of the page component.
				</p>
				<p>
					On the "slow list" page (list passed in as a prop and updated from the
					root component via an event), there is a noticable lag before
					re-rendering when removing items.
				</p>
				<p>
					Furthermore, the "slow list" scrolls up every time an item is removed,
					and the back button disappears.
				</p>
				<p>
					The "list component" page wraps the list in a{" "}
					<code>
						<pre>{"<list-component items={this.list} />"}</pre>
					</code>{" "}
					rather than passing the list through the `ion-route` via
					`componentProps`, which fixes the "lag" but the items float around
					weirdly when removing one.
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

import { h, Component } from "@stencil/core";
import Header from "../shared/Header";

@Component({ tag: "app-home" })
export class HomePage {
	render() {
		return [
			<Header label="Home" />,

			<ion-content class="ion-padding">
				<p>
					This app has a global <code>@State() list</code> array in the{" "}
					<code>app-root</code> component, which is passed into the "slow list"
					page via the <code>componentProps</code> property of its{" "}
					<code>ion-route</code>.
				</p>
				<p>
					The "slow list" page emits an event when the "remove" button of an
					item is clicked, to let the root component know that it needs to
					update the global state. When that happens:
				</p>
				<ul>
					<li>There's a pretty noticeable lag before the DOM gets updated.</li>
					<li>The page scrolls to the top.</li>
					<li>The back button disappears.</li>
				</ul>
				<p>
					As far as I can tell, the reason for the this is that changing the
					component props of the route is considered a route state change?
				</p>
				<p>
					For comparison, the "fast list" page creates its own internal list
					state (rather than using the global one) and everything works fine.
				</p>

				<ion-button href="/slow-list" expand="block" color="danger">
					Slow List
				</ion-button>

				<ion-button href="/fast-list" expand="block" color="success">
					Fast List
				</ion-button>
			</ion-content>
		];
	}
}

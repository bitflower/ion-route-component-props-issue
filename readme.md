# Stencil Global State Issue

This app reproduces an issue with slow re-rendering when an array lives in the app-root component and is passed down as a prop, vs. when it is a direct state member of the page component.

On the slow list page (list passed in as a prop and updated from the root component via an event), there is a noticable lag before re-rendering when removing items.

Furthermore, the "slow" list scrolls up every time an item is removed, and the back button disappears.

However, on the fast list page, the application throws an error when removing an item at the same position as the previously removed one (the item still gets removed though); this doesn't happen on the slow list page.

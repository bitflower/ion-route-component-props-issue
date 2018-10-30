# Stencil Global State Issue

This app reproduces an issue with slow re-rendering when an array lives in the `app-root` component and is passed down as a prop, vs. when it is a direct state member of the page component.

On the slow list page (list passed in as a prop and updated from the root component via an event), there is a noticable lag before re-rendering when removing items.

Furthermore, the "slow" list scrolls up every time an item is removed, and the back button disappears.

This performance issue is probably due to how Stencil diffs and decides what it has to re-render. Updating state in the `app-root` means re-rendering not only the root component itself but also all its children, i. e. all it's pages.

# Stencil Global State Issue

```
npm i
npm start
```

This repo gets deployed to https://stencil-global-state-issue.now.sh automatically.

---

The app reproduces an issue with slow re-rendering when an array lives in the `app-root` component and is passed down as a prop, vs. when it is a direct state member of the page component.

On the "slow list" page (list passed in as a prop and updated from the root component via an event), there is a noticable lag before re-rendering when removing items.

Furthermore, the "slow list" scrolls up every time an item is removed, and the back button disappears.

The "list component" page wraps the list in a `<list-component items={this.list} />` rather than passing the list through the `ion-route` via `componentProps`, which fixes the "lag" but the items float around weirdly when removing one.


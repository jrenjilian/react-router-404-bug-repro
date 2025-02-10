# React Router 404 bug

1. Run `npm run dev` and click on the link to access a not found route.
1. You should see the 404 error text.
1. Then, reload the page, and see a white screen instead of the same 404 error text.

Note that this does not break if you remove the `loader` from the route.
An `action` does not break it.

This seems to have broken in react-router@7.1.4, as 7.1.3 works.

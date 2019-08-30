# mui-layout
A simple demo app for practice making a responsive dashboard / layout with Material UI and Next JS.

The application layout is based on the free MUI Theme ["Devias Kit - Admin Dashboard"](https://themes.material-ui.com/themes/devias-kit/), by Devias.
  
## Notes
* This project uses `yarn` to manage packages
* The setup for use of material-ui is based on the [material-ui nextjs example](https://github.com/mui-org/material-ui/tree/master/examples/nextjs)
  * Use `material-ui/core/Link` for external links / urls
  * Use `src/components/AppLink` for app / page routing, that wraps things that go in an anchor (such as text, or images) 
* __FOR CHARTS: Consider using recharts (or some other similar package) over react-chartjs-2__
  * seems to have similar functionality, but better maintained (no or less console warnings)

## File Structure
* `src/components' are common components
* Components specific to a component, go in component subdirectory
  * eg. `...Sidebar/components/SidebarNav`
  * create an index.js for each component, which only contains import / export


directory structure tree here.

## Coding Conventions & Standards

for reference / starting points, see...
https://medium.com/swlh/how-to-write-great-react-c4f23f2f3f4f
https://medium.com/better-programming/14-beneficial-tips-to-write-cleaner-code-in-react-apps-a167798fa1ba
https://medium.com/swlh/how-to-make-the-perfect-readme-md-on-github-92ed5771c061

(keep this list short, easy to read, easy to follow; move this list to a different document or location at some point. gist? separate .md?)

* import order (each in alphabetical order)
  * packages
  * local
  * blank line then layouts, views, components

### Atomic Design Principles

* The Atomic Design should have a file of variables and it must be imported by each component;
* The atoms should be written without margins and positions;
* Only the molecules and organisms can set the positions of atoms, but these stacks can’t have any styles of margins and positions;
* Templates have only one function: to set the grid of pages but never positions of specific components;
* Pages render the components with a template defined and it’s here that the Atomic Design will be connected to the rest of the application;

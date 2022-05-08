To emulate the benefits of type safety:
 - Impact areas must always be discernable.
 - Compile-time validation must be able to validate each module's bindings.
 - Refactoring / entity modifications must be simple and reliable.

Each component folder ('module'?) represents an isolated, encapsulated 'impact area'.
Components within modules may directly import one another.

Modules define their dependencies in an 'index.js' manifest, along with convention-based remappable bindings.
Even without type inference, it's very easy to determine the impact area of a change, and address it through a single remapping.

A test / linter can perform validation against each module to validate that their bindings are compatible.


![Architecture](design.png)
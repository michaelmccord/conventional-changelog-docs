

> [conventional-changelog](https://github.com/ajoslin/conventional-changelog) docs preset

This library was based on code from [conventional-changelog-angular](https://github.com/conventional-changelog/conventional-changelog/tree/master/packages/conventional-changelog-angular).

## Examples

Appears under "Docs Update" header, standards subheader:

```
docs(standards): add 'communication' standards
```

Appears under "Typo Fix" header, standards subheader, with a link to issue #28:

```
typo(standards): change TLS 1.0 to 1.2

Closes #28
```

Appears under "Docs Update" header, and under "Major Changes" with the major change explanation:

```
docs(standards): remove gopher support requirement

MAJOR CHANGE: The gopher protocol is no longer a required protocol.
```

The following commit and commit `667ecc1` do not appear in the changelog if they are under the same release. If not, the revert commit appears under the "Reverts" header.

```
revert: docs(standards): add 'communication' standards

This reverts commit 667ecc1654a317a13331b17617d973392f415f02.
```

## Commit Message Format

A commit message consists of a **header**, **body** and **footer**.  The header has a **type**, **scope** and **subject**:

```
<type>(<scope>): <subject>
<BLANK LINE>
<body>
<BLANK LINE>
<footer>
```

The **header** is mandatory and the **scope** of the header is optional.

## Revert

If the commit reverts a previous commit, it should begin with `revert: `, followed by the header of the reverted commit. In the body it should say: `This reverts commit <hash>.`, where the hash is the SHA of the commit being reverted.

## Type

If the prefix is `docs` or `typo`, it will appear in the changelog. However if there is any [MAJOR CHANGE](#footer), the commit will always appear in the changelog.

Other prefixes are up to your discretion.

### Scope

The scope could be anything specifying place of the commit change.

### Subject

The subject contains succinct description of the change:

* use the imperative, present tense: "change" not "changed" nor "changes"
* don't capitalize first letter
* no dot (.) at the end

### Body

Just as in the **subject**, use the imperative, present tense: "change" not "changed" nor "changes".
The body should include the motivation for the change and contrast this with previous behavior.

### Footer

The footer should contain any information about **Major Changes** and is also the place to
reference issues that this commit **Closes**.

**Major Changes** should start with the word `MAJOR CHANGE:` with a space or two newlines. The rest of the commit message is then used for this.

A detailed explanation can be found in this [document][commit-message-format].


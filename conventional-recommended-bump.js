'use strict'

const parserOpts = require('./parser-opts')

module.exports = {
  parserOpts,

  whatBump: (commits) => {
    let level = 2
    let major = 0
    let docsUpdates = 0

    commits.forEach(commit => {
      if (commit.notes.length > 0) {
        major += commit.notes.length
        level = 0
      } else if (commit.type === 'docs' || commit.type === 'typo') {
        docsUpdates += 1
        if (level === 2) {
          level = 1
        }
      }
    })

    return {
      level: level,
      reason: major === 1
        ? `There is ${major} MAJOR CHANGE and ${docsUpdates} docs updates`
        : `There are ${major} MAJOR CHANGES and ${docsUpdates} docs updates`
    }
  }
}

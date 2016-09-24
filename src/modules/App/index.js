import model from './model'

import addEntry from './chains/addEntry'
import deleteEntry from './chains/deleteEntry'
import updateField from './chains/updateField'
import changeVisibility from './chains/changeVisibility'
import clearCompleted from './chains/clearCompleted'
import toggleEntryCompleted from './chains/toggleEntryCompleted'

export default module => {

  module.addModules({})

  module.addState(model)

  module.addSignals({
    addEntry,
    deleteEntry,
    updateField,
    changeVisibility,
    clearCompleted,
    toggleEntryCompleted,
  })
}

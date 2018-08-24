// ex...
// use a set to prevent duplicates...
possibleCategoryChips() {
  const chips = new Set();
  Object.values(this.props.tasks).forEach(task =>
    (task.ls_category_tags || []).forEach(tag => chips.add(tag))
  );
  return Array.from(chips).map(tag => ({
    value: tag,
    dropdown: tag,
    highlight: tag,
    search: [tag],
    chipProps: {
      label: tag,
    },
  }));
}

// this is sexy..
Array.from(new Set([...this.state.initialDocumentsAttached, ...docVers]))
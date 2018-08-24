<div
  className={classes.tabActionsTabUnderline}
  style={(() => {
    const ref = this[`${this.props.activeTab}Ref`].current;
    const rect = ref.getBoundingClientRect();
    return {
      width: rect.width,
      left: ref.offsetLeft,
    };
  })()}
/>
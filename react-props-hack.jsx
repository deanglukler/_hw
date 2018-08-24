<DocumentCreator
  metadataComponent={this.renderMetadataUpdater}
  deletedMetadata={this.state.deletedMetadata}
  initialDocumentsAttached={this.state.initialDocumentsAttached}
  handleMetadataSaveIndividual={this.handleMetadataSaveIndividual}
  saveDocumentsAttached={this.saveDocumentsAttached}
  onAttachButton={this.handleAttachDocuments}
  attachBtnEnabled={this.state.documentCreator.attachEnabled}
  onClose={this.handleDocumentCreatorClose}
  handleMetadataDeleteIndividual={this.handleMetadataDeleteIndividual}
  triggerSave={this.state.metadataUpdater.triggerSaveAll}
  setClean={() => this.metadataUpdaterState({ isClean: true })}
  setDirty={setDirty}
  // projectId={this.props.projectId}
  // versionInfo={this.props.versionInfo}
  // projectUserId={this.props.projectUserId}
  // documentVersions={this.props.documentVersions}
  // docsFromAttachments={this.props.docsFromAttachments}
  // onAddUploadedDocVers={this.props.onAddUploadedDocVers}
  // initialDocVersionsFetchResponded={
  //   this.props.initialDocVersionsFetchResponded
  // }
  {...[
    'projectId',
    'versionInfo',
    'projectUserId',
    'documentVersions',
    'docsFromAttachments',
    'onAddUploadedDocVers',
    'initialDocVersionsFetchResponded',
  ].reduce((pp, p) => ({ ...pp, [p]: this.props[p] }), {})}
/>
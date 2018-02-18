createCSVBlobLink() {
  const downloadData = this.props.downloadData;

  if (downloadData.length === 0) {
    this.setState({ CSVFile: null });
    return null;
  }

  const text = new Blob([convertToCSV(downloadData)], { type: 'text/csv' });
  const CSVFile = window.URL.createObjectURL(text);

  this.setState({ CSVFile });
}

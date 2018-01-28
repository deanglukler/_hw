<FormattedMessage
  id="notifications-main-header"
  defaultMessage="Notification Center"
/>

// -------------

// the following outputs: 'Hello Eric, you have 1,000 messages.'

<FormattedMessage
    id="welcome"
    defaultMessage={`Hello {name}, you have {unreadCount, number} {unreadCount, plural,
      one {message}
      other {messages}
    }`}
    values={{
      name: <b>{name}</b>,
      unreadCount,
    }}
/>

// -------------

const amountSelected = this.state.documentsSelected.length

<FormattedMessage
    id="doc-select-documents-selected"
    defaultMessage={`{value} {amountSelected, plural, one {document} other {documents}} ready for attachment`}
    values={{
      value: <span>{amountSelected}</span>,
      amountSelected,
    }}
/>

// -------------

<FormattedMessage
  id="data-grid-header"
  defaultMessage="{select} item(s) per page"
  values={{
    select: (
      <Select
        autoWidth
        value={this.state.resultsPerPage}
        onChange={this.handleResultsPPChange}
      >
        {this.resultsPerPageOptions.map(a => (
          <MenuItem key={a} value={a}>{a}</MenuItem>
        ))}
      </Select>
    ),
  }}
/>
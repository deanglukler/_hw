import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import RemoveCircle from '@fortawesome/fontawesome-pro-light/faMinusCircle';

<FontAwesomeIcon icon={RemoveCircle} onClick={this.onClick} />

import FAIcon from '@fortawesome/react-fontawesome';
import RemoveCircle from '@fortawesome/fontawesome-pro-light/faMinusCircle';

<FAIcon icon={RemoveCircle} onClick={this.onClick} />


// use materials icon button
<IconButton
  color="inherit"
  aria-label="More Actions"
  onClick={() => this.handleToggleDrawer(true)}
  classes={{ root: classes.iconRoot }}
  className={classes.iconMore}
>
  <FontAwesomeIcon icon={faEllipsisV} />
</IconButton>
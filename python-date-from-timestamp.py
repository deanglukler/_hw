>>> from datetime import datetime
>>> your_timestamp = 1331856000000
>>> date = datetime.fromtimestamp(your_timestamp / 1e3)
>>> date
datetime.datetime(2012, 3, 15, 17, 0)
>>> date = datetime.fromtimestamp(your_timestamp / 1e3).isoformat()
>>> date
'2012-03-15T17:00:00'
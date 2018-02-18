# old property create
def get_total_session_time(self):
    return get_time_passed(self.start_time, get_current_time())

def set_total_session_time(self):
    pass

total_session_time = property(get_total_session_time, set_total_session_time)

# new property create (python 2.7?)
@property
def total_session_time(self):
    return get_time_passed(self.start_time, get_current_time())

@total_session_time.setter
def total_session_time(self):
    pass
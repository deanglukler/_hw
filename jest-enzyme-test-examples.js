it('Should have a DialogTitle component with correct children props', () => {
  props.header = 'Subscribe To My Test';

  const wrapper = shlMountModal();
  expect(wrapper.find(DialogTitle).exists()).toBe(true);

  const headerProps = wrapper.find(DialogTitle).props().children;
  expect(headerProps).toBe(props.header);
  expect(headerProps).not.toBe('Not the correct header');
});



// tag tests
const wrapper = shallow(<ComponentName />);

expect(wrapper.find('h4').length).toBe(1);
expect(wrapper.find('h4').at(0).text()).toBe('Something');



// prop and state test
const wrapper = shallow(<ComponentName />);

expect(wrapper.state().data).toBe('something');
expect(wrapper.props().data).toBe('something');


// click test
const wrapper = shallow(<ComponentName />);

expect(wrapper.state().data).toBe('state1');
wrapper.find('button').simulate('click');
expect(wrapper.state().data).toBe('state2');



// style test
wrapper.find('.myClassname').get(0).style;
expect(containerStyle).to.have.property('opacity', '1');



// className test
const span = mount(<Test />).find('span');
expect(span.html().match(/style="([^"]*)"/i)[1]).toBe('color: #000;');


// --

expect(wrapper.find('DocumentSelector').length).toBe(1);

// --

mount()
const steps = wrapper.find('Step')
const step1 = steps.get(0)
const step2 = steps.get(1)
expect(step1.props.active).toBe(true)
expect(step2.props.active).toBe(false)





















